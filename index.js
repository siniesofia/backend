const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(express.json())


morgan.token('person', (request, response) => {
  return JSON.stringify(request.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :person'))



let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abranoc",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppen",
        number: "39-23-6423122"
      }   
  ]

app.get('/', (req, res) => {
res.send('<p>Sovelluksen backend, eli palvelimella oleva toiminnallisuus</p>')
})

app.get('/api/persons', (req, res) => {
res.json(persons)
})

const infosivu = () => {
    return `<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p>`
  }

app.get('/api/info', (req, res) => {
    console.log(infosivu())
    res.send(infosivu())
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    
  })

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const id = Math.floor(Math.random() * 100)
  const nameandnumber = request.body

  if (!nameandnumber.name) {
    return response.status(400).json({ 
      error: 'name missing' 
    })
  }

  if (!nameandnumber.number) {
    return response.status(400).json({ 
      error: 'number missing' 
    })
  }

  const lista = persons.filter(person => person.name.toLowerCase() === nameandnumber.name.toLowerCase())
  console.log('lista', lista)
  
  if (lista.length !== 0) {
    return response.status(400).json({ 
      error: 'name must be unique' 
    })
  }

  const person = Object.assign({id: id}, nameandnumber)
  persons = persons.concat(person)
  response.json(person)

})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)


const PORT = 3001
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})
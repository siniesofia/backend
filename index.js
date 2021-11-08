const express = require('express')
const app = express()

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        date: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        date: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abranoc",
        date: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppen",
        date: "39-23-6423122"
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

const PORT = 3001
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})
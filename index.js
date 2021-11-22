require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(express.static('build'))
app.use(express.json())
const cors = require('cors')
app.use(cors())

const Person = require('./models/person')
const { response } = require('express')

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

morgan.token('person', (request, response) => {
  return JSON.stringify(request.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :person'))

let people = [
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

app.get('/api/people', (request, response) => {
  Person.find({}).then(people => {
    response.json(people)
  })
})

const infosivu = (people) => {
    const length = people
    return `Phonebook has info for ${length} people ${new Date()}`
  }

app.get('/api/info', (request, response) => {
  Person.count({}).then(people => {
    response.json(infosivu(people))
  })
})

app.get('/api/people/:id', (request, response, next) => {
  Person.findById(request.params.id)
  .then(person => {
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })
  .catch(error => next(error))

  })

  //   const id = Number(request.params.id)
  //   const person = people.find(person => person.id === id)
  //   if (person) {
  //       response.json(person)
  //     } else {
  //       response.status(404).end()
  //     }
    
  // })

app.delete('/api/people/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
  // const id = Number(request.params.id)
  // people = people.filter(person => person.id !== id)

  // response.status(204).end()
})

app.put('/api/people/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})


app.post('/api/people', (request, response) => {
  const body = request.body

  if (body.name === undefined) {
    return response.status(400).json({ error: 'name missing' })
  }

  if (body.number === undefined) {
    return response.status(400).json({ error: 'number missing' })
  }
  
  // const id = Math.floor(Math.random() * 100)
  // const nameandnumber = request.body

  // const lista = people.filter(person => person.name.toLowerCase() === nameandnumber.name.toLowerCase())
  // console.log('lista', lista)
  
  // if (lista.length !== 0) {
  //   return response.status(400).json({ 
  //     error: 'name must be unique' 
  //   })
  // }

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })

  // const person = Object.assign({id: id}, nameandnumber)
  // people = people.concat(person)
  // response.json(person)

})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

app.use(errorHandler)


const PORT = process.env.PORT
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})
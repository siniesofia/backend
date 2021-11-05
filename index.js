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
res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
res.json(persons)
})

const infosivu = () => {
    const maxId = 1
    return '<h1>Lets change this</h1>'
  }

app.get('/api/info', (req, res) => {
    console.log(infosivu())
    res.send(infosivu())
})

const PORT = 3001
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})
const express = require('express')
const app = express()
var morgan = require('morgan')

morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
})

morgan.token('postdata', (req) => {
  return req.method === 'POST'? JSON.stringify(req.body): ''
}
)

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :postdata'))
app.use(express.json())

let data = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.get('/info', (request, response) => {
  response.send(
    `<p>Phonebook has info for 2 people<p>
     <p>Wed Sep 14 2023 GMT (Eastern Habibi Standard Time)<p> `)
})

app.get('/api/persons', (request, response) => {
  response.json(data)
})

app.get('/api/persons/:id', (request, response) =>{
  const id = Number(request.params.id)
  const foundPerson = data.filter(person => person.id === id)
  response.json(foundPerson)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const afterDeletion = data.filter(person => person.id != id)
  response.json(afterDeletion)
}
)

function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1))  + min
}

app.post('/api/persons', (request, response) => {
  const id = randomNumber(5, 99)
  const body = request.body
  if (!body.name || !body.number){
    return response.status(400).json(
      {
        error: 'The name or number is missing'
      }
    )
  }

  const alreadyExisting = data.find(person => person.name === body.name)

  if(alreadyExisting){
    return response.status(400).json(
  {
    error: 'The name already exists in the record'
  }
)}

  const person = { 
    id: id,
    name: body.name, 
    number: body.number
  }

  data = data.concat(person)
  response.json(data)
})


  morgan(':method :url :status :res[content-length] - :response-time ms')



const PORT = 3001
app.listen(PORT, () =>{
  console.log(`Sever is running on PORT:${PORT}`)
})


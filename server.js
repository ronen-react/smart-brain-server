const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt-nodejs');
//installed bcrypt-nodejs
const cors = require('cors');
const knex = require('knex') 
const register = require('./controllers/register')
const signin = require('./controllers/signin')
const image = require('./controllers/image')
const profile = require('./controllers/profile')



// taken from knex site
const db = knex({  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'ronen',
    password : 'password',
    database : 'smart-brain'
  }
});

// console.log(db.select('*').from('users'))

// db.select('*').from('users').then (data=> {
// 	console.log(data)
// });

const app = express()
app.use(bodyParser.json())
app.use(cors())

// const database = {
// 	users: [
// 		{
// 			id: '123',
// 			name: 'john',
// 			email: 'john@email.com',
// 			password: 'password',
// 			entries: 0,
// 			joined: new Date()
// 		},
// 		{
// 			id: '125',
// 			name: 'sally',
// 			email: 'sally@email.com',
// 			password: 'banana',
// 			entries: 0,
// 			joined: new Date()
// 		}
// 	],
// 	login: [
// 		{
// 			id: '987',
// 			hash: '',
// 			email: 'john@email.com',
// 		}
// 	]
// }


app.get('/', (req, res)=> { res.send(db.users) })
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt)}) // db, bcrypt are module injections
app.post('/signin', signin.handleSignin(db, bcrypt)) // another wa - ES6 format
app.get('/profile/:id', (req, res) => {profile.handleProfileGet(req, res, db)}) 
app.put('/image', (req, res) => {image.handleImage(req, res, db)})
app.put('/imageUrl', (req, res) => {image.handleApiCall(req, res)})


app.listen(process.env.PORT || 3000,() => {
	console.log('app is running on port ${process.env.PORT}')
})



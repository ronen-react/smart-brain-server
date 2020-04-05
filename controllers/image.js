const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: 'd05958c650c74c968cc62037f3f736e7'
});

 const handleApiCall = (req, res) => {
 	app.models
      .predict(
    // Clarifai.GENERAL_MODEL,
      "a403429f2ddf4b49b307e318f00e528b",
          req.body.input)
      .then(data => {
      	// console.log(data)
      	res.json(data);
      })
      .catch(err => res.status(400).json('unable to call api'))


  }

const handleImage = ((req, res, db) => {
	const {id}  = req.body
	// let found = false
    console.log(id)

    db('users').where('id', '=', id)
  	.increment('entries', 1)
  	.returning('entries')
  	.then(entries =>{
  		console.log(entries)
  		res.status(200).json(entries[0])
  	}).catch(error=>(
	  	res.status(400).json('system error')
	  ))
  })


module.exports = {
	handleImage: handleImage,
	handleApiCall // ES6

}


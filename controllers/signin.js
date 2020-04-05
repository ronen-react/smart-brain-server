const handleSignin = (db, bcrypt)=>(req, res) => {
			const {email, password} = req.body //distructor
			if (!email || !password){
				return res.status('400').json('incorrect form submission')
			}
			console.log('req.body.password', req.body.password)
			db.select('email', 'hash').from('login')
			.where('email', '=', email)
			.then(data =>{
				const isValid = bcrypt.compareSync(password, data[0].hash); // true # taken from bcrypt-nodejs page
				if (isValid){
					return db.select('*').from('users')
					.where('email', '=', email)
					.then(user => {
						res.json(user[0])
					})
					.catch(err => res.json.status(400).json('unable to get user'))


				}else{
					res.status(400).json('wrong password')
				}
			}).catch(err => res.status(400).json('wrong credentials'))
			// bcrypt.compare("password", '', function(err, hash) {
			// });
			// if(req.body.email === database.users[0].email && 
			// 	req.body.password ===  database.users[0].password){
			// 	res.json(database.users[0]);
			// }else{
			// 	res.status(400).json('error loggin in')
			// }
		}
	
module.exports = {
	handleSignin: handleSignin
}

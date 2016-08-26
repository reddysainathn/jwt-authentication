# Installation

```
git clone https://github.com/girishvarma/jwt-authentication.git
npm install
```
# Usage
Create a file called `config.js` in the root directory as below and add your db configuration

```
module.exports = {
	"dev": {
		"db": {
			"dbUri": "",
			"dbPort": "",
			"dbName": "",
			"username": "",
			"password": ""
		},
		"jwt": {
			"secretKey": "your jwt secret key"
		}
	}
}
```

# Starting the App
```
npm run dev
```
and access the app at `http://localhost:9000/`
# Routes
### signup
Creates a user if not existed, and returns a jwt token 
#### URL
`POST http://localhost:9000/signup`

#### Request Body
```
{
  "email":"admin@gmail.com",
  "password":"admin"
}
```
#### Response
```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE0NzIyMDAzNDN9.YiFlYu374RyDVC2sjgAga-nwhDXV0HP9ZLvvx8w4M5Q"
}
```

### login
Authenticates the user and returns a token
#### URL
`POST http://localhost:9000/login`

#### Request Body
```
{
  "email":"admin@gmail.com",
  "password":"admin"
}
```
#### Response
```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE0NzIyMDAzNDN9.YiFlYu374RyDVC2sjgAga-nwhDXV0HP9ZLvvx8w4M5Q"
}
```
### movies (Protected Route)
Verifies the JWT token and allows access if the token is valid
#### URL
`POST http://localhost:9000/movies`
#### Headers
```
Authorization	JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE0NzIyMDA4MDJ9.9viCpAFsD22KASWv5nlXcamvXDAmctp4AgvYtahSVPA
```
#### Request Body
```
{
  "email":"admin@gmail.com",
  "password":"admin"
}
```
#### Response
```
{
  "message": "Movied Added"
}
```


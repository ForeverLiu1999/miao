const express = require('express');

const port = 8080;

const app = express();

const user = [];

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
})

app.use(express.urlencoded({extended: true})); // 解码中间件

app.get('/', (req, res, next) => {
  res.end(`
    <div><a href = "/">homepage</a></div>
    <div><a href = "/register">Register</a></div>
    <div><a href = "/login">Login</a></div>
  `);
})

app.get('/register', (req, res, next) => {
  res.type('html');
  res.end(`
    <h1>Register</h1>
    <form action = "/register" method = "post">
      <div>Name: <input type = "text" name = "name"></div>
      <div>Email: <input type = "email" name = "email"></div>
      <div>Password: <input type = "password" name = "password"></div>
      <div>Password: <input type = "password" name = "password1"></div>
      <button>Submit</button>
    </form>
  `)
})

app.post('/register', (req, res, next) => {
  var regInfo = req.body;

  if (regInfo.password !== regInfo.password1) {
    res.end('two password not equal');
  }

  if (users.some(it => it.name == regInfo.name)) {
    res.end('username already exists');
  }

  if (users.some(it => it.email == regInfo.email)) {
    res.end('email already exists');
  }

  var user = {
    name: regInfo.name,
    email: regInfo.email,
    password: regInfo.password,
  }

  users.push(user);
  res.end('register success');
})

app.listen(port, () => {
  console.log('Listening on', port);
})
import http from 'http';

const request = http.get(`http://localhost:3080`, (res) => {
  res.setEncoding()
  res.on('data', (data) => {

    console.log(data)
  })
})

request.end();

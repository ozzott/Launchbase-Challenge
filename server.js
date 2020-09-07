const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const courses = require('./data')

server.use(express.static('public'))

server.set('view engine', "njk")

nunjucks.configure('views', {
    express:server
})

server.get('/about', function(req, res) {
    const about = {
        logo_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhAz1p0uO69e2d91UxZNslLAqTGse2dYyZAQ&usqp=CAU",
        title:"Rocketseat",
        description:"As melhores tecnologias em programação, direto ao ponto e do jeito certo. No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa."
    }
    return res.render('about', { about })
})

server.get('/courses', function(req, res) {
    return res.render('courses', { items:courses })
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });
  
server.listen(5500, function(){
    console.log('server is running')
})

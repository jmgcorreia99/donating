const express = require("express"); 
const server = express(); 
const nunjucks = require("nunjucks"); 


//configurar o servidor para apresentar arquivos estaticos

server.use(express.static('./public'))

//configurando a template engine
nunjucks.configure('./', {
    express:server,
    noCache: true,
})

//lista de doadores: Array
const donors = [

    {
        name: "Diego Fernandes",
        blood: "AB+"
    },
    {
        name: "Renato Auugusto",
        blood: "O+"
    },
    {
        name: "Jadson",
        blood: "O-"
    },
    {
        name: "Diego Fernandes",
        blood: "AB+"
    }

]

//configurar a apresentação da pagina
server.get('/', function(req, res){

    return res.render("index.html", {donors} )
})

//ligar o servidor e permitir o acesso na porta
server.listen(3000,function(){
    console.log("server starded")
}); 
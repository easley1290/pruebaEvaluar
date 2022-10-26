const express = require('express');
const axios = require('axios');
const app = express();

//
app.get('/', (req, res)=>{
    var iPrm = req.query.i;
    var apiPrm = req.query.apikey;
    var tPrm = req.query.t;
    var objeto = [{
        mensaje: "",
        estado: ""
    }];
    //?i=tt3896198&apikey=32b0c60c&t=thor
    //drivadeneira@grupocentrico.com
    axios.get('http://www.omdbapi.com/', {
        params: {
            i: iPrm,
            apiKey:apiPrm,
            t:tPrm
        }
    }).then((respu)=>{
        objeto[0].mensaje = 'Exito';
        objeto[0].estado = respu.status;
        res.send(objeto);
        console.log(respu.data);
    }).catch((error)=>{
        objeto[0].mensaje = 'Error';
        objeto[0].estado = respu.status;
        res.send(objeto);
        console.log(error);
    });
    
});
app.listen(4000);
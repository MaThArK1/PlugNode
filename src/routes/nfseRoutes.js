import express from "express";
import axios from "axios";
const app = express();

const nfse = express.Router();

//consultar NFSe
nfse.get("/consulta/:id", async (req, res) => {
  const id = req.params.id;

  var config = {
    method: "get",
    url: `https://api.sandbox.plugnotas.com.br/nfse/${id}`,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "2da392a6-79d2-4304-a8b7-959572c7e44d",
    },
  };

  try {
    const { data } = await axios(config);
    return res.json(data);
  } catch (error) {
    res.send(error.response.data);
  }
});

//Enviar NFSe
nfse.post("/emitir", async (req, res) => {
  var data = req.body;
  var config = {
    method: "post",
    url: "https://api.sandbox.plugnotas.com.br/nfse",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "2da392a6-79d2-4304-a8b7-959572c7e44d",
    },
    data: data,
  };

  try {
    const { data } = await axios(config);
    return res.json(data);
  } catch (error) {
    res.send(error.response.data);
  }
});

//Consultar xml
nfse.get("/xml/:idXml", async (req,res) =>{
  const idXml = req.params.idXml;
  var config = {
    method: "get",
    url: `https://api.sandbox.plugnotas.com.br/nfse/xml/${idXml}`,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "2da392a6-79d2-4304-a8b7-959572c7e44d",
    }
  }

  try{
    const {data} = await axios(config);
    return res.json(data);
  } catch(error){
    res.send(error.response.data);
  }
})

export default nfse;

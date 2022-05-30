import express from "express";
import axios from "axios";
const app = express();

const nfse = express.Router();

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
  } catch (response) {
    res.send(response);
  }
});

export default nfse;

import app from './src/app.js'
import cors from "cors"


const port = process.env.PORT || 3000;

app.use(cors())

app.listen(port, () =>{
    console.log(`O servidor escutando em http://localhost:${port}`)
})


/*app.get('/consulta', async (req,res) =>{
    const {data} = await axios({
        method: "get",
        url: "https://api.sandbox.plugnotas.com.br/nfse/617950f93039073516f22ff1",
        headers:{
            'Content-Type': 'application/json', 
            'x-api-key': '2da392a6-79d2-4304-a8b7-959572c7e44d'
        }
    })
    return res.json(data)
})*/

//
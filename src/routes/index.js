import express from "express";
import nfse from "./nfseRoutes.js";

const routes = (app) =>{
app.route('/').get((req, res) =>{
    res.status(200).send({titulo: "PlugNode"})
})

    app.use(
        express.json(),
        nfse
    )
}

export default routes
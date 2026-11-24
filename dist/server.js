import express from "express";
const app = express();
app.use(express.json); // pro express entender o json enviado
app.listen(process.env.PORT, () => {
    console.log("servidor iniciado");
});
//# sourceMappingURL=server.js.map
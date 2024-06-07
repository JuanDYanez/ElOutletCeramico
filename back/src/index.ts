import express from "express";
import ceramics from "./routes/ceramicsRouter";
const app = express();

const PORT = 3000;

// Middleware para analizar cuerpos de solicitud JSON
app.use(express.json());

app.use("/ceramics", ceramics);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
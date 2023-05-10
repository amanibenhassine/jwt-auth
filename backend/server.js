const express =require ("express")
const cors= require ("cors")
const bodyParser =require("body-parser")
require("dotenv").config();



const app = express();
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const Port =process.env.Port || 8080;

app.listen(Port,()=>
{
    console.log("server work");
})
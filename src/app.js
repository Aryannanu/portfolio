const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors({
    origin: "http://127.0.0.1:5500"
}));
const path = require("path");

app.use(
    "/images",
    express.static(
        path.join(__dirname, "../images")
    )
);

app.use(
    "/resumes",
    express.static(
        path.join(__dirname, "../resumes")
    )
);

const {connectDb} = require("./config/database");
const developerRouter = require("./routes/developer.route");
app.use(developerRouter);
const serviceRouter = require("./routes/serviceDev.route");
app.use(serviceRouter);
const projectRouter = require("./routes/project.route");
app.use(projectRouter);
const resumeRouter = require("./routes/resume.route");
app.use(resumeRouter);
const contactRouter = require("./routes/contact.route");
app.use(contactRouter);

connectDb().then(()=>{
    app.listen(5008,()=> {
         console.log("app is running at 5008")
    })
}).catch((error)=> {
    console.log("db connection failed",error)
})
import express from "express"
import postRoutes from "./routes/posts.js"
/*
import userRoutes from "./routes/auth.js"
import authRoutes from "./routes/users.js" */ 

// express initialized 
const app = express()

// We have used use method in order to access MYSQL workbrench
app.use(express.json())
app.use("/api/posts", postRoutes)

// The first property specify the port number ==> 8080 
app.listen(8080,() => {
    console.log("App was connected")
})

/*
app.get('/myapp/', function(req, res){
    res.send("Hello from the root application URL");
});

app.get('/myapp/test/', function(req, res){
    res.send("Hello from the 'test' URL");
}); */ 

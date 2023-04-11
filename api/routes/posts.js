import express from "express"
import { addPost } from "../controllers/post.js"


const router = express.Router()

/*
router.get("/",(req,res) => {
    res.send("test asasdadsdads")
    console.log("sayfaya ulasıldı")
})  

*/

// Browserda localhost:8080/api/post/test yazarsan sana bir response donecek
// controllers sayfasında okuma işlemlerini gerçekleştireceğiz. 
router.get("/test", addPost)
export default router
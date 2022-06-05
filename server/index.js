import express  from "express";

const app = express();
  
app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
  });
  
const PORT = process.env.PORT || 5000;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));
require('dotenv').config();
const express= require('express');
const app= express();
const PORT=5000;
const users=[];
app.set('view-engine','ejs')
app.use
const posts=[
    {
        username: 'nandini',
        password: 'aroraqwerty',
        email: 'nandini567@gmail.com'
    },
    {
        username: 'shaurya',
        password: '1234567',
        email: 'shaurya@gmail.com'
    },
    {
        username: 'ruru',
        password: 'mia@234',
        email: 'rurur345@gmail.com'
    }
]

app.get('/',(req,res)=>{
    res.render('index.ejs',{ name: 'nandini' })
})
app.get('/login',(req,res)=>{
    res.render('login.ejs')
})
app.get('/register',(req,res)=>{
    res.render('register.ejs')
})
app.get('/posts',(req,res)=>{
    res.json(posts)
})
app.post('/login',(req,res)=>{

})
app.post('/register',async(req,res)=>{
  try{
    const hashedpswd = await bcrypt.hash(req.body.password,10)
    users.push({
        id:Date.now().toString(),
        name:req.body.name,
        email:req.body.email,
        password:hashedpswd
    })
    res.redirect('/login')
  } catch{
    res.redirect('/register')
  } 
})
app.post('/login',(req,res)=>{
//Authnticate user

const username= req.body.username;
const user={name:username}

const accesstoken = jwt.sign(user,process.env.ACCESS_TOKEN)
res.json({accesstoken: accesstoken})
})



app.listen(PORT,(req,res)=>{
    console.log("server is up and running")
})
const router = require('express').Router();
const User = require('../models/userModel')
router.get('/',(req,res)=>{
    res.render('websit');
});
router.get('/about',(req,res)=>{
   res.render('about');
});
router.get('/albeta',(req,res)=>{
   res.render('albeta');
});
router.get("/contact", (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.render("contact1");
    return;
  }); 
router.get('/cutsize',(req,res)=>{
   res.render('cutsize');
});
router.get('/dungari',(req,res)=>{
   res.render('dungari');
});
router.get('/getAquote',(req,res)=>{
   res.render('getAquote');
});
router.get('/kumari',(req,res)=>{
   res.render('kumari');
});
router.get('/services',(req,res)=>{
   res.render('services1');
});
router.get('/specialdesign',(req,res)=>{
   res.render('specialdesign');
});

router.post("/signup", async (req, res) => {
    try {
      console.log(req.body);
      var name = req.body.name;
      var email = req.body.email;
      var mobileno = req.body.mobileno;
      var message = req.body.message;
  
      var data = {
        name: name,
        email: email,
        mobileno: mobileno,
        message: message,
      };
  
      const user = await User.create(data);
      console.log(user);
      res.redirect('contact');
    } catch (error) {
      console.log(error);
    }
  }); 

module.exports = router;
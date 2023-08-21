const router = require('express').Router();
const User = require('../models/userModel')
router.get('/',(req,res)=>{
    res.render('websit',{   //dynamically assign homepage title
       title:'My Home Page'
    });
});

router.get('/about',(req,res)=>{
   res.render('about',{   
       title:'My About Page'
    });
});
router.get('/albeta',(req,res)=>{
   res.render('albeta',{   
       title:'Albeta Page'
    });
});

router.get("/contact", (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.render("contact1", {
      title: "My Contact Page",
    });
    return;
  });
  
  
router.get('/cutsize',(req,res)=>{
   res.render('cutsize',{   
       title:'CutSize Page'
    });
});
router.get('/dungari',(req,res)=>{
   res.render('dungari',{   
       title:'Dungari Page'
    });
});
router.get('/getAquote',(req,res)=>{
   res.render('getAquote',{   
       title:'getAquote Page'
    });
});
router.get('/kumari',(req,res)=>{
   res.render('kumari',{   
       title:'Kumari Page'
    });
});
router.get('/services',(req,res)=>{
   res.render('services1',{   
       title:'My Service Page'
    });
});
router.get('/specialdesign',(req,res)=>{
   res.render('specialdesign',{   
       title:'SpecialDesign Page'
    });
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
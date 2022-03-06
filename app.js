const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/pages/landing.html'));
  });

  router.get('/login',function(req,res){
    res.sendFile(path.join(__dirname+'/pages/login.html'));
  });

  router.get('/history',function(req,res){
    res.sendFile(path.join(__dirname+'/pages/history.html'));
  });
  
  router.get('/add-complaint',function(req,res){
    res.sendFile(path.join(__dirname+'/pages/add-complaint.html'));
  });
  
  router.get('/user-view-complaint',function(req,res){
    res.sendFile(path.join(__dirname+'/pages/user-view-complaints.html'));
  });

  router.get('/user-add-complaint-review',function(req,res){
    res.sendFile(path.join(__dirname+'/pages/user-add-complaint-review.html'));
  });
  
  //add the router
  app.use('/', router);
  app.listen(process.env.port || 3000);
  
  console.log('Running at Port 3000');
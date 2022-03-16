const express = require('express')
const router = express.Router()
const { skills } = require ('../db/data.json')
const {setSkills,addProd}=require('../db/index.js')
const path= require('path')
const formidable = require('formidable')
const fs=require('fs')

router.get('/', (req, res, next) => {
  res.render('pages/admin', { title: 'Admin page',skills 
})
})

router.post('/skills', (req, res, next) => {
 try {
   setSkills(req.body)
   console.log(skills[2].number);
  } catch (err) {
    console.log(err);
  }
  res.redirect('/admin')
})

router.post('/upload', (req, res, next) => {
  const form = new formidable.IncomingForm();
  const upload = path.normalize("public/assets/img/products");

  form.uploadDir = path.join(process.cwd(), upload);

  form.parse(req, function (err, fields, files) {
    if (err) {
      console.log(err);
      res.redirect("/admin");
    }

    const { name, price } = fields;

    if (!name && !price) {
      res.redirect("/admin");
    }

    const fileName = path.join(upload, files.photo.originalFilename);

    fs.rename(files.photo.filepath, fileName, (err) =>{
      if (err) {
       console.log(err);
        res.redirect("/admin");
      }

       addProd(fields, files.photo.originalFilename);
      console.log(err);
      res.redirect("/admin");
    });
  });
})

module.exports = router

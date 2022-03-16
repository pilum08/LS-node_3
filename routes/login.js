const express = require('express')
const router = express.Router()



router.get('/', (req, res, next) => {
  if(req.session.isAdmin) {
    res.redirect('/admin')
  }
  res.render('pages/login', { title: 'SigIn page'})
})

router.post('/', (req, res, next) => {
  // TODO: Реализовать функцию входа в админ панель по email и паролю
  if (req.body.email==='test@test.com' && req.body.password==='123123'){
    req.session.isAdmin=true
    res.redirect('/admin')
  }
  res.redirect('/login')
})

module.exports = router


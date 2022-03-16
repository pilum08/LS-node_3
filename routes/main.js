const express = require('express')
const router = express.Router()
const { products, skills } = require ('../db/data.json')
const nodemailer = require('nodemailer')
const config = require('../configMail.json')

router.get('/', (req, res, next) => {
  res.render('pages/index', { title: 'Main page', products, skills })
})

router.post('/', (req, res, next) => {
  // TODO: Реализовать функционал отправки письма.
  if (!req.body.name || !req.body.email || !req.body.message) {

    req.flash('info', "Все поля нужно заполнить!")
    res.redirect('/#form');
    return
  }

  const transporter = nodemailer.createTransport(config.mail.smtp)
  const mailOptions = {
    from: `"${req.body.name}" <${req.body.email}>`,
    to: config.mail.smtp.auth.user,
    subject: config.mail.subject,
    text:
      req.body.message.trim().slice(0, 500) +
      `\n Отправлено с: <${req.body.email}>`
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      req.flash('info', error.message)
      res.redirect('/#form');
    } else {
      req.flash('info', "Письмо успешно отправлено")
      res.redirect('/#form');
    }
  })
})

module.exports = router
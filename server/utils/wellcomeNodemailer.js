const nodemailer = require('nodemailer');

//Mensaje que se remite al usuario cuando se da de alta para dar la bienvenida y la contraseña. 
async function main(email, name, password) {
  //creamos un transporter reutilizable SMTL
  let transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: 465,  //de google
    secure: true, // se indica "true" al user el puerto 465.
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
    }
  })

  // send mail con el transport creado
  let info = await transporter.sendMail({
    from: '"Swap Your Travel" <adm.swapyourtravel.2023@gmail.com>',
    to: email,
    subject: "Bienvenido a Swap Your Travel",    
    html: `<!doctype html>
    <html ⚡4email>
      <head>
        <meta charset="utf-8">
        <style amp4email-boilerplate>body{visibility:hidden}</style>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
      </head>
      <body>
       <h3>Hola  ${name}. Te damos la bienvenida a Swap Your Travel.</h3> 
       <p>Ya puedes empezar a swapear!!!.</p>
       <p>Te recordamos que tu contraseña es: ${password}</p>
      </body>
    </html>`   
  })
  
}

module.exports = { main }
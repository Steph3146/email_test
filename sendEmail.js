const mailer = require('./mailer');

mailer.sendMail(
  {
    from: 'stephanie.malbert@live.fr',
    to: 'lawarrior31@gmail.com',
    subject: 'This is a test email',
    text: 'Hello world',
    html: '<p>Hello <em>world</em></p>',
  },
  (err, info) => {
    if (err) console.error(err);
    else console.log(info);
  }
);
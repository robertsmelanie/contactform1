# Contact Form Project

This project is a simple HTML + Node.js contact form that sends an email using Nodemailer and Gmail.

---

## 🔐 Gmail App Password Setup

To send email through Gmail:

1. Go to: (https://myaccount.google.com/apppasswords)
2. Make sure 2-Step Verification is enabled
3. Generate an App Password
4. Paste the password in `.env` like this:

EMAIL_USER=your_gmail@gmail.com EMAIL_PASS=abcdefghijklmnop



⚠️ **Remove all spaces from the App Password!** Gmail shows spaces, but they don’t belong in the `.env` file it is just for the benefit of reading the characters.

---

## 💡 Notes

- `.env` and `node_modules/` are in `.gitignore`
- Server runs on `localhost:3000`
- Form submits to `/contact` via POST
- Use `node server.js` to start the backend
Go here 👉 https://myaccount.google.com/apppasswords


Will continue to develop the contact form.
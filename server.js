const express = require('express');
const app = express();
const PORT = 3000;

// When someone goes to your website home page, show them this message
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>My Live App</title></head>
      <body style="font-family: Arial; text-align: center; margin-top: 50px;">
        <h1>🚀 Hello World! My Website is Live!</h1>
        <p>This Node.js application was built and deployed automatically using GitHub Actions.</p>
      </body>
    </html>
  `);
});

// Turn on the website listener
app.listen(PORT, () => {
  console.log(`Server is running smoothly on http://localhost:${PORT}`);
});

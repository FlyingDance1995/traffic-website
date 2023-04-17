const express = require('express')
// const ngrok = require('ngrok');
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)

    // ngrok.connect(port, function (err, url) {
    //     console.log(`Node.js local server is publicly-accessible at ${url}`);
    // });
})


// await ngrok.disconnect(url); // stops one
// await ngrok.disconnect(); // stops all
// await ngrok.kill(); // kills ngrok process
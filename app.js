const express = require(express),
          ejs = require(ejs),
          app = express();

const port = process.env.PORT || 3000,
        IP = process.env.IP;

app.listen(port, IP, () => {
    console.log(`Server is up on port ${port}`)
})

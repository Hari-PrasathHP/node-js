const express = require('express')

const app = express()

app.get('/all', (req, res) => {
    res.send({ 
        message: 'ok' 
    })
})

// get
// post
// put //update
// delete

app.listen(3000, () => {
    console.log(`server upon running in port 3000`)
})
const express = require('express');
const bodyParser = require('body-parser');
// const {google} = require('googleapis');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(3000, () => console.log('app has been started'))

app.get('/', (req, res)=> {
    return res.json('Server is working')
})

app.post('/', (req, res) => {
    console.log('ping was performed')
    console.log(req.body)

    if(req.body.type === 'MESSAGE') return res.json({text: `I've got an message`})
})

app.post('/min-delay', async (req, res) => {
    console.log('ping was performed')
    await setTimeout(()=>{}, 60000);
    console.log(req.body)
    if(req.body.type === 'MESSAGE') return res.json({text: `I've got an message`})
})
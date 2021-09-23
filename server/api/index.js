const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/client', require('./controllers/clientController'));
//app.use('/api/vehicle', require('./controllers/vehicleController'));

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`);
});
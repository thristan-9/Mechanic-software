const express = require('express');
const bodyParser = require('body-parser');
const crud = require('./crud');
const ref = require('./ref');
var CONST = require('./CONSTANTS');

var router = express.Router();
router.use(bodyParser.json({ limit: '50mb' }));


router.post('/create', async (req, res) => {
    var data = req.body;
    create(data, { namespace: "dev" },(err,ret)=>{
        return res.json(ret);
    });
});

function create(data,user,cb){
    if (data && data.ClientData) {
        createClient(data.ClientData,user, (err, client) => {

            if (data.VehicleData) {
                data.VehicleData.ClientId = client._id;

                ref.vehicleController.createVehicle(data.VehicleData, user, (err, vehicle) => {

                    client.VehicleIds = [vehicle._id];
                    crud.update(CONST.Client.Kind, client._id, client,user,(err,ret)=>{
                        return cb(err, { clientId: client._id, vehicle });
                    })

                });
            } else
                return cb({client});

        });
    } else
        return cb({msg: "ClientData undefined"});
}

function createClient(data,user,cb){
    crud.create(CONST.Client.Kind, data, user, (err, ret) => {
        return cb(err, ret);
    });
}


router.get('/get', async (req, res) => {
    var data = req.body;
    crud.read(CONST.Client.Kind, data._id, {namespace:"dev"},(err,ret)=>{
        return res.json(ret);
    }); 
});

router.get('/list', (req, res) => {

});

router.post('/update', (req, res) => {

});

router.post('/delete', (req, res) => {

});

module.exports = router;
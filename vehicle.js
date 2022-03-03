const express = require('express');
const bodyParser = require('body-parser');
const crud = require('./crud');
var CONST = require('./CONSTANTS');

var router = express.Router();
router.use(bodyParser.json({ limit: '50mb' }));

router.post('/create', async (req, res) => {
    var data = req.body;
    create(data, { namespace: "dev" }, (err, ret) => {
        return res.json(ret);
    });
});

function create(data, user, cb) {
    if (data.VehicleData) {
        ref.vehicleController.createVehicle(data.VehicleData, user, (err, vehicle) => {
            return cb(err, { client, vehicle });
        });
    } else
        return cb({ msg: "data.VehicleData undefined"});
}


function createVehicle(data, user, cb) {
    crud.create(CONST.Vehicle.Kind, data, user, (err, ret) => {
        console.log("ret  Vehicle", ret);
        return cb(err, ret);
    });
}


router.get('/get', async (req, res) => {
    var data = req.body;
    crud.read(CONST.Vehicle.Kind, data._id, { namespace: "dev" }, (err, ret) => {
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
module.exports.createVehicle = createVehicle;
var express = require('express');
var router = express.Router();
var CategoryModel = require('../categoryschema');
var mongoose = require('mongoose');

// Connecting to database
var query = 'mongodb://localhost:27017/categorys_db'

const db = (query);
mongoose.Promise = global.Promise;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (error) {
    if (error) {
        console.log("Error!" + error);
    }
});


router.get('/categorys', function (req, res, next) {
    CategoryModel.find(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send(data);
        }
    });
});

router.post('/category', function (req, res, next) {
    var newCategory = new CategoryModel();
    newCategory.title = req.body.title;
    newCategory.link = req.body.link;
    newCategory.checked = req.body.checked ;

    console.log(req)

    newCategory.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

router.delete('/category/:id', function (req, res, next) {
    var objectId = mongoose.Types.ObjectId(req.params.id);
    console.log(objectId, req.params.id)
    CategoryModel.deleteOne({ _id: objectId },
        function (err, data) {
            if (err) {
                console.error(err);
            } else {
                res.send(data);
            }
        });
});
router.put('/category', function (req, res, next) {
    CategoryModel.findByIdAndUpdate(req.body._id,
        {
            link:req.body.link,
            title:req.body.title,
            checked:req.body.checked         
        }, 
        function (err, data) {
            if (err) {
                console.error(err);
            }
            else {
                res.send(data);
                console.log("Data updated!");
            }
        });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var BookModel = require('../booktitleschema');
var mongoose = require('mongoose');

router.get('/books', function (req, res, next) {
    BookModel.find(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send(data);
        }
    });
});

router.post('/book', function (req, res, next) {
    var newBookTitle = new BookModel();
    newBookTitle.title = req.body.title;

    console.log(req)

    newBookTitle.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

router.delete('/book/:id', function (req, res, next) {
    var objectId = mongoose.Types.ObjectId(req.params.id);
    console.log(objectId, req.params.id)
    BookModel.deleteOne({ _id: objectId },
        function (err, data) {
            if (err) {
                console.error(err);
            } else {
                res.send(data);
            }
        });
});
router.put('/book', function (req, res, next) {
    BookModel.findByIdAndUpdate(req.body._id,
        {
            title: req.body.title,
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

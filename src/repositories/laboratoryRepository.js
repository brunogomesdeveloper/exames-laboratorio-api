const mongoose = require('mongoose');
const Laboratory = mongoose.model('Laboratory');

exports.save = async (param) => {
    Laboratory.insertMany(param)
};

exports.search = async () => {
    const res = await Laboratory.find({ status: true });
    return res;
}

exports.update = async (param) => {

    param.forEach(element => {
        Laboratory.findByIdAndUpdate(element._id, {
            $set: {
                name: element.name,
                address: element.address
            }
        }, (err, res) => {
            console.log(err, res)
        });
    });

}

exports.delete = async (param) => {

    let array;

    if (!Array.isArray(param.laboratorys)) {
        array = mongoose.Types.ObjectId(param.id)
    }
    else {
        array = param.laboratorys.map((el) => { return mongoose.Types.ObjectId(el) })
    }

    await Laboratory.updateMany({
        _id:
        {
            $in: array
        }
    }, {
        $set: {
            status: false,
        }
    });

}

exports.addExam = async (data) => {
    console.log("teste",data)
    await Laboratory.findByIdAndUpdate(
        mongoose.Types.ObjectId(data.id),
        { $push: { exams: data.idExam } },
        { new: true, useFindAndModify: false },
        function(err, model) {
            console.log(err);
        }
    );
}

exports.removeExam = async (data) => {
    await Laboratory.findByIdAndUpdate(
         mongoose.Types.ObjectId(data.id),
        { $pull: { exams: data.idExam } },
    );
}


exports.searchLaboratory = async (data) => {
    const res = await Laboratory.find({ exams: { $in: [data.id] } });
    return res;
}









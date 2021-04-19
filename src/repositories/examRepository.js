const mongoose = require('mongoose');
const examRoute = require('../routes/ExamRoute');
const Exam  = mongoose.model('Exam');

exports.save = async(param) => { 
    Exam.insertMany(param)
};

exports.search = async() => {
    const res = await Exam.find({ status: true });
    return res;
}

exports.update = async(param) => {
    param.forEach(element => {
        Exam.findByIdAndUpdate(element._id, {
            $set: {
                name : element.name,
                tipo : element.tipo
            }
        }, (err, res) => {
            console.log(err, res)
        });       
    });

}

exports.delete = async(param) => { 

    let array;

    if(!Array.isArray(param.Exams)){
        array = mongoose.Types.ObjectId(param.id)
    }
    else{
        array = param.Exams.map((el) => { return mongoose.Types.ObjectId(el)})
    }

    await Exam.updateMany({ _id:
        {
            $in: array
        }}, {
        $set: {
            status: false, 
        }
    }); 

}






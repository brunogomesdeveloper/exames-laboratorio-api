const mongoose = require('mongoose');
const examRoute = require('../routes/ExamRoute');
const Exam  = mongoose.model('Exam');

exports.save = async(data) => { 

    if(Array.isArray(data.Exams)){
        Exam.insertMany(data.Exams)
    }
    else{
        let exam = new Exam(data);
        await exam.save();    
    }
};

exports.search = async() => {
    const res = await Exam.find({ status: true });
    return res;
}

exports.update = async(data) => {
    await Exam.findByIdAndUpdate(data.id, {
        $set: {
            name : data.name,
            tipo : data.tipo
        }
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






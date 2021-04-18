const mongoose = require('mongoose');
const Laboratory  = mongoose.model('Laboratory');

exports.save = async(data) => {   
    
    let array ;


    if(!Array.isArray(data.laboratorys)){
        array = [data]
    }
    else {
        array = data.laboratorys
    } 

    console.log(array)

    Laboratory.insertMany(array)
   
};

exports.search = async() => {
    const res = await Laboratory.find({ status: true });
    return res;
}

exports.update = async(data) => {

    await Laboratory.findByIdAndUpdate(data.id, {
        $set: {
            name : data.name,
        }
    });
}

exports.delete = async(param) => {

    let array;

    if(!Array.isArray(param.laboratorys)){
        array = mongoose.Types.ObjectId(param.id)
    }
    else{
        array = param.laboratorys.map((el) => { return mongoose.Types.ObjectId(el)})
    }
        
    await Laboratory.updateMany({ _id:
        {
            $in: array
        }}, {
        $set: {
            status: false, 
        }
    }); 

}

exports.addExam =  async(data) => {
    await Laboratory.findByIdAndUpdate(
        data.id,
        { $push: { exams: data.idExam } },
        { new: true, useFindAndModify: false }
      );
}

exports.searchLaboratory =  async(data) => {
    const res = await Laboratory.find({exams: { $in: [ data.id ] } });
    return res;
}









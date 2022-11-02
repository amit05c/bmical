const mongoose= require("mongoose")

const bmiSchema= new mongoose.Schema({
    weight: {type: Number, require: true},
    height: {type: Number, require: true},
    bmi: {type: Number, require: true},
    userId: {type: String, require: true}
})

const BmiModel= mongoose.model("bmi_data",bmiSchema)

module.exports={
    BmiModel
}
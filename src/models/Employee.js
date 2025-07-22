const mongoose = require("mongoose");
const { Schema, Types } = mongoose;
const { ObjectId } = Schema.Types;

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  position: {
    type: ObjectId,
    ref: "Position", //  Pozisyon koleksiyonuna referans
    required: true,
  },

  department: {
    type: ObjectId,
    ref: "Department", //  Departman koleksiyonuna referans
    required: true,
  },

  salary: {
    type: Number,
    required: true,
  },

  startDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);

const Department = require("../models/Department");

// Tüm departmanları getir
exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (err) {
    res.status(500).json({ message: "Departmanlar alınamadı", error: err });
  }
};

// Yeni departman ekle
exports.createDepartment = async (req, res) => {
  try {
    const newDepartment = new Department({ name: req.body.name });
    await newDepartment.save();
    res.status(201).json(newDepartment);
  } catch (err) {
    res.status(500).json({ message: "Departman eklenemedi", error: err });
  }
};

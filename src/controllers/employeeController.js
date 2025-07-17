const Employee = require("../models/Employee");

//yeni çalışan ekleme

exports.addEmployee = async (req, res) => {
  try {
    const { name, position, department, salary } = req.body;

    //alan kontrolü
    if (!name || !salary) {
      return res.status(400).json({ message: "isim ve maaş zorunludur" });
    }

    const newEmployee = new Employee({
      name,
      position,
      department,
      salary,
    });

    await newEmployee.save();
    res.status(201).json({ message: "çalışan eklendi", employee: newEmployee });
  } catch (err) {
    res.status(500).json({ message: "sunucu hatası", error: err.message });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, position, department, salary } = req.body;

    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      { name, position, department, salary },
      { new: true, runValidators: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Çalışan bulunamadı" });
    }

    res
      .status(200)
      .json({ message: "Çalışan güncellendi", employee: updatedEmployee });
  } catch (err) {
    res.status(500).json({ message: "Sunucu hatası", error: err.message });
    console.log(err);
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Employee.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Çalışan bulunamadı" });
    }

    res.status(200).json({ message: "Çalışan silindi" });
  } catch (err) {
    res.status(500).json({ message: "Sunucu hatası", error: err.message });
  }
};

// Tüm çalışanları getir
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find(); // Tüm verileri al
    res.status(200).json(employees); // JSON olarak gönder
  } catch (err) {
    res.status(500).json({ message: "Sunucu hatası", error: err.message });
  }
};

// ID ile çalışanı getir
exports.getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);

    if (!employee) {
      return res.status(404).json({ message: "Çalışan bulunamadı" });
    }

    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ message: "Sunucu hatası", error: err.message });
  }
};

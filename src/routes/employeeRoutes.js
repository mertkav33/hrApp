const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

// Çalışan ekleme route'u
router.post("/employees", employeeController.addEmployee);
router.put("/employees/:id", employeeController.updateEmployee);
router.delete("/employees/:id", employeeController.deleteEmployee);
router.get("/employees", employeeController.getAllEmployees);
// Tek çalışanı ID ile getir
router.get("/employees/:id", employeeController.getEmployeeById);

router.post("/", async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    const saved = await newEmployee.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Çalışan eklenemedi", details: err.message });
  }
});

module.exports = router;

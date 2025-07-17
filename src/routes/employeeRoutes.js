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

module.exports = router;

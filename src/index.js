const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const positionRoutes = require("./routes/positionRoutes");
const departmentRoutes = require("./routes/departmentRoutes");

const app = express();
const PORT = 5000;

app.use(cors()); //Farklı domainlerden gelen istekleri kabul eder.
app.use(express.json()); //JSON body verilerini otomatik olarak parse eder.

mongoose
  .connect("mongodb://localhost:27017/hr-platform", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDb bağlantısı başarılı"))
  .catch((err) => console.error("MongoDB bağlantı hatası:", err));

app.use("/api/auth", authRoutes);
app.use("/api", employeeRoutes);
app.use("/api/positions", positionRoutes);
app.use("/api/departments", departmentRoutes);

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});

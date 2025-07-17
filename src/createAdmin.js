const mongoose = require("mongoose");
const Admin = require("./models/admin");

mongoose
  .connect("mongodb://localhost:27017/hr-platform", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const existingAdmin = await Admin.findOne({ email: "admin@example.com" });

    if (existingAdmin) {
      console.log("⚠️ Bu admin zaten var.");
      return mongoose.connection.close();
    }

    const newAdmin = new Admin({
      email: "admin@example.com",
      password: "123456", // ✅ düz metin
    });

    await newAdmin.save();
    console.log("✅ Admin başarıyla eklendi!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("❌ Hata:", err.message);
  });

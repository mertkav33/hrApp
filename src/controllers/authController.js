const Admin = require("../models/admin");
const jwt = require("jsonwebtoken"); //kullanıcı kimliği tespit eder,frontende gönderir.

const JWT_SECRET = "yourSecretKey";
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email }); //mongodbde eşleşen mail arama
    if (!admin)
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    const isMatch = await admin.comparePassword(password);
    if (!isMatch) return res.status(401).json({ message: "şifre yanlış" });
    const token = jwt.sign({ id: admin._id }, JWT_SECRET, { expiresIn: "1h" });
    //Giriş başarılıysa, kullanıcıya bir JWT token oluşturulur.token'ın 1 saat geçerli olmasını

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: "Sunucu hatası", error: err.message });
  }
  //Eğer yukarıdaki işlemlerde bir hata olursa (try bloğunda), hata yakalanır ve 500 yanıtı döner.
};

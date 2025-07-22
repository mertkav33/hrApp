const Position = require("../models/Position");

// Tüm pozisyonları getir
exports.getAllPositions = async (req, res) => {
  try {
    const positions = await Position.find();
    res.json(positions);
  } catch (err) {
    res.status(500).json({ message: "Pozisyonlar alınamadı", error: err });
  }
};

// Yeni pozisyon ekle
exports.createPosition = async (req, res) => {
  try {
    const newPosition = new Position({ name: req.body.name });
    await newPosition.save();
    res.status(201).json(newPosition);
  } catch (err) {
    res.status(500).json({ message: "Pozisyon eklenemedi", error: err });
  }
};

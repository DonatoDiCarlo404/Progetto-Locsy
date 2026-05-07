const Farmacia = require('../models/Farmacia');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Get tutte le farmacie
// @route   GET /api/farmacie
// @access  Public
exports.getFarmacie = asyncHandler(async (req, res, next) => {
  const farmacie = await Farmacia.find({ pubblicato: true })
    .sort('-turno dataTurno nome')
    .lean();

  res.status(200).json({
    success: true,
    count: farmacie.length,
    data: farmacie
  });
});

// @desc    Get farmacie di turno
// @route   GET /api/farmacie/turno
// @access  Public
exports.getFarmacieTurno = asyncHandler(async (req, res, next) => {
  const oggi = new Date();
  oggi.setHours(0, 0, 0, 0);

  const domani = new Date(oggi);
  domani.setDate(domani.getDate() + 1);

  const farmacie = await Farmacia.find({
    pubblicato: true,
    turno: true,
    dataTurno: { $gte: oggi, $lt: domani }
  });

  res.status(200).json({
    success: true,
    count: farmacie.length,
    data: farmacie
  });
});

// @desc    Get farmacie vicine
// @route   GET /api/farmacie/vicine/:lng/:lat/:distance
// @access  Public
exports.getFarmacieVicine = asyncHandler(async (req, res, next) => {
  const { lng, lat, distance } = req.params;

  const radius = distance / 6378;

  const farmacie = await Farmacia.find({
    pubblicato: true,
    coordinate: {
      $geoWithin: {
        $centerSphere: [[lng, lat], radius]
      }
    }
  });

  res.status(200).json({
    success: true,
    count: farmacie.length,
    data: farmacie
  });
});

// @desc    Crea farmacia
// @route   POST /api/farmacie
// @access  Private (Admin)
exports.createFarmacia = asyncHandler(async (req, res, next) => {
  const farmacia = await Farmacia.create(req.body);

  res.status(201).json({
    success: true,
    data: farmacia
  });
});

// @desc    Aggiorna farmacia
// @route   PUT /api/farmacie/:id
// @access  Private (Admin)
exports.updateFarmacia = asyncHandler(async (req, res, next) => {
  let farmacia = await Farmacia.findById(req.params.id);

  if (!farmacia) {
    return res.status(404).json({
      success: false,
      message: 'Farmacia non trovata'
    });
  }

  farmacia = await Farmacia.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: farmacia
  });
});

// @desc    Elimina farmacia
// @route   DELETE /api/farmacie/:id
// @access  Private (Admin)
exports.deleteFarmacia = asyncHandler(async (req, res, next) => {
  const farmacia = await Farmacia.findById(req.params.id);

  if (!farmacia) {
    return res.status(404).json({
      success: false,
      message: 'Farmacia non trovata'
    });
  }

  await farmacia.deleteOne();

  res.status(200).json({
    success: true,
    data: {}
  });
});

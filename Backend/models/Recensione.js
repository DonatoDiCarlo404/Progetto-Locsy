const mongoose = require('mongoose');

const recensioneSchema = new mongoose.Schema({
  ristorante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ristorante',
    required: true
  },
  autore: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  rating: {
    type: Number,
    required: [true, 'Il rating è obbligatorio'],
    min: [1, 'Il rating minimo è 1'],
    max: [5, 'Il rating massimo è 5']
  },
  commento: {
    type: String,
    maxlength: [500, 'Il commento non può superare 500 caratteri']
  },
  foto: [{
    type: String
  }],
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true
});

// Index per garantire una recensione per utente per ristorante
recensioneSchema.index({ ristorante: 1, autore: 1 }, { unique: true });

// Index per ordinare recensioni
recensioneSchema.index({ ristorante: 1, createdAt: -1 });
recensioneSchema.index({ ristorante: 1, rating: -1 });

// Middleware per aggiornare il rating medio del ristorante
recensioneSchema.post('save', async function() {
  const Ristorante = mongoose.model('Ristorante');
  
  const stats = await this.constructor.aggregate([
    { $match: { ristorante: this.ristorante } },
    {
      $group: {
        _id: '$ristorante',
        numeroRecensioni: { $sum: 1 },
        ratingMedio: { $avg: '$rating' }
      }
    }
  ]);

  if (stats.length > 0) {
    await Ristorante.findByIdAndUpdate(this.ristorante, {
      numeroRecensioni: stats[0].numeroRecensioni,
      ratingMedio: Math.round(stats[0].ratingMedio * 10) / 10 // Arrotonda a 1 decimale
    });
  }
});

// Middleware per aggiornare il rating quando viene eliminata una recensione
recensioneSchema.post('findOneAndDelete', async function(doc) {
  if (doc) {
    const Ristorante = mongoose.model('Ristorante');
    
    const stats = await mongoose.model('Recensione').aggregate([
      { $match: { ristorante: doc.ristorante } },
      {
        $group: {
          _id: '$ristorante',
          numeroRecensioni: { $sum: 1 },
          ratingMedio: { $avg: '$rating' }
        }
      }
    ]);

    if (stats.length > 0) {
      await Ristorante.findByIdAndUpdate(doc.ristorante, {
        numeroRecensioni: stats[0].numeroRecensioni,
        ratingMedio: Math.round(stats[0].ratingMedio * 10) / 10
      });
    } else {
      await Ristorante.findByIdAndUpdate(doc.ristorante, {
        numeroRecensioni: 0,
        ratingMedio: 0
      });
    }
  }
});

module.exports = mongoose.model('Recensione', recensioneSchema);

/**
 * ReservationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  newReservation: async function (req, res) {
    console.log('hola');
    let idUrl = req.param('id');
    console.log(req.param('id'));
    let initialDate = new Date(req.param('initialDate'));
    let finalDate = new Date(req.param('finalDate'));
    let days = Math.floor((Date.UTC(finalDate.getFullYear(), finalDate.getMonth(), finalDate.getDate()) - Date.UTC(initialDate.getFullYear(), initialDate.getMonth(), initialDate.getDate())) / (1000 * 60 * 60 * 24));
    console.log(initialDate);
    let paymentMethod = req.param('paymentMethod');
    let valuePerDay = req.param('valuePerDay');
    let totalValue = valuePerDay * days;
    let downPayment = (totalValue * 20) / 100;
    let alojamiento = req.params.id;
    let guestID = req.param('guestID');

    let rentals = await Reservation.create({
      initialDate: initialDate,
      finalDate: finalDate,
      paymentMethod: paymentMethod,
      valuePerDay: valuePerDay,
      totalValue: totalValue,
      downPayment: downPayment,
      rent: alojamiento,
      guest: guestID

    })
    console.log(rentals);

  },
  deleteReservation: async function (req, res) {
    let deleteReservation = req.param('id');

    await Reservation.destroy({id: deleteReservation});

    res.redirect('/');
  },

  rentals: async function (req, res) {

    await Reservation.destroy({customer: null});
    await Reservation.destroy({rent: null});

    let reservations = await Reservation.find({rent: req.params.id}).populate('customer').sort('initialDate ASC');

    res.view('pages/reservations', {reservations: reservations});
  },

};


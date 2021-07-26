/**
 * ReservationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  newRental: async function (req, res) {
    let idUrl = req.param('id');

    let initialDate = new Date(req.param('initialDate'));
    let finalDate = new Date(req.param('finalDate'));
    let days = Math.floor((Date.UTC(finalDate.getFullYear(), finalDate.getMonth(), finalDate.getDate()) - Date.UTC(initialDate.getFullYear(), initialDate.getMonth(), initialDate.getDate())) / (1000 * 60 * 60 * 24));

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
    });

    res.redirect('/rental/' + idUrl);
  },
  deleteReservation: async function (req, res) {
    let deleteReservation = req.param('id');

    await Reservation.destroy({id: deleteReservation});

    res.redirect('/');
  }
};


/**
 * HotelController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  newHotel: async function (req, res) {
    let name = req.param('nombre');
    let capacity = req.param('capacidad');
    let garage = req.param('garage');
    let address = req.param('direccion');
    let Hotels = await Hotel.create({
      name: name,
      capacity: capacity,
      garage: garage,
      address: address,
      owner: req.session.user.id
    });

    res.redirect('/');
  },
  deleteHotel: async function (req, res) {
    await Hotel.destroy({id: req.param('id')});

    res.redirect('/');
  },

  view_hotels: async function (req, res) {
    let hotels = await Hotel.find({owner: {'!=': null}}).populate('owner');
    await Hotel.destroy({owner: null});
    res.view('pages/homepage', {hotels: hotels}  );
  },
};


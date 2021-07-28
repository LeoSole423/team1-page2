/**
 * GuestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  newGuest: async function (req, res) {
    let fullName = req.param('fullName');
    let city = req.param('city');
    let members = req.param('members');
    let licensePlate = req.param('licensePlate');

    let guests = await Guest.create({
      fullName: fullName,
      city: city,
      members: members,
      licensePlate: licensePlate,
    });

    res.redirect('/guest');
  },

  viewguest: async function (req, res) {
    let guests = await Guest.find({}).populate('reservations');
    res.view('pages/guests', {guests: guests});
  },

  deleteGuest: async function(req,res) {
    let deleteGuest = req.param('id');
    await Guest.destroy({id: deleteGuest});

    res.redirect('/guest');
  }
};


/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/
  '/': {view: 'pages/homepage'},
  'GET /login': {view: 'pages/login'},
  'POST /login': 'UserController.login',
  '/logout':'UserController.logout',

  //hotel
  '/newhotel': {view: 'pages/newhotel'},
  'POST /newhotel': 'HotelController.newHotel',
  '/deletehotels/:id': 'HotelController.deleteHotel',
  // eslint-disable-next-line no-dupe-keys
  '/': 'HotelController.view_hotels',

  //guest
  '/guests': {view: 'pages/guests'},
  // eslint-disable-next-line no-dupe-keys
  '/guests': 'GuestController.viewguest',
  '/newguests': {view: 'pages/newguests'},
  'POST /newguests': 'GuestController.newGuest',
  '/deleteguests/:id': 'GuestController.deleteGuest',

  //reservation
  'GET /newReservation/:id': 'ReservationController.newReservation_guests',
  'POST /newReservation/:id': 'ReservationController.newReservation',
  'GET /reservations/:id': 'ReservationController.rentals',
  '/deleteReservation/:id': 'ReservationController.deleteReservation',
  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/


};

/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  login: async function (req, res) {
    let email_taked = req.param('email');
    let password_taked = req.param('password');
    const user = await User.findOne({
      email: email_taked,
    });
    if (user && sails.argon2.verify(user.password, password_taked)) {
      req.session.user = user;
      res.redirect('/');
    }
    else {
      req.session.user = null;
      res.view('pages/login');
    }
  },
  logout: async function (req, res){
    req.session.user = null;
    res.redirect ('/');
  }
};


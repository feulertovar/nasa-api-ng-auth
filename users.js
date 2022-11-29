const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

function getUserDocument(req, res, next) {
  User.findOne({email: req.user.email}, (err, user) => {
     if (err || !user) {
         res.status('400').json({status: 'user-missing'});
     }
     req.userDocument = user;
     next();
  });
}

module.exports = { UserSchema, User, getUserDocument };
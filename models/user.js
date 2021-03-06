var mongoose = require("mongoose"),
    bcrypt   = require("bcrypt-nodejs");

var userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

userSchema.index({email: 1}, {unique: true});

userSchema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
}

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model("User", userSchema);
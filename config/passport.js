var passport      = require("passport"),
    localStrategy = require("passport-local"),
    User          = require("../models/user.js");

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if (err) {
            console.log(err);
        } else {
            done(err, user);
        }
    });
});

passport.use("local.register", new localStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
}, function(req, email, password, done){
    // Field validations
    req.checkBody("email", "Invalid email").notEmpty().isEmail();
    req.checkBody("password", "Invalid password").notEmpty().isLength({min:4});
    var errors = req.validationErrors();
    if (errors) {
        var messages = [];
        errors.forEach(function(error){
            messages.push(error.msg);
        });
        return done(null, false, req.flash("error", messages));
    }

    User.findOne({"email": email}, function(err, foundUser){
        if (err) {
            return done(err);
        }
        if (foundUser) {
            return done(null, false, {message: "Email is already in use."});
        }
        var newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);

        newUser.save(function(err, savedUser){
            if (err) {
                return done(err);
            }
            return done(null, user);
        });
    });
}));

passport.use("local.login", new localStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
}, function(req, email, password, done){
    // Field validations
    req.checkBody("email", "Invalid email").notEmpty().isEmail();
    req.checkBody("password", "Invalid password").notEmpty().isLength({min:4});
    var errors = req.validationErrors();
    if (errors) {
        var messages = [];
        errors.forEach(function(error){
            messages.push(error.msg);
        });
        return done(null, false, req.flash("error", messages));
    }

    User.findOne({"email": email}, function(err, foundUser){
        if (err) {
            return done(err);
        }
        if (!foundUser || !foundUser.validPassword(password)) {
            return done(null, false, {message: "Invalid username or password."});
        }
        return done(null, foundUser);
    });
}));
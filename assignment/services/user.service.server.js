var app = require('../../express');
var userModel = require('../model/user/user.model.server');
var passport = require('passport');
var bcrypt = require("bcrypt-nodejs");
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

var facebookConfig = {
    clientID     : process.env.FACEBOOK_CLIENT_ID,
    clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL  : process.env.FACEBOOK_CALLBACK_URL
};

passport.use(new LocalStrategy(localStrategy));
passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

app.get     ('/api/assignment/user', findUserByCredentials);
app.get     ('/api/assignment/user/:userId', findUserById);
app.get     ('/api/assignment/user', findUserByUsername);
app.post    ('/api/assignment/user', createUser);
app.put     ('/api/assignment/user/:userId', updateUser);
app.delete  ('/api/assignment/user/:userId', deleteUser);

app.post    ('/api/assignment/login', passport.authenticate('local'), login);
app.get     ('/api/assignment/checkLoggedIn', checkLoggedIn);
app.post    ('/api/assignment/logout', logout);
app.post    ('/api/assignment/register', register);
app.get     ('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

function localStrategy(username, password, done) {
    userModel
        .findUserByUsername(username)
        .then(
            function (user) {
                if (user && bcrypt.compareSync(password, user.password)) {
                    done(null, user);
                }
                else {
                    done(null, false);
                }
            },
            function (err) {
                done(err, false);
            }
        )
}

function facebookStrategy(token, refreshToken, profile, done) {
    developerModel
        .findUserByFacebookId(profile.id).then(
        function (user) {
            if (user) {
                return done(null, user);
            } else {
                var newUser = {
                    username: profile.displayName,
                    facebook: {
                        id: profile.id,
                        token: token
                    }
                };
                return userModel.createUser(newUser)
            }
        },
        function (err) {
            if (err) {
                return done(err);
            }
        })
        .then(
            function (user) {
                return done(null, user);
            },
            function (err) {
                if (err) {
                    return done(err);
                }
            }
        )
}

function serializeUser(user, done) {
    done(null, user);
}

function deserializeUser(user, done) {
    userModel
        .findUserById(user._id)
        .then(
            function(user){
                done(null, user);
            },
            function(err){
                done(err, null);
            }
        );
}

function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel
        .createUser(user)
        .then(
            function (user) {
                req.login(user, function (status) {
                    res.json(user);
                });
            });
}

function logout(req, res) {
    req.logout();
    res.sendStatus(200);
}

function checkLoggedIn(req, res) {
    if(req.isAuthenticated()) {
        res.json(req.user);
    } else {
        res.send('0');
    }
}

function login(req, res) {
    var user = req.user;
    res.json(user);
}

function deleteUser(req, res) {
    var userId = req.params.userId;

    userModel
        .deleteUser(userId)
        .then(function (status) {
            res.sendStatus(200);
        });
}

function updateUser(req, res) {
    var user = req.body;
    var userId = req.params.userId;

    userModel
        .updateUser(userId, user)
        .then(function (status) {
            res.sendStatus(200);
        });
}

function createUser(req, res) {
    var user = req.body;
    userModel
        .createUser(user)
        .then(function (user) {
            res.send(user);
        });
}

function findUserByCredentials(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];
    console.log([username, password]);

    userModel
        .findUserByCredentials(username, password)
        .then(function (user) {
            res.json(user);
        }, function (err) {
            res.sendStatus(404);
        });
}

function findUserById(req, res) {
    var userId = req.params.userId;

    userModel
        .findUserById(userId)
        .then(function (user) {
            res.json(user);
        }, function (err) {
            console.log(err);
        });
}

function findUserByUsername(req, res) {
    var username = req.query['username'];

    userModel
        .findUserByUsername(username)
        .then(function (user) {
            res.json(user);
        }, function (err) {
            res.sendStatus(404);
        });
}
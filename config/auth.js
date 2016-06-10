// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID' : '136653380075831', // your App ID
        'clientSecret' : 'ed310996df45f37dc4cd7fad775d2ed2', // your App Secret
        'callbackURL' : 'https://guarded-sierra-54636.herokuapp.com/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey' : 'your-consumer-key-here',
        'consumerSecret' : 'your-client-secret-here',
        'callbackURL' : 'http://localhost:3000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID' : 'your-secret-clientID-here',
        'clientSecret' : 'your-client-secret-here',
        'callbackURL' : 'http://localhost:3000/auth/google/callback'
    }

};
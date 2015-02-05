module.exports = {
  //Development configration options
  db: 'mongodb://localhost/mean-book',
  sessionSecret: 'developmentSessionSecret',
  facebook: {
    clientID: '926600187364011',
    clientSecret: '6fab0aefbf5ca82e355928cb1f83fea5',
    callbackURL: 'http://localhost:3000/oauth/facebook/callback'
  },
  twitter: {
    clientID: '5aRLv1BfYpEUweyTTiW6pRRqd',
    clientSecret: 'N3Xwu2FynRhmVYFzNhNt90Zq7faFKjxDcvOke0ZSTjLd0o2zJM',
    callbackURL: 'http://localhost:3000/oauth/twitter/callback'
  },
  google: {
    clientID: '323187399554-s3giu07u1os6cn910kehknk37jhmlupj.apps.googleusercontent.com',
    clientSecret: 'mE9JBxeu__uyspj_MMPA8qsp',
    callbackURL: 'http://localhost:3000/oauth/google/callback'
  }
};

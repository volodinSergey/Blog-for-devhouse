module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'someSecret'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'someSalt'),
  },
});

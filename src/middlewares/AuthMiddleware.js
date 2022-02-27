const { verify } = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  // passing access token from frontend to backend using headers
  const accessToken = req.header("accessToken");

  if(!accessToken) return res.json({error: "User in not authenticated"});

  try {
    // using jsonweb to verify the access token is the same and that the secret is the same as the controllers secret 
    const validToken = verify(accessToken, "useRandomStringGenerator");
    req.user = validToken;

    if(validToken) {
      return next();
    }
  } catch (err) {
    return res.json({ error: err})
  }
}

module.exports = { validateToken };
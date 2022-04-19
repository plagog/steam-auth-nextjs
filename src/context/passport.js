import passport from "passport";
import SteamStrategy from "passport-steam";

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(
  new SteamStrategy(
    {
      returnURL: `${process.env.PUBLIC_DOMAIN}api/auth/steamReturn`,
      realm: `${process.env.PUBLIC_DOMAIN}`,
      apiKey: `${process.env.STEAM_API_KEY}`,
    },
    (_, profile, done) => {
      return done(null, profile);
    }
  )
);

export default passport;

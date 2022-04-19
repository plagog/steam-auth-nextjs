import nextConnect from "next-connect";
import passport from "./passport";
import session from "cookie-session";

const router = nextConnect();

router.use(
  session({
    secret: `${process.env.STEAM_SECRET}`,
    maxAge: 1000 * 60 * 60 * 24 * 7, //7 days
  })
);

router.use(passport.initialize());
router.use(passport.session());

export default router;

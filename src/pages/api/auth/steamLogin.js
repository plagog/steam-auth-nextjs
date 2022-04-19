import passport from "/src/context/passport";
import router from "/src/context/router";
import Cookies from "cookies";

const path = "/api/auth/steamLogin";

export default router
  .use((req, res, next) => {
    const cookies = new Cookies(req, res, {
      secure: false,
      maxAge: 1000 * 60 * 60 * 1 //1 hour
    });
    cookies.set("steamReturnUrl", req?.query?.returnUrl);
    next();
  })
  .use(path, passport.authenticate("steam", { failureRedirect: "/" }));

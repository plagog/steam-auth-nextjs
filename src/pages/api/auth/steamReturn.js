import passport from "/src/context/passport";
import router from "/src/context/router";
import Cookies from "cookies";

const path = "/api/auth/steamReturn";
let returnUrl = "/";

export default router
  .use((req, res, next) => {
    const cookies = new Cookies(req, res);
    returnUrl = cookies.get("steamReturnUrl");
    if (returnUrl) {
      returnUrl = returnUrl.replace(/['"]+/g, "");
    }
    next();
  })
  .use(
    path,
    passport.authenticate("steam", { failureRedirect: returnUrl || "/" })
  )
  .get(path, (_, res) => {
    res.redirect(returnUrl || "/");
  });

import router from "/src/context/router";

const path = "/api/auth/steamLogout";
let returnUrl = "/";

export default router.get(
  path,
  (req, res) => {
    returnUrl = req?.query?.returnUrl;
    if (returnUrl) {
      returnUrl = returnUrl.replace(/['"]+/g, "");
      returnUrl = returnUrl.split("?")[0];
    }
    req.logout();

    res.redirect(returnUrl || "/");
  }
);

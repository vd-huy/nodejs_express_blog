class SiteController {
  // [GET] /
  index(req, res) {
    res.render("home");
  }

  //[GET] /searcg
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();

const router = require('express').Router();
const paytm = require('../controller/paytm/paytm.controller');


router.get("/request",paytm.getRequest);
router.post("/request",paytm.request);
router.post("/response",paytm.response);

module.exports = router;
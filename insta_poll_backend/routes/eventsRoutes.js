const express = require("express");
const {creatEventData,viewRating,addParticipants, showParticipants, InputCreatLink} = require("../controllers/EventsController");
const router = express.Router();

router.post("/party",  creatEventData);
router.post("/rating", viewRating );
router.post("/Add_Member", addParticipants)
router.post("/participant",showParticipants)
router.post("/eventlink",InputCreatLink)

// router.post("/count", count);


module.exports = router;

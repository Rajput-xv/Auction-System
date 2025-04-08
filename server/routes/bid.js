const express = require("express");
const { placeBid, getBidHistory, getBidsByUser } = require("../controllers/bid");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

router.post("/", authMiddleware, placeBid);
router.get("/:auctionItemId", authMiddleware, getBidHistory);
router.post("/user", authMiddleware, getBidsByUser);


module.exports = router;

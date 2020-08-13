const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.status(200).json({
		WelCome: `${process.env.FUN_FACT}`, 
	})
})

module.exports = router

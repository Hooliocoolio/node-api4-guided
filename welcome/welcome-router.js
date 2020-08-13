const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.status(200).json({
		Welcome: `${process.env.COHORT}`, 
	})
	res.status(200).json({
		FunFact: `${process.env.FUN_FACT}`, 
	})
})

module.exports = router

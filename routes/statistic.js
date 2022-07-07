const express = require('express')
const router = express.Router()

const {
 getStatisticAll,
 getStatisticClub,
} = require('../controllers/statistic')

router.route('/').get(getStatisticAll)
router.route('/:code').get(getStatisticClub)



module.exports = router
const express = require('express')
const router = express.Router()

const {
  getPlayer,
  addPlayer,
  deletePlayer,
  updatePlayer,
} = require('../controllers/players')

router.route('/').get(getPlayer).post(addPlayer)
router.route('/:id').delete(deletePlayer).patch(updatePlayer)


module.exports = router
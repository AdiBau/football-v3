const express = require('express')
const router = express.Router()

const {
  getAllTeams,
  createTeam,
  deleteTeam,
  getTeam,
  updateTeam,
  
} = require('../controllers/teams')





router.route('/').post(createTeam).get(getAllTeams)
router.route('/:teamCode').delete(deleteTeam).get(getTeam).patch(updateTeam)




module.exports = router

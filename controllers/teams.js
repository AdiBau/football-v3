const Team = require('../models/teams')


const getAllTeams = async (req, res) => {
  try {
    const Teams = await Team.find({})
    res.status(200).json({ Teams })
  } catch (error) {
    res.status(404).json({ "msg": "Please try leter", "error": error })
  }
 
 
}

const createTeam = async (req, res) => {
  const {TeamName, TeamCode, Nationality} = req.body;
  if(!(TeamName, TeamCode, Nationality))
  {
    res.status(404).json({ "msg": "---You must type---",
  TeamName: "Team Name",
  TeamCode: "Team Code",
  Nationality: "Team Nationality",
   })
  }else{
  const NewTeam = await Team.create({
    TeamName: TeamName,
    TeamCode: TeamCode,
    Nationality: Nationality,  
  }
  ).catch(err=>{
    if(err)
    { 
      res.send(err)
    }
    else{res.status(201).json({ NewTeam })}}
    )

  

}

}


const deleteTeam = async (req, res, next) => {
  const {teamCode} = req.params
  const team = await Team.findOneAndDelete({ TeamCode: teamCode })
  if (!team) {
    return res.status(404).json({msg: `Nothing to delete : ${teamCode}`})
  }
  res.status(200).json({team})
}

 const getTeam = async (req, res, next) => {
  const {teamCode}= req.params
  const team = await Team.findOne({ TeamCode: teamCode })
  if (!team) {
    return res.status(404).json({msg: `Nothing to show with code : ${teamCode}`})
  }

  res.status(200).json({ team })
}

const updateTeam = async (req, res, next) => {
  const { teamCode } = req.params

  const team = await Team.findOneAndUpdate({TeamCode: teamCode }, req.body)

  if (!team) {
    return res.status(404).json({msg: `No Club with CODE : ${teamCode}`})
  }

  res.status(200).json({ team })
}

module.exports = {
  getAllTeams,
  createTeam,
  deleteTeam,
  getTeam,
  updateTeam,
}

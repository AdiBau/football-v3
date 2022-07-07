const Team = require('../models/teams')
const Player = require('../models/players');

const getStatisticAll = async (req, res) => {
  const Teams = await Team.find({});
  let statistic = [];
 Teams.map(elementTeams => {
    statistic.push({
      "TeamName": elementTeams.TeamName,
      "TeamCode": elementTeams.TeamCode,
      "Nationality": elementTeams.Nationality,
      "Players": []
    });
    const AllPlayers = async ()=>{
    const Players = await Player.find({ "TeamCode": elementTeams.TeamCode });
  
    if (Players) {
      Players.map(elementPlayers => {
       statistic[Teams.indexOf(elementTeams)].Players.push(elementPlayers )
      });
    }
    if(Teams.length == (Teams.indexOf(elementTeams)+1))
    {
     return res.status(201).json(statistic)
    }
  }
  AllPlayers();
  });
  if(!Teams){
    res.status(404).json({"msg": "No registered clubs"})
  }
}

const getStatisticClub = async (req, res)=>{
  let statistic = [];
  const Teams = await Team.findOne({"TeamCode": req.params.code});
  const Players = await Player.find({ "TeamCode": req.params.code });

   statistic.push({
      "TeamName": Teams.TeamName,
      "TeamCode":Teams.TeamCode,
      "Nationality": Teams.Nationality,
      "Players": []
    });
 
    const AllPlayers = async ()=>{
    if (Players) {
     await Players.map(elementPlayers => {
      statistic[0].Players.push(elementPlayers )
      });
    }
   
   
     return res.status(201).json(statistic)
  
  }
  AllPlayers();
  
  if(!Teams){
    res.status(404).json({"msg": "No registered club"})
}
}

module.exports = {
  getStatisticAll,
  getStatisticClub,
}
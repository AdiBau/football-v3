const Player = require('../models/players');
const addplayerError = require('../errors/addPlayerError');

const getPlayer = async (req, res) => {
  try {
    const player = await Player.find({})
    res.status(200).json({ player })
  } catch (error) {res.status(500).json({msg: error})}
    
}

const addPlayer = async (req, res) => {
  const {Name, LastName, Number,TeamCode } = req.body;
  if(!(Name, LastName, Number,TeamCode)){
    res.status(404).json(addplayerError)
    
  }else{
          try {
            const Player_added = await Player.create({
              Name: Name,
              LastName: LastName,
              Number: Number,
              TeamCode: TeamCode,})
              res.status(201).json({msg: Player_added })
          } catch (error) {res.status(500).json({addplayerError,error: error})}
        }  
}

const deletePlayer = async (req, res) => {
  const player_id = req.params.id;
    
  try {
    const player = await Player.findOneAndDelete({_id: player_id})
    if(player == null){return res.status(404).json({msg: `Player not exist with id:${player_id}`});}
      else {res.status(200).json({msg: `Player delete with id:${player_id}`, data: player});}
  
  } catch (error) {res.status(500).json({msg: `Player not exist with id:${player_id}`,error: error})}
  
}
const updatePlayer = async (req, res) => {
  const player_id = req.params.id;
  
  try {
    const player = await Player.findOneAndUpdate({_id: player_id},req.body,{runValidators: true, new: true, overwrite:true,})
    if(player == null){return res.status(404).json({msg: `Player not exist with id:${player_id}`});}
      else {res.status(200).json({msg: `Player update with id:${player_id}`, data: player});  }
  
  } catch (error) {res.status(500).json({msg: `Player not exist with id:${player_id}`,error: error})}
  
}


module.exports = {
  getPlayer,
  addPlayer,
  deletePlayer,
  updatePlayer,
}
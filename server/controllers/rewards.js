const Reward = require('./../models/rewardModel')

const getRewards = async (req,res) => {
        
    try{
        const rewards = await Reward.find({}).sort({createdAt: -1})
        res.status(200).json(rewards)
        }
        catch (error){
            res.status(400).json({error: error.message})
        }

}

module.exports = {
    getRewards
}
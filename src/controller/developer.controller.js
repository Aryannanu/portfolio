const developerService = require("../services/developer.service");

const addDeveloperController = async (req,res) => {
    try{
        const {name,role,bio,email,phone,birthday,location} = req.body;
        const profileImage = req.files?.profileImage?.[0]?.path;
        const resume = req.files?.resume?.[0]?.path;
        const developer = await developerService.addDeveloperService({name,role,bio,email,phone,birthday,location,resume,profileImage});
        res.status(201).json({
            message : "developer added successfully",
            developer
        })
    }catch(error){
        console.log("error in addDeveloperController",error)
    }
}

const getDeveloperController = async (req,res) => {
    const {developerId} = req.params;
    const developer = await developerService.getDeveloperService(developerId);
    if(!developer) {
        return res.status(404).json({
            success : false,
            message : "developer not found"
        })
    };
    return res.send(developer)
}


module.exports = {addDeveloperController,getDeveloperController}

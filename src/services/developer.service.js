const Developer = require("../models/developer");

const addDeveloperService = async ({name,role,bio,email,phone,birthday,location,resume,profileImage}) => {
    try{
        const developer = await Developer.create({name,role,bio,email,phone,birthday,location,resume,profileImage});
        return developer;
    }catch(error){
        console.log("error in addDeveloperService",error)
    }
}

const getDeveloperService = async (developerId) => {
    try{
        const developer = await Developer.findById(developerId);
        return developer;
    }catch(error){
        console.log("error in getDeveloperService",error)
    }
}


module.exports = {addDeveloperService,getDeveloperService}
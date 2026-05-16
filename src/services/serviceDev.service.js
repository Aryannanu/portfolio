const Service = require("../models/serviceDev");

const addServiceDev = async ({ developerId,title, description, icon}) => {
    try {
        const service =
        await Service.create({ developerId, title, description, icon });
        return service;
    } catch (error) {
        console.log( "error in addservicedev", error );
    }
};

const getSerService = async (developerId) => {
    try{
        const services = await Service.find({ developerId });
        return services;
    }catch(error){
        console.log("error in getSerService",error)
    }
}

module.exports = { addServiceDev, getSerService };
const serService = require("../services/serviceDev.service");

const addSerController = async (req, res) => {
  try {
    const {developerId,title,description,icon } = req.body;
    const servicedev = await serService.addServiceDev({ developerId, title, description, icon});
    res.send(servicedev);
  } catch (error) {
    console.log("error in addDeveloperController",error);
  }
};

const getSerController = async (req,res) => {
    const { developerId } = req.params;
    const service = await serService.getSerService(developerId);
    if(!service) {
        return res.status(404).json({
            success : false,
            message : "developer not found"
        })
    };
    return res.send(service)
}

module.exports = { addSerController, getSerController };
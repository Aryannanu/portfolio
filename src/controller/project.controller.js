const projectService = require("../services/project.service");

const addProjectController = async (req, res) => {
    try {
        const project =await projectService.addProject( req.body );
        return res.send(project)
    } catch (error) {
        console.log("error in addProjectController",error);
    }
};

const getProjectController = async (req, res) => {
    try {
        const {developerId} = req.params;
        const projects =await projectService.getProject( developerId );
        return res.send(projects)
    } catch (error) {
        console.log("error in getProjectController",error);
    }
};



module.exports = {addProjectController,getProjectController}
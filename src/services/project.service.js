const Project =
require("../models/project");

const addProject = async ({developerId,title,description,category,techStack,githubLink,image,featured}) => {
    const project =await Project.create({
        developerId,
        title,
        description,
        category,
        techStack,
        githubLink,
        image,
        featured
    });
    return project;
};

const getProject = async ( developerId) => {
    const projects =
    await Project.find({ developerId });
    return projects;
};


module.exports = {addProject,getProject}
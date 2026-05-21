function showPage(pageId){
    document.getElementById("about-page").classList.add("hidden");
    document.getElementById("resume-page").classList.add("hidden");
    document.getElementById("portfolio-page").classList.add("hidden");
    document.getElementById("blog-page").classList.add("hidden");
    document.getElementById("contact-page").classList.add("hidden");
    document.getElementById(pageId).classList.remove("hidden");

    document.getElementById("about-btn").classList.remove("active");
    document.getElementById("resume-btn").classList.remove("active");
    document.getElementById("portfolio-btn").classList.remove("active");
    document.getElementById("blog-btn").classList.remove("active");
    document.getElementById("contact-btn").classList.remove("active");

    if(pageId == "about-page"){
        document.getElementById("about-btn").classList.add("active");
    }
    if(pageId == "resume-page"){
        document.getElementById("resume-btn").classList.add("active");
    }
    if(pageId == "portfolio-page"){
        document.getElementById("portfolio-btn").classList.add("active");
    }
    if(pageId == "blog-page"){
        document.getElementById("blog-btn").classList.add("active");
    }
    if(pageId == "contact-page"){
        document.getElementById("contact-btn").classList.add("active");
    }
}


async function fetchApi() {
    const response = await fetch("http://localhost:5008/developer/get/6a0807cd131d3bd8a401cdd0",{
        method : "GET"
    });
    const data = await response.json();
    console.log(data.profileImage);
    document.getElementById("name").innerText = data.name;
    document.getElementById("role").innerText = data.role;
    document.getElementById("email").innerText = data.email;
    document.getElementById("phone").innerText = data.phone;
    document.getElementById("bio").innerText = data.bio;
    document.getElementById("location").innerText = data.location;
    const formattedDate = new Date(data.birthday).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric"
    });
    document.getElementById("birthday").innerText = formattedDate;
    document.getElementById("profileImage").src =`http://localhost:5008/${data.profileImage.replace(/\\/g, "/")}`;

    const resumeDownload = document.getElementById("resume-download");
    if (data.resume) {
        const resumePath = data.resume.replace(/\\/g, "/");
        const resumeFileName = resumePath.split("/").pop();
        resumeDownload.href = `http://localhost:5008/${resumePath}`;
        resumeDownload.download = resumeFileName;
        resumeDownload.classList.remove("hidden");
    }
}

fetchApi();


async function getServices() {
    const response = await fetch("http://localhost:5008/service/get/6a0807cd131d3bd8a401cdd0");
    const services = await response.json();
    console.log(services);
    const cardContainer = document.getElementById("cards");
    services.forEach((service) => {
        cardContainer.innerHTML += `
        <div class="card">
            <div class="card-icon">
                <i class="${service.icon}"></i>
            </div>
            <div class="card-text">
                <h3>
                    ${service.title}
                </h3>
                <p>
                    ${service.description}
                </p>
            </div>
        </div>
        `;
    });
}

getServices();


async function getResume() {
    const response =await fetch("http://localhost:5008/resume/get/6a0807cd131d3bd8a401cdd0");
    const resume = await response.json();
    console.log(resume);
    const educationContainer = document.getElementById("education-container");
    const experienceContainer = document.getElementById("experience-container");
    const skillsContainer =document.getElementById("skills-container");

    resume.education.forEach(
    (edu)=>{
        educationContainer.innerHTML += `
        <div class="resume-card">
            <div class="resume-top">
                <div class="resume-title">
                    ${edu.course}
                </div>
                <div class="resume-year">
                    ${edu.startYear}
                    -
                    ${edu.endYear}
                </div>
            </div>
            <div class="resume-subtitle">
                ${edu.institute}
            </div>
            <div class="resume-desc">
                ${edu.description}
            </div>
        </div>
        `;
    });

    resume.experience.forEach(
    (exp)=>{
        experienceContainer.innerHTML += `
        <div class="resume-card">
            <div class="resume-top">
                <div class="resume-title">
                    ${exp.title}
                </div>
                <div class="resume-year">
                    ${exp.startYear}
                    -
                    ${exp.endYear}
                </div>
            </div>
            <div class="resume-desc">
                ${exp.description}
            </div>
        </div>
        `;
    });

    resume.skills.forEach(
    (skill)=>{
        skillsContainer.innerHTML += `
        <div class="skill">
            ${skill.name}
        </div>
        `;
    });

}

getResume();


async function getContact() {
    const response =await fetch("http://localhost:5008/contact/get/6a0807cd131d3bd8a401cdd0");
    const contact = await response.json();
    console.log(contact);
    document.getElementById("contact-email").innerText = contact.email;
    document.getElementById("contact-email").href =`mailto:${contact.email}`;
    document.getElementById( "contact-phone").innerText =contact.phone;
    document.getElementById( "contact-phone").href =`tel:${contact.phone}`;
    document.getElementById("contact-github").innerText ="https://github.com/Aryannanu";
    document.getElementById("contact-github").href =contact.github;
    document.getElementById("contact-linkedin").innerText ="Aryan Yadav";
    document.getElementById("contact-linkedin").href =contact.linkedin;
    document.getElementById("contact-instagram").innerText ="aryyan.ydv";
    document.getElementById("contact-instagram").href =contact.instagram;
    document.getElementById("contact-location").innerText =contact.location;
}

getContact();


async function getProjects(){
    const response =await fetch("http://localhost:5008/project/get/6a0807cd131d3bd8a401cdd0");
    const projects = await response.json();
    console.log(projects);
    const container = document.getElementById("project-container");
    projects.forEach(
    (project)=>{
        let techHtml = "";
        project.techStack
        .forEach((tech)=>{
            techHtml += `
            <div class="tech">
                ${tech}
            </div>
            `;
        });
        container.innerHTML += `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="">
            </div>
            <div class="project-content">
                <div class="project-title">
                    ${project.title}
                </div>
                <div class="project-desc">
                    ${project.description}
                </div>
                <div class="tech-stack">
                    ${techHtml}
                </div>
                <a class="github-btn" href= "${project.githubLink}" target="_blank">
                    GitHub
                </a>
            </div>
        </div>
        `;
    });
}

getProjects();
import React from "react";
import Project from "../components/Project";
import craveit from "../assets/craveit.png";
import pokequiz from "../assets/pokequiz.png";
import shareish from "../assets/shareish.png";

function Portfolio() {
    const projects = [
        {
            title: "Level 1",
            description: "Front End with REST APIs",
            name:"Crave It!",
            role: "Backend Engineer/Project Manager",
            image: craveit,
            url: "https://crispysodium.github.io/crave_masters/",
            repo: "https://github.com/crispysodium/crave_masters",
            // technologies: "Materialize by Google, FourSquare API, MealsDB API",
            level: "HTML, CSS: Materialize by Google, Javascript, RESTful APIs: FourSquare, MealsDB",
            intro: "You know that moment when baby birds are pushed out of the nest? This was kind of that moment for me. I had gotten comfortable with HTML and Javascript. CSS was still challenging to understand, and we had just learned about RESTful APIs.", 
            blurb: "This was the first ever collaborative website I had built. Using two APIs, we created a platform where you could find a restaurant or a recipe of a certain cuisine. The website design was crafted carefully to encourage the user's appetite and simple enough for anyone to navigate. It's definitely a minimum viable product with more ambitious features hopefully implemented in the future."

        },
        {
            title: "Level 2",
            description: "MVC with SQL",
            name:"Poke Quiz",
            role: "Backend Engineer/Project Manager",
            image: pokequiz,
            url: "https://radiant-inlet-24995.herokuapp.com/",
            repo: "https://github.com/setocourtney/quiz-masters",
            // technologies: "Foundation CSS, Node.js, Express",
            level: "HTML, CSS: Foundation, Javascript, Node.js, Express, SQL, Sequelize",
            intro: "Backend? Servers? MVC? Concepts previously foreign to me are now natural and common. I felt like I had been flying pretty well on my new coding wings, and now had to learn how to soar up higher altitudes. Coupling this with my love for trivia games and pokemon, this next project was completed during the very beginning of the stay-at-home order.",
            blurb: "Moving into developing more complex website, this project showcases custom backend development with a SQL database. We used two different datasets to combine pokemon characters with jeopardy questions to provide a new game to play during quarantine. I will admit the game aspect does need improvement. I recommend experiencing it on mobile."
        },
        {
            title: "Level 3",
            description: "Full-Stack with React",
            name:"Shareish",
            role: "Frontend Engineer/Project Manager",
            image: shareish,
            url: "https://ancient-crag-34328.herokuapp.com/",
            repo: "https://github.com/Brigmu/Sharemasters",
            // technologies: "Bulma, MERN stack, Cloudinary",
            level: "CSS: Bulma, Mongo, Express, React, Node.js (aka MERN stack), Cloud services: Cloudinary",
            intro: "This was a culmination of the Full-Stack program. The concepts that JSX and React are built upon really help to accelerate any front-end web developers. This was an ambitious idea to code in 2 weeks, and I am proud of the work we finished.",
            blurb: "This website is a MERN stack application that provides an item rental platform for registered users. The backend consists of a NoSQL Mongo database, while we harness the flexible power of React to dynamically render our frontend. Additionally we connect to cloud services for image uploading, and secure user authentication."
        }
    ]
    return (
        <section id="projects" className="section category">
            <div className="container">
                {/* <div className="section"> */}
                    <div className="header notification is-warning">
                        <h1 className="title is-3">Projects</h1>
                    </div>
                        {projects.map(project => {
                            return(
                                <div key={project.name} className="columns">
                                    {projects.indexOf(project) % 2 === 0 ? 
                                    <>
                                    <div className="column is-5">
                                        <h1 className="title is-4">{project.title}</h1>
                                        <h2 className="subtitle is-5">{project.description}</h2>
                                        <Project
                                            image={project.image}
                                            url={project.url}
                                            name={project.name}
                                            role={project.role}
                                            // tech={project.technologies}
                                            repo={project.repo}
                                        />
                                    </div>
                                    <div className="column is-2"></div>
                                    <div className="column is-5">
                                        <br></br>
                                        <br></br>
                                        <h2 className="title is-5">
                                            Technologies: {project.level}
                                        </h2>
                                        <p>{project.intro}</p>
                                        <br></br>
                                        <p>{project.blurb}</p>
                                    </div>
                                    </>
                                    :
                                    <>
                                    <div className="column is-5">
                                        <br></br>
                                        <br></br>
                                        <h2 className="title is-5">
                                            Technologies: {project.level}
                                        </h2>
                                        <p>{project.intro}</p>
                                        <br></br>
                                        <p>{project.blurb}</p>
                                    </div>
                                    <div className="column is-2"></div>
                                    <br></br>
                                    <div key={projects.indexOf(project)} className="column is-5">
                                    <h1 className="title is-4">{project.title}</h1>
                                    <h2 className="subtitle is-5">{project.description}</h2>
                                    <Project
                                        image={project.image}
                                        url={project.url}
                                        name={project.name}
                                        role={project.role}
                                        tech={project.technologies}
                                        blurb={project.blurb}
                                        repo={project.repo}
                                    />
                                    </div>
                                    </>
                                    }
                                </div>
                            );
                        })}
                        <br></br>
                        <br></br>
                    <div className="notification is-warning">
                        <h2 className="title is-5">Looking for my resume? Contact me!</h2>
                    </div>
                {/* </div> */}
                
            </div>
        </section>       
    );
}

export default Portfolio;
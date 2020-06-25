import React from "react";

function Project(props) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <a href={props.url} target="_blank" rel="noopener noreferrer"><img src={props.image} alt={`${props.name}`}></img></a>
                </figure>
            </div>
            <div className="card-content">
                <h1 className="title is-3">{props.name}</h1>
                <h2 className="subtitle">{props.role}</h2>
                <h2 className="subtitle">{props.tech}</h2>
                <br></br>
                <div className="field is-grouped">
                <div className="control">
                    <a className="button is-dark" href={props.repo} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </div>
                <div className="control">
                    <a className="button" href={props.url} target="_blank" rel="noopener noreferrer">
                        Website
                    </a>
                </div>
                </div>
            </div>

        </div>
    );
}

export default Project;
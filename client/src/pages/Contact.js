import React, { useState } from "react";
import axios from "axios";

function Contact() {

    const email = "chri3na@gmail.com"
    const message = "Click to Show Email";
    const [state, setState] = useState({email: "", message: message});
    const [toggle, setToggle] = useState(false);
    const resetForm = () => {
        document.getElementById("contact-form").reset();
    }

    const handleSubmit = e => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        console.log("this is message from handleSubmit: ", message);
        axios.post("/send", {
            data: {
                name: name,   
                email: email,  
                message: message
            }
        }).then((response)=>{
            console.log(response.data);
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    };

    const showEmail = () => {
        if(toggle) {
            setToggle(false);
            setState({...state, email: "", message: message});
        } else {
            setToggle(true);
            setState({...state, email: email, message: "Click to Hide Email"});
        }
    }

    // const copyEmail = () => {
        // email.select();
        // document.execCommand("copy");
        // alert("email copied to clipboard!");
    // }

    return (
        <section id="contact" className="section category">
            <div className="container">
                <div className="header notification">
                    <h1 className="title is-5">
                        Connect with me
                    </h1>
                    
                    <div className="field is-grouped">
                        <div className="control">
                            <a className="button is-info" href="https://www.linkedin.com/in/christinesodium122/" target="_blank" rel="noopener noreferrer">
                                <span className="icon is-large">
                                    <i className="fab fa-2x fa-linkedin-in"></i>
                                </span>
                            </a>
                        </div>
                        <div className="control">
                            <a className="button is-dark" href="https://github.com/crispysodium" target="_blank" rel="noopener noreferrer">
                                <span className="icon is-large">
                                    <i className="fab fa-2x fa-github"></i>
                                </span>
                            </a>
                        </div>
                        <div className="control">
                            <button className="button is-link is-inverted" onClick={showEmail}><span className="icon is-large"><i class="fas fa-3x fa-envelope-square"></i></span></button>
                        </div>
                        <div className="control">
                            <a className="button is-light">{state.email}</a>
                            {/* <button className={toggle ? "button is-dark"}>Copy</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    );
}

export default Contact;
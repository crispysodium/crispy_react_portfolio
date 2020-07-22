import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Content from "./Content";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

function Home() {
    const [state, setState] = useState("");

    useEffect(() => {
        const scrollItems = document.querySelectorAll(".category");
        console.log("scrollItems: ", scrollItems);

        const menuItems = document.querySelectorAll(".menu-item");

        let lastId = "";

        console.log(window);

        const hero = document.querySelector(".hero");
        console.log("hero: ", hero.clientHeight);
        
        const bio = document.querySelector("#about");
        console.log("bio: ", bio.clientHeight);
        
        const projects = document.querySelector("#portfolio");
        console.log("portfolio: ", projects.clientHeight);

        window.addEventListener("scroll", () => {
            let scrollPos = 100;
            console.log("window.pageYOffset: ", window.pageYOffset);
            // console.log("window: ", window); window.innerheight;
            let fromTop = window.pageYOffset;
            console.log("fromTop: ", fromTop);
        
            let current = [];

            [...scrollItems].map(item => {
                // console.log(item);
                const rect = item.getBoundingClientRect();
                // console.log(item.textContent + " rect: ", rect);
                // console.log(item.textContent + " offset: ", item.offsetTop);
                if(fromTop > scrollPos) {
                    console.log("scrollPos before += : ", scrollPos);
                    scrollPos += item.clientHeight;

                    current.push(item) 
                }
            });
            console.log("current: ", current);

            current = current[current.length - 1];
            let id = current ? current.id : "";
            if (lastId !== id) {
                lastId = id;
                console.log("lastId: ", lastId);
                setState(lastId);
                console.log("this be state: ", state);
                // menuItems.forEach((elem, index) => {
                //     elem.classList.remove("active");
                //     const filteredItems = [...menuItems].filter(elem => elem.children[0].getAttribute("href") === `#${id}`);
                //     filteredItems[0].classList.add("active");
                // })
            }

        })
    })

    return (
        <div className="body">
            <Header />
            <Content toggle={state}/>
            <Footer />
        </div>
    );
}

export default Home;
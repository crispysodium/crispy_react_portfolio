import React, { useState, useEffect } from "react";
import "./styles.css";
import { Columns, Container, Menu, Section } from "react-bulma-components";

function Sidebar(props) {
    // const [state, setState] = useState("");
    const sections = ["About", "Projects", "Contact"];

    // function isInViewport(element) {
    //     console.log(element)
    //     const rect = element.getBoundingClientRect();
    //     return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //     );
    // }

    // useEffect(() => {
    //     const scrollItems = document.querySelectorAll(".header");
    //     const menuItems = document.querySelectorAll(".menu-item");
    //     let lastId = "";
    //     window.addEventListener("scroll", () => {
    //         console.log("window.pageYOffset: ", window.pageYOffset);
    //         let fromTop = window.pageYOffset;
    //         console.log("fromTop: ", fromTop);
    //         const body = document.querySelector(".hero");
    //         console.log("body.offsetTop: ", body.offsetTop);
    //         let current = [];

    //         [...scrollItems].map(item => {
    //             console.log("this is " + item.textContent + " offset: ", item.offsetTop);
    //             if(item.offsetTop < fromTop) { 
    //                 current.push(item) 
    //             }
    //         });
    //         console.log(current);

    //         current = current[current.length - 1];
    //         let id = current ? current.id : "";
    //         if (lastId !== id) {
    //             lastId = id;
    //             console.log("lastId: ", lastId);
    //             setState(lastId);
    //             console.log(state);
    //             // menuItems.forEach((elem, index) => {
    //             //     elem.classList.remove("active");
    //             //     const filteredItems = [...menuItems].filter(elem => elem.children[0].getAttribute("href") === `#${id}`);
    //             //     filteredItems[0].classList.add("active");
    //             // })
    //         }

    //     })
    // })

    return (
        // add onScroll function to columns container
        <Columns id="content">
            <Columns.Column size={2}>
                <Section className="sticky">
                    <Container>
                        <Menu>
                            <Menu.List title="Navigation">
                                {sections.map(section =>
                                    <Menu.List.Item key={section} className="menu-item" active={props.toggle == section.toLowerCase() ? true: false}>
                                        <a href={`#${section}`}>{section}</a>
                                    </Menu.List.Item>
                                )}
                                
                                {/* <Menu.List.Item>
                                    Projects
                                </Menu.List.Item>
                                <Menu.List.Item>
                                    Contact
                                </Menu.List.Item> */}
                            </Menu.List>
                        </Menu>
                    </Container>
                </Section>
            </Columns.Column>
            <Columns.Column size={10}>
                {props.children}
            </Columns.Column>
        </Columns>
    );
}

export default Sidebar;
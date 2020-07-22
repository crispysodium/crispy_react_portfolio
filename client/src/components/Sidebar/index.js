import React, { useState, useEffect } from "react";
import "./styles.css";
import { Columns, Container, Menu, Section } from "react-bulma-components";

function Sidebar(props) {
    const sections = ["About", "Projects", "Contact"];

    return (
        // add onScroll function to columns container
        <Columns id="content">
            <Columns.Column size={2} className="sticky">
                <Section className="sticky">
                    <Container>
                        <Menu>
                            <Menu.List title="Navigation">
                                {sections.map(section =>
                                    <Menu.List.Item key={section} className="menu-item" href={`#${section.toLowerCase()}`}active={props.toggle == section.toLowerCase() ? true: false}>
                                        {section}
                                    </Menu.List.Item>
                                )}
                                
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
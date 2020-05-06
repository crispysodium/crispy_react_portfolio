import React from "react";
import Bio from "../components/Bio";
import Header from "../components/Header";
import Container from "../components/Container";
 
function Home() {
    return (
        <div>
            <Header />
            {/* <Container> */}
                <Bio url="/public/assets/profile-pic.jpg" />    
            {/* </Container> */}
        </div>
    );
}

export default Home;
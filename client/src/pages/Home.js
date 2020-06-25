import React from "react";
import Bio from "../components/Bio";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "../components/Footer";
 
function Home() {

    const handleScroll = e => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth" 
        });
    }

    return (
        <div>
            <Navbar 
                handleScroll={handleScroll}
            />
            <Header />
            <Bio />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
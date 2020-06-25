import React from "react";

function Header(props) {

    return (
        <section ref={props.propRef} id="home" className="hero is-warning is-fullheight">
        {/* <!-- Hero head: will stick at the top --> */}
        <div className="hero-head">
        </div>
      
        {/* <!-- Hero content: will be in the middle --> */}
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
                CHRISTINE NA
            </h1>
            <h2 className="subtitle">
              Welcome to my portfolio
            </h2>
          </div>
        </div>
      
        {/* <!-- Hero footer: will stick at the bottom --> */}
      </section>
    );
}

export default Header;
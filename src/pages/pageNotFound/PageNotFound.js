import React from 'react';
import {Link} from "react-router-dom";

import './PageNotFound.css';


function PageNotFound() {
    return (

        <>
            <section className="outer-container" id="outer-container-pageNotFound">
                <div className="inner-container" id="inner-container-pageNotFound">
                    <article className="pageNotFound">
                        <h1 className="PNF-title">Page under development</h1>
                        <h3>Go back to... <Link to="/">Homepage!</Link></h3>
                    </article>
                </div>
            </section>


        </>
    );
}

export default PageNotFound;
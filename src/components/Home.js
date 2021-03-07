import React from 'react';
import Headline from "./Headline";

import "../resources/css/Home.css";

function Home(props) {
    return (
        <main className={"home-main"}>
            <Headline/>
        </main>
    );
}

export default Home;
import React from "react";
import './Home.css';

function Home() {
    return (
        <div className = "home">
            <div className = "home__container">

                <div className = "one">
                    <h1><b>Earn your <br/>
                    first income </b>
                    </h1>
                </div>

                <div className = "two">
                    <p>Real companies, real projects, real earnings and real money
                    <br/><br/>
                    <pre>
‍Smart opportunities for the smart generation
</pre>
                    </p>
                </div>

                <div className = "three">
                    <p>
                        Download App
                    </p>
                    {/*eslint-disable-next-line */}
                    <a href = "#">
                        <img src = "https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/638c80746a8a27189ca05fb9_image%2029.png" alt = "appstore" className = "Appstore" />
                    </a>
                    {/*eslint-disable-next-line */}
                    <a href = "#">
                        <img src = "https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/638c80744c238bae49b47ff4_image%2027.png" alt = "googleplay" className ="Playstore"/>
                    </a>
                </div>

            </div>
            <img src = "https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro.png" alt = "earnmoney" className = "Sharktank" />
        </div>
    )
}

export default Home;
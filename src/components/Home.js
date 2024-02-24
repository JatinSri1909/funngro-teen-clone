import React from "react";
import './Home.css';

function Home() {
    return (
        <div class = "home">
            <div class = "home__container">

                <div class = "one">
                    <h1>Earn your <br/>
                    first income 
                    </h1>
                </div>

                <div class = "two">
                    <p>Real companies, real projects, real earnings and real money
                    <br/><br/>
                    <pre>
‍Smart opportunities for the smart generation
</pre>
                    </p>
                </div>

                <div class = "three">
                    <p>
                        Download App
                    </p>
                    <a href = "#">
                        <img src = "https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/638c80746a8a27189ca05fb9_image%2029.png" alt = "appstore" class = "Appstore" />
                    </a>
                    <a href = "#">
                        <img src = "https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/638c80744c238bae49b47ff4_image%2027.png" alt = "googleplay" class ="Playstore"/>
                    </a>
                </div>

            </div>
            <img src = "https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro.png" alt = "earnmoney" class = "Sharktank" />
        </div>
    )
}

export default Home;
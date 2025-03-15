import React from 'react'

const Projects = () => {
  return (
    <section id="project" className="project">
    
        
            <h1>Projects</h1>
       
        
        <div className="cards">
           
            
                <div>
                    <a href="" target="_blank">
                        <div>
                            <img src="src/assets/url.png" alt=""/>
                               

                            <h3>URL TABBER</h3>
                            <p>A Chrome extension to easily save tabs in Google local storage.</p>
                        </div>
                    </a>
                    

                    <a href="https://shopping-cartbot.netlify.app/" target="_blank">
                        <div>
                        <img src="src/assets/cart.png" alt=""/>                            <h3>SHOPPING CART BOT</h3>
                            <p>A shopping cart website allows users to create and manage a grocery list.</p>
                        </div>
                    </a>

                    <a href="https://simple-blood-donation.netlify.app/" target="_blank">
                        <div>
                        <img src="src/assets/logo blood.jpg" alt=""/>                            <h3>BLOOD DONATION NOTIFICATION SYSTEM</h3>
                            <p>A system that alerts registered donors about urgent blood donation needs.</p>
                        </div>
                    </a>

                    <a href="https://simple-e-learning.netlify.app/" target="_blank">
                        <div>
                        <img src="src/assets/e-learn.jpeg" alt=""/>                            <h3>E-LEARNING WEBSITE</h3>
                            <p>An online learning platform with courses and tutorials.</p>
                        </div>
                    </a>
                    
                </div>
            
        </div>
</section>
  )
}

export default Projects

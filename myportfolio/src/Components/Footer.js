import React from 'react'

function Footer() {
    return(
        <footer>
            <div className="flexIconsContainer">
                <div className="iconContainer" id="iconInsta">
                    <img src="images/instaIcon.svg" alt="instagram"/>                
                </div>
                <div className="iconContainer" id="iconFb">
                    <img src="images/linkedinIcon.svg" alt="linkedin"/> 
                </div>
                <div className="iconContainer" id="iconLdn">
                    <img src="images/facebookIcon.svg" alt="facebook"/> 
                </div>
                <div className="iconContainer" id="iconGit">
                    <img src="images/gitIcon.svg" alt="github"/> 
                </div>
            </div>

            <div className="copyright">
                <h5 className="copyrightText">JORGE GUERREIRO
                    <span>{'\u00A9'}2020</span>
                 </h5>
            </div>
            
        </footer>
    )
}

export default Footer
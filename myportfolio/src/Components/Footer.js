import React from 'react'

function Footer() {
    return(
        <footer>
            <div className="flexIconsContainer">
                <div className="iconContainer" id="iconInsta">
                    <a href="https://www.instagram.com/crcguerreiro/"><img src="images/instaIcon.svg" alt="instagram"/></a>                
                </div>
                <div className="iconContainer" id="iconFb">
                    <a href="https://www.linkedin.com/in/jorge-guerreiro-bb0033a8/"><img src="images/linkedinIcon.svg" alt="linkedin"/></a>
                </div>
                <div className="iconContainer" id="iconLdn">
                    <a href="https://www.facebook.com/jorge.guerreiro.3139/"><img src="images/facebookIcon.svg" alt="facebook"/></a>
                </div>
                <div className="iconContainer" id="iconGit">
                    <a href="https://github.com/JRBGuerreiro"><img src="images/gitIcon.svg" alt="github"/></a>
                </div>
            </div>

            <div className="copyright">
                <p className="copyrightText">JORGE GUERREIRO
                    <span>{'\u00A9'}2020</span>
                 </p>
            </div>
            
        </footer>
    )
}

export default Footer
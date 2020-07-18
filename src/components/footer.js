import React from 'react'

import FooterStyling from './componentStyling/footer.module.scss' 

const Footer = () => {
    return(
        <footer>
            <p>crafted with love, some <a className={FooterStyling.footerLink} href="https://youtu.be/2MtOpB5LlUA?t=225">quality music</a>, and <a className={FooterStyling.footerLink} href="https://www.gatsbyjs.org/">gatsby</a>. </p>
        </footer>
    )
}

export default Footer;
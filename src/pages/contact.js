import React from 'react'

import Layout from '../components/layout'

const Contact = () => {
    return (
        <Layout>
            <h2>contact me</h2>
            <div className="content">
                <p>if there is anything you want to chat about, please don't hesitate to contact me through any of the following:</p>

                <ul className="contactList">
                    <li>
                        <a href="https://github.com/valkyrie-max">github</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/alisacodes">twitter</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/alisakitkina/">linkedin</a>
                    </li>
                    <li>
                        <a href="https://alisacodes.dev/">portfolio</a>
                    </li>
                </ul>
            </div>
        </Layout>
    )
}

export default Contact
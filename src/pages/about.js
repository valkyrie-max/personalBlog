import React from 'react'
import Layout from '../components/layout'

const About = () => {
    return (
        <Layout> 
            <h2>about me</h2>

            <p>As mentioned in the title, my name is Alisa. I'm pretty bad with talking about myself but here is some basic FAQ about me, so you can learn a little bit more about me.</p>

            <ol className="faq">
                <li>
                    <p className="question">Where are your from?</p>
                    <p className="answer">I was born and raised in Russia up until I was 17.</p>
                </li>
                <li>
                    <p className="question">Where are you based right now?</p>
                    <p className="answer">At 17 I moved to Toronto, Canada to pursue better education. So, I am currently still in Toronto.</p>
                </li>
                <li>
                    <p className="question">Have you always been in tech?</p>
                    <p className="answer">No. The degree I pursued before going into the coding bootcamp was the complete opposite of tech or anything related to it. I didn't quite enjoy the path I took, so after finishing my Bachelors and taking some time off, I went into the coding bootcamp and made a career switch (although, I am currently looking for a job).</p>
                </li>
                <li>
                    <p className="question">What languages do you know? Which ones do you want to learn?</p>
                    <p className="answer">If we are talking computer languages, I know HTML, CSS & SCSS, and JavaScript (including its libraries and frameworks such as JQuery, React, and Gatsby). As I progress in my coding journey, I would love to pick up some backend languages (PHP, Python) and some databases (MongoBD, SQL)</p>
                    <p className="answer">If we are talking human languages, Russian is my native, I speak fluent\advanced English, and the level of my Japanese is basic. In the future I would love to pick up Korean.</p>
                </li>
                <li>
                    <p className="question">Fun question: What anime do you like to watch? What are some of your favorite characters?</p>
                    <p className="answer">It is really hard to pick when it comes to what I like to watch because there is no specific genre or type of show I love. With that said, my all time favorite anime include (but not limited to): JoJo's Bizarre Adventure, Naruto, D.Gray Man, and Attack on Titan. I bet some of you think that I am here only for the mainstream shows but I assure you, it's not the case. These anime had a huge impact on my life, so I consider them the closest to my heart.</p>
                    <p className="answer">As for my favorite characters, I have a bunch of those too but I will limit them to the anime I listed above. Here they are (in no particular order): Kakyoin Noriaki, Guido Mista, Giorno Giovanna; Sasuke Uchiha, Temari; Allen Walker, Lavi; Eren Yeager, Levi Ackerman.</p>
                </li>
            </ol>
        </Layout>
    )
}

export default About; 
import React, { useEffect } from 'react'
import '../css/Style.css'

function About() {

    useEffect(()=>{
        const goToTop = () => {
            window.scrollTo(0,0)
        }

        goToTop()
    }, [])

    return (
        <section className="about-container">
            <article>
                <h2>Who We Are.</h2>
                <p style={{fontSize:'14px'}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                    distinctio eius sunt dicta corporis architecto ab sapiente illo
                    voluptates exercitationem porro error molestiae facilis doloribus
                    omnis, minima explicabo iure quidem quis aperiam aut obcaecati
                    commodi alias debitis. Quibusdam corrupti possimus praesentium illum
                    magnam sunt odit laboriosam laudantium quae. Doloribus, mollitia!
                </p>
            </article>

            <article>
                <h2>Our Mission.</h2>
                <p style={{fontSize:'14px'}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                    distinctio eius sunt dicta corporis architecto ab sapiente illo
                    voluptates exercitationem porro error molestiae facilis doloribus
                    omnis, minima explicabo iure quidem quis aperiam aut obcaecati
                    commodi alias debitis. Quibusdam corrupti possimus praesentium illum
                    magnam sunt odit laboriosam laudantium quae. Doloribus, mollitia!
                </p>
            </article>

            <article>
                <h2>Our Vision.</h2>
                <p style={{fontSize:'14px'}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                    distinctio eius sunt dicta corporis architecto ab sapiente illo
                    voluptates exercitationem porro error molestiae facilis doloribus
                    omnis, minima explicabo iure quidem quis aperiam aut obcaecati
                    commodi alias debitis. Quibusdam corrupti possimus praesentium illum
                    magnam sunt odit laboriosam laudantium quae. Doloribus, mollitia!
                </p>
            </article>

            <article style={{marginBottom: '30px'}}>
                <h2>Our Core Values.</h2>
                <p style={{fontSize:'14px'}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                    distinctio eius sunt dicta corporis architecto ab sapiente illo
                    voluptates exercitationem porro error molestiae facilis doloribus
                    omnis, minima explicabo iure quidem quis aperiam aut obcaecati
                    commodi alias debitis. Quibusdam corrupti possimus praesentium illum
                    magnam sunt odit laboriosam laudantium quae. Doloribus, mollitia!
                </p>
            </article>
        </section>
    )
}

export default About

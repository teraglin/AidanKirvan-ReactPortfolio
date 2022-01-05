import React from 'react'

const About = (props) => {
    const {mobileView} = props;

    return (
        <div id="about" className="page-component-container-about w-full p-5">
            <h1 className="page-heading text-3xl text-left">ABOUT ME</h1>
            <div className="profile-container
                            flex
                            items-center
                            justify-center
                            flex-col
                            sm:flex-row
                            w-full
                            sm:w-11/12
                            my-5">
                <div className="profile-portrait-container flex justify-center items-center w-11/12 sm:w-4/12 xl:w-3/12">
                    <img alt={'profile'} src={"https://avatars.githubusercontent.com/u/67266954?v=4"} className="profile-portrait" />
                </div>
                
                <div className="profile-info my-5 sm:mt-0 w-full sm:w-8/12 xl:w-9/12 h-3/6 flex flex-col items-center justify-center">
                    <h1 className="summary-table-head w-10/12 xl:w-8/12">Full Stack Developer</h1>
                    <table className="summary-table w-11/12 xl:w-4/6">
                        <tbody>
                            <tr>
                                <td>Artist</td>
                                <td>Musician</td>
                            </tr>
                            <tr>
                                <td>Writer</td>
                                <td>DM / GM</td>
                            </tr>
                            <tr>
                                <td>Lizard Dad</td>
                                <td>Cat Servant</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            {/* OTHER SKILLS  */}
            <h1 className="page-heading text-3xl text-left">OTHER SKILLS</h1>
            <table className="about-table w-11/12 xl:w-4/6 xl:text-lg">
                <tbody>
                    <tr>
                        <td>Illustration</td>
                        <td>Writing</td>
                    </tr>

                    <tr>
                        <td>Sound Engineering</td>
                        <td>Images/Graphics</td>
                    </tr>

                    <tr>
                        <td>Logic X</td>
                        <td>Ableton Live</td>
                    </tr>

                    <tr>
                        <td>Procreate</td>
                        <td>Photoshop</td>
                    </tr>

                    <tr>
                        <td>Saxophone</td>
                        <td>Guitar</td>
                    </tr>
                </tbody>

            </table>

            {/* INTERESTS  */}
            <h1 className="page-heading text-3xl text-left">INTERESTS</h1>
            <table className="about-table w-11/12 xl:w-4/6 xl:text-lg">
                <tbody>
                    <tr>
                        <td>Tabletop Gaming</td>

                    </tr>

                    <tr>
                        <td>Roleplay Gaming</td>
                    </tr>

                    <tr>
                        <td>Web and App Integration for Tabletop Gaming</td>
                    </tr>

                    <tr>
                        <td>Videogames</td>
                    </tr>

                    <tr>
                        <td>Music</td>
                    </tr>

                    <tr>
                        <td>Sound Recording and Production</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default About
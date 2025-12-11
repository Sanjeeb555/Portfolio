import React from "react"

function About() {

    var x = document.getElementsByClassName("tab-links");
    var y = document.getElementsByClassName("tab-contents");

    function opentab(event, tabname) {
        for (var i of x) {
            i.classList.remove("active-link");
        }
        for (i of y) {
            i.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src={require("../images/ProfePhoto3.png")} alt="Profile Pic" />
                    </div>
                    <div className="about-col-2">
                        <h1 className="subtitle">About Me</h1>
                        <p style={{ letterSpacing: 1, fontWeight: 700 }}>I am an entry-level Software Developer specializing in frontend and application development, with a strong focus on continuous improvement.
I enjoy enhancing user experiences, solving real-world problems, and building new features that improve application functionality.
I am passionate about Web Development and love working across various online platforms.</p>
                        <div className="tab-titles">
                            <p className="tab-links active-link" onClick={(event) => opentab(event, 'skills')}>Skills</p>
                            {/* <p className="tab-links" onClick={(event)=>opentab(event,'experience')}>Experience</p> */}
                            <p className="tab-links" onClick={(event) => opentab(event, 'education')}>Education</p>
                        </div>
                        <div className="tab-contents active-tab" id="skills">
                            <ul>
                                <li><span>Programming Languages</span><br />C++, JAVA, PYTHON, JAVASCRIPT</li>
                                <li><span>Web Development</span><br />HTML, CSS, JAVASCRIPT</li>
                                <li><span>Others</span><br />SQL, GIT, Data Structures, AWS, VM, Jenkins</li>
                            </ul>
                        </div>
                        {/* <div className="tab-contents" id="experience">
                        <ul>
                            <li><span>2022/June-Current</span><br />Associate Product Developer at Edgeverve(Infosys Finacle)</li>-
                            <li><span>2022/Feb-2022/June</span><br />Intern at Persistent System</li>-
                        </ul>
                    </div> */}
                        <div className="tab-contents" id="education">
                            <ul>
                                <li><span>2022-2026</span><br />Bachelor of Technology in Computer Science</li>
                                <li><span>2020-2022</span><br />12th Science(PCMB)</li>
                                <li><span>2020</span><br />10TH</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
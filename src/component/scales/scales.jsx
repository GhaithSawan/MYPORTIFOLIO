import React, {  useState } from 'react'
import "./scales.css"
import { MyInfo } from '../../myinfo';
import ProjectModel from '../models/ProjectModel';

const Scales = () => {

    const [projects, setprojects] = useState();
    const [show, setShow] = useState(false);

    const handleShow = (e) => {
        setShow(true)
        setprojects(e.projects)
    };

    return (
        <div className='page Scales'>
            <div className="header w-100 text-center pb-5 " style={{ color: "#fff" }}>
                <h1>My Skills</h1>
            </div>
            <div className="timeline-items container">
                {
                    MyInfo.experience.map((e) => {
                        console.log();
                        return (
                            <div className="timeline-item ">
                                <div className="timeline-dot"></div>
                                <div className="timeline-date">{e.since}</div>
                                <div className="timeline-content text-center">
                                    <h3>{e.name}</h3>
                                    <p>
                                        {e.years}
                                    </p>
                                    {

                                        e.projects ?
                                            <button style={{ border: "none ", outline: "none", borderRadius: "20px", backgroundColor: "#00ffee", boxShadow: "0 0 25px #00ffee", padding: "10px 15px", fontSize: "20px" }} onClick={() => { handleShow(e) }}>View Projects</button>
                                            : ""
                                    }
                                </div>

                            </div>
                        )

                    })
                }

                <ProjectModel show={show} setShow={setShow} projects={projects} />

            </div >
        </div >
    )

}

export default Scales;

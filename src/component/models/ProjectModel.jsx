import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProjectCard from './ProjectCard';

const ProjectModel = ({ setShow, show, projects }) => {
    const handleClose = () => setShow(false);
    return (
        <div className='ProjectModel'>
            <Modal show={show} onHide={handleClose} fullscreen={true} style={{ color: "#fff" }}>
                <Modal.Header closeButton style={{ backgroundColor: "#131313" }}>
                    <Modal.Title className='text-center w-100' style={{ color: "#00ffee" }}>My Projects</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "#131313", boxShadow: " 0  0 5px #fff", padding: "2rem", boxShadow: "none", display: "flex", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap", gap: "50px" }}>
                  {
                    projects?.map((e)=>{
                        return(
                            <>
                                <ProjectCard e={e}/>
                            </>
                        )
                    })
                  }
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: "#131313", boxShadow: " 0  0 5px #fff", border: "none" }}>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ProjectModel
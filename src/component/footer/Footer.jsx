import React from 'react'
import Button from 'react-bootstrap/Button';
import { RxInstagramLogo } from "react-icons/rx";
import { MdWhatsapp } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import "./footer.css"
const Footer = () => {
    return (
        <div className='page' id='Contact'>
            <div className="container">
                <div className="header w-100 text-center" style={{ color: "#fff" }}>
                    <h1>Contacts</h1>
                </div>
                <div className="my-5 Contact-types w-100 d-flex align-items-center justify-content-around">
                    <div className="whatsapp">
                        <a href="https://wa.me/0958884004" target="_blank">
                            <Button variant="success">Whatsapp <MdWhatsapp size={"30px"} /></Button>
                        </a>
                    </div>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ghaithx1x2x3@gmail.com" target="_blank">
                        <Button variant="primary">Email <HiOutlineMail size={"30px"} /></Button>
                    </a>
                    <div className="Instagram">
                        <a href="https://www.instagram.com/ghaith_sawan7" target="_blank">
                            <Button variant="warning">Instagram <RxInstagramLogo size={"30px"} /></Button>
                        </a>
                    </div>
                </div>

                <div className="cv  text-center py-5 ">
                    <h3>
                        <a href="../../assets/cv/cv ghaith sawan.pdf" download="cv ghaith sawan.pdf">
                            Download CV
                        </a>
                    </h3>
                </div>
            </div>
        </div >
    )
}

export default Footer
import React from 'react'
import "./HomePage.css"
const Homepage = () => {

  return (
    <div className='page' style={{ height: "100vh" }}>
      <div className='container d-flex align-items-center justify-content-between' style={{ height: "100%" }}>

        <div className="left col-6 h-75 d-flex align-items-center justify-content-center flex-column ">
          <div className="info d-flex align-items-start  flex-column" style={{ color: "#fff" }}>
            <div className='w-100'>
              <h1>Hi,It's <span className='coloredtext'>Ghaith</span></h1>
              <h2 className='mx-2 d-flex ' style={{ marginTop: "10px" }}>
                <span>I'am</span>
                <div className='animattextdiv d-inline-block '>
                  <span className='coloredtext mx-3'>Software Developer</span>
                </div>
              </h2>
            </div>
            <span style={{ fontSize: "15px" }}>
              I am a website developer with extensive experience in designing and programming innovative websites using React. I have in-depth knowledge of securing websites against cyber threats, and have a strong background in detecting and patching vulnerabilities. Here you will find a collection of my projects and works that reflect my passion for this field. If you are interested in collaborating with me, please feel free to get in touch. </span>
            <div className="btns mt-3">
              <button style={{ border: "none ", outline: "none", borderRadius: "15px", backgroundColor: "#00ffee", boxShadow: "0 0 15px #00ffee", padding: "5px 10px", fontSize: "20px" }}> <a href="#Scales" className='ainhome1'>MoreInfo</a></button>
              <button style={{ border: "#00ffee 1px solid ", outline: "none", borderRadius: "20px", backgroundColor: "#121212", padding: "5px 10px", fontSize: "20px" }} className='mx-2 '><a href="#Contact" className='ainhome2'>Contact</a></button>
            </div>
          </div>
        </div>
        <div className="right col-6 h-100 d-flex align-items-center justify-content-center">
          <img src="homepage.png" alt="dsa" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  )
}

export default Homepage
import React from 'react'
import "./Services.css"
import { MyInfo } from '../../myinfo'
const Services = () => {
    return (
        <div className='page ' style={{ padding: "50px 0" }}>
            <div className="container">
                <div className="header w-100 text-center py-5" style={{ color: "#fff" }}>
                    <h1>Services</h1>
                </div>
                <div className="ServicesTables">
                    {
                        MyInfo.services?.map((e) => {
                            return (
                                <div className="Service-item ">
                                    <div className="Service-item-dot"></div>
                                    <div className="Service-item-content">
                                        <h3>{e?.name}</h3>
                                        <p>{e?.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Services
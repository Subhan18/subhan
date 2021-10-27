
import React, { useState, useEffect } from "react";
import menu from "./Assets/more_icon.png"
import share from "./Assets/share.png"
import heart from "./Assets/heart.png"

const Postview = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/allpost', {

        }).then(res => res.json())
            .then(result => {
                console.log(result)
                setData(result.posts)
            })
    })
    return (
        data.map(item => {
            return (
                
                <div>
                   
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="card post">
                                <div className="card-body bg-snow">
                                    <h5>{item.author}</h5>
                                    <p>{item.location}</p>
                                    <img className="menu_more" src={menu} style={{ float: "right", marginTop: "-47px" }} />
                                    <img className="card-image" src={item.photo} style={{ marginLeft: "-16px" }} />
                                    <img src={heart} />
                                    <img className="share" src={share} style={{ marginLeft: "10px" }} />
                                    <h6 className="h">106 likes</h6>
                                    <h4>{item.description}</h4>
                                

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            )
        })
    )
}

export default Postview
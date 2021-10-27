
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
                <div className="card home-card " style={{marginTop:"90px"}}>
                    <div className="card-header" style={{
                        
                        backgroundColor: "white"
                
                    }}>
                        <h5>{item.author}</h5>
                        <p>{item.location}</p>
                        <img className="menu_more" src={menu} alt="menu"style={{float: "right", marginTop: "-47px"}} />
                    </div>

                    <div className="card-image">
                        <img  src={item.photo} alt="post" style={{maxWidth:"500px"}}/>
                    </div>
                    <div className="card-footer" style={{
                        backgroundColor: "white"
                    }}>
                    <img src={heart} />
                    <img className="share" src={share} alt="share" style={{marginLeft:"10px"}} />
                    <h6 className="h">106 likes</h6>
                    <h4>{item.description}</h4>
                
                </div>
                </div>
                </div>

            )
        })
    )
}

export default Postview
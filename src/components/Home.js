import React from "react";
import home from "./images/home.png"
//import '../../src/App.css'
const Home = () => {
    return (
        
            <div class="container-fluid">
                <div className="row">
                    <div class="col-md-6 col-sm-6">
                        <img className="card-img-top" src={home} alt="Card image cap" />
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <h6 className="card-title">10x Team 04</h6>
                        <a href="/postview" style={{border: "2px solid darkgreen",color: "darkgreen",textDecoration:"auto",
                            textAlign: "center",fontSize:"25px",display: "inline-block",padding: "10px 20px",borderRadius: "11px",marginLeft:"35px"}}>Enter</a>
                    </div>
                </div>
            </div>
        
    )
}
export default Home
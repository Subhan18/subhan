import React from "react";
import home from "./images/home.png"
//import '../../src/App.css'
const Home = () => {
    return (

        <div class="container-fluid" >
            <div className="row">
                <div class="col-md-6 col-sm-6">
                    <img className="card-img-top" src={home} alt="Card image cap" style={{
                        width: "300px",
                        height: "450px",
                        marginTop: "22%",
                        marginLeft:"55%"
                    }} />
                </div>
                <div className="col-md-6 col-sm-6" style={{marginTop:"20%"}}>
                    <h1 className="card-title" style={{color:"darkgreen"}}>10x Team 04</h1>
                    <a href="/postview" style={{
                        border: "2px solid darkgreen", color: "darkgreen", textDecoration: "auto",
                        textAlign: "center", fontSize: "25px", display: "inline-block", padding: "10px 20px", borderRadius: "11px", marginLeft: "35px"
                    }}>Enter</a>
                </div>
            </div>
        </div>

    )
}
export default Home
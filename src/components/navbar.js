import React from "react";
import icon from "./Assets/icon.png"
import camera from "./Assets/camera.png"

const Navbar = () => {
  return (
    // <nav style={{
    //   borderBottom: "2px solid darkcyan",
    //   position:"fixed",
    //   top:"0",
    //   width:"100%"
    // }}>

    //   <img src={icon} width="40" height="40" class="align-top" alt="" style={{
    //     marginBottom: "-47px",
    //     marginTop: "14px",
    //     marginLeft: "20px"
    //   }} />
    //   <h1 style={{
    //     marginLeft: "80px", marginTop: "-11px",
    //     color: "darkgreen"
    //   }}>Instaclone</h1>

    //   <a href="/form">
    //     <img alt="form" src={camera} width="30" height="30" style={{ float: "right", marginTop: "-48px", marginRight: "35px" }} />
    //   </a>
    // </nav>
    <div className="navbar">
                    <nav style={{
                         borderBottom: "2px solid darkcyan",
                         position: "fixed",
                         top: "0",
                         width: "100%",
                         zIndex:"100",
                        backgroundColor:"pink"
                    }}>

                        <img src={icon} width="40" height="40" class="align-top" alt="" style={{
                            marginBottom: "-47px",
                            marginTop: "14px",
                            marginLeft: "20px"
                        }} />
                        <h1 style={{
                            marginLeft: "80px", marginTop: "-11px",
                            color: "darkgreen"
                        }}>Instaclone</h1>

                        <a href="/form">
                            <img alt="form" src={camera} width="30" height="30" style={{ float: "right", marginTop: "-48px", marginRight: "35px" }} />
                        </a>
                    </nav>
                    </div>
                

  )
}
export default Navbar;
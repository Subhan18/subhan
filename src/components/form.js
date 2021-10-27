import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

const CreatePost = () => {

    const history = useHistory()
    const [author, setAuthor] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    useEffect(() => {
        if (url) {
            fetch("/createpost", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    author,
                    location,
                    description,
                    photo: url
                })
            }).then(res => res.json())
                .then(data => {
                    if (data.error) {
                        console.log(data.error)
                    }
                    else {
                        console.log("success")
                        history.push('/postview')
                    }

                }).catch(err => {
                    console.log(err)
                })
        }

    }, [url])


    const postDetails = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "instaclone")
        data.append("cloud_name", "subhank")
        fetch("https://api.cloudinary.com/v1_1/subhank/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setUrl(data.url)
            })
            .catch(err => {
                console.log(err)
            })

    }



    return (
        <div>


            <div className="form_container" style={{ width: "800px" }}>
                <div className="card input-field post" style={{ padding: "10px" }}>
                    <br />
                    <div className="form-group col-lg-12">
                        <input type="file" class="form-control" placeholder="No file selected" onChange={(e) => setImage(e.target.files[0])} />
                    </div><br />
                    <div className="row">
                        <div className="col-md-6">
                            <input type="text" placeholder="Author"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            /><br /></div>
                        <div className="col-md-1">
                            <input type="text" placeholder="Location"

                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            /></div>
                    </div>

                    <br />
                    <input type="text" placeholder="Description"

                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    /><br />

                    <button style={{ alignSelf: "center" }} onClick={() => postDetails()}>Post</button>

                </div>


            </div>
        </div>







    )
}
export default CreatePost
import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const NewAddPost = (props) => {
    const [file, setFile] = useState("");
    const handleChange = (e) => {
        setFile([...e.target.files][0]);
    };
    const handleNewPost = (e) => {
        e.preventDefault();
        const data = new FormData();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const checkbox = e.target.checkbox.value;
        data.append("image", file);
        data.append("image_title", title);
        data.append("description", description);
        data.append("privacy_status", checkbox);
        data.append(
            "Authorization",
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNTk1NjgzNTAwLCJleHAiOjE1OTU2ODcxMDB9.uQCyYiQepWyjrbrznCywNOm3laN9__xR01Ii5qVRAn0"
        );
        const config = {
            headers: {
                "content-type": "multipart/form-data",
                Authorization: props.user,
            },
        };
        axios
            .post(
                "https://cors-anywhere.herokuapp.com/https://july-monthly-test.herokuapp.com/user/addproperty",
                data,
                config
            )
            .then(function (res) {
                if (res.status === 200) {
                    alert("uploaded succesffully");
                }
            })
            .catch(function (err) {
                console.log(err.message);
            });
    };
    console.log(props.user);

    return props.user === null ? (
        <div>
            <h1>Log in first to create Post</h1>
        </div>
    ) : (
        <div className="container">
            <h3>Add Your New Pic with Attension Title</h3>
            <div>
                <form onSubmit={handleNewPost}>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">
                            Upload Your Image
                        </label>
                        <br />
                        <input
                            type="file"
                            name="file"
                            onChange={handleChange}
                        />
                        <br />
                        <label for="exampleFormControlInput1">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="Enjoying life in Goa"
                            name="title"
                            placeholder="Ex- Enjoying life in Goa"
                        />
                    </div>

                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">
                            Description
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            name="description"
                        ></textarea>
                    </div>
                    <div className="form-group form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            name="checkbox"
                        />
                        <label className="form-check-label" for="exampleCheck1">
                            Wana Share Publically?
                        </label>
                    </div>
                    <button value="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        user: state.login,
    };
};

export default connect(mapStateToProps)(NewAddPost);

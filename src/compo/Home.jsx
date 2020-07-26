import React, { useEffect } from "react";
import axios from "axios";
import { getImages } from "../redux/actions/actionState";
import AllImages from "./AllImage";
import { connect } from "react-redux";

const Home = (props) => {
    useEffect(() => {
        props.getImages();
    }, []);

    console.log(props.images);

    
    return <div className="container-fluid">
        <div className="row">
            {props.images.map((p) => (
                <AllImages data={p} />
            ))}
        </div>
    </div>;
};
const mapStateToProps = (state) => {
    return {
        images: state.image,
    };
};
export default connect(mapStateToProps, { getImages })(Home);

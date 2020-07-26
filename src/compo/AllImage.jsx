import React, { Component } from "react";

class AllImage extends Component {
    render() {
        console.log(this.props.data);
        return (
            <div >
                <div className="col-md-4">
                    <div class="card" style={{ width: "15rem" }}>
                        <img
                            src={this.props.data.image}
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body">
                            <h5 class="card-title">
                                {this.props.data.image_title}
                            </h5>
                            <p class="card-text">
                                Create AT: {this.props.data.updatedAt}
                            </p>
                            <a href="#" class="btn btn-primary">
                                Detils
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AllImage;


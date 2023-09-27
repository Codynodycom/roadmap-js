import React from "react";

const card = ({ post }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{post.title}</h4>
                <p className="card-text">Text</p>
            </div>
        </div>
    )
}

export default card;

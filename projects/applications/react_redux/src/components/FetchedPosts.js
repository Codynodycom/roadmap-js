import React from "react";
import Post from "./Post";
import {fetchPosts} from "../redux/actions";


const button = ({ posts }) => {
    if (!posts.length) {
        return <button 
                    className="btn btn-primary"
                    onClick={fetchPosts()}
                >Загрузить
                </button>
    }
    return posts.map(post => <Post post={post} key={post} />)
}

export default button;

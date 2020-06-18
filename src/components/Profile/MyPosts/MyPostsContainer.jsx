import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {

    const {posts} = props;

    let postsElements = posts.map (p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        // props.addPost();
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div className={s.postsBlock}>
            <h1>My posts</h1>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};


export default MyPosts;
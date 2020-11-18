import React from "react";
import s from './Post.module.css';

const Post = (props) => {

    return (

        <div>
            <div className={s.item}>
                <img
                    src='https://res.cloudinary.com/teepublic/image/private/s--noMmjwIC--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1493565398/production/designs/1545694_1.jpg'></img>
                {props.message}
                <div>
                    <span>Likes: {props.likesCount}</span>
                </div>
            </div>
        </div>
    );
};


export default Post;
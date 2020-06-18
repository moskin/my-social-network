import React from "react";
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>

            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    <img src='https://res.cloudinary.com/teepublic/image/private/s--noMmjwIC--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1493565398/production/designs/1545694_1.jpg'></img>
                    post 1
                </div>
                <div className={s.item}>
                    <img src='https://res.cloudinary.com/teepublic/image/private/s--noMmjwIC--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1493565398/production/designs/1545694_1.jpg'></img>
                    post 2
                </div>
                <div className={s.item}>
                    <img src='https://res.cloudinary.com/teepublic/image/private/s--noMmjwIC--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1493565398/production/designs/1545694_1.jpg'></img>
                    post 3
                </div>


            </div>
        </div>
    );
};


export default MyPosts;
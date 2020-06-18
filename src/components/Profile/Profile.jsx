import React from "react";
import s from './Profile.module.css';
import MyPosts from "./Profile/MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://images.axios.com/2KVFKm3seLEb-6dNRPpysqzUTrw=/0x475:5000x3287/1920x1080/2019/04/25/1556175266452.jpg" className={s.profileImg}></img>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>

    );
};


export default Profile;
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render} from "@testing-library/react";
import App from "../App";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'I\'ts my first post', likesCount: 11},
        {id: 3, message: 'I\'m fucking tired like shit ', likesCount: 100},
        {id: 4, message: 'Vacation is coming!', likesCount: 0}
    ]
};

it ('length of post should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra.com');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);
});

it ('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra.com');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[4].message).toBe('it-kamasutra.com');
});

it ('after deleting of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it (`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});
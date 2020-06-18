import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'I\'ts my first post', likesCount: 11},
                {id: 3, message: 'I\'m fucking tired like shit ', likesCount: 100},
            ],
            newPostText: 'Type here'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Moskin'},
                {id: 2, name: 'Nastia'},
                {id: 3, name: 'Vanja'},
                {id: 4, name: 'Miron'},
                {id: 5, name: 'Roma'},
                {id: 6, name: 'Anastasia'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'yo yo yo'},
                {id: 4, message: 'yo yo'},
                {id: 5, message: 'yo'},
                {id: 6, message: 'boom!'},
            ],
            newMessageBody: ''
        },
    },

    _callSubscriber() {
        console.log('state changed')
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    },
};






export default store;
window.store = store;

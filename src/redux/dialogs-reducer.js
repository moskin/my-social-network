const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;
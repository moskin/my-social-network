import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return  <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
};

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
};


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Moskin'},
        {id: 2, name: 'Nastia'},
        {id: 3, name: 'Vanja'},
        {id: 4, name: 'Miron'},
        {id: 5, name: 'Roma'},
        {id: 6, name: 'Anastasia'},
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'yo yo yo'},
        {id: 4, message: 'yo yo'},
        {id: 5, message: 'yo'},
        {id: 6, message: 'boom!'},
    ];

    let dialogsElements = dialogs.map (d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map (m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;
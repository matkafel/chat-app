import React, { forwardRef } from 'react'
import './Message.css';

const Message = forwardRef(({ message, username }, ref) => {
    const isUser = username === message.username;


    return (
        <>

            <p className="author">{!isUser && `${message.username || 'Uknown user'}:`}</p>
            <div ref={ref} className={`message ${isUser && 'message_user'}`}>
                <p> {message.message}</p>
            </div>
        </>
    )
})

export default Message;
import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";
import s from "./Message.module.css"


const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Димыч',
    message: 'Привет, Артем! Как дела?',
    time: '22:00',
}

const messageData2 = {
    avatar: 'https://cs6.pikabu.ru/avatars/404/x404070-828004264.png',
    name: 'Артем',
    message: 'Привет! Все супер! Изучаю React!',
    time: '22:01',
}

function HW1() {
    return (
        <div className={s.wrp}>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
            avatar={messageData.avatar}
            name={messageData.name}
            message={messageData.message}
            time={messageData.time}
            />

            {/*/>*/}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                avatar={messageData2.avatar}
                name={messageData2.name}
                message={messageData2.message}
                time={messageData2.time}
            />
            <hr/>
        </div>
    )
}

export default HW1

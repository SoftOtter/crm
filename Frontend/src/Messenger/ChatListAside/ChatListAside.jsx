import React from 'react';
import { ChatListBar } from './ChatListBar/ChatListBar';
import { ChatListItem } from './ChatListItem/ChatListItem';
import './chatListAside-style.css'

export class ChatListAside extends React.Component {
    render() {
        return (
            <div className={'ChatListAside'}>
                
                <ChatListItem 
                    chatID={1}
                    openedChat={false}
                    userName={'Dean Winchester'}
                    lastMessage={'Being human, it\'s all about choice, right?'}
                    metaMessage={'24.01.2004'}
                    userOnline={true}
                />
                <ChatListItem
                    chatID={2}
                    openedChat={true}
                    userName={'Валерий Антонов'}
                    lastMessage={'Добрый день! Да, через 5 минут будет созвон.'}
                    metaMessage={'сегодня 16:25'}
                    userOnline={false}
                />
                <ChatListItem
                    chatID={3}
                    openedChat={false}
                    userName={'John Locke'}
                    lastMessage={'Reading furnishes the mind only with materials of knowledge; it is thinking that makes what we read ours.'}
                    metaMessage={'05.01.1693'}
                    userOnline={false}
                />
                <ChatListItem
                    chatID={4}
                    openedChat={false}
                    userName={'Adam Smith'}
                    lastMessage={'Сознание человека рождается из социальных отношений и естественная эмпатия, вызванная нахождением среди других, становится неотъемлимой частью благополучия и должна направлять его действия'}
                    metaMessage={'сегодня 16:25'}
                    userOnline={false}
                />
                <ChatListItem
                    chatID={5}
                    openedChat={false}
                    userName={'Даниэль Канеман'}
                    lastMessage={'Мало что в жизни действительно настолько важно, как вы думаете, в тот момент, когда вы об этом думаете.'}
                    metaMessage={'2.02.2000'}
                    userOnline={false}
                />
                <ChatListItem
                    chatID={6}
                    openedChat={false}
                    userName={'Albus Dambldore'}
                    lastMessage={'Happiness can be found even in the darkest of times, when one only remembers to turn on the light.'}
                    metaMessage={'01.09.1989'}
                    userOnline={false}
                />
                <ChatListItem
                    chatID={7}
                    openedChat={false}
                    userName={'Альберт Эйнштейн'}
                    lastMessage={'Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно.'}
                    metaMessage={'сегодня 16:25'}
                    userOnline={false}
                />
                <ChatListItem
                    chatID={8}
                    openedChat={false}
                    userName={'Геральт из Ривии'}
                    lastMessage={'Как думаешь, универсалии могут существовать как сущности конкретных вещей, или они являются лишь порождением разума?'}
                    metaMessage={'10.06.1275'}
                    userOnline={false}
                />
                <ChatListItem
                    chatID={9}
                    openedChat={false}
                    userName={'Castiel Novak'}
                    lastMessage={'Why is 6 afraid of 7? I assume it\'s because 7 is a prime number and prime numbers can be intimidating'}
                    metaMessage={'08.10.2009'}
                    userOnline={false}
                />
                <ChatListItem
                    chatID={10}
                    openedChat={false}
                    userName={'Sam Winchester'}
                    lastMessage={'I lost my shoe :('}
                    metaMessage={'16.07.2006'}
                    userOnline={true}
                />
            </div>
        );
    }
}

import React from 'react';
import LeftTextHeader from 'estore/components/LeftTextHeader';
import FeatureHeader from 'estore/components/FeatureHeader';
import Chat from 'estore/containers/Chat';

const ChatScreen = () => {
    return (
        <React.Fragment>
            <FeatureHeader name="Tin nhắn"/>
            <Chat />
        </React.Fragment>
    )
}

export default ChatScreen;

import React from 'react';
import LeftTextHeader from 'estore/components/LeftTextHeader';
import Notifications from 'estore/containers/Notifications';

const NotificationScreen = () => {
    return (
        <React.Fragment>
            <LeftTextHeader leftText="Thông báo"/>
            <Notifications />
        </React.Fragment>
    )
}
export default NotificationScreen;

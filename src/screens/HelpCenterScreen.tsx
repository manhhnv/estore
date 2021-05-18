import React from 'react';
import { HelpCenter } from 'estore/components/static';
import UtilHeader from 'estore/components/UtilHeader';
import { WebView } from 'react-native-webview';

const HelpCenterScreen = () => {
    return (
        <React.Fragment>
            <UtilHeader leftText="Trung tâm trợ giúp"/>
            <WebView source={{uri: "https://magiamgiashopee.vn/tong-dai-shopee/#toc-4-chat-truc-tuyen-voi-shopee"}}/>
        </React.Fragment>
    )
};

export default React.memo(HelpCenterScreen)

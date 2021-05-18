import React from 'react';
import { PrivacyPolicy } from 'estore/components/static';
import UtilHeader from 'estore/components/UtilHeader';
import { WebView } from 'react-native-webview';

const PrivacyPolicyScreen = () => {
    return (
        <React.Fragment>
            <UtilHeader leftText="Chính sách bảo mật"/>
            <WebView source={{uri: "https://shopee.vn/docs/3603"}}/>
        </React.Fragment>
    )
};

export default React.memo(PrivacyPolicyScreen)

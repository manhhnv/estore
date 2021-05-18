import React from 'react';
import { PrivacyPolicy } from 'estore/components/static';
import LeftTextHeader from 'estore/components/LeftTextHeader';
import UtilHeader from 'estore/components/UtilHeader';

const PrivacyPolicyScreen = () => {
    return (
        <React.Fragment>
            <UtilHeader leftText="Chính sách bảo mật"/>
            <PrivacyPolicy />
        </React.Fragment>
    )
};

export default React.memo(PrivacyPolicyScreen)

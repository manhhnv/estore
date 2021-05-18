import React from 'react';
import { HelpCenter } from 'estore/components/static';
import UtilHeader from 'estore/components/UtilHeader';

const HelpCenterScreen = () => {
    return (
        <React.Fragment>
            <UtilHeader leftText="Trung tâm trợ giúp"/>
            <HelpCenter />
        </React.Fragment>
    )
};

export default React.memo(HelpCenterScreen)

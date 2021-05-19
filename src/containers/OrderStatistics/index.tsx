import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useWindowDimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import {
    useCanceledOrdersLazyQuery,
    useWaitingOrdersLazyQuery,
    useShippingOrdersLazyQuery,
    useCompletedOrdersLazyQuery
} from 'estore/graphql/generated';
import { Image } from 'react-native-elements';
import ListOrder from './ListOrder';

const CanceledOrders = () => {
    const [
        executeGQL,
        {
            data, loading, error
        }
    ] = useCanceledOrdersLazyQuery({
        fetchPolicy: 'network-only'
    });
    React.useEffect(() => {
        executeGQL()
    }, []);
    const executeGQLWrapper = () => {
        executeGQL()
    }
    return (
        <React.Fragment>
            {loading && (
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <ActivityIndicator color="#f36347" size="large" />
                </View>
            )}
            {data && data.canceledOrders?.length == 0 && (
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={require('estore/assets/images/emptyCart.png')}
                        style={{ width: 100, height: 100 }}
                    />
                </View>
            )}
            {data && data.canceledOrders && data.canceledOrders?.length > 0 && (
                <View style={{ backgroundColor: "white", flex: 1 }}>
                    <ListOrder listOrders={data.canceledOrders} executeGQLWrapper={executeGQLWrapper}/>
                </View>
            )}
        </React.Fragment>
    );
};

const WaitingOrders = () => {
    const [
        executeGQL,
        { data, loading, error }
    ] = useWaitingOrdersLazyQuery({
        fetchPolicy: 'network-only'
    });
    const [
        executeCanceledGQL,
        {
            data: canceledData,
            loading: cancelLoading,
            error: canceledError
        }
    ] = useCanceledOrdersLazyQuery({
        fetchPolicy: 'network-only'
    });
    React.useEffect(() => {
        executeGQL()
    }, []);
    const executeGQLWrapper = () => {
        executeGQL()
    }
    const executeCanceledGQLWrapper = () => {
        executeCanceledGQL();
    }
    return (
        <React.Fragment>
            {loading && (
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <ActivityIndicator color="#f36347" size="large" />
                </View>
            )}
            {data && data.waitingOrders?.length == 0 && (
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={require('estore/assets/images/emptyCart.png')}
                        style={{ width: 100, height: 100 }}
                    />
                </View>
            )}
            {data && data.waitingOrders && data.waitingOrders?.length > 0 && (
                <View style={{ backgroundColor: "white", flex: 1 }}>
                    <ListOrder listOrders={data.waitingOrders} executeGQLWrapper={executeGQLWrapper} executeCanceledGQLWrapper={executeCanceledGQLWrapper}/>
                </View>
            )}
        </React.Fragment>
    );
};

const ShippingOrders = () => {
    const [
        executeGQL,
        { data, loading, error }
    ] = useShippingOrdersLazyQuery({
        fetchPolicy: 'network-only'
    });
    React.useEffect(() => {
        executeGQL()
    }, []);
    return (
        <React.Fragment>
            {loading && (
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <ActivityIndicator color="#f36347" size="large" />
                </View>
            )}
            {data && data.shippingOrders?.length == 0 && (
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={require('estore/assets/images/emptyCart.png')}
                        style={{ width: 100, height: 100 }}
                    />
                </View>
            )}
        </React.Fragment>
    );
};

const CompletedOrders = () => {
    const [
        executeGQL,
        { data, loading, error }
    ] = useCompletedOrdersLazyQuery({
        fetchPolicy: 'network-only'
    });
    React.useEffect(() => {
        executeGQL()
    }, []);
    return (
        <React.Fragment>
            {loading && (
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <ActivityIndicator color="#f36347" size="large" />
                </View>
            )}
            {data && data.completedOrders?.length == 0 && (
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={require('estore/assets/images/emptyCart.png')}
                        style={{ width: 100, height: 100 }}
                    />
                </View>
            )}
        </React.Fragment>
    );
};

const renderScene = SceneMap({
    waiting: WaitingOrders,
    canceled: CanceledOrders,
    shipping: ShippingOrders,
    completed: CompletedOrders
});

const renderTabBar = (props: any) => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#f36347' }}
        style={{ backgroundColor: 'white' }}
        renderLabel={({ route, focused, color }) => (
            <Text style={{ color: 'black' }}>{route.title}</Text>
        )}
    />
);

const OrderStatistics = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'waiting', title: 'Chờ xác nhận' },
        { key: 'shipping', title: 'Đang giao' },
        { key: 'canceled', title: 'Đã hủy' },
        { key: 'completed', title: 'Thành công' }
    ]);
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
        />
    );
};

export default React.memo(OrderStatistics);

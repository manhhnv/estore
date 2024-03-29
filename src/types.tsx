import { Order } from "./graphql/generated";

export type RootStackParamList = {
    Root: undefined;
    NotFound: undefined;
    ProductDetail:
        | {
              productId: string;
          }
        | undefined;
    ViewCart: undefined;
    listUserAddress: undefined;
    addUserAddress:
        | {
              getUserAddresses: () => void;
          }
        | undefined;
    checkout: undefined;
    searchProduct: undefined;
    searchResult: {
        name: string
    } | undefined;
    chat: undefined;
    privacyPolicy: undefined;
    helpCenter: undefined;
    orderStatistics: {
        success: boolean
    } | undefined;
    orderDetail: {
        order: Partial<Order>,
        executeGQLWrapper: () => void,
        executeCanceledGQLWrapper?: () => void
    } | undefined;
};

export type BottomTabParamList = {
    HomeStack: undefined;
    TabTwo: undefined;
    Notification: undefined;
    Setting: undefined;
    Favorite: undefined;
    Wishlist: undefined;
};

export type TabOneParamList = {
    TabOneScreen: undefined;
};

export type TabTwoParamList = {
    TabTwoScreen: undefined;
};

export type SettingStackParamList = {
    register: undefined;
    login: undefined;
    listUserAddress: undefined;
    addUserAddress: undefined;
};

export type HomeStackParamList = {
    Home: undefined;
    FilterProduct: {
        categoryId: number;
        name: string;
    };
};


import { SetStateAction } from 'react';

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
};

export type BottomTabParamList = {
    HomeStack: undefined;
    TabTwo: undefined;
    Notification: undefined;
    Setting: undefined;
    Favorite: undefined;
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

export type SearchItem = {
    keyWord: string;
    time: Date;
};

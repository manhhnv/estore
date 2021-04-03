export type RootStackParamList = {
    Root: undefined;
    NotFound: undefined;
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
};

export type HomeStackParamList = {
    Home: undefined;
    FilterProduct: {
        categoryId: number;
        name: string;
    };
};

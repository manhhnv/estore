import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { Overlay, CheckBox, Input, Button } from 'react-native-elements';
import { Product, Filter } from 'estore/graphql/generated';
import { Octicons } from '@expo/vector-icons';
import { useCategoriesQuery } from 'estore/graphql/generated';
import { ScrollView } from 'react-native-gesture-handler';

type FilterModalProps = {
    isSearching: boolean;
    categoryId?: number;
    filter: Filter;
    setFilter: Dispatch<SetStateAction<Filter>>;
};

const FilterModal = ({
    isSearching,
    categoryId,
    filter,
    setFilter,
}: FilterModalProps) => {
    const {
        called: categoriesCalled,
        loading: categoriesLoading,
        data: categoriesData,
        error: categoriesError
    } = useCategoriesQuery({ fetchPolicy: 'cache-first' });

    const [visible, setVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(String(filter.currentPage));
    const [limit, setLimit] = useState(String(filter.limit));
    const [filterCateId, setFilterCateId]: [number | undefined | null, Dispatch<SetStateAction<number | undefined | null>>] = useState(filter?.categoryId)

    const toggleModal = () => {
        setVisible(!visible);
    };
    const currentPageOnChangeHandle = (value: string) => {
        setCurrentPage(value);
    };
    const limitOnChangeHandle = (value: string) => {
        setLimit(value);
    };
    const filterCateIdOnChange = (id: number) => {
        setFilterCateId(id);
    }
    
    const applyFilterHandle = () => {
        let formattedCurrentPage = !currentPage ? 1 : parseInt(currentPage);
        let formattedLimit = !limit ? 30 : parseInt(limit);
        if (formattedLimit > 30 || formattedLimit < 10) {
            formattedLimit = 30;
        }
        if (formattedCurrentPage < 1) {
            formattedCurrentPage = 1;
        }
        toggleModal()
        setFilter({...filter, currentPage: formattedCurrentPage, limit: formattedLimit, categoryId: filterCateId});
    }

    return (
        <React.Fragment>
            <TouchableOpacity
                style={styles.filterSelectContainer}
                onPress={toggleModal}
            >
                <Octicons name="settings" size={23} style={styles.icon} />
                <Text style={styles.filterSelectText}>Lọc</Text>
            </TouchableOpacity>
            <Overlay
                isVisible={visible}
                overlayStyle={styles.modalContainer}
                onBackdropPress={toggleModal}
            >
                {categoriesData &&
                categoriesData.categories &&
                categoriesData.categories.length > 0 ? (
                    <ScrollView>
                        <View>
                            <Text style={styles.titleFilter}>Danh mục</Text>
                            {!isSearching && categoriesData.categories.map((category) => {
                                if (category) {
                                    const { id, name } = category;
                                    if (id === categoryId) {
                                        return (
                                            <CheckBox
                                                title={name}
                                                checked={id === categoryId}
                                                key={id}
                                                containerStyle={{
                                                    borderColor: 'white',
                                                    backgroundColor: 'white'
                                                }}
                                                checkedColor="green"
                                            />
                                        );
                                    }
                                }
                            })}
                            {
                                isSearching && categoriesData.categories.map((category) => {
                                    if (category) {
                                        const { id, name } = category;
                                        return (
                                            <CheckBox
                                                title={name}
                                                checked={id === filterCateId}
                                                key={id}
                                                containerStyle={{
                                                    borderColor: 'white',
                                                    backgroundColor: 'white'
                                                }}
                                                checkedColor="green"
                                                onPress={() => filterCateIdOnChange(id)}
                                            />
                                        );
                                    }
                                })
                            }
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={styles.titleFilter}>Trang số</Text>
                            <Input
                                defaultValue={'1'}
                                keyboardType="numeric"
                                containerStyle={{ width: 70 }}
                                value={currentPage}
                                onChangeText={(value) =>
                                    currentPageOnChangeHandle(value)
                                }
                            />
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={styles.titleFilter}>Số lượng</Text>
                            <Input
                                defaultValue={'30'}
                                keyboardType="numeric"
                                containerStyle={{ width: 70 }}
                                value={limit}
                                onChangeText={(value) =>
                                    limitOnChangeHandle(value)
                                }
                            />
                        </View>
                    </ScrollView>
                ) : null}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}
                >
                    <Button
                        title="Hủy"
                        buttonStyle={[
                            styles.cancelFilterButton,
                            { backgroundColor: 'gray' }
                        ]}
                        onPress={toggleModal}
                    />
                    <Button
                        title="Áp dụng"
                        buttonStyle={[
                            styles.cancelFilterButton,
                            { backgroundColor: '#ee4d2d' }
                        ]}
                        onPress={() => applyFilterHandle()}
                    />
                </View>
            </Overlay>
        </React.Fragment>
    );
};

export default FilterModal;

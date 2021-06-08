import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './styles';
import { TouchableOpacity, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
    Product,
    Sort,
    Sort_Fields,
    Sort_Type
} from 'estore/graphql/generated';
import { Overlay, CheckBox, Button } from 'react-native-elements';

const sortFields = ['Giá sản phẩm', 'Tên sản phẩm', 'Số lượng bán'];
const ordersSort = ['Tăng dần (A-Z)', 'Giảm dần (Z-A)'];

type OrderByModalProps = {
    orderby: Sort;
    setOrderby: Dispatch<SetStateAction<Sort>>;
};

const OrderByModal = ({ orderby, setOrderby }: OrderByModalProps) => {
    const [visible, setVisible] = useState(false);
    const [sortFieldIndex, setSortFieldIndex]: [
        number | null,
        Dispatch<SetStateAction<number | null>>
    ] = useState(
        orderby.field === Sort_Fields.Price
            ? 1
            : orderby.field === Sort_Fields.Name
            ? 2
            : orderby.field === Sort_Fields.SoldQuantity
            ? 3
            : null
    );
    const [orderSortIndex, setOrderSortIndex]: [
        number | null,
        Dispatch<SetStateAction<number | null>>
    ] = useState(
        orderby.type === Sort_Type.Asc
            ? 1
            : orderby.type === Sort_Type.Desc
            ? 2
            : null
    );

    const toggleModal = () => {
        setVisible(!visible);
    };
    const sortFieldOnchangeHandle = (i: number) => {
        setSortFieldIndex(i);
    };
    const orderSortIndexOnchangeHandle = (i: number) => {
        setOrderSortIndex(i);
    };

    const applyCustomSorting = () => {
        if (sortFieldIndex && orderSortIndex) {
            let field: Sort_Fields = Sort_Fields.Price;
            let type: Sort_Type = Sort_Type.Asc;
            switch (sortFieldIndex) {
                case 1:
                    field = Sort_Fields.Price;
                    break;
                case 2:
                    field = Sort_Fields.Name;
                    break;
                case 3:
                    field = Sort_Fields.SoldQuantity;
                    break;
                default:
                    break;
            }
            switch(orderSortIndex) {
                case 1:
                    type = Sort_Type.Asc;
                    break;
                case 2:
                    type = Sort_Type.Desc;
                    break;
                default:
                    break;
            }
            setOrderby({...orderby, field: field, type: type})
        }
        toggleModal();
    }

    return (
        <React.Fragment>
            <TouchableOpacity
                style={styles.filterSelectContainer}
                onPress={toggleModal}
            >
                <MaterialCommunityIcons
                    name="sort"
                    size={23}
                    style={styles.icon}
                />

                <Text style={styles.filterSelectText}>Sắp xếp</Text>
            </TouchableOpacity>
            <Overlay
                isVisible={visible}
                overlayStyle={styles.modalContainer}
                onBackdropPress={toggleModal}
            >
                <View>
                    <Text style={styles.titleSort}>Sắp xếp theo</Text>
                    {sortFields.map((field, i) => {
                        return (
                            <CheckBox
                                title={field}
                                key={i}
                                containerStyle={{
                                    borderColor: 'white',
                                    backgroundColor: 'white'
                                }}
                                checkedColor="green"
                                onPress={() => sortFieldOnchangeHandle(i+1)}
                                checked={i+1 === sortFieldIndex}
                            />
                        );
                    })}
                    <Text style={styles.titleSort}>Thứ tự</Text>
                    {ordersSort.map((item, i) => {
                        return (
                            <CheckBox
                                title={item}
                                key={item}
                                containerStyle={{
                                    borderColor: 'white',
                                    backgroundColor: 'white'
                                }}
                                checkedColor="green"
                                onPress={() => orderSortIndexOnchangeHandle(i+1)}
                                checked={i+1 === orderSortIndex}
                            />
                        );
                    })}
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}
                >
                    <Button
                        title="Hủy"
                        buttonStyle={[
                            styles.cancelSortButton,
                            { backgroundColor: 'gray' }
                        ]}
                        onPress={toggleModal}
                    />
                    <Button
                        title="Áp dụng"
                        buttonStyle={[
                            styles.applySortButton,
                            { backgroundColor: '#ee4d2d' }
                        ]}
                        onPress={applyCustomSorting}
                    />
                </View>
            </Overlay>
        </React.Fragment>
    );
};

export default React.memo(OrderByModal);

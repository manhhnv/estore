import { useSelector } from 'react-redux';
import { RootState } from 'estore/redux/slice';
import {
    useCalculateShippingFeeMutation,
    ShippingInput,
    Delivery_Options
} from 'estore/graphql/generated';

type useShippingCalculationProps = {
    weight: number;
    transport: string;
    deliver_option: Delivery_Options;
    value?: number;
};

export default function useShippingCalculation({
    weight,
    transport,
    deliver_option,
    value
}: useShippingCalculationProps) {
    const address = useSelector((state: RootState) => state.address);
    if (Object.keys(address).length === 0) {
        return {
            data: null,
            error: {
                message: 'Thêm địa chỉ giao hàng',
                statusCode: 500
            },
            loading: false,
            called: false
        };
    } else {
        const pickupAddress = {
            province: 'Tỉnh Bắc Giang',
            district: 'Huyện Hiệp Hòa'
        };
        const shippingInput: ShippingInput = {
            pick_province: pickupAddress.province,
            pick_district: pickupAddress.district,
            province: address?.city ? address.city : '',
            district: address?.state ? address.state : '',
            weight: weight,
            value: value,
            transport: transport,
            deliver_option: deliver_option
        };
        const [
            executeGQL,
            { called, loading, data, error }
        ] = useCalculateShippingFeeMutation();
        executeGQL({ variables: { input: shippingInput } });
        return {
            data,
            error,
            loading,
            called
        };
    }
}

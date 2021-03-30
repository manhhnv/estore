import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Address = Node & {
  __typename?: 'Address';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  state: Scalars['String'];
  ward: Scalars['String'];
  streetLine1: Scalars['String'];
  streetLine2?: Maybe<Scalars['String']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type AddressInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  ward: Scalars['String'];
  streetLine1: Scalars['String'];
  streetLine2?: Maybe<Scalars['String']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
};

export type UserAddresses = {
  __typename?: 'UserAddresses';
  items?: Maybe<Array<Maybe<Address>>>;
  totalItems?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUserAddress: Address;
  updateUserAddress: Address;
  deleteBanner?: Maybe<ListBanners>;
  addToCart: Order;
  removeFromCart: Order;
  /** Tạo đơn hàng */
  createRequestShipping?: Maybe<RequestShippingResult>;
  /** Tính phí vận chuyển */
  calculateShippingFee?: Maybe<ShippingFee>;
  login: LoginSuccess;
  updateUser: User;
  addToWishlist: WishList;
  removeFromWistlist: WishList;
};


export type MutationCreateUserAddressArgs = {
  input: AddressInput;
};


export type MutationUpdateUserAddressArgs = {
  input: AddressInput;
};


export type MutationDeleteBannerArgs = {
  id: Scalars['ID'];
};


export type MutationAddToCartArgs = {
  productId: Scalars['String'];
  quantity: Scalars['Int'];
  config?: Maybe<Array<Maybe<ProductOption>>>;
};


export type MutationRemoveFromCartArgs = {
  lineId: Scalars['String'];
};


export type MutationCreateRequestShippingArgs = {
  addressId?: Maybe<Scalars['ID']>;
  pickup?: Maybe<PickupInformation>;
};


export type MutationCalculateShippingFeeArgs = {
  input?: Maybe<ShippingInput>;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  rememberMe?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateUserArgs = {
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};


export type MutationAddToWishlistArgs = {
  productId: Scalars['String'];
};


export type MutationRemoveFromWistlistArgs = {
  productId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getUserAddresses?: Maybe<UserAddresses>;
  getDefaultUserAddress?: Maybe<Address>;
  getBanners?: Maybe<ListBanners>;
  activeOrder?: Maybe<Order>;
  getShopAddress: PickupAddress;
  products?: Maybe<ProductList>;
  me: User;
  activeWishlist?: Maybe<WishList>;
};


export type QueryProductsArgs = {
  name?: Maybe<Scalars['String']>;
  filter?: Maybe<Filter>;
  sort?: Maybe<Sort>;
};

export type Banner = Node & {
  __typename?: 'Banner';
  id: Scalars['ID'];
  name: Scalars['String'];
  url: Scalars['String'];
  active: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type ListBanners = {
  __typename?: 'ListBanners';
  items?: Maybe<Array<Maybe<Banner>>>;
  totalItems?: Maybe<Scalars['Int']>;
};

export type OrderLine = Node & {
  __typename?: 'OrderLine';
  id: Scalars['ID'];
  subTotal: Scalars['Float'];
  subQuantity: Scalars['Float'];
  configProduct?: Maybe<Array<Maybe<ConfigProduct>>>;
  name: Scalars['String'];
  weight: Scalars['Int'];
  thumbnail: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type ProductOption = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ConfigProduct = {
  __typename?: 'ConfigProduct';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type Order = Node & {
  __typename?: 'Order';
  id: Scalars['ID'];
  totalPrice: Scalars['Float'];
  totalQuantity: Scalars['Int'];
  state: Scalars['String'];
  active: Scalars['Boolean'];
  currency: Scalars['String'];
  lines: Array<OrderLine>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type PickupAddress = {
  __typename?: 'PickupAddress';
  /** String - mã đơn hàng thuộc hệ thống của đối tác */
  id: Scalars['ID'];
  /** String - Tên người liên hệ lấy hàng hóa */
  pick_name: Scalars['String'];
  /** String - Địa chỉ ngắn gọn để lấy nhận hàng hóa. Ví dụ: nhà số 5, tổ 3, ngách 11, ngõ 45 */
  pick_address: Scalars['String'];
  /** String - Tên tỉnh/thành phố nơi lấy hàng hóa */
  pick_province: Scalars['String'];
  /** String - Tên quận/huyện nơi lấy hàng hóa */
  pick_district: Scalars['String'];
  /** String - Tên phường/xã nơi lấy hàng hóa */
  pick_ward?: Maybe<Scalars['String']>;
  /** String - Tên đường/phố nơi lấy hàng hóa */
  pick_street?: Maybe<Scalars['String']>;
  /** String - Số điện thoại liên hệ nơi lấy hàng hóa */
  pick_tel: Scalars['String'];
  /** String - Email liên hệ nơi lấy hàng hóa */
  pick_email?: Maybe<Scalars['String']>;
};

export type PreviewImage = Node & {
  __typename?: 'PreviewImage';
  id: Scalars['ID'];
  url: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Configs = {
  __typename?: 'Configs';
  name: Scalars['String'];
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Product = Node & {
  __typename?: 'Product';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  inStock: Scalars['Int'];
  thumbnail: Scalars['String'];
  rating?: Maybe<Scalars['Int']>;
  rawDiscount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  weight: Scalars['Int'];
  priceBeforeDiscount?: Maybe<Scalars['Float']>;
  shopId?: Maybe<Scalars['String']>;
  shopAdmin?: Maybe<Scalars['String']>;
  category: Category;
  previews?: Maybe<Array<Maybe<PreviewImage>>>;
  configs?: Maybe<Array<Maybe<Configs>>>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Filter = {
  limit?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
};

export enum Sort_Fields {
  Price = 'price',
  Name = 'name'
}

export enum Sort_Type {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Sort = {
  field?: Maybe<Sort_Fields>;
  type?: Maybe<Sort_Type>;
};

export type ProductList = {
  __typename?: 'ProductList';
  items?: Maybe<Array<Maybe<Product>>>;
  total?: Maybe<Scalars['Int']>;
};

export enum Shipping_Type {
  Cod = 'cod',
  OnlinePayment = 'online_payment'
}

export enum Delivery_Options {
  Xteam = 'xteam',
  None = 'none'
}

export enum Transport_Type {
  Road = 'road',
  Fly = 'fly'
}

export type ShippingInput = {
  /** String - Địa chỉ ngắn gọn để lấy nhận hàng hóa. Ví dụ: nhà số 5, tổ 3, ngách 11, ngõ 45 */
  pick_address?: Maybe<Scalars['String']>;
  /** String - Tên tỉnh/thành phố nơi lấy hàng hóa */
  pick_province: Scalars['String'];
  /** String - Tên quận/huyện nơi lấy hàng hóa */
  pick_district: Scalars['String'];
  /** String - Tên phường/xã nơi lấy hàng hóa */
  pick_ward?: Maybe<Scalars['String']>;
  /** String - Tên đường/phố nơi lấy hàng hóa */
  pick_street?: Maybe<Scalars['String']>;
  /** String - Địa chỉ chi tiết của người nhận hàng, ví dụ: Chung cư CT1, ngõ 58, đường Trần Bình */
  address?: Maybe<Scalars['String']>;
  /** String - Tên tỉnh/thành phố của người nhận hàng hóa */
  province: Scalars['String'];
  /** String - Tên quận/huyện của người nhận hàng hóa */
  district: Scalars['String'];
  /** String - Tên phường/xã của người nhận hàng hóa */
  ward?: Maybe<Scalars['String']>;
  /** String - Tên đường/phố của người nhận hàng hóa */
  street?: Maybe<Scalars['String']>;
  /** Integer - Cân nặng của gói hàng, đơn vị sử dụng Gram */
  weight: Scalars['Int'];
  /** Integer - Giá trị thực của đơn hàng áp dụng để tính phí bảo hiểm, đơn vị sử dụng VNĐ */
  value?: Maybe<Scalars['Int']>;
  /** String - Phương thức vâng chuyển road ( bộ ) , fly (bay). Nếu phương thức vận chuyển không hợp lệ thì GHTK sẽ tự động nhảy về PTVC mặc định */
  transport?: Maybe<Scalars['String']>;
  /** String - Sử dụng phương thức vận chuyển xfast. Nhận 1 trong 2 giá trị xteam/none */
  deliver_option: Delivery_Options;
};

export type ShippingFee = {
  __typename?: 'ShippingFee';
  /** String - Tên gói cước được áp dụng, các giá trị có thể: area1, area2, area3 */
  name?: Maybe<Scalars['String']>;
  /** Integer - Cước vận chuyển tính theo VNĐ */
  fee?: Maybe<Scalars['Int']>;
  /** Integer - Giá bảo hiểm tính theo VNĐ */
  insurance_fee?: Maybe<Scalars['Int']>;
  /** Boolean - Hỗ trợ giao ở địa chỉ này chưa, nếu điểm giao đã được GHTK hỗ trợ giao trả về true, nếu GTHK chưa hỗ trợ giao đến khu vực này thì trả về false */
  delivery?: Maybe<Scalars['Boolean']>;
};

/** Thông tin các sản phẩm đơn hàng */
export type ProductShipping = {
  /** String - Tên hàng hóa */
  name: Scalars['String'];
  /** Double - Khối lượng hàng hóa Tính theo đơn vị KG */
  weight: Scalars['Float'];
  /** Integer - Giá trị hàng hóa */
  price: Scalars['Int'];
  /** Integer - Số lượng hàng hóa */
  quantity: Scalars['Int'];
  /** Integer - Mã sản phẩm được lấy từ api lấy danh sách thông tin sản phẩm */
  product_code: Scalars['String'];
};

/** Thông tin điểm lấy hàng */
export type PickupInformation = {
  /** String - Tên người liên hệ lấy hàng hóa */
  pick_name: Scalars['String'];
  /** String - ID địa điểm lấy hàng của shop trong trang quản lý đơn hàng dành cho khách hàng. Nếu trường này khác rỗng sẽ được ưu tiên sử dụng */
  pick_address_id?: Maybe<Scalars['String']>;
  /** String - Địa chỉ ngắn gọn để lấy nhận hàng hóa. Ví dụ: nhà số 5, tổ 3, ngách 11, ngõ 45 */
  pick_address: Scalars['String'];
  /** String - Tên tỉnh/thành phố nơi lấy hàng hóa */
  pick_province: Scalars['String'];
  /** String - Tên quận/huyện nơi lấy hàng hóa */
  pick_district: Scalars['String'];
  /** String - Tên phường/xã nơi lấy hàng hóa */
  pick_ward?: Maybe<Scalars['String']>;
  /** String - Tên đường/phố nơi lấy hàng hóa */
  pick_street?: Maybe<Scalars['String']>;
  /** String - Số điện thoại liên hệ nơi lấy hàng hóa */
  pick_tel: Scalars['String'];
  /** String - Email liên hệ nơi lấy hàng hóa */
  pick_email?: Maybe<Scalars['String']>;
};

/** Thông tin điểm giao hàng */
export type DeliveryInformation = {
  /** String - tên người nhận hàng */
  name: Scalars['String'];
  /** String - Địa chỉ chi tiết của người nhận hàng, ví dụ: Chung cư CT1, ngõ 58, đường Trần Bình */
  address: Scalars['String'];
  /** String - Tên tỉnh/thành phố của người nhận hàng hóa */
  province: Scalars['String'];
  /** String - Tên quận/huyện của người nhận hàng hóa */
  district: Scalars['String'];
  /** String - Tên phường/xã của người nhận hàng hóa (Bắt buộc khi không có đường/phố) */
  ward: Scalars['String'];
  /** String - Tên đường/phố của người nhận hàng hóa (Bắt buộc khi không có phường/xã) */
  street: Scalars['String'];
  /** String - Tên thôn/ấp/xóm/tổ/… của người nhận hàng hóa. Nếu không có, vui lòng điền “Khác” */
  hamlet: Scalars['String'];
  /** String - Số điện thoại người nhận hàng hóa */
  tel: Scalars['String'];
  /** String - Ghi chú đơn hàng. Vd: Khối lượng tính cước tối đa: 1.00 kgTừ 24/2/2020 ghi chú tối đa cho phép là 120 kí tự */
  note?: Maybe<Scalars['String']>;
  /** String - Email người nhận hàng hóa */
  email: Scalars['String'];
};

export type OrderResponse = {
  __typename?: 'OrderResponse';
  partner_id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  area?: Maybe<Scalars['Int']>;
  fee?: Maybe<Scalars['Int']>;
  insurance_fee?: Maybe<Scalars['Int']>;
  estimated_pick_time?: Maybe<Scalars['String']>;
  estimated_deliver_time?: Maybe<Scalars['String']>;
  status_id?: Maybe<Scalars['Int']>;
  tracking_id?: Maybe<Scalars['String']>;
  sorting_code?: Maybe<Scalars['String']>;
  is_xfast?: Maybe<Scalars['Int']>;
};

export type RequestShippingResult = {
  __typename?: 'RequestShippingResult';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  orderResponse?: Maybe<OrderResponse>;
};


export type Node = {
  id: Scalars['ID'];
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  accountType?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type LoginSuccess = {
  __typename?: 'LoginSuccess';
  token: Scalars['String'];
};

export type WishList = Node & {
  __typename?: 'WishList';
  id: Scalars['ID'];
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type GetBannersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBannersQuery = (
  { __typename?: 'Query' }
  & { getBanners?: Maybe<(
    { __typename?: 'ListBanners' }
    & Pick<ListBanners, 'totalItems'>
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Banner' }
      & Pick<Banner, 'id' | 'name' | 'url' | 'description'>
    )>>> }
  )> }
);

export type BannerFragmentFragment = (
  { __typename?: 'Banner' }
  & Pick<Banner, 'id' | 'name' | 'url' | 'description'>
);

export const BannerFragmentFragmentDoc = gql`
    fragment BannerFragment on Banner {
  id
  name
  url
  description
}
    `;
export const GetBannersDocument = gql`
    query getBanners {
  getBanners {
    items {
      id
      name
      url
      description
    }
    totalItems
  }
}
    `;

/**
 * __useGetBannersQuery__
 *
 * To run a query within a React component, call `useGetBannersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBannersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBannersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBannersQuery(baseOptions?: Apollo.QueryHookOptions<GetBannersQuery, GetBannersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBannersQuery, GetBannersQueryVariables>(GetBannersDocument, options);
      }
export function useGetBannersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBannersQuery, GetBannersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBannersQuery, GetBannersQueryVariables>(GetBannersDocument, options);
        }
export type GetBannersQueryHookResult = ReturnType<typeof useGetBannersQuery>;
export type GetBannersLazyQueryHookResult = ReturnType<typeof useGetBannersLazyQuery>;
export type GetBannersQueryResult = Apollo.QueryResult<GetBannersQuery, GetBannersQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Node": [
      "Address",
      "Banner",
      "OrderLine",
      "Order",
      "PreviewImage",
      "Product",
      "User",
      "WishList"
    ]
  }
};
      export default result;
    
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Address = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AddressAggregateGroupBy = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type AddressConnection = {
  /** Array of nodes. */
  nodes: Array<Address>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type AddressCountAggregate = {
  createdAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type AddressDeleteResponse = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AddressFilter = {
  and?: InputMaybe<Array<AddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AddressFilter>>;
};

export type AddressMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type AddressMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type AddressSort = {
  direction: SortDirection;
  field: AddressSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type AddressSortFields =
  | 'createdAt'
  | 'id';

export type Banner = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BannerAggregateGroupBy = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type BannerConnection = {
  /** Array of nodes. */
  nodes: Array<Banner>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type BannerCountAggregate = {
  createdAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type BannerDeleteResponse = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BannerFilter = {
  and?: InputMaybe<Array<BannerFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BannerFilter>>;
};

export type BannerMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type BannerMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type BannerSort = {
  direction: SortDirection;
  field: BannerSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type BannerSortFields =
  | 'createdAt'
  | 'id';

export type Billing = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BillingAggregateGroupBy = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type BillingConnection = {
  /** Array of nodes. */
  nodes: Array<Billing>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type BillingCountAggregate = {
  createdAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type BillingDeleteResponse = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BillingFilter = {
  and?: InputMaybe<Array<BillingFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BillingFilter>>;
};

export type BillingMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type BillingMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type BillingSort = {
  direction: SortDirection;
  field: BillingSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type BillingSortFields =
  | 'createdAt'
  | 'id';

export type Cart = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CartAggregateGroupBy = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type CartConnection = {
  /** Array of nodes. */
  nodes: Array<Cart>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type CartCountAggregate = {
  createdAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type CartDeleteResponse = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CartFilter = {
  and?: InputMaybe<Array<CartFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CartFilter>>;
};

export type CartItems = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CartItemsAggregateGroupBy = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type CartItemsConnection = {
  /** Array of nodes. */
  nodes: Array<CartItems>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type CartItemsCountAggregate = {
  createdAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type CartItemsDeleteResponse = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CartItemsFilter = {
  and?: InputMaybe<Array<CartItemsFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CartItemsFilter>>;
};

export type CartItemsMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type CartItemsMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type CartItemsSort = {
  direction: SortDirection;
  field: CartItemsSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type CartItemsSortFields =
  | 'createdAt'
  | 'id';

export type CartMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type CartMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type CartSort = {
  direction: SortDirection;
  field: CartSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type CartSortFields =
  | 'createdAt'
  | 'id';

export type CashPayment = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CashPaymentAggregateGroupBy = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type CashPaymentConnection = {
  /** Array of nodes. */
  nodes: Array<CashPayment>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type CashPaymentCountAggregate = {
  createdAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type CashPaymentDeleteResponse = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CashPaymentFilter = {
  and?: InputMaybe<Array<CashPaymentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CashPaymentFilter>>;
};

export type CashPaymentMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type CashPaymentMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type CashPaymentSort = {
  direction: SortDirection;
  field: CashPaymentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type CashPaymentSortFields =
  | 'createdAt'
  | 'id';

export type Category = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CategoryAggregateGroupBy = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type CategoryConnection = {
  /** Array of nodes. */
  nodes: Array<Category>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type CategoryCountAggregate = {
  createdAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type CategoryDeleteResponse = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryFilter = {
  and?: InputMaybe<Array<CategoryFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CategoryFilter>>;
};

export type CategoryMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type CategoryMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type CategorySort = {
  direction: SortDirection;
  field: CategorySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type CategorySortFields =
  | 'createdAt'
  | 'id';

export type CreateAddress = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateBanner = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateBilling = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateCart = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateCartItems = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateCashPayment = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  imageId: Scalars['String']['input'];
  localId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateImage = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateLocalInput = {
  description: Scalars['String']['input'];
  imageId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateOneAddressInput = {
  /** The record to create */
  address: CreateAddress;
};

export type CreateOneBannerInput = {
  /** The record to create */
  banner: CreateBanner;
};

export type CreateOneBillingInput = {
  /** The record to create */
  billing: CreateBilling;
};

export type CreateOneCartInput = {
  /** The record to create */
  cart: CreateCart;
};

export type CreateOneCartItemsInput = {
  /** The record to create */
  cartItems: CreateCartItems;
};

export type CreateOneCashPaymentInput = {
  /** The record to create */
  cashPayment: CreateCashPayment;
};

export type CreateOneCategoryInput = {
  /** The record to create */
  category: CreateCategoryInput;
};

export type CreateOneImageInput = {
  /** The record to create */
  image: CreateImage;
};

export type CreateOneLocalInput = {
  /** The record to create */
  local: CreateLocalInput;
};

export type CreateOneOrdenInput = {
  /** The record to create */
  orden: CreateOrden;
};

export type CreateOneOrderItemsInput = {
  /** The record to create */
  orderItems: CreateOrderItems;
};

export type CreateOnePaymentInput = {
  /** The record to create */
  payment: CreatePayment;
};

export type CreateOneProductInput = {
  /** The record to create */
  product: CreateProduct;
};

export type CreateOneProfileInput = {
  /** The record to create */
  profile: CreateProfile;
};

export type CreateOneSubcategoryInput = {
  /** The record to create */
  subcategory: CreateSubcategoryInput;
};

export type CreateOneTenantInput = {
  /** The record to create */
  tenant: TenantInput;
};

export type CreateOneTenantSettingInput = {
  /** The record to create */
  tenantSetting: CreateTenantSetting;
};

export type CreateOneTransferPaymentInput = {
  /** The record to create */
  transferPayment: CreateTransferPayment;
};

export type CreateOneUserInput = {
  /** The record to create */
  user: CreateUser;
};

export type CreateOrden = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateOrderItems = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreatePayment = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateProduct = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateProfile = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateSubcategoryInput = {
  categoryId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  localid: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateTenantSetting = {
  androidVersion?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  iosVersion?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateTenantUserInput = {
  email: Scalars['String']['input'];
};

export type CreateTransferPayment = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateUser = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime']['input'];
  upper: Scalars['DateTime']['input'];
};

export type DeleteOneAddressInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneBannerInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneBillingInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneCartInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneCartItemsInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneCashPaymentInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneCategoryInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneImageInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneLocalInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneOrdenInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneOrderItemsInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOnePaymentInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneProductInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneProfileInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneSubcategoryInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneTenantInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneTenantSettingInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneTransferPaymentInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneUserInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type Image = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ImageAggregateGroupBy = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type ImageConnection = {
  /** Array of nodes. */
  nodes: Array<Image>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ImageCountAggregate = {
  createdAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type ImageDeleteResponse = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ImageFilter = {
  and?: InputMaybe<Array<ImageFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ImageFilter>>;
};

export type ImageMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type ImageMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type ImageSort = {
  direction: SortDirection;
  field: ImageSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type ImageSortFields =
  | 'createdAt'
  | 'id';

export type Local = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type LocalAggregateGroupBy = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type LocalConnection = {
  /** Array of nodes. */
  nodes: Array<Local>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type LocalCountAggregate = {
  createdAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type LocalDeleteResponse = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LocalFilter = {
  and?: InputMaybe<Array<LocalFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<LocalFilter>>;
};

export type LocalMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type LocalMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type LocalSort = {
  direction: SortDirection;
  field: LocalSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type LocalSortFields =
  | 'createdAt'
  | 'id';

export type Mutation = {
  createOneAddress: Address;
  createOneBanner: Banner;
  createOneBilling: Billing;
  createOneCart: Cart;
  createOneCartItems: CartItems;
  createOneCashPayment: CashPayment;
  createOneCategory: Category;
  createOneImage: Image;
  createOneLocal: Local;
  createOneOrden: Orden;
  createOneOrderItems: OrderItems;
  createOnePayment: Payment;
  createOneProduct: Product;
  createOneProfile: Profile;
  createOneSubcategory: Subcategory;
  createOneTenant: Tenant;
  createOneTenantSetting: TenantSetting;
  createOneTransferPayment: TransferPayment;
  createOneUser: User;
  createTenantDriver: User;
  createTenantOperator: User;
  createTenantUser: User;
  deleteOneAddress: AddressDeleteResponse;
  deleteOneBanner: BannerDeleteResponse;
  deleteOneBilling: BillingDeleteResponse;
  deleteOneCart: CartDeleteResponse;
  deleteOneCartItems: CartItemsDeleteResponse;
  deleteOneCashPayment: CashPaymentDeleteResponse;
  deleteOneCategory: CategoryDeleteResponse;
  deleteOneImage: ImageDeleteResponse;
  deleteOneLocal: LocalDeleteResponse;
  deleteOneOrden: OrdenDeleteResponse;
  deleteOneOrderItems: OrderItemsDeleteResponse;
  deleteOnePayment: PaymentDeleteResponse;
  deleteOneProduct: ProductDeleteResponse;
  deleteOneProfile: ProfileDeleteResponse;
  deleteOneSubcategory: SubcategoryDeleteResponse;
  deleteOneTenant: TenantDeleteResponse;
  deleteOneTenantSetting: TenantSettingDeleteResponse;
  deleteOneTransferPayment: TransferPaymentDeleteResponse;
  deleteOneUser: UserDeleteResponse;
  publicLocal: Array<Local>;
  toggleCategoryPublishedStatus: Array<Category>;
  updateCategoryOrder: Category;
  updateOneAddress: Address;
  updateOneBanner: Banner;
  updateOneBilling: Billing;
  updateOneCart: Cart;
  updateOneCartItems: CartItems;
  updateOneCashPayment: CashPayment;
  updateOneCategory: Category;
  updateOneImage: Image;
  updateOneLocal: Local;
  updateOneOrden: Orden;
  updateOneOrderItems: OrderItems;
  updateOnePayment: Payment;
  updateOneProduct: Product;
  updateOneProfile: Profile;
  updateOneSubcategory: Subcategory;
  updateOneTenant: Tenant;
  updateOneTenantSetting: TenantSetting;
  updateOneTransferPayment: TransferPayment;
  updateOneUser: User;
  updateOrderIndexById: Local;
};


export type MutationCreateOneAddressArgs = {
  input: CreateOneAddressInput;
};


export type MutationCreateOneBannerArgs = {
  input: CreateOneBannerInput;
};


export type MutationCreateOneBillingArgs = {
  input: CreateOneBillingInput;
};


export type MutationCreateOneCartArgs = {
  input: CreateOneCartInput;
};


export type MutationCreateOneCartItemsArgs = {
  input: CreateOneCartItemsInput;
};


export type MutationCreateOneCashPaymentArgs = {
  input: CreateOneCashPaymentInput;
};


export type MutationCreateOneCategoryArgs = {
  input: CreateOneCategoryInput;
};


export type MutationCreateOneImageArgs = {
  input: CreateOneImageInput;
};


export type MutationCreateOneLocalArgs = {
  input: CreateOneLocalInput;
};


export type MutationCreateOneOrdenArgs = {
  input: CreateOneOrdenInput;
};


export type MutationCreateOneOrderItemsArgs = {
  input: CreateOneOrderItemsInput;
};


export type MutationCreateOnePaymentArgs = {
  input: CreateOnePaymentInput;
};


export type MutationCreateOneProductArgs = {
  input: CreateOneProductInput;
};


export type MutationCreateOneProfileArgs = {
  input: CreateOneProfileInput;
};


export type MutationCreateOneSubcategoryArgs = {
  input: CreateOneSubcategoryInput;
};


export type MutationCreateOneTenantArgs = {
  input: CreateOneTenantInput;
};


export type MutationCreateOneTenantSettingArgs = {
  input: CreateOneTenantSettingInput;
};


export type MutationCreateOneTransferPaymentArgs = {
  input: CreateOneTransferPaymentInput;
};


export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput;
};


export type MutationCreateTenantDriverArgs = {
  input: CreateTenantUserInput;
};


export type MutationCreateTenantOperatorArgs = {
  input: CreateTenantUserInput;
};


export type MutationCreateTenantUserArgs = {
  input: CreateTenantUserInput;
};


export type MutationDeleteOneAddressArgs = {
  input: DeleteOneAddressInput;
};


export type MutationDeleteOneBannerArgs = {
  input: DeleteOneBannerInput;
};


export type MutationDeleteOneBillingArgs = {
  input: DeleteOneBillingInput;
};


export type MutationDeleteOneCartArgs = {
  input: DeleteOneCartInput;
};


export type MutationDeleteOneCartItemsArgs = {
  input: DeleteOneCartItemsInput;
};


export type MutationDeleteOneCashPaymentArgs = {
  input: DeleteOneCashPaymentInput;
};


export type MutationDeleteOneCategoryArgs = {
  input: DeleteOneCategoryInput;
};


export type MutationDeleteOneImageArgs = {
  input: DeleteOneImageInput;
};


export type MutationDeleteOneLocalArgs = {
  input: DeleteOneLocalInput;
};


export type MutationDeleteOneOrdenArgs = {
  input: DeleteOneOrdenInput;
};


export type MutationDeleteOneOrderItemsArgs = {
  input: DeleteOneOrderItemsInput;
};


export type MutationDeleteOnePaymentArgs = {
  input: DeleteOnePaymentInput;
};


export type MutationDeleteOneProductArgs = {
  input: DeleteOneProductInput;
};


export type MutationDeleteOneProfileArgs = {
  input: DeleteOneProfileInput;
};


export type MutationDeleteOneSubcategoryArgs = {
  input: DeleteOneSubcategoryInput;
};


export type MutationDeleteOneTenantArgs = {
  input: DeleteOneTenantInput;
};


export type MutationDeleteOneTenantSettingArgs = {
  input: DeleteOneTenantSettingInput;
};


export type MutationDeleteOneTransferPaymentArgs = {
  input: DeleteOneTransferPaymentInput;
};


export type MutationDeleteOneUserArgs = {
  input: DeleteOneUserInput;
};


export type MutationPublicLocalArgs = {
  input: TogglePublishedInput;
};


export type MutationToggleCategoryPublishedStatusArgs = {
  input: TogglePublishedInput;
};


export type MutationUpdateCategoryOrderArgs = {
  input: UpdateOrderInput;
};


export type MutationUpdateOneAddressArgs = {
  input: UpdateOneAddressInput;
};


export type MutationUpdateOneBannerArgs = {
  input: UpdateOneBannerInput;
};


export type MutationUpdateOneBillingArgs = {
  input: UpdateOneBillingInput;
};


export type MutationUpdateOneCartArgs = {
  input: UpdateOneCartInput;
};


export type MutationUpdateOneCartItemsArgs = {
  input: UpdateOneCartItemsInput;
};


export type MutationUpdateOneCashPaymentArgs = {
  input: UpdateOneCashPaymentInput;
};


export type MutationUpdateOneCategoryArgs = {
  input: UpdateOneCategoryInput;
};


export type MutationUpdateOneImageArgs = {
  input: UpdateOneImageInput;
};


export type MutationUpdateOneLocalArgs = {
  input: UpdateOneLocalInput;
};


export type MutationUpdateOneOrdenArgs = {
  input: UpdateOneOrdenInput;
};


export type MutationUpdateOneOrderItemsArgs = {
  input: UpdateOneOrderItemsInput;
};


export type MutationUpdateOnePaymentArgs = {
  input: UpdateOnePaymentInput;
};


export type MutationUpdateOneProductArgs = {
  input: UpdateOneProductInput;
};


export type MutationUpdateOneProfileArgs = {
  input: UpdateOneProfileInput;
};


export type MutationUpdateOneSubcategoryArgs = {
  input: UpdateOneSubcategoryInput;
};


export type MutationUpdateOneTenantArgs = {
  input: UpdateOneTenantInput;
};


export type MutationUpdateOneTenantSettingArgs = {
  input: UpdateOneTenantSettingInput;
};


export type MutationUpdateOneTransferPaymentArgs = {
  input: UpdateOneTransferPaymentInput;
};


export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput;
};


export type MutationUpdateOrderIndexByIdArgs = {
  input: UpdateOrderInput;
};

export type OffsetPageInfo = {
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Orden = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrdenAggregateGroupBy = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type OrdenConnection = {
  /** Array of nodes. */
  nodes: Array<Orden>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type OrdenCountAggregate = {
  createdAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type OrdenDeleteResponse = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrdenFilter = {
  and?: InputMaybe<Array<OrdenFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrdenFilter>>;
};

export type OrdenMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type OrdenMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type OrdenSort = {
  direction: SortDirection;
  field: OrdenSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type OrdenSortFields =
  | 'createdAt'
  | 'id';

export type OrderItems = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderItemsAggregateGroupBy = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type OrderItemsConnection = {
  /** Array of nodes. */
  nodes: Array<OrderItems>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type OrderItemsCountAggregate = {
  createdAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type OrderItemsDeleteResponse = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderItemsFilter = {
  and?: InputMaybe<Array<OrderItemsFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderItemsFilter>>;
};

export type OrderItemsMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type OrderItemsMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type OrderItemsSort = {
  direction: SortDirection;
  field: OrderItemsSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type OrderItemsSortFields =
  | 'createdAt'
  | 'id';

export type Payment = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PaymentAggregateGroupBy = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type PaymentConnection = {
  /** Array of nodes. */
  nodes: Array<Payment>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type PaymentCountAggregate = {
  createdAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type PaymentDeleteResponse = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PaymentFilter = {
  and?: InputMaybe<Array<PaymentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PaymentFilter>>;
};

export type PaymentMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type PaymentMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type PaymentSort = {
  direction: SortDirection;
  field: PaymentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type PaymentSortFields =
  | 'createdAt'
  | 'id';

export type Product = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductAggregateGroupBy = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type ProductConnection = {
  /** Array of nodes. */
  nodes: Array<Product>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ProductCountAggregate = {
  createdAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type ProductDeleteResponse = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductFilter = {
  and?: InputMaybe<Array<ProductFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilter>>;
};

export type ProductMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type ProductMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type ProductSort = {
  direction: SortDirection;
  field: ProductSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type ProductSortFields =
  | 'createdAt'
  | 'id';

export type Profile = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProfileAggregateGroupBy = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type ProfileConnection = {
  /** Array of nodes. */
  nodes: Array<Profile>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ProfileCountAggregate = {
  createdAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type ProfileDeleteResponse = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProfileFilter = {
  and?: InputMaybe<Array<ProfileFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProfileFilter>>;
};

export type ProfileMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type ProfileMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type ProfileSort = {
  direction: SortDirection;
  field: ProfileSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type ProfileSortFields =
  | 'createdAt'
  | 'id';

export type Query = {
  address?: Maybe<Address>;
  addresses: AddressConnection;
  banner?: Maybe<Banner>;
  banners: BannerConnection;
  billing?: Maybe<Billing>;
  billings: BillingConnection;
  cart?: Maybe<Cart>;
  cartItems: CartItemsConnection;
  carts: CartConnection;
  cashPayment?: Maybe<CashPayment>;
  cashPayments: CashPaymentConnection;
  categories: CategoryConnection;
  category?: Maybe<Category>;
  hello: Scalars['String']['output'];
  image?: Maybe<Image>;
  images: ImageConnection;
  local?: Maybe<Local>;
  locals: LocalConnection;
  orden?: Maybe<Orden>;
  ordens: OrdenConnection;
  orderItems: OrderItemsConnection;
  payment?: Maybe<Payment>;
  payments: PaymentConnection;
  product?: Maybe<Product>;
  products: ProductConnection;
  profile?: Maybe<Profile>;
  profiles: ProfileConnection;
  subcategories: SubcategoryConnection;
  subcategory?: Maybe<Subcategory>;
  tenant?: Maybe<Tenant>;
  tenantSetting?: Maybe<TenantSetting>;
  tenantSettings: TenantSettingConnection;
  tenants: TenantConnection;
  transferPayment?: Maybe<TransferPayment>;
  transferPayments: TransferPaymentConnection;
  user?: Maybe<User>;
  users: UserConnection;
};


export type QueryAddressArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAddressesArgs = {
  filter?: AddressFilter;
  paging?: OffsetPaging;
  sorting?: Array<AddressSort>;
};


export type QueryBannerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBannersArgs = {
  filter?: BannerFilter;
  paging?: OffsetPaging;
  sorting?: Array<BannerSort>;
};


export type QueryBillingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBillingsArgs = {
  filter?: BillingFilter;
  paging?: OffsetPaging;
  sorting?: Array<BillingSort>;
};


export type QueryCartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCartItemsArgs = {
  filter?: CartItemsFilter;
  paging?: OffsetPaging;
  sorting?: Array<CartItemsSort>;
};


export type QueryCartsArgs = {
  filter?: CartFilter;
  paging?: OffsetPaging;
  sorting?: Array<CartSort>;
};


export type QueryCashPaymentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCashPaymentsArgs = {
  filter?: CashPaymentFilter;
  paging?: OffsetPaging;
  sorting?: Array<CashPaymentSort>;
};


export type QueryCategoriesArgs = {
  filter?: CategoryFilter;
  paging?: OffsetPaging;
  sorting?: Array<CategorySort>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryImageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryImagesArgs = {
  filter?: ImageFilter;
  paging?: OffsetPaging;
  sorting?: Array<ImageSort>;
};


export type QueryLocalArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLocalsArgs = {
  filter?: LocalFilter;
  paging?: OffsetPaging;
  sorting?: Array<LocalSort>;
};


export type QueryOrdenArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrdensArgs = {
  filter?: OrdenFilter;
  paging?: OffsetPaging;
  sorting?: Array<OrdenSort>;
};


export type QueryOrderItemsArgs = {
  filter?: OrderItemsFilter;
  paging?: OffsetPaging;
  sorting?: Array<OrderItemsSort>;
};


export type QueryPaymentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPaymentsArgs = {
  filter?: PaymentFilter;
  paging?: OffsetPaging;
  sorting?: Array<PaymentSort>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  filter?: ProductFilter;
  paging?: OffsetPaging;
  sorting?: Array<ProductSort>;
};


export type QueryProfileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProfilesArgs = {
  filter?: ProfileFilter;
  paging?: OffsetPaging;
  sorting?: Array<ProfileSort>;
};


export type QuerySubcategoriesArgs = {
  filter?: SubcategoryFilter;
  paging?: OffsetPaging;
  sorting?: Array<SubcategorySort>;
};


export type QuerySubcategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTenantArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTenantSettingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTenantSettingsArgs = {
  filter?: TenantSettingFilter;
  paging?: OffsetPaging;
  sorting?: Array<TenantSettingSort>;
};


export type QueryTenantsArgs = {
  filter?: TenantFilter;
  paging?: OffsetPaging;
  sorting?: Array<TenantSort>;
};


export type QueryTransferPaymentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTransferPaymentsArgs = {
  filter?: TransferPaymentFilter;
  paging?: OffsetPaging;
  sorting?: Array<TransferPaymentSort>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  filter?: UserFilter;
  paging?: OffsetPaging;
  sorting?: Array<UserSort>;
};

export type Role =
  | 'Admin'
  | 'Customer'
  | 'Driver'
  | 'Operator'
  | 'SuperAdmin'
  | 'User';

export type RoleFilterComparison = {
  eq?: InputMaybe<Role>;
  gt?: InputMaybe<Role>;
  gte?: InputMaybe<Role>;
  iLike?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Role>;
  lt?: InputMaybe<Role>;
  lte?: InputMaybe<Role>;
  neq?: InputMaybe<Role>;
  notILike?: InputMaybe<Role>;
  notIn?: InputMaybe<Array<Role>>;
  notLike?: InputMaybe<Role>;
};

/** Sort Directions */
export type SortDirection =
  | 'ASC'
  | 'DESC';

/** Sort Nulls Options */
export type SortNulls =
  | 'NULLS_FIRST'
  | 'NULLS_LAST';

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  iLike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notILike?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type Subcategory = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SubcategoryAggregateGroupBy = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type SubcategoryConnection = {
  /** Array of nodes. */
  nodes: Array<Subcategory>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type SubcategoryCountAggregate = {
  createdAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type SubcategoryDeleteResponse = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SubcategoryFilter = {
  and?: InputMaybe<Array<SubcategoryFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SubcategoryFilter>>;
};

export type SubcategoryMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type SubcategoryMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type SubcategorySort = {
  direction: SortDirection;
  field: SubcategorySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type SubcategorySortFields =
  | 'createdAt'
  | 'id';

export type Tenant = {
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  fullNames: Scalars['String']['output'];
  id: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TenantAggregateGroupBy = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullNames?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type TenantConnection = {
  /** Array of nodes. */
  nodes: Array<Tenant>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type TenantCountAggregate = {
  createdAt?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Int']['output']>;
  fullNames?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  phone?: Maybe<Scalars['Int']['output']>;
};

export type TenantDeleteResponse = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullNames?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TenantFilter = {
  and?: InputMaybe<Array<TenantFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  fullNames?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TenantFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
};

export type TenantInput = {
  email: Scalars['String']['input'];
  fullNames: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type TenantMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullNames?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type TenantMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullNames?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type TenantSetting = {
  androidVersion: Scalars['String']['output'];
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  iosVersion: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TenantSettingAggregateGroupBy = {
  androidVersion?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  iosVersion?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type TenantSettingConnection = {
  /** Array of nodes. */
  nodes: Array<TenantSetting>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type TenantSettingCountAggregate = {
  androidVersion?: Maybe<Scalars['Int']['output']>;
  color?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  iosVersion?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
};

export type TenantSettingDeleteResponse = {
  androidVersion?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  iosVersion?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TenantSettingFilter = {
  and?: InputMaybe<Array<TenantSettingFilter>>;
  androidVersion?: InputMaybe<StringFieldComparison>;
  color?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  iosVersion?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TenantSettingFilter>>;
};

export type TenantSettingMaxAggregate = {
  androidVersion?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  iosVersion?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type TenantSettingMinAggregate = {
  androidVersion?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  iosVersion?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type TenantSettingSort = {
  direction: SortDirection;
  field: TenantSettingSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type TenantSettingSortFields =
  | 'androidVersion'
  | 'color'
  | 'createdAt'
  | 'id'
  | 'iosVersion'
  | 'name';

export type TenantSort = {
  direction: SortDirection;
  field: TenantSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type TenantSortFields =
  | 'createdAt'
  | 'email'
  | 'fullNames'
  | 'id'
  | 'phone';

export type TogglePublishedInput = {
  ids: Array<Scalars['String']['input']>;
  published: Scalars['Boolean']['input'];
};

export type TransferPayment = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TransferPaymentAggregateGroupBy = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type TransferPaymentConnection = {
  /** Array of nodes. */
  nodes: Array<TransferPayment>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type TransferPaymentCountAggregate = {
  createdAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type TransferPaymentDeleteResponse = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TransferPaymentFilter = {
  and?: InputMaybe<Array<TransferPaymentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TransferPaymentFilter>>;
};

export type TransferPaymentMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type TransferPaymentMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type TransferPaymentSort = {
  direction: SortDirection;
  field: TransferPaymentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type TransferPaymentSortFields =
  | 'createdAt'
  | 'id';

export type UpdateAddress = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateBanner = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateBilling = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateCart = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateCartItems = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateCashPayment = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateImage = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateOneAddressInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateAddress;
};

export type UpdateOneBannerInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateBanner;
};

export type UpdateOneBillingInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateBilling;
};

export type UpdateOneCartInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateCart;
};

export type UpdateOneCartItemsInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateCartItems;
};

export type UpdateOneCashPaymentInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateCashPayment;
};

export type UpdateOneCategoryInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: CreateCategoryInput;
};

export type UpdateOneImageInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateImage;
};

export type UpdateOneLocalInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: CreateLocalInput;
};

export type UpdateOneOrdenInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateOrden;
};

export type UpdateOneOrderItemsInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateOrderItems;
};

export type UpdateOnePaymentInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdatePayment;
};

export type UpdateOneProductInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateProduct;
};

export type UpdateOneProfileInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateProfile;
};

export type UpdateOneSubcategoryInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: CreateSubcategoryInput;
};

export type UpdateOneTenantInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: TenantInput;
};

export type UpdateOneTenantSettingInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateTenantSetting;
};

export type UpdateOneTransferPaymentInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateTransferPayment;
};

export type UpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateUser;
};

export type UpdateOrden = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateOrderInput = {
  id: Scalars['String']['input'];
  orderIndex: Scalars['Float']['input'];
};

export type UpdateOrderItems = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdatePayment = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateProduct = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateProfile = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateTenantSetting = {
  androidVersion?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  iosVersion?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateTransferPayment = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateUser = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User = {
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  role: Role;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserAggregateGroupBy = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
};

export type UserConnection = {
  /** Array of nodes. */
  nodes: Array<User>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type UserCountAggregate = {
  createdAt?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['Int']['output']>;
};

export type UserDeleteResponse = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserFilter = {
  and?: InputMaybe<Array<UserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilter>>;
  role?: InputMaybe<RoleFilterComparison>;
};

export type UserMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
};

export type UserMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type UserSortFields =
  | 'createdAt'
  | 'email'
  | 'id'
  | 'role';

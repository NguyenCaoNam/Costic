interface IRootState {
    loading: number;
    number: number;
    product: any[];
    listFavourite: any[];
    credential: { username: string, password: string };
    isLogin: boolean;
    dataProduct: any;
}
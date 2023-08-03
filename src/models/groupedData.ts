export type Child = {
    key: string;
    UserToken: string;
    ProductToken: string;
    ProductName: string;
}

export type GroupedData = {
    key: string;
    PublicIp: string;
    children: Child[];
}

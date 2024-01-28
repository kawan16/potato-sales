
export type BaseProduct = {
    productID: string;
    productName: string;
    productManager: string, 
    salesStartDate?: string;
    salesQ1?: number;
    salesQ2?: number;
    salesQ3?: number;
    salesQ4?: number;
}

export type Product = Readonly<BaseProduct>;
export type ProductToAddKeys =  'productID' | 'productName' | 'productManager' | 'salesStartDate';
export type ProductToAdd = Readonly<Pick<BaseProduct, ProductToAddKeys>>;

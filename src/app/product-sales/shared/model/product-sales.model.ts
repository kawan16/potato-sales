import { BaseProduct } from "../../../product/shared/model/product.model";

export type ProductSalesFieldValues =  'productID' | 'productName' | 'salesQ1' | 'salesQ2' | 'salesQ3' | 'salesQ4';
export type ProductSalesField = Readonly<{field: ProductSalesFieldValues}>;
export type BaseProductSalesColumn = Readonly<{header: string}> & ProductSalesField;
export type ProductSalesColumn = BaseProductSalesColumn & Readonly<{subHeaders?: BaseProductSalesColumn[]}>;
export type ProductSalesRow = Readonly<Required<Pick<BaseProduct, ProductSalesFieldValues>>>;
export type ProductSales = {column: ProductSalesColumn[], data: ProductSalesRow[]};


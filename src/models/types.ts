export interface Category  {
    id: number,
    product_type_id: number,
    name_uz: string ,
    cost : number | null,
    address:  string,
    created_date: Date | string
}

export interface Catalog{
    name: string,
    cost: number,
    address: string
}


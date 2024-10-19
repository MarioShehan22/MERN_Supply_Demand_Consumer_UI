export interface Address {
    addressLine:string|'',
    district: string|'',
    city: string|'',
    optional: string|''
}
export type Product = {
    _id: string|'';
    name:string|'';
    showPrice:number|null;
    imageUrl:string|'';
    description:string|'';
}
export type Ratings = {
    email: string | '',
    comment: string | '',
    currentRating: number|0
}
export interface UserFindByEmail{
    _id:string|'',
    fistName:string|'',
    email:string|'',
    phoneNumber:string|'',
    businessName: string|''
}
export interface Address {
    addressLine:string|'',
    district: string|'',
    city: string|'',
    optional: string|''
}

export type CartProduct = Product & { quantity: number|null };

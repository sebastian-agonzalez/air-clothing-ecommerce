export interface Product {
    id: number,
    price: string,
    size: Sizes,
    clothingSex: ClothingSex,
    clothingType: ClothingType,
    clothingSubType: ClothingSubType,
    createdAt: string,
    images: string[],
}

export type Sizes = 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export type ClothingType = 'Top' | 'Bottom';

export type ClothingSex = 'Women' | 'Men' | 'All';

export type ClothingSubType = 'Sweater' |
                              'TShirt'  |
                              'Shirt'   |
                              'Hoodie'  |
                              'Sock'    |
                              'Trouser' |
                              'Jacket'  |
                              'Jean'    |
                              'Skirt'   |
                              'Dress'   |
                              'Top'
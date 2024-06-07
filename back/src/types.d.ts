export type color = "Beige" | "Blanco" | "Azul" | "Gris" | "Naranja" | "Verde";
export type category = "Piso" | "Cocina" | "Terraza" | "Baño";
export type use = "Interior" | "Exterior";
export type size = "10x10 cm" | "20x20 cm" | "30x30 cm" | "40x40 cm" | "50x50 cm" | "60x60 cm" | "70x70 cm" | "80x80 cm" | "90x90 cm" | "100x100 cm";

export interface AllCeramics {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: category;
    use: use;
    color: color;
    size: size;
    imageUrl: string;
}

export type DataCeramic = Omit<AllCeramics, "id">;
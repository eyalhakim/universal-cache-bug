export interface Category {
    id?: number;
    title: string;
    name: string;
    trending?: boolean;

    subCategories?: Category[];
}


export type CategoryItem = {
    title: string;
    href: string;
    description: string;
};

export type Category = {
    title: string;
    href: string;
    description: string;
    categoryItem: CategoryItem[];
};

export type FreeContent = {
    categories: Category[];
};

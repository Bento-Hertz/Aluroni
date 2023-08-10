export interface IDish {
    title: string,
    description: string,
    photo: string,
    size: number,
    serving: number,
    price: number,
    id: number,
    category: {
        id: number,
        label: string
    }
} 
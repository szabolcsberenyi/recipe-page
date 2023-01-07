export interface Recipe{
    name: string;
    difficulty: Difficulty;
    cookTime: number;
    image: string;
    alt: string;
    ingredients: [string,number][];
    steps: string[];

    
}
export enum Difficulty{
    easy,medium,hard
}


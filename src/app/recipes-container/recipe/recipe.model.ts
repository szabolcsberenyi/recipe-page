export class Recipe{
    name: string;
    difficulty: Difficulty;
    cookTime: number;
    image: string;
    ingredients: [string,number][];
    steps: string[];

    constructor(name: string, difficulty: Difficulty,cookTime:number, image:string, ingredients: [string,number][], steps: string[]){
        this.name = name;
        this.difficulty = difficulty;
        this.cookTime = cookTime
        this.image = image;
        this.ingredients = ingredients;
        this.steps = steps;
    }
}
export enum Difficulty{
    easy,medium,hard
}


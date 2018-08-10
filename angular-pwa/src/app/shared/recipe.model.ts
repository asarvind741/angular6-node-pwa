export class Recipe {
    public name: string;
    public id: string;
    public imagePath: string;

    constructor(name: string, id: string, imagePath: string){
    this.id = id;
    this.name = name;
    this.imagePath = imagePath
    }
}

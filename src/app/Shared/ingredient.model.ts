export class Ingredient{
    //adding the property like public name:string is optional so either we can declare in parameter part of constructor
    //It will automatically create property declaration
    constructor(public name:string,public amount:number){}
}
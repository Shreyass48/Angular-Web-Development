
class Arithmetic
{
    Number1 : number;
    Number2 : number;

    constructor(no1 : number, no2 : number)
    {
        this.Number1 = no1;
        this.Number2 = no2;
    }

    Addition() : number
    {
        var result : number = 0;
        result = this.Number1 + this.Number2;
        return result
    }

    Subtraction() : number
    {
        var result : number = 0;
        result = this.Number1 - this.Number2;
        return result
    }

    Division() : number
    {
        var result : number = 0;
        result = this.Number1 / this.Number2;
        return result
    }

    Multiplication() : number
    {
        var result : number = 0;
        result = this.Number1 * this.Number2;
        return result
    }
}



function main() : void
{
    
    var obj1 = new Arithmetic(10,2);
    var ret : number = 0;
    ret = obj1.Addition();
    console.log("Addition is : "+ret);

    ret = obj1.Subtraction();
    console.log("Subtraction is : "+ret);

    ret = obj1.Division();
    console.log("Division is : "+ret);

    ret = obj1.Multiplication();
    console.log("Multiplication is : "+ret);

    var obj2 = new Arithmetic(51,101);
    ret = obj2.Addition();
    console.log("Addition is : "+ret);
}

main();
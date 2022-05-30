
class Circle
{
    radius : number;
    PI : number;

    constructor(a : number, b : number = 3.14)
    {
        this.radius = a;
        this.PI = b;
    }

    Area() : number
    {
        var ans : number = 0;
        ans = this.PI *(this.radius * this.radius);
        return ans;
    }
}

function main() : void
{
    var obj = new Circle(10);
    var ret : number = 0;
    ret = obj.Area();
    console.log("Area of ciricle is : "+ret); 
}    
main();


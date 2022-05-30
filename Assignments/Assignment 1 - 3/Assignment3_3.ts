
class Circle
{
    public radius : number;
    public PI : number;

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

class CircleX extends Circle
{
    Circumference()
    {
        var ans : number = 0;
        ans = ((2 * this.PI) * this.radius);
        return ans; 
    }
}

function main() : void
{
    var obj = new Circle(10);
    var ret : number = 0;
    ret = obj.Area();
    console.log("Area of Circle is : "+ret); 

    var obj1 = new CircleX(10);
    ret = obj1.Circumference();
    ret = obj1.Area();
    console.log("Circumference of Circle is : "+ret); 
}    
main();


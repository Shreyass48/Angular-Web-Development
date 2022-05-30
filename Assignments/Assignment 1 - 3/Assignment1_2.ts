
function main() : void
{
    var radius : number = 5;
    var ans : number = 0;

   ans = Area(radius);

   console.log("Area of circle : "+ans);

}

function Area(no : number) : number
{
    var ans : number = 0;

    ans = 3.14 * (no * no);

    return ans;
}

main();

function main() : void
{
    var arr : number[];
    arr = [23,6,7,4,5,7];

    var ans : number = 0; 

    ans = Summation(arr);

    console.log("Summation of array is : "+ans);


}

function Summation(brr) : number
{
    var i : number = 0;
    var sum : number = 0;
    for(i = 0; i < brr.length; i++)
    {
        sum = sum + brr[i];
    }

    return sum;
}

main();
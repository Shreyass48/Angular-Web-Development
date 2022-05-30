
function main() : void
{
    var arr : number[];
    arr = [23, 89, 629,56,45,77,32];

    var ans : number = 0; 

    ans = Maximum(arr);

    console.log("Maximum number in array is : "+ans);


}

function Maximum(brr) : number
{
    var i : number = 0;
    var max : number = brr[0];
    for(i = 0; i < brr.length; i++)
    {
        if(brr[i] > max)
        {
            max = brr[i];
        }
    }

    return max;
}

main();
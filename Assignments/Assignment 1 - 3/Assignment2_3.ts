
function main() : void
{
    var arr : number[];
    arr = [23, 89, 6,29,56,45,77,32];

    var ans : number = 0; 

    ans = SecMaximum(arr);

    console.log("Second Maximum number in array is : "+ans);


}

function SecMaximum(brr) : number
{
    var i : number = 0;
    var max : number = brr[0];
    var max2 : number = brr[0];
    for(i = 0; i < brr.length; i++)
    {
        if(brr[i] > max)
        {
            max = brr[i];
        }
    }

    for(i = 0; i < brr.length; i++)
    {
        if(brr[i] > max2 && brr[i] < max)
        {
            max2 = brr[i];
        }
    }

        return max2;
    
}

main();
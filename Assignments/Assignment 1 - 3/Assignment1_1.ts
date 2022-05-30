
function main() : void
{
    var a : number = 23;
    var b : number = 89;
    var c : number = 6;
    var ans : number = 0;

   ans = Maximum(a,b,c);

   console.log("Maximum number is : "+ans);

}

function Maximum(no1 : number,no2 : number,no3 : number) : number
{
    if(no1 > no2 && no1 > no3)
    {
        return no1;
    }
    else if(no2 > no1 && no2 > no3)
    {
        return no2;
    }
    else
    {
        return no3;
    }
}

main();
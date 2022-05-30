
function main() : void
{
    var no : number = 21;
    Fibonacci(no);
}

function Fibonacci(no : number) : void
{
    var i : number = 0;
    var no1 : number = 1;
    var no2 : number = 1;

    console.log(no1);
    console.log(no2);

    for(i = 1; i < no; i++)
    {
        if(no2 == 21)
        {
            return;
        }
        var no3 : number = no1+no2;
        console.log(no3);
        no1 = no2;
        no2 = no3;
    }
}

main();
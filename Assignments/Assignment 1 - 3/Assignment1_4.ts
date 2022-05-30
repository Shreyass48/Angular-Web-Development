
function main() : void
{
    var no : number = 11;
    var fret : boolean;

    fret = CheckPrime(no);

    if(fret == true)
    {
        console.log("It is prime number");
    }
    else 
    {
        console.log("It is not prime number");
    }

}

function CheckPrime(no : number) : boolean
{
    var i : number = 0;
    var flag : boolean = true;

    for(i = 2; i < no; i++)
    {
        if(no % i == 0)
        {
            flag = false;
        }
    }

    return flag;
}

main();
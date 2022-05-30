
function main() : void
{
    var no : number = 20;

    DisplayFactors(no);

}

function DisplayFactors(no : number) : void
{
    var i : number = 0; 
    for(i = 1; i <= (no / 2); i++)
    {
        if(no % i == 0)
        {
            console.log(" "+i);
        }
    }
}

main();
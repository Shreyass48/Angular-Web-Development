
function main() : void
{
    var no : number = 371;
    var bret : boolean ;

    bret = ChkArmstrong(no);

    if(bret == true)
    {
        console.log("Armstrong");
    }
    else
    {
        console.log("Not an Armstrong");
    }


}

function ChkArmstrong(no : number) : boolean
{
    var copy : number = no;
    var digit : number;
    var sum : number = 0;
    while(no != 0)
    {
        digit = no % 10;
        sum = sum + (digit * digit * digit);
        console.log(sum);
        no = no / 10;
    }

    if(copy == sum)
    {
        return true;
    }
    else
    {
        return false;
    }
    
}

main();
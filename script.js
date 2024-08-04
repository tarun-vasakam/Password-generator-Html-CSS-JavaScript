function generate()
{
    let display=document.querySelector("#passwords");
    let passlen=document.querySelector("input").value;
    let words='ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+1234567890abcdefghijklmnopqrstuvwxyz,.;:'
    let out=''
    if (!passlen || passlen==0)
    {
        display.innerText="Set length for password";
        return;
    }
    else if (passlen<4)
    {
        display.innerText="Length too short";
        return;
    }
    else if (passlen>25)
    {
        display.innerText="Length too large";
        return;
    }
    else
    {
        for (let i=0;i<passlen;i++)
        {
            out+=words[Math.floor(Math.random()*words.length)];
        }
        display.innerText=out;
    }
}
//Password Show for Reg
function showPassForSignIn()
{
    let v = document.getElementById("password");

    if(v.type == "password")
    {
        v.setAttribute("type", "text");
        v = document.getElementById("open-eye");
        v.className = "fas fa-eye-slash"
    }
    else
    {
        v.setAttribute("type", "password");
        v = document.getElementById("open-eye");
        v.className = "fas fa-eye";
    }
}

function showPassForLogIn()
{
    let v = document.getElementById("pass");

    if(v.type == "password")
    {
        v.setAttribute("type", "text");
        v = document.getElementById("open-eye-1");
        v.className = "fas fa-eye-slash"
    }
    else
    {
        v.setAttribute("type", "password");
        v = document.getElementById("open-eye-1");
        v.className = "fas fa-eye";
    }
}
var a=[0,0,0,0];
var i;
for(i=1; i<5;i++)
{
  a[i-1] = Math.floor(Math.random() * 10);
document.getElementById(i).innerHTML=a[i-1];
}

console.log(a);

function validatecaptcha(){
  var captcha=document.login.captcha.value;
  if(captcha.length!=4){return false;}

  else if(captcha.length==4)
  {
    for(i=0;i<4;i++)
    {
      console.log(captcha[i]);
      if(captcha[i]!=a[i]){return false;}
    }
    return true;
  }
}

function validateform(){
var name=document.login.uname.value;
var password=document.login.password.value;
if (name==null || name=="")
  {
  alert("Username can't be blank");
  return false;
  }
if(name!=null)
    {
      for(i=0;i<name.length;i++)
        {
            console.log(name.length);
            console.log(name);
            if(!(isNaN(name[i]))){alert("Userame cannot have numbers");return false;}
        }
    }
if(password.length<6 || isNaN(password))
  {
  alert("Registered passwords are least 6 digits long and only numerical.");
  return false;
}
if(!validatecaptcha()){alert("Invalid captcha");return false;}
window.location.replace("1-index.html");
alert("YOU ARE BEING REDIRECTED");
}

function disp()
{
  // if(document.login.password.value>6)
  document.getElementById('encrypt').style.display="block";
}

function encryptpw()
{
  var pw= document.login.password.value;
  console.log(pw);
  if(pw.length<6 || isNaN(pw))
  {
    alert("Registered passwords are 6 digits long and only numerical, ensure standards to encrypt password");
    return false;
  }
  var salt= parseInt(a[0]);
  var mul=parseInt(a[1]);
  console.log(mul);
  console.log(salt);
  var enpw= ((pw+salt)*mul);
  alert("ENCRYPTED: "+enpw);
}

// window.onload = function () {
//         document.getElementById("form").onsubmit = function () {
//             if (validateform) window.location.href = "http://www.w3fools.com";
//             else alert("did not redirect - form did not validate");
//             return false; //prevent the default behavior of the submit event
//         }
//     }

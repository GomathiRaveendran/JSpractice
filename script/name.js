var a;
var b;
var c;
var d;
function outname()
{
  a=document.signup.fname.value;
  b=document.signup.mname.value;
  c=document.signup.lname.value;
  d= a+' '+b+' '+c;
  document.getElementById('output').innerHTML=d;
}

function casech(x)
{
  if(d==null){document.getElementById('output').innerHTML="enter your name in the fields given to display them here"; return false;}
  if(x==0){document.getElementById('output').innerHTML=d;}
  if(x==1){document.getElementById('output').innerHTML=d.toUpperCase();}
  if(x==2){document.getElementById('output').innerHTML=d.toLowerCase();}
}

var doorno;
var city;
var pw;
var rpw;
var dn;

function validateform() {
a=document.signup.fname.value;
b=document.signup.mname.value;
c=document.signup.lname.value;
city=document.signup.city.value;
pincode=document.signup.pincode.value;
dn=document.signup.doorno.value;
var dnp= /^[0-9].+['-'].[0-9]$/i

var hasNumber = /\d/;
  if(a!=null && c!=null)
      {

        if(hasNumber.test(a)){alert("Invalid First Name");return false;}
        if(hasNumber.test(b)){alert("Invalid Middle Name");return false;}
        if(hasNumber.test(c)){alert("Invalid Last Name");return false;}
      }
  else{
    alert("Name not valid");
    return false;
  }


  if(!pwvalidate()){return false;}
  if(city!=null)
  {
    for(i=0;i<city.length;i++)
      {
          console.log(city.length);
          console.log(city);
          if(city[i]=="-"){continue;}
          else if(!isNaN(city[i])){alert("City name cannot have numbers");return false;}
      }
  }
  else{alert("City name cannot have numbers");return false;}

  if(pincode>=6)
  {
    for(i=0;i<pincode.length;i++)
    {
      if(NaN(pincode[i]))
      {
        alert("Invalid pincode!");
        return false;
      }
    }
  }
  else{alert("Indian pincode cannpt be more than 6 digits");return false;}
  window.location.replace("2-index.html");
  alert("YOU ARE BEING REDIRECTED");
}

function pwvalidate()
{
  pw=document.signup.psw.value;
  rpw=document.signup.rpsw.value;
  var num=0,alp=0,ualp=0;
  if(pw==rpw)
  {
    if(pw.length>6)
    {
      for(i=0;i<pw.length;i++)
      {
        if(isNaN(pw[i]))
        {
          alp++;
          if(pw[i]>'A' && pw[i]<'Z')
          {ualp++}
        }
        else{num++;}
      }
      if(ualp>0 && num>0 && alp>0){return true;}
    }
  }
  alert("invalid password/ passwords don't match");
  return false;
}

console.log("linked");

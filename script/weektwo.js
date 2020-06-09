function validateform1()
{
  var a=document.vpass.vhno.value;
  var t=document.vpass.typ.value;
  var phno=document.vpass.phno.value;
  var pattern = /^[A-Z]{2}[ -]{0,1}[0-9]{2}[ -]{0,1}[A-Z]{1,2}[ -]{0,1}[0-9]{1,4}$/i;
  if(!a.match(pattern))
  {
    console.log("why");
    alert("VEHICLE NUMBER NOT VALID");
    return false;
  }
  else if(t=="Select"){alert("Select an option for the type of vehicle"); return false;}
  else if(phno.length!=10){alert("Invalid Phone Number"); return false;}
  else if(isNaN(phno)){alert("Invalid Phone Number"); return false;}
  return true;
}

function finddep()
{
  var rn=document.idvalid.rn.value;
  var orgin= document.getElementById('dept').innerHTML;
  if(rn.includes("U4")){document.getElementById('dept').innerHTML= orgin+ "Undergraduate";}
  if(rn.includes("CSE"))
}


function validateform2()
{
  var bld=document.idvalid.bldgrp.value;
  var nam=document.idvalid.name.value;
  var sel=document.idvalid.hds.value;
  var rn=document.idvalid.rn.value;
  var nonum= /^([^0-9]*)$/i
  var idp= /^[CB.]{1}[A-Z].+[.][A-Z]{1}[4-5][A-Z].+[0-9].+/i
    if(!nam.match(nonum)){alert("Name not valid"); return false;}
    else if(bld=="Select"){alert("Select an option for the type of vehicle"); return false;}
    else if(sel=="Select"){alert("Select an option - Hosteller/ Dayscholar"); return false;}
    else if(!rn.match(idp)){alert("Invalid Roll No"); return false;}

}

function revnum()
{
  var revno= document.getElementById('rev').value;
  var temp=revno;
  var r,m=0;
  while(temp>0)
  {
    r=parseInt(temp%10);
    temp=parseInt(temp/10);
    m= parseInt(((m*10)+r));
  }
  document.getElementById('reved').value=m;

}

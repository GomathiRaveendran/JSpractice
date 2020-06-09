function domath(op)
{
  var n1=parseInt(document.getElementById("number1").value);
  var n2=parseInt(document.getElementById("number2").value);
  var sol;
  if( isNaN(n1) || isNaN(n2)){sol="Enter numbers to perform the operation";}
  else{
  if(op==1){sol= n1+n2;}
  else if(op==2){sol= n1-n2;}
  else if(op==3){sol= (n1*n2); }
  else if(op==4){if(n2==0){sol="Cannot divide by 0";}else{sol=(n1/n2);}}
  document.getElementById("number3").value=sol;
  }
}

var d;
var no1=null;
var no2=null;
var ans=null;
var flag=0;
var occ=0;
var nope=0;
var flt=0;
var i;
function calc(x){

d=document.getElementById('disp').value;
  if(x==-3){d='';nope=1; flag=0; flt=0; no1=null; no2=null; occ=0;}
  else if(x==-1){ d=d.slice(0, (d.length-1)); if(d.length<=1){nope=1;} else if(d.search('.')==-1){flt=0;}  console.log(no1); console.log(no2);}
  else if(x>=0 && x<=9){d=d+x; nope=0;  console.log(no1); console.log(no2);}
  else if(x==99){d=d+'.'; nope=1; flt=1;}
  // boper
  else if(x==11){if(nope==0 && flag==0){ if(occ==0){if(flt==0){no1=parseInt(d);}else{no1=parseFloat(d);} occ=1} else if(occ==1){if(flt==0){no2=parseInt(d);}else{no2=parseFloat(d);} occ=2;} else if(occ==2){return;} flag=1; nope=1 ;flt=0;d=' '; console.log(no1); console.log(no2); }}
  else if(x==12){if(nope==0 && flag==0){ if(occ==0){if(flt==0){no1=parseInt(d);}else{no1=parseFloat(d);} occ=1} else if(occ==1){if(flt==0){no2=parseInt(d);}else{no2=parseFloat(d);} occ=2;} else if(occ==2){return;} flag=2 ;nope=1 ;flt=0;d=' '; console.log(no1); console.log(no2); }}
  else if(x==13){if(nope==0 && flag==0){ if(occ==0){if(flt==0){no1=parseInt(d);}else{no1=parseFloat(d);} occ=1} else if(occ==1){if(flt==0){no2=parseInt(d);}else{no2=parseFloat(d);} occ=2;} else if(occ==2){return;} flag=3 ;nope=1 ;flt=0;d=' '; console.log(no1); console.log(no2); }}
  else if(x==14){if(nope==0 && flag==0){ if(occ==0){if(flt==0){no1=parseInt(d);}else{no1=parseFloat(d);} occ=1} else if(occ==1){if(flt==0){no2=parseInt(d);}else{no2=parseFloat(d);} occ=2;} else if(occ==2){return;} flag=4 ;nope=1 ;flt=0;d=' '; console.log(no1); console.log(no2); }}
  // soper
  else if(x=15){
    var no, oh;
    if(occ==1){no=no1;}
    if(occ==2){no=no2;}
    if(occ==0){return;}
    if(flt==1){d="Error";}
    else {oh=parseInt(no);
      ans=1;
      for(i=1;i<=oh;i++)
      {ans=ans*i;}
      d=ans;
    }
  }

  else if(x==16){
    var no;
    if(occ==1){no=no1;}
    if(occ==2){no=no2;}
    if(occ==0){return;}
    if(flt==1){ans=parseFloat(no);}
    else{ans=parseInt(no);}
    d=(ans*ans*ans);
  }

  else if(x==17){
    var no;
    if(occ==1){no=no1;}
    if(occ==2){no=no2;}
    if(occ==0){return;}
    if(flt==1){ans=parseFloat(no);}
    else{ans=parseInt(no);}
    d=Math.sqrt(ans);
  }

  else if(x==18){
    var no;
    if(occ==1){no=no1;}
    if(occ==2){no=no2;}
    if(occ==0){return;}
    if(flt==1){ans=parseFloat(no);}
    else{ans=parseInt(no);}
    d=(ans*ans);
  }

  else if(x==19){
    var no;
    if(occ==1){no=no1;}
    if(occ==2){no=no2;}
    if(occ==0){return;}
    if(flt==1){ans=parseFloat(no);}
    else{ans=parseInt(no);}
    if(no==0){d="Error"}
    else{d=(1/ans);}
  }

  else if(x==10){
    console.log(no1); console.log(no2);
    if(flag==1){d=(no1+no2);}
    else if(flag==2){d=(no1-no2);}
    else if(flag==3){d=(no1 * no2);}
    else if(flag==4){if(no2==0){d="Error";}else{d=(no1/no2);}}
    flag=0;nope=1;occ=0;no1=null;no2=null;flt=0;
  }

  else{d="how did u do that"}
document.getElementById('disp').value=d;
}

function boper(){


}

function soper() {

}

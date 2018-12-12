
function cube(){
var n1,out;
n1=document.getElementById('number1').value;
n1=parseInt(n1);
out=Math.pow(n1,3);
document.getElementById('number1').value = out;
}
//2 завдання
function fun2(){
	var n2_1,n2_2,n2_3,out2;
	n2_1=document.getElementById('number2_1').value;
	n2_2=document.getElementById('number2_2').value;
	n2_3=document.getElementById('number2_3').value;
	n2_1=parseInt(n2_1);
	n2_2=parseInt(n2_2);
	n2_3=parseInt(n2_3);
	out2=(n2_1+n2_2)/n2_3;
	document.getElementById('output').innerHTML = out2;
}
//3 завдання
function pow(x, n) {
  if (n != 1) { 
    return x * pow(x, n - 1);
  } else {
    return x;
  }
}
function day(){
	var n3_1,out3;
	n3_1=document.getElementById('number3').value;
	n3_1=parseInt(n3_1);
switch (n3_1) {
  case 1:
    document.getElementById('number3').value = 'Понеділок';
    break;
  case 2:
     document.getElementById('number3').value = 'Вівторок';
    break;
  case 3:
     document.getElementById('number3').value = 'Середа';
    break;
	case 4:
     document.getElementById('number3').value = 'Четвер';
    break;
	case 5:
     document.getElementById('number3').value = "П'ятниця";
    break;
	case 6:
     document.getElementById('number3').value = 'Субота';
    break;
	case 7:
     document.getElementById('number3').value = 'Неділя';
    break;
  default:
    alert( 'Я таких значень не знаю' );
	}	
	if(n3_1%2==0){
	var result = 1;
var i = 1;
while (i <= n3_1) {
result = result * i;
i++;
}
	document.getElementById('output2').innerHTML = "Факторіал= "+result;}
	else{
		document.getElementById('output2').innerHTML = "Куб= "+pow(n3_1, 3);
		
	}
}

	

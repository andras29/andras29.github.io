
function citire(){
   var a =document.getElementById("id_a").value;
  var b =document.getElementById("id_b").value;
  var c=document.getElementById("id_c").value;
  
  var coeficienti={a:_a,b:_b,c:_c};
  return coeficienti;
}

function rezolvare()
{
    var delta= coeficienti.b*coeficienti.b-4*coeficienti.a*coeficienti.c;
  var x1_re,x1_im,x2_re,x2_im;
  if(delta >=0){
       x1_re=(-coeficienti.b+Math.sqrt(delta))/(2*coeficienti.a);
      x2_re=(-coeficienti.b-Math.sqrt(delta))/(2*a);
    x1_im=x2_im=0;
  }
  else{
    x1_re=-coeficienti.b/(2*coeficienti.a);
    x1_im=Math.sqrt(-delta)/(2*coeficienti.a);
    x2_re=-coeficienti.b/(2*coeficienti.a);
    x2_im=-Math.sqrt(-delta)/(2*coeficienti.a);
  }
   return
}

function afisare()
{
}

function rezolva(){
  var coeficienti=citire();
  var solutii=rezolvare(coeficienti);
  afisare(solutii);
}


function citire(){
   var a =document.getElementById("id_a").value;
  var b =document.getElementById("id_b").value;
  var c=document.getElementById("id_c").value;
  
  var coeficienti={a:_a,b:_b,c:_c};
  return coeficienti;
}

function rezolvare()
{
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

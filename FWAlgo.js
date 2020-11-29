var taInput, divOutput;
var btnRun;

window.onload = function() {
	console.log("Hooray! Its working");
	taInput = document.getElementById('txtInput');
	divOutput = document.getElementById('divOutput');
	btnRun = document.getElementById('btnRun');
} //end window.onload

function runFwAlgo(){
	console.log("Running Floyd Warshall")
	divOutput.innerHTML="<p>Transitive Closure of the Relation Is:</p>"
	// FwAlgo();
	// divOutput.innerHTML = output ;
	var matrice = [];
	if (taInput.value !="") {

		lines = taInput.value.split("\n");
		for (var i = 0 ; i <lines.length; ++i) {
        cell = lines[i].split(",");
        matrice[i] = new Array ([]);
        for (var j=0; j<lines.length; ++j) {
        	matrice[i][j] = parseInt(cell[j]);
        	
        }	

		}
    
output = FwAlgo(matrice);
   divOutput.innerHTML = output ;
// for(var i=1; i<=100; i++){
  //         document.getElementById('divOutput'.value = output.value);
    //      divOutput.innerHTML += (output) + "<br/>" 
}

	


// document.getElementById("divOutput").value = output.value ;
//end run
}
function FwAlgo(matrice){
	var m = [];
   m = matrice ;

          for (var i = 0; i<4;  i++) {


          	for (var j = 0; j<4;  j++)
          	{

                  	for (var k = 0; k<4;  k++)
                  	{


                  		m[j][k]=m[j][k] || (m[j][i] && m[i][k]);

}

          	}



          	
          }

          return m;
}//end sol1

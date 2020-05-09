function mensaje(msj)
{
	//alert('Puedes Deslizar hacia los costados y pasar a las demás Secciones.');
    navigator.notification.alert(
        msj,  // message
        'mensaje App',            // title
        'mensaje App'                  // buttonName
    );
    
}//fin function mensaje.
 	
function scanCode()
{	
	cordova.plugins.barcodeScanner.scan(
      function (result) {
      	
      	var msj='';
      	//var detCapturado='';
      	if(result.cancelled==true)
      		mensaje("Captura Cancelada.");
          //resultado="We got a barcode\n" +"Result: " + result.text + "\n" +"Format: " + result.format + "\n" +"Cancelled: " + result.cancelled;
          msj=result.text;
          mensaje(msj);
          
            var p1 = document.createElement("p");
			p1.innerHTML = msj;
		   	document.getElementById('pCodigo').appendChild(p1);
     }, 
      function (error) {
          mensaje("Captura Fallida: " + error);
      }
   );//fin scan plugin cordova
   
}//fin function
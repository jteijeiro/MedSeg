var greeting="Hello World";
var GDlgModal=null;
var GsNombreFichero=null;
var GbSemaforoRojo = false

function SmfROn(){
	while (GbSemaforoRojo){
		wait(100);
		}
	}
	

/*
 * Obtiene la dirección del documento que contiene los datos.
 * Se almacena en una variable localStorage. Si está vacia se preguntará al usuario por el documento.
 */
function GetDocumento(){
	var bRet = false;
	var NombreFichero=null;
	NombreFichero=localStorage.getItem("NombreFichero");
	if (NombreFichero==null){
		 AskDocumento();
		}
		
		
	return bRet;
	}
	
function AskDocumento(){
	if (GDlgModal==null)		
		GDlgModal = document.getElementById("DlgAskFileName");
		GbSemaforoRojo = true;
		GDlgModal.showModal();
		while (GbSemaforoRojo)
	}
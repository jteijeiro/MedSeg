/*
test("A Hello world test", 1, function(){
	equal(greeting, "Hello World", "Expect greeting of Hello World");
	});
*/
test("Conseguir un nombre de Fichero", 1, function(){
	var p = showModalDialog("../Dialogs/DlgAskFile.html", "FicheroPorDefecto", "dialogwidth:400, dialogheight:300, resizable:no");
	equal (p, "NombreDeArchivo", "Se espera un nombre de archivo");
	});
	
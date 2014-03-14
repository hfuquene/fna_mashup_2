mostrarUniversidadUnica = function(target){
	data = $(target).data();
	project_idUniU = data.filter;
	localStorage.setItem("project_idUniU", project_idUniU);
	window.location.href = "universidadunica.html";
}

mostrarCarrerasE = function(target){
	data = $(target).data();
	project_idEduC = data.filter;
	localStorage.setItem("project_idEduC", project_idEduC);
	window.location.href = "convenios.html";
}


mostrarCiudadesE = function(target){
	data = $(target).data();
	project_idEdu = data.filter;
	localStorage.setItem("project_idEdu", project_idEdu);
	window.location.href = "convenios.html";
}

mostrarCiudadesVivienda = function(target){
	data = $(target).data();
	project_idCV = data.filter;
	localStorage.setItem("project_idCV", project_idCV);
	window.location.href = "proyectos.html";
}


mostrarProyectoVivienda = function(project_idPV, project_idLAT, project_idLON){
	localStorage.setItem("project_idPV", project_idPV);
	localStorage.setItem("project_idLAT", project_idLAT);
	localStorage.setItem("project_idLON", project_idLON);
	window.location.href = "proyectoUNICO.html";
}

mostrarProyectoViviendaTipo = function(target){
	data = $(target).data();
	project_idTV = data.filter;
	localStorage.setItem("project_idTV", project_idTV);
	window.location.href = "proyectos.html";
}

mostrarProyectoViviendaRango = function(target){
	data = $(target).data();
	project_idRV = data.filter;
	localStorage.setItem("project_idRV", project_idRV);
	window.location.href = "proyectos.html";
}

mostrarProyectoViviendaCiudad = function(target, data){

	project_idCV = data;
	localStorage.setItem("project_idCV", project_idCV);
	window.location.href = "proyectos.html";
}

mostrarProyectoStreet = function(project_idPV2, project_idLAT2, project_idLON2){
	localStorage.setItem("project_idPV2", project_idPV2);
	localStorage.setItem("project_idLAT2", project_idLAT2);
	localStorage.setItem("project_idLON2", project_idLON2);
	window.location.href = "street.html";
}

	
		displayResult()
		
		
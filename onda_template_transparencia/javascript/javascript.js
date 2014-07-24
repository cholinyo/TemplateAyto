jQuery(document).ready(

	/*
	This function gets loaded when all the HTML, not including the portlets, is
	loaded.
	*/

	function() {
          //posicionamos un icono en la parte superior derecha, para imprimir
          var contenido = jQuery(".portlet-breadcrumb").html();
          var directorio = Liferay.ThemeDisplay.getPathThemeImages();
	  contenido = '<a href="javascript: window.print();"><img src="' + directorio + '/printer.gif" title="imprimir" alt="imprimir" style="float:right;"/></a>' + contenido;    
 	  jQuery(".portlet-breadcrumb").html(contenido); 
	}
);

Liferay.Portlet.ready(

	/*
	This function gets loaded after each and every portlet on the page.

	portletId: the current portlet's id
	jQueryObj: the jQuery wrapped object of the current portlet
	*/

	function(portletId, jQueryObj) {
	}
);

jQuery(document).last(

	/*
	This function gets loaded when everything, including the portlets, is on
	the page.
	*/

	function() {
	}
);

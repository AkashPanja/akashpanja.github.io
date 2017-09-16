(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

/* Material Table */

function initTable()
{
	$(".filled-in").change(function(){ $(this).parents("tr").toggleClass("is-selected"); });

	$(".material-table").find("td").first().addClass("waves-effect waves-circle");

	var status=1; 
	$("#main-checkbox").click(function(){	
		if ( status == 1 ) 
		{ $( ".filled-in" ).prop( 'checked', true ); $(".filled-in").parents("tr").addClass("is-selected"); status = 2; } 
		else
		{ $( ".filled-in" ).prop( 'checked', false ); $(".filled-in").parents("tr").removeClass("is-selected"); status = 1; }
	});
}

/* Material Table End */
		


  $(document).ready(function() {
   

	$("#school_search_field").keyup(function(event) {

		var stt = $("#school_search_field").val();
		var url = window.location.href;

		$.get( url+"/../searchForSchool?name="+stt , function( response ) 
		{
			
				var html_start="<div class='section white'><div class='container'>";				
				html_start="<div class='row buffer'>";								
				var html_middle="<ul>";
						
		    for(var key in response){
		    	
				html_middle +="	<a href='"+url+"/../profile/"+response[key].id+"' > <li class='tbl_replacement' 'style=background-color:#fff'>";
										    	
				html_middle +=" <div class='s4'>"+response[key].name+" </div>";
				
				html_middle +="</li></a>";
				//console.log(response[key].id);		            
		        }
				html_middle +="</ul>";
				var name = response;

		    	var html_end = "</div></div></div>";
		    	full_html = html_start+html_middle+html_end;

		        $( "#resultForSchoolSearch" ).html( full_html );
		 
		});
	});    
 
	
	//var stt = $("#school_search_field").val();
	//var url = window.location.href;
	/*
	 $( "#school_search_field" ).autocomplete({ 	
            source: function( request, response ) {
                $.ajax({
                    url: url+"/../searchForOrganization?name="+request.term,
                    dataType: "json",
                    success: function( data ) {
                        response(data['json']);
                    }
                });
            }
        });
     */ 
            
});
		          

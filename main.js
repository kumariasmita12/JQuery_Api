$(document).ready(function(){
      $.ajax({
        url: 'https://randomuser.me/api/',
       dataType: 'json',
       success: function(data) {
        $(".img-circle").attr('src',data.results[0].picture.large);
	    $("#name").text(data.results[0].name.first+" " +data.results[0].name.last);
		$("#gender").text(data.results[0].gender);
		$("#mail").text(data.results[0].email);
        $("#number").text(data.results[0].phone);
		}
   	});
    $("button").click(function(){
	      $.ajax({
          url: 'https://jsonplaceholder.typicode.com/users',
          dataType: 'json',
		  success: function(data) {
		  for ( var i = 0; i < data.length; i++ ) {
			if(i==0)
			{
				$('#tab tbody').append("<tr><th>NAME</th><th>EMAIL</th><th>PHONE</th></tr>");
			}
            $('#tab tbody').append("<tr><td>" + data[i].name+ "</td><td>" + data[i].email +" "+ "</td><td>" + data[i].phone + "</td>");
                }
            }
        });

    });
});
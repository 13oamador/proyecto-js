$(document).ready(function(){


	//Slider
	if(window.location.href.indexOf('index') > -1){
		$('.galeria').bxSlider({
		    mode: 'fade',
		    captions: true,
		    slideWidth: 1200,
		    responsive: true,
		});		

		//Posts
		var posts = [
			{
				title: 'Prueba de titulo 1',
				date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM")  + ' del ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod dictum nisl, ut finibus lorem tristique sed. Suspendisse et imperdiet risus. Vivamus dictum risus non nibh ornare volutpat. Ut consectetur dui vitae ligula tempor luctus. Phasellus tortor libero, pharetra eu aliquam id, posuere a lorem. Suspendisse potenti. Vivamus ac ornare quam. Aenean consectetur diam in malesuada cursus. Nunc consequat cursus ultrices. Donec congue, leo id sollicitudin hendrerit, quam nisi ultrices risus, sit amet dignissim purus nulla ut ligula. Quisque consectetur facilisis neque efficitur bibendum. Sed sed auctor tellus. Nam interdum dui urna, a molestie quam imperdiet vitae. Vivamus consectetur, libero placerat imperdiet iaculis, magna velit tincidunt nisl, sit amet faucibus tortor tortor ac leo. Praesent sagittis orci non malesuada hendrerit.'
			},
			{
				title: 'Prueba de titulo 2',
				date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM")  + ' del ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod dictum nisl, ut finibus lorem tristique sed. Suspendisse et imperdiet risus. Vivamus dictum risus non nibh ornare volutpat. Ut consectetur dui vitae ligula tempor luctus. Phasellus tortor libero, pharetra eu aliquam id, posuere a lorem. Suspendisse potenti. Vivamus ac ornare quam. Aenean consectetur diam in malesuada cursus. Nunc consequat cursus ultrices. Donec congue, leo id sollicitudin hendrerit, quam nisi ultrices risus, sit amet dignissim purus nulla ut ligula. Quisque consectetur facilisis neque efficitur bibendum. Sed sed auctor tellus. Nam interdum dui urna, a molestie quam imperdiet vitae. Vivamus consectetur, libero placerat imperdiet iaculis, magna velit tincidunt nisl, sit amet faucibus tortor tortor ac leo. Praesent sagittis orci non malesuada hendrerit.'
			},
			{
				title: 'Prueba de titulo 3',
				date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM")  + ' del ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod dictum nisl, ut finibus lorem tristique sed. Suspendisse et imperdiet risus. Vivamus dictum risus non nibh ornare volutpat. Ut consectetur dui vitae ligula tempor luctus. Phasellus tortor libero, pharetra eu aliquam id, posuere a lorem. Suspendisse potenti. Vivamus ac ornare quam. Aenean consectetur diam in malesuada cursus. Nunc consequat cursus ultrices. Donec congue, leo id sollicitudin hendrerit, quam nisi ultrices risus, sit amet dignissim purus nulla ut ligula. Quisque consectetur facilisis neque efficitur bibendum. Sed sed auctor tellus. Nam interdum dui urna, a molestie quam imperdiet vitae. Vivamus consectetur, libero placerat imperdiet iaculis, magna velit tincidunt nisl, sit amet faucibus tortor tortor ac leo. Praesent sagittis orci non malesuada hendrerit.'
			},
			{
				title: 'Prueba de titulo 4',
				date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM")  + ' del ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod dictum nisl, ut finibus lorem tristique sed. Suspendisse et imperdiet risus. Vivamus dictum risus non nibh ornare volutpat. Ut consectetur dui vitae ligula tempor luctus. Phasellus tortor libero, pharetra eu aliquam id, posuere a lorem. Suspendisse potenti. Vivamus ac ornare quam. Aenean consectetur diam in malesuada cursus. Nunc consequat cursus ultrices. Donec congue, leo id sollicitudin hendrerit, quam nisi ultrices risus, sit amet dignissim purus nulla ut ligula. Quisque consectetur facilisis neque efficitur bibendum. Sed sed auctor tellus. Nam interdum dui urna, a molestie quam imperdiet vitae. Vivamus consectetur, libero placerat imperdiet iaculis, magna velit tincidunt nisl, sit amet faucibus tortor tortor ac leo. Praesent sagittis orci non malesuada hendrerit.'
			},
			{
				title: 'Prueba de titulo 5',
				date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM")  + ' del ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod dictum nisl, ut finibus lorem tristique sed. Suspendisse et imperdiet risus. Vivamus dictum risus non nibh ornare volutpat. Ut consectetur dui vitae ligula tempor luctus. Phasellus tortor libero, pharetra eu aliquam id, posuere a lorem. Suspendisse potenti. Vivamus ac ornare quam. Aenean consectetur diam in malesuada cursus. Nunc consequat cursus ultrices. Donec congue, leo id sollicitudin hendrerit, quam nisi ultrices risus, sit amet dignissim purus nulla ut ligula. Quisque consectetur facilisis neque efficitur bibendum. Sed sed auctor tellus. Nam interdum dui urna, a molestie quam imperdiet vitae. Vivamus consectetur, libero placerat imperdiet iaculis, magna velit tincidunt nisl, sit amet faucibus tortor tortor ac leo. Praesent sagittis orci non malesuada hendrerit.'
			},
		];

		posts.forEach((item, index) =>{
			var post = `
				<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					<a href="#" class="button-more">Leer mas</a>
				</article>
			`;
			console.log(post);	
			$("#posts").append(post);
		});
	}

	//Seletor de tema
	var theme = $("#theme");
	$("#to-green").click(function(){
		theme.attr("href", "css/green.css");
	});

	$("#to-red").click(function(){
		theme.attr("href", "css/red.css");
	});

	$("#to-blue").click(function(){
		theme.attr("href", "css/blue.css");
	});

	//Scrool arriba automatico
	$(".subir").click(function(e){

		e.preventDefault();
		
		$("html, body").animate({
			scrollTop: 0			
		}, 500)

		return false;
	});

	//Login false
	$("#login form").submit(function(){
		var form_name = $("#form_name").val();

		localStorage.setItem("form_name", form_name);
	});


	var form_name = localStorage.getItem("form_name");
	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");
		about_parrafo.html('<br><strong>Bienvenid@ ' + form_name + '</strong>');
		about_parrafo.append("<a href='#' id='logout'> Cerrar sesion</a>");

		$("#login").hide();
		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});
	}	

	
	//Accordion
	if(window.location.href.indexOf('about') > -1){
		$("#accordion").accordion();
	}

	//Reloj
	if(window.location.href.indexOf('reloj') > -1){

		setInterval(function(){
			var reloj = moment().format("hh:mm:ss");
			$("#reloj").html(reloj);
		}, 1000);		
	}

	//Validacion
	if(window.location.href.indexOf('contact') > -1){

		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});
		$.validate({
		    lang: 'es',
		    errorMessagePosition: 'top',
		    scrolltoTopOnError: true
		  });
	}


});


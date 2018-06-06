		$(function(){

			//Agrega un nuevo tweet
			 $('form').on('submit', function(event){
				event.preventDefault();
				var tweet = $('.text_twitter').val();
				$('.board').prepend(
					'<div class="nuevo_tweet">'
						+'<button type="button" class="close"  title="Eliminar Tweet"><span>&times;</span></button>'
							+'<p>Catalina Pérez | <span class="username">@whereismydomo</span></p>'
							 		+tweet
								 		+'<ul>'
								 			+'<li><a href="#"><i class="fas fa-heart contador likeable"> <span class="numero">0</span> </i></a></li>'
								 			+'<li><a href="#"><i class="fas fa-comment"></i></a></li>'
								 			+'<li><a href="#"><i class="fas fa-retweet"></i></a></li>'
								 		+'</ul>'
					+ '</div>'
					
				);//cierra prepend
				$('.text_twitter').val('');
				$('.text_twitter').focus();
			}) 
			 
		// Eliminar tweet al hacer click sobre clase .close
		$('.board').on('click', '.close', function(event){
			event.stopPropagation();
	 		$(this).parent().fadeOut(300);
		});

		// Se ac
			$('.board').on('click', '.likeable', function(){
			$(this).addClass('liked');
		});


		//Contador de likes con clase .contador
		$('.board').on('click', '.contador', function(){
			var contador_likes = parseInt($(this).text())+1;
	        $(this).html('<span>'+' '+contador_likes+'</span>');    
		});	


		})//Cierra function



$(function(){ //выполнение кода после полной загрузки страницы

	$('.element').parent().css('border', '1px solid #f5f5f5');
	$('.element').child().css('border', '1px solid #f5f5f5');

	$('.element:first').css('border', '1px solid #f5f5f5');
	$('.element:even').css('border', '1px solid #f5f5f5'); //нечётные
	$('.element:odd').css('border', '1px solid #f5f5f5'); //чётные
	$('.element:eq(0)').css('border', '1px solid #f5f5f5'); //первый элемент

	$('.element:has(span)').css('border', '1px solid #f5f5f5'); //имеет элемент 'span'

	$('a[href="google.com"]').css('border', '1px solid #f5f5f5'); //с сылкой на гугл
	$('a[href!="google.com"]').css('border', '1px solid #f5f5f5'); //все ссылки кроме ссылки на гугл
	$('a[href^="http"]').css('border', '1px solid #f5f5f5'); //все ссылки которые начинаются с 'http'
	$('a[href$=".ru"]').css('border', '1px solid #f5f5f5'); //все ссылки которые заканчиваются '.ru'
	$('a[href*="r"]').css('border', '1px solid #f5f5f5'); //все ссылки которые содержат 'r'

	$('.element').hide(5000); //скрыть элемент за 5 секунд
	$('.element').delay(1000).hide(5000); //скрыть элемент за 5 секунд с задержкой в 1 секунду

	$('.element').animate( { 'width': '200px' }, 1000 ); // за 1 секунду ширина элемента стала '200px'

	$('img').click(function(){
		$(this).fadeOut(500, function(){ //скрываем картинку за 500 мс
			$(this).attr('src', 'img2.jpg').fadeIn(500); // меняем атирибут картинки на 'img2.jpg' и показываем картинку за 500 мс
		});
	});

	$('.element').text('Свой собстенный текст');
	$('.element').html('Свой собстенный <b>текст</b>'); 
	$('.element').append('Свой собстенный текст'); // добавить текст после элемента
	$('.element').prepend('Свой собстенный текст'); // добавить текст до элемента
	$('.element').after('<p>Новый абзац с текстом</p>'); // добавить текст до элемента
	$('.element').wrap('<div class="container"></div>'); // обернуть элемент в '.container'
	$('.element').unwrap('<div class="wrap"></div>'); // убрать обёртку

	$('.element').empty(); // тег остаётся а содержимое удаляется
	$('.element').remove(); // удалить тег полностью
	
});
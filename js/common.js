$(document).ready(function() {

$(".form-main").validate({
  // правила для полей с именем и паролем
  rules:{ 

  	mail:{
                required: true, // поле для имени обязательное для заполнения
                minlength: 0, // в поле для имени должно быть не меньше 4 символов
                maxlength: 16, // в поле для имени должно быть не больше 16 символов
                email: " "
            },

            password:{
                required: true, // поле для пароля обязательное для заполнения
                minlength: 0, // в поле для пароля должно быть не меньше 6 символов
                maxlength: 16, // в поле для пароля должно быть не больше 16 символов
            },
        },
  // сообщение для поля с именем и пароля, если что-то было не по правилам
  messages:{

  	mail:{
                required: "Wrong email format", // сообщение для имени, если поле не заполнено
                minlength: " ", // сообщение для имени, если в поле меньше 4 символов
                maxlength: "", // сообщение для имени, если в поле больше 16 символов
                email: "Wrong email format"
            },

            password:{
                required: "Wrong password format", // сообщение для пароля, если поле не заполнено
                minlength: "min length 6", // сообщение для пароля, если в поле меньше 6 символов
                maxlength: "", // сообщение для пароля, если в поле больше 16 символов
            },
        }
    });

 setInterval(function(){
   if($(".form-main .input-mail").hasClass("valid") && ($(".form-main .input-password").hasClass("valid"))) {
 		$('.btn-blue').removeClass("btn-disabled")
 	}
 	else {
 		$('.btn-blue').addClass("btn-disabled")
 	}
}, 12); // 1000 м.сек

$('.show-password').click(function(){
	var type = $('.input-password').attr('type') == "text" ? "password" : 'text';
	$(this).toggleClass("show-active");
	$('.input-password').prop('type', type);
});
 $('.input-password').on('keyup blur', function (e) {
 	if($(this).val() != '') {
 		$('.show-password').addClass("active-showpass")
 	}
 	else {
 		$('.show-password').removeClass("active-showpass")
 	}
 });
 $('.form-main input').on('keyup blur', function (e) {
 	if($(this).val() != '') {
 		$(this).parent().addClass("value-input");
 		$(this).parent().addClass("hide-placeholder");
 	}
 	else {
 		$(this).parent().removeClass("value-input");
 		$(this).parent().removeClass("hide-placeholder");

 	}
 });

 $( ".form-main input").focus(function() {
$(this).parent().addClass("hide-placeholder");
});

});
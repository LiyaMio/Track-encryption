$(document).ready(function () {

    $('#btn').on('click', function () {
   
     var formParam = $('#loginform').serialize();
   
      $('input').val('');
   
      $.ajax({
   
   ​     url: '/login',
   
   ​     type: 'post',
   
   ​     data: formParam,
   
   ​     dataType: 'json',
   
   ​     success: function (data) {
   
   ​     if (data.pass == true) {
   
     
   
   ​     // Login successfully and jump to the homepage.
   
     
   
   ​     $('#btn').removeClass('btn-danger').addClass('btn-success');
   
   ​    window.localStorage.setItem('token', data.token);
   
   ​    window.location.href = '/home';
   
   ​    } else {
   
     
   
   ​     // Change the color of the login button when the login fails.
   
   ​    $('#btn').removeClass('btn-success').addClass('btn-danger');
   
   ​    }
   
     },
   
     error: function (data) {
   
   ​    $('#btn').removeClass('btn-success').addClass('btn-danger');
   
     },
   
     
   
      });
   
     });                                        
   
    });

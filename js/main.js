$(function () {

  // Content height
  var header = $('header').outerHeight();
  var footer = $('footer').outerHeight();
  var contentValHeight = header + footer;
  $('.main-content').css('min-height', "calc(100vh - ".concat(contentValHeight, "px)"));
  $('.max-content').css('max-height', "calc(100vh - ".concat(contentValHeight, "px)"));
  $('.main-auth').css('min-height', "calc(100vh - ".concat(footer, "px)"));

  // toggle [ active ] class between days buttons 
  $('.h-circle-btn li button').click(function () {
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
  })

  /* percent value for account index for Home page */
  $(".fill-item").each(function () {
    var percent = $(this).attr('percent-value');
    $(this).css('height', percent)
  })


  /* Toggle pop forms */
  $(document).on('click', '.swap-cap .custom', function () {
    $('.manually').removeClass('d-none')
  })
  $(document).on('click', '.swap-cap .express', function () {
    $('.manually').addClass('d-none')
  })

 

  $(document).on('click', '.table-info td', function () {
    var btnWord = $.trim($(this).parent().find('.tct-btn').text());
    if (btnWord == 'Resolved') {
      $('.solved-status').addClass('re-sol');
      $('.solved-status').removeClass('re-wat re-uns');
      $('.solved-status').text(btnWord)
    } else if (btnWord == 'Unresolved') {
      $('.solved-status').addClass('re-uns');
      $('.solved-status').removeClass('re-wat re-sol');
      $('.solved-status').text(btnWord);
    } else if (btnWord == 'Working on it') {
      $('.solved-status').addClass('re-wat');
      $('.solved-status').removeClass('re-sol re-uns');
      $('.solved-status').text(btnWord)
    }
  })
  $(document).on('click', '.mob-pop-resolve > div ', function () {
    var btnWord = $.trim($(this).closest('.mb-2').find('.tct-btn').text());
    if (btnWord == 'Resolved') {
      $('.solved-status').addClass('re-sol');
      $('.solved-status').removeClass('re-wat re-uns');
      $('.solved-status').text(btnWord)
    } else if (btnWord == 'Unresolved') {
      $('.solved-status').addClass('re-uns');
      $('.solved-status').removeClass('re-wat re-sol');
      $('.solved-status').text(btnWord)
    } else if (btnWord == 'Working on it') {
      $('.solved-status').addClass('re-wat');
      $('.solved-status').removeClass('re-sol re-uns');
      $('.solved-status').text(btnWord)
    }
  })
  // chat form 
 



  // Create Dashboard card card
  const Field = {
    userImg: 'user.png',
    expiryUserDate: 'April 12, 2020',
  }
 
  /*navbar */

  function navbarData(Field) {
    var splitLink = $('.user-pic')
    imgLink = splitLink.attr('src').split('/');
    imgLink.pop();
    imgLink.push(Field.userImg);
    brandImg = imgLink.join('/');
    $('.user-pic').attr('src', brandImg);
    $('.user-date').text(Field.expiryUserDate)
  }
  navbarData(Field)



});
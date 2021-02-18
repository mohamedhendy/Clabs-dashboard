$(function () {



  const Field = {
    subject: 'No Response from Server',
    status: 'Resolved',
    time: '3 minutes ago',
    adminImg: 'admin.png',
    userImg: 'man.png',
    adminName: 'admin 5',
    userName: 'alex',
    email: 'alex@email.email',
    adminContent: 'Please take a look at this documentation, on how to integrate the API in to any software.',
    userContent: 'What is that ?',
  }


  // chat form 
  $(document).on('click', '.Replay-user', function (e) {
    var name = `<h6 class="text-info d-flex justify-content-between">${Field.adminName} <span class="text-white close-replay">X</span></h6>`,
      textContent = `<p class="mb-1 text-white">${Field.adminContent}</p>`;
    var replay = '<div class="replay">' + name + textContent + '</div>';
    if ($('.replay-action').hasClass('empty')) {
      $('.replay-action').removeClass('empty')
      $('.replay-action').append(replay);
    }
  })
  $(document).on('click', '.close-replay', function (e) {
    $(this).closest('.replay').remove();
    $('.replay-action').addClass('empty')

  });

  $('.chat-subject').text(Field.subject)

  function adminMsgChat(Field) {
    var mobTicket = `<div class="user-comment" >
    <div class="d-flex my-3">
      <div class="mr-3">
        <img
          class="main-chat-img user-chat-img"
          src="./images/${Field.adminImg}"
          alt=""
        />
      </div>
      <div class="w-100">
        <div class="response-text link-color mb-2">
          ${Field.adminName}
          <span class="link-desc ml-2 font-weight-normal"
            ></span
          >
          <!-- name and email of user -->
        </div>
        <div class="chat-value">
          ${Field.userContent}
        </div>
        <!-- Chat Content-->
      </div>
    </div>
    <div class="date-chat link-desc ml-5">
      <div class="ml-3">
        <span>${Field.time}</span>
        <a href="javascript:void(0)" class="link-color ml-3 Replay-user">Replay</a>

      </div>
    </div>
  </div> <!-- user comment-->`;

    $('.chat-conversation').append(mobTicket);
  }
  function userReplayChat(Field) {
    var mobTicket = `
    <div class="d-flex my-3">
      <div class="mr-3">
        <img
          class="main-chat-img user-chat-img"
          src="./images/${Field.userImg}"
          alt=""
        />
      </div>
      <div class="w-100">
        <div class="response-text link-color mb-2">
          ${Field.userName}
          <span class="link-desc ml-2 font-weight-normal"
            >${Field.email}</span
          >
          <!-- name and email of user -->
        </div>
        <div class="user-comment" >
        <div class="replay ml-0">
                            <h6 class=" d-flex justify-content-between text-info">
                              Admin 1
                            </h6>
                            <p class="text-white mb-1">
                              <small>${Field.userContent}</small>
                            </p>
                          </div>
        <div class="chat-value">
          ${Field.adminContent}
        </div>
        <div class="date-chat link-desc ml-0 ">
      <div class=" mt-3 mb-1">
        <span>${Field.time}</span>
      </div>
    </div>
        <!-- Chat Content-->
      </div>
      
    </div>
    
  </div> <!-- user comment-->`;

    $('.chat-conversation').append(mobTicket);
  }
  function userMsgChat(Field) {
    var mobTicket = `<div class="user-comment" >
    <div class="d-flex my-3">
      <div class="mr-3">
        <img
          class="main-chat-img user-chat-img"
          src="./images/${Field.userImg}"
          alt=""
        />
      </div>
      <div class="w-100">
        <div class="response-text link-color mb-2">
          ${Field.userName}
          <span class="link-desc ml-2 font-weight-normal"
            >${Field.email}</span
          >
          <!-- name and email of user -->
        </div>
        <div class="chat-value">
          ${Field.adminContent}
        </div>
        <!-- Chat Content-->
      </div>
    </div>
    <div class="date-chat link-desc ml-5">
      <div class="ml-3">
        <span>${Field.time}</span>
      </div>
    </div>
  </div> <!-- user comment-->`;

    $('.chat-conversation').append(mobTicket);
  }
  adminMsgChat(Field)
  userMsgChat(Field)
  userReplayChat(Field)



  var btnWord = $('.tct-btn');

  btnWord.each(function () {
    var that = $(this)
    if ($(this).text() == 'Resolved') {
      $(this).addClass('re-sol');
      $(this).removeClass('re-wat re-uns');
      // console.log(btnWord.text())

    } else if ($(this).text() == 'Unresolved') {
      $(this).addClass('re-uns');
      $(this).removeClass('re-wat re-sol');
      // console.log(btnWord.text())

    } else if ($(this).text() == 'Working on it') {
      $(this).addClass('re-wat');
      $(this).removeClass('re-sol re-uns');
      console.log($(this).text())

    }
  });
})
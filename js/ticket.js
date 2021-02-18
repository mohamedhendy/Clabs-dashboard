$(function () {
 
  const Field = {
    key: 'ABCDEFGHIJKLMNOPQRST',
    subject: 'No Response from Server - I am having issue intefrating API in to the…',
    status: 'Unresolved',
    time: '9:30 PM'
  }
  var styledKey;
  // add dash ( - ) between each 4 characters
  function styleKey(data) {
    const key = data.key;
    styledKey = key.match(new RegExp('.{1,4}', 'g')).join(" - ");
  }
  function createTicketTable(Field) {
    styleKey(Field); // style Key
    var tr = document.createElement('tr');
    var TblFld = `<tr>
        <th
          scope="row"
          data-toggle="modal"
          data-target="#messageUserRespond"
          class="curs"
        >
          <a href="javascript:void(0)" class="d-block text-white"
            >${styledKey}</a
          >
        </th>
        <!-- Card number-->

        <!-- email-->
        <td class="totla-subject">
          <a
            data-toggle="modal"
            data-target="#messageUserRespond"
            href=""
            class="text-white p-1"
          >
            No Response from Server -
            <span class="link-desc"
              >${Field.subject}</span
            >
          </a>
        </td>
        <td
          scope="row"
          data-toggle="modal"
          data-target="#messageUserRespond"
          class="curs text-center "
          style="text-align: center";
        >
          <button class="tct-btn re-sol mx-auto" ">${Field.status}</button>
        </td>
        <td>${Field.time}</td>
      </tr>`;
    var mobTicket = `<div class="table-info my-2 w-100">
        <div class="mb-2">
          <div
            class="mob-pop-resolve d-flex align-items-center justify-content-between"
          >
            <div
              class="link-desc my-1"
              data-toggle="modal"
              data-target="#messageUserRespond"
              class="curs"
            >
              <a
                href="javascript:void(0)"
                class="d-block text-white"
                >${styledKey}</a
              >
            </div>
            <div class="text-white">
              <a
                
              >
               ${Field.time}
              </a>
            </div>
          </div>
          <div
            class="mob-pop-resolve d-flex align-items-center justify-content-between"
          >
            <a
            href=""
              class="curs link-color sub-c my-1"
              data-toggle="modal"
              data-target="#messageUserRespond"
              
            >
              ${Field.subject}
            </a>
            <div class="text-white">
              <a
                href=""
                class="text-white d-inline-block p-1"
                data-toggle="modal"
                data-target="#messageUserRespond"
              >
                <button class="tct-btn re-sol">${Field.status}</button>
              </a>
            </div>
          </div>
          <!-- Email-->
          <!-- Name -->
        </div>
      </div>`;

    tr.innerHTML = TblFld;
    $('.api-ticket-table tbody').append(tr);
    $('.mobile-ticket-el').append(mobTicket);
  }
  createTicketTable(Field)
  createTicketTable(Field)
  createTicketTable(Field)
  createTicketTable(Field)




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

  }});


   // Resolved State Word

   $('.tct-btn').each(function () {
    if ($.trim($(this).text()) == 'Working on it' || $.trim($(this).text()) == 'Unresolved') {
      $(this).parentsUntil('tr').find('td').attr({
        'data-target': ' ',
        'data-toggle': ' '
      });
      $(this).closest('td').siblings().find('a').attr({
        'href': './chat.html',
        'data-target': ' ',
        'data-toggle': ' '
      })
    }
  });
  $('.mob-pop-resolve .tct-btn').each(function () {
    if ($.trim($(this).text()) == 'Working on it' || $.trim($(this).text()) == 'Unresolved') {
      $(this).parentsUntil('.mob-pop-resolve').parent().parent().find('a').attr(
        {
          'href': './chat.html',
          'data-target': ' ',
          'data-toggle': ' '
        });
    }
  })
})
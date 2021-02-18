$(function() {
  const Field = {
    key: 'ABCDEFGHIJKLMNOPQRST',
    site: 'Footerlocker',
    logoBrandImg: 'foot_looker.png',
    available: true, // control available and  unavailable card
    price: 20,
    remainingTime: 30,
  }
  var styledKey;
  // add dash ( - ) between each 4 characters
  function styleKey(data) {
    const key = data.key;
    styledKey = key.match(new RegExp('.{1,4}', 'g')).join("-");
  }
  // Create renewal card card
  function RenewalField(Field) {


    // get image
    var splitLink = $('.dash-renew .clabs-brand-img')
    imgLink = splitLink.attr('src').split('/');
    imgLink.pop();
    imgLink.push(Field.logoBrandImg);
    brandImg = imgLink.join('/');
    $('.pay-extra .clabs-brand-img').attr('src', brandImg);
    $('.pay-extra-none .clabs-brand-img').attr('src', brandImg);
    $('.pay-extra-none .clabs-brand-name').text(Field.site);
    $('.pay-extra .clabs-brand-name').text(Field.site);

    if (Field.available == true) {
      $('.pay-extra .price-remaining').text(Field.remainingTime);
      var cardNumber = Field.key.slice(-4);
      var cardKey = 'XXXX - XXXX - XXXX - ' + cardNumber;
      $('.pay-extra .card-key').text(cardKey);
      $('.date-remain-val').text(Field.remainingTime);
      var card = $(".pay-extra .dash-renew");
      card.clone().appendTo(".dash-renewal-cards");
    } else {
      // alert('proplem')
      var card = $(".pay-extra-none .dash-renew");
      card.clone().appendTo(".dash-renewal-cards");
    }
  }
    RenewalField(Field)
    RenewalField(Field)
    RenewalField(Field)
    RenewalField(Field)
    RenewalField(Field)
})
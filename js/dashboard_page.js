$(function () {
    const Field = {
        key: 'ABCDEFGHIJKLMNOPQRST',
        site: 'Footerlocker',
        URL: 'https://clabs.ninja/footlocker',
        Requests: '900',
        logoBrandImg: 'foot_looker.png',
        MaxRequests: 6000,
        usage: {
            day1: 5410,
            day2: 5420,
            day3: 5430,
            day4: 5440,
            day5: 5450,
            day6: 5460,
            day7: 5470,
        },
        // it will be for 7 charts 
        percent: [10, 20, 30, 40, 50, 60, 70],
        // it will be for 7 days 
        month: [1, 2, 3, 4, 5, 6, 7],
        available: true, // control available and  unavailable card
        price: 20,
    }
    var styledKey;
    // add dash ( - ) between each 4 characters
    function styleKey(data) {
        const key = data.key;
        styledKey = key.match(new RegExp('.{1,4}', 'g')).join("-");
    }
    function Fields(Field) {
        styleKey(Field); // style Key
        if (Field.available == true) {
          $('.dsh-pge .clabs-brand-name').text(Field.site);
          $('.dsh-pge .clabs-link').text(Field.URL);
          $('.dsh-pge .clabs-key').text(styledKey);
    
          // change value of days
          for (const value in Field.usage) {
            $(`.${value}`).text(`${Field.usage[value]}`);
          }
          // Change percent value
          for (var i = 0; i <= Field.percent.length; i++) {
            $('.dsh-pge .percent-' + i).attr('percent-value', Field.percent[i]);
            $('.dsh-pge .percent-' + i).css('height', Field.percent[i - 1] + 'px')
          }
          // Change months value
          for (var i = 1; i <= Field.month.length; i++) {
            $('.dsh-pge .month-date-' + i).text("Mar " + Field.month[i - 1]);
          }
          // get img 
          var imgLink = $('.dash-card-index .clabs-brand-img').attr('src').split('/')
          imgLink.pop();
          imgLink.push(Field.logoBrandImg);
          brandImg = imgLink.join('/');
          $(' .clabs-brand-img').attr('src', brandImg);
    
    
    
          // append card
          var card = $(".dsh-pge .dash-card-index");
          card.clone().appendTo('.dash-cards');
        } else {
          $('.dash-card-index  .clabs-brand-name').text(Field.site);
          // get img 
          var imgLink = $('.dsh-pge .clabs-brand-img').attr('src').split('/')
          imgLink.pop();
          imgLink.push(Field.logoBrandImg);
          brandImg = imgLink.join('/');
          $(' .clabs-brand-img').attr('src', brandImg);
          var card = $(".pge-na .dash-card-index");
          card.clone().appendTo(".dash-cards")
        }
      }


      Fields(Field);
      Fields(Field);
      Fields(Field);
      Fields(Field);
})
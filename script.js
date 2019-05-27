$(document).ready(function() {
    var interval = setInterval(function() {
        var momentNow = moment();
        $('#date-part').html(momentNow.format('DD MMMM, YYYY') + ' '
                            + momentNow.format('dddd')
                             .substring(0,2).toUpperCase());
        $('#time-part').html(momentNow.format('hh:mm A'));
    }, 100);
    
    $('#stop-interval').on('click', function() {
        clearInterval(interval);
    });

$("#text_hide").on('click', function(){
    $("#text_hide").hide();
});
});
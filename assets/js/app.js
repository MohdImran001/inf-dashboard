$(document).ready(function() {
    // this code hides and show the status table when load status btn is clicked
    let f = -1;
    $('#load-status-btn').click(function() {
        if(f == -1)
            $('#load-status-btn').text("HIDE STATUS");
        else
            $('#load-status-btn').text("LOAD STATUS");

        f *= -1;
        $('#status-table').toggle(1000);
    });

    // this code hides the confirmation-box and shows the confirmed box when the user click yes button
    $('#yes').click(function() {
        $('#confirmation-box').hide();
        $('#confirmed-box').show();
    });


    // this code hides the confirmation-box and shows the rejected-message-box when the user click no button

    $('#no').click(function() {
        $('#confirmation-box').hide();
        $('#rejected-message-box').show();
    });

    // this code hides  the rejected-message-box and show rejection box when the user click submit button

    $('#submit-message').click(function() {
        $('#rejected-message-box').hide();
        $('#rejection-box').show();
    });


    //this code hides and shows the horizontal progress bar of parcel when user click view details button on vehicle info Card\
    let flag = -1;
    $('#view-details').click(function() {
        if(flag == -1)
            $('#vehicle-horizontal-progress').css("display", "flex");
        else
            $('#vehicle-horizontal-progress').css("display", "none");
        flag *= -1;
    })
});

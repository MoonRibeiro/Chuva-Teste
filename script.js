$(window).on('load', function() {
    $('#expanded-text').hide();
    $('#feedback').hide();
    $('#sent').hide();
    $('.answer').hide();

    $('#collapsed-text').click(function() {
        $('#collapsed-text').hide();
        $('#expanded-text').show();
    });
    
    $('#expanded-text').click(function() {
        $('#collapsed-text').show();
        $('#expanded-text').hide();
    });

    $('#topic-btn').click(function() {
        $('.discussion-body').hide();
        $('#feedback').show();
    })

    $('.send-btn').click(function(){
        $('#feedback').hide();
        $('#sent').show();
    })

    $('.topic').click(function(e){
        var answers = $(e.currentTarget).find('.answer');
        answers.toggle();
    })
});
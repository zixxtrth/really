var really = (function () {
    var alertBoxTemplate = jQuery('<div class="alert" id="alert" ><div class="context"></div><a href="javascript:really.close()" class="closeAlert">&#10005;</a></div>');
    // remove the alert
    function closeAlert() {
        $('#alert').remove();
    }
    //default
    function defaultAlert(context, duration) {
        closeAlert();
        var time;
        duration ? time = duration : time = 3000;
        alertBoxTemplate.attr('class', '');
        alertBoxTemplate.addClass('alert');
        alertBoxTemplate.addClass('alert-default');
        alertBoxTemplate.find('.context').html(context);
        jQuery('html').append(alertBoxTemplate);
        setTimeout(function () {
            $('#alert').remove();
        }, time);
    }
    //wrong
    function warnAlert(context, duration) {
        closeAlert();
        var time;
        duration ? time = duration : time = 3000;
        alertBoxTemplate.attr('class', '');
        alertBoxTemplate.addClass('alert');
        alertBoxTemplate.addClass('alert-warn');
        alertBoxTemplate.find('.context').html(context);
        jQuery('html').append(alertBoxTemplate);
        setTimeout(function () {
            $('#alert').remove();
        }, time);
    }
    //success
    function successAlert(context, duration) {
        closeAlert();
        var time;
        duration ? time = duration : time = 3000;
        alertBoxTemplate.attr('class', '');
        alertBoxTemplate.addClass('alert');
        alertBoxTemplate.addClass('alert-success');
        alertBoxTemplate.find('.context').html(context);
        jQuery('html').append(alertBoxTemplate);
        setTimeout(function () {
            $('#alert').remove();
        }, time);
    }
    //attention
    function attentionAlert(context, duration) {
        closeAlert();
        var time;
        duration ? time = duration : time = 3000;
        alertBoxTemplate.attr('class', '');
        alertBoxTemplate.addClass('alert');
        alertBoxTemplate.addClass('alert-attention');
        alertBoxTemplate.find('.context').html(context);
        jQuery('html').append(alertBoxTemplate);
        setTimeout(function () {
            $('#alert').remove();
        }, time);
    }
    return {
        'close': function () {
            return closeAlert();
        }
        , 'default': function (context, duration) {
            return defaultAlert(context, duration);
        }
        , 'warn': function (context, duration) {
            return warnAlert(context, duration);
        }
        , 'success': function (context, duration) {
            return successAlert(context, duration);
        }
        , 'attention': function (context, duration) {
            return attentionAlert(context, duration);
        }
    }
})();
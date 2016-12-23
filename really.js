/**
*
* Really 1.0
* javascript Library for create flat UI Notifications
* authored by Abdallah M.M.N. Abukhader
* copyrights for nts 2016
**/
var really = (function () {
    function alertTemplateGenerator(type, context) {
        var alertBoxTemplate = jQuery('<div class="alert" id="alert" ><div class="context"></div><a href="javascript:really.close()" class="closeAlert">&#10005;</a></div>');
        alertBoxTemplate.attr('class', '');
        alertBoxTemplate.addClass('alert');
        alertBoxTemplate.addClass(type);
        alertBoxTemplate.find('.context').html(context);
        return alertBoxTemplate;
    }
    // remove the alert
    function closeAlert() {
        $('#alert').remove();
    }
    //default
    function defaultAlert(context, duration) {
        closeAlert();
        var time;
        duration ? time = duration : time = 3000;
        jQuery('html').append(alertTemplateGenerator('alert-default',context));
        setTimeout(function () {
            $('#alert').remove();
        }, time);
    }
    //wrong
    function warnAlert(context, duration) {
        closeAlert();
        var time;
        duration ? time = duration : time = 3000;
        jQuery('html').append(alertTemplateGenerator('alert-warn',context));
        setTimeout(function () {
            $('#alert').remove();
        }, time);
    }
    //success
    function successAlert(context, duration) {
        closeAlert();
        var time;
        duration ? time = duration : time = 3000;
        jQuery('html').append(alertTemplateGenerator('alert-success',context));
        setTimeout(function () {
            $('#alert').remove();
        }, time);
    }
    //attention
    function attentionAlert(context, duration) {
        closeAlert();
        var time;
        duration ? time = duration : time = 3000;
        jQuery('html').append(alertTemplateGenerator('alert-attention',context));
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
/**
* jquery.validate 0.7
* 12th September 2013 Tushar Agarwal tushar.agarwal@softcruise.com
* TODO: add validation for rules 'match' and 'min_length'
*/

(function ($) {
    $.fn.validate = function (options) {
        var settings = $.extend({}, $.fn.validate.defaults, options);

        $.fn.validate.fieldDefaults = $.extend({}, $.fn.validate.fieldDefaults, settings);

        return this.each(function (index, value) {
            var $this = $(this),
                fieldName = $this.prop("name"),
                fieldObject = $.extend({}, $.fn.validate.fieldDefaults, options.fields[fieldName] || {});

            fieldObject["element"] = $this;
            fieldObject["rule"] = fieldObject["rule"].split("|");

            for (var i = 0; i < fieldObject["rule"].length; i++) {
                if (check($this, fieldObject["rule"][i])) {
                    fieldObject.successCallback(fieldObject);
                } else {
                    fieldObject.errorCallback(fieldObject, {
                        failedRule: fieldObject["rule"][i],
                        message: messages[fieldObject["rule"][i]]
                    });
                }
            }
        });
    };

    $.fn.validate.defaults = {
        fields: {},
        successCallback: function (fieldObject) { },
        errorCallback: function (fieldObject, errorObject) { }
    };

    $.fn.validate.fieldDefaults = {
        rule: "required",

        successCallback: function (fieldObject) { },

        errorCallback: function (fieldObject, errorObject) { }
    };

    function check($element, rule) {
        var value = $element.val(),
            type = $element.prop("type");

        switch (rule) {
            case 'novalidate':
                return true;
                break;

            case 'required':
                if (type === 'checkbox' || type == 'radio') {
                    return ($element.is(":checked") === true);
                }

                return (value !== null && value != '');
                break;

            default:
                return rules[rule].test(value);
                break;
        }
    }

    var messages = {
        'required': "This field is required",
        'email': "The email id you have entered is invalid",
        'alpha': "This field should contain alphabets only",
        'ip': "The IP address you have entered is invalid",
        'url': "The URL you have entered is invalid",
        'numeric': "This field should contain numbers only",
        'integer': "This field should contain integers only",
        'decimal': "This field should contain decimal numbers only",
        'alphaNumeric': "This field should contain alphabets and numbers only"
    };

    var rules = {
    'email': /^[a-zA-Z0-9.!#$%&amp;'*+\-\/=?\^_`{|}~\-]+@[a-zA-Z0-9\-]+(?:\.[a-zA-Z0-9\-]+)*$/,
    'alpha': /^[a-z]+$/i,
    'ip': /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,
    'url': /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
    'numeric': /^[0-9]+$/,
    'integer': /^\-?[0-9]+$/,
    'decimal': /^\-?[0-9]*\.?[0-9]+$/,
    'alphaNumeric': /^[a-z0-9]+$/i
    };
})(jQuery);
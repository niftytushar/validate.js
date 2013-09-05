/**
* jquery.validate 0.5
* 05th September 2013 Tushar Agarwal tushar.agarwal@softcruise.com
* TODO: add validation for rules 'match' and 'min_length'
*/

(function ($) {
    $.fn.validate = function(options) {
	var settings = $.extend({}, $fn.validate.defaults, options);
    }

    $.fn.validate.defaults = {
	rule: "required"
    };

    function applyValidation(fieldObject) {
	switch(fieldObject.rule) {
	case 'required':
        var value = field.value,
            type = field.type;

        if (type === 'checkbox' || type == 'radio') {
            return (field.checked === true);
        }

        return (value !== null && value != '');
	    break;

	default:
        return validationRules[fieldObject.rule].test(fieldObject.field.value);
	    break;
	}
    }

    var validationMessages = {
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

    var validationRules = {
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
/*
function Validate(fieldsArray) {
    this.errors = [];
    this.fieldsArray = fieldsArray;
}

//start validation of all fields provided in constructor
Validate.prototype.start = function () {
    for (var i = 0; i < this.fieldsArray.length; i++) {
        this.fieldsArray[i].field = document.getElementById(this.fieldsArray[i].id);
        this.validate(this.fieldsArray[i]);
    }

    return this.errors;
}

//validate a field
Validate.prototype.validate = function (fieldObject) {
    var methods = fieldObject.method.split('|'),
        error = false,
        errorObject = {},
        additionalField = fieldObject.additionalField || null;

    for (var i = 0; i < methods.length; i++) {
        if (typeof this.method[methods[i]] === 'function') {
            if (!this.method[methods[i]].apply(this, [fieldObject.field, additionalField])) {
                error = true;
            }
        }


        if (error) {
            errorObject = {
                'id': fieldObject.id,
                'field': fieldObject.field,
                'message': Validate.message[methods[i]],
                'method': methods[i],
                'error': error
            };
            this.errors.push(errorObject);
        }

        if (fieldObject.callback) {
            fieldObject.callback(errorObject);
        }

        break;
    }
}*/
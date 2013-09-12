# jquery.validate

dead simple validation library

## Installation
```
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
<script src="jquery.validate.min.js"></script>
```
## Usage
Select fields using jQuery selectors, e.g. `$("input[type='text']").validate(options);`

###Options
global defaults

fields
Object
object of fields requiring custom validation, with name as key. each object can contain rule, successCallback, errorCallback.

successCallback(fieldObject)
function
function to be called back if a field passed validation test

errorCallback(fieldObject, errorObject)
function
function to be called back if a field fails validation test
errorObject contains the rule on which validation failed and an appropriate message

###Rules
list of validation rules

1. required - mandatory field, cannot be left blank
2. email - email type field
3. alpha - field can contain only alphabets
4. ip - field contains an IP address
5. url - field contains a URL
6. numeric - field can contain only numbers
7. integer - field can contain only integers
8. decimal - field can contain only decimal numbers
9. alphaNumeric - field can contain alphabets and numbers only
10. novalidate - do not validate this field

to apply multiple rules, separate rules by |
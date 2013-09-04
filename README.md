# validate.js

dead simple validation library

## Installation
```
<script src="validate.js"></script>
```
## Usage
1. Create array of all elements to be validated
e.g. {'id': 'elementID', 'method': "required|alpha", 'callback': function(error) {}, 'additionalField': document.getElementById('element2ID')}
2. Create object of validate class
e.g. var validator = new Validate(array);
3. Start validation as and when required
e.g. validator.start();

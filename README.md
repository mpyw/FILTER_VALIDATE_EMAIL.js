# FILTER_VALIDATE_EMAIL.js [![npm version](https://badge.fury.io/js/filter-validate-email.svg)](https://badge.fury.io/js/filter-validate-email) [![Build Status](https://travis-ci.com/mpyw/FILTER_VALIDATE_EMAIL.js.svg?branch=master)](https://travis-ci.com/mpyw/FILTER_VALIDATE_EMAIL.js)

Email validation compatible with PHP's `filter_var($value, FILTER_VALIDATE_EMAIL)`

# Installing

## NPM

```
npm install filter-validate-email
```

## CDN

```html
<script src="https://unpkg.com/filter-validate-email@latest/dist/filter-validate-email.min.js"></script>
```

It is strongly recommended that you replace `latest` into a fixed version.

# Usage

## Validate Unicode Email (default)

### PHP

```php
<?php

$value = '...';
$result = (bool)filter_var($value, FILTER_VALIDATE_EMAIL, FILTER_FLAG_EMAIL_UNICODE);
```

### JavaScript

```js
import validateEmail from 'filter-validate-email'

const value = '...'
const result = validateEmail(value)
```

## Validate Ascii Email

### PHP

```php
<?php

$value = '...';
$result = (bool)filter_var($value, FILTER_VALIDATE_EMAIL);
```

### JavaScript

```js
import validateEmail from 'filter-validate-email'

const value = '...'
const result = validateEmail(value, false)
```

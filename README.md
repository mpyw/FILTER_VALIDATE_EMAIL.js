# FILTER_VALIDATE_EMAIL.js [![npm version](https://badge.fury.io/js/filter-validate-email.svg)](https://badge.fury.io/js/filter-validate-email) [![Build Status](https://github.com/mpyw/FILTER_VALIDATE_EMAIL.js/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/mpyw/FILTER_VALIDATE_EMAIL.js/actions) [![Coverage Status](https://coveralls.io/repos/github/mpyw/FILTER_VALIDATE_EMAIL.js/badge.svg?branch=master)](https://coveralls.io/github/mpyw/FILTER_VALIDATE_EMAIL.js?branch=master)

Email validation compatible with PHP's `filter_var($value, FILTER_VALIDATE_EMAIL)`

> [!IMPORTANT]
> **v2 ships as a single ES module.** Breaking changes from v1:
>
> - **ESM package** — there is no separate CommonJS build. `import` works everywhere; `require()` works on Node.js >= 22.12 via native `require(ESM)`.
> - **Node.js >= 22** required.
> - Only the package root is exported; deep imports (e.g. `filter-validate-email/es/...`) are no longer available.
> - In the browser, load it as an ES module from a CDN (`<script type="module">`, see below); there is no bundled browser global / UMD / IIFE build.
>
> If you need a real CommonJS build, a browser global, or older runtimes, stay on [v1](https://www.npmjs.com/package/filter-validate-email/v/1.1.3).

# Installing

## NPM

```
npm install filter-validate-email
```

## CDN

Load it as an ES module from any npm CDN:

```html
<script type="module">
  import validateEmail from 'https://esm.sh/filter-validate-email';

  validateEmail('...'); // true / false
</script>
```

jsDelivr (`https://cdn.jsdelivr.net/npm/filter-validate-email/+esm`) and unpkg (`https://unpkg.com/filter-validate-email?module`) work too.

It is strongly recommended that you pin a fixed version, e.g. `https://esm.sh/filter-validate-email@2.0.0`.

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
import validateEmail from 'filter-validate-email';

const value = '...';
const result = validateEmail(value);
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
import validateEmail from 'filter-validate-email';

const value = '...';
const result = validateEmail(value, false);
```

# Appendix

- Pure HTML Version: [`mpyw/FILTER_VALIDATE_EMAIL.html`](https://github.com/mpyw/FILTER_VALIDATE_EMAIL.html)

<?php

declare(strict_types=1);

ini_set('assert.exception', '1');

$emails = require __DIR__ . '/emails/index.php';
$errors = [];
$test = function (string $description, callable $callback) use (&$errors): void {
    echo "  \e[4m$description\e[m\n\n";
    try {
        $callback();
        echo "    \e[92m✔ \e[90mpassed\e[m\n\n";
    } catch (AssertionError $e) {
        echo "    \e[31m✘ failed\e[m\n\n";
        $errors[] = $e;
    }
};

echo "\n\n";

foreach ($emails['ascii']['valid'] as $email) {
    $test("valid(ascii): $email", function () use ($email) {
        assert((bool)filter_var($email, FILTER_VALIDATE_EMAIL));
    });
}
foreach ($emails['ascii']['invalid'] as $email) {
    $test("invalid(ascii): $email", function () use ($email) {
        assert(!filter_var($email, FILTER_VALIDATE_EMAIL));
    });
}
foreach ($emails['unicode']['valid'] as $email) {
    $test("valid(unicode): $email", function () use ($email) {
        assert((bool)filter_var($email, FILTER_VALIDATE_EMAIL, FILTER_FLAG_EMAIL_UNICODE));
    });
}
foreach ($emails['unicode']['invalid'] as $email) {
    $test("invalid(unicode): $email", function () use ($email) {
        assert(!filter_var($email, FILTER_VALIDATE_EMAIL, FILTER_FLAG_EMAIL_UNICODE));
    });
}

if ($errors) {
    $count = count($errors);
    $s = $count > 1 ? 's' : '';
    echo "\n  $count test{$s} failed.\n\n";
    exit(1);
}

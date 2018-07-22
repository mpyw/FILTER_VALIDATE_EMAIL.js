<?php

return (function () {
    $validAsciiEmails = json_decode(file_get_contents(__DIR__ . '/validAsciiEmails.json'));
    $invalidAsciiEmails = json_decode(file_get_contents(__DIR__ . '/invalidAsciiEmails.json'));
    $validUnicodeEmails = json_decode(file_get_contents(__DIR__ . '/validUnicodeEmails.json'));
    $invalidUnicodeEmails = json_decode(file_get_contents(__DIR__ . '/invalidUnicodeEmails.json'));

    return [
        'ascii' => [
            'valid' => $validAsciiEmails,
            'invalid' => array_merge($invalidAsciiEmails, $validUnicodeEmails, $invalidUnicodeEmails),
        ],
        'unicode' => [
            'valid' => array_merge($validAsciiEmails, $validUnicodeEmails),
            'invalid' => array_merge($invalidAsciiEmails, $invalidUnicodeEmails),
        ],
    ];
})();

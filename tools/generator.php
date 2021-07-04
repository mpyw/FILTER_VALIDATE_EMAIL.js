<?php

/**
 * Automatically generate src/regexp/{ascii|unicode}.ts
 */
function generateRegexpFile(bool $unicode, string $version = 'master'): void
{
    $content = file_get_contents("https://raw.githubusercontent.com/php/php-src/{$version}/ext/filter/logical_filters.c");

    if (!preg_match(sprintf('#^\s*const char regexp%d\[] = "/(.*)/([a-zA-Z]+)";$#m', $unicode ? '0' : '1'), $content, $match)) {
        throw new \RuntimeException('Invalid Response.');
    }

    [, $patternLiteral, $flags] = $match;

    // Strips backslashes
    $rawPattern = stripcslashes($patternLiteral);

    // "D" flag is not supported
    $flags = str_replace('D', '', $flags);

    // Replace "\pX" -> "\p{X}"
    if (strpos($flags, 'u') !== false) {
        $rawPattern = preg_replace('/\\\\p([a-zA-Z]+)/', '\p{$1}', $rawPattern);
    }

    $output = <<<EOD
/**
 * Extracted from PHP core.
 *
 * @link https://github.com/php/php-src/blob/master/ext/filter/logical_filters.c
 * @licence https://github.com/php/php-src/blob/master/LICENSE
 */
export default /$rawPattern/$flags;

EOD;
    file_put_contents(sprintf('%s/../src/regexp/%s.ts', __DIR__, $unicode ? 'unicode' : 'ascii'), $output);
}

generateRegexpFile(true, $_SERVER['argv'][1] ?? 'master');
generateRegexpFile(false, $_SERVER['argv'][1] ?? 'master');

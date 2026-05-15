<?php
declare(strict_types=1);

// DigimonTcg SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class DigimonTcgMakeContext
{
    public static function call(array $ctxmap, ?DigimonTcgContext $basectx): DigimonTcgContext
    {
        return new DigimonTcgContext($ctxmap, $basectx);
    }
}

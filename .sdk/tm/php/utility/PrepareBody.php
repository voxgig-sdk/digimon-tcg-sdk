<?php
declare(strict_types=1);

// DigimonTcg SDK utility: prepare_body

class DigimonTcgPrepareBody
{
    public static function call(DigimonTcgContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}

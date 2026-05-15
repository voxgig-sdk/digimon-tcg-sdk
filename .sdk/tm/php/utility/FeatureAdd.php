<?php
declare(strict_types=1);

// DigimonTcg SDK utility: feature_add

class DigimonTcgFeatureAdd
{
    public static function call(DigimonTcgContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}

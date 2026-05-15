<?php
declare(strict_types=1);

// DigimonTcg SDK utility: result_body

class DigimonTcgResultBody
{
    public static function call(DigimonTcgContext $ctx): ?DigimonTcgResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}

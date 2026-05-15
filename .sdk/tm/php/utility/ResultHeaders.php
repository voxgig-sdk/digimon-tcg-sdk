<?php
declare(strict_types=1);

// DigimonTcg SDK utility: result_headers

class DigimonTcgResultHeaders
{
    public static function call(DigimonTcgContext $ctx): ?DigimonTcgResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}

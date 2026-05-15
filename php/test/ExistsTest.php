<?php
declare(strict_types=1);

// DigimonTcg SDK exists test

require_once __DIR__ . '/../digimontcg_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = DigimonTcgSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}

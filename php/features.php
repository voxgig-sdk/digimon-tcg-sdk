<?php
declare(strict_types=1);

// DigimonTcg SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class DigimonTcgFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new DigimonTcgBaseFeature();
            case "test":
                return new DigimonTcgTestFeature();
            default:
                return new DigimonTcgBaseFeature();
        }
    }
}

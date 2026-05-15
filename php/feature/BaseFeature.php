<?php
declare(strict_types=1);

// DigimonTcg SDK base feature

class DigimonTcgBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(DigimonTcgContext $ctx, array $options): void {}
    public function PostConstruct(DigimonTcgContext $ctx): void {}
    public function PostConstructEntity(DigimonTcgContext $ctx): void {}
    public function SetData(DigimonTcgContext $ctx): void {}
    public function GetData(DigimonTcgContext $ctx): void {}
    public function GetMatch(DigimonTcgContext $ctx): void {}
    public function SetMatch(DigimonTcgContext $ctx): void {}
    public function PrePoint(DigimonTcgContext $ctx): void {}
    public function PreSpec(DigimonTcgContext $ctx): void {}
    public function PreRequest(DigimonTcgContext $ctx): void {}
    public function PreResponse(DigimonTcgContext $ctx): void {}
    public function PreResult(DigimonTcgContext $ctx): void {}
    public function PreDone(DigimonTcgContext $ctx): void {}
    public function PreUnexpected(DigimonTcgContext $ctx): void {}
}

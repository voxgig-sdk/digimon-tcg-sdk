<?php
declare(strict_types=1);

// DigimonTcg SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

DigimonTcgUtility::setRegistrar(function (DigimonTcgUtility $u): void {
    $u->clean = [DigimonTcgClean::class, 'call'];
    $u->done = [DigimonTcgDone::class, 'call'];
    $u->make_error = [DigimonTcgMakeError::class, 'call'];
    $u->feature_add = [DigimonTcgFeatureAdd::class, 'call'];
    $u->feature_hook = [DigimonTcgFeatureHook::class, 'call'];
    $u->feature_init = [DigimonTcgFeatureInit::class, 'call'];
    $u->fetcher = [DigimonTcgFetcher::class, 'call'];
    $u->make_fetch_def = [DigimonTcgMakeFetchDef::class, 'call'];
    $u->make_context = [DigimonTcgMakeContext::class, 'call'];
    $u->make_options = [DigimonTcgMakeOptions::class, 'call'];
    $u->make_request = [DigimonTcgMakeRequest::class, 'call'];
    $u->make_response = [DigimonTcgMakeResponse::class, 'call'];
    $u->make_result = [DigimonTcgMakeResult::class, 'call'];
    $u->make_point = [DigimonTcgMakePoint::class, 'call'];
    $u->make_spec = [DigimonTcgMakeSpec::class, 'call'];
    $u->make_url = [DigimonTcgMakeUrl::class, 'call'];
    $u->param = [DigimonTcgParam::class, 'call'];
    $u->prepare_auth = [DigimonTcgPrepareAuth::class, 'call'];
    $u->prepare_body = [DigimonTcgPrepareBody::class, 'call'];
    $u->prepare_headers = [DigimonTcgPrepareHeaders::class, 'call'];
    $u->prepare_method = [DigimonTcgPrepareMethod::class, 'call'];
    $u->prepare_params = [DigimonTcgPrepareParams::class, 'call'];
    $u->prepare_path = [DigimonTcgPreparePath::class, 'call'];
    $u->prepare_query = [DigimonTcgPrepareQuery::class, 'call'];
    $u->result_basic = [DigimonTcgResultBasic::class, 'call'];
    $u->result_body = [DigimonTcgResultBody::class, 'call'];
    $u->result_headers = [DigimonTcgResultHeaders::class, 'call'];
    $u->transform_request = [DigimonTcgTransformRequest::class, 'call'];
    $u->transform_response = [DigimonTcgTransformResponse::class, 'call'];
});

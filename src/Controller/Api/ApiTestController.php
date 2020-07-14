<?php

namespace ShyimApiTest\Controller\Api;

use Shopware\Core\Framework\Routing\Annotation\RouteScope;
use Shopware\Core\Framework\Validation\DataBag\RequestDataBag;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @RouteScope(scopes={"administration"})
 */
class ApiTestController
{
    /**
     * @Route(path="/api/v{version}/_action/shyim-api-test/verify")
     */
    public function check(RequestDataBag $dataBag): JsonResponse
    {
        $username = $dataBag->get('ShyimApiTest.config.username');
        $password = $dataBag->get('ShyimApiTest.config.password');

        $success = false;

        if ($username === $password) {
            $success = true;
        }

        return new JsonResponse(['success' => $success]);
    }
}

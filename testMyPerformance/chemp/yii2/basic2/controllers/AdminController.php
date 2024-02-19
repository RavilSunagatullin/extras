<?php

namespace app\controllers;

use Yii;
use yii\db\Exception;
use yii\web\ForbiddenHttpException;
use yii\web\NotFoundHttpException;
use function PHPUnit\Framework\throwException;

class AdminController extends \yii\web\Controller
{
    public function beforeAction($action)
    {
        if(!parent::beforeAction($action)){
            return false;
        }
        $userId = Yii::$app->user->id;
        if($userId !== '100'){
            throw new ForbiddenHttpException('Access denied');
        }
        return true;
    }

    public function actionIndex()
    {
        return $this->render('index');
    }

}

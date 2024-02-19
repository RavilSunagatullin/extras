<?php

/** @var yii\web\View $this */

use yii\bootstrap5\Html;

$this->title = 'My Yii Application';
?>
<div class="site-index">

    <div class="jumbotron text-center bg-transparent mt-5 mb-5">
        <h1 class="display-4">Welcome!</h1>
    </div>

    <div class="body-content">

        <div class="row">
            <?php foreach ($products as $product): ?>
            <div class="col-lg-4 mb-3">
                <h2><?= Html::encode("{$product->title}") ?></h2>

                <p><?= Html::encode("{$product->text}") ?></p>

                <p><a class="btn btn-outline-secondary" href="#">more details</a></p>
            </div>
            <?php endforeach; ?>
        </div>

    </div>
</div>

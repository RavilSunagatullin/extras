<?php

use yii\db\Migration;

/**
 * Class m240211_091255_product
 */
class m240211_091255_product extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {

    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240211_091255_product cannot be reverted.\n";

        return false;
    }


    // Use up()/down() to run migration code without a transaction.
    public function up()
    {
        $this->createTable('product', [
            'id'=>$this->primaryKey(),
            'title'=>$this->string(),
            'text'=>$this->text(),
            'created_at'=>$this->timestamp(),

        ]);
    }

    public function down()
    {
        echo "m240211_091255_product cannot be reverted.\n";
        $this->dropTable('product');
        return false;
    }

}

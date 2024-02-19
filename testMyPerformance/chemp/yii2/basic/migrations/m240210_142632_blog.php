<?php

use yii\db\Migration;

/**
 * Class m240210_142632_blog
 */
class m240210_142632_blog extends Migration
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
        echo "m240210_142632_blog cannot be reverted.\n";

        return false;
    }


    // Use up()/down() to run migration code without a transaction.
    public function up()
    {
        $this->createTable('blog', [
            'id'=>$this->primaryKey(),
            'name'=>$this->string(),
            'textNews'=>$this->text(),
            'imgNews'=>$this->string(),
        ]);
    }

    public function down()
    {
        echo "m240210_142632_blog cannot be reverted.\n";

        return false;
    }

}

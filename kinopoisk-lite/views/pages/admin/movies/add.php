<?php
/**
 * @var \App\Kernel\view\View $view
 */

?>
<?php $view->component('start') ?>
    <h1>Admin movies add</h1>
    <form action="/admin/movies/add" method="post">
        <label for="name">Name</label>
        <input type="text" id="name" name="name">
        <button type="submit">Submit</button>
    </form>
<?php $view->component("end") ?>
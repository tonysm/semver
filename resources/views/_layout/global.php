<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Packagist Semver Checker - madewithlove</title>
    <meta name="description" content="Semver version constraint checker for packagist.">
    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="/builds/css/styles.css" />
</head>
<body>
    <main class="container" ng-cloak>
        <?php $this->insert('_partials/header') ?>
        <?= $this->section('body') ?>
    </main>

    <?php $this->insert('_partials/footer') ?>
    <?php $this->insert('_partials/ga') ?>

    <script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
    <script src="https://fb.me/react-0.13.1.js"></script>
    <script src="https://fb.me/JSXTransformer-0.13.1.js"></script>
    <script type="text/jsx" src="/builds/js/scripts.js"></script>
</body>
</html>
<?php

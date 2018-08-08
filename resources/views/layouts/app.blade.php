<!doctype html>
<html lang="en">
<!-- Head -->
<head>
    <title>Bulveyz</title>

    <!-- Meta -->
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{csrf_token()}}">

    <!-- Web Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900" rel="stylesheet">

    <!-- Bootstrap Styles -->
    <link rel="stylesheet" href="{{asset('vendor/bootstrap.min.css')}}">

    <!-- Components Vendor Styles -->
    <link rel="stylesheet" href="{{asset('vendor/font-awesome-4.7.0/css/font-awesome.css')}}">
    <link rel="stylesheet" href="{{asset('vendor/hstream.css')}}">
    @yield('css')


    <!-- Theme Styles -->
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
</head>
<!-- End Head -->
<body>
<!-- header -->
<header></header>
<!-- End header -->

<!-- Main Content -->
<main>
    @yield('main')
</main>
<!-- End Main Content -->

<!-- Footer -->
<footer></footer>
<!-- End Footer -->

<!-- Vue Init -->
<script src="{{asset('js/app.js')}}"></script>

<!-- Vendor JS -->
<script src="{{asset('vendor/jquery.parallax.js')}}"></script>
@yield('js')

<!-- Theme JS -->
<script src="{{asset('js/main.js')}}"></script>
</body>
</html>
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <script src="script.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css?v=<?php echo time(); ?>">
        <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0"></script>
 
    <title style="text-transform: Capitalize;"><?php  echo basename($_SERVER['PHP_SELF']); ?></title>
</head>
<body>

    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.php"><img src="images\white-logo.svg" alt=""></a>
            <button class="navbar-toggler" type="button">
            <i class="fa-solid fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                        <a class="nav-link" href="individual.php">individual headshots</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="team.php">team headshots</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="event.php">event headshots</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="school.php">schools</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.php">contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="faq.php">faq</a>
                    </li>
                </ul>
                 
            </div>
            <ul class="mobile-menu">
            <i class="fa-solid fa-xmark"></i>
                <li class="nav-item">
                        <a class="nav-link" href="individual.php">individual headshots</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="team.php">team headshots</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="event.php">event headshots</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="school.php">schools</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.php">contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="faq.php">faq</a>
                    </li>
                </ul>
        </div>
    </nav>
     
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>
    
</body>

 
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- FONT AWESOME ICONS LIBRARY -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

<!--jquery-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  

<style>
        body {
            font-family: Arial, sans-serif;
            background-color: #F7F7F7;
            margin: 0;
            padding: 0;
        }
        
       header {
            background: url("https://movexcart.com/wp-content/uploads/2024/01/BIG.jpg") #333333bf no-repeat center center;
            background-blend-mode: multiply;
            background-size: cover;
            color: #FFFFFF;
            padding: 20px;
            height: 274px;
            text-align: center;
        }
        
        .menu-icon {
            display: none; /* Hide the menu icon initially */
        }
        
        nav {
            background-color: transparent; /* Set the background to transparent */
            text-align: center;
        }
        
        nav ul {
            list-style-type: none;
            padding: 0;
        }
        
        nav ul li {
            display: inline;
            margin: 0 10px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .cta-button {
            background-color: #00A545;
            color: #FFFFFF;
            padding: 10px 20px;
            text-align: center;
            text-transform: uppercase;
            border: none;
            cursor: pointer;
        }
        
        .cta-button:hover {
            background-color: #005193;
        }
        
        .content {
            padding: 20px;
            text-align: center;
        }
        
        .accent-text {
            color: #FF6B6B;
        }
        
        .gray-text {
            color: #444444;
        }
        
        .section {
            background-color: #FFFFFF;
            margin-top: 20px;
            padding: 20px;
            border: 2px solid #198754;
        }
        
        .shortcode-output{
    
     margin-left: 378px;
 }
 
 /* services section */
        /* Example: */
        .services-section {
            background-color: #f8f9fa;
            padding: 14px 0;
        }
        .service-card {
            text-align: center;
            margin-top:10px;
        border-width: 3px;
    border-color: #198754;
        }
        .service-icon {
            font-size: 2.5rem;
            margin-bottom: 20px;
            padding-top:5px;
        }
        
        
         /* Add your imageshowcase styles here */
        .image-showcase {
            background-color: #28a74521;
            padding: 0px 0;
        }

        .image-card {
            border: none;
            transition: transform 0.3s ease-in-out;
        }

        .image-card:hover {
            transform: scale(1.05);
        }

        .card-img-top {
            object-fit: cover;
            height: 200px;
        }
 
        @media screen and (max-width: 600px) {
 .shortcode-output{
     text-align:center;
     margin-left: 0;
 }
}
    </style>


    <?php wp_head(); ?>
  
</head>
<body <?php body_class(); ?>>
   <header>
        <i class="menu-icon fas fa-bars"></i> <!-- Font Awesome hamburger menu icon -->
        <h1 style="color:white;font-family:Georgia, serif">Delivering Dreams: MovexCart</h1>
         <nav>
        <ul>
            <li> <a href="https://movexcart.com#about"><button class="cta-button">About Us</button></li></a>
            <li> <a href="https://movexcart.com#contact"><button class="cta-button">Contact Us</button></a></li>
        </ul>
    </nav>
    </header>
    
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="https://movexcart.com#about">About</a></li>
            <li><a href="https://movexcart.com#services">Services</a></li>
            <li><a href="https://movexcart.com#contact">Contact</a></li>
        </ul>
    </nav>




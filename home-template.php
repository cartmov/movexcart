<?php
/* Template Name: home Template */
get_header('custom');
?>

 <div class="container">
        <div class="content">
            <h2>Fast and Reliable Delivery Services</h2>
            <p class="gray-text">We deliver your packages on time, every time.</p>
           <a href="movexcart.com/track-form"> <button class="cta-button">Track Now</button></a>
        </div>
    
    <div class="container-fluid image-showcase">
    <div class="container">
        <h2 class="text-center mb-4"></h2>

        <div class="row">
            <!-- Image Card 1 -->
            <div class="col-md-4 mb-4">
                <div class="card image-card">
                    <img src="https://movexcart.com/wp-content/uploads/2024/01/Freight-Handling1.jpg" class="card-img-top" alt="Image 1">
                    <div class="card-body text-center">
                        <h5 class="card-title">Shipment handling</h5>
                        <p class="card-text">Efficient Logistics, Seamless Handling.</p>
                    </div>
                </div>
            </div>

            <!-- Image Card 2 -->
            <div class="col-md-4 mb-4">
                <div class="card image-card">
                    <img src="https://movexcart.com/wp-content/uploads/2024/01/Air-Freight-vs-Sea-Freight.jpg" class="card-img-top" alt="Image 2">
                    <div class="card-body text-center">
                        <h5 class="card-title">Versatile Transport Options</h5>
                        <p class="card-text">Delivery Tailored to Your Diverse Needs.</p>
                    </div>
                </div>
            </div>

            <!-- Image Card 3 -->
            <div class="col-md-4 mb-4">
                <div class="card image-card">
                    <img src="https://movexcart.com/wp-content/uploads/2024/01/WhatsApp-Image-2023-01-11-at-10.30.42-AM-1.jpeg" class="card-img-top" alt="Image 3">
                    <div class="card-body text-center">
                        <h5 class="card-title">Real-time Tracking</h5>
                        <p class="card-text">Track Every Move, Anytime, Anywhere Instantly.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Services Section -->
<section id="services" class="services-section">
    <div class="container">
        <div class="row justify-content-center">
            <h3 style="text-align:center;">Our Services</h3>
            <div class="col-lg-4 col-md-6">
                <div class="card service-card">
                    <i class="fas fa-shipping-fast service-icon"></i>
                    <div class="card-body">
                        <h5 class="card-title">Fast Delivery</h5>
                        <p class="card-text">We ensure quick and reliable delivery services to your doorstep.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="card service-card">
                    <i class="fas fa-globe service-icon"></i>
                    <div class="card-body">
                        <h5 class="card-title">Worldwide Shipping</h5>
                        <p class="card-text">Our services extend globally, providing shipping solutions worldwide.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="card service-card">
                    <i class="fas fa-lock service-icon"></i>
                    <div class="card-body">
                        <h5 class="card-title">Secure Packaging</h5>
                        <p class="card-text">We prioritize the safety of your packages with secure and durable packaging.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

   <section id="about" class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h2 class="display-4">About MovexCart</h2>
                    <p class="lead">MovexCart is a leading delivery company committed to providing reliable and efficient services. With a focus on customer satisfaction, we ensure timely and secure delivery of your goods.</p>
                    <p>We leverage advanced logistics technology and a dedicated team to offer seamless shipping solutions. Our goal is to simplify the delivery process, making it convenient for businesses and individuals alike.</p>
                </div>
                <div class="col-lg-6">
                    <div class="card">
                        <div style="background-color:#198754; color:white" class="card-header">
                            <h5 class="mb-0">Head Office</h5>
                        </div>
                        <div class="card-body">
                            <p class="mb-2"><i class="fas fa-map-marker-alt"></i> Jakarta, Indonesia</p>
                            <p class="mb-2"><i class="fas fa-envelope"></i> Contact@movexcart.com</p>
                            <p class="mb-0"><i class="fas fa-phone"></i> +62 123 MVX 789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        <div class="section">
            <h3>Why Choose Us</h3>
            <p>With our <span class="accent-text">fast</span> and <span class="accent-text">reliable</span> delivery services, your packages are in good hands. Trust us for all your delivery needs.</p>
        </div>

        <div class="section">
            <h3>Track Your Delivery</h3>
            <p class="gray-text">Easily track the status of your delivery in real-time using our advanced tracking system.</p>
        </div>
    </div>
    
    <div id="contact" class="shortcode-output">
         <h2 class="display-4">Contact MovexCart</h2>
    <?php echo do_shortcode('[wpforms id="198" title="false"]'); ?>
</div>

<?php get_footer('custom'); ?>

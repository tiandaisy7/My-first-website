<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My first page Menn!</title>
  <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <!-- Welcome Banner -->
    <section class="welcome-banner">
      <div class="banner-content">
        <h2>Welcome to Samira's Creative Space!</h2>
        <p>Explore, learn, and connect with a world of inspiration.</p>
        <img src="https://cdn-icons-png.flaticon.com/512/616/616494.png" alt="Sparkle Icon" class="banner-icon">
      </div>
      <button id="darkModeToggle" class="btn" style="position:absolute;top:20px;right:20px;">🌙 Dark Mode</button>
    </section>
    <!-- Header -->
    <header>
      <div class="container">
        <h1>My Website</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="auth.html">Login/Signup</a></li>
            <li><a href="admin.html">Admin</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="container">
        <h2>Welcome to My Website</h2>
        <p>My name is Samira and I love coding.</p>
        <div class="animated-icons">
          <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="Heart" class="icon">
          <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="Star" class="icon">
          <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="Flower" class="icon">
        </div>
        <a href="#features" class="btn">Learn More</a>
      </div>
    </section>
  <!-- Gallery Section -->
  <!-- Testimonials Carousel -->
  <section class="testimonials-section">
    <div class="container">
      <h2>What People Say</h2>
      <div class="testimonial-carousel">
        <div class="testimonial active">
          <p>"This site is so inspiring!"</p>
          <span>- Amina</span>
        </div>
        <div class="testimonial">
          <p>"I learned so much from Samira's blog."</p>
          <span>- Kwame</span>
        </div>
        <div class="testimonial">
          <p>"Beautiful design and great features!"</p>
          <span>- Nana</span>
        </div>
      </div>
      <div class="carousel-controls">
        <button class="carousel-btn" id="prevTestimonial">&#8592;</button>
        <button class="carousel-btn" id="nextTestimonial">&#8594;</button>
      </div>
    </div>
  </section>

  <!-- Blog/News Section -->
  <section class="blog-section">
    <div class="container">
      <h2>Latest News</h2>
      <div class="blog-list">
        <div class="blog-post">
          <h3>How I Started Coding</h3>
          <p>My journey into the world of programming and web development.</p>
        </div>
        <div class="blog-post">
          <h3>Top 5 Coding Tips</h3>
          <p>Simple tips to help you become a better coder every day.</p>
        </div>
        <div class="blog-post">
          <h3>Why I Love Pink Themes</h3>
          <p>Design inspiration and the power of color in web design.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="faq-section">
    <div class="container">
      <h2>Frequently Asked Questions</h2>
      <div class="faq-item">
        <button class="faq-question">How can I contact you?</button>
        <div class="faq-answer">Use the contact form below or email me directly!</div>
      </div>
      <div class="faq-item">
        <button class="faq-question">Can I contribute to your blog?</button>
        <div class="faq-answer">Yes! Reach out and let’s collaborate.</div>
      </div>
      <div class="faq-item">
        <button class="faq-question">What tools do you use?</button>
        <div class="faq-answer">I use VS Code, Node.js, and lots of coffee!</div>
      </div>
    </div>
  </section>
  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <p>Connect with me:</p>
      <a href="#" class="social-link">Instagram</a> |
      <a href="#" class="social-link">Twitter</a> |
      <a href="#" class="social-link">GitHub</a>
      <p style="margin-top:10px;">&copy; 2025 Samira's Creative Space</p>
    </div>
  </footer>
  <section id="gallery" class="gallery-section">
    <div class="container">
      <h2>Image Gallery</h2>
      <div class="gallery">
        <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Gallery 1">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Gallery 2">
        <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Gallery 3">
      </div>
    </div>
  </section>

  <!-- Interactive Buttons Section -->
  <section id="interactive" class="interactive-section">
    <div class="container">
      <h2>Show Some Love!</h2>
      <button class="btn like-btn">Like ❤️</button>
      <button class="btn subscribe-btn">Subscribe 💌</button>
      <p class="like-message" style="display:none;color:#a8326e;font-weight:bold;"></p>
      <p class="subscribe-message" style="display:none;color:#a8326e;font-weight:bold;"></p>
    </div>
  </section>
  <!-- Contact Section -->
  <section id="contact" class="contact-section">
    <div class="container">
      <h2>Contact Me</h2>
      <form class="contact-form">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <button type="submit" class="btn">Send Message</button>
      </form>
    </div>
  </section>
  </body>
  <script src="script.js"></script> 
  <script>
    // Smooth scroll for nav links
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
      link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // FAQ toggle
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', function() {
        this.classList.toggle('active');
        const answer = this.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      });
    });

    // Testimonials carousel
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;
    function showTestimonial(idx) {
      testimonials.forEach((t, i) => t.classList.toggle('active', i === idx));
    }
    document.getElementById('prevTestimonial').onclick = function() {
      currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentTestimonial);
    };
    document.getElementById('nextTestimonial').onclick = function() {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    };

    // Dark mode toggle
    document.getElementById('darkModeToggle').onclick = function() {
      document.body.classList.toggle('dark-mode');
    };
  </script>
</html>

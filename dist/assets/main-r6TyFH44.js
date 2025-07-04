(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}})();const h="/assets/logo-DASvsydS.jpeg";function p(){const t=window.location.pathname;return`
        <header class="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-95 shadow-md transition-all duration-300">
      <nav class="container mx-auto px-4 py-3 flex justify-between items-center">
        <div class="flex items-center">
          <a href="/" class="flex items-center">
            <div class="bg-gray-200  w-12 h-12">  <img src="${h}" alt="Microbits Logo" class="w-12 h-12 "></div>
            <div class="ml-3">
              <h1 class="text-xl font-bold text-primary">Microbits</h1>
              <p class="text-xs text-gray-600"></p>
            </div>
          </a>
        </div>
        
        <div class="hidden md:flex space-x-8">
          <a href="/" class="nav-link ${t==="/"?"text-primary font-medium":"text-gray-600 hover:text-primary"}">Home</a>
          <a href="/about.html" class="nav-link ${t.includes("about.html")?"text-primary font-medium":"text-gray-600 hover:text-primary"}">About</a>
          <a href="/books.html" class="nav-link ${t.includes("books.html")?"text-primary font-medium":"text-gray-600 hover:text-primary"}">Books</a>
          <a href="/videos.html" class="nav-link ${t.includes("videos.html")?"text-primary font-medium":"text-gray-600 hover:text-primary"}">Videos</a>
          <a href="/contact.html" class="nav-link ${t.includes("contact.html")?"text-primary font-medium":"text-gray-600 hover:text-primary"}">Contact</a>
        </div>
                        <!-- Desktop Social Icons -->
                <div class="hidden md:flex items-center space-x-4">
                    <a href="#" class="text-dark hover:text-[#1877F2] transition-colors"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="text-dark hover:text-[#1DA1F2] transition-colors"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="text-dark hover:text-[#E1306C] transition-colors"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="text-dark hover:text-[#000000] transition-colors"><i class="fab fa-tiktok"></i></a>
                    <a href="#" class="text-dark hover:text-[#FF0000] transition-colors"><i class="fab fa-youtube"></i></a>
                </div>
        
        <div class="md:hidden">
          <button id="mobile-menu-button" class="text-gray-600 hover:text-primary focus:outline-none">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </nav>


      
      <!-- Mobile menu -->
      <div id="mobile-menu" class="hidden md:hidden bg-white py-4 px-4 shadow-lg">
        <a href="/" class="block py-2 nav-link ${t==="/"?"text-primary font-medium":"text-gray-600 hover:text-primary"}">Home</a>
        <a href="/about.html" class="block py-2 nav-link ${t.includes("about.html")?"text-primary font-medium":"text-gray-600 hover:text-primary"}">About</a>
        <a href="/books.html" class="block py-2 nav-link ${t.includes("books.html")?"text-primary font-medium":"text-gray-600 hover:text-primary"}">Books</a>
        <a href="/videos.html" class="block py-2 nav-link ${t.includes("videos.html")?"text-primary font-medium":"text-gray-600 hover:text-primary"}">Videos</a>
        <a href="/contact.html" class="block py-2 nav-link ${t.includes("contact.html")?"text-primary font-medium":"text-gray-600 hover:text-primary"}">Contact</a>
        <div class="flex justify-center space-x-6 pt-4 border-t border-gray-100">
                    <a href="#" class="text-dark hover:text-[#1877F2] transition-colors"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="text-dark hover:text-[#1DA1F2] transition-colors"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="text-dark hover:text-[#E1306C] transition-colors"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="text-dark hover:text-[#000000] transition-colors"><i class="fab fa-tiktok"></i></a>
                    <a href="#" class="text-dark hover:text-[#FF0000] transition-colors"><i class="fab fa-youtube"></i></a>
                </div>
      </div>
                      <!-- Desktop Social Icons -->
                
            
    </header>
  `}function g(){return`
    <section id="home" class="pt-32 pb-20 md:pt-40 md:pb-32 bg-primary2 from-gray-200 to-gray-300">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="relative">
                    <!-- First Slider with Card (Always visible) -->
                    <div class="relative mb-16">
                        <div class="rounded-2xl overflow-hidden shadow-2xl relative h-96">
                            <div id="author-hero" class="w-full h-full bg-cover bg-center transition-all duration-1000"></div>
                            <!-- Floating Card - Bottom Left -->
                            <div class="absolute left-6 bottom-6 w-64 bg-white p-6 rounded-xl shadow-lg transform transition-transform hover:-translate-y-2">
                                <div class="absolute -top-3 left-6 w-6 h-6 bg-white transform rotate-45"></div>
                                <h3 class="text-xl font-bold text-author mb-2">Providing Global solution</h3>
                                <p class="text-gray-600 mb-4">Transformative solutions that go beyond expectation</p>
                                <a href="#author" class="text-secondary font-medium flex items-center group">
                                    Learn more 
                                    <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Second Slider with Card (Hidden on mobile) -->
                    <div class="relative hidden md:block">
                        <div class="rounded-2xl overflow-hidden shadow-2xl relative h-96">
                            <div id="org-hero" class="w-full h-full bg-cover bg-center transition-all duration-1000"></div>
                            <!-- Floating Card - Bottom Left -->
                            <div class="absolute left-6 bottom-6 w-64 bg-white p-6 rounded-xl shadow-lg transform transition-transform hover:-translate-y-2">
                                <div class="absolute -top-3 left-6 w-6 h-6 bg-white transform rotate-45"></div>
                                <h3 class="text-xl font-bold text-org mb-2">Impactful Organization</h3>
                                <p class="text-gray-600 mb-4">Serving communities since 2010</p>
                                <a href="#org" class="text-secondary font-medium flex items-center group">
                                    Learn more 
                                    <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Right Content Column -->
                <div>
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        <span>Transforming Challenges</span><br>
                        <span class="text-regular">Into Opportunities</span>
                    </h1>
                    <p class="text-lg md:text-xl text-white mb-8">
                        Microbits Consultancy provides world-class training and consulting services to help organizations achieve transformational outcomes.
                    </p>
                    <div class="flex flex-wrap gap-4 mb-12">
                        <a href="#author" class="btn btn-primary px-8 py-3 rounded-lg bg-secondary hover:bg-secondary-dark text-white font-medium transition-colors">
                            Explore Author
                        </a>
                        <a href="#org" class="btn btn-outline px-8 py-3 rounded-lg border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium transition-colors">
                            Our Organization
                        </a>
                    </div>
                    
                    <!-- Stats Grid -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div class="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl border border-white border-opacity-30 hover:bg-opacity-30 transition-all">
                            <div class="text-3xl font-bold text-white mb-2">16+</div>
                            <p class="text-white text-opacity-80">Books Published</p>
                        </div>
                        <div class="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl border border-white border-opacity-30 hover:bg-opacity-30 transition-all">
                            <div class="text-3xl font-bold text-white mb-2">50K+</div>
                            <p class="text-white text-opacity-80">Lives Impacted</p>
                        </div>
                        <div class="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl border border-white border-opacity-30 hover:bg-opacity-30 transition-all">
                            <div class="text-3xl font-bold text-white mb-2">24</div>
                            <p class="text-white text-opacity-80">Countries</p>
                        </div>
                        <div class="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl border border-white border-opacity-30 hover:bg-opacity-30 transition-all">
                            <div class="text-3xl font-bold text-white mb-2">12+</div>
                            <p class="text-white text-opacity-80">Years</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `}const v="/assets/pick8-8XNqIUvp.jpg";function x(){return`
    <section id="about" class="relative py-16 md:py-24 bg-primary2 overflow-hidden">
      <!-- Floating elements -->
      <div class="absolute top-10 left-10 w-16 h-16 rounded-full bg-white bg-opacity-10 animate-float1"></div>
      <div class="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-white bg-opacity-10 animate-float2"></div>
      <div class="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-white bg-opacity-10 animate-float3"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 transform transition-all duration-500 hover:scale-105">About Microbits Consultancy</h2>
          <div class="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p class="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
            We are a globally recognized consulting firm providing transformative solutions that go <span class="text-accent font-semibold">beyond expectation</span>
          </p>
        </div>

        <!-- Content Grid -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Left Column - Image -->
          <div class="order-2 md:order-1 transform transition-all duration-500 hover:scale-[1.02]">
            <div class="bg-gradient-to-br from-accent to-secondary p-1 rounded-xl shadow-2xl">
              <div class="bg-white p-2 rounded-lg overflow-hidden">
                <img src=" ${v}" 
                     alt="Microbits Consultancy Team" 
                     class="w-full h-auto rounded-lg object-cover transform transition-all duration-700 hover:scale-110">
              </div>
            </div>
          </div>

          <!-- Right Column - Text Content -->
          <div class="order-1 md:order-2">
            <h3 class="text-2xl md:text-3xl font-bold text-white mb-6">Who We Are</h3>
            <p class="text-gray-100 mb-6">
              Microbits is one of the leading indigenous globally recognized Consulting Firms providing a wide range of services and solutions to clients across the globe, focusing on Training & Consulting.
            </p>
            
            <div class="mb-8">
              <h4 class="text-xl font-semibold text-accent mb-4">Our Services</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex items-start bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm transform transition-all duration-300 hover:bg-opacity-20">
                  <div class="bg-accent text-white p-2 rounded-lg mr-3">
                    <i class="fas fa-graduation-cap"></i>
                  </div>
                  <div>
                    <h5 class="font-medium text-white">Training</h5>
                    <p class="text-sm text-gray-200">Diverse areas of specialization tailored to organizational needs</p>
                  </div>
                </div>
                <div class="flex items-start bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm transform transition-all duration-300 hover:bg-opacity-20">
                  <div class="bg-secondary text-white p-2 rounded-lg mr-3">
                    <i class="fas fa-chart-line"></i>
                  </div>
                  <div>
                    <h5 class="font-medium text-white">Consulting</h5>
                    <p class="text-sm text-gray-200">Strategy, Finance, Business Management, and more</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white bg-opacity-20 p-6 rounded-lg border border-white border-opacity-30 backdrop-blur-sm transform transition-all duration-500 hover:bg-opacity-30">
              <h4 class="text-xl font-semibold text-white mb-3">Our Mission</h4>
              <p class="text-gray-100 italic">
                "We will treat every Client request as a goldmine to generate transformational outcomes and sustainable new innovation in problem solving"
              </p>
            </div>

          
            
        <!-- Values Section -->
        <div class="mt-16 bg-white bg-opacity-10 rounded-xl p-8 md:p-12 backdrop-blur-sm border border-white border-opacity-20">
          <h3 class="text-2xl md:text-3xl font-bold text-center text-white mb-8">Our Core Values</h3>
          <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div class="text-center transform transition-all duration-300 hover:scale-110">
              <div class="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                <i class="fas fa-heart"></i>
              </div>
              <h4 class="font-bold text-white">Passion</h4>
            </div>
            <div class="text-center transform transition-all duration-300 hover:scale-110">
              <div class="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                <i class="fas fa-handshake"></i>
              </div>
              <h4 class="font-bold text-white">Respect</h4>
            </div>
            <div class="text-center transform transition-all duration-300 hover:scale-110">
              <div class="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h4 class="font-bold text-white">Integrity</h4>
            </div>
            <div class="text-center transform transition-all duration-300 hover:scale-110">
              <div class="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                <i class="fas fa-medal"></i>
              </div>
              <h4 class="font-bold text-white">Discipline</h4>
            </div>
            <div class="text-center transform transition-all duration-300 hover:scale-110">
              <div class="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                <i class="fas fa-hands-helping"></i>
              </div>
              <h4 class="font-bold text-white">Empathy</h4>
            </div>
          </div>
          <p class="text-center mt-8 text-gray-200">
            <span class="font-bold text-accent">PRIDE</span> is our acronym for these core values that guide everything we do.
          </p>
        </div>
       
          
          </div>
        </div>
         <div class="flex flex-wrap gap-4 mt-8">
        <a href="#publications" class="flex-1 min-w-[100px]">
                <button class="w-[50%] bg-accent hover:bg-accent-dark text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <i class="fas fa-book-open"></i>
                  know more
                
                </button>
              </a>
               </div>
           
      </div>
      
      
      <style>
        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(15px) translateX(-15px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(20px); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
      </style>
    </section>
  `}const b="/assets/pick2-D9Ad7Ryk.jpg";function y(){return`
    <section id="author" class="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div class="container mx-auto px-4 max-w-6xl">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Visionary Leader</h2>
                <div class="h-1 w-32 bg-primary mx-auto rounded-full"></div>
            </div>
            
            <div class="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-xl">
                <!-- CEO Photo -->
                <div class="lg:w-2/5 relative overflow-hidden">
                    <img src="${b}" alt="Dr. Samuel Owokoniran" class="w-full h-auto lg:h-full object-cover transform transition-all duration-700 hover:scale-105">
                    
                    <!-- Decorative elements -->
                    <div class="absolute top-6 -left-4 w-24 h-24 bg-secondary rounded-full opacity-20"></div>
                    <div class="absolute bottom-8 -right-6 w-32 h-32 bg-primary rounded-full opacity-15"></div>
                </div>
                
                <!-- Profile Content -->
                <div class="lg:w-3/5 py-10 px-6 md:px-12">
                    <div class="mb-6">
                        <span class="inline-block px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full mb-3">CEO & Founder</span>
                        <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Dr. Samuel Owokoniran</h3>
                        <p class="text-xl text-gray-600 mb-6">Bestselling Author | Keynote Speaker | Business Strategist</p>
                        
                        <div class="prose max-w-none text-gray-700 mb-8">
                            <p class="mb-4">With nearly a decade of leadership at Microbits Consultancy, Dr. Owokoniran has established himself as a transformative figure in the consulting industry, helping organizations turn challenges into opportunities.</p>
                            
                            <p class="mb-4">As a <span class="font-semibold text-primary">16-time published author</span> whose works have been translated into 12 languages, Dr. Owokoniran combines academic rigor with practical business wisdom. His books on mindful leadership, innovation, and cultural transformation have inspired professionals worldwide.</p>
                            
                            <p class="mb-4">A dynamic <span class="font-semibold text-primary">public speaker</span>, Dr. Owokoniran regularly shares his insights at international conferences, corporate retreats, and leadership workshops. His TED-style talks on "Transforming Challenges into Goldmines" have garnered over 50,000 views.</p>
                            
                            <p>Under his leadership, Microbits Consultancy has grown into a globally recognized firm providing strategic solutions to both private and public institutions across 24 countries.</p>
                        </div>
                    </div>
                    
                    <!-- Achievements Grid -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div class="achievement-card">
                            <div class="text-2xl font-bold text-primary">16+</div>
                            <div class="text-sm">Books Published</div>
                        </div>
                        <div class="achievement-card">
                            <div class="text-2xl font-bold text-primary">24</div>
                            <div class="text-sm">Countries Reached</div>
                        </div>
                        <div class="achievement-card">
                            <div class="text-2xl font-bold text-primary">50K+</div>
                            <div class="text-sm">Lives Impacted</div>
                        </div>
                        <div class="achievement-card">
                            <div class="text-2xl font-bold text-primary">12+</div>
                            <div class="text-sm">Years Experience</div>
                        </div>
                    </div>
                    
                    <!-- Enhanced Call to Action -->
                    <div class="flex flex-wrap gap-4">
                        <a href="#books" class="group relative overflow-hidden">
                            <button class="px-8 py-3.5 bg-gradient-to-r from-primary to-primary-dark text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 flex items-center justify-center gap-3 border-2 border-white/20 hover:border-white/40">
                                <i class="fas fa-book-open text-lg"></i>
                                <span>View Publications</span>
                                <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                        </a>
                        
                        <a href="#videos" class="group relative overflow-hidden">
                            <button class="px-8 py-3.5 bg-gradient-to-r from-secondary to-secondary-dark text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30 transform hover:-translate-y-1 flex items-center justify-center gap-3 border-2 border-white/20 hover:border-white/40">
                                <i class="fas fa-play-circle text-lg"></i>
                                <span>Watch Talks</span>
                                <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <style>
            .achievement-card {
                @apply bg-gray-50 p-4 rounded-lg text-center border border-gray-100 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1;
            }
            
            .prose p {
                @apply mb-4 leading-relaxed;
                text-indent: 1.5em;
            }
        </style>
    </section>
    `}function w(t){return`
    <div class=" bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
        <div class="h-64 overflow-hidden">
            <img src="${t.image}" alt="${t.title}" class="w-full h-full object-cover img-zoom">
        </div>
        <div class="p-6">
            <h3 class="text-xl font-bold text-author mb-2">${t.title}</h3>
            <p class="text-gray-600 mb-4">${t.description}</p>
            <div class="flex justify-between items-center">
                <span class="text-lg font-bold text-secondary">${t.price}</span>
                <div class="flex space-x-2">
                    <button class="btn btn-outline px-4 py-2 text-sm">Read Online</button>
                    <button class="btn btn-primary px-4 py-2 text-sm">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
    `}function k(){const t=window.location.pathname;return`
    <footer class="bg-primary text-white py-8 md:py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Logo and Social -->
                <div class="text-center md:text-left">
                    <div class="flex flex-col items-center md:items-start">
                        <a href="/" class="flex flex-col items-center">
                            <img src="${h}" alt="Microbit Consultancy Logo" class="h-10 md:h-16 w-auto">
                            <div class="mt-1 text-center md:text-left">
                                <span class="text-white font-bold">Microbit</span> 
                                <span class="text-secondary font-medium">Consultancy</span>
                            </div>
                        </a>
                    </div>
                    
                    <p class="my-4 text-gray-300 text-sm md:text-base">Transforming lives through powerful storytelling and organizational excellence.</p>
                    <div class="flex justify-center md:justify-start space-x-4">
                        <a href="#" class="text-white hover:text-[#1877F2] transition-colors"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="text-white hover:text-[#1DA1F2] transition-colors"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="text-white hover:text-[#E1306C] transition-colors"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="text-white hover:text-[#000000] transition-colors"><i class="fab fa-tiktok"></i></a>
                    <a href="#" class="text-white hover:text-[#FF0000] transition-colors"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                
                <!-- Navigation Links -->
                <div class="text-center md:text-left">
                    <h4 class="text-lg font-bold mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="/" class="footer-nav ${t==="/"?"text-white font-medium":"text-gray-300 hover:text-white"}">Home</a></li>
                        <li><a href="/about.html" class="footer-nav ${t.includes("about.html")?"text-white font-medium":"text-gray-300 hover:text-white"}">About</a></li>
                        <li><a href="/books.html" class="footer-nav ${t.includes("books.html")?"text-white font-medium":"text-gray-300 hover:text-white"}">Books</a></li>
                        <li><a href="/videos.html" class="footer-nav ${t.includes("videos.html")?"text-white font-medium":"text-gray-300 hover:text-white"}">Videos</a></li>
                        <li><a href="/contact.html" class="footer-nav ${t.includes("contact.html")?"text-white font-medium":"text-gray-300 hover:text-white"}">Contact</a></li>
                    </ul>
                </div>
                
                <!-- Contact Info -->
                <div class="text-center md:text-left">
                    <h4 class="text-lg font-bold mb-4">Contact Us</h4>
                    <ul class="space-y-2 text-gray-300">
                        <li class="flex items-center justify-center md:justify-start">
                            <i class="fas fa-map-marker-alt mr-2"></i>
                            <span>Block 51, FHA Phase 2, Karu Abuja</span>
                        </li>
                        <li class="flex items-center justify-center md:justify-start">
                            <i class="fas fa-envelope mr-2"></i>
                            <a href="mailto:drsamowokoniran@gmail.com" class="hover:text-white">drsamowokoniran@gmail.com</a>
                        </li>
                        <li class="flex items-center justify-center md:justify-start">
                            <i class="fas fa-phone-alt mr-2"></i>
                            <a href="tel:+2347068123337" class="hover:text-white">+234-7068123337</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
                <p>&copy; ${new Date().getFullYear()} Microbits Consultancy Limited. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `}function C(){return`
    <section id="cta" class="relative py-16 md:py-24 bg-gray-900 overflow-hidden">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <img src="" alt="Financial Strategy Learning" class="w-full h-full object-cover opacity-40">
        <div class="absolute inset-0 bg-gradient-to-r from-primary2/90 to-secondary/70"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Master Financial Strategy Like a Pro</h2>
          <p class="text-xl text-gray-200 mb-8">
            Unlock the secrets of financial success with our exclusive training programs designed to transform your approach to business finance.
          </p>
          
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#training" class="group relative overflow-hidden">
              <button class="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                <i class="fas fa-chart-line text-xl"></i>
                <span>Explore Training Programs</span>
                <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            </a>
            
            <a href="#contact" class="group relative overflow-hidden">
              <button class="px-8 py-4 bg-white hover:bg-gray-100 text-primary2 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                <i class="fas fa-headset text-xl"></i>
                <span>Speak to Our Experts</span>
                <div class="absolute inset-0 bg-primary2 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            </a>
          </div>
          
          <div class="mt-10 flex flex-wrap justify-center gap-6">
            <div class="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <i class="fas fa-check-circle text-secondary mr-2"></i>
              <span class="text-white text-sm font-medium">Proven Strategies</span>
            </div>
            <div class="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <i class="fas fa-check-circle text-secondary mr-2"></i>
              <span class="text-white text-sm font-medium">Case Studies</span>
            </div>
            <div class="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <i class="fas fa-check-circle text-secondary mr-2"></i>
              <span class="text-white text-sm font-medium">Practical Tools</span>
            </div>
          </div>
        </div>
      </div>
      
      <style>
        .shadow-xl {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
        }
      </style>
    </section>
  `}const L="/assets/pick4-BNjUb97f.jpg",E="/assets/pick3-Bhef_qv3.jpg",I="/assets/pick9-H0OHrpCK.jpg",j="/assets/pick7-B0WlSISk.jpg",l={author:[E,L,j,I],org:["https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop","https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop","https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop","https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1887&auto=format&fit=crop"]},S=[{id:"book1",title:"The Mindful Leader",description:"Transforming leadership through conscious awareness and emotional intelligence.",price:"₦5,000",image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1887&auto=format&fit=crop"},{id:"book2",title:"Innovation at Scale",description:"Strategies for driving sustainable innovation in modern organizations.",price:"₦4,500",image:"https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=1887&auto=format&fit=crop"},{id:"book3",title:"Cultural Transformation",description:"Building resilient organizations through values-driven cultural change.",price:"₦6,000",image:"https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?q=80&w=1887&auto=format&fit=crop"}];let n={author:0,org:0},m,c=!1;function A(){u(),M(),O(),console.log("App initialized successfully")}function u(){c=!1,r("header",p()),r("footer",k()),r("cta",C());const t=window.location.pathname;if((t==="/"||t.includes("index.html"))&&(r("hero",g()),r("about",x()),r("author",y()),B()),t.includes("books.html")){const e=S.map(o=>w(o)).join("");r("books-container",e)}}function r(t,e){const o=document.getElementById(t);o?(o.innerHTML=e,console.log(`Injected component: ${t}`)):console.warn(`Element not found: ${t}`)}function B(){const t=document.getElementById("author-hero"),e=document.getElementById("org-hero");t&&e&&(t.style.backgroundImage=`url('${l.author[0]}')`,e.style.backgroundImage=`url('${l.org[0]}')`,clearInterval(m),m=setInterval($,5e3))}function $(){n.author=(n.author+1)%l.author.length,n.org=(n.org+1)%l.org.length;const t=document.getElementById("author-hero"),e=document.getElementById("org-hero");t&&(t.style.backgroundImage=`url('${l.author[n.author]}')`),e&&(e.style.backgroundImage=`url('${l.org[n.org]}')`)}function M(){document.addEventListener("click",function(t){if(t.target.closest("#mobile-menu-button")){document.getElementById("mobile-menu")?.classList.toggle("hidden"),t.stopPropagation();return}const e=t.target.closest("[data-navigation]");e&&!c&&F(t,e)}),f()}function F(t,e){t.preventDefault(),c=!0;const o=e.getAttribute("href");console.log(`Navigating to: ${o}`),document.body.style.opacity="0.9",document.body.style.transition="opacity 0.2s ease",window.history.pushState({},"",o),f(),setTimeout(()=>{u(),window.scrollTo(0,0),document.body.style.opacity="1",c=!1},100)}function f(){const t=window.location.pathname;document.querySelectorAll("[data-navigation]").forEach(e=>{const o=e.getAttribute("href"),i=o===t||t!=="/"&&t.includes(o.replace("/",""));e.classList.toggle("active",i),e.setAttribute("aria-current",i?"page":"false")})}function O(){window.addEventListener("popstate",()=>{clearInterval(m),u()}),document.addEventListener("click",t=>{const e=document.getElementById("mobile-menu"),o=document.getElementById("mobile-menu-button");e&&!e.contains(t.target)&&o&&!o.contains(t.target)&&e.classList.add("hidden")}),document.addEventListener("click",t=>{const e=t.target.closest(".read-btn"),o=t.target.closest(".buy-btn");if(e){const i=e.dataset.bookId;P(i)}else if(o){const i=o.dataset.bookId;z(i)}})}function P(t){console.log(`Opening book: ${t}`)}function z(t){console.log(`Purchasing book: ${t}`)}document.addEventListener("DOMContentLoaded",A);window.addEventListener("error",t=>{console.error("Application error:",t)});function T(){console.log("Initializing mobile menu...");const t=document.getElementById("mobile-menu-button"),e=document.getElementById("mobile-menu");if(!t||!e){console.error("Mobile menu elements not found!");return}t.addEventListener("click",function(){e.classList.toggle("hidden");const i=this.querySelector("i");i&&(i.classList.toggle("fa-bars"),i.classList.toggle("fa-times"))}),e.querySelectorAll("a").forEach(i=>{i.addEventListener("click",()=>{e.classList.add("hidden");const a=t.querySelector("i");a&&(a.classList.add("fa-bars"),a.classList.remove("fa-times"))})}),console.log("Mobile menu initialized successfully")}document.addEventListener("componentsReady",function(){console.log("Components ready - initializing..."),console.log("Menu button exists now:",!!document.getElementById("mobile-menu-button")),console.log("Mobile menu exists now:",!!document.getElementById("mobile-menu")),console.log("Font Awesome check:",!!document.querySelector(".fa-bars")),T();const t=document.querySelector("header");t&&window.addEventListener("scroll",()=>{t.classList.toggle("shadow-lg",window.scrollY>100)}),document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(o){const i=this.getAttribute("href");if(i==="#")return;const a=document.querySelector(i);a&&(o.preventDefault(),window.scrollTo({top:a.offsetTop-80,behavior:"smooth"}))})})});setTimeout(()=>{document.getElementById("mobile-menu-button")||(console.warn("Fallback initialization triggered"),document.dispatchEvent(new CustomEvent("componentsReady")))},1e3);

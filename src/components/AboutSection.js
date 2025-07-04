import pick8 from '../assets/images/pick8.jpg';

export default function AboutSection() {
  return `
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
                <img src=" ${pick8}" 
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
  `;
}
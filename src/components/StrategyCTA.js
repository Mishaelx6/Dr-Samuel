

export default function StrategyCTA() {
  return `
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
  `;
}
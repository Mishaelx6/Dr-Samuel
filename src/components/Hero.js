

export default function Hero() {
    return `
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
    `;
}
import ceoPhoto from '../assets/images/pick2.jpg';

export default function AuthorProfile() {
    return `
    <section id="author" class="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div class="container mx-auto px-4 max-w-6xl">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Visionary Leader</h2>
                <div class="h-1 w-32 bg-primary mx-auto rounded-full"></div>
            </div>
            
            <div class="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-xl">
                <!-- CEO Photo -->
                <div class="lg:w-2/5 relative overflow-hidden">
                    <img src="${ceoPhoto}" alt="Dr. Samuel Owokoniran" class="w-full h-auto lg:h-full object-cover transform transition-all duration-700 hover:scale-105">
                    
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
    `;
}
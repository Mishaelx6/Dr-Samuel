import logo from '../assets/images/logo.jpeg';

export default function Footer() {
    // Get current path for active link styling
    const currentPath = window.location.pathname;
    
    return `
    <footer class="bg-primary text-white py-8 md:py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Logo and Social -->
                <div class="text-center md:text-left">
                    <div class="flex flex-col items-center md:items-start">
                        <a href="/" class="flex flex-col items-center">
                            <img src="${logo}" alt="Microbit Consultancy Logo" class="h-10 md:h-16 w-auto">
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
                        <li><a href="/" class="footer-nav ${currentPath === '/' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}">Home</a></li>
                        <li><a href="/about.html" class="footer-nav ${currentPath.includes('about.html') ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}">About</a></li>
                        <li><a href="/books.html" class="footer-nav ${currentPath.includes('books.html') ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}">Books</a></li>
                        <li><a href="/videos.html" class="footer-nav ${currentPath.includes('videos.html') ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}">Videos</a></li>
                        <li><a href="/contact.html" class="footer-nav ${currentPath.includes('contact.html') ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}">Contact</a></li>
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
    `;
}
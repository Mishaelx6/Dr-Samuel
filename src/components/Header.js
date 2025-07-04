import logo from '../assets/images/logo.jpeg';

export default function Header() {
  // Get current path and set active link
  const currentPath = window.location.pathname;
  
  return `
        <header class="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-95 shadow-md transition-all duration-300">
      <nav class="container mx-auto px-4 py-3 flex justify-between items-center">
        <div class="flex items-center">
          <a href="/" class="flex items-center">
            <div class="bg-gray-200  w-12 h-12">  <img src="${logo}" alt="Microbits Logo" class="w-12 h-12 "></div>
            <div class="ml-3">
              <h1 class="text-xl font-bold text-primary">Microbits</h1>
              <p class="text-xs text-gray-600"></p>
            </div>
          </a>
        </div>
        
        <div class="hidden md:flex space-x-8">
          <a href="/" class="nav-link ${currentPath === '/' ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}">Home</a>
          <a href="/about.html" class="nav-link ${currentPath.includes('about.html') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}">About</a>
          <a href="/books.html" class="nav-link ${currentPath.includes('books.html') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}">Books</a>
          <a href="/videos.html" class="nav-link ${currentPath.includes('videos.html') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}">Videos</a>
          <a href="/contact.html" class="nav-link ${currentPath.includes('contact.html') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}">Contact</a>
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
        <a href="/" class="block py-2 nav-link ${currentPath === '/' ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}">Home</a>
        <a href="/about.html" class="block py-2 nav-link ${currentPath.includes('about.html') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}">About</a>
        <a href="/books.html" class="block py-2 nav-link ${currentPath.includes('books.html') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}">Books</a>
        <a href="/videos.html" class="block py-2 nav-link ${currentPath.includes('videos.html') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}">Videos</a>
        <a href="/contact.html" class="block py-2 nav-link ${currentPath.includes('contact.html') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}">Contact</a>
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
  `;
}
import logo from '../assets/images/logo.jpeg';

export default function Header() {
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
        <!-- Logo and branding remain unchanged -->
        
        <div class="hidden md:flex space-x-8">
          <a href="/" data-navigation class="nav-link ${currentPath === '/' ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}">Home</a>
          <a href="/about.html" data-navigation class="nav-link ${currentPath.includes('about.html') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}">About</a>
          <a href="/books.html" data-navigation class="nav-link ${currentPath.includes('books.html') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}">Books</a>
          <a href="/videos.html" data-navigation class="nav-link ${currentPath.includes('videos.html') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}">Videos</a>
          <a href="/contact.html" data-navigation class="nav-link ${currentPath.includes('contact.html') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}">Contact</a>
        </div>
        <!-- Desktop social icons and mobile button remain unchanged -->
        
        <div id="mobile-menu" class="hidden md:hidden bg-white py-4 px-4 shadow-lg">
          <a href="/" data-navigation class="block py-2 nav-link ${currentPath === '/' ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}">Home</a>
          <a href="/about.html" data-navigation class="block py-2 nav-link ${currentPath.includes('about.html') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}">About</a>
          <a href="/books.html" data-navigation class="block py-2 nav-link ${currentPath.includes('books.html') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}">Books</a>
          <a href="/videos.html" data-navigation class="block py-2 nav-link ${currentPath.includes('videos.html') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}">Videos</a>
          <a href="/contact.html" data-navigation class="block py-2 nav-link ${currentPath.includes('contact.html') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}">Contact</a>
          <!-- Mobile social icons remain unchanged -->
        </div>
      </nav>
    </header>
  `;
}

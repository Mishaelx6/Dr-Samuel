export default function BookCard(book) {
    return `
    <div class=" bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
        <div class="h-64 overflow-hidden">
            <img src="${book.image}" alt="${book.title}" class="w-full h-full object-cover img-zoom">
        </div>
        <div class="p-6">
            <h3 class="text-xl font-bold text-author mb-2">${book.title}</h3>
            <p class="text-gray-600 mb-4">${book.description}</p>
            <div class="flex justify-between items-center">
                <span class="text-lg font-bold text-secondary">${book.price}</span>
                <div class="flex space-x-2">
                    <button class="btn btn-outline px-4 py-2 text-sm">Read Online</button>
                    <button class="btn btn-primary px-4 py-2 text-sm">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
    `;
}
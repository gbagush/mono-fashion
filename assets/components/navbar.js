class Navbar {
  render() {
    return `
    <nav class="bg-white text-black">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <div class="flex-shrink-0 flex items-center">
            <a href="/">
              <img class="h-12 w-auto" src="/assets/img/brand.png" alt="Logo" />
            </a>
          </div>

          <div class="hidden sm:flex sm:space-x-8 justify-center">
            <div class="relative group">
              <a
                href="#"
                class="text-black inline-flex items-center px-3 py-2 border-b-2 border-transparent hover:border-black text-base font-medium transition duration-300 ease-in-out"
              >
                Top
                <i
                  data-lucide="chevron-down"
                  class="w-4 h-4 ml-1 transition-transform duration-300 ease-in-out group-hover:-rotate-180"
                ></i>
              </a>
              <div
                class="absolute min-w-[180px] z-40 bg-white border border-zinc-200 shadow-lg hidden group-hover:block transition-all duration-300 ease-in-out"
              >
                <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-100"
                  >Shirt</a
                >
                <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-100"
                  >T-Shirt</a
                >
                <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-100"
                  >Outwear</a
                >
              </div>
            </div>
            <div class="relative group">
              <a
                href="#"
                class="text-black inline-flex items-center px-3 py-2 border-b-2 border-transparent hover:border-black text-base font-medium"
              >
                Bottom
                <i
                  data-lucide="chevron-down"
                  class="w-4 h-4 ml-1 transition-transform duration-300 ease-in-out group-hover:-rotate-180"
                ></i>
              </a>
              <div
                class="absolute min-w-[180px] z-40 bg-white border border-zinc-200 shadow-lg hidden group-hover:block transition-all duration-300 ease-in-out"
              >
                <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-100"
                  >Pants</a
                >
                <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-100"
                  >Short Pants</a
                >
              </div>
            </div>
            <div class="relative group">
              <a
                href="#"
                class="text-black inline-flex items-center px-3 py-2 border-b-2 border-transparent hover:border-black text-base font-medium"
              >
                Accessories
                <i data-lucide="chevron-down" class="w-4 h-4 ml-1"></i>
              </a>
              <div
                class="absolute min-w-[180px] z-40 bg-white border border-zinc-200 shadow-lg hidden group-hover:block"
              >
                <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-100"
                  >Glasses</a
                >
                <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-100"
                  >Cap</a
                >
                <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-100"
                  >Watch</a
                >
              </div>
            </div>
          </div>

          <div class="flex items-center">
            <div class="flex-shrink-0">
              <a
                href="#"
                class="flex items-center text-black hover:text-zinc-600"
              >
                <i data-lucide="shopping-cart" class="w-6 h-6"></i>
              </a>
            </div>

            <div class="ml-4 flex items-center sm:hidden">
              <button
                id="mobile-menu-button"
                type="button"
                class="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-zinc-600"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <i
                  data-lucide="menu"
                  class="block h-6 w-6"
                  id="hamburger-icon"
                ></i>
                <i data-lucide="x" class="hidden h-6 w-6" id="close-icon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div class="sm:hidden hidden" id="mobile-menu">
        <div class="pt-2 pb-3 space-y-1">
          <div>
            <button
              id="mobile-top-button"
              class="w-full text-left border-l-4 border-black text-black block pl-3 pr-4 py-2 text-base font-medium"
            >
              Top
              <i data-lucide="chevron-down" class="w-4 h-4 inline ml-1"></i>
            </button>
            <div id="mobile-top-menu" class="hidden pl-6 bg-zinc-50">
              <a href="#" class="block px-4 py-2 text-base">Shirt</a>
              <a href="#" class="block px-4 py-2 text-base">T-Shirt</a>
              <a href="#" class="block px-4 py-2 text-base">Outwear</a>
            </div>
          </div>

          <div>
            <button
              id="mobile-bottom-button"
              class="w-full text-left border-l-4 border-transparent text-black block pl-3 pr-4 py-2 text-base font-medium"
            >
              Bottom
              <i data-lucide="chevron-down" class="w-4 h-4 inline ml-1"></i>
            </button>
            <div id="mobile-bottom-menu" class="hidden pl-6 bg-zinc-50">
              <a href="#" class="block px-4 py-2 text-base">Pants</a>
              <a href="#" class="block px-4 py-2 text-base">Short Pants</a>
            </div>
          </div>

          <div>
            <button
              id="mobile-accessories-button"
              class="w-full text-left border-l-4 border-transparent text-black block pl-3 pr-4 py-2 text-base font-medium"
            >
              Accessories
              <i data-lucide="chevron-down" class="w-4 h-4 inline ml-1"></i>
            </button>
            <div id="mobile-accessories-menu" class="hidden pl-6 bg-zinc-50">
              <a href="#" class="block px-4 py-2 text-base">Glasses</a>
              <a href="#" class="block px-4 py-2 text-base">Cap</a>
              <a href="#" class="block px-4 py-2 text-base">Watch</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    `;
  }
}

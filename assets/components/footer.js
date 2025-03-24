class Footer {
  render() {
    return `
    <footer class="bg-black text-white py-12 mt-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-8 md:mb-0">
            <img
              src="/assets/img/brand.png"
              alt="MONO Logo"
              class="h-12 w-auto invert mb-4"
            />
            <p class="text-zinc-400 max-w-xs">
              Elevate your style with our premium selection of men's fashion for
              the modern man.
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div>
              <h3 class="text-lg font-bold mb-4">Shop</h3>
              <ul class="space-y-2">
                <li>
                  <a
                    href="/#best-categories"
                    class="text-zinc-400 hover:text-white transition"
                    >Best Categories</a
                  >
                </li>
                <li>
                  <a
                    href="/#new-arivals"
                    class="text-zinc-400 hover:text-white transition"
                    >New Arrivals</a
                  >
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mb-4">Help</h3>
              <ul class="space-y-2">
                <li>
                  <a href="#" class="text-zinc-400 hover:text-white transition"
                    >FAQs</a
                  >
                </li>
                <li>
                  <a href="#" class="text-zinc-400 hover:text-white transition"
                    >Shipping</a
                  >
                </li>
                <li>
                  <a href="#" class="text-zinc-400 hover:text-white transition"
                    >Returns</a
                  >
                </li>
                <li>
                  <a href="#" class="text-zinc-400 hover:text-white transition"
                    >Contact Us</a
                  >
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mb-4">Company</h3>
              <ul class="space-y-2">
                <li>
                  <a href="#" class="text-zinc-400 hover:text-white transition"
                    >About</a
                  >
                </li>
                <li>
                  <a href="#" class="text-zinc-400 hover:text-white transition"
                    >Careers</a
                  >
                </li>
                <li>
                  <a href="#" class="text-zinc-400 hover:text-white transition"
                    >Blog</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="flex justify-center md:justify-start space-x-6 my-8">
          <a href="#" class="text-zinc-400 hover:text-white transition">
            <i data-lucide="instagram" class="w-6 h-6"></i>
          </a>
          <a href="#" class="text-zinc-400 hover:text-white transition">
            <i data-lucide="facebook" class="w-6 h-6"></i>
          </a>
          <a href="#" class="text-zinc-400 hover:text-white transition">
            <i data-lucide="twitter" class="w-6 h-6"></i>
          </a>
          <a href="#" class="text-zinc-400 hover:text-white transition">
            <i data-lucide="youtube" class="w-6 h-6"></i>
          </a>
        </div>

        <div class="border-t border-zinc-800 pt-8 mt-4">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-zinc-400 text-sm mb-4 md:mb-0">
              &copy; 2025 MONO. All rights reserved.
            </p>

            <div class="flex space-x-6">
              <a
                href="#"
                class="text-zinc-400 hover:text-white text-sm transition"
                >Privacy Policy</a
              >
              <a
                href="#"
                class="text-zinc-400 hover:text-white text-sm transition"
                >Terms of Service</a
              >
            </div>
          </div>
        </div>
      </div>
    </footer>
    `;
  }
}

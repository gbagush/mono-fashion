class ProductCard {
  constructor({
    imageSrc,
    altText,
    brand,
    productName,
    price,
    originalPrice,
    discount,
  }) {
    this.imageSrc = imageSrc;
    this.altText = altText;
    this.brand = brand;
    this.productName = productName;
    this.price = price;
    this.originalPrice = originalPrice;
    this.discount = discount;
  }

  render() {
    return `
      <div class="relative group cursor-pointer">
        <img
          src="${this.imageSrc}"
          alt="${this.altText}"
          class="w-full h-80 object-cover"
        />

        <div
          class="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-80"
        >
          <span
            class="w-full text-center bg-white text-sm font-bold uppercase p-2"
          >
            View Product
          </span>
        </div>

        <div class="flex flex-col py-2">
          <h4 class="font-bold">${this.brand}</h4>
          <h4 class="truncate">${this.productName}</h4>
          <h3 class="mt-2 text-xl font-bold">${this.price}</h3>
          <span>
            <span class="text-zinc-600 line-through">${this.originalPrice}</span>
            <span class="text-red-600 font-bold">${this.discount}</span>
          </span>
        </div>
      </div>
    `;
  }
}

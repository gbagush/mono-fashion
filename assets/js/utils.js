const calculateDiscount = (normalPrice, discountedPrice) => {
  const discountPercentage =
    ((normalPrice - discountedPrice) / normalPrice) * 100;
  return `-${Math.round(discountPercentage)}%`;
};

function formatBreadcrumbText(text) {
  return text
    .split(" ")
    .map((word) =>
      word
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join("-")
    )
    .join(" ");
}

const formatPrice = (price) => {
  return `Rp ${price.toLocaleString("id-ID")}`;
};

const generateBreadcrumb = (section, category) => {
  const breadcrumbContainer = document.getElementById("breadcrumb");
  breadcrumbContainer.innerHTML = "";

  const homeLink = document.createElement("a");
  homeLink.href = "/";
  homeLink.textContent = "Home";
  homeLink.className = "text-zinc-600 hover:underline";
  breadcrumbContainer.appendChild(homeLink);

  breadcrumbContainer.appendChild(document.createTextNode(" / "));

  if (!section) {
    const shopSpan = document.createElement("span");
    shopSpan.textContent = "Shop";
    shopSpan.className = "text-black";
    breadcrumbContainer.appendChild(shopSpan);
    return;
  }

  const shopLink = document.createElement("a");
  shopLink.href = "/shop.html";
  shopLink.textContent = "Shop";
  shopLink.className = "text-zinc-600 hover:underline";
  breadcrumbContainer.appendChild(shopLink);

  if (section) {
    breadcrumbContainer.appendChild(document.createTextNode(" / "));

    if (!category) {
      const sectionSpan = document.createElement("span");
      sectionSpan.textContent = formatBreadcrumbText(section);
      sectionSpan.className = "text-black";
      breadcrumbContainer.appendChild(sectionSpan);
      return;
    }

    const sectionLink = document.createElement("a");
    sectionLink.href = `/shop.html?section=${encodeURIComponent(section)}`;
    sectionLink.textContent = formatBreadcrumbText(section);
    sectionLink.className = "text-zinc-600 hover:underline";
    breadcrumbContainer.appendChild(sectionLink);
  }

  if (section && category) {
    breadcrumbContainer.appendChild(document.createTextNode(" / "));

    const categorySpan = document.createElement("span");
    categorySpan.textContent = formatBreadcrumbText(category);
    categorySpan.className = "text-black";
    breadcrumbContainer.appendChild(categorySpan);
  }
};

export {
  calculateDiscount,
  formatBreadcrumbText,
  formatPrice,
  generateBreadcrumb,
};

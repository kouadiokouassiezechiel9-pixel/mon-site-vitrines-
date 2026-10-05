/* =============================================
   FASHIONFLOW – app.js
   Logique interactive de la boutique
   ============================================= */

'use strict';

/* ── DONNÉES PRODUITS ── */
const PRODUCTS = [
  {
    id: 1, name: "Robe Fleurie Été", category: "femme",
    price: 39.99, oldPrice: 59.99, emoji: "👗",
    badge: "sale", badgeText: "-33%",
    stars: 4.8, reviews: 124,
    sizes: ["XS","S","M","L","XL"],
    colors: ["#FF6B6B","#FFB347","#87CEEB"],
    desc: "Légère et colorée, cette robe fleurie est parfaite pour les journées ensoleillées. Tissu 100% coton respirant.",
    popular: 95
  },
  {
    id: 2, name: "Veste en Jean Homme", category: "homme",
    price: 69.99, oldPrice: null, emoji: "🧥",
    badge: "new", badgeText: "Nouveau",
    stars: 4.6, reviews: 87,
    sizes: ["S","M","L","XL","XXL"],
    colors: ["#4169E1","#1C1C1C","#8B4513"],
    desc: "Coupe décontractée moderne. Cette veste en jean s'adapte à toutes vos tenues. Denim premium traité.",
    popular: 88
  },
  {
    id: 3, name: "Ensemble Sport Enfant", category: "enfant",
    price: 29.99, oldPrice: 39.99, emoji: "🧒",
    badge: "sale", badgeText: "-25%",
    stars: 4.9, reviews: 203,
    sizes: ["4ans","6ans","8ans","10ans","12ans"],
    colors: ["#00C9A7","#FF6B6B","#845EC2"],
    desc: "Confortable et résistant, cet ensemble est idéal pour les activités sportives des enfants.",
    popular: 92
  },
  {
    id: 4, name: "T-Shirt Graphique Oversize", category: "femme",
    price: 24.99, oldPrice: null, emoji: "👕",
    badge: "hot", badgeText: "Tendance",
    stars: 4.7, reviews: 156,
    sizes: ["XS","S","M","L","XL"],
    colors: ["#FFFFFF","#1C1C1C","#FF6B6B","#845EC2"],
    desc: "Style oversize tendance avec un graphisme unique. Coton doux et confortable pour un look casual-chic.",
    popular: 90
  },
  {
    id: 5, name: "Pantalon Chino Slim", category: "homme",
    price: 49.99, oldPrice: 69.99, emoji: "👖",
    badge: "sale", badgeText: "-29%",
    stars: 4.5, reviews: 99,
    sizes: ["28","30","32","34","36"],
    colors: ["#8B7355","#4169E1","#1C1C1C"],
    desc: "Le chino slim incontournable. Coupe élégante qui s'adapte aussi bien au bureau qu'en soirée.",
    popular: 82
  },
  {
    id: 6, name: "Sneakers Colorées Enfant", category: "enfant",
    price: 34.99, oldPrice: null, emoji: "👟",
    badge: "new", badgeText: "Nouveau",
    stars: 4.8, reviews: 78,
    sizes: ["28","29","30","31","32","33","34"],
    colors: ["#FF6B6B","#00C9A7","#FFC75F"],
    desc: "Légères et résistantes, ces sneakers colorées feront le bonheur des enfants lors de leurs aventures.",
    popular: 85
  },
  {
    id: 7, name: "Sac à Main Tendance", category: "accessoire",
    price: 44.99, oldPrice: 59.99, emoji: "👜",
    badge: "sale", badgeText: "-25%",
    stars: 4.6, reviews: 67,
    sizes: ["Unique"],
    colors: ["#1C1C1C","#8B4513","#FF6B6B"],
    desc: "Spacieux et élégant, ce sac à main en similicuir de qualité est l'accessoire parfait pour toutes vos tenues.",
    popular: 79
  },
  {
    id: 8, name: "Legging Sport Femme", category: "sport",
    price: 32.99, oldPrice: 44.99, emoji: "🏃",
    badge: "sale", badgeText: "-27%",
    stars: 4.9, reviews: 312,
    sizes: ["XS","S","M","L","XL"],
    colors: ["#1C1C1C","#845EC2","#00C9A7"],
    desc: "Legging haute performance avec tissu respirant et taille haute. Parfait pour le yoga, running ou fitness.",
    popular: 97
  },
  {
    id: 9, name: "Pull Doux Femme", category: "femme",
    price: 37.99, oldPrice: null, emoji: "🧶",
    badge: "new", badgeText: "Nouveau",
    stars: 4.7, reviews: 43,
    sizes: ["XS","S","M","L","XL"],
    colors: ["#FFC0CB","#FFFACD","#E0E0E0","#845EC2"],
    desc: "Ultra-doux et chaud, ce pull en maille fine est parfait pour les soirées fraîches. Matière premium.",
    popular: 75
  },
  {
    id: 10, name: "Casquette Snapback", category: "accessoire",
    price: 19.99, oldPrice: null, emoji: "🧢",
    badge: "hot", badgeText: "Bestseller",
    stars: 4.5, reviews: 189,
    sizes: ["Unique"],
    colors: ["#1C1C1C","#FFFFFF","#4169E1","#FF6B6B"],
    desc: "Casquette snapback réglable, style streetwear intemporel. Broderie de qualité.",
    popular: 88
  },
  {
    id: 11, name: "Survêtement Enfant", category: "enfant",
    price: 44.99, oldPrice: 54.99, emoji: "🧸",
    badge: "sale", badgeText: "-18%",
    stars: 4.8, reviews: 91,
    sizes: ["4ans","6ans","8ans","10ans","12ans"],
    colors: ["#845EC2","#00C9A7","#FF6B6B"],
    desc: "Survêtement chaud et confortable pour les enfants. Parfait pour l'école ou les activités sportives.",
    popular: 84
  },
  {
    id: 12, name: "Veste Sport Homme", category: "sport",
    price: 59.99, oldPrice: 79.99, emoji: "🏋️",
    badge: "sale", badgeText: "-25%",
    stars: 4.6, reviews: 55,
    sizes: ["S","M","L","XL","XXL"],
    colors: ["#1C1C1C","#4169E1","#00C9A7"],
    desc: "Veste de sport légère et respirante. Zip intégral, poches latérales, coupe sportive moderne.",
    popular: 80
  }
];

/* ── STATE ── */
let cart = JSON.parse(localStorage.getItem('ff_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('ff_wish') || '[]');
let currentFilter = 'all';
let currentSort = 'default';
let currentProducts = [...PRODUCTS];
let selectedModal = null;

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(PRODUCTS);
  updateCartUI();
  initHeader();
  initSearch();
  initScrollTop();
  initNavHighlight();
});

/* ── HEADER ── */
function initHeader() {
  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
    document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

/* ── SEARCH ── */
function initSearch() {
  const toggle = document.getElementById('searchToggle');
  const bar = document.getElementById('searchBar');
  const input = document.getElementById('searchInput');

  toggle.addEventListener('click', () => {
    bar.classList.toggle('open');
    if (bar.classList.contains('open')) {
      setTimeout(() => input.focus(), 100);
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') performSearch();
    if (e.key === 'Escape') bar.classList.remove('open');
  });
}

function performSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  if (!query) return;

  const results = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query) ||
    p.desc.toLowerCase().includes(query)
  );

  currentFilter = 'all';
  document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
  document.querySelector('[data-filter="all"]').classList.add('active');

  renderProducts(results);
  document.getElementById('searchBar').classList.remove('open');

  if (results.length === 0) {
    showToast(`Aucun résultat pour "${query}"`, 'error');
  } else {
    showToast(`${results.length} article(s) trouvé(s) pour "${query}"`, 'success');
  }

  document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── NAV HIGHLIGHT ── */
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav__link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -60% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ── SCROLL TOP ── */
function initScrollTop() {}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── PRODUCT RENDERING ── */
function renderProducts(products) {
  const grid = document.getElementById('productsGrid');
  const count = document.getElementById('productCount');
  count.textContent = `${products.length} article${products.length > 1 ? 's' : ''}`;

  if (products.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:4rem; color:var(--clr-gray)">
        <div style="font-size:4rem; margin-bottom:1rem">🔍</div>
        <h3>Aucun article trouvé</h3>
        <p style="margin-top:.5rem">Essayez une autre catégorie ou un autre terme de recherche.</p>
      </div>`;
    return;
  }

  grid.innerHTML = products.map(p => createProductCard(p)).join('');
}

function createProductCard(p) {
  const isWished = wishlist.includes(p.id);
  const priceOldHtml = p.oldPrice ? `<span class="price-old">${p.oldPrice.toFixed(2)} €</span>` : '';
  const badgeHtml = p.badge ? `<span class="badge badge--${p.badge}">${p.badgeText}</span>` : '';
  const stars = '★'.repeat(Math.round(p.stars)) + '☆'.repeat(5 - Math.round(p.stars));

  return `
    <article class="product-card" data-id="${p.id}">
      <div class="product-card__img-wrap">
        <div class="product-card__emoji">${p.emoji}</div>
        ${badgeHtml ? `<div class="product-card__badges">${badgeHtml}</div>` : ''}
        <button class="product-card__wish ${isWished ? 'wished' : ''}"
          onclick="toggleWish(${p.id}, event)" aria-label="Ajouter aux favoris">
          ${isWished ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="product-card__info">
        <div class="product-card__cat">${categoryLabel(p.category)}</div>
        <h3 class="product-card__name">${p.name}</h3>
        <div class="product-card__stars">${stars} <span>(${p.reviews})</span></div>
        <div class="product-card__pricing">
          <span class="price-current">${p.price.toFixed(2)} €</span>
          ${priceOldHtml}
        </div>
        <div class="product-card__actions">
          <button class="btn btn--view" onclick="openModal(${p.id})">Voir</button>
          <button class="btn btn--primary" onclick="addToCart(${p.id}, event)">🛒 Ajouter</button>
        </div>
      </div>
    </article>`;
}

function categoryLabel(cat) {
  const labels = { femme: '👗 Femme', homme: '👔 Homme', enfant: '🧒 Enfant', sport: '🏃 Sport', accessoire: '👜 Accessoires' };
  return labels[cat] || cat;
}

/* ── FILTER & SORT ── */
function filterProducts(filter, btn) {
  currentFilter = filter;

  // Update active button
  if (btn) {
    document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
  } else {
    // Called from elsewhere, find button
    const target = document.querySelector(`[data-filter="${filter}"]`);
    if (target) {
      document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
      target.classList.add('active');
    }
  }

  let filtered = filter === 'all' ? [...PRODUCTS] : PRODUCTS.filter(p => p.category === filter);
  currentProducts = filtered;
  applySort(filtered);

  document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function sortProducts(value) {
  currentSort = value;
  applySort(currentProducts);
}

function applySort(products) {
  let sorted = [...products];
  switch (currentSort) {
    case 'price-asc':  sorted.sort((a,b) => a.price - b.price); break;
    case 'price-desc': sorted.sort((a,b) => b.price - a.price); break;
    case 'name':       sorted.sort((a,b) => a.name.localeCompare(b.name)); break;
    default:           sorted.sort((a,b) => b.popular - a.popular); break;
  }
  renderProducts(sorted);
}

/* ── WISHLIST ── */
function toggleWish(id, e) {
  e.stopPropagation();
  const idx = wishlist.indexOf(id);
  if (idx === -1) {
    wishlist.push(id);
    showToast('❤️ Ajouté aux favoris !', 'success');
  } else {
    wishlist.splice(idx, 1);
    showToast('Retiré des favoris', 'info');
  }
  localStorage.setItem('ff_wish', JSON.stringify(wishlist));

  // Re-render current view
  applySort(currentProducts);
}

/* ── CART ── */
function addToCart(id, e) {
  if (e) e.stopPropagation();
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }

  localStorage.setItem('ff_cart', JSON.stringify(cart));
  updateCartUI();
  showToast(`✅ ${product.name} ajouté au panier !`, 'success');

  // Animate cart button
  const cartBtn = document.getElementById('cartToggle');
  cartBtn.style.transform = 'scale(1.3)';
  setTimeout(() => cartBtn.style.transform = '', 300);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  localStorage.setItem('ff_cart', JSON.stringify(cart));
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else {
    localStorage.setItem('ff_cart', JSON.stringify(cart));
    updateCartUI();
  }
}

function updateCartUI() {
  const total = cart.reduce((sum, i) => sum + i.qty, 0);
  const cartCount = document.getElementById('cartCount');
  cartCount.textContent = total;
  cartCount.classList.toggle('visible', total > 0);

  // Render cart items
  const itemsContainer = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');

  if (cart.length === 0) {
    emptyEl.style.display = 'flex';
    footerEl.style.display = 'none';
    itemsContainer.querySelectorAll('.cart-item').forEach(el => el.remove());
    return;
  }

  emptyEl.style.display = 'none';
  footerEl.style.display = 'flex';

  itemsContainer.innerHTML = `<div class="cart-empty" id="cartEmpty" style="display:none"></div>` +
    cart.map(item => {
      const p = PRODUCTS.find(x => x.id === item.id);
      if (!p) return '';
      return `
        <div class="cart-item">
          <div class="cart-item__emoji">${p.emoji}</div>
          <div class="cart-item__info">
            <div class="cart-item__name">${p.name}</div>
            <div class="cart-item__price">${(p.price * item.qty).toFixed(2)} €</div>
            <div class="cart-item__qty">
              <button class="qty-btn" onclick="changeQty(${p.id},-1)">−</button>
              <span class="qty-num">${item.qty}</span>
              <button class="qty-btn" onclick="changeQty(${p.id},1)">+</button>
            </div>
            <span class="cart-item__remove" onclick="removeFromCart(${p.id})">🗑 Supprimer</span>
          </div>
        </div>`;
    }).join('');

  // Total
  const totalPrice = cart.reduce((sum, item) => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
  document.getElementById('cartTotal').textContent = totalPrice.toFixed(2).replace('.', ',') + ' €';
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
}

document.getElementById('cartToggle').addEventListener('click', toggleCart);

function checkout() {
  if (cart.length === 0) {
    showToast('Votre panier est vide !', 'error');
    return;
  }
  showToast('🎉 Merci ! La page de paiement est bientôt disponible.', 'info');
  toggleCart();
}

/* ── PRODUCT MODAL ── */
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  selectedModal = { ...p, selectedSize: p.sizes[0], selectedColor: p.colors[0] };

  document.getElementById('modalContent').innerHTML = buildModalHTML(p);
  document.getElementById('productModal').classList.add('open');
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';

  // Activate first size/color
  setTimeout(() => {
    document.querySelector('.size-btn')?.classList.add('selected');
    document.querySelector('.color-btn')?.classList.add('selected');
  }, 0);
}

function buildModalHTML(p) {
  const priceOld = p.oldPrice ? `<span class="price-old">${p.oldPrice.toFixed(2)} €</span>` : '';
  const stars = '★'.repeat(Math.round(p.stars)) + '☆'.repeat(5 - Math.round(p.stars));
  const sizeBtns = p.sizes.map(s => `<button class="size-btn btn" onclick="selectSize(this,'${s}')">${s}</button>`).join('');
  const colorBtns = p.colors.map(c => `<button class="color-btn" style="background:${c}" onclick="selectColor(this,'${c}')" aria-label="Couleur ${c}"></button>`).join('');

  return `
    <div class="modal-img-side">${p.emoji}</div>
    <div class="modal-info-side">
      <div class="modal-cat">${categoryLabel(p.category)}</div>
      <h2 class="modal-name">${p.name}</h2>
      <div class="modal-stars">${stars} <span style="color:var(--clr-gray);font-size:.85rem">(${p.reviews} avis)</span></div>
      <div class="modal-price">${p.price.toFixed(2)} € ${priceOld}</div>
      <p class="modal-section-label">Taille</p>
      <div class="size-selector">${sizeBtns}</div>
      <p class="modal-section-label">Couleur</p>
      <div class="color-selector">${colorBtns}</div>
      <p class="modal-desc">${p.desc}</p>
      <div class="modal-actions">
        <button class="btn btn--primary btn--large" onclick="addToCart(${p.id}); closeModal()">🛒 Ajouter au panier</button>
        <button class="btn btn--outline" style="color:var(--clr-dark);border-color:#e5e7eb" onclick="toggleWish(${p.id}, event); this.textContent = wishlist.includes(${p.id}) ? '❤️ Retiré des favoris' : '🤍 Ajouter aux favoris'">
          ${wishlist.includes(p.id) ? '❤️ Retiré des favoris' : '🤍 Ajouter aux favoris'}
        </button>
      </div>
    </div>`;
}

function selectSize(btn, size) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  if (selectedModal) selectedModal.selectedSize = size;
}
function selectColor(btn, color) {
  document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  if (selectedModal) selectedModal.selectedColor = color;
}

function closeModal() {
  document.getElementById('productModal').classList.remove('open');
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    document.getElementById('cartSidebar').classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('open');
  }
});

/* ── NEWSLETTER ── */
function handleNewsletter(e) {
  e.preventDefault();
  const email = e.target.querySelector('input').value;
  showToast(`🎁 Merci ! Un code -15% a été envoyé à ${email}`, 'success');
  e.target.reset();
}

/* ── TOAST NOTIFICATIONS ── */
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  toast.innerHTML = `<span>${icons[type]}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(120px)';
    toast.style.transition = 'all .3s ease';
    setTimeout(() => toast.remove(), 350);
  }, 3500);
}

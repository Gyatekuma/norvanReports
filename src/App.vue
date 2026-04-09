<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed } from 'vue'

const currentDate = computed(() => {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

const navSections = [
  { name: 'Home', path: '/' },
  {
    name: 'News',
    path: '/news',
    children: [
      { name: 'General', path: '/news/general' },
      { name: 'Political', path: '/news/political' },
    ]
  },
  { name: 'Economy', path: '/economy' },
  {
    name: 'Business',
    path: '/business',
    children: [
      { name: 'Agribusiness', path: '/business/agribusiness' },
      { name: 'Aviation', path: '/business/aviation' },
      { name: 'Banking & Finance', path: '/business/banking-finance' },
      { name: 'Energy', path: '/business/energy' },
      { name: 'Insurance', path: '/business/insurance' },
      { name: 'Manufacturing', path: '/business/manufacturing' },
      { name: 'Markets', path: '/business/markets' },
      { name: 'Maritime', path: '/business/maritime' },
      { name: 'Real Estate', path: '/business/real-estate' },
      { name: 'Tourism', path: '/business/tourism' },
      { name: 'Transport', path: '/business/transport' },
    ]
  },
  {
    name: 'Technology',
    path: '/technology',
    children: [
      { name: 'Telecom', path: '/technology/telecom' },
      { name: 'Cyber Security', path: '/technology/cyber-security' },
      { name: 'Cryptocurrency', path: '/technology/cryptocurrency' },
      { name: 'Tech Guide', path: '/technology/tech-guide' },
      { name: 'Social Media', path: '/technology/social-media' },
    ]
  },
  {
    name: 'Features',
    path: '/features',
    children: [
      { name: 'Interviews', path: '/features/interviews' },
      { name: 'Opinions', path: '/features/opinions' },
    ]
  },
  {
    name: 'Reports',
    path: '/reports',
    children: [
      { name: 'Banking/Finance', path: '/reports/banking-finance' },
      { name: 'Insurance', path: '/reports/insurance' },
      { name: 'Budgets', path: '/reports/budgets' },
      { name: 'GDP', path: '/reports/gdp' },
      { name: 'Inflation', path: '/reports/inflation' },
      { name: 'Central Bank', path: '/reports/central-bank' },
      { name: 'SEC/GSE', path: '/reports/sec-gse' },
    ]
  },
  {
    name: 'Lifestyle',
    path: '/lifestyle',
    children: [
      { name: 'Sports', path: '/lifestyle/sports' },
      { name: 'Entertainment', path: '/lifestyle/entertainment' },
      { name: 'Travel', path: '/lifestyle/travel' },
      { name: 'Environment', path: '/lifestyle/environment' },
      { name: 'Weather', path: '/lifestyle/weather' },
    ]
  },
  {
    name: 'NRTV',
    path: '/nrtv',
    children: [
      { name: 'Audio', path: '/nrtv/audio' },
      { name: 'Video', path: '/nrtv/video' },
    ]
  },
]

const mobileMenuOpen = ref(false)
const activeDropdown = ref(null)
const mobileExpandedMenu = ref(null)

const toggleDropdown = (name) => {
  activeDropdown.value = activeDropdown.value === name ? null : name
}

const closeDropdown = () => {
  activeDropdown.value = null
}

const toggleMobileSubmenu = (name) => {
  mobileExpandedMenu.value = mobileExpandedMenu.value === name ? null : name
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  mobileExpandedMenu.value = null
}
</script>

<template>
  <div class="app-wrapper">
    <!-- Top Bar -->
    <div class="top-bar">
      <div class="top-bar-inner">
        <span class="date">{{ currentDate }}</span>
        <span class="tagline">Truth in Every Story</span>
        <div class="top-actions">
          <RouterLink to="/about" class="top-link">About</RouterLink>
          <button class="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </div>

    <!-- Header -->
    <header class="header">
      <div class="header-inner">
        <button class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen">
          <svg v-if="!mobileMenuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <RouterLink to="/" class="logo">
          <span class="logo-text">Norvan Reports</span>
        </RouterLink>

        <div class="header-right">
          <button class="icon-btn search-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
          <button class="sign-in-btn">Sign In</button>
        </div>
      </div>
    </header>

    <!-- Desktop Navigation -->
    <nav class="nav desktop-nav">
      <div class="nav-inner">
        <div
          v-for="section in navSections"
          :key="section.name"
          class="nav-item"
          @mouseenter="section.children ? toggleDropdown(section.name) : null"
          @mouseleave="closeDropdown"
        >
          <RouterLink
            :to="section.path"
            class="nav-link"
            :class="{ 'has-dropdown': section.children }"
          >
            {{ section.name }}
            <svg v-if="section.children" class="dropdown-arrow" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </RouterLink>

          <!-- Dropdown Menu -->
          <div
            v-if="section.children"
            class="dropdown-menu"
            :class="{ 'is-open': activeDropdown === section.name }"
          >
            <RouterLink
              v-for="child in section.children"
              :key="child.name"
              :to="child.path"
              class="dropdown-link"
              @click="closeDropdown"
            >
              {{ child.name }}
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Navigation -->
    <nav class="nav mobile-nav" :class="{ 'nav-open': mobileMenuOpen }">
      <div class="mobile-nav-inner">
        <div
          v-for="section in navSections"
          :key="section.name"
          class="mobile-nav-item"
        >
          <div class="mobile-nav-header">
            <RouterLink
              :to="section.path"
              class="mobile-nav-link"
              @click="!section.children && closeMobileMenu()"
            >
              {{ section.name }}
            </RouterLink>
            <button
              v-if="section.children"
              class="mobile-expand-btn"
              @click="toggleMobileSubmenu(section.name)"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                :class="{ 'rotated': mobileExpandedMenu === section.name }"
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
          </div>

          <!-- Mobile Submenu -->
          <div
            v-if="section.children"
            class="mobile-submenu"
            :class="{ 'is-expanded': mobileExpandedMenu === section.name }"
          >
            <RouterLink
              v-for="child in section.children"
              :key="child.name"
              :to="child.path"
              class="mobile-submenu-link"
              @click="closeMobileMenu"
            >
              {{ child.name }}
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main -->
    <main class="main">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-top">
          <div class="footer-brand">
            <span class="footer-logo">Norvan Reports</span>
            <p class="footer-description">
              A unique data, business, and financial portal aimed at providing accurate,
              impartial reporting of business news on Ghana, Africa, and around the world
              from a truly independent reporting and analysis point of view.
            </p>
            <div class="footer-social">
              <a href="https://facebook.com/NorvanReports/" target="_blank" rel="noopener" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://twitter.com/NorvanReports" target="_blank" rel="noopener" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://instagram.com/norvanreports/" target="_blank" rel="noopener" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/norvan-reports-8a35311b5/" target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          <div class="footer-links">
            <div class="footer-col">
              <h4>News</h4>
              <a href="#">General</a>
              <a href="#">Political</a>
              <a href="#">Economy</a>
            </div>
            <div class="footer-col">
              <h4>Business</h4>
              <a href="#">Banking & Finance</a>
              <a href="#">Energy</a>
              <a href="#">Insurance</a>
              <a href="#">Markets</a>
            </div>
            <div class="footer-col">
              <h4>More</h4>
              <a href="#">Technology</a>
              <a href="#">Lifestyle</a>
              <a href="#">Reports</a>
              <a href="#">NRTV</a>
            </div>
            <div class="footer-col">
              <h4>Contact Us</h4>
              <p class="contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Hse #4, 3rd Okle Link<br>Baatsonaa, Accra, Ghana
              </p>
              <p class="contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                (+233) 264 511 013
              </p>
              <p class="contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                info@norvanreports.com
              </p>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} Norvanreports.com (Norvaay Enterprise). All rights reserved.</p>
          <div class="footer-legal">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Advertise</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Source+Sans+3:wght@300;400;500;600;700&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #1a1a1a;
  background: #fff;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

button {
  font-family: inherit;
}
</style>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Top Bar */
.top-bar {
  background: #0b57d4;
  color: #fff;
  padding: 0.5rem 0;
  font-size: 0.75rem;
}

.top-bar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.date {
  color: rgba(255, 255, 255, 0.85);
}

.tagline {
  font-style: italic;
  color: rgba(255, 255, 255, 0.85);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.top-link {
  color: rgba(255, 255, 255, 0.85);
  transition: color 0.2s;
}

.top-link:hover {
  color: #fff;
}

.subscribe-btn {
  background: #fff;
  color: #0b57d4;
  border: none;
  padding: 0.375rem 1rem;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}

.subscribe-btn:hover {
  background: rgba(255, 255, 255, 0.9);
}

/* Header */
.header {
  border-bottom: 1px solid #e5e5e5;
  padding: 1.25rem 0;
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #1a1a1a;
}

.logo {
  text-decoration: none;
}

.logo-text {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 2.75rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #1a1a1a;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #666;
  transition: color 0.2s;
}

.icon-btn:hover {
  color: #1a1a1a;
}

.sign-in-btn {
  background: none;
  border: 2px solid #1a1a1a;
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.sign-in-btn:hover {
  background: #1a1a1a;
  color: #fff;
}

/* Desktop Navigation */
.desktop-nav {
  border-bottom: 1px solid #e5e5e5;
  background: #fff;
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  gap: 0;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.875rem 1rem;
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #333;
  border-bottom: 3px solid transparent;
  margin-bottom: -1px;
  transition: all 0.2s;
}

.nav-link:hover {
  color: #1a1a1a;
  border-bottom-color: #0b57d4;
}

.nav-link.router-link-active {
  color: #1a1a1a;
  border-bottom-color: #0b57d4;
}

.dropdown-arrow {
  transition: transform 0.2s;
}

.nav-item:hover .dropdown-arrow {
  transform: rotate(180deg);
}

/* Dropdown Menu */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: #fff;
  border: 1px solid #e5e5e5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;
  z-index: 1000;
}

.dropdown-menu.is-open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-link {
  display: block;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: #333;
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.2s;
}

.dropdown-link:last-child {
  border-bottom: none;
}

.dropdown-link:hover {
  background: #f8f8f8;
  color: #0b57d4;
}

/* Mobile Navigation */
.mobile-nav {
  display: none;
  border-bottom: 1px solid #e5e5e5;
  background: #fff;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.mobile-nav.nav-open {
  max-height: 100vh;
  overflow-y: auto;
}

.mobile-nav-inner {
  padding: 0;
}

.mobile-nav-item {
  border-bottom: 1px solid #e5e5e5;
}

.mobile-nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile-nav-link {
  flex: 1;
  padding: 1rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #333;
}

.mobile-expand-btn {
  background: none;
  border: none;
  padding: 1rem 1.5rem;
  cursor: pointer;
  color: #666;
}

.mobile-expand-btn svg {
  transition: transform 0.2s;
}

.mobile-expand-btn svg.rotated {
  transform: rotate(180deg);
}

.mobile-submenu {
  max-height: 0;
  overflow: hidden;
  background: #f8f8f8;
  transition: max-height 0.3s ease;
}

.mobile-submenu.is-expanded {
  max-height: 500px;
}

.mobile-submenu-link {
  display: block;
  padding: 0.75rem 1.5rem 0.75rem 2.5rem;
  font-size: 0.8125rem;
  color: #555;
  border-top: 1px solid #eee;
}

.mobile-submenu-link:hover {
  color: #0b57d4;
  background: #f0f0f0;
}

/* Main */
.main {
  flex: 1;
  padding: 2rem 1.5rem;
}

/* Footer */
.footer {
  background: #1a1a1a;
  color: #fff;
  padding: 3rem 0 1.5rem;
  margin-top: auto;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer-top {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 4rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #333;
}

.footer-logo {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.5rem;
  font-weight: 700;
  display: block;
  margin-bottom: 0.75rem;
}

.footer-description {
  color: #999;
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.footer-social {
  display: flex;
  gap: 0.75rem;
}

.footer-social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #333;
  border-radius: 4px;
  color: #fff;
  transition: all 0.2s;
}

.footer-social a:hover {
  background: #0b57d4;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.footer-col h4 {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #888;
  margin-bottom: 1rem;
}

.footer-col a {
  display: block;
  color: #ccc;
  font-size: 0.875rem;
  padding: 0.375rem 0;
  transition: color 0.2s;
}

.footer-col a:hover {
  color: #fff;
}

.footer-col .contact-item {
  display: flex;
  gap: 0.5rem;
  color: #ccc;
  font-size: 0.8125rem;
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.footer-col .contact-item svg {
  flex-shrink: 0;
  margin-top: 0.125rem;
  color: #0b57d4;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
}

.footer-bottom p {
  color: #666;
  font-size: 0.75rem;
}

.footer-legal {
  display: flex;
  gap: 1.5rem;
}

.footer-legal a {
  color: #666;
  font-size: 0.75rem;
  transition: color 0.2s;
}

.footer-legal a:hover {
  color: #fff;
}

/* Responsive */
@media (max-width: 900px) {
  .tagline {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .logo-text {
    font-size: 2rem;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-nav {
    display: block;
  }

  .footer-top {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .top-bar-inner {
    padding: 0 1rem;
  }

  .header-inner {
    padding: 0 1rem;
  }

  .main {
    padding: 1.5rem 1rem;
  }

  .sign-in-btn {
    display: none;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>

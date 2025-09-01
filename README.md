# Amazon Project

A fully functional Amazon e-commerce clone built with vanilla HTML, CSS, and JavaScript. This project replicates the core Amazon shopping experience including product browsing, cart management, checkout process, and order tracking.

## Overview

This project demonstrates modern web development techniques by recreating Amazon's user interface and functionality:

- **Product Catalog**: Browse and search through a variety of products
- **Shopping Cart**: Add/remove items with quantity management and local storage persistence
- **Checkout Process**: Complete order flow with delivery options and payment summary
- **Order Tracking**: Track order status and delivery progress
- **Responsive Design**: Works on desktop and mobile devices

## Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/skyrabbit4/AmazonProject.git
   cd AmazonProject
   ```

2. **Run the application:**
   - **Option 1 - Simple HTTP Server (Python):**
     ```bash
     python3 -m http.server 8000
     ```
     Then open http://localhost:8000/amazon.html
   
   - **Option 2 - Live Server (VS Code):**
     Install the Live Server extension and right-click on `amazon.html` → "Open with Live Server"
   
   - **Option 3 - Direct file access:**
     Simply open `amazon.html` in your browser (some features may be limited due to CORS)

## Features

- **🛍️ Product Browsing**: Interactive product grid with ratings, prices, and images
- **🛒 Shopping Cart**: Dynamic cart with quantity updates and item removal
- **💳 Checkout**: Multi-step checkout with delivery options (FREE, Standard, Express)
- **📦 Order Management**: Order summary with tax calculation and payment processing
- **📍 Order Tracking**: Real-time order status and delivery tracking
- **💾 Data Persistence**: Cart data saved to localStorage
- **📱 Responsive Design**: Mobile-friendly interface

## Project Structure

- **`amazon.html`** — Main store homepage
- **`checkout.html`** — Shopping cart and checkout page
- **`orders.html`** — Order history and management
- **`tracking.html`** — Package tracking page
- **`data/`** — Product data, cart logic, and delivery options
  - `products.js` — Product catalog and search functions
  - `cart.js` — Shopping cart management and localStorage
  - `deliveryOptions.js` — Shipping options and pricing
- **`scripts/`** — JavaScript modules
  - `amazon.js` — Homepage functionality
  - `checkout/` — Checkout process modules
  - `utils/` — Utility functions (currency formatting, etc.)
- **`styles/`** — CSS styling
  - `shared/` — Common styles across pages
  - `pages/` — Page-specific styling
- **`images/`** — Product images and UI assets

## Technology Stack

- **Frontend**: HTML5, CSS3, ES6+ JavaScript
- **Architecture**: Modular ES6 imports/exports
- **Storage**: Browser localStorage for cart persistence
- **Styling**: Custom CSS with responsive design
- **External Libraries**: Day.js for date formatting (via CDN)

## Development

No build process required! This is a static website that runs directly in the browser.

**File Structure Best Practices:**
- Keep modules small and focused on single responsibilities
- Use ES6 import/export for clean module organization
- Store shared utilities in the `scripts/utils/` directory
- Follow the existing CSS organization pattern

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes and test them locally
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

Please keep changes small and well-documented. Test your changes by running the application locally.

## License

This project is created for educational purposes. Please specify a license in LICENSE file if you plan to distribute it.

## Contact

- **GitHub Issues**: Open an issue for bug reports or feature requests
- **Developer**: Contact @skyrabbit4
- **Project Repository**: https://github.com/skyrabbit4/AmazonProject

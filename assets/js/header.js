const headerHTML = `
  <header class="topbar">
    <div class="container nav">
      <a class="brand" href="https://germanpos.com/"><img src="assets/images/app-icon.png" alt="German POS logo" decoding="async" /><span>German POS</span></a>
      <nav class="nav-links" aria-label="Primary navigation">
        <div class="nav-dropdown">
          <button class="nav-dropdown-trigger" type="button" aria-haspopup="true" aria-expanded="false">Industries</button>
          <div class="nav-dropdown-menu" aria-label="Industries">
            <a href="restaurant-pos.html">Restaurant POS</a>
            <a href="salon-pos.html">Salon POS</a>
            <a href="mart-pos.html">Mart POS</a>
            <a href="hotel-pos.html">Hotel POS</a>
            <a href="game-zone-pos.html">Game Zone POS</a>
            <a href="gym-pos.html">Gym POS</a>
            <a class="nav-dropdown-all" href="industries.html">All Industries</a>
          </div>
        </div>
        <a href="features.html">Features</a>
        <a href="contact.html">Contact</a>
        <a href="download.html">Download</a>
      </nav>
      <div class="country-select"><select id="countrySelect" data-country-select aria-label="Select country"><option value="us">USA</option><option value="eu">Europe</option><option value="gb">UK</option><option value="ae">UAE</option><option value="sa">KSA</option><option value="om">Oman</option><option value="pk">Pakistan</option></select></div>
      <div class="nav-cta"><a class="btn btn-secondary" href="pricing.html">View Pricing</a><a class="btn btn-primary" href="demo.html">Book Demo</a></div>
      <button class="menu-toggle" type="button" data-menu-toggle>Menu</button>
    </div>
  </header>
`;
document.write(headerHTML);

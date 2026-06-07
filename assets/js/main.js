(() => {
  const whatsappNumber = '923295302560';
  const displayPhone = '+92 329 5302560';

  const countries = {
    pk: {
      name: 'Pakistan',
      currency: 'PKR',
      prices: {
        restaurant: ['PKR 3,999', 'PKR 6,999', 'PKR 9,999'],
        salon: ['PKR 2,999', 'PKR 5,499', 'PKR 8,499'],
        mart: ['PKR 4,999', 'PKR 8,999', 'PKR 13,999'],
        hotel: ['PKR 7,999', 'PKR 14,999', 'PKR 24,999'],
        gamezone: ['PKR 3,499', 'PKR 6,499', 'PKR 10,999'],
        gym: ['PKR 3,999', 'PKR 6,999', 'PKR 10,999']
      },
      setup: 'Setup and staff training: from PKR 15,000.',
      device: 'Additional device or terminal: PKR 1,500/month.',
      compliance: 'FBR/PRA or local fiscal setup: from PKR 1,500/month where applicable.'
    },
    sa: {
      name: 'KSA',
      currency: 'SAR',
      prices: {
        restaurant: ['SAR 149', 'SAR 249', 'SAR 349'],
        salon: ['SAR 129', 'SAR 219', 'SAR 329'],
        mart: ['SAR 179', 'SAR 299', 'SAR 449'],
        hotel: ['SAR 299', 'SAR 549', 'SAR 899'],
        gamezone: ['SAR 139', 'SAR 249', 'SAR 399'],
        gym: ['SAR 149', 'SAR 249', 'SAR 399']
      },
      setup: 'Setup and staff training: from SAR 599.',
      device: 'Additional device or terminal: SAR 59/month.',
      compliance: 'Tax or compliance setup: from SAR 59/month where applicable.'
    },
    ae: {
      name: 'UAE',
      currency: 'AED',
      prices: {
        restaurant: ['AED 149', 'AED 249', 'AED 349'],
        salon: ['AED 129', 'AED 219', 'AED 329'],
        mart: ['AED 179', 'AED 299', 'AED 449'],
        hotel: ['AED 299', 'AED 549', 'AED 899'],
        gamezone: ['AED 139', 'AED 249', 'AED 399'],
        gym: ['AED 149', 'AED 249', 'AED 399']
      },
      setup: 'Setup and staff training: from AED 599.',
      device: 'Additional device or terminal: AED 59/month.',
      compliance: 'Tax or compliance setup: from AED 59/month where applicable.'
    },
    om: {
      name: 'Oman',
      currency: 'OMR',
      prices: {
        restaurant: ['OMR 15', 'OMR 25', 'OMR 35'],
        salon: ['OMR 13', 'OMR 22', 'OMR 33'],
        mart: ['OMR 18', 'OMR 30', 'OMR 45'],
        hotel: ['OMR 30', 'OMR 55', 'OMR 90'],
        gamezone: ['OMR 14', 'OMR 25', 'OMR 40'],
        gym: ['OMR 15', 'OMR 25', 'OMR 40']
      },
      setup: 'Setup and staff training: from OMR 60.',
      device: 'Additional device or terminal: OMR 6/month.',
      compliance: 'Tax or compliance setup: from OMR 6/month where applicable.'
    },
    gb: {
      name: 'United Kingdom',
      currency: 'GBP',
      prices: {
        restaurant: ['GBP 49', 'GBP 79', 'GBP 119'],
        salon: ['GBP 39', 'GBP 69', 'GBP 109'],
        mart: ['GBP 59', 'GBP 99', 'GBP 149'],
        hotel: ['GBP 99', 'GBP 179', 'GBP 299'],
        gamezone: ['GBP 45', 'GBP 79', 'GBP 129'],
        gym: ['GBP 49', 'GBP 79', 'GBP 129']
      },
      setup: 'Setup and staff training: from GBP 299.',
      device: 'Additional device or terminal: GBP 15/month.',
      compliance: 'Tax or compliance setup: from GBP 15/month where applicable.'
    },
    us: {
      name: 'USA',
      currency: 'USD',
      prices: {
        restaurant: ['USD 59', 'USD 99', 'USD 149'],
        salon: ['USD 49', 'USD 89', 'USD 139'],
        mart: ['USD 69', 'USD 119', 'USD 179'],
        hotel: ['USD 129', 'USD 229', 'USD 379'],
        gamezone: ['USD 55', 'USD 99', 'USD 159'],
        gym: ['USD 59', 'USD 99', 'USD 159']
      },
      setup: 'Setup and staff training: from USD 349.',
      device: 'Additional device or terminal: USD 19/month.',
      compliance: 'Tax or compliance setup: from USD 19/month where applicable.'
    }
  };

  const industries = {
    restaurant: {
      name: 'Restaurant POS',
      shortName: 'Restaurant',
      plural: 'restaurants',
      title: 'POS packages for restaurants, cafes, and cloud kitchens.',
      copy: 'Restaurant plans cover billing, KOT, tables, delivery, recipes, inventory, staff, and profit reports.',
      plans: [
        { label: 'Starter', title: 'For cafes and takeaways', copy: 'Core POS for a small outlet that needs reliable billing and basic reporting.', features: ['Single device POS', 'Menu and category management', 'Dine-in, pickup, and delivery billing', 'Discounts and payment methods', 'Basic sales and item reports'] },
        { label: 'Professional', title: 'For active restaurants', copy: 'Best for restaurants that need kitchen, tables, delivery, stock, and purchase control.', features: ['Everything in Starter', 'KOT and receipt printing', 'Tables and floor management', 'Inventory, suppliers, and purchases', 'Staff access permissions', 'Customer dues and settlement'] },
        { label: 'Restaurant Pro', title: 'For full operations', copy: 'Advanced management for outlets that track recipes, profit, salary, and stocktake.', features: ['Everything in Professional', 'Recipes and menu costing', 'Profit and loss reporting', 'Stocktake and corrections', 'Salaries, bonuses, deductions', 'Priority support'] }
      ]
    },
    salon: {
      name: 'Salon POS',
      shortName: 'Salon',
      plural: 'salons',
      title: 'POS packages for salons, spas, and beauty studios.',
      copy: 'Salon plans cover appointments, services, packages, staff commission, product sales, customer history, and dues.',
      plans: [
        { label: 'Salon Starter', title: 'For small salons', copy: 'Simple service billing, product sales, customer records, and daily reports.', features: ['Service and product billing', 'Customer profiles', 'Basic appointment notes', 'Cash/card payments', 'Daily sales reports'] },
        { label: 'Appointment Pro', title: 'For growing salons', copy: 'Appointment-led workflows with staff, packages, and customer balance control.', features: ['Everything in Starter', 'Appointments and bookings', 'Staff and service tracking', 'Packages and memberships', 'Customer dues and settlements'] },
        { label: 'Salon Pro', title: 'For full salon management', copy: 'Advanced salon control with inventory, commissions, and detailed performance reports.', features: ['Everything in Appointment Pro', 'Staff commissions', 'Product inventory', 'Supplier purchases', 'Expense and profit reports', 'Priority support'] }
      ]
    },
    mart: {
      name: 'Mart POS',
      shortName: 'Mart',
      plural: 'marts and retail stores',
      title: 'POS packages for marts, grocery stores, and retail shops.',
      copy: 'Mart plans focus on barcode billing, inventory, purchases, suppliers, cashier shifts, stock alerts, and margin reports.',
      plans: [
        { label: 'Retail Starter', title: 'For small shops', copy: 'Fast counter billing, product catalog, payment methods, and daily sales reports.', features: ['Product and category setup', 'Fast checkout billing', 'Cash/card payments', 'Basic stock quantities', 'Daily sales reports'] },
        { label: 'Inventory Pro', title: 'For grocery and marts', copy: 'Stronger stock control with suppliers, purchases, low-stock alerts, and cashier shifts.', features: ['Everything in Retail Starter', 'Barcode-ready workflows', 'Inventory and low stock alerts', 'Purchases and suppliers', 'Shift and cashier reports'] },
        { label: 'Multi-Counter', title: 'For busy retail counters', copy: 'Advanced retail controls for multiple counters, stock accountability, and reporting.', features: ['Everything in Inventory Pro', 'Multi-counter workflow', 'Stocktake and adjustments', 'Expense tracking', 'Profit and item reports', 'Priority support'] }
      ]
    },
    hotel: {
      name: 'Hotel POS',
      shortName: 'Hotel',
      plural: 'hotels and guest houses',
      title: 'POS packages for hotels, guest houses, and room-service operations.',
      copy: 'Hotel plans connect rooms, guest billing, service charges, restaurant POS, payments, and management reports.',
      plans: [
        { label: 'Front Desk Starter', title: 'For small guest houses', copy: 'Room and guest billing support with payments, notes, and daily summaries.', features: ['Guest profile records', 'Room billing workflow', 'Payments and dues', 'Daily front desk reports', 'Basic service charges'] },
        { label: 'Hotel Pro', title: 'For managed hotels', copy: 'Better control for room service, restaurant billing, staff access, and guest ledgers.', features: ['Everything in Starter', 'Room service billing', 'Guest ledger tracking', 'Staff access control', 'Expense and sales reports'] },
        { label: 'Hotel + Restaurant', title: 'For full property operations', copy: 'Combined hotel and restaurant workflows with inventory, kitchen, and reporting.', features: ['Everything in Hotel Pro', 'Restaurant POS and KOT', 'Inventory and purchases', 'Supplier tracking', 'Profit and loss reports', 'Priority support'] }
      ]
    },
    gamezone: {
      name: 'Game Zone POS',
      shortName: 'Game Zone',
      plural: 'game zones and entertainment centers',
      title: 'POS packages for game zones and entertainment centers.',
      copy: 'Game zone plans handle session billing, stations, packages, snack counters, customer balances, and daily reports.',
      plans: [
        { label: 'Session Starter', title: 'For small gaming setups', copy: 'Basic time/session billing, station records, payments, and daily reports.', features: ['Session billing', 'Station or console setup', 'Basic packages', 'Cash/card payments', 'Daily sales reports'] },
        { label: 'Game Zone Pro', title: 'For active game zones', copy: 'Control sessions, snack sales, staff users, customer balances, and package usage.', features: ['Everything in Starter', 'Multi-station workflow', 'Snack counter billing', 'Customer balances', 'Staff access control'] },
        { label: 'Multi-Station', title: 'For larger entertainment centers', copy: 'Advanced controls for busy centers with reporting, inventory, and multi-terminal use.', features: ['Everything in Pro', 'Inventory for snacks', 'Shift reports', 'Expense tracking', 'Profit reports', 'Priority support'] }
      ]
    },
    gym: {
      name: 'Gym POS',
      shortName: 'Gym',
      plural: 'gyms and fitness clubs',
      title: 'POS packages for gyms, fitness clubs, and membership businesses.',
      copy: 'Gym plans support memberships, renewals, attendance, trainers, dues, packages, product sales, and reports.',
      plans: [
        { label: 'Membership Starter', title: 'For small gyms', copy: 'Simple member records, package billing, payments, and renewal tracking.', features: ['Member profiles', 'Membership packages', 'Renewal billing', 'Cash/card payments', 'Daily sales reports'] },
        { label: 'Gym Pro', title: 'For growing fitness clubs', copy: 'Better control over attendance, trainers, dues, product sales, and reports.', features: ['Everything in Starter', 'Attendance tracking', 'Trainer assignment', 'Customer dues', 'Product sales'] },
        { label: 'Multi-Branch Gym', title: 'For larger gym operations', copy: 'Advanced membership, staff, inventory, expenses, and management reporting.', features: ['Everything in Gym Pro', 'Multi-branch planning', 'Inventory and purchases', 'Expense tracking', 'Profit reports', 'Priority support'] }
      ]
    }
  };

  const countrySelect = document.querySelector('[data-country-select]');
  const industrySelect = document.querySelector('[data-industry-select]');
  const params = new URLSearchParams(window.location.search);
  const requestedCountry = params.get('country');
  const requestedIndustry = params.get('industry');
  const savedCountry = requestedCountry || localStorage.getItem('germanPosCountry') || 'pk';
  const savedIndustry = requestedIndustry || localStorage.getItem('germanPosIndustry') || 'restaurant';
  const activeCountry = countries[savedCountry] ? savedCountry : 'pk';
  const activeIndustry = industries[savedIndustry] ? savedIndustry : 'restaurant';

  function renderFeatureList(list, features) {
    if (!list) return;
    list.innerHTML = '';
    features.forEach(feature => {
      const item = document.createElement('li');
      item.textContent = feature;
      list.appendChild(item);
    });
  }

  function applyPricing(countryKey, industryKey) {
    const country = countries[countryKey] || countries.pk;
    const industry = industries[industryKey] || industries.restaurant;
    const prices = country.prices[industryKey] || country.prices.restaurant;
    const eyebrow = document.querySelector('[data-pricing-eyebrow]');
    const title = document.querySelector('[data-pricing-title]');
    const copy = document.querySelector('[data-pricing-copy]');
    const note = document.querySelector('[data-pricing-note]');
    const enterprise = document.querySelector('[data-enterprise-price]');

    if (eyebrow) eyebrow.textContent = `${industry.name} pricing in ${country.currency}`;
    if (title) title.textContent = industry.title;
    if (copy) copy.textContent = `${industry.copy} Prices below are starter commercial rates for ${country.name}.`;
    if (note) note.textContent = `Prices are starter commercial rates for ${industry.plural} in ${country.name} and may change based on branch size, support level, compliance requirements, and hardware setup.`;
    if (enterprise) enterprise.textContent = 'Custom';

    document.querySelectorAll('[data-plan-index]').forEach(card => {
      const index = Number(card.getAttribute('data-plan-index'));
      const plan = industry.plans[index];
      if (!plan) return;
      const label = card.querySelector('[data-plan-label]');
      const heading = card.querySelector('[data-plan-heading]');
      const price = card.querySelector('[data-price-plan]');
      const planCopy = card.querySelector('[data-plan-copy]');
      const features = card.querySelector('[data-plan-features]');
      if (label) label.textContent = plan.label;
      if (heading) heading.textContent = plan.title;
      if (price) price.textContent = prices[index];
      if (planCopy) planCopy.textContent = plan.copy;
      renderFeatureList(features, plan.features);
    });

    const fiscal = document.querySelector('[data-addon-price="fiscal"]');
    const setup = document.querySelector('[data-addon-price="setup"]');
    const device = document.querySelector('[data-addon-price="device"]');
    if (fiscal) fiscal.textContent = country.compliance;
    if (setup) setup.textContent = country.setup;
    if (device) device.textContent = country.device;
  }

  function syncPricing() {
    const countryKey = countrySelect && countries[countrySelect.value] ? countrySelect.value : activeCountry;
    const industryKey = industrySelect && industries[industrySelect.value] ? industrySelect.value : activeIndustry;
    applyPricing(countryKey, industryKey);
  }

  if (countrySelect) {
    countrySelect.value = activeCountry;
    countrySelect.addEventListener('change', () => {
      const nextCountry = countries[countrySelect.value] ? countrySelect.value : 'pk';
      localStorage.setItem('germanPosCountry', nextCountry);
      syncPricing();
    });
  }

  if (industrySelect) {
    industrySelect.value = activeIndustry;
    industrySelect.addEventListener('change', () => {
      const nextIndustry = industries[industrySelect.value] ? industrySelect.value : 'restaurant';
      localStorage.setItem('germanPosIndustry', nextIndustry);
      syncPricing();
    });
  }

  syncPricing();

  const toggle = document.querySelector('[data-menu-toggle]');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
    });
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-industry-links a').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('is-active');
    }
  });

  const toast = document.createElement('div');
  toast.className = 'toast';
  document.body.appendChild(toast);

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove('is-visible'), 3200);
  }

  function openWhatsApp(message) {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
  }

  const whatsappButton = document.createElement('a');
  whatsappButton.className = 'whatsapp-float';
  whatsappButton.href = `https://wa.me/${whatsappNumber}`;
  whatsappButton.target = '_blank';
  whatsappButton.rel = 'noopener';
  whatsappButton.setAttribute('aria-label', `Chat with German POS on WhatsApp at ${displayPhone}`);
  whatsappButton.innerHTML = '<svg aria-hidden="true" viewBox="0 0 32 32" focusable="false"><path d="M16.04 3.2A12.7 12.7 0 0 0 5.2 22.5L3.6 28.8l6.45-1.55A12.72 12.72 0 1 0 16.04 3.2Zm0 2.35a10.35 10.35 0 1 1-5.3 19.24l-.42-.25-3.2.77.8-3.1-.28-.44A10.35 10.35 0 0 1 16.04 5.55Zm-4.5 4.7c-.23 0-.6.08-.92.45-.32.36-1.2 1.18-1.2 2.87s1.23 3.32 1.4 3.55c.17.23 2.38 3.8 5.9 5.18 2.92 1.15 3.52.92 4.15.86.64-.06 2.05-.84 2.34-1.65.29-.8.29-1.5.2-1.65-.08-.15-.31-.23-.65-.4-.34-.17-2.02-1-2.33-1.11-.31-.12-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.33-.2.23-.4.25-.74.08-.34-.17-1.43-.53-2.72-1.68-1-.9-1.68-2.02-1.88-2.36-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.08-.17-.77-1.85-1.05-2.54-.28-.66-.56-.57-.77-.58l-.66-.01Z"/></svg>';
  document.body.appendChild(whatsappButton);

  document.querySelectorAll('form[data-demo-form], form[data-contact-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const formType = form.matches('[data-demo-form]') ? 'Demo request' : 'Contact request';
      const fields = Array.from(new FormData(form).entries())
        .filter(([, value]) => String(value).trim())
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');
      openWhatsApp(`German POS ${formType}\n\n${fields}`);
      showToast(`Opening WhatsApp at ${displayPhone}.`);
      form.reset();
    });
  });
})();

const STORAGE_KEY_TRAFFIC = "steamstat_pl_traffic_dismissed";
const STORAGE_KEY_REGION = "steamstat_pl_selected_region";
const STORAGE_KEY_LANGUAGE = "gabenuar_language";
const STORAGE_KEY_CHART_MODE = "gabenuar_chart_mode";
const STORAGE_KEY_CUSTOM_SERVERS = "gabenuar_custom_servers";

const translations = {
  pl: {
    subtitle: "Globalny monitor serwerów Gabenowych",
    adminBtn: "⚙️ Tryb Admin",
    dismissBtn: "Rozumiem",
    mainServices: "Główne Usługi Steam",
    regionManagers: "Region / Connection Managers (CM)",
    onlyOutages: "Tylko awarie",
    toggleRegions: "Zwiń wszystko",
    steamActivity: "Aktywność Steam",
    playersOnline: "Gracze Online:",
    inGamePlayers: "W Grach (In-Game):",
    criticalState: "Stan Krytyczny (Rotacja)",
    chartTitle: "Aktywność Steam",
    chartCaptionPlayers: "% względne graczy w ostatnich 12 godzinach",
    chartCaptionPageviews: "% względnych odsłon w ostatnich 2 dniach",
    chartModePlayers: "Gracze",
    chartModePageviews: "Page Views",
    adminTitle: "🛠️ Panel Administratora (Tryb Admin)",
    selectRegionLabel: "Wymuś region szczegółowy:",
    trafficSimBtn: "⚡ Symuluj Gęsty Ruch (Pik)",
    outageSimBtn: "💥 Symuluj Awarię",
    resetBtn: "🗑️ Reset LocalStorage",
    incidentTitle: "📋 Wszystkie aktywne incydenty i błędy",
    allAlerts: "[Wszystkie 🔍]",
    syncLabel: "Sync:",
    trafficWarningTitle: "Wysokie natężenie ruchu (SteamStat.us):",
    trafficWarningText: "Wykryto napływ użytkowników na stronę – wysokie ryzyko opóźnień!",
    noIssues: "Brak aktywnych awarii w wybranym regionie.",
    autoRefresh: "Odświeżenie za:",
    simStatus: "SYMULACJA AKTYWNA:",
    trafficSim: "Gęsty ruch",
    outageSim: "Awaria",
    loading: "Ładowanie...",
    allAlertsTitle: "⚠️ Ostrzeżenie",
    visitsCounter: "visits: ładowanie...",
    visitsUnavailable: "visits: niedostępne",
    noIncidents: "Brak błędów do wyświetlenia.",
    chartLabelPlayers: "Gracze online",
    chartLabelPageviews: "Page views",
    customServersTitle: "Własne serwery",
    customServerNamePlaceholder: "Nazwa serwera",
    customServerHostPlaceholder: "https://example.com",
    customServerAddBtn: "Dodaj",
    noServers: "Brak serwerów",
    noServersHint: "Dodaj pierwszy serwer ręcznie",
    pingOk: "PING OK",
    pingBad: "PING BAD",
    deleteServer: "Usuń serwer",
    lastChecked: "Ostatnia kontrola"
  },
  en: {
    subtitle: "Global Steam server monitor",
    adminBtn: "⚙️ Admin Mode",
    dismissBtn: "Understood",
    mainServices: "Main Steam Services",
    regionManagers: "Region / Connection Managers (CM)",
    onlyOutages: "Outages only",
    toggleRegions: "Collapse all",
    steamActivity: "Steam Activity",
    playersOnline: "Players Online:",
    inGamePlayers: "In-Game Players:",
    criticalState: "Critical State (Rotation)",
    chartTitle: "Steam Activity",
    chartCaptionPlayers: "% relative players in the last 12 hours",
    chartCaptionPageviews: "% relative page views over the last 2 days",
    chartModePlayers: "Players",
    chartModePageviews: "Page Views",
    adminTitle: "🛠️ Administrator Panel (Admin Mode)",
    selectRegionLabel: "Force region detail:",
    trafficSimBtn: "⚡ Simulate High Traffic (Peak)",
    outageSimBtn: "💥 Simulate Outage",
    resetBtn: "🗑️ Reset LocalStorage",
    incidentTitle: "📋 All active incidents and errors",
    allAlerts: "[All 🔍]",
    syncLabel: "Sync:",
    trafficWarningTitle: "High traffic (SteamStat.us):",
    trafficWarningText: "User influx detected on the site – high delay risk!",
    noIssues: "No active issues in the selected region.",
    autoRefresh: "Refresh in:",
    simStatus: "SIMULATION ACTIVE:",
    trafficSim: "High traffic",
    outageSim: "Outage",
    loading: "Loading...",
    allAlertsTitle: "⚠️ Warning",
    visitsCounter: "visits: loading...",
    visitsUnavailable: "visits: unavailable",
    noIncidents: "No incidents to display.",
    chartLabelPlayers: "Players online",
    chartLabelPageviews: "Page views",
    customServersTitle: "Custom servers",
    customServerNamePlaceholder: "Server name",
    customServerHostPlaceholder: "https://example.com",
    customServerAddBtn: "Add",
    noServers: "No servers",
    noServersHint: "Add your first server manually",
    pingOk: "PING OK",
    pingBad: "PING BAD",
    deleteServer: "Delete server",
    lastChecked: "Last checked"
  }
};

const ALERTS = {
  pl: [
    { title: "⚠️ Opóźnienie Web API", text: "Steam Web API odpowiada wolniej (>800ms)." },
    { title: "🔴 Awaria Węzła Regionalnego", text: "Zgłoszono przeciążenie i wysokie pakiety dropów na wybranym serwerze." },
    { title: "⚡ Skok obciążenia skrytki", text: "Odnotowano wydłużony czas autoryzacji transakcji rynkowych." }
  ],
  en: [
    { title: "⚠️ Web API Latency", text: "Steam Web API is responding slower (>800ms)." },
    { title: "🔴 Regional Node Outage", text: "Overload and high drop packet volume reported on the selected server." },
    { title: "⚡ Vault Load Spike", text: "Extended transaction authorization time detected." }
  ]
};

const DEFAULT_DATA = {
  selectedRegion: "PL",
  language: "pl",
  chartMode: "players",
  customServers: [],
  services: [
    { id: "status-store", label: "Steam Store", subtitle: "Sklep", status: "normal", value: "Normal" },
    { id: "status-community", label: "Community", subtitle: "Społeczność", status: "normal", value: "Normal" },
    { id: "status-webapi", label: "Web API", subtitle: "API & Inwentarze", status: "normal", value: "Normal" },
    { id: "status-client", label: "Client Sessions", subtitle: "Autoryzacja", status: "normal", value: "Normal" }
  ],
  players: {
    online: "24.150.320",
    ingame: "7.840.100"
  },
  playerTrend: [24.1, 25.3, 25.9, 26.4, 27.1, 28.4],
  playerPeakTrend: [22.0, 23.5, 25.1, 27.8, 30.2, 29.7],
  pageviews: [62, 70, 84, 90, 112, 100],
  pageviewsPeak: [88, 96, 124, 142, 165, 150],
  alerts: ALERTS.pl,
  regions: [
    {
      id: "group-europe",
      title: "Europa (Europe / Selected Region)",
      items: [
        { code: "AMS", name: "Amsterdam", status: "OK", value: "OK", badge: "normal" },
        { code: "FSN", name: "Falkenstein", status: "N/A", value: "N/A", badge: "warn" },
        { code: "FRA", name: "Frankfurt", status: "OK", value: "OK", badge: "normal" },
        { code: "LHR", name: "London", status: "OK", value: "OK", badge: "normal" }
      ]
    },
    {
      id: "group-americas",
      title: "Americas",
      items: [
        { code: "ATL", name: "Atlanta", status: "OK", value: "Low load", badge: "normal" },
        { code: "ORD", name: "Chicago", status: "OK", value: "Low load", badge: "normal" },
        { code: "LIM", name: "Lima", status: "HIGH", value: "High load", badge: "warn" }
      ]
    },
    {
      id: "group-asia",
      title: "Asia",
      items: [
        { code: "TYO", name: "Tokyo", status: "OK", value: "OK", badge: "normal" },
        { code: "PEK", name: "Beijing", status: "N/A", value: "N/A", badge: "warn" }
      ]
    }
  ],
  regionDetails: {
    PL: [
      { code: "WAW", name: "Warszawa", status: "OK", value: "OK (15 Gbps)", badge: "normal" },
      { code: "KTW", name: "Katowice", status: "OK", value: "OK (10 Gbps)", badge: "normal" },
      { code: "POZ", name: "Poznań", status: "OK", value: "Low Latency", badge: "normal" }
    ],
    DE: [
      { code: "BER", name: "Berlin", status: "OK", value: "OK", badge: "normal" },
      { code: "MUC", name: "Monachium", status: "OK", value: "OK", badge: "normal" }
    ],
    US: [
      { code: "NYC", name: "New York", status: "OK", value: "OK", badge: "normal" },
      { code: "LAX", name: "Los Angeles", status: "OK", value: "OK", badge: "normal" }
    ]
  }
};

let state = {
  ...DEFAULT_DATA,
  selectedRegion: localStorage.getItem(STORAGE_KEY_REGION) || DEFAULT_DATA.selectedRegion,
  language: localStorage.getItem(STORAGE_KEY_LANGUAGE) || detectDefaultLanguage(),
  chartMode: localStorage.getItem(STORAGE_KEY_CHART_MODE) || "players",
  customServers: JSON.parse(localStorage.getItem(STORAGE_KEY_CUSTOM_SERVERS) || "[]")
};

let isHighTraffic = false;
let isOutage = false;
let currentAlert = 0;
let countdown = 5;
let lastSyncTime = "--:--:--";
let viewsChart = null;

function detectDefaultLanguage() {
  const lang = (navigator.language || navigator.userLanguage || "pl").toLowerCase();
  return lang.startsWith("en") ? "en" : "pl";
}

function getCurrentAlerts() {
  return ALERTS[state.language] || ALERTS.pl;
}

function normalizeServerHost(host) {
  if (!host) return "";
  let value = String(host).trim();
  if (!/^https?:\/\//i.test(value)) {
    value = "https://" + value;
  }
  return value;
}

function getDefaultCustomServerState() {
  return {
    id: crypto.randomUUID ? crypto.randomUUID() : `srv-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: "",
    host: "",
    status: "bad",
    ping: 999,
    lastChecked: null
  };
}

function saveCustomServers() {
  localStorage.setItem(STORAGE_KEY_CUSTOM_SERVERS, JSON.stringify(state.customServers));
}

async function probeServerLatency(server) {
  const host = normalizeServerHost(server.host);
  const started = performance.now();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 2500);

  try {
    await fetch(host, {
      method: "GET",
      cache: "no-store",
      mode: "cors",
      signal: controller.signal
    });

    const ping = Math.max(10, Math.round(performance.now() - started));
    return {
      ...server,
      host,
      ping,
      status: ping <= 150 ? "ok" : "bad",
      lastChecked: new Date().toISOString()
    };
  } catch (error) {
    return {
      ...server,
      host,
      ping: 999,
      status: "bad",
      lastChecked: new Date().toISOString()
    };
  } finally {
    clearTimeout(timer);
  }
}

function renderCustomServers() {
  const list = document.getElementById("custom-servers-list");
  if (!list) return;

  const servers = state.customServers || [];

  if (!servers.length) {
    const t = translations[state.language];
    list.innerHTML = `
      <div class="custom-server-item">
        <div class="custom-server-name">${t.noServers}</div>
        <div class="custom-server-host">${t.noServersHint}</div>
        <div class="server-ping bad"><span class="dot"></span>${t.pingBad}</div>
        <div class="server-latency">--</div>
        <div></div>
      </div>
    `;
    return;
  }

  list.innerHTML = servers.map((server) => {
    const statusLabel = server.status === "ok" ? translations[state.language].pingOk : translations[state.language].pingBad;
    const latencyLabel = server.ping >= 999 ? "timeout" : `${server.ping} ms`;
    return `
      <div class="custom-server-item" data-server-id="${server.id}">
        <div class="custom-server-name">${server.name}</div>
        <div class="custom-server-host">${server.host}</div>
        <div class="server-ping ${server.status === "ok" ? "ok" : "bad"}">
          <span class="dot"></span>${statusLabel}
        </div>
        <div class="server-latency">${latencyLabel}</div>
        <button class="server-delete" data-delete-id="${server.id}" title="${translations[state.language].deleteServer}">✕</button>
      </div>
    `;
  }).join("");
}

async function refreshCustomServers() {
  if (!state.customServers || !state.customServers.length) {
    renderCustomServers();
    return;
  }

  const refreshed = [];
  for (const server of state.customServers) {
    refreshed.push(await probeServerLatency(server));
  }

  state.customServers = refreshed;
  saveCustomServers();
  renderCustomServers();
}

function getChartSeries() {
  const t = translations[state.language];

  if (state.chartMode === "players") {
    return {
      labels: ["-12h", "-10h", "-8h", "-6h", "-4h", "Now"],
      values: isHighTraffic ? state.playerPeakTrend : state.playerTrend,
      label: t.chartLabelPlayers
    };
  }

  return {
    labels: ["-10m", "-8m", "-6m", "-4m", "-2m", "Teraz"],
    values: isHighTraffic ? state.pageviewsPeak : state.pageviews,
    label: t.chartLabelPageviews
  };
}

function renderChart() {
  const ctx = document.getElementById("viewsChart")?.getContext("2d");
  if (!ctx) return;

  const series = getChartSeries();

  if (!viewsChart) {
    viewsChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: series.labels,
        datasets: [{
          label: series.label,
          data: series.values,
          borderColor: "#66c0f4",
          backgroundColor: "rgba(102, 192, 244, 0.1)",
          fill: true,
          tension: 0.3,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            grid: { color: "#2a475e" },
            ticks: {
              color: "#8f98a0",
              font: { size: 10 },
              callback: (value) => {
                if (state.chartMode === "players") {
                  return `${Number(value).toFixed(1)}M`;
                }
                return `${value}%`;
              }
            }
          },
          x: {
            grid: { display: false },
            ticks: { color: "#8f98a0", font: { size: 10 } }
          }
        }
      }
    });
    return;
  }

  viewsChart.data.labels = series.labels;
  viewsChart.data.datasets[0].label = series.label;
  viewsChart.data.datasets[0].data = series.values;
  viewsChart.update();
}

function applyLanguage() {
  const t = translations[state.language];
  if (!t) return;

  document.documentElement.lang = state.language;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (t[key]) {
      node.textContent = t[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (t[key]) {
      node.placeholder = t[key];
    }
  });

  const langToggle = document.getElementById("language-toggle");
  if (langToggle) {
    langToggle.textContent = state.language === "pl" ? "PL / EN" : "EN / PL";
  }

  const chartSelect = document.getElementById("chart-mode-select");
  if (chartSelect) {
    chartSelect.value = state.chartMode;
  }

  const simText = document.getElementById("sim-status-text");
  if (simText) simText.textContent = `${t.simStatus}`;

  const warning = document.getElementById("traffic-warning");
  if (warning) {
    const title = warning.querySelector("strong");
    if (title) title.textContent = t.trafficWarningTitle;
    const body = warning.querySelector("span > span");
    if (body) body.textContent = t.trafficWarningText;
  }

  const chartCaption = document.getElementById("chart-caption");
  if (chartCaption) {
    chartCaption.textContent =
      state.chartMode === "players" ? t.chartCaptionPlayers : t.chartCaptionPageviews;
  }

  const visitsCounter = document.getElementById("visits-counter");
  if (visitsCounter && visitsCounter.textContent.includes("visits")) {
    visitsCounter.textContent = t.visitsCounter;
  }

  updateChartCaption();
  renderChart();
  rotateAlerts();
  renderCustomServers();
}

async function loadStatus() {
  try {
    const response = await fetch("./data/status.json", { cache: "no-store" });
    if (!response.ok) throw new Error("status.json missing");
    const json = await response.json();

    state = {
      ...DEFAULT_DATA,
      ...json,
      selectedRegion: localStorage.getItem(STORAGE_KEY_REGION) || json.selectedRegion || DEFAULT_DATA.selectedRegion,
      language: localStorage.getItem(STORAGE_KEY_LANGUAGE) || detectDefaultLanguage(),
      chartMode: localStorage.getItem(STORAGE_KEY_CHART_MODE) || "players",
      customServers: JSON.parse(localStorage.getItem(STORAGE_KEY_CUSTOM_SERVERS) || "[]")
    };
  } catch (error) {
    state = {
      ...DEFAULT_DATA,
      selectedRegion: localStorage.getItem(STORAGE_KEY_REGION) || DEFAULT_DATA.selectedRegion,
      language: localStorage.getItem(STORAGE_KEY_LANGUAGE) || detectDefaultLanguage(),
      chartMode: localStorage.getItem(STORAGE_KEY_CHART_MODE) || "players",
      customServers: JSON.parse(localStorage.getItem(STORAGE_KEY_CUSTOM_SERVERS) || "[]")
    };
    console.warn("Using fallback mock data:", error);
  }

  init();
}

function detectDefaultRegion() {
  const existing = localStorage.getItem(STORAGE_KEY_REGION);
  if (existing) return existing;

  const lang = (navigator.language || navigator.userLanguage || "pl").toLowerCase();
  if (lang.startsWith("de")) return "DE";
  if (lang.startsWith("en-us") || lang.startsWith("en")) return "US";
  return "PL";
}

function init() {
  state.language = localStorage.getItem(STORAGE_KEY_LANGUAGE) || state.language;
  state.chartMode = localStorage.getItem(STORAGE_KEY_CHART_MODE) || state.chartMode;
  state.selectedRegion = localStorage.getItem(STORAGE_KEY_REGION) || detectDefaultRegion();
  localStorage.setItem(STORAGE_KEY_REGION, state.selectedRegion);
  localStorage.setItem(STORAGE_KEY_LANGUAGE, state.language);
  localStorage.setItem(STORAGE_KEY_CHART_MODE, state.chartMode);

  const select = document.getElementById("select-region");
  if (select) select.value = state.selectedRegion;

  renderServices();
  renderRegions();
  renderChart();

  const dismissed = localStorage.getItem(STORAGE_KEY_TRAFFIC);
  if (dismissed === "true" && isHighTraffic) {
    const warning = document.getElementById("traffic-warning");
    if (warning) warning.classList.add("hidden");
  }

  applyLanguage();

  const dismissBtn = document.getElementById("dismiss-btn");
  if (dismissBtn) {
    dismissBtn.addEventListener("click", () => {
      localStorage.setItem(STORAGE_KEY_TRAFFIC, "true");
      const warning = document.getElementById("traffic-warning");
      if (warning) warning.classList.add("hidden");
    });
  }

  const adminModal = document.getElementById("admin-modal");
  const openAdminBtn = document.getElementById("open-admin-btn");
  const closeAdminBtn = document.getElementById("close-admin-btn");

  if (openAdminBtn && adminModal) {
    openAdminBtn.addEventListener("click", () => {
      adminModal.classList.add("active");
    });
  }

  if (closeAdminBtn && adminModal) {
    closeAdminBtn.addEventListener("click", () => {
      adminModal.classList.remove("active");
    });
  }

  if (adminModal) {
    adminModal.addEventListener("click", (event) => {
      if (event.target === adminModal) adminModal.classList.remove("active");
    });
  }

  if (select) {
    select.addEventListener("change", (event) => {
      state.selectedRegion = event.target.value;
      localStorage.setItem(STORAGE_KEY_REGION, state.selectedRegion);
      renderRegions();
      renderDynamicRegionDetails();
      updateData();
    });
  }

  const adminTrafficBtn = document.getElementById("admin-traffic-btn");
  if (adminTrafficBtn) {
    adminTrafficBtn.addEventListener("click", () => {
      isHighTraffic = !isHighTraffic;
      localStorage.removeItem(STORAGE_KEY_TRAFFIC);
      updateData();
    });
  }

  const adminOutageBtn = document.getElementById("admin-outage-btn");
  if (adminOutageBtn) {
    adminOutageBtn.addEventListener("click", () => {
      isOutage = !isOutage;
      updateData();
    });
  }

  const adminResetBtn = document.getElementById("admin-reset-btn");
  if (adminResetBtn) {
    adminResetBtn.addEventListener("click", () => {
      localStorage.clear();
      location.reload();
    });
  }

  const filterOutagesOnly = document.getElementById("filter-outages-only");
  if (filterOutagesOnly) {
    filterOutagesOnly.addEventListener("change", (event) => {
      const showOnlyOutages = event.target.checked;
      document.querySelectorAll(".region-row").forEach((row) => {
        const status = row.getAttribute("data-status");
        row.classList.toggle("hidden-by-filter", showOnlyOutages && status === "OK");
      });
    });
  }

  const modal = document.getElementById("incidents-modal");
  const rotatingBox = document.getElementById("rotating-box");
  const closeIncidentsBtn = document.getElementById("close-incidents-btn");

  if (rotatingBox) {
    rotatingBox.addEventListener("click", () => {
      if (!isOutage && !isHighTraffic) return;
      populateModalIncidents();
      if (modal) modal.classList.add("active");
    });
  }

  if (closeIncidentsBtn && modal) {
    closeIncidentsBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }

  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) modal.classList.remove("active");
    });
  }

  const toggleAllRegionsBtn = document.getElementById("toggle-all-regions");
  if (toggleAllRegionsBtn) {
    toggleAllRegionsBtn.addEventListener("click", () => {
      const lists = document.querySelectorAll(".region-list");
      if (!lists.length) return;

      const firstHidden = lists[0].style.display === "none";
      lists.forEach((list) => {
        list.style.display = firstHidden ? "flex" : "none";
      });
    });
  }

  const languageToggle = document.getElementById("language-toggle");
  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      state.language = state.language === "pl" ? "en" : "pl";
      localStorage.setItem(STORAGE_KEY_LANGUAGE, state.language);
      applyLanguage();
    });
  }

  const chartSelect = document.getElementById("chart-mode-select");
  if (chartSelect) {
    chartSelect.addEventListener("change", (event) => {
      state.chartMode = event.target.value;
      localStorage.setItem(STORAGE_KEY_CHART_MODE, state.chartMode);
      renderChart();
      updateChartCaption();
    });
  }

  const customForm = document.getElementById("custom-server-form");
  if (customForm) {
    customForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const nameInput = document.getElementById("custom-server-name");
      const hostInput = document.getElementById("custom-server-host");

      if (!nameInput || !hostInput) return;

      const name = nameInput.value.trim();
      const host = normalizeServerHost(hostInput.value);

      if (!name || !host) return;

      const newServer = {
        ...getDefaultCustomServerState(),
        name,
        host,
        status: "bad",
        ping: 999
      };

      state.customServers = [...(state.customServers || []), newServer];
      saveCustomServers();

      nameInput.value = "";
      hostInput.value = "";

      await refreshCustomServers();
    });
  }

  const customList = document.getElementById("custom-servers-list");
  if (customList) {
    customList.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-delete-id]");
      if (!btn) return;

      const id = btn.dataset.deleteId;
      state.customServers = (state.customServers || []).filter((server) => server.id !== id);
      saveCustomServers();
      renderCustomServers();
    });
  }

  renderDynamicRegionDetails();
  renderCustomServers();
  refreshCustomServers();

  setInterval(tickTimer, 1000);
  setInterval(rotateAlerts, 5000);
  setInterval(() => {
    refreshCustomServers();
  }, 20000);
}

function renderServices() {
  const container = document.getElementById("services-grid");
  if (!container) return;

  container.innerHTML = state.services.map((service) => `
    <div class="status-card">
      <div class="status-info">
        <h4>${service.label}</h4>
        <p>${service.subtitle}</p>
      </div>
      <div class="status-indicator ${service.status}" id="${service.id}">
        <span class="dot"></span>
        <span>${service.value}</span>
      </div>
    </div>
  `).join("");
}

function renderRegions() {
  const container = document.getElementById("regions-container");
  if (!container) return;

  const groups = state.regions || [];

  container.innerHTML = groups.map((group) => `
    <div class="region-group">
      <div class="region-group-title" onclick="toggleRegionGroup('${group.id}')">
        <span>${group.title}</span>
        <span>▼</span>
      </div>
      <div class="region-list" id="${group.id}">
        ${group.items.map((item) => {
          const isSelected =
            item.regionTag && item.regionTag === state.selectedRegion;

          return `
            <div
              class="region-row ${isSelected ? "selected-region" : ""}"
              data-status="${item.status}"
              data-region-tag="${item.regionTag || ""}"
            >
              <div class="region-name">
                <span class="region-code">${getFlagForCode(item.code)}</span>
                <span>${item.code}</span>
                <span>${item.name}</span>
              </div>
              <div class="status-indicator ${item.badge}">
                <span class="dot"></span>
                <span>${item.value}</span>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `).join("");
}

function renderDynamicRegionDetails() {
  const regionList = document.getElementById("group-europe");
  if (!regionList) return;

  const details = state.regionDetails?.[state.selectedRegion] || state.regionDetails?.PL || [];

  let target = document.getElementById("dynamic-local-nodes");
  if (!target) {
    target = document.createElement("div");
    target.id = "dynamic-local-nodes";
    target.style.cssText = "display:flex; flex-direction:column; gap:6px; margin-top:8px;";
    regionList.appendChild(target);
  }

  target.innerHTML = details.map((node) => `
    <div class="region-row selected-region" data-status="${node.status}">
      <div class="region-name">
        <span class="region-code">${getFlagForCode(node.code)}</span>
        <span>${node.code}</span>
        <span>${node.name}</span>
      </div>
      <div class="status-indicator ${node.badge}">
        <span class="dot"></span>
        <span>${node.value}</span>
      </div>
    </div>
  `).join("");
}

function getFlagForCode(code) {
  const map = {
    AMS: "🇳🇱",
    FSN: "🇩🇪",
    FRA: "🇩🇪",
    LHR: "🇬🇧",
    ATL: "🇺🇸",
    ORD: "🇺🇸",
    LIM: "🇵🇪",
    TYO: "🇯🇵",
    PEK: "🇨🇳",
    WAW: "🇵🇱",
    KTW: "🇵🇱",
    POZ: "🇵🇱",
    BER: "🇩🇪",
    MUC: "🇩🇪",
    NYC: "🇺🇸",
    LAX: "🇺🇸"
  };
  return map[code] || "🌐";
}

function updateChartCaption() {
  const caption = document.getElementById("chart-caption");
  if (!caption) return;

  const t = translations[state.language];
  caption.textContent =
    state.chartMode === "players" ? t.chartCaptionPlayers : t.chartCaptionPageviews;
}

function tickTimer() {
  countdown -= 1;
  if (countdown <= 0) {
    updateData();
    countdown = 5;
  }

  const timerBadge = document.getElementById("timer-badge");
  if (timerBadge) {
    const t = translations[state.language];
    timerBadge.innerText = `🔄 ${t.autoRefresh} ${countdown}s`;
  }
}

function updateData() {
  const now = new Date();
  lastSyncTime = now.toLocaleTimeString();
  const lastUpdateEl = document.getElementById("last-update");
  if (lastUpdateEl) {
    lastUpdateEl.innerText = translations[state.language].syncLabel + " " + lastSyncTime;
  }

  const warningBox = document.getElementById("traffic-warning");
  const dismissed = localStorage.getItem(STORAGE_KEY_TRAFFIC);

  if (warningBox) {
    if (isHighTraffic) {
      warningBox.classList.toggle("hidden", dismissed === "true");
    } else {
      warningBox.classList.add("hidden");
    }
  }

  if (isOutage) {
    const playersOnline = document.getElementById("players-online");
    const playersIngame = document.getElementById("players-ingame");
    if (playersOnline) playersOnline.innerText = "12.400.100";
    if (playersIngame) playersIngame.innerText = "3.100.000";

    setStatus("status-store", "error", "Down");
    setStatus("status-community", "error", "Error 502");
    setStatus("status-webapi", "error", "Timeout");
    setStatus("status-client", "warn", "Degraded");
  } else {
    const playersOnline = document.getElementById("players-online");
    const playersIngame = document.getElementById("players-ingame");
    if (playersOnline) playersOnline.innerText = state.players?.online || "24.150.320";
    if (playersIngame) playersIngame.innerText = state.players?.ingame || "7.840.100";

    setStatus("status-store", "normal", "Normal");
    setStatus("status-community", "normal", "Normal");
    setStatus("status-webapi", "normal", "Normal");
    setStatus("status-client", "normal", "Normal");
  }

  const simBar = document.getElementById("sim-status-bar");
  const simDetail = document.getElementById("sim-status-detail");

  const active = [];
  if (isHighTraffic) active.push(translations[state.language].trafficSim);
  if (isOutage) active.push(translations[state.language].outageSim);

  if (simBar && simDetail) {
    if (active.length > 0) {
      simDetail.innerHTML = active
        .map((item) => `<span class="${item === translations[state.language].outageSim ? "danger" : ""}">${item}</span>`)
        .join(" • ");
      simBar.classList.remove("hidden");
    } else {
      simBar.classList.add("hidden");
    }
  }

  updateChartCaption();
  renderChart();
  rotateAlerts();
}

function setStatus(id, stateClass, text) {
  const el = document.getElementById(id);
  if (!el) return;

  el.className = `status-indicator ${stateClass}`;
  el.innerHTML = `<span class="dot"></span><span>${text}</span>`;
}

function rotateAlerts() {
  const box = document.getElementById("rotating-box");
  const header = document.getElementById("rot-header");
  const text = document.getElementById("rot-content");
  if (!box || !header || !text) return;

  const t = translations[state.language];

  if (!isOutage && !isHighTraffic) {
    box.className = "rotating-alert empty";
    header.innerHTML = `<span>✅ ${state.language === "pl" ? "Wszystko w porządku" : "Everything is fine"}</span>`;
    text.innerText = t.noIssues;
    return;
  }

  box.className = "rotating-alert";

  if (isOutage) {
    header.innerHTML = `<span>💥 ${state.language === "pl" ? "AWARIA KRYTYCZNA" : "CRITICAL OUTAGE"}</span><span class="link-like">${t.allAlerts}</span>`;
    text.innerText = state.language === "pl"
      ? "Wykryto masowy spadek odpowiedzi z serwerów głównych."
      : "Massive response drop detected from the main servers.";
  } else {
    const alertItem = (getCurrentAlerts()[currentAlert]) || ALERTS.pl[currentAlert];
    header.innerHTML = `<span>${alertItem.title}</span><span class="link-like">${t.allAlerts}</span>`;
    text.innerText = alertItem.text;
    currentAlert = (currentAlert + 1) % getCurrentAlerts().length;
  }
}

function populateModalIncidents() {
  const container = document.getElementById("modal-incident-container");
  if (!container) return;

  container.innerHTML = "";
  const activeList = [];

  if (isOutage) {
    activeList.push({
      title: state.language === "pl" ? "💥 AWARIA KRYTYCZNA BRAMEK" : "💥 CRITICAL GATEWAY OUTAGE",
      text: state.language === "pl"
        ? "Utrata połączenia z głównymi węzłami w regionie."
        : "Loss of connection to the main regional nodes."
    });

    activeList.push({
      title: "🔴 Steam Web API Timeout",
      text: state.language === "pl"
        ? "Brak odpowiedzi z endpointów autoryzacyjnych."
        : "No response from authorization endpoints."
    });
  }

  if (isHighTraffic) {
    activeList.push({
      title: state.language === "pl" ? "⚠️ Gęsty ruch na stronie (SteamStat.us)" : "⚠️ Heavy traffic on the site (SteamStat.us)",
      text: state.language === "pl"
        ? "Wskaźnik względny przekroczył próg krytyczny, co sugeruje masowe problemy."
        : "Relative traffic crossed the critical threshold, suggesting widespread issues."
    });
    activeList.push(...(getCurrentAlerts()));
  }

  if (activeList.length === 0) {
    container.innerHTML = `<p style="color: var(--ok-color); text-align: center; padding: 20px;">${translations[state.language].noIncidents}</p>`;
    return;
  }

  activeList.forEach((incident) => {
    const item = document.createElement("div");
    item.className = "incident-item";
    item.innerHTML = `
      <h4>${incident.title}</h4>
      <p>${incident.text}</p>
      <span class="incident-time">${state.language === "pl" ? "Ostatnia synchronizacja:" : "Last sync:"} ${lastSyncTime}</span>
    `;
    container.appendChild(item);
  });
}

function toggleRegionGroup(groupId) {
  const el = document.getElementById(groupId);
  if (el) {
    el.style.display = el.style.display === "none" ? "flex" : "none";
  }
}

window.addEventListener("DOMContentLoaded", loadStatus);
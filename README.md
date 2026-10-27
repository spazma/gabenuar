# 🎮 Gabenuar

<div align="center">
  <img src="https://github.com/user-attachments/assets/e76fc56b-fc68-44fb-b342-887a9ccb03ae" alt="6xQfFvsyR09" width="600" />
</div>

🇵🇱 [Polski](#polski) | 🇬🇧 [English](#english)

---

<a id="polski"></a>
# 🇵🇱 Gabenuar

> **Gabenuar** to lekki, nowoczesny dashboard monitorujący stan głównych usług Steam oraz regionów sieci, zainspirowany popularnymi stronami statusu w stylu *SteamStat.us*. 

Projekt prezentuje aktualny stan usług, powiadomienia, aktywność graczy oraz symulacje scenariuszy awarii w prostym, czytelnym interfejsie. Działa w pełni jako strona statyczna i może być bez problemu publikowany np. na **GitHub Pages**.

---

### ✨ Główne funkcje

* 🟢 **Monitorowanie usług** – pokazuje bieżący status głównych komponentów Steam.
* 🌍 **Sieć i regiony** – śledzi stan regionów oraz serwerów Connection Managers (CM).
* 🚨 **Alerty w czasie rzeczywistym** – wyświetla aktywne ostrzeżenia i komunikaty o błędach.
* 📈 **Statystyki aktywności** – prezentuje wykresy/dane dotyczące graczy oraz odsłon strony.
* 🛠️ **Panel administracyjny / Symulacje** – umożliwia testowanie zachowania aplikacji w warunkach:
  * Wysokiego ruchu (Traffic Spike)
  * Awarii systemowych (Outage)
  * Resetu ustawień
* 🌐 **Wielojęzyczność** – pełne wsparcie dla języka polskiego i angielskiego (PL / EN).
* 💾 **Lokalna pamięć** – zapisuje ustawienia użytkownika w przeglądarce (`LocalStorage`).

---

### 📂 Struktura projektu

* 📄 `index.html` – główna struktura strony i interfejsu
* 🎨 `styles.css` – nowoczesny układ i stylizacja (CSS)
* ⚡ `app.js` – logika aplikacji, obsługa zdarzeń i mock dane
* 📊 `data/status.json` – domyślne dane startowe statusu usług
* 📜 `LICENSE` – licencja projektu (MIT)

---

### 📝 Licencja

Ten projekt jest objęty licencją **MIT**. Szczegóły znajdziesz w pliku [LICENSE](LICENSE).

---
---

<a id="english"></a>
# 🇬🇧 Gabenuar

> **Gabenuar** is a modern dashboard for monitoring the status of major Steam services and network regions, inspired by *SteamStat.us*-style status pages.

The project presents service states, alerts, player activity, and outage simulation scenarios in a clean, readable interface. It runs entirely as a static page and can be easily published on **GitHub Pages**.

---

### ✨ Key Features

* 🟢 **Service Monitoring** – Displays the operational status of major Steam services.
* 🌍 **Regions & Network** – Monitors network regions and Connection Managers (CM).
* 🚨 **Active Alerts** – Shows real-time warnings and important notifications.
* 📈 **Activity Tracking** – Displays player activity and page views.
* 🛠️ **Admin & Simulation Mode** – Allows testing system reactions to:
  * Heavy traffic spikes
  * System outages
  * Settings resets
* 🌐 **Localization** – Built-in support for PL / EN languages.
* 💾 **Local Storage** – Saves user preferences securely in the browser (`LocalStorage`).

---

### 📂 Project Structure

* 📄 `index.html` – Main page structure and UI
* 🎨 `styles.css` – Layout and styling (CSS)
* ⚡ `app.js` – Application logic, interactivity, and mock data
* 📊 `data/status.json` – Startup status dataset
* 📜 `LICENSE` – MIT License file

---

### 📝 License

This project is open-source and available under the **MIT License**.

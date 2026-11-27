const featured = [
  { name: "Senja di Kota", date: "12 Desember 2026", venue: "Jakarta", price: "Rp350.000", style: "poster-one", label: "SENJA / LIVE" },
  { name: "Ruang Suara Festival", date: "19 Desember 2026", venue: "Bandung", price: "Rp280.000", style: "poster-two", label: "RUANG / SUARA" },
  { name: "Nada Setelah Hujan", date: "9 Januari 2027", venue: "Yogyakarta", price: "Rp225.000", style: "poster-three", label: "NADA / MALAM" },
];
document.querySelectorAll("[data-user-events]").forEach((container) => {
  container.innerHTML = featured.map((event) => `<article class="event-card">
    <div class="event-poster ${event.style}" role="img" aria-label="Poster ilustratif ${event.name}"><strong>${event.label}</strong></div>
    <div class="event-info"><h3>${event.name}</h3><p class="event-meta">${event.date}</p><p class="event-meta">${event.venue}</p><p class="event-price">${event.price} / tiket</p></div>
  </article>`).join("");
});

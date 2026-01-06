const products = [
  {
    id: 1,
    title: "Field Day",
    location: "Marondera",
    img: "images/tree3.jpeg",
    desc: "Farm Tree Planting day done every year."
  },
  {
    id: 2,
    title: "Reclassification",
    location: "Harare HQ",
    img: "images/recl1.jpeg",
    desc: "For best blending and grading a proper reclassification is carried out on regular intervals"
  },
  {
    id: 3,
    title: "Green Leaf",
    location: "Harare HQ",
    img: "images/leaf.jpg",
    desc: "Green Tobacco ready for processing"
  },
  {
    id: 4,
    title: "NLT Team",
    location: "Harare HQ",
    img: "images/nltteam.jpg",
    desc: "We have highly trained and vibrant Leaf Technicians"
  },
  {
    id: 5,
    title: "WTA2025",
    location: "Rainbow Towers",
    img: "images/wta3.jpg",
    desc: " World Tobacco Africa being held at The Rainbow Towers Hotel and ICC"
  },
  {
    id: 6,
    title: "Harare Offices",
    location: "Harare",
    img: "images/nlt4.jpg",
    desc: "Our Offices are situated at 92/97 Plymouth Rd, Southerton"
  },
  {
    id: 7,
    title: "Sample Room",
    location: "Samples",
    img: "images/classs.jpg",
    desc: "Our well structured sample room"
  },
  {
    id: 8,
    title: "Bundle",
    location: "Harare",
    img: "images/process5.jpg",
    desc: "Flue-cured tobacco is globally recognized for exceptional quality"
  }
];

const gallery = document.getElementById("gallery");

// Render product cards dynamically
products.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${product.img}" alt="">
    <h3>${product.title}</h3>
    <p>${product.location}</p>
    <button onclick="openModal(${product.id})">View Details</button>
  `;

  gallery.appendChild(card);
});

// Modal Function
function openModal(id) {
  const p = products.find(x => x.id === id);

  // Create modal dynamically
  const modal = document.createElement("div");
  modal.classList.add("modal-bg");

  modal.innerHTML = `
    <div class="modal-box">
      <span class="close-btn" onclick="closeModal(this)">&times;</span>
      <img src="${p.img}" alt="">
      <h2>${p.title}</h2>
      <p>${p.desc}</p>
    </div>
  `;

  // Close when clicking outside modal
  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-bg")) {
      modal.remove();
    }
  });

  document.body.appendChild(modal);
}

function closeModal(btn) {
  btn.parentElement.parentElement.remove();
}

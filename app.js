// Agrupa tus endpoints por Proyectos o Módulos (Colecciones)
const colecciones = [
  {
    nombreProyecto: "KEOPS",
    endpoints: [
      { titulo: "Lista de articulos pendientes", metodo: "GET", archivo: "KEOPS/01-lista-articulos-pendientes.md" },
      { titulo: "Lista de articulos pendientes equipo", metodo: "GET", archivo: "KEOPS/01-lista-articulos-pendientes-equipo.md" },
      { titulo: "Lista de articulos", metodo: "GET", archivo: "KEOPS/02-lista-articulos.md" },
      { titulo: "Lista de articulos equipo", metodo: "GET", archivo: "KEOPS/02-lista-articulos-equipo.md" },
      { titulo: "Lista de transacciones", metodo: "GET", archivo: "KEOPS/03-lista-transacciones.md" },
      { titulo: "Lista de transacciones equipo", metodo: "GET", archivo: "KEOPS/03-lista-transacciones-equipo.md" },
      { titulo: "Gastos viaticos", metodo: "GET", archivo: "KEOPS/04-gastos-viaticos.md" },
      { titulo: "Lista de coincidencia productos Cifrado", metodo: "GET", archivo: "KEOPS/05-lista-coincidencia-producto.md" },
      { titulo: "Ventas Netas", metodo: "GET", archivo: "KEOPS/06-ventas-netas.md" },
      { titulo: "Ventas EP", metodo: "GET", archivo: "KEOPS/06-ventas-EP.md" },
      { titulo: "Items General", metodo: "GET", archivo: "KEOPS/07-items-fracttal.md" },
      { titulo: "Lista de productos por nombre | AURA", metodo: "GET", archivo: "KEOPS/08-lista-productos-nombre.md" },
      { titulo: "Lista de productos por codArticulo | AURA", metodo: "GET", archivo: "KEOPS/08-lista-productos-codigoArticulo.md" },
      { titulo: "Producto por codArticulo | AURA", metodo: "GET", archivo: "KEOPS/09-producto-codigoArticulo.md" },
      { titulo: "Calificación del cliente | AURA", metodo: "GET", archivo: "KEOPS/10-calificacion-cliente.md" },
      { titulo: "Consultar activo | AURA", metodo: "GET", archivo: "KEOPS/11-consultar-activo.md" },
      { titulo: "Ultimas ventas | AURA", metodo: "GET", archivo: "KEOPS/12-ultimas-ventas.md" },
      { titulo: "Estado financiero | AURA", metodo: "GET", archivo: "KEOPS/12-estado-financiero.md" },
      { titulo: "Pendientes por facturar | AURA", metodo: "GET", archivo: "KEOPS/13-pendientes-facturar.md" }
    ]
  },
  {
    nombreProyecto: "Módulo de Inventario",
    endpoints: [
      { titulo: "Listar Productos", metodo: "GET", archivo: "05-productos-get.md" }
    ]
  }
];

const menuUl = document.getElementById("menu");
const visorContent = document.getElementById("documento-content");
const breadcrumb = document.getElementById("doc-breadcrumb");

// Cargar el archivo Markdown
async function cargarMarkdown(item, elementoEnlace, nombreModulo) {
  try {
    const res = await fetch(item.archivo);
    if (!res.ok) throw new Error();
    const markdownText = await res.text();

    visorContent.innerHTML = marked.parse(markdownText);
    breadcrumb.textContent = `${nombreModulo} / ${item.titulo}`;

    document.querySelectorAll(".menu-item").forEach(el => el.classList.remove("active"));
    if (elementoEnlace) elementoEnlace.classList.add("active");

  } catch (error) {
    visorContent.innerHTML = `
      <h2 style="color: #ef4444;">Error al cargar el archivo</h2>
      <p>Asegúrate de estar usando <b>Live Server</b> y de que el archivo <code>${item.archivo}</code> exista.</p>
    `;
  }
}

// Renderizar el Menú con Desplegables
colecciones.forEach((coleccion, i) => {
  const liGrupo = document.createElement("li");
  liGrupo.className = "folder-group";

  // Botón del Desplegable (Título de la Colección)
  const btnFolder = document.createElement("button");
  btnFolder.className = "folder-btn";
  btnFolder.innerHTML = `
    <span>📁 ${coleccion.nombreProyecto}</span>
    <span class="arrow">▼</span>
  `;

  // Submenú con los endpoints
  const ulSubmenu = document.createElement("ul");
  ulSubmenu.className = "submenu";

  coleccion.endpoints.forEach((item, j) => {
    const liSub = document.createElement("li");
    const a = document.createElement("a");
    a.className = "menu-item";
    a.href = "#";
    a.innerHTML = `
      <span class="badge ${item.metodo.toLowerCase()}">${item.metodo}</span>
      <span>${item.titulo}</span>
    `;

    a.addEventListener("click", (e) => {
      e.preventDefault();
      cargarMarkdown(item, a, coleccion.nombreProyecto);
    });

    liSub.appendChild(a);
    ulSubmenu.appendChild(liSub);

    // Cargar el primer elemento de la primera colección por defecto
    if (i === 0 && j === 0) {
      cargarMarkdown(item, a, coleccion.nombreProyecto);
    }
  });

  // Evento para abrir/cerrar el desplegable
  btnFolder.addEventListener("click", () => {
    btnFolder.classList.toggle("closed");
    ulSubmenu.classList.toggle("hidden");
  });

  liGrupo.appendChild(btnFolder);
  liGrupo.appendChild(ulSubmenu);
  menuUl.appendChild(liGrupo);
});

// Buscador General
function filtrarMenu() {
  const query = document.getElementById("busqueda").value.toLowerCase();
  const items = document.querySelectorAll("#menu .menu-item");

  items.forEach(a => {
    const texto = a.textContent.toLowerCase();
    const li = a.parentElement;
    li.style.display = texto.includes(query) ? "block" : "none";
  });
}
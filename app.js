// Agrupa tus endpoints por Proyectos > Subcarpetas > Endpoints
const colecciones = [
  {
    nombreProyecto: "KEOPS",
    subcarpetas: [
      {
        nombreSubcarpeta: "Artículos e Inventario",
        endpoints: [
          {
            titulo: "Lista de coincidencia productos Cifrado",
            metodo: "GET",
            archivo: "KEOPS/05-lista-coincidencia-producto.md",
          },
          {
            titulo: "Lista de articulos pendientes",
            metodo: "GET",
            archivo: "KEOPS/01-lista-articulos-pendientes.md",
          },
          {
            titulo: "Lista de articulos pendientes equipo",
            metodo: "GET",
            archivo: "KEOPS/01-lista-articulos-pendientes-equipo.md",
          },
          {
            titulo: "Lista de articulos",
            metodo: "GET",
            archivo: "KEOPS/02-lista-articulos.md",
          },
          {
            titulo: "Lista de articulos equipo",
            metodo: "GET",
            archivo: "KEOPS/02-lista-articulos-equipo.md",
          },
          {
            titulo: "Items General",
            metodo: "GET",
            archivo: "KEOPS/07-items-fracttal.md",
          },
          {
            titulo: "Consulta Producto Cifrado",
            metodo: "GET",
            archivo: "KEOPS/15-consulta-producto-cifrado",
          },
          {
            titulo: "Consulta alterno Cifrado",
            metodo: "GET",
            archivo: "KEOPS/16-consulta-alterno-cifrado.md",
          },
          {
            titulo: "Lista ordenes de producto",
            metodo: "GET",
            archivo: "KEOPS/17-lista-ordenes-producto.md",
          },
          {
            titulo: "Guias de remision",
            metodo: "GET",
            archivo: "KEOPS/18-guias-remision.md",
          },
          {
            titulo: "Consutla de factura",
            metodo: "GET",
            archivo: "KEOPS/19-Consulta-factura.md",
          },
          {
            titulo: "Consutlar equipo",
            metodo: "GET",
            archivo: "KEOPS/20-Consultar-equipo.md",
          },
          {
            titulo: "Consutlar contacto",
            metodo: "GET",
            archivo: "KEOPS/21-consulta-contacto.md",
          },
          {
            titulo: "Vencido por vendedor",
            metodo: "GET",
            archivo: "KEOPS/22-vencido-por-vendedor.md",
          },
          {
            titulo: "Vencido por vendedor por cliente",
            metodo: "GET",
            archivo: "KEOPS/23-vencido-por-vendedor-por-cliente.md",
          },
          {
            titulo: "Vencido por factura",
            metodo: "GET",
            archivo: "KEOPS/24-vencido-por-factura.md",
          },
          {
            titulo: "Lista de todo los pendientes por facturar",
            metodo: "GET",
            archivo: "KEOPS/25-lista-todo-pendientes-facturar.md",
          },
          {
            titulo: "Notas de crédito y Débito",
            metodo: "GET",
            archivo: "KEOPS/26-Notas-credito-debito.md",
          },
        ],
      },
      {
        nombreSubcarpeta: "Transacciones y Finanzas",
        endpoints: [
          {
            titulo: "Lista de transacciones",
            metodo: "GET",
            archivo: "KEOPS/03-lista-transacciones.md",
          },
          {
            titulo: "Lista de transacciones equipo",
            metodo: "GET",
            archivo: "KEOPS/03-lista-transacciones-equipo.md",
          },
          {
            titulo: "Gastos viaticos",
            metodo: "GET",
            archivo: "KEOPS/04-gastos-viaticos.md",
          },
          {
            titulo: "Ventas Netas",
            metodo: "GET",
            archivo: "KEOPS/06-ventas-netas.md",
          },
          {
            titulo: "Ventas EP",
            metodo: "GET",
            archivo: "KEOPS/06-ventas-EP.md",
          },
          {
            titulo: "Pendientes despacho equipo",
            metodo: "GET",
            archivo: "KEOPS/14-pendientes-despacho-equipo.md",
          },
          {
            titulo: "Pendientes despacho",
            metodo: "GET",
            archivo: "KEOPS/14-pendientes-despacho.md",
          },
        ],
      },
      {
        nombreSubcarpeta: "Módulo AURA",
        endpoints: [
          {
            titulo: "Lista de productos por nombre",
            metodo: "GET",
            archivo: "KEOPS/08-lista-productos-nombre.md",
          },
          {
            titulo: "Lista de productos por codArticulo",
            metodo: "GET",
            archivo: "KEOPS/08-lista-productos-codigoArticulo.md",
          },
          {
            titulo: "Producto por codArticulo",
            metodo: "GET",
            archivo: "KEOPS/09-producto-codigoArticulo.md",
          },
          {
            titulo: "Calificación del cliente",
            metodo: "GET",
            archivo: "KEOPS/10-calificacion-cliente.md",
          },
          {
            titulo: "Consultar activo",
            metodo: "GET",
            archivo: "KEOPS/11-consultar-activo.md",
          },
          {
            titulo: "Ultimas ventas",
            metodo: "GET",
            archivo: "KEOPS/12-ultimas-ventas.md",
          },
          {
            titulo: "Estado financiero",
            metodo: "GET",
            archivo: "KEOPS/12-estado-financiero.md",
          },
          {
            titulo: "Pendientes por facturar",
            metodo: "GET",
            archivo: "KEOPS/13-pendientes-facturar.md",
          },
        ],
      },
    ],
  },
  {
    nombreProyecto: "DECISION",
    subcarpetas: [
      {
        nombreSubcarpeta: "API V1",
        endpoints: [
          {
            titulo: "Cerrar Oportunidad",
            metodo: "POST",
            archivo: "DECISION/01-cierre-oportunidad.md",
          },
          {
            titulo: "Consultar Oportunidad",
            metodo: "GET",
            archivo: "DECISION/02-consultar-oportunidad.md",
          },
          {
            titulo: "Consultar Contacto",
            metodo: "GET",
            archivo: "DECISION/03-consulta-contacto.md",
          },
          {
            titulo: "Creación Contacto",
            metodo: "POST",
            archivo: "DECISION/04-creacion-contacto.md",
          },
          {
            titulo: "Edición Contacto",
            metodo: "PUT",
            archivo: "DECISION/04-edicion-contacto.md",
          },
          {
            titulo: "Consultar oportunidades",
            metodo: "GET",
            archivo: "DECISION/01-consulta-oportunidades.md",
          },
        ],
      },
      {
        nombreSubcarpeta: "API V2",
        endpoints: [
          {
            titulo: "Consultar empresas",
            metodo: "GET",
            archivo: "DECISION/APIV2/01-consultar-empresa.md",
          },
          {
            titulo: "Crear contacto",
            metodo: "POST",
            archivo: "DECISION/APIV2/02-crear-contacto.md",
          }
          ,
          {
            titulo: "Editar contacto",
            metodo: "PUT",
            archivo: "DECISION/APIV2/03-editar-contacto.md",
          },
          {
            titulo: "Consultar contactos de una empresa",
            metodo: "GET",
            archivo: "DECISION/APIV2/04-consultar-contacto-empresa.md",
          },
          {
            titulo: "Consultar tareas de seguimiento",
            metodo: "GET",
            archivo: "DECISION/APIV2/05-consultar-taresa-seguimiento.md",
          },
          {
            titulo: "Cerrar oportunidad",
            metodo: "POST",
            archivo: "DECISION/APIV2/06-cerrar-oportunidad.md",
          },
          {
            titulo: "Bloquear ofertas de portunidad",
            metodo: "PUT",
            archivo: "DECISION/APIV2/07-bloquear-oferta-oportunidad.md",
          },
          {
            titulo: "Consultar oportunidad",
            metodo: "GET",
            archivo: "DECISION/APIV2/08-colsultar-oportunidad.md",
          }
        ],
      },
    ],
  },
];

// Elementos del DOM
const menuUl = document.getElementById("menu");
const visorContent = document.getElementById("documento-content");
const breadcrumb = document.getElementById("doc-breadcrumb");
const sidebar = document.getElementById("sidebar");
const btnToggleSidebar = document.getElementById("toggle-sidebar");

// Cargar Markdown
async function cargarMarkdown(item, elementoEnlace, rutaBreadcrumb) {
  try {
    const res = await fetch(item.archivo);
    if (!res.ok) throw new Error();
    const markdownText = await res.text();

    visorContent.innerHTML = marked.parse(markdownText);
    breadcrumb.textContent = `${rutaBreadcrumb} / ${item.titulo}`;

    document
      .querySelectorAll(".menu-item")
      .forEach((el) => el.classList.remove("active"));
    if (elementoEnlace) elementoEnlace.classList.add("active");
  } catch (error) {
    visorContent.innerHTML = `
      <h2 style="color: #ef4444;">Error al cargar el archivo</h2>
      <p>Asegúrate de que el archivo <code>${item.archivo}</code> exista localmente.</p>
    `;
  }
}

// Renderizar Menú Dinámico
let primerElementoCargado = false;

colecciones.forEach((coleccion) => {
  const liGrupo = document.createElement("li");
  liGrupo.className = "folder-group";

  // Nivel 1: Proyecto (Inician colapsados con 'closed')
  const btnFolder = document.createElement("button");
  btnFolder.className = "folder-btn closed";
  btnFolder.innerHTML = `
    <span>📁 ${coleccion.nombreProyecto}</span>
    <span class="arrow">▼</span>
  `;

  // Ocultamos el submenú de nivel 1 con 'hidden'
  const ulSubmenu = document.createElement("ul");
  ulSubmenu.className = "submenu hidden";

  // Nivel 2: Subcarpetas
  coleccion.subcarpetas.forEach((subcarpeta) => {
    const liSubfolder = document.createElement("li");
    liSubfolder.className = "subfolder-group";

    // Subcarpetas inician colapsadas con 'closed'
    const btnSubfolder = document.createElement("button");
    btnSubfolder.className = "subfolder-btn closed";
    btnSubfolder.innerHTML = `
      <span>📂 ${subcarpeta.nombreSubcarpeta}</span>
      <span class="arrow">▼</span>
    `;

    // Ocultamos el submenú de endpoints con 'hidden'
    const ulSubmenuEndpoints = document.createElement("ul");
    ulSubmenuEndpoints.className = "submenu-endpoints hidden";

    // Nivel 3: Endpoints
    subcarpeta.endpoints.forEach((item) => {
      const liEndpoint = document.createElement("li");
      const a = document.createElement("a");
      a.className = "menu-item";
      a.href = "#";
      a.innerHTML = `
        <span class="badge ${item.metodo.toLowerCase()}">${item.metodo}</span>
        <span>${item.titulo}</span>
      `;

      const rutaBreadcrumb = `${coleccion.nombreProyecto} / ${subcarpeta.nombreSubcarpeta}`;

      a.addEventListener("click", (e) => {
        e.preventDefault();
        cargarMarkdown(item, a, rutaBreadcrumb);
      });

      liEndpoint.appendChild(a);
      ulSubmenuEndpoints.appendChild(liEndpoint);

      // Carga en segundo plano el primer documento disponible al iniciar la app
      if (!primerElementoCargado) {
        cargarMarkdown(item, a, rutaBreadcrumb);
        primerElementoCargado = true;
      }
    });

    // Abrir / Cerrar Subcarpeta
    btnSubfolder.addEventListener("click", (e) => {
      e.stopPropagation();
      btnSubfolder.classList.toggle("closed");
      ulSubmenuEndpoints.classList.toggle("hidden");
    });

    liSubfolder.appendChild(btnSubfolder);
    liSubfolder.appendChild(ulSubmenuEndpoints);
    ulSubmenu.appendChild(liSubfolder);
  });

  // Abrir / Cerrar Proyecto
  btnFolder.addEventListener("click", () => {
    btnFolder.classList.toggle("closed");
    ulSubmenu.classList.toggle("hidden");
  });

  liGrupo.appendChild(btnFolder);
  liGrupo.appendChild(ulSubmenu);
  menuUl.appendChild(liGrupo);
});

// Buscador
function filtrarMenu() {
  const query = document.getElementById("busqueda").value.toLowerCase();
  const items = document.querySelectorAll("#menu .menu-item");

  items.forEach((a) => {
    const texto = a.textContent.toLowerCase();
    const li = a.parentElement;
    li.style.display = texto.includes(query) ? "block" : "none";
  });
}

// Abrir / Colapsar la barra lateral completa
if (btnToggleSidebar && sidebar) {
  btnToggleSidebar.addEventListener("click", () => {
    const isCollapsed = sidebar.classList.toggle("collapsed");
    btnToggleSidebar.textContent = isCollapsed ? "▶" : "◀";
  });
}

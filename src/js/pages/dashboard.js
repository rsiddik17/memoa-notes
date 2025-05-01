import LogoImage from '../../assets/img/memoa1.png';

export default function DashboardPage() {
    return`
        <header class="sidebar active" data-sidebar>
            <div class="wrapper wrapper-1">
                <a href="/">
                    <img href="${LogoImage}" alt="logo">
                </a>

                <button class="menu-btn icon-btn large" aria-label="Close menu" data-sidebar-toggler>
                    <span class="material-symbols-rounded" aria-hidden="true">close</span>

                    <div class="state-layer"></div>
                </button>
            </div>

            <button class="fab" data-note-create-btn>
                <span class="material-symbols-rounded" aria-hidden="true">add</span>

                <span class="text text-label-large">New Note</span>

                <div class="state-layer"></div>
            </button>

            <div class="wrapper wrapper-2">
                <h2 class="text-title-small">NOTEBOOKS</h2>

                <button class="icon-btn small" data-tooltip="Create new notebook" aria-label="Create new notebook" data-add-notebook>
                    <span class="material-symbols-rounded" aria-hidden="true">add</span>
                    
                    <div class="state-layer"></div>
                </button>
            </div>

            <nav class="nav custom-scrollbar" data-sidebar-list>
                <div class="nav-item active">
                    <span class="text text-label-large" data-notebook-field>My Notebook</span>

                    <button class="icon-btn small" aria-label="Edit notebook" data-tooltip="Edit notebook" data-edit-btn>
                        <span class="material-symbols-rounded" aria-hidden="true">edit</span>

                        <div class="state-layer"></div>
                    </button>

                    <button class="icon-btn small" aria-label="Delete notebook" data-tooltip="Delete notebook" data-delete-btn>
                        <span class="material-symbols-rounded" aria-hidden="true">delete</span>

                        <div class="state-layer"></div>
                    </button>

                    <div class="state-layer"></div>
                </div>

            </nav>

            <div class="cp-info">
                <span class="text-label-large">Copyright 2025 <strong>rsiddik17</strong></span>
            </div>
        </header>

        <div class="overlay active" data-sidebar-overlay data-sidebar-toggler></div>
    `;
}
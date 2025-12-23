class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .navbar {
                    background-color: rgba(0, 0, 0, 0.8);
                    backdrop-filter: blur(10px);
                    position: fixed;
                    width: 100%;
                    z-index: 1000;
                    transition: all 0.3s ease;
                }
                
                .navbar:hover {
                    background-color: rgba(0, 0, 0, 0.9);
                }
                
                .navbar-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                
                .logo img {
                    height: 40px;
                }
                
                .logo span {
                    color: white;
                    font-weight: bold;
                    font-size: 1.2rem;
                }
                
                .menu {
                    display: flex;
                    gap: 2rem;
                }
                
                .menu a {
                    color: white;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s;
                    position: relative;
                }
                
                .menu a:hover {
                    color: #ef4444;
                }
                
                .menu a::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -5px;
                    left: 0;
                    background-color: #ef4444;
                    transition: width 0.3s;
                }
                
                .menu a:hover::after {
                    width: 100%;
                }
                
                @media (max-width: 768px) {
                    .navbar-container {
                        padding: 1rem;
                    }
                    
                    .menu {
                        gap: 1rem;
                    }
                }
            </style>
            <nav class="navbar">
                <div class="navbar-container">
                    <div class="logo">
                        <img src="logo-praxedes.png" alt="Praxedes Moto Meças">
                        <span>Praxedes Moto peças</span>
                    </div>
                    <div class="menu">
                        <a href="#servicos">Serviços</a>
                        <a href="#galeria">Galeria</a>
                        <a href="#agendamento">Agendamento</a>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);

// Scroll reveal animation
const elements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            el.classList.add('active');
        }
    });
});

// Form submission to WhatsApp
document.getElementById('agendamentoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const veiculo = document.getElementById("veiculo").value;
    const servico = document.getElementById("servico").value;

    const numeroWhatsApp = "5584999999999"; // número da oficina

    const mensagem =
        `Olá! Vim pelo site da MotoMasters Garage.%0A%0A` +
        `👤 Nome: ${nome}%0A` +
        `🏍️ Veículo: ${veiculo}%0A` +
        `🛠️ Serviço: ${servico}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
    window.open(url, "_blank");

});
class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #111827;
                    color: white;
                    padding: 3rem 2rem;
                    text-align: center;
                }
                
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;
                }
                
                .footer-logo {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                
                .footer-logo img {
                    height: 40px;
                }
                
                .footer-logo span {
                    font-weight: bold;
                    font-size: 1.2rem;
                }
                
                .footer-links {
                    display: flex;
                    gap: 2rem;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                
                .footer-links a {
                    color: #9ca3af;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                
                .footer-links a:hover {
                    color: #ef4444;
                }
                
                .social-links {
                    display: flex;
                    gap: 1.5rem;
                }
                
                .social-links a {
                    color: white;
                    background-color: #1f2937;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s;
                }
                
                .social-links a:hover {
                    background-color: #ef4444;
                    transform: translateY(-3px);
                }
                
                .copyright {
                    color: #6b7280;
                    font-size: 0.9rem;
                    margin-top: 2rem;
                }
            </style>
            <footer>
                <div class="footer-content">
                    <div class="footer-logo">
                        <img src="oficina-interior.png" alt="MotoMasters Garage">
                        <span>MotoMasters Garage</span>
                    </div>
                    <div class="footer-links">
                        <a href="#servicos">Serviços</a>
                        <a href="#galeria">Galeria</a>
                        <a href="#agendamento">Agendamento</a>
                        <a href="#">Termos de Serviço</a>
                        <a href="#">Política de Privacidade</a>
                    </div>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook"><i data-feather="facebook"></i></a>
                        <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
                        <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
                        <a href="#" aria-label="YouTube"><i data-feather="youtube"></i></a>
                    </div>
                    <p class="copyright">© ${new Date().getFullYear()} MotoMasters Garage. Todos os direitos reservados.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
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

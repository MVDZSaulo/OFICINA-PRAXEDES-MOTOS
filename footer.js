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
                        <img src="logo-praxedes.png" alt="MotoMasters Garage">
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
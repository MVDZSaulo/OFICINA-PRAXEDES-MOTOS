class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <footer>
                <style>
                    footer {
                        background-color: #111827;
                        color: white;
                        padding: 3rem 2rem;
                        text-align: center;
                        font-family: Arial, sans-serif;
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

                    .footer-links {
                        display: flex;
                        gap: 1.5rem;
                        flex-wrap: wrap;
                        justify-content: center;
                    }

                    .footer-links a {
                        color: #9ca3af;
                        text-decoration: none;
                    }

                    .footer-links a:hover {
                        color: #ef4444;
                    }

                    .social-links {
                        display: flex;
                        gap: 1rem;
                    }

                    .social-links a {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        background: #1f2937;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        transition: 0.3s;
                    }

                    .social-links a:hover {
                        background: #ef4444;
                        transform: translateY(-3px);
                    }

                    .copyright {
                        font-size: 0.9rem;
                        color: #9ca3af;
                    }
                </style>

                <div class="footer-content">

                    <div class="footer-logo">
                        <img src="logo-praxedes.png">
                        <strong>Praxedes Moto Peças</strong>
                    </div>

                    <div class="footer-links">
                        <a href="#servicos">Serviços</a>
                        <a href="#galeria">Galeria</a>
                        <a href="#agendamento">Agendamento</a>
                    </div>

                    <div class="social-links">
                        <a href="https://facebook.com" target="_blank"><i data-feather="facebook"></i></a>
                        <a href="https://instagram.com/praxedes_almeida10" target="_blank"><i data-feather="instagram"></i></a>
                        <a href="https://wa.me/5584999999999" target="_blank"><i data-feather="message-circle"></i></a>
                        <a href="https://youtube.com" target="_blank"><i data-feather="youtube"></i></a>
                    </div>

                    <p class="copyright">
                        © ${new Date().getFullYear()} Praxedes Moto Peças
                    </p>

                </div>
            </footer>
        `;

        // ⬇️ ISSO É O QUE FAZ OS ÍCONES APARECEREM
        feather.replace(this.shadowRoot);
    }
}

customElements.define('custom-footer', CustomFooter);

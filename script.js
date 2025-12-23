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

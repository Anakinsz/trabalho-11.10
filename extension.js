
    // Código do pop-up
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");
    popup.style.display = "block";

    // Fecha o pop-up ao clicar no "x"
    closePopup.onclick = function() {
        popup.style.display = "none";
    };

    // Fecha o pop-up
    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    };
    document.getElementById("saibamais").onclick = function() {
        alert("Você será redirecionado para mais informações.");
        
    };

document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const objetivo = document.getElementById('objetivo').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const nascimento = document.getElementById('nascimento').value;
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const metaPeso = document.getElementById('metaPeso').value;
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    console.log({
        objetivo,
        peso,
        altura,
        nascimento,
        sexo,
        metaPeso,
        nome,
        email
    });
    alert("Formulário enviado com sucesso!");
});

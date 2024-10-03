window.onload = function() {
    const registrationArea = document.getElementById('registration-area');
    const textarea = document.createElement('textarea');
    textarea.placeholder = "Escreva seu cadastro aqui...";
    registrationArea.appendChild(textarea);
};
window.onload = function() {
    const registrationArea = document.getElementById('registration-area');
    const textarea = document.createElement('textarea');
    textarea.placeholder = "Escreva seu cadastro aqui...";
    registrationArea.appendChild(textarea);

    // Código do pop-up
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");

    // Mostra o pop-up ao carregar a página
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

    // Exemplo de ação para o botão "Saiba Mais"
    document.getElementById("learn-more").onclick = function() {
        alert("Você será redirecionado para mais informações.");
        // Aqui você pode adicionar um redirecionamento para outra página ou algo mais
    };
};

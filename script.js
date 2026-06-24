// Funções de Navegação de Telas
function nav(screenId) {
    console.log("Navegando para a tela: " + screenId);
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if(target) target.classList.add('active');
}

function navProfile() {
    nav('s-dash'); // Altere para a tela de perfil quando implementada
}

function navAppts() {
    console.log("Abrindo agendamentos...");
}

// Funções de Autenticação / Fluxo
function doLogin() {
    console.log("Executando login...");
}

function doRegister() {
    console.log("Executando cadastro...");
}

function doForgot() {
    console.log("Redefinindo senha...");
}

function quickAdmin() {
    console.log("Acessando como Admin...");
}

// Utilitários de Interface
function togglePw(fieldId, btn) {
    const input = document.getElementById(fieldId);
    if(input.type === "password") {
        input.type = "text";
        btn.textContent = "🔒";
    } else {
        input.type = "password";
        btn.textContent = "👁";
    }
}

function maskPh(input) {
    // Máscara simples de telefone ex: (21) 99999-9999
    let v = input.value.replace(/\D/g, "");
    if (v.length > 11) v = v.substring(0, 11);
    if (v.length > 6) {
        input.value = `(${v.substring(0,2)}) ${v.substring(2,7)}-${v.substring(7)}`;
    } else if (v.length > 2) {
        input.value = `(${v.substring(0,2)}) ${v.substring(2)}`;
    } else if (v.length > 0) {
        input.value = `(${v}`;
    }
}

function pwStr(input) {
    const strDiv = document.getElementById('pw-str');
    if(input.value.length < 6) {
        strDiv.textContent = "Senha muito curta";
        strDiv.style.color = "var(--red)";
    } else {
        strDiv.textContent = "Senha aceitável";
        strDiv.style.color = "var(--green)";
    }
}

// Fluxo de Agendamento (Booking)
function startBooking() {
    nav('s-booking');
    bkNext(1);
}

function bkNext(step) {
    console.log("Avançando para o passo: " + step);
    // Lógica para alternar visibilidade de bk1, bk2, bk3...
}

function bkPrev(step) {
    console.log("Voltando para o passo: " + step);
}

// Calendário
function calPrev() { console.log("Mês anterior"); }
function calNext() { console.log("Próximo mês"); }

// Notificações
function toggleNotif() {
    const panel = document.getElementById('npanel');
    panel.classList.toggle('on');
}

function closeNotif() {
    document.getElementById('npanel').classList.remove('on');
}

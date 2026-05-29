// Inicializa os ícones ao carregar qualquer página
document.addEventListener("DOMContentLoaded", () => {
    if (typeof lucide !== 'undefined') lucide.createIcons();
    
    // Se estiver na Home, verifica se tem a sessão iniciada
    const homeUserDisplay = document.getElementById('home-user-display');
    if (homeUserDisplay) {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        const db = JSON.parse(localStorage.getItem('mockDatabase'));
        
        if (isLoggedIn === 'true' && db) {
            homeUserDisplay.textContent = db.fullName;
        } else {
            window.location.href = '../index.html';
        }
    }
});

// Função global de Notificações
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = '';
    if(type === 'success') icon = '<i data-lucide="check" class="inline w-4 h-4 mr-2"></i>';
    if(type === 'error') icon = '<i data-lucide="alert-circle" class="inline w-4 h-4 mr-2"></i>';
    if(type === 'info') icon = '<i data-lucide="info" class="inline w-4 h-4 mr-2"></i>';

    toast.innerHTML = `<div class="flex items-center">${icon} <span>${message}</span></div>`;
    container.appendChild(toast);
    lucide.createIcons();

    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s forwards';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Troca de ecrãs dentro do mesmo ficheiro HTML
function switchView(viewId) {
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    const target = document.getElementById(viewId);
    if(target) target.classList.add('active');
}

// ================= LÓGICA DE REGISTO =================
const formRegister = document.getElementById('form-register');
if (formRegister) {
    formRegister.addEventListener('submit', function(e) {
        e.preventDefault();
        const fullName = document.getElementById('reg-fullname').value;
        const username = document.getElementById('reg-username').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;
        const confirmPassword = document.getElementById('reg-confirm-password').value;

        if (password !== confirmPassword) {
            showToast('As palavras-passe não coincidem!', 'error');
            return;
        }

        const db = { fullName, username, email, password, isVerified: false };
        localStorage.setItem('mockDatabase', JSON.stringify(db)); // Guarda no navegador
        
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        localStorage.setItem('currentVerificationCode', code);

        document.getElementById('verify-email-display').textContent = email;
        switchView('view-verify');

        setTimeout(() => showToast(`SIMULAÇÃO DE E-MAIL: Código: ${code}`, 'info'), 1000);
    });
}

function resendVerificationCode() {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem('currentVerificationCode', code);
    showToast('Um novo código foi enviado.', 'success');
    setTimeout(() => showToast(`SIMULAÇÃO: Novo código: ${code}`, 'info'), 1500);
}

const formVerify = document.getElementById('form-verify');
if (formVerify) {
    formVerify.addEventListener('submit', function(e) {
        e.preventDefault();
        const enteredCode = document.getElementById('verify-code').value;
        const savedCode = localStorage.getItem('currentVerificationCode');

        if (enteredCode === savedCode) {
            let db = JSON.parse(localStorage.getItem('mockDatabase'));
            db.isVerified = true;
            localStorage.setItem('mockDatabase', JSON.stringify(db));
            
            showToast('Verificado! A redirecionar para iniciar sessão...', 'success');
            setTimeout(() => window.location.href = '../index.html', 1500); // Volta para a raiz
        } else {
            showToast('Código inválido.', 'error');
        }
    });
}

// ================= LÓGICA DE LOGIN =================
const formLogin = document.getElementById('form-login');
if (formLogin) {
    formLogin.addEventListener('submit', function(e) {
        e.preventDefault();
        const usernameInput = document.getElementById('login-username').value;
        const passwordInput = document.getElementById('login-password').value;
        const db = JSON.parse(localStorage.getItem('mockDatabase'));

        if (!db) {
            showToast('Utilizador não encontrado. Registe-se primeiro.', 'error');
            return;
        }

        if (usernameInput === db.username && passwordInput === db.password) {
            if (!db.isVerified) {
                showToast('Por favor, verifique o seu e-mail.', 'error');
                return;
            }
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'pages/home.html'; // Vai para a pasta pages
        } else {
            showToast('Utilizador ou palavra-passe incorretos.', 'error');
        }
    });
}

// ================= RECUPERAÇÃO DE PALAVRA-PASSE =================
const formForgotPassword = document.getElementById('form-forgot-password');
if (formForgotPassword) {
    formForgotPassword.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = document.getElementById('forgot-email').value;
        const db = JSON.parse(localStorage.getItem('mockDatabase'));

        if (!db || db.email !== emailInput) {
            showToast('E-mail não encontrado.', 'error');
            return;
        }

        const code = Math.floor(100000 + Math.random() * 900000).toString();
        localStorage.setItem('currentResetCode', code);
        
        switchView('view-reset-password');
        setTimeout(() => showToast(`SIMULAÇÃO: Código recuperação: ${code}`, 'info'), 1000);
    });
}

const formResetPassword = document.getElementById('form-reset-password');
if (formResetPassword) {
    formResetPassword.addEventListener('submit', function(e) {
        e.preventDefault();
        const enteredCode = document.getElementById('reset-code').value;
        const newPassword = document.getElementById('reset-new-password').value;
        const confirmNewPassword = document.getElementById('reset-confirm-password').value;
        const savedCode = localStorage.getItem('currentResetCode');

        if (enteredCode !== savedCode) {
            showToast('Código inválido.', 'error'); return;
        }
        if (newPassword !== confirmNewPassword) {
            showToast('As palavras-passe não coincidem!', 'error'); return;
        }

        let db = JSON.parse(localStorage.getItem('mockDatabase'));
        db.password = newPassword;
        localStorage.setItem('mockDatabase', JSON.stringify(db));
        
        showToast('Palavra-passe redefinida!', 'success');
        document.getElementById('form-reset-password').reset();
        switchView('view-login');
    });
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '../index.html'; // Volta para a raiz
}

// Verificar si el usuario está logueado
if (!sessionStorage.getItem('loggedIn')) {
    window.location.href = 'index.html';  // Si no está logueado, redirigir a login
}

// Cargar los datos del usuario desde el localStorage
document.addEventListener('DOMContentLoaded', function() {
    const displayName = localStorage.getItem('displayName') || 'User';
    const profilePic = localStorage.getItem('profilePic') || 'default-avatar.jpg';
    const site1Link = localStorage.getItem('site1') || '';
    const site2Link = localStorage.getItem('site2') || '';

    // Establecer los valores en el formulario
    document.getElementById('displayName').value = displayName;
    document.getElementById('profileImage').src = profilePic;
    document.getElementById('site1').value = site1Link;
    document.getElementById('site2').value = site2Link;
});

// Función para guardar el nombre de visualización
function saveDisplayName() {
    const displayName = document.getElementById('displayName').value;
    localStorage.setItem('displayName', displayName);
    alert('Display name saved!');
}

// Función para actualizar la foto de perfil
function updateProfilePic(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgUrl = e.target.result;
            localStorage.setItem('profilePic', imgUrl);
            document.getElementById('profileImage').src = imgUrl;
            alert('Profile picture updated!');
        };
        reader.readAsDataURL(file);
    }
}

// Función para guardar los enlaces del sitio
function saveSiteLink(site) {
    const siteLink = document.getElementById(site).value;
    localStorage.setItem(site, siteLink);
    alert(`${site.charAt(0).toUpperCase() + site.slice(1)} link saved!`);
}

// Función de logout
function logout() {
    sessionStorage.removeItem('loggedIn');
    window.location.href = 'index.html';  // Redirigir al login
}

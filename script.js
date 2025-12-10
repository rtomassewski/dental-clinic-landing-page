function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    const menuIcon = document.querySelector('.mobile-menu-icon i');

    // Adiciona ou remove a classe "active" na lista
    navList.classList.toggle('active');

    // Troca o ícone: Se tem 'active', vira um X (fechar). Se não, vira Barras (menu).
    if (navList.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
}
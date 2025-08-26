<script>
// JavaScript for mobile menu functionality and smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileDropdownMenu = document.getElementById('mobile-dropdown-menu');

    mobileMenuButton.addEventListener('click', function(e) {
        e.stopPropagation();
        mobileDropdownMenu.classList.toggle('hidden');
    });

    // Hide dropdown when clicking outside
    document.addEventListener('click', function() {
        mobileDropdownMenu.classList.add('hidden');
    });

    // Prevent menu from closing when clicking inside
    mobileDropdownMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('#mobile-dropdown-menu a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            mobileDropdownMenu.classList.add('hidden'); // Close menu after click
        });
    });
});
</script>
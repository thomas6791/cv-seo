document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const accordionSection = this.parentElement;

            // Fermer les autres accordions
            document.querySelectorAll('.accordion-section').forEach(section => {
                if (section !== accordionSection) {
                    section.classList.remove('active');
                }
            });

            // Basculer l'accordion courant
            accordionSection.classList.toggle('active');
        });
    });
});

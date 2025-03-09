// Recipe page functionality
document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const filtersForm = document.querySelector('.filters-section');
    const recipesGrid = document.querySelector('.recipes-grid');
    const searchInput = document.querySelector('.search-box input');
    const saveButtons = document.querySelectorAll('.save-recipe');
    const viewButtons = document.querySelectorAll('.view-recipe');

    // Filter recipes based on selected options
    function filterRecipes() {
        const selectedCuisines = Array.from(document.querySelectorAll('.filter-options input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.value);

        const recipeCards = document.querySelectorAll('.recipe-card');
        
        recipeCards.forEach(card => {
            const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
            const shouldShow = selectedCuisines.length === 0 || 
                             selectedCuisines.some(cuisine => tags.includes(cuisine.toLowerCase()));
            
            card.style.display = shouldShow ? 'block' : 'none';
            
            if (shouldShow) {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            }
        });
    }

    // Search functionality
    function searchRecipes(query) {
        const recipeCards = document.querySelectorAll('.recipe-card');
        const searchTerm = query.toLowerCase();

        recipeCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.tag'))
                .map(tag => tag.textContent.toLowerCase());

            const matches = title.includes(searchTerm) || 
                          description.includes(searchTerm) ||
                          tags.some(tag => tag.includes(searchTerm));

            card.style.display = matches ? 'block' : 'none';

            if (matches) {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            }
        });
    }

    // Save recipe functionality
    function toggleSaveRecipe(button) {
        const icon = button.querySelector('i');
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            showToast('Recipe saved to your collection!');
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            showToast('Recipe removed from your collection');
        }
    }

    // Toast notification
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        // Trigger animation
        setTimeout(() => toast.classList.add('show'), 100);

        // Remove toast after animation
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Event Listeners
    filtersForm.addEventListener('submit', (e) => {
        e.preventDefault();
        filterRecipes();
    });

    document.querySelector('.apply-filters').addEventListener('click', filterRecipes);

    searchInput.addEventListener('input', (e) => {
        searchRecipes(e.target.value);
    });

    saveButtons.forEach(button => {
        button.addEventListener('click', () => toggleSaveRecipe(button));
    });

    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const recipeName = button.closest('.recipe-card').querySelector('h3').textContent;
            // This will be replaced with actual recipe view functionality
            showToast(`Opening recipe: ${recipeName}`);
        });
    });

    // Add CSS for toast notifications
    const style = document.createElement('style');
    style.textContent = `
        .toast {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 14px;
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 1000;
        }

        .toast.show {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
});

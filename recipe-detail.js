document.addEventListener('DOMContentLoaded', function() {
    const selectedRecipeId = localStorage.getItem('selectedRecipeId');
    
    if (!selectedRecipeId) {
        window.location.href = 'recipes.html';
        return;
    }
    
    const recipes = [
        {
            id: 1,
            title: 'Creamy Garlic Pasta',
            description: 'A delicious pasta dish with creamy garlic sauce, fresh herbs, and parmesan cheese. Perfect for a cozy dinner.',
            image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800',
            time: '30 mins',
            servings: 4,
            calories: 450,
            cuisine: 'Italian',
            mealType: 'dinner',
            cookingTime: 'medium',
            ingredients: [
                '8 oz fettuccine pasta',
                '3 tablespoons butter',
                '4 cloves garlic, minced',
                '1 cup heavy cream',
                '1 cup grated Parmesan cheese',
                '1/2 teaspoon salt',
                '1/4 teaspoon black pepper',
                '2 tablespoons fresh parsley, chopped',
                '1/4 teaspoon red pepper flakes (optional)'
            ],
            instructions: [
                'Bring a large pot of salted water to a boil. Add pasta and cook according to package directions until al dente. Reserve 1/2 cup of pasta water before draining.',
                'While pasta cooks, melt butter in a large skillet over medium heat. Add minced garlic and cook for 1-2 minutes until fragrant but not browned.',
                'Reduce heat to medium-low and add heavy cream. Simmer for 3-4 minutes until it starts to thicken slightly.',
                'Add the drained pasta to the sauce and toss to coat evenly. If sauce is too thick, add a splash of the reserved pasta water.',
                'Gradually sprinkle in the Parmesan cheese while stirring, until melted and smooth.',
                'Season with salt, pepper, and red pepper flakes if using. Toss until pasta is fully coated with the creamy sauce.',
                'Serve immediately, garnished with fresh parsley and additional Parmesan cheese if desired.'
            ],
            tips: [
                'For extra flavor, add grilled chicken or sautéed shrimp.',
                'Fresh pasta works wonderfully with this recipe for an even more luxurious dish.',
                'If you don\'t have heavy cream, you can substitute half-and-half, but the sauce won\'t be as thick.'
            ],
            nutrition: {
                calories: 450,
                protein: '15g',
                carbs: '42g',
                fat: '28g',
                fiber: '2g',
                sugar: '3g'
            },
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        },
        {
            id: 2,
            title: 'Butter Chicken',
            description: 'Classic Indian butter chicken with rich and creamy tomato gravy, tender chicken pieces, and aromatic spices.',
            image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800',
            time: '45 mins',
            servings: 6,
            calories: 520,
            cuisine: 'Indian',
            mealType: 'dinner',
            cookingTime: 'medium',
            ingredients: [
                '1.5 lbs boneless chicken thighs, cut into pieces',
                '1/2 cup plain yogurt',
                '2 tbsp lemon juice',
                '2 tsp ground cumin',
                '2 tsp ground turmeric',
                '2 tsp garam masala',
                '2 tsp ground coriander',
                '4 tbsp butter',
                '1 large onion, diced',
                '4 cloves garlic, minced',
                '1 tbsp ginger, grated',
                '1 can (14 oz) tomato sauce',
                '1 cup heavy cream',
                '1/4 cup fresh cilantro, chopped',
                'Salt to taste'
            ],
            instructions: [
                'In a large bowl, mix yogurt, lemon juice, cumin, turmeric, garam masala, and coriander. Add chicken pieces and marinate for at least 30 minutes, preferably overnight in the refrigerator.',
                'Heat 2 tablespoons of butter in a large skillet over medium heat. Add marinated chicken pieces and cook until browned, about 5-7 minutes. Remove chicken and set aside.',
                'In the same skillet, add remaining butter. Add onions and cook until soft, about 5 minutes. Add garlic and ginger, cook for another minute until fragrant.',
                'Add tomato sauce and bring to a simmer. Cook for about 10-15 minutes until sauce thickens slightly.',
                'Return the chicken to the sauce and simmer for another 10 minutes until chicken is fully cooked.',
                'Stir in heavy cream and cilantro. Simmer for 5 more minutes. Season with salt to taste.',
                'Serve hot with basmati rice or naan bread.'
            ],
            tips: [
                'For more authentic flavor, use Kashmiri chili powder for a deeper red color without too much heat.',
                'Marinating the chicken overnight will give the most tender and flavorful results.',
                'For a healthier version, you can substitute heavy cream with coconut milk.'
            ],
            nutrition: {
                calories: 520,
                protein: '32g',
                carbs: '18g',
                fat: '36g',
                fiber: '3g',
                sugar: '8g'
            },
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        },
        {
            id: 3,
            title: 'California Roll',
            description: 'Fresh and delicious California rolls with avocado, crab meat, cucumber, and perfectly seasoned sushi rice.',
            image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800',
            time: '60 mins',
            servings: 4,
            calories: 350,
            cuisine: 'Japanese',
            mealType: 'lunch',
            cookingTime: 'long',
            ingredients: [
                '2 cups sushi rice',
                '3 tbsp rice vinegar',
                '2 tbsp sugar',
                '1 tsp salt',
                '4 sheets nori (seaweed)',
                '1 avocado, sliced',
                '8 oz imitation crab meat, shredded',
                '1 cucumber, cut into thin strips',
                '2 tbsp mayo',
                '1 tbsp sriracha (optional)',
                '1/4 cup toasted sesame seeds',
                'Soy sauce for serving',
                'Pickled ginger for serving',
                'Wasabi for serving'
            ],
            instructions: [
                'Rinse sushi rice under cold water until water runs clear. Cook according to package instructions.',
                'In a small bowl, mix rice vinegar, sugar, and salt until dissolved. Fold this mixture into the hot cooked rice and let cool to room temperature.',
                'Place a bamboo sushi rolling mat on a clean surface and cover with plastic wrap to prevent sticking.',
                'Place one nori sheet on the mat, shiny side down. With wet hands, spread about 1/2 cup of rice evenly onto the nori, leaving about 1 inch of nori uncovered at the top.',
                'Sprinkle sesame seeds over the rice. Flip the nori sheet so rice is facing down.',
                'Arrange crab meat, avocado slices, and cucumber strips in a line across the center of the nori.',
                'If desired, mix mayo with sriracha and drizzle over the filling.',
                'Using the bamboo mat for support, roll the nori over the filling, applying gentle pressure to make a tight roll. Seal the edge with a little water.',
                'With a sharp knife, cut the roll into 8 pieces. Clean the knife with a wet cloth between cuts for neat slices.',
                'Serve with soy sauce, pickled ginger, and wasabi.'
            ],
            tips: [
                'Keep a small bowl of water nearby to wet your hands when handling rice - this prevents sticking.',
                'For a more authentic flavor, use real crab meat instead of imitation crab.',
                'You can add thin slices of cream cheese for a Philadelphia roll variation.'
            ],
            nutrition: {
                calories: 350,
                protein: '8g',
                carbs: '58g',
                fat: '10g',
                fiber: '4g',
                sugar: '6g'
            },
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        },
        {
            id: 4,
            title: 'Classic Margherita Pizza',
            description: 'Traditional Neapolitan pizza with fresh mozzarella, basil leaves, tomato sauce, and extra virgin olive oil.',
            image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800',
            time: '40 mins',
            servings: 4,
            calories: 480,
            cuisine: 'Italian',
            mealType: 'dinner',
            cookingTime: 'medium',
            ingredients: [
                '1 lb pizza dough',
                '1/4 cup tomato sauce',
                '8 oz fresh mozzarella, sliced',
                '1 large tomato, sliced',
                '10 fresh basil leaves',
                '2 tbsp extra virgin olive oil',
                '1 tsp salt',
                '1/2 tsp black pepper',
                '1/4 cup grated Parmesan cheese (optional)'
            ],
            instructions: [
                'Preheat your oven to the highest temperature (usually 500°F or 550°F) with a pizza stone or baking sheet inside for at least 30 minutes.',
                'On a floured surface, stretch or roll out the pizza dough to a 12-inch circle.',
                'Transfer the dough to a piece of parchment paper or a floured pizza peel.',
                'Spread the tomato sauce evenly over the dough, leaving a 1/2-inch border for the crust.',
                'Arrange the mozzarella slices evenly over the sauce.',
                'Add sliced tomatoes on top of the cheese.',
                'Carefully transfer the pizza to the preheated pizza stone or baking sheet in the oven.',
                'Bake for 8-10 minutes, or until the crust is golden and the cheese is bubbly and slightly browned.',
                'Remove from the oven and immediately top with fresh basil leaves, a drizzle of olive oil, salt, and pepper.',
                'If using, sprinkle with grated Parmesan cheese. Slice and serve immediately.'
            ],
            tips: [
                'For authentic Neapolitan pizza, use San Marzano tomatoes for your sauce.',
                'Allow pizza dough to come to room temperature before stretching for best results.',
                'If you don\'t have a pizza stone, an inverted baking sheet works well too.'
            ],
            nutrition: {
                calories: 480,
                protein: '18g',
                carbs: '52g',
                fat: '22g',
                fiber: '3g',
                sugar: '4g'
            },
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        },
        {
            id: 5,
            title: 'Spicy Miso Ramen',
            description: 'Rich and flavorful ramen with spicy miso broth, tender chashu pork, soft-boiled egg, and fresh vegetables.',
            image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800',
            time: '35 mins',
            servings: 2,
            calories: 420,
            cuisine: 'Japanese',
            mealType: 'dinner',
            cookingTime: 'medium',
            ingredients: [
                '2 packages ramen noodles (discard seasoning packets)',
                '4 cups chicken broth',
                '3 tbsp white miso paste',
                '1 tbsp red miso paste',
                '1 tbsp chili oil or sriracha',
                '1 tbsp soy sauce',
                '1 tbsp mirin',
                '2 cloves garlic, minced',
                '1 tbsp ginger, grated',
                '2 green onions, sliced',
                '2 soft-boiled eggs, halved',
                '4 oz sliced chashu pork (or substitute with cooked pork belly)',
                '1 cup baby spinach',
                '1/2 cup corn kernels',
                '1/2 cup bean sprouts',
                '2 sheets nori, cut into strips',
                '1 tbsp toasted sesame seeds'
            ],
            instructions: [
                'In a large pot, bring chicken broth to a simmer. Add garlic and ginger, and simmer for 5 minutes.',
                'In a small bowl, mix both miso pastes with a ladleful of hot broth until smooth. Return this mixture to the pot.',
                'Add soy sauce, mirin, and chili oil to the broth. Keep at a low simmer.',
                'In another pot, cook ramen noodles according to package directions, being careful not to overcook. Drain and rinse briefly with cold water.',
                'Divide the cooked noodles between two large bowls.',
                'Ladle the hot broth over the noodles.',
                'Arrange toppings on each bowl: chashu pork, halved soft-boiled egg, spinach, corn, bean sprouts, and nori strips.',
                'Garnish with sliced green onions and sesame seeds.',
                'Serve immediately while hot.'
            ],
            tips: [
                'For a richer broth, add 1 tbsp of unsalted butter just before serving.',
                'Make sure to cook the noodles separately to prevent them from absorbing too much broth and becoming soggy.',
                'For a fully authentic experience, add a dash of togarashi (Japanese chili pepper mix) before serving.'
            ],
            nutrition: {
                calories: 420,
                protein: '22g',
                carbs: '48g',
                fat: '16g',
                fiber: '5g',
                sugar: '6g'
            },
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        },
        {
            id: 6,
            title: 'Authentic Street Tacos',
            description: 'Traditional Mexican street tacos with marinated meat, fresh cilantro, onions, and homemade salsa verde.',
            image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800',
            time: '25 mins',
            servings: 4,
            calories: 380,
            cuisine: 'Mexican',
            mealType: 'dinner',
            cookingTime: 'quick',
            ingredients: [
                '1 lb flank steak or skirt steak, thinly sliced',
                '2 tbsp olive oil',
                '3 limes, juiced and divided',
                '4 cloves garlic, minced',
                '1 tbsp ground cumin',
                '1 tsp chili powder',
                '1/2 tsp paprika',
                '1/2 tsp oregano',
                'Salt and pepper to taste',
                '12 small corn tortillas',
                '1 white onion, finely diced',
                '1/2 cup fresh cilantro, chopped',
                '1 cup salsa verde',
                '2 avocados, sliced',
                '2 radishes, thinly sliced for garnish'
            ],
            instructions: [
                'In a bowl, mix olive oil, juice of 2 limes, garlic, cumin, chili powder, paprika, oregano, salt, and pepper to create the marinade.',
                'Add the sliced meat to the marinade and toss to coat evenly. Let marinate for at least 15 minutes, or up to 4 hours in the refrigerator.',
                'Heat a large skillet over high heat. Add the marinated meat and cook for 5-7 minutes until browned and cooked through.',
                'Warm the corn tortillas in a dry skillet or directly over a gas flame for about 30 seconds per side.',
                'Assemble the tacos by placing a spoonful of the meat on each tortilla. Top with diced onions, chopped cilantro, and a squeeze of the remaining lime juice.',
                'Serve with salsa verde, avocado slices, and radish slices on the side.'
            ],
            tips: [
                'For extra tender meat, marinate overnight in the refrigerator.',
                'Warm your tortillas just before serving for the most authentic experience.',
                'For a smoky flavor, grill the meat instead of cooking it in a skillet.'
            ],
            nutrition: {
                calories: 380,
                protein: '26g',
                carbs: '32g',
                fat: '18g',
                fiber: '7g',
                sugar: '3g'
            },
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        }
    ];
    
    const recipe = recipes.find(r => r.id == selectedRecipeId);
    
    if (!recipe) {
        window.location.href = 'recipes.html';
        return;
    }
    
    populateRecipeDetails(recipe);
    
    const relatedRecipes = recipes
        .filter(r => r.id != recipe.id && (r.cuisine === recipe.cuisine || r.mealType === recipe.mealType))
        .slice(0, 3);
    
    populateRelatedRecipes(relatedRecipes);
    
    document.querySelector('.save-recipe').addEventListener('click', function() {
        this.innerHTML = '<i class="fas fa-bookmark"></i> Saved';
        this.classList.add('saved');
    });
    
    document.querySelector('.print-recipe').addEventListener('click', function() {
        window.print();
    });
    
    document.querySelector('.share-recipe').addEventListener('click', function() {
        alert('Share functionality would be implemented here.');
    });
});

function populateRecipeDetails(recipe) {
    // Set basic recipe information
    document.getElementById('recipe-title').textContent = recipe.title;
    document.getElementById('recipe-time').textContent = recipe.time;
    document.getElementById('recipe-servings').textContent = recipe.servings + ' servings';
    document.getElementById('recipe-calories').textContent = recipe.calories + ' cal';
    document.getElementById('recipe-image').src = recipe.image;
    document.getElementById('recipe-image').alt = recipe.title;
    document.getElementById('recipe-description').innerHTML = `<p>${recipe.description}</p>`;
    
    // Set recipe tags
    const tagsContainer = document.getElementById('recipe-tags');
    tagsContainer.innerHTML = '';
    // tagsContainer.innerHTML += `<span class="tag">${recipe.cuisine}</span>`;
    // tagsContainer.innerHTML += `<span class="tag">${recipe.mealType}</span>`;
    // tagsContainer.innerHTML += `<span class="tag">${recipe.time}</span>`;
    
    // Set ingredients
    const ingredientsContainer = document.getElementById('recipe-ingredients');
    ingredientsContainer.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsContainer.appendChild(li);
    });
    
    // Set instructions
    const instructionsContainer = document.getElementById('recipe-instructions');
    instructionsContainer.innerHTML = '';
    recipe.instructions.forEach((instruction, index) => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsContainer.appendChild(li);
    });
    
    // Set tips
    const tipsContainer = document.getElementById('recipe-tips');
    tipsContainer.innerHTML = '';
    recipe.tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsContainer.appendChild(li);
    });
    
    // Set nutrition facts
    const nutritionContainer = document.getElementById('nutrition-facts');
    nutritionContainer.innerHTML = '';
    
    for (const [key, value] of Object.entries(recipe.nutrition)) {
        const nutritionItem = document.createElement('div');
        nutritionItem.className = 'nutrition-item';
        
        const label = document.createElement('span');
        label.className = 'nutrition-label';
        label.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        
        const nutritionValue = document.createElement('span');
        nutritionValue.className = 'nutrition-value';
        nutritionValue.textContent = value;
        
        nutritionItem.appendChild(label);
        nutritionItem.appendChild(nutritionValue);
        nutritionContainer.appendChild(nutritionItem);
    }
    
    // Set video
    const videoContainer = document.getElementById('recipe-video');
    videoContainer.innerHTML = `
        <iframe src="${recipe.videoUrl}" 
                title="${recipe.title} Video Tutorial" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
    `;
}

// Function to populate related recipes
function populateRelatedRecipes(relatedRecipes) {
    const relatedContainer = document.getElementById('related-recipes');
    relatedContainer.innerHTML = '';
    
    relatedRecipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'related-recipe-card';
        recipeCard.innerHTML = `
            <div class="related-recipe-image">
                <img src="${recipe.image}" alt="${recipe.title}">
            </div>
            <div class="related-recipe-content">
                <h3>${recipe.title}</h3>
                <div class="related-recipe-meta">
                    <span>${recipe.cuisine}</span>
                    <span>${recipe.time}</span>
                </div>
            </div>
        `;
        
        // Add click event to navigate to the related recipe
        recipeCard.addEventListener('click', function() {
            localStorage.setItem('selectedRecipeId', recipe.id);
            window.location.href = 'recipe-detail.html';
        });
        
        relatedContainer.appendChild(recipeCard);
    });
}
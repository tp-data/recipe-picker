var recipes = [
    "Roasted Sweet Potato and Kale Salad",
    "Garlic Fried Chicken (Gluten-Free)",
    "Baked Ziti",
    "Garlic Smashed Cucumber Salad"
  ];

var ingredients = [
    "8 cups kale, shredded; 1 sweet potato, peeled and chopped into bite-sized cubes; 1/4 cup walnuts, raw; 1/2 feta cheese, crumbled, optional; 6 tablespoons white balsamic vinegar; 4 tablespoons olive oil; 2 small garlic clove, pressed or minced; 2 teaspoons maple syrup; Sea salt to taste",
    "6 Chicken Thigh skin on & bone-in; 2.5 tbsp of Soy Sauce; 2 tbsp of minced Garlic; 1 tbsp of Garlic Powder; 1 tsp of Black Pepper; 3 tbsp of Chinese Cooking Wine optional; Batter:; ½ cup of Corn Starch; 1 cup of Rice Flour; 2 Eggs; ⅓ cup of Soda Water COLD; 2 tsp of Garlic Powder; 1.5 tsp of Paprika; 2 tsp of Chili Powder optional; 1 tbsp of Chicken Powder optional; Salt & Pepper",
    "1 pound uncooked ziti or penne pasta; 1 pound Italian sausage meat; 1 medium onion chopped; 4-5 cloves garlic minced; 1/2 teaspoon Italian seasoning; 1/4 teaspoon crushed red pepper flakes optional; 1 (28 fluid once) can crushed tomatoes; 1 cup heavy/whipping cream; 1/2 teaspoon salt; Pepper to taste; 1 teaspoon sugar see note; 8 ounces ricotta cheese; 1 cup freshly grated parmesan cheese; 2 cups shredded mozzarella; For serving: fresh chopped parsley and/or basil optional",
    "2 English Cucumber; 10 cloves Garlic chopped; 4 tbsp oil; 2 tbsp of Sugar; 1 tsp of Salt; 3 tbsp Black Vinegar; 1.5 tbsp Soy Sauce; 1 tsp Sesame Seeds; Cilantro"
  ];

var links = [
    "https://www.livingplate.org/recipes/roasted-sweet-potato-and-kale-salad/",
    "https://tiffycooks.com/garlic-fried-chicken-gluten-free/",
    "https://www.saltandlavender.com/baked-ziti/",
    "https://tiffycooks.com/garlic-smashed-cucumber-salad/"
  ];

  $("#click").on('click', function(evt) {
    // pick random recipe, then show in console
    var ansIndex = Math.floor(Math.random() * (recipes.length));
    
    // Display Recipe 
    var recipe = recipes[ansIndex];
    $("#svg-container h4").text(recipe);

    // Display Ingredients 
    var ingredient = ingredients[ansIndex];
    
    document.getElementById(`ul`).innerHTML = "";
    
    var charArry = ingredient.split('; ');
    let ul = document.querySelector('#ul')
    charArry.forEach(liTxt => {
    let li = document.createElement('li')
    li.innerHTML = liTxt
    ul.appendChild(li)
    })

    // Display Link 
    var link = links[ansIndex];
    var link_id = document.querySelector('#link_id')
    link_id.href = link;
    link_id.style.display = "block";
    
  });
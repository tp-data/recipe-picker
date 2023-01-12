var recipes = [
    "Roasted Sweet Potato and Kale Salad",
    "Garlic Fried Chicken (Gluten-Free)",
    "Baked Ziti",
    "Garlic Smashed Cucumber Salad",
    "Low Carb Greek Chicken Bowls",
    "Pineapple Cupcakes",
    "Buffalo Chicken Meatballs",
    "Greek Yogurt Curry Chicken Marinade",
    "Golden Lemon Pepper Wings"
  ];

var ingredients = [
    "8 cups kale, shredded; 1 sweet potato, peeled and chopped into bite-sized cubes; 1/4 cup walnuts, raw; 1/2 feta cheese, crumbled, optional; 6 tablespoons white balsamic vinegar; 4 tablespoons olive oil; 2 small garlic clove, pressed or minced; 2 teaspoons maple syrup; Sea salt to taste",
    "6 Chicken Thigh skin on & bone-in; 2.5 tbsp of Soy Sauce; 2 tbsp of minced Garlic; 1 tbsp of Garlic Powder; 1 tsp of Black Pepper; 3 tbsp of Chinese Cooking Wine optional; Batter:; ½ cup of Corn Starch; 1 cup of Rice Flour; 2 Eggs; ⅓ cup of Soda Water COLD; 2 tsp of Garlic Powder; 1.5 tsp of Paprika; 2 tsp of Chili Powder optional; 1 tbsp of Chicken Powder optional; Salt & Pepper",
    "1 pound uncooked ziti or penne pasta; 1 pound Italian sausage meat; 1 medium onion chopped; 4-5 cloves garlic minced; 1/2 teaspoon Italian seasoning; 1/4 teaspoon crushed red pepper flakes optional; 1 (28 fluid once) can crushed tomatoes; 1 cup heavy/whipping cream; 1/2 teaspoon salt; Pepper to taste; 1 teaspoon sugar see note; 8 ounces ricotta cheese; 1 cup freshly grated parmesan cheese; 2 cups shredded mozzarella; For serving: fresh chopped parsley and/or basil optional",
    "2 English Cucumber; 10 cloves Garlic chopped; 4 tbsp oil; 2 tbsp of Sugar; 1 tsp of Salt; 3 tbsp Black Vinegar; 1.5 tbsp Soy Sauce; 1 tsp Sesame Seeds; Cilantro",
    "Nonfat Plain Greek Yogurt; 1/4 cup Lemon Juice; 3 cloves Garlic; 1/2 tsp. Salt; 1/4 tsp. Pepper; 1 Tbsp. Oregano; 1 Tbsp. Red Wine Vinegar; 1 cup Nonfat Plain Greek Yogurt; 1 Tbps. Lemon Juice; 1 Tbsp. Garlic; 1/2 tsp. Salt; 1/4 tsp. Pepper; 1 Tbsp. Dill; 1/4 cup Olive Oil; 1 Cucumber, sliced; 1 pint Cherry Tomatoes (or sliced tomatoes of your choice); 1/2 cup Red Onion, thinly sliced; 1 Tbsp. Lemon Juice; 1/4 cup Olive Oil; 1 Tbsp. Red Wine Vinegar; 1 Tbsp. Garlic; 1 Tbsp. Oregano",
    "1 ⅔ cups (216 g) all-purpose flour; 1 teaspoon baking powder; ½ teaspoon salt; ½ cup (113 g) unsalted butter, softened; ¼ cup (53 g) light brown sugar, packed; ½ cup (100 g) granulated sugar; 1 teaspoon vanilla extract; 2 large eggs; 8-ounce can (234 g) crushed pineapple, undrained; 1 cups (43 g) freeze-dried pineapple; ¾ cups (170 g) unsalted butter, softened; 2 ¾ cups (240 g) confectioners' sugar, sifted; 1 teaspoon vanilla extract; ⅛ teaspoon salt; 3 tablespoons heavy cream",
    "1 lb chicken, ground; ½ cup bread crumbs; 1 egg; 2 garlic cloves, minced; ¼ cup grated onion, liquid drained; 1 tsp salt; ½ tsp garlic powder; ½ tsp onion powder; ¼ cup buffalo sauce. plus more for serving; blue cheese dressing, for serving; celery, for serving",
    "1 cup 0% plain Greek yogurt; 3 garlic cloves minced; 2 teaspoons honey; 2 tablespoons lime juice; 1 tablespoon olive oil; 1 tablespoon curry powder; 1 tablespoon chili powder; 1/2 tablespoon cumin; 1 teaspoon onion powder; 1 teaspoon salt; For the chicken; 2 pounds boneless skinless chicken thighs (about 8 chicken thighs); chopped cilantro to garnish",
    "2½-3 pounds chicken wings, halved at joint; 1 tablespoon baking powder (aluminum free); 1 teaspoon kosher salt; ¾ teaspoon garlic powder, divided; ¼ teaspoon sweet paprika; 2 teaspoons lemon pepper seasoning (with salt); 2 tablespoon fresh lemon juice; 4 tablespoons cold salted butter, cut into 4 pieces; 2 tablespoons lemon zest; black pepper, to taste"
  ];

var links = [
    "https://www.livingplate.org/recipes/roasted-sweet-potato-and-kale-salad/",
    "https://tiffycooks.com/garlic-fried-chicken-gluten-free/",
    "https://www.saltandlavender.com/baked-ziti/",
    "https://tiffycooks.com/garlic-smashed-cucumber-salad/",
    "https://fitmomjourney.com/low-carb-greek-chicken-bowls/",
    "https://www.bakedbyanintrovert.com/pineapple-cupcakes/",
    "https://themodernproper.com/buffalo-chicken-meatballs",
    "https://www.hauteandhealthyliving.com/curry-chicken-marinade/",
    "https://littlespicejar.com/lemon-pepper-wings/"
  ];

  var instructions = [
    "Wash and shred kale, removing spines first.; Peel and chop sweet potato.; Preheat oven to 350°F.; Place sweet potato in bowl and toss with 1 tablespoon olive oil and few dashes of salt. Place on parchment-line baking sheet and bake until soft and edges are browned, about 20 minutes.; Meanwhile, place kale in large bowl. Massage for 3 minutes until softened.; Add remaining oil, vinegar, garlic, and maple syrup to a mason jar. Shake to emulsify.; When sweet potatoes are done, remove from oven and let cool. Add to kale along with walnuts and feta cheese [if using].; Toss with dressing just before serving.",
    "Optional: cut a slit along the bone of the chicken thigh to open up the chicken, this will help the chicken fry more evenly and the chicken to not curl up.; Marinate the chicken with soy sauce, minced garlic, garlic powder, black pepper, and Chinese cooking wine for at least 20 minutes or overnight.; To prepare the batter, mix corn starch, rice flour, eggs, garlic powder, paprika, chili powder, chicken powder, season with salt and pepper, and ice-cold soda water.; Add in the chicken and let it rest for 5-10 minutes.; In a pan, add in oil (I am using grapeseed oil), and bring it to 150 C. Add the chicken legs into the oil and fry for 6-7 minutes.; Remove the chicken, increase the heat to 180 C and fry for another 2-3 minutes or until crispy and golden brown.;",
    "Preheat your oven to 375F and move the rack to the top third of the oven. Boil a salted pot of water and cook the ziti for 2-3 minutes less than package directions indicate. Drain and set aside once it's done.; Meanwhile, add the sausage meat and onion to a pot and cook until browned (about 7-10 minutes), stirring occasionally.; Add the garlic, Italian seasoning, and red pepper flakes to the pot and cook for about a minute.; Stir in the crushed tomatoes, cream, salt & pepper, and sugar. Let it heat through (about 5 minutes).; Drain the pasta and add it to the pot. Toss with the sauce.; Add half the pasta mixture to a 9x13 casserole dish (spread it out evenly to create your bottom layer).; Spoon the ricotta over the pasta for the cheesy middle layer (you don't need to be too neat... I just put dollops here and there).; Spoon the remaining pasta into the casserole dish to create an even top layer (I don't stir it).; Sprinkle the parmesan and mozzarella over top.; Bake, uncovered, for 20 minutes (or until hot & bubbly), and then broil (watch it closely) to brown the cheese.; Serve with some fresh basil and/or parsley if desired.",
    "",
    "",
    "Prepare to bake. Preheat the oven to 350ºF. Line a 12 cup muffin pan with cupcake liners.; Mix the dry ingredients. In a medium mixing bowl, combine the flour, baking powder, and salt. Stir with a whisk to combine. Set aside.; Mix the wet ingredients. In a separate mixing bowl, cream the butter and sugar on medium speed until creamy. Turn the mixer to low, beat in the vanilla, and then beat in the eggs, one at a time, mixing well after each addition. Add in the crushed pineapple and its juice. Add the flour mixture, mixing just until combined.; Bake. Divide the batter evenly among the prepared muffin cups. Bake for 15 to 20 minutes or until a wooden toothpick inserted into the centers comes out clean.; Cool the cupcakes in the pan for 5 minutes before transferring them to a wire rack to cool completely. Top with buttercream frosting of your choice.",
    "",
    "",
    "",
  ];

  $("#click").on('click', function(evt) {
    // pick random recipe, then show in console
    var ansIndex = Math.floor(Math.random() * (recipes.length));
    
    // Display Recipe 
    var recipe = recipes[ansIndex];
    $("#meal_container h1").text(recipe);
    console.log(recipe);


    // Display Ingredients 
    var ingredient = ingredients[ansIndex];
    
    document.getElementById(`ingredients_list`).innerHTML = "";
    
    var charArry = ingredient.split('; ');
    let ul = document.querySelector('#ingredients_list')
    charArry.forEach(liTxt => {
    var li = document.createElement('li')
    li.setAttribute('type', 'checkbox');
    li.innerHTML = liTxt
    ul.appendChild(li)
    })
    console.log(ingredient);

    // Display Instructions 
    var instruction = instructions[ansIndex];

    document.getElementById(`instructions_list`).innerHTML = "";
    
    var charArry = instruction.split('; ');
    let instruction_ul = document.querySelector('#instructions_list')
    charArry.forEach(liTxt => {
    var li = document.createElement('li')
    li.setAttribute('type', 'checkbox');
    li.innerHTML = liTxt
    instruction_ul.appendChild(li)
    })
    console.log(instruction);


    // Display Link 
    var link = links[ansIndex];
    var link_id = document.querySelector('#link')
    link_id.href = link;
    link_id.style.display = "block";
    console.log(link);

  });

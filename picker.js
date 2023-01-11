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

  $("#click").on('click', function(evt) {
    // pick random recipe, then show in console
    var ansIndex = Math.floor(Math.random() * (recipes.length));
    
    // Display Recipe 
    var recipe = recipes[ansIndex];
    $("#svg-container h1").text(recipe);
    console.log(recipe);


    // Display Ingredients 
    var ingredient = ingredients[ansIndex];
    
    document.getElementById(`ul`).innerHTML = "";
    
    var charArry = ingredient.split('; ');
    let ul = document.querySelector('#ul')
    charArry.forEach(liTxt => {
    var li = document.createElement('li')
    li.setAttribute('type', 'checkbox');
    li.innerHTML = liTxt
    ul.appendChild(li)
    })
    console.log(ingredient);


    // Display Link 
    var link = links[ansIndex];
    var link_id = document.querySelector('#link_id')
    link_id.href = link;
    link_id.style.display = "block";
    console.log(link);

  });




// d3.csv("/meals.csv").then(function(data) {
//   console.log(data);
// });



// const input = csvFile.files[0];
// const reader = new FileReader();

// reader.onload = function (e) {
//   const text = e.target.result;
//   const data = csvToArray(text);
//   document.write(JSON.stringify(data));
// };

// reader.readAsText(input);



// console.log(csvFile);

// console.log(csvArray[1][2])
// var csv_file = new File([""], 'meals.csv');
// csv_file.open('r');
// csv_file.encoding = 'utf-8';
// var data = csv_file.read().split('/\r\n|\n/'); // split by lines
// csv_file.close();
// for (var row in data) data[row].split(','); // split all lines by comas

// alert(data); // here is your 2d array
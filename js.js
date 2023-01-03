var recipes = [
    "pasta",
    "chicken",
    "steak",
    "soup"
  ];

var ingredients = [
    "noodles and sauce",
    "chicken and heat",
    "steak and heat",
    "broth and bowl"
  ];

  $("#click").on('click', function(evt) {
    // pick random recipe, then show in console
    var ansIndex = Math.floor(Math.random() * (recipes.length));
    
    // Display Recipe 
    var recipe = recipes[ansIndex];
    $("#svg-container h4").text(recipe);

    // Display Ingredients 
    var ingredient = ingredients[ansIndex];
    $("#svg-container h5").text(ingredient);
    
  });
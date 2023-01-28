  $("#click").on('click', function(evt) {
    // pick random recipe
    async function foo() {
      let obj;
    
      const res = await fetch('meals.json')
    
      obj = await res.json();
    
      const ansIndex = Math.floor(Math.random() * (8));
      
      
      // Display recipe 
      const recipe = obj.meals[ansIndex].recipe;
      $("#meal_container h1").text(recipe);
      console.log(recipe);


      // Display ingredient       
      var ingredient = obj.meals[ansIndex].ingredient;
    
      document.getElementById(`ingredients_list`).innerHTML = "";
      
      var charArry = ingredient.split('; ');
      let ul = document.querySelector('#ingredients_list')
      charArry.forEach(liTxt => {
      var li = document.createElement('li')
      var input = document.createElement('input')
      input.setAttribute('type', 'checkbox');
      li.innerHTML = liTxt
      ul.appendChild(li)
      li.appendChild(input)
      })
      console.log(ingredient);

    
      // Display Instructions 
      var instruction = obj.meals[ansIndex].instruction;

      document.getElementById(`instructions_list`).innerHTML = "";
    
      var charArry = instruction.split('; ');
      let instruction_ul = document.querySelector('#instructions_list')
      charArry.forEach(liTxt => {
      var li = document.createElement('li')
      li.innerHTML = liTxt
      instruction_ul.appendChild(li)
      })
      console.log(instruction);


      // Display Link 
      var link = obj.meals[ansIndex].link;
      var link_id = document.querySelector('#link')
      link_id.href = link;
      link_id.style.display = "block";
      console.log(link);
    }
    
    foo();



  });

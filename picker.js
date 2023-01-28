  $("#recipe_picker").on('click', function(evt) {
    
    var column = document.getElementsByClassName('column')
    column[0].style.display = "block";
    column[1].style.display = "block";

    var title = document.getElementById('title')
    title.style.display = 'none';

    // pick random recipe
    async function foo() {
      let obj;
      const res = await fetch('meals.json')
      obj = await res.json();
      const ansIndex = Math.floor(Math.random() * (8));
      
      // Display recipe 
      const recipe = obj.meals[ansIndex].recipe;
      $("#meal_container h2").text(recipe);
      // console.log(recipe);

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
      // console.log(ingredient);

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
      // console.log(instruction);

      // Display Link 
      var link = obj.meals[ansIndex].link;
      var link_id = document.querySelector('#link')
      link_id.href = link;
      link_id.style.display = "block";
      // console.log(link);

      var img_id = document.querySelector('#image')
      var img = document.createElement("img");
      img.src = obj.meals[ansIndex].image;
      img.style.width = "inherit";
      img.style.height = "inherit";
      img_id.innerHTML = ""
      img_id.appendChild(img);

      var icons = ["fa-bacon", "fa-bread-slice", "fa-cheese", "fa-drumstick-bite", "fa-egg", "fa-hamburger", "fa-hotdog", "fa-ice-cream", "fa-pepper-hot", "fa-pizza-slice"]
      const rand = Math.floor(Math.random() * (10));
      var icon = document.querySelector("#meal_icon");
      icon.className = ''
      icon.classList.add("fas", icons[rand])
      // console.log(icons[rand]);

    }

    foo();

  });

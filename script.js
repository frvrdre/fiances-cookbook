// DOM elements

const recipeFavorites =
  document.getElementById("recipe-favorites");

const recipeMusthaves =
  document.getElementById("recipe-must-haves");

const recipeEasyMeal =
  document.getElementById("recipe-easy-meal");

const pomBtn =
  document.getElementById("pom-btn");

const pomAudio =
  document.getElementById("pom-audio");

const warningEl =
  document.getElementById("warning");

const mainEl =
  document.getElementById("main");

const navEl =
  document.querySelector(".site-header");

const exitPom =
  document.getElementById("exit-pom");


// Pom click count

let pomCount = 0;


// Recipe data

const recipes = [
  {
    id: "hot-honey-garlic-parmesan-chicken-skewers",
    name: "Hot Honey Garlic Parmesan Chicken Skewers",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: false,
    isMusthaves: true,
    isEasyMeal: false
  },

  {
    id: "one-pan-chicken-and-rice",
    name: "One Pan Chicken and Rice",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: false,
    isMusthaves: true,
    isEasyMeal: true
  },

  {
    id: "beef-tacos",
    name: "Beef Tacos",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: false,
    isMusthaves: true,
    isEasyMeal: true
  },

  {
    id: "mac-and-cheese",
    name: "Mac and Cheese",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: false,
    isMusthaves: true,
    isEasyMeal: true
  },

  {
    id: "chicken-garlic-baguette",
    name: "Chicken Garlic Baguette",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: false,
    isMusthaves: false,
    isEasyMeal: true
  },

  {
    id: "chicken-cajun-pasta",
    name: "Chicken Cajun Pasta",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: true,
    isMusthaves: true,
    isEasyMeal: false
  },

  {
    id: "taco-loaded-potatoes",
    name: "Taco Loaded Potatoes",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: false,
    isMusthaves: false,
    isEasyMeal: true
  },

  {
    id: "roast-potatoes",
    name: "Roast Potatoes",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: false,
    isMusthaves: true,
    isEasyMeal: false
  },

  {
    id: "seasoned-drumsticks",
    name: "Seasoned Drumsticks",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: false,
    isMusthaves: true,
    isEasyMeal: true
  },

  {
    id: "chicken-and-shrimp-cajun-pasta",
    name: "Chicken and Shrimp Cajun Pasta",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: true,
    isMusthaves: true,
    isEasyMeal: false
  },

  {
    id: "chicken-and-broccoli-pasta-bake",
    name: "Chicken and Broccoli Pasta Bake",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: false,
    isMusthaves: false,
    isEasyMeal: true
  },

  {
    id: "red-thai-chicken-curry",
    name: "Red Thai Chicken Curry",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: true,
    isMusthaves: false,
    isEasyMeal: false
  },

  {
    id: "cajun-chicken-rigatoni",
    name: "Cajun Chicken Rigatoni",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: false,
    isMusthaves: true,
    isEasyMeal: true
  },

  {
    id: "chicken-skewers-with-baby-potatoes-and-avocado",
    name: "Chicken Skewers with Baby Potatoes and Avocado",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: false,
    isMusthaves: true,
    isEasyMeal: false
  },

  {
    id: "chicken-sausage-pasta",
    name: "Chicken Sausage Pasta",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: false,
    isMusthaves: false,
    isEasyMeal: true
  },

  {
    id: "creamy-garlic-mozzarella-chicken-pasta",
    name: "Creamy Garlic Mozzarella Chicken Pasta",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: true,
    isMusthaves: true,
    isEasyMeal: false
  },

  {
    id: "bbq-sweet-chilli-sausage-pasta",
    name: "BBQ Sweet Chilli Sausage Pasta",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: false,
    isMusthaves: false,
    isEasyMeal: true
  },

  {
    id: "honey-glazed-lamb-chops",
    name: "Honey Glazed Lamb Chops",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: true,
    isMusthaves: true,
    isEasyMeal: false
  },

  {
    id: "southern-fried-cabbage",
    name: "Southern Fried Cabbage",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: false,
    isMusthaves: true,
    isEasyMeal: false
  },

  {
    id: "steamed-vegetables",
    name: "Steamed Vegetables",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: false,
    isMusthaves: false,
    isEasyMeal: true
  },

  {
    id: "chicken-taco",
    name: "Chicken Taco",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: false,
    isMusthaves: false,
    isEasyMeal: true
  },

  {
    id: "chicken-milanese",
    name: "Chicken Milanese",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: true,
    isMusthaves: false,
    isEasyMeal: false
  },

  {
    id: "chicken-fried-rice",
    name: "Chicken Fried Rice",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: false,
    isMusthaves: true,
    isEasyMeal: true
  },

  {
    id: "chilli-con-carne",
    name: "Chilli Con Carne",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: false,
    isMusthaves: true,
    isEasyMeal: false
  },

  {
    id: "one-pan-chicken-fajita-enchiladas",
    name: "One Pan Chicken Fajita Enchiladas",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: true,
    isMusthaves: true,
    isEasyMeal: false
  },

  {
    id: "yellow-rice",
    name: "Yellow Rice",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: false,
    isMusthaves: true,
    isEasyMeal: true
  },

  {
    id: "air-fryer-honey-glazed-carrots",
    name: "Air Fryer Honey Glazed Carrots",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: false,
    isMusthaves: false,
    isEasyMeal: true
  },

  {
    id: "cauliflower-and-broccoli-cheese",
    name: "Cauliflower and Broccoli Cheese",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: false,
    isMusthaves: true,
    isEasyMeal: false
  },

  {
    id: "garlic-parmesan-chicken-skewers",
    name: "Garlic Parmesan Chicken Skewers",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: true,
    isMusthaves: true,
    isEasyMeal: false
  },

  {
    id: "hot-honey-bbq-chicken",
    name: "Hot Honey BBQ Chicken",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: true,
    isMusthaves: false,
    isEasyMeal: true
  },

  {
    id: "spiced-chicken-and-rice",
    name: "Spiced Chicken and Rice",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: false,
    isMusthaves: true,
    isEasyMeal: true
  },

  {
    id: "honey-garlic-beef-pasta",
    name: "Honey Garlic Beef Pasta",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: true,
    isMusthaves: true,
    isEasyMeal: false
  },

  {
    id: "korean-fried-chicken",
    name: "Korean Fried Chicken",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: true,
    isMusthaves: true,
    isEasyMeal: false
  },

  {
    id: "street-corn-chicken-and-rice-bowl",
    name: "Street Corn Chicken and Rice Bowl",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: true,
    isMusthaves: false,
    isEasyMeal: true
  },

  {
    id: "honey-chilli-beef-pasta",
    name: "Honey Chilli Beef Pasta",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "5/5",
    isFavorite: true,
    isMusthaves: true,
    isEasyMeal: false
  },

  {
    id: "meat-feast-pasta",
    name: "Meat Feast Pasta",
    image: "/assets/images/image.png",
    rating: "5 stars",
    difficulty: "3/5",
    isFavorite: false,
    isMusthaves: true,
    isEasyMeal: false
  }
];


// Render favorite recipes

function renderFavCards() {

  // Clears the container before rendering

  recipeFavorites.innerHTML = "";


  // Loops through every recipe

  recipes.forEach(function(recipe) {

    // Only renders recipes marked as favorite

    if (recipe.isFavorite === true) {

      recipeFavorites.innerHTML += `
        <article class="recipe-card">

          <a
            href="recipe.html?id=${recipe.id}"
            class="recipe-btn"
          >

            <img
              src="${recipe.image}"
              alt="Photo of ${recipe.name}"
            >

            <p class="recipe-title">
              ${recipe.name}
            </p>

            <div class="recipe-hover-info">

              <p>
                ${recipe.rating}
              </p>

              <p>
                Difficulty: ${recipe.difficulty}
              </p>

            </div>

          </a>

        </article>
      `;
    }

  });
}


// Render must-have recipes

function renderMustCards() {

  // Clears the container before rendering

  recipeMusthaves.innerHTML = "";


  // Loops through every recipe

  recipes.forEach(function(recipe) {

    // Only renders recipes marked as must-have

    if (recipe.isMusthaves === true) {

      recipeMusthaves.innerHTML += `
        <article class="recipe-card">

          <a
            href="recipe.html?id=${recipe.id}"
            class="recipe-btn"
          >

            <img
              src="${recipe.image}"
              alt="Photo of ${recipe.name}"
            >

            <p class="recipe-title">
              ${recipe.name}
            </p>

            <div class="recipe-hover-info">

              <p>
                ${recipe.rating}
              </p>

              <p>
                Difficulty: ${recipe.difficulty}
              </p>

            </div>

          </a>

        </article>
      `;
    }

  });
}


// Render easy meals

function renderEasyCards() {

  // Clears the container before rendering

  recipeEasyMeal.innerHTML = "";


  // Loops through every recipe

  recipes.forEach(function(recipe) {

    // Only renders recipes marked as easy meals

    if (recipe.isEasyMeal === true) {

      recipeEasyMeal.innerHTML += `
        <article class="recipe-card">

          <a
            href="recipe.html?id=${recipe.id}"
            class="recipe-btn"
          >

            <img
              src="${recipe.image}"
              alt="Photo of ${recipe.name}"
            >

            <p class="recipe-title">
              ${recipe.name}
            </p>

            <div class="recipe-hover-info">

              <p>
                ${recipe.rating}
              </p>

              <p>
                Difficulty: ${recipe.difficulty}
              </p>

            </div>

          </a>

        </article>
      `;
    }

  });
}


// Initial page render

renderFavCards();

renderMustCards();

renderEasyCards();


// Pom button Easter egg

function pomChaos() {

  // Adds one to the Pom click counter

  pomCount++;


  // Restarts the sound so fast clicks still play it

  pomAudio.currentTime = 0;

  pomAudio.play();


  // Creates the confetti

  createConfetti();


  // Shows warning after 15 clicks

  if (pomCount >= 15) {
    clickStopper();
  }

}


// Pom button click listener

pomBtn.addEventListener(
  "click",
  pomChaos
);


// Confetti

function createConfetti() {

  const colors = [
    "#ff69b4",
    "#ffd65c",
    "#ffaacd",
    "#ffb496",
    "#d2b4ff",
    "#aaebcd"
  ];


  // Creates 100 individual pieces of confetti

  for (let i = 0; i < 100; i++) {

    const confetti =
      document.createElement("div");


    // Gives the new element its CSS class

    confetti.classList.add("confetti");


    // Picks a random colour

    confetti.style.backgroundColor =
      colors[
        Math.floor(
          Math.random() * colors.length
        )
      ];


    // Gives each piece a random horizontal position

    confetti.style.left =
      Math.random() * 100 + "vw";


    // Gives each piece a slightly different delay

    confetti.style.animationDelay =
      Math.random() * 0.5 + "s";


    // Gives each piece a random falling speed

    confetti.style.animationDuration =
      Math.random() * 2 + 2 + "s";


    // Adds confetti to the page

    document.body.appendChild(confetti);


    // Removes it after the animation finishes

    setTimeout(function() {
      confetti.remove();
    }, 5000);

  }

}


// Pom click warning

function clickStopper() {

  // Shows the warning

  warningEl.classList.remove("hidden");


  // Fades and disables the main website

  mainEl.classList.add("blurAll");

  navEl.classList.add("blurAll");

}


// Close Pom warning

function closePom() {

  // Hides the warning

  warningEl.classList.add("hidden");


  // Restores the website

  mainEl.classList.remove("blurAll");

  navEl.classList.remove("blurAll");


  // Resets the click counter

  pomCount = 0;

}


// Exit warning button

exitPom.addEventListener(
  "click",
  closePom
);

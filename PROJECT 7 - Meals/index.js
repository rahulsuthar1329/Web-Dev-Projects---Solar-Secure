$.ajax({
  type: "get",
  url: "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian",
  success: function (response) {
    for (i = 0; i < response.meals.length; i++) {
      meal_id = response.meals[i].idMeal;
      meal_name = response.meals[i].strMeal;
      meal_image = response.meals[i].strMealThumb;

      newdiv = `<div class='col-md-3 m-2 text-center'>
            <h3>${meal_id}</h3>
            <img src="${meal_image}" class='img-fluid' />
            <h3>${meal_name}</h3>
        </div>`;

      $("#items").append(newdiv);
    }
  },
  error: function (error) {
    console.log(error);
  },
});
// idMeal
// strMeal
// strMealThumb

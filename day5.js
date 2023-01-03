import { Dashboard } from '@material-ui/icons';
import axios from 'axios';
import React from 'react';
// import Header from './Header';
//import Navbar from './Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Index from './pages/Home';
import Dash from './pages/Dashboard';

const App = () => {


  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
    params: {
      query: 'pasta',
      cuisine: 'italian',
      excludeCuisine: 'greek',
      diet: 'vegetarian',
      intolerances: 'gluten',
      equipment: 'pan',
      includeIngredients: 'tomato,cheese',
      excludeIngredients: 'eggs',
      type: 'main course',
      instructionsRequired: 'true',
      fillIngredients: 'false',
      addRecipeInformation: 'false',
      titleMatch: 'Crock Pot',
      maxReadyTime: '20',
      ignorePantry: 'true',
      sort: 'calories',
      sortDirection: 'asc',
      minCarbs: '10',
      maxCarbs: '100',
      minProtein: '10',
      maxProtein: '100',
      minCalories: '50',
      maxCalories: '800',
      minFat: '10',
      maxFat: '100',
      minAlcohol: '0',
      maxAlcohol: '100',
      minCaffeine: '0',
      maxCaffeine: '100',
      minCopper: '0',
      maxCopper: '100',
      minCalcium: '0',
      maxCalcium: '100',
      minCholine: '0',
      maxCholine: '100',
      minCholesterol: '0',
      maxCholesterol: '100',
      minFluoride: '0',
      maxFluoride: '100',
      minSaturatedFat: '0',
      maxSaturatedFat: '100',
      minVitaminA: '0',
      maxVitaminA: '100',
      minVitaminC: '0',
      maxVitaminC: '100',
      minVitaminD: '0',
      maxVitaminD: '100',
      minVitaminE: '0',
      maxVitaminE: '100',
      minVitaminK: '0',
      maxVitaminK: '100',
      minVitaminB1: '0',
      maxVitaminB1: '100',
      minVitaminB2: '0',
      maxVitaminB2: '100',
      minVitaminB5: '0',
      maxVitaminB5: '100',
      minVitaminB3: '0',
      maxVitaminB3: '100',
      minVitaminB6: '0',
      maxVitaminB6: '100',
      minVitaminB12: '0',
      maxVitaminB12: '100',
      minFiber: '0',
      maxFiber: '100',
      minFolate: '0',
      maxFolate: '100',
      minFolicAcid: '0',
      maxFolicAcid: '100',
      minIodine: '0',
      maxIodine: '100',
      minIron: '0',
      maxIron: '100',
      minMagnesium: '0',
      maxMagnesium: '100',
      minManganese: '0',
      maxManganese: '100',
      minPhosphorus: '0',
      maxPhosphorus: '100',
      minPotassium: '0',
      maxPotassium: '100',
      minSelenium: '0',
      maxSelenium: '100',
      minSodium: '0',
      maxSodium: '100',
      minSugar: '0',
      maxSugar: '100',
      minZinc: '0',
      maxZinc: '100',
      offset: '0',
      number: '10',
      limitLicense: 'false',
      ranking: '2'
    },
    headers: {
      'X-RapidAPI-Key': '8875238321mshc4a9010c9862f6bp1218bcjsndd7aaf7c1bc4',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };

  const getData = async () => {
    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });

    // const options = {
    //   method: 'GET',
    //   url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/guessNutrition',
    //   params: { title: 'Spaghetti Aglio et Olio' },
    //   headers: {
    //     'X-RapidAPI-Key': '8875238321mshc4a9010c9862f6bp1218bcjsndd7aaf7c1bc4',
    //     'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    //   }
    // };
    // try {

    //   const response = await axios.request(options);
    //   const result = response.data;
    //   debugger
    //   console.log(result);
    // } catch (err) {
    //   throw err
    // }

    // const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch';

    // axios.request(url).then(function (response) {
    //   console.log(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });

    const response = await axios.get('https://dummyjson.com/products');
    //debugger
    console.log(response);
  }

  React.useEffect(() => {
    getData();
  }, [])

  return (
    <div>

      <BrowserRouter>
        <Link to='/'><li>Header</li></Link>
        <Link to="/network"><li>network</li></Link>
        <Link to="/job"><li>job</li></Link>
        <Link to="/message"><li>message</li></Link>
        <Link to="/notofication"><li>notification</li></Link>
        <Link to="/"><div>Dashboard</div></Link>
        <Routes>

          <Route path="/" element={<Dash />} />
          <Route path="/network" element={<network />} />
          <Route path="/job" element={<job />} />
          <Route path="/message" element={<message />} />
          <Route path="/notification" element={<notification />} />
        </Routes>
        {/* <Header/> */}
        {/* <Navbar /> 
     */}
      </BrowserRouter>
      <Dashboard/>
    



    </div>
  )
}
export default App
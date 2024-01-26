import MealItem from './meal-item.js'
import classes from './meals-grid.module.css'

export default function MealsGrid({meals}){
    return <ul className={classes.meals}>
        {meals.map(meal => 
        <li key={meals.id}>
            <MealItem {...meal} />    
        </li>)}
    </ul>
}
import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import RecipeCard from './RecipeCard';

RecipeList.propTypes = {
    recipes: PropTypes.array
};

export default function RecipeList({recipes, ...other}){
    return (
        <Grid container spacing={3} {...other}>
            {recipes.map((recipe) => (
                <Grid key={recipe.id} item xs={12} sm={6} md={3}>
                    <RecipeCard recipe={recipe} />
                </Grid>
            ))}
        </Grid>
    )
}
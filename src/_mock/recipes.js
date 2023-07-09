import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const RECIPE_NAME = [
  'La Bouillie',
  'Nouilles Shirataki',
  'Chillie Sin Carne',
  'Lasagne veggie',
];
const RECIPE_TAGS = [
  {title: 'Spicy', color: 'warning', icon: ''},
  {title: 'Low cal', color: 'secondary', icon: ''},
  {title: 'Vegan', color: 'success', icon: 'spa'},
  {title: 'Easy', color: 'success', icon: ''},
  {title: 'Fast', color: 'success', icon: ''}
];

// ----------------------------------------------------------------------

const recipes = [...Array(4)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    image: `/assets/images/recipes/recipe_${setIndex}.jpg`,
    name: RECIPE_NAME[index],
    prep_time: faker.datatype.number({ min: 5, max: 45, precision: 1 }),
    cook_time: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    tags:
      (setIndex === 1 && RECIPE_TAGS.slice(0, 2)) ||
      (setIndex === 2 && RECIPE_TAGS.slice(1, 3)) ||
      (setIndex === 3 && RECIPE_TAGS.slice(2, 4)) ||
      (setIndex === 4 && RECIPE_TAGS.slice(3, 6)) ||
      (setIndex === 23 && RECIPE_TAGS.slice(4, 6)) ||
      (setIndex === 24 && RECIPE_TAGS.slice(5, 6)) ||
      RECIPE_TAGS,
  };
});

export default recipes;

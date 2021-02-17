import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  state() {
    return {
      recipes: [
        {
          id: 'r1',
          title: 'French Onion Soup Gratinee',
          description: 'I’ve been making variations of this salad for years. I recently learned how to massage the kale and it makes a huge difference. I had a friend ask for my recipe and I realized I don’t have one. This is my first attempt at writing a recipe, so please let me know how it works out! I like to change up the ingredients: sometimes a pear instead of an apple, cranberries instead of currants, Parmesan instead of feta, etc. Great as a side dish or by itself the next day for lunch!',
          ingredients: [
            '4 tablespoons butter', '1 teaspoon salt', '2 large red onions, thinly sliced', '2 large sweet onions, thinly sliced'
          ],
          steps: ['Melt butter in a large pot over medium-high heat. Stir in salt, red onions and sweet onions. Cook 35 minutes, stirring frequently, until onions are caramelized and almost syrupy.', 'Mix chicken broth, beef broth, red wine and Worcestershire sauce into pot. Bundle the parsley, thyme, and bay leaf with twine and place in pot. Simmer over medium heat for 20 minutes, stirring occasionally. Remove and discard the herbs. Reduce the heat to low, mix in vinegar and season with salt and pepper. Cover and keep over low heat to stay hot while you prepare the bread.', 'Preheat oven broiler. Arrange bread slices on a baking sheet and broil 3 minutes, turning once, until well toasted on both sides. Remove from heat; do not turn off broiler.'],
          cuisine: 'French',
          category: 'Soups',
          difficulty: 3,
          image: 'https://images.unsplash.com/photo-1549396563-92fab230895a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80'
        },
        {
          id: 'r2',
          title: 'Avocado panzanella salad',
          description: 'I’ve been making variations of this salad for years. I recently learned how to massage the kale and it makes a huge difference. I had a friend ask for my recipe and I realized I don’t have one. This is my first attempt at writing a recipe, so please let me know how it works out! I like to change up the ingredients: sometimes a pear instead of an apple, cranberries instead of currants, Parmesan instead of feta, etc. Great as a side dish or by itself the next day for lunch!',
          ingredients: [
            '1/2 x 450g ciabatta loaf, cut into 2.5cm cubes', '1/4 cup extra virgin olive oil', '400g punnet tomato medley, halved', '1/2 red onion, thinly sliced'
          ],
          steps: ['Preheat grill on high. Place bread on a baking tray. Drizzle with 1 tablespoon oil. Season with salt and pepper. Turn to coat. Cook under grill for 2 to 3 minutes, turning, or until golden. Set aside to cool.', 'Place tomato, onion, cucumber, fetta, basil, olives, avocado and bread in a large bowl. Gently toss to combine. Place vinegar and remaining oil in a screw-top jar. Season with salt and pepper. Secure lid. Shake well to combine.', 'Transfer salad to a large shallow serving bowl. Sprinkle with parsley. Drizzle with dressing. Serve.'],
          cuisine: 'Italian',
          category: 'Salads',
          difficulty: 2,
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          id: 'r3',
          title: 'Vegetarian Korma',
          description: 'I’ve been making variations of this salad for years. I recently learned how to massage the kale and it makes a huge difference. I had a friend ask for my recipe and I realized I don’t have one. This is my first attempt at writing a recipe, so please let me know how it works out! I like to change up the ingredients: sometimes a pear instead of an apple, cranberries instead of currants, Parmesan instead of feta, etc. Great as a side dish or by itself the next day for lunch!',
          ingredients: [
            '1 (4 pound) butternut squash - peeled, seeded, and cubed', '1/3 yellow onion, minced', '1/4 cup extra-virgin olive oil', '1/2 cup Italian bread crumbs'
          ],
          steps: ['Preheat an oven to 425 degrees F (220 degrees C).', 'Toss the squash, onion, olive oil, 1/2 cup Italian bread crumbs, thyme, and blue cheese in a large mixing bowl. Season with salt and pepper. Pour the mixture into a large baking dish. Sprinkle 1/4 cup bread crumbs over the squash.', 'Bake in the preheated oven until lightly browned on top, 35 to 40 minutes.'],
          cuisine: 'Indian',
          category: 'Vegetarian',
          difficulty: 3,
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80'
        }
      ]
    }
  },
  mutations,
  actions,
  getters
};

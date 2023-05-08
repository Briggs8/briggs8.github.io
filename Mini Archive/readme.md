# CTEC3905 Assignment
## Mini Archive
Mini Archive is a website that aims to educate the audience on the rich history that Mini has. This website focuses on the different models that have been produced over the years and separate the two into Modern and Classic Mini.

The target audience for the website is anyone with an interest in Minis or those who are looking to learn the difference between the models. The website is not aimed towards experts and includes no technical information on the cars.

This website has been developed with a mobile-first design. Breakpoints have been added to the site to ensure the content always looks correct for any given screen size. The website's main body has been given an absolute max width of 1920px as the site has been developed to work on all screen sizes. Monitors can be extremely wide, reaching and exceeding a 32:9 aspect ratio. Including a max width ensures that the page will look good no matter how wide the screen is.

## Features & Bugs
### Featured Mini
When the Index Page is loaded, a random Mini is chosen to be displayed. This will change each time the site is loaded. As there is only small selection of minis to chose from in this file, refreshing the page has a slim chance to show the same car twice in a row.

### Modern Mini Gallery
This page has an image gallery that users can click and scroll through. Each image will execute a JavaScript function that searches a JSON file to display the correct image, title and description for the image selected. A default R50 mini is selected by default. There are 15 in total.

### Send Us a Message
This form allows users to add a message to the site. With more time and external libraries, these messages would be saved. However, for this demonstation website, comments are added to the comment section and a JSON file shows how the would be stored. The default messages loaded on to the page are taken from the same JSON file.

### Google Maps API
Unfortunately, the Google Maps API causes a cookie error on the site. I attempted to find a solution to this however to no avail. The Map still functions as intended and it was decided to keep the map on the site rather than remove it. 

## References
- [W3Schools](https://www.w3schools.com)
- [Youtube](https://www.youtube.com/watch?v=Oage6H4GX2o)
- [Youtube](https://www.youtube.com/watch?v=zHZRFwWQt2w)
- [Google Developer](https://developers.google.com/maps/documentation/embed/embedding-map)
- [Stack Overflow](https://stackoverflow.com/questions/51577807/responsive-css-grid-with-persistent-aspect-ratio)
- [CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
- [HTML Validator](https://validator.w3.org/#validate_by_input)

- Images Sourced from various Mini Forums

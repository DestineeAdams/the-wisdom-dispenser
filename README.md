# The-Wisdom-Dispenser  
A full-stack web app where users can receive and share anonymous wisdom. It gets data from the [The Wisdom Dispenser API](https://wisdomdisperserapi.onrender.com) _*which I also made*_

![demo gif](https://github.com/DestineeAdams/portfolio-Website/blob/main/files/TheWisdomDispenser.gif?raw=true)

**See project running here**: https://the-wisdom-dispenser.onrender.com ✨  
***Note: project is hosted on a free Render account, so it may take a minute or two to load.***

**Related projects**: https://wisdomdisperserapi.onrender.com

**Tech used**: JavaScript, Node.js, Express, dotenv, EJS, API, Mongodb

## Optimizations

- Need a feature to flag offensive content.  
- Below are three different sentences, grammatically speaking but, they all convey the same idea, call them **info duplicates**. I want to avoid having info duplicates entered into the database
  
  "add button hover", "add button hover", "Add button hover."
  
  - **Idea One:** Write a function that removes all white space and punctuation from the quote and author in the user input. Do the same with every enties in the database (sorted alphabetically), and check if that quote already exists.
  - **Idea Two:** use this [npm package](https://www.npmjs.com/package/string-similarity-js) 
  - 
- Add Mongoose
- Add MVC structure 

## Credits
### Font resource  
[Always in My Heart FONT](https://www.1001freefonts.com/always-in-my-heart.font) made by [Vanessa Bays](http://bythebutterfly.com)

### Photo  
Links to images below; I added a dither filter with Doodad:
[Background abstract color purple](https://pixabay.com/illustrations/background-abstract-color-purple-7276646/), [Magazine colors media page](https://pixabay.com/photos/magazine-colors-media-page-806073/), [Dither Me This](https://doodad.dev/dither-me-this/)

### TODO
- [ ] Add button hover effects

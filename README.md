# The-wisdom-dispenser
A full-stack web app where users can receive and share anonymous wisdom. Gets data form the [The Wisdom Dispenser API](https://wisdomdisperserapi.onrender.com) _*which I also made_

![demo gif](https://github.com/DestineeAdams/portfolio-Website/blob/main/files/TheWisdomDispenser.gif?raw=true)

**see project running here**: https://the-wisdom-dispenser.onrender.com ✨
***note: project is hosted on a free render account so is may take a minute or two to load***

**related projects**: https://wisdomdisperserapi.onrender.com

Tech used: JavaScript, node.js, express, dotenv, ejs, api

## Optimizations

- Need a feature to flag offensive content.  
- Need to check if **true duplicates** are being added to the database. Currently, if there is a punctuation difference or an extra space between two entries *even if the words are the same* they are treated as different quotes.
  - ### **Fixes:**
    - **Fix One:** Write a function that removes all whitespace and punctuation from the quote and author in the user input. Do the same with every author in the database(sorted alphabetically), and check if that quote already exists.


## Credits
### font resource
[always in my heart FONT](https://www.1001freefonts.com/always-in-my-heart.font) made by
[Vanessa Bays](http://bythebutterfly.com)

### photo
link to images below and i put a dither filter on it with doodad

[background abstract color purple](https://pixabay.com/illustrations/background-abstract-color-purple-7276646/)
[magazine colors media page](https://pixabay.com/photos/magazine-colors-media-page-806073/)
[dither-me-this](https://doodad.dev/dither-me-this/)

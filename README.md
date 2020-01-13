# Emojiwall.com

https://www.emojiwall.com/#/

A site that lists all the major emojis out there. This project was mainly made for educational purposes. The focus was to have an easy-to-use web page to copy wanted emoji(s) without any extra hassle.

What I learned (after the cryptocurrency exchange):
- Mobile responsiveness
- Https
- AWS Cloudfront
- Google indexing
- General understanding about emojis

There's no backend. The emojis are not stored in a database. They are a part of the files of the static website. If the host wants to modify the collection, they should add / remove lines in the '/Data/emojis.txt', and run the script provided in '/Data/'. After that the Vue project has to be rebuilt. 

Features:
- Copying with one click
- Hovering over an emoji to see the name
- When scrolling, automatically update from which groups emojis are currently visible
- Search-function to display only the matching names (supports partial match)
- Filter by category

Note: in order to have the favicon in the final built product, you must create an 'img'-folder in 'client/dist/static'. The folder must contain a 'logo.png' -file. One can be found in 'client/src/assets'.
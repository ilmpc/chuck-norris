# Chuck Norris challenge
This is a challenge that you have to go through if you want to join our ranks.
The idea is simple, but the implementation is by no means.

There is an Api that knows how to get Chuck Norris jokes - https://api.chucknorris.io/

You need to make an interface that would receive one joke at the touch of a button and display it on the screen

You need to create a button that shows a new joke every 3 seconds and if you click on it again, the jokes display should stop.

You also need to create a button that adds a joke to the list of favorite jokes and if you click it again, it will remove it from the sheet and when the page is reloaded, they should be saved. (use localStorage)

You need to create a button that will go to the list of favorite jokes and from there you can delete any joke

A maximum of 10 favorite jokes can be displayed, after adding a new joke, the very first one is deleted, and the new one is added to the end of the sheet.

You also need to create a button that clears the list of favorite jokes.

Pay attention to the blocks in the list of favorite jokes https://www.figma.com/file/nYKrkNVMT4EdMIRV1idWGR/Chuck-Norris-WareFrame?node-id=0%3A1

## Mandatory technical requirements:

- TypeScript

- Styled Components

- State management library (redux, effector, mobx, etc.)

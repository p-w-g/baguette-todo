# Le Baguette :: todo

Classic todo app with a JS OOP twist.

## purpose

The purpose of this app is having a sandbox project to learn JS OOP programming. Tasks / to-do's are pure ES6 classes with state handling. Possibly reuse it as a module in different project.

> OK but what does it do?

It's planned to be a part of another project in future. It holds tasks and descriptions.

## Disclaimer

Runs on localhost.
Recommended: 
>python3 -m http.server 

or if you have only installed python3 locally then
>python -m http.server 

### Known issues:

- running on Python 2 SimpleHTTPServer requires renaming js files' extensions from _.mjs to _.js and updating imports in each each script file

## Done

- [done] Add task card feature
- [done] Delete task card
- [done] Toggle task card "done"
- [done] Class holding tasks
- [done] event listeners / handlers
- [ish] Layout and CSS

## Missing features

It's a work in progress. Bear with me.

### Core

- [] Edit feature
- [] Mobile view
- [] Persistence and / or Store state locally

### Cleanup

- [] CSS using SMACSS
- [] Clean naming convention
- [] Refactor helping functions in list class

## Additional

### Features for future consideration

- [Electron](https://electronjs.org/) / [Proton](https://proton-native.js.org/) - Export app to desktop


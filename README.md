# pert-analysis
A reminder repo - build an app to calculate estimates using PERT method as presented by [Uncle Bob](https://codingjourneyman.com/2014/10/06/the-clean-coder-estimation/).

Things to learn by doing it:
- [Typescript](https://www.typescriptlang.org)
- [CSS in JS - Emotion](https://github.com/emotion-js/emotion)
- [Statecharts concept](https://statecharts.github.io/)
- [Finite state machines](https://github.com/davidkpiano/xstate)

Current statechart [visualization](https://musing-rosalind-2ce8e7.netlify.com/?machine=%7B%22initial%22%3A%22start%22%2C%22key%22%3A%22Pert%22%2C%22states%22%3A%7B%22start%22%3A%7B%22on%22%3A%7B%22next%22%3A%22optimistic%22%7D%2C%22initial%22%3A%22disabled%22%2C%22key%22%3A%22Landing%22%2C%22states%22%3A%7B%22disabled%22%3A%7B%22on%22%3A%7B%22fillForm%22%3A%22enabled%22%2C%22next%22%3A%22disabled%22%7D%7D%2C%22enabled%22%3A%7B%22on%22%3A%7B%7D%7D%7D%7D%2C%22optimistic%22%3A%7B%22on%22%3A%7B%22next%22%3A%22nominal%22%7D%7D%2C%22nominal%22%3A%7B%22on%22%3A%7B%22previous%22%3A%22optimistic%22%2C%22next%22%3A%22pessimistic%22%7D%7D%2C%22pessimistic%22%3A%7B%22on%22%3A%7B%22previous%22%3A%22nominal%22%2C%22finish%22%3A%22results%22%7D%7D%2C%22results%22%3A%7B%22on%22%3A%7B%22restart%22%3A%22start%22%7D%7D%7D%7D).

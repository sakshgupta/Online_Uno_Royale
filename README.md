<h1 align="center">UNO ONLINE ROYALE</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Made%20with-React-yellow?style=for-the-badge&logo=React" alt="Made with React">
  <img src="https://img.shields.io/badge/Made%20with-Express-yellow?style=for-the-badge&logo=Node.js" alt="Made with Express">
  <img src="https://img.shields.io/badge/Made%20with-Socket.IO-yellow?style=for-the-badge&logo=Socket.IO" alt="Made with Socket.IO">
  <img src="https://img.shields.io/badge/Made%20with-Node.js-yellow?style=for-the-badge&logo=node-dot-js" alt="Made with Node.js">
</p>

<p align="center">
  <a href="https://uno-royale.herokuapp.com/">Live Demo</a> ·
  <a href="https://github.com/sakshgupta/online_uno_royale/issues">Report Bug</a> ·
  <a href="https://github.com/sakshgupta/online_uno_royale/issues">Request Feature</a>
</p>

<p align="center">
  <img src="https://i.ibb.co/RD0GvVb/logo.png" alt="UNO Logo" width="33%" />
</p>

<p align="center">
  <strong>Note: This game is only meant to be played on PC and is not supported on mobile or tablet devices.</strong>
</p>

## 🤔 What is UNO?

UNO is a timeless card game that has stood the test of time, delighting players of all ages and skill levels for decades. The objective of the game is to be the first player to empty your hand of cards by matching them with the card on the top of the discard pile, either by color or number. However, beware of the special action cards that can throw a wrench in your plans and completely change the course of the game! These cards include skips, reverses, draw twos, and the infamous color-changing wild and draw four wild cards. With every turn, the game becomes more and more exciting, as you try to outwit your opponents and emerge victorious!

## ⚠️ Game Rules

Read the complete rules of UNO [here](https://www.unorules.com/).

## ❓ About the Game

UNO ROYALE is a two-player online version of the game built with React, Socket.IO, Express, and Node. It currently supports two players in each game and has text chat functionality to communicate with your opponent!

## 🧐 How to Play?

1. Once you're on the homepage of the game, you can either host a new game or join a friend's game.
2. To host a new game, click on CREATE GAME. A game code will be generated which you can share with your friend.
3. To join a friend's game, enter the game code given by them and click on JOIN GAME.
4. That's it! Enjoy the game and remember, no toxicity!

## 🎮 Screenshots

<p align="center">
  <img src="https://i.ibb.co/z2ZH0pc/homepage.png" alt="Screenshot 1" width="75%" alt="homepage" border="0" />
  <img src="https://i.ibb.co/phGXTbw/player1.png" alt="Screenshot 2" width="75%" alt="player1" border="0" />
  <img src="https://i.ibb.co/S5KVyWb/player2.png" alt="Screenshot 3" width="75%" alt="player2" border="0" />
</p>

## 🏁 Getting Started

Follow the steps below to run the game locally:

### 🖐 Requirements

**For Installing:**

- Node

### ⏳ Installation

- At the root of the project directory, use npm to install the server-side dependencies

```bash
npm install
```

This command installs all the server-side dependencies needed for the game to run locally.

- Create a .env in the root directory and add the below line
```bash
NODE_ENV = production
```

- Use npm to run server

```bash
npm run dev
```

This command gets the server running on localhost port 5000.

- In a separate terminal, navigate into the client folder and use npm to install the client-side dependencies

```bash
cd client
npm install
```

This command installs all the client-side dependencies needed for the game to run locally.

Head over to http://localhost:5000/ and enjoy the game! 🎉


## 🤝 Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated. The **Issues** tab is a good place to begin!

1. Fork the project repo
2. Clone the forked repo on your machine
3. Create your feature branch (`git checkout -b feature/AmazingFeature`)
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch on your forked repo (`git push origin feature/AmazingFeature`)
6. Open a pull request

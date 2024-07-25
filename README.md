# Tic Tac Toe Game

This is a simple Tic Tac Toe game made with Vite and React, using state management and React props.

## Features

- *2 Player Game*: Play against a friend in a classic Tic Tac Toe game.
- *State Management*: Utilizes React hooks useState to handle game logic and state updates.
- *Move Logging*: Displays the log of each move made by players.

## Technologies Used

- *Development Dependency*:
  - Vite 4.4.5
- *Dependencies*:
  - React 18.2.0
  - React-DOM 18.2.0

## Concepts 

  - React Props
  - State Management
    
## Installation

To get started with the project, follow these steps:

1. *Clone the repository:*
    ```sh
    git clone https://github.com/maulik-koli/Tic-Tac-Toe
    ```
    

2. *Install dependencies:*
    ```sh
    npm install
    ```

3. *Start the development server:*
    ```sh
    npm run dev
    ```

4. *Open the game in your browser:*
    ```sh
    http://localhost:5173
    ```

## Components

- *App*: Initializes the game and passes props to the Player components.
- *Player*: Manages player names, symbols, and checks if the player is active.
- *GameBoard*: Handles the logic for placing X and O on the board.
- *Log*: Logs each player's moves.
- *GameOver*: Displays the winner or if the game is a draw and provides a restart button.

## Project Structure

```
tic-tac-toe/
├── public/
│   ├── bg-pattern-dark.png
│   ├── bg-pattern.png
│   └── game-logo.png
├── src/
│   ├── assets/
│   │   └── winning-combination.js
│   ├── components/
│   │   ├── Player.jsx
│   │   ├── GameBoard.jsx
│   │   ├── Log.jsx
│   │   └── GameOver.jsx
│   ├── App.jsx
│   ├── index.css
│   └── index.jsx
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Working

### App Component

- **Initialization**: The App component initializes the game, setting player names to "Player 1" and "Player 2".
- **Prop Passing**: It passes props to Player components.
- **Player Name Change**: The `handlePlayerNameChange` function allows players to change their names and symbols.

### Player Component

- **Active Player Logic**: Manages whether a player is active.
- **Player Name Change**: Contains the logic to change player names, passed as props from the App component.

### GameBoard Component

- **Placing X and O**: Allows players to place X and O on the board.
- **Square Selection**: The `handleSelectSquare` function manages the selection of squares.

### Log Component

- **Move Logging**: Uses a `turns` hook to log each player's move.

### Game Over Logic

- **Winner Determination**: Contains the logic to decide the winner.
- **Winning Combinations**: The `winning-combination.js` file in the assets folder exports arrays of all possible winning combinations.
- **Winner Check**: The `derivedWinner` function in the App component checks the current turn and the array of winning combinations to determine the winner or if it's a draw.

### GameOver Component

- **Display**: Shows the winning player or if the game is a draw.
- **Restart Button**: Provides a button to restart the game.

## Contributing

Contributions are welcome! If you have any ideas or improvements, feel free to submit a pull request.

## Acknowledgements

- [Vite](https://vitejs.dev/) for providing a fast development build tool.
- [React](https://reactjs.org/) for making UI development easier with components and hooks.

---

Enjoy playing Tic Tac Toe!

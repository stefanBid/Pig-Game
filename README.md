# Pig-Game
<p align= "center"><img src = "https://i.imgur.com/2l01PKT.jpg" alt="Pig Game" height = "500px" width = "500px"></p>

## Introduction

This is a small project, which implements through the logic of java scrip a game which consists nel lanciare una serie di dadi ed incrementare il proprio puntegggio al fine di raggiungere la soglia esatta di vittoria.

---

## Behavior

<p align= "center"><img src ="https://i.ibb.co/48mndj7/start.png" alt="Guess My Number" ></p>

Il gioco consiste in una battaglia 1 vs 1 tra due giocatori settati all'inizio di ogni nuova partita. Il giocatore attivo incominca la partita lanciando un dato, tale punteggio può essere salvato come score effettivo o può essere incrementato lanciandolo nuvamente. Ma attenzione a sfidare troppo la sorte se dal ancio esce 1 il giocatore perde tutti i punti accumulati che non sono stati salvati e passa il turno al suo avversario.


Il gioco termina quando uno dei due giocatori raggiunge per prima quota 100 esatta.

---

### Management of Score

|#   | Status                      | Situation                       |
|:-- | :-------------------------- | :------------------------------ |
| 1  | Score + current score < 100 | Change player                   |
| 2  | Score + current score > 100 | Score - (Score - 100)x2         |
| 3  | Score + current score = 100 | Current player win the game     |


### Management of Rolls

|#   | Status                      | Situation                       | HOLD | ROLL |
|:-- | :-------------------------- | :------------------------------ | :--- | :--- |
| 1  | Dice differet to 1          | Increment current score         |  ✅  |  ✅  |
| 2  | Dice equals to 1            | Change Player                   |  ⛔️  |  ⛔️  |
             |

---

# Gallery

## When you win

<img src="https://i.ibb.co/cLn93mk/win1.png" alt="Guess My Number" >

## When you win at first

<img src="https://i.ibb.co/PD9SJyq/win.png" alt="Guess My Number" >

## Level Bonus

<img src="https://i.ibb.co/kxq15Ms/bonus.png" alt="Guess My Number" >

## When you lose

<img src="https://i.ibb.co/LN6fw7C/lost.png" alt="Guess My Number" >






# Pig-Game
<p align= "center"><img src = "https://i.imgur.com/2l01PKT.jpg" alt="Pig Game" height = "500px" width = "500px"></p>

## Introduction

This game consists in throwing a series of dice and boost your score in order to reach/achieve the exact threshold of victory

---

## Behavior

<p align= "center"><img src ="https://i.imgur.com/IhnA5c5.png" alt="Pig Game" ></p>

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
             
---

# Gallery

## Set the game players

<img src="https://i.imgur.com/hos8mUi.png" alt="Pig Game" >

## When a player win

<img src="https://i.imgur.com/N5j98Ol.png" alt="Pig Game" >








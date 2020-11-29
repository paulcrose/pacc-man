
document.addEventListener('DOMContentLoaded', () => {
  
  const startButton = document.getElementById('start')
  const againButton = document.getElementById('again')
  const leftButton = document.getElementById('left')
  const rightButton = document.getElementById('right')
  const upButton = document.getElementById('up')
  const downButton = document.getElementById('down')
  const scoreDisplay = document.getElementById('scorecount')
  const width = 28
  let score = 0
  const grid = document.querySelector('.grid')
  const layout = [
    16,12,12,12,12,12,12,12,12,12,12,12,12,15,16,12,12,12,12,12,12,12,12,12,12,12,12,15,
    11,0,0,0,0,0,0,0,0,0,0,0,0,9,11,0,0,0,0,0,0,0,0,0,0,0,0,9,
    11,0,5,10,10,6,0,5,10,10,10,6,0,9,11,0,5,10,10,10,6,0,5,10,10,6,0,9,
    11,3,9,4,4,11,0,9,4,4,4,11,0,9,11,0,9,4,4,4,11,0,9,4,4,11,3,9,
    11,0,8,12,12,7,0,8,12,12,12,7,0,8,7,0,8,12,12,12,7,0,8,12,12,7,0,9,
    11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,
    11,0,5,10,10,6,0,5,10,10,10,10,10,10,10,10,10,10,10,10,6,0,5,10,10,6,0,9,
    11,0,8,12,12,7,0,8,12,12,12,12,12,15,16,12,12,12,12,12,7,0,8,12,12,7,0,9,
    11,0,0,0,0,0,0,0,0,0,0,0,0,9,11,0,0,0,0,0,0,0,0,0,0,0,0,9,
    14,10,10,10,10,6,0,5,10,10,10,6,0,8,7,0,5,10,10,10,6,0,5,10,10,10,10,13,
    4,4,4,4,4,11,0,9,16,12,12,7,4,4,4,4,8,12,12,15,11,0,9,4,4,4,4,4,
    4,4,4,4,4,11,0,9,11,4,4,4,4,4,4,4,4,4,4,9,11,0,9,4,4,4,4,4,
    12,12,12,12,12,7,0,8,7,4,5,10,10,2,2,10,10,6,4,8,7,0,8,12,12,12,12,12,
    4,4,4,4,4,4,0,0,0,4,2,2,2,2,2,2,2,11,4,0,0,0,4,4,4,4,4,4,
    10,10,10,10,10,6,0,5,6,4,2,2,2,2,2,2,2,2,4,5,6,0,5,10,10,10,10,10,
    4,4,4,4,4,11,0,9,11,4,9,2,2,2,2,2,2,2,4,9,11,0,9,4,4,4,4,4,
    16,12,12,12,12,7,0,8,7,4,8,12,12,12,12,12,12,7,4,8,7,0,8,12,12,12,12,15,
    11,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,9,
    11,0,5,10,10,6,0,5,10,10,10,6,0,5,6,0,5,10,10,10,6,0,5,10,10,6,0,9,
    11,0,8,12,15,11,0,8,12,12,12,7,0,8,7,0,8,12,12,12,7,0,9,16,12,7,0,9,
    11,3,0,0,9,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,11,0,0,3,9,
    14,10,6,0,9,11,0,5,6,0,5,10,10,10,10,10,10,6,0,5,6,0,9,11,0,5,10,13,
    16,12,7,0,8,7,0,9,11,0,8,12,12,15,16,12,12,7,0,9,11,0,8,7,0,8,12,15,
    11,0,0,0,0,0,0,9,11,0,0,0,0,9,11,0,0,0,0,9,11,0,0,0,0,0,0,9,
    11,0,5,10,10,10,10,13,14,10,10,6,0,9,11,0,5,10,10,13,14,10,10,10,10,6,0,9,
    11,0,8,12,12,12,12,12,12,12,12,7,0,8,7,0,8,12,12,12,12,12,12,12,12,7,0,9,
    11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,
    14,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,13
  ]

  const squares = []

  //creates the board
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement('div')
      grid.appendChild(square)
      squares.push(square)

      //styles the board
      if(layout[i] === 0) {
        squares[i].classList.add('pac-dot')
      } else if (layout[i] === 1) {
        squares[i].classList.add('wall')
      } else if (layout[i] === 2) {
        squares[i].classList.add('ghost-lair')
      } else if (layout[i] === 3) {
        squares[i].classList.add('power-pellet')
      } else if (layout[i] === 5) {
        squares[i].classList.add('wall','corner-top-left')
      } else if (layout[i] === 6) {
        squares[i].classList.add('wall','corner-top-right')
      } else if (layout[i] === 7) {
        squares[i].classList.add('wall','corner-bottom-right')
      } else if (layout[i] === 8) {
        squares[i].classList.add('wall','corner-bottom-left')
      } else if (layout[i] === 9) {
        squares[i].classList.add('wall','wall-left')
      } else if (layout[i] === 10) {
        squares[i].classList.add('wall','wall-top')
      } else if (layout[i] === 11) {
        squares[i].classList.add('wall','wall-right')
      } else if (layout[i] === 12) {
        squares[i].classList.add('wall','wall-bottom')
      } else if (layout[i] === 13) {
        squares[i].classList.add('wall','fill-top-left')
      } else if (layout[i] === 14) {
        squares[i].classList.add('wall','fill-top-right')
      } else if (layout[i] === 15) {
        squares[i].classList.add('wall','fill-bottom-left')
      } else if (layout[i] === 16) {
        squares[i].classList.add('wall','fill-bottom-right')
      } 
      
    }
  }
  createBoard()


  //create Characters
  //draw pacman onto the board
  let pacmanCurrentIndex = 490
  squares[pacmanCurrentIndex].classList.add('pac-man')
  //get the coordinates of pacman on the grid with X and Y axis
  // function getCoordinates(index) {
  //   return [index % width, Math.floor(index / width)]
  // }

  // console.log(getCoordinates(pacmanCurrentIndex))



  // what happens when you eat a pac-dot
  function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
      score++
      scoreDisplay.innerHTML = score
      squares[pacmanCurrentIndex].classList.remove('pac-dot')
    }
  }

  //what happens when you eat a power-pellet
  function powerPelletEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
      score +=10
      ghosts.forEach(ghost => ghost.isScared = true)
      setTimeout(unScareGhosts, 10000)
      squares[pacmanCurrentIndex].classList.remove('power-pellet')
    }
  }

  //make the ghosts stop flashing
  function unScareGhosts() {
    ghosts.forEach(ghost => ghost.isScared = false)
  }

  //create ghosts using Constructors
  class Ghost {
    constructor(className, startIndex, speed) {
      this.className = className
      this.startIndex = startIndex
      this.speed = speed
      this.currentIndex = startIndex
      this.isScared = false
      this.timerId = NaN
    }
  }

  //all my ghosts
  ghosts = [
    new Ghost('blinky', 376, 250),
    new Ghost('pinky', 404, 400),
    new Ghost('inky', 379, 300),
    new Ghost('clyde', 407, 500)
    ]

  //draw my ghosts onto the grid
  ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
    })
function startGame() {
    ghosts.forEach(ghost => moveGhost(ghost))
    document.getElementById("start").style.display="none"

    document.addEventListener('keydown', keyDown)
    document.addEventListener('keyup', keyUp)

    leftButton.addEventListener('touchstart', slowMoveLeft)
    leftButton.addEventListener('touchend', stopMoveLeft)

    //leftButton.addEventListener('mousedown', slowMoveLeft)
    //leftButton.addEventListener('mouseup', stopMoveLeft)

    rightButton.addEventListener('touchstart', slowMoveRight)
    rightButton.addEventListener('touchend', stopMoveRight)

    //rightButton.addEventListener('mousedown', slowMoveRight)
    //rightButton.addEventListener('mouseup', stopMoveRight)

    upButton.addEventListener('touchstart', slowMoveUp)
    upButton.addEventListener('touchend', stopMoveUp)

    //upButton.addEventListener('mousedown', slowMoveUp)
    //upButton.addEventListener('mouseup', stopMoveUp)

    downButton.addEventListener('touchstart', slowMoveDown)
    downButton.addEventListener('touchend', stopMoveDown)

    //downButton.addEventListener('mousedown', slowMoveDown)
    //downButton.addEventListener('mouseup', stopMoveDown)
    
}
  //move the Ghosts randomly
  

  function moveGhost(ghost) {
    const directions =  [-1, +1, width, -width]
    let direction = directions[Math.floor(Math.random() * directions.length)]

    ghost.timerId = setInterval(function() {
      //if the next squre your ghost is going to go to does not have a ghost and does not have a wall
      if  (!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
        !squares[ghost.currentIndex + direction].classList.contains('wall') ) {
          //remove the ghosts classes
          squares[ghost.currentIndex].classList.remove(ghost.className)
          squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
          //move into that space
          ghost.currentIndex += direction
          squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
      //else find a new random direction ot go in
      } else direction = directions[Math.floor(Math.random() * directions.length)]

      //if the ghost is currently scared
      if (ghost.isScared) {
        squares[ghost.currentIndex].classList.add('scared-ghost')
      }

      //if the ghost is currently scared and pacman is on it
      if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
        score +=50
        squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
        ghost.currentIndex = ghost.startIndex
        squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
      }
    checkForGameOver()
    }, ghost.speed)
  }

  function displayGameOver(){
    document.getElementById("gameover").style.display="inline"
  }

  function removeGameOver(){
    document.getElementById("gameover").style.display="none"
  }

  function showPlayAgain(){
    document.getElementById("again").style.display="inline"
  }

  //check for a game over
  function checkForGameOver() {
    if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
      !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener('keydown', keyDown)
      leftButton.removeEventListener('touchstart', slowMoveLeft)
      rightButton.removeEventListener('touchstart', slowMoveRight)
      upButton.removeEventListener('touchstart', slowMoveUp)
      downButton.removeEventListener('touchstart', slowMoveDown)
      setTimeout(displayGameOver, 300)
      setTimeout(removeGameOver, 2300)
      setTimeout(showPlayAgain, 2600)
    }
  }

  function displayYouWon(){
    document.getElementById("youwon").style.display="inline"
  }

  function removeYouWon(){
    document.getElementById("youwon").style.display="none"
  }

  //check for a win - more is when this score is reached
  function checkForWin() {
    if (score > 200 ) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      stopMoveLeft()
      stopMoveRight()
      stopMoveUp()
      stopMoveDown()
      document.removeEventListener('keydown', keyDown)
      leftButton.removeEventListener('touchstart', slowMoveLeft)
      rightButton.removeEventListener('touchstart', slowMoveRight)
      upButton.removeEventListener('touchstart', slowMoveUp)
      downButton.removeEventListener('touchstart', slowMoveDown)
      setTimeout(displayYouWon, 300)
      setTimeout(removeYouWon, 2600)
      setTimeout(showPlayAgain, 2900)
    }
  }


  function playAgain() {
    location.reload();
    return false;
  }


  startButton.addEventListener('click', startGame)
  againButton.addEventListener('click', playAgain)

    //move pacman
   
    function keyDown (e) {
      if (e.repeat) { return }
    
      if(e.keyCode === 37) {
        slowMoveLeft() 
      }
      if(e.keyCode === 39) {
        slowMoveRight()
      }
      if(e.keyCode === 38) {
        slowMoveUp()
      }
      if(e.keyCode === 40) {
        slowMoveDown()
      }
    }
   
    function keyUp (e) {
        stopMoveLeft()
        stopMoveRight()
        stopMoveUp()
        stopMoveDown()
    }

  //Move left

  
  function moveLeft() {
    squares[pacmanCurrentIndex].classList.remove('pac-man')
    squares[pacmanCurrentIndex].style.removeProperty("transform");

    if(
      pacmanCurrentIndex % width !== 0 &&
      !squares[pacmanCurrentIndex -1].classList.contains('wall') &&
      !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair')
      )
    pacmanCurrentIndex -= 1
    if (squares[pacmanCurrentIndex -1] === squares[363]) {
      pacmanCurrentIndex = 391
    }
    squares[pacmanCurrentIndex].classList.add('pac-man')
    document.getElementsByClassName('pac-man')[0].style.transform = 'rotate(0deg)'
    pacDotEaten()
    powerPelletEaten()
    checkForGameOver()
    checkForWin()
  }

  moveIntervalLeft = null;

  function slowMoveLeft() {
    moveLeft()
    moveIntervalLeft = setInterval(moveLeft, 0200)
    document.getElementById("left").style.opacity = .8
  }

  function stopMoveLeft() {
    clearInterval(moveIntervalLeft)
    document.getElementById("left").style.opacity = .4
  } 


  //Move Right

 

  function moveRight() {
    squares[pacmanCurrentIndex].classList.remove('pac-man')
    squares[pacmanCurrentIndex].style.removeProperty("transform");
    
    
    if(
      pacmanCurrentIndex % width < width - 1 &&
      !squares[pacmanCurrentIndex +1].classList.contains('wall') &&
      !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair')
    )
    pacmanCurrentIndex += 1
    if (squares[pacmanCurrentIndex +1] === squares[392]) {
      pacmanCurrentIndex = 364
    }
    
    squares[pacmanCurrentIndex].classList.add('pac-man')
    document.getElementsByClassName('pac-man')[0].style.transform = 'rotate(180deg)'
    pacDotEaten()
    powerPelletEaten()
    checkForGameOver()
    checkForWin()
  }

  moveIntervalRight = null;

  function slowMoveRight() {
    moveRight()
    moveIntervalRight = setInterval(moveRight, 0200)
    document.getElementById("right").style.opacity = .8
  }

  function stopMoveRight() {
    clearInterval(moveIntervalRight)
    document.getElementById("right").style.opacity = .4
  } 

  //Move Up



  function moveUp() {
    squares[pacmanCurrentIndex].classList.remove('pac-man')
    squares[pacmanCurrentIndex].style.removeProperty("transform");
    
    if(
      pacmanCurrentIndex - width >= 0 &&
      !squares[pacmanCurrentIndex -width].classList.contains('wall') &&
      !squares[pacmanCurrentIndex -width].classList.contains('ghost-lair')
      ) 
    pacmanCurrentIndex -= width
   
    squares[pacmanCurrentIndex].classList.add('pac-man')
    document.getElementsByClassName('pac-man')[0].style.transform = 'rotate(90deg)'
    pacDotEaten()
    powerPelletEaten()
    checkForGameOver()
    checkForWin()
  }

  moveIntervalUp = null;

  function slowMoveUp() {
    moveUp()
    moveIntervalUp = setInterval(moveUp, 0200)
    document.getElementById("up").style.opacity = .8
  }

  function stopMoveUp() {
    clearInterval(moveIntervalUp)
    document.getElementById("up").style.opacity = .4
  } 

  //Move Down



  function moveDown() {
    squares[pacmanCurrentIndex].classList.remove('pac-man')
    squares[pacmanCurrentIndex].style.removeProperty("transform");

    if (
      pacmanCurrentIndex + width < width * width &&
      !squares[pacmanCurrentIndex +width].classList.contains('wall') &&
      !squares[pacmanCurrentIndex +width].classList.contains('ghost-lair')
    )
    pacmanCurrentIndex += width
    
    
    squares[pacmanCurrentIndex].classList.add('pac-man')
    document.getElementsByClassName('pac-man')[0].style.transform = 'rotate(270deg)'
    pacDotEaten()
    powerPelletEaten()
    checkForGameOver()
    checkForWin()
  }

  moveIntervalDown = null;

  function slowMoveDown() {
    moveDown()
    moveIntervalDown = setInterval(moveDown, 0200)
    document.getElementById("down").style.opacity = .8
  }

  function stopMoveDown() {
    clearInterval(moveIntervalDown)
    document.getElementById("down").style.opacity = .4
  } 
    
})





const body=document.querySelector('body')
const board=document.createElement('table') 
board.classList.add('board')
body.appendChild(board)

let turns=0
const numberOfSquares =25


const xImage=document.createElement('img')
xImage.src='x.svg'
xImage.classList.add('playerIcon')
board.appendChild(xImage)

const player=document.createElement('p')
player.textContent=`Spelare ${xImage} börjar`
board.appendChild(player)
const numberOfTurns=document.createElement('p')

//loop för spelfält
    for (let i = 0; i < numberOfSquares; i++) {
        let row =document.createElement('tr')
        row.classList.add('row')
        for (let j = 0; j < numberOfSquares; j++) {
            let cell =document.createElement('button')
            row.appendChild(cell)
            cell.addEventListener('click', function(event){
             if (turns%2==0){
                 cell.textContent='❌'
                 player.textContent='⭕️s tur'
             }else{
                 cell.textContent='⭕️'
                 player.textContent='❌s tur'
             }
                turns ++
                numberOfTurns.textContent = `${turns} drag spelade.`
            })
            
        }
            
        board.appendChild(row)
        board.appendChild(numberOfTurns)
    }
             


 
/*<p>Välkommen till luffarschack! Spelet går ut på att vara först om att få fem tecken, vågrätt, lodrätt eller diagonalt, i rad har vunnit.
          
      </p> */
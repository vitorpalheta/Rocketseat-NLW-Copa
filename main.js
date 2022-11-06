function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

function createTeam(team1, team2) {
  return `
  <div id="team">
    <div>
    ${team1}
    </div>
    <div>
    ${team2}
    </div>
  </div>
  `
}

function createCard(date, day, games) {
  return `
    <div class="card">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML = 

        createCard(
          "22/11",
          "terça",
          createGame("argentina", "07:00", "saudi-arabia") +
          createTeam("Argentina", "Arábia Saudita") +
          createGame("france", "16:00", "australia") +
          createTeam("França", "Austrália")
        ) +
        createCard(
          "24/11",
          "quinta",
          createGame("brazil", "16:00", "serbia") +
          createTeam("Brasil", "Sérvia")
        ) +
        createCard(
          "28/11",
          "segunda",
          createGame("brazil", "13:00", "switzerland") +
          createTeam("Brasil", "Suíça") +
          createGame("portugal", "16:00", "uruguay") +
          createTeam("Portugal", "Uruguai")
        ) +
        createCard(
          "02/12",
          "sexta",
          createGame("cameroon", "16:00", "brazil") +
          createTeam("Camarões", "Brasil")
        )
      
    

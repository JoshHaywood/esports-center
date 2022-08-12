var express = require("express");
var router = express.Router();
const generateDummyData = require("../helpers/generateDummyData");

/* Redirect back to the front-end if a user tries to access the back-end */
router.get("/", function (req, res, next) {
  //TODO: Update this to redirect front-end
  // res.redirect(308, "https://localhost:8000");
  res.send(`You're trying to access our back-end.`);
});

// Use this to generate dummy data
router.get("/dummydata", generateDummyData.generate);

router.get("/testdb", async function (req, res, next) {
  const db = req.app.get("db");
  await db.User.create({
    data: {
      firstName: "Yordan",
      lastName: "Hristov",
      email: "test@test.com",
      password: "asdasdasdasdadsasdasd",
      type: "String",
    },
  });
  const allUsers = await db.User.findMany();
  res.json(allUsers);
});


router.post("/getTeam", async (req, res) => {
  // ready the db
  const db = req.app.get("db");
  // get all team data where team name matches the request
  const teamData = await db.Team.findMany({
    where: {
      name: {
        equals: req.body.team,
      },
    },
  })
  // get all player data where team name matches the request
  const teamPlayerData = await db.Player.findMany({
    where: {
      team: {
        equals: req.body.team,
      },
    },
  })
  // respond with status, team data and player data
  res.json({
    status: "success",
    teamData: teamData,
    teamPlayerData: teamPlayerData})
})

router.post("/getLeague", async (req, res) => {
   //ready database
  const db = req.app.get("db");
  // look up db for League name is equal to league in the request
  const leagueData = await db.League.findMany({
    where: {
      name: {
        equals: req.body.league,
      },
    },
  })
  // get all teams participating in the league, by league name
  const leagueTeamData = await db.LeagueTeam.findMany({
    where: {
      leagueName: {
        equals: req.body.league,
      },
    },
  })
  // respond with status, league data, and participating team league progress data
  res.json({
    status: "success",
    leagueData: leagueData,
    leagueTeams: leagueTeamData})
})



router.post("/search", async (req, res) => {
  //ready database
  const db = req.app.get("db");
  // ready query from req.body
  let query = req.body.search;
  // initialize empty results array
  let results = [];
  // grab all users from db
  const allUsers = await db.User.findMany();
  // loop through returned items
  allUsers.forEach((user) =>
   // add to results array of any part matches on first or last name
  user.firstName.toLowerCase().includes(query) || user.lastName.toLowerCase().includes(query)
      ? results.push(user)
      : ""
  );
  // grab all teams from db
  const allTeams = await db.Team.findMany();
  // loop through returned items
  allTeams.forEach((team) =>
  // add to results array of any part matches on name or type
    team.name.toLowerCase().includes(query) || team.type.toLowerCase().includes(query)
      ? results.push(team)
      : ""
  );
  // grab all players from db 
  const allPlayers = await db.Player.findMany();
  // loop through returned items
  allPlayers.forEach((player) =>
  // add to results list if part match on name or type
    player.name.toLowerCase().includes(query) || player.type.toLowerCase().includes(query)
      ? results.push(player)
      : ""
  );
  const allLeagues = await db.League.findMany();
  // loop through returned items
  allLeagues.forEach((league) =>
  
   // add to results list if part match on name or type
    league.name.toLowerCase().includes(query)  || league.type.toLowerCase().includes(query)
      ? results.push(league)
      : ""
  );
  const allGames = await db.Game.findMany();
  // loop through returned items
  allGames.forEach((game) =>
   // add to results list if part match on name or type
    game.name.toLowerCase().includes(query)  || game.type.toLowerCase().includes(query)
      ? results.push(game)
      : ""
  );
  // respond with status and results
  res.json({
    status: "success",
    results: results,
  });
});

router.post("/registerTeam", async (req, res) => {
  let { teamName, league, game, playerCount, country } = req.body;
console.log(req.body)
const db = req.app.get("db");
  await db.Team.create({
    data: {
      name: teamName,
      game: game,
      country: country,
      image: "https://cdn.dribbble.com/users/2973251/screenshots/10885895/demons_esports_team_logo_dribbble_4x.png",
      score: 0,
      position: 0,
      type: "team",
    }
  })
  // respond with status, team data and player data
  res.json({
    status: "success"
    })
})

router.post("/registerLeague", async (req, res) => {
  let { leagueName, gameName, roundCount } = req.body;
  console.log(req.body)
  const db = req.app.get("db");
  await db.League.create({
    data: { 
    name: leagueName,
    rounds : roundCount,           
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum imperdiet nulla eget semper. Aenean ex ligula, porttitor vel risus.",
    type: "league"
    }
  })
  // })
  res.json(req.body);
})

router.post("/registerLeagueTeam", async (req, res) => {
  let { leagueName, teamName } = req.body;
  console.log(req.body)
  const db = req.app.get("db");
  const leagueTeamData = await db.LeagueTeam.findMany({
    where: {
      leagueName: {
        equals: req.body.leagueName,
      },
    },
  })

  let teamsWithoutOpponents = [];
  let teamsWithoutOpponentsID = [];
    let pushToArrays = (team, id) => {
      teamsWithoutOpponents.push(team)
      teamsWithoutOpponentsID.push(id)
  }
  if (leagueTeamData !== undefined || leagueTeamData !== null) {
    leagueTeamData.forEach(team => team.round1Opponent === 'No Opponent registered' && team.teamName !== teamName ? 
    pushToArrays(team.teamName, team.id) : '')     
  }
  console.log(teamsWithoutOpponents)
  if (teamsWithoutOpponents.length > 0) {
        await db.LeagueTeam.create({
    data: { 
      teamName: teamName,
      leagueName: leagueName,
      round1: true,
      round1Opponent: teamsWithoutOpponents[0],
      round2: false,
      round2Opponent: '',
      round3: false,
      round3Opponent: '',
      round4: false,
      round4Opponent: '',
      round5: false,
      round5Opponent: '',
      round6: false,
      round6Opponent: '' 
    }
  })
  await db.LeagueTeam.update({
      where: {
        id: teamsWithoutOpponentsID[0],
      },
    data: {
      round1Opponent: teamName,
    }
  })
 } else {
    await db.LeagueTeam.create({
      data: { 
        teamName: teamName,
        leagueName: leagueName,
        round1: true,
        round1Opponent: 'No Opponent registered',
        round2: false,
        round2Opponent: '',
        round3: false,
        round3Opponent: '',
        round4: false,
        round4Opponent: '',
        round5: false,
        round5Opponent: '',
        round6: false,
        round6Opponent: '' 
      }
    })
  }
  // })
  res.json(req.body);
})



module.exports = router;

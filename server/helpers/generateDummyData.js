const generate = async (req, res) => {
  const db = req.app.get("db");
  await db.User.create({
    data: {
      firstName: "Yordan",
      lastName: "Hristov",
      email: "test@test.com",
      password: "rhe5heheqhe5hyeherg",
      type: "user",
    },
  });
  await db.User.create({
    data: {
      firstName: "Louis",
      lastName: "Wright",
      email: "test2@test.com",
      password: "g435hg3q5hq35herheqrg3q4gqergeh",
      type: "user",
    },
  });
  await db.User.create({
    data: {
      firstName: "Josh",
      lastName: "Haywood",
      email: "test3@test.com",
      password: "3h54h45h4w5h45hgq45hq5hq5rhgerg",
      type: "user",
    },
  });
  await db.User.create({
    data: {
      firstName: "Danny",
      lastName: "Daley",
      email: "test4@test.com",
      password: "g54wy45y454hgw54hg354hg",
      type: "user",
    },
  });
  await db.Player.create({
    data: {
      name: "Bob Green",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum imperdiet nulla eget semper. Aenean ex ligula, porttitor vel risus.",
      team: "Pro Cheaters",
      role: "Jumper",
      game: "Super Mario",
      type: "player",
    },     
  });
  await db.Player.create({
    data: {
      name: "Dave Johnson", 
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum imperdiet nulla eget semper. Aenean ex ligula, porttitor vel risus.",
      team: "Noobs",
      role: "Shooter",
      game: "GTA V",
      type: "player",
    },
  });
  await db.Player.create({
    data: {
      name: "Jimmy Secondnamey", 
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum imperdiet nulla eget semper. Aenean ex ligula, porttitor vel risus.",
      team: "Noobs",
      role: "Runner",
      game: "GTA V",
      type: "player",
    },
  });
  await db.Player.create({
    data: {
      name: "Danny Dudesname", 
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum imperdiet nulla eget semper. Aenean ex ligula, porttitor vel risus.",
      team: "Noobs",
      role: "Runner",
      game: "GTA V",
      type: "player",
    },
  });
  await db.Player.create({
    data: {
      name: "Borris Nameson",      
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum imperdiet nulla eget semper. Aenean ex ligula, porttitor vel risus.",
      team: "Best team ever",
      role: "S.A.S",
      game: "CS:GO",
      type: "player",
    },
  });
  await db.League.create({
    data: {
      name: "Best League in the World",
      rounds: 2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum imperdiet nulla eget semper. Aenean ex ligula, porttitor vel risus.",
        type: "league",
    },
  });
  await db.League.create({
    data: {
      name: "Worst League in the World",
      rounds: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum imperdiet nulla eget semper. Aenean ex ligula, porttitor vel risus.",
        type: "league",
    },  
  });
  await db.Game.create({
    data: {
      name: "GTA V",
      image: "https://www.pngkey.com/png/full/83-831986_gta-5-blank-logos-grand-theft-auto-v.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum imperdiet nulla eget semper. Aenean ex ligula, porttitor vel risus.",
      developer: "Rockstar",
      releaseDate: new Date("September 17, 2013"),
      type: "game",
    },
  });
  await db.Game.create({
    data: {
      name: "Super Mario",
      image: "https://i.pinimg.com/originals/9c/1b/8f/9c1b8f95f6cad0d1ec848b38a450ff58.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum imperdiet nulla eget semper. Aenean ex ligula, porttitor vel risus.",
      developer: "Nintendo",
      releaseDate: new Date("September 13, 1985"),
      type: "game",
    },
  });
  await db.Game.create({
    data: {
      name: "CS:GO",
      image: "https://estnn.com/wp-content/uploads/2020/05/global-offensive-747x420.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum imperdiet nulla eget semper. Aenean ex ligula, porttitor vel risus.",
      developer: "Valve Corporation",
      releaseDate: new Date("August 21, 2012"),
      type: "game",
    },
  });
  await db.Team.create({
    data: {
      name: "Pro Cheaters",
      game: "Super Mario",
      country: "USA",
      image: "https://cdn.dribbble.com/users/2973251/screenshots/10885895/demons_esports_team_logo_dribbble_4x.png",
      score: 213212,
      position: 1,
      type: "team",
    },
  });
  await db.Team.create({
    data: {
      name: "Noobs",
      game: "GTA V",
      country: "GB",
      image: "https://www.kindpng.com/picc/m/410-4104855_logo-team-esport-png-transparent-png.png",
      score: 0,
      position: 3,
      type: "team",
    },
  });
  await db.Team.create({
    data: {
      name: "Best team ever",
      game: "CS:GO",
      country: "GB",
      image: "https://thumbs.dreamstime.com/b/ninja-esport-team-logo-badge-gamer-mascot-design-illustration-sport-163452847.jpg",
      score: 1232,
      position: 2,
      type: "team",
    },    
  });
  await db.Team.create({
    data: {
      name: "Pro Cheaters 2",
      game: "Super Mario",
      country: "USA",
      image: "https://cdn.dribbble.com/users/2973251/screenshots/10885895/demons_esports_team_logo_dribbble_4x.png",
      score: 213212,
      position: 1,
      type: "team",
    },
  });
  await db.Team.create({
    data: {
      name: "Noobs 2",
      game: "GTA V",
      country: "GB",
      image: "https://www.kindpng.com/picc/m/410-4104855_logo-team-esport-png-transparent-png.png",
      score: 0,
      position: 3,
      type: "team",
    },
  });
  await db.Team.create({
    data: {
      name: "Best team ever 2",
      game: "CS:GO",
      country: "GB",
      image: "https://thumbs.dreamstime.com/b/ninja-esport-team-logo-badge-gamer-mascot-design-illustration-sport-163452847.jpg",
      score: 1232,
      position: 2,
      type: "team",
    },    
  });
  await db.Team.create({
    data: {
      name: "Pro Cheaters 3",
      game: "Super Mario",
      country: "USA",
      image: "https://cdn.dribbble.com/users/2973251/screenshots/10885895/demons_esports_team_logo_dribbble_4x.png",
      score: 213212,
      position: 1,
      type: "team",
    },
  });
  await db.Team.create({
    data: {
      name: "Noobs 3",
      game: "GTA V",
      country: "GB",
      image: "https://www.kindpng.com/picc/m/410-4104855_logo-team-esport-png-transparent-png.png",
      score: 0,
      position: 3,
      type: "team",
    },
  });
  await db.Team.create({
    data: {
      name: "Best team ever 3",
      game: "CS:GO",
      country: "GB",
      image: "https://thumbs.dreamstime.com/b/ninja-esport-team-logo-badge-gamer-mascot-design-illustration-sport-163452847.jpg",
      score: 1232,
      position: 2,
      type: "team",
    },    
  });
  await db.LeagueTeam.create({
    data: {
      teamName: "Best team ever 3",
      leagueName: "Worst League in the World",
      round1: true,
      round1Opponent: 'Pro Cheaters 2' ,
      round2: true,
      round2Opponent: 'Pro Cheaters',
      round3: false,
      round3Opponent: '',
      round4: false,
      round4Opponent: '',
      round5: false,
      round5Opponent: '',
      round6: false,
      round6Opponent: ''
    },    
  });
  await db.LeagueTeam.create({
    data: {
      teamName: "Best team ever 2",
      leagueName: "Worst League in the World",
      round1: true,
      round1Opponent: 'Pro Cheaters' ,
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
    },    
  });
  await db.LeagueTeam.create({
    data: {
      teamName: "Best team ever",
      leagueName: "Worst League in the World",
      round1: true,
      round1Opponent: 'Noobs 3' ,
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
    },    
  });
  await db.LeagueTeam.create({
    data: {
      teamName: "Pro Cheaters 2",
      leagueName: "Worst League in the World",
      round1: true,
      round1Opponent: 'Best team ever 3' ,
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
    },    
  });
  await db.LeagueTeam.create({
    data: {
      teamName: "Pro Cheaters",
      leagueName: "Worst League in the World",
      round1: true,
      round1Opponent: 'Best team ever 2',
      round2: true,
      round2Opponent: 'Best team ever 3',
      round3: true,
      round3Opponent: 'Noobs',
      round4: false,
      round4Opponent: '',
      round5: false,
      round5Opponent: '',
      round6: false,
      round6Opponent: ''
    },    
  });
  await db.LeagueTeam.create({
    data: {
      teamName: "Noobs 3",
      leagueName: "Worst League in the World",
      round1: true,
      round1Opponent: 'Best team ever',
      round2: true,
      round2Opponent: 'Noobs',
      round3: false,
      round3Opponent: '',
      round4: false,
      round4Opponent: '',
      round5: false,
      round5Opponent: '',
      round6: false,
      round6Opponent: ''
    },    
  });
  await db.LeagueTeam.create({
    data: {
      teamName: "Noobs 2",
      leagueName: "Worst League in the World",
      round1: true,
      round1Opponent: 'Noobs',
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
    },    
  });
  await db.LeagueTeam.create({
    data: {
      teamName: "Noobs",
      leagueName: "Worst League in the World",
      round1: true,
      round1Opponent: 'Noobs 2',
      round2: true,
      round2Opponent: 'Noobs 3',
      round3: true,
      round3Opponent: 'Pro Cheaters',
      round4: false,
      round4Opponent: '',
      round5: false,
      round5Opponent: '',
      round6: false,
      round6Opponent: ''
    },    
  });
  const allUsers = await db.User.findMany();
  const allPlayers = await db.Player.findMany();
  const allLeagues = await db.League.findMany();
  const allGames = await db.Game.findMany();
  const allTeams = await db.Team.findMany();
  const data = [allUsers, allPlayers, allLeagues, allGames, allTeams];
  res.json(data);
};

module.exports = {
  generate,
};

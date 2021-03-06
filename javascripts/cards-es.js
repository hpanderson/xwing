(function() {
  var exportObj;

  exportObj = typeof exports !== "undefined" && exports !== null ? exports : this;

  if (exportObj.codeToLanguage == null) {
    exportObj.codeToLanguage = {};
  }

  exportObj.codeToLanguage.es = 'Español';

  if (exportObj.translations == null) {
    exportObj.translations = {};
  }

  exportObj.translations['Español'] = {
    action: {
      "Barrel Roll": "Tonel Volado",
      "Boost": "Impulso",
      "Evade": "Evadir",
      "Focus": "Concentración",
      "Target Lock": "Blanco Fijado",
      "Recover": "Recuperar",
      "Reinforce": "Reforzar",
      "Jam": "Jam",
      "Coordinate": "Coordinar",
      "Cloak": "Encubrir"
    },
    slot: {
      "Astromech": "Astromech",
      "Bomb": "Bomb",
      "Cannon": "Cañón",
      "Crew": "Tripulación",
      "Elite": "Élite",
      "Missile": "Misiles",
      "System": "Sistemas",
      "Torpedo": "Torpedos",
      "Turret": "Turret",
      "Cargo": "Cargo",
      "Hardpoint": "Hardpoint",
      "Team": "Team"
    },
    sources: {
      "Core": "Core",
      "A-Wing Expansion Pack": "A-Wing Expansion Pack",
      "B-Wing Expansion Pack": "B-Wing Expansion Pack",
      "X-Wing Expansion Pack": "X-Wing Expansion Pack",
      "Y-Wing Expansion Pack": "Y-Wing Expansion Pack",
      "Millennium Falcon Expansion Pack": "Millennium Falcon Expansion Pack",
      "HWK-290 Expansion Pack": "HWK-290 Expansion Pack",
      "TIE Fighter Expansion Pack": "TIE Fighter Expansion Pack",
      "TIE Interceptor Expansion Pack": "TIE Interceptor Expansion Pack",
      "TIE Bomber Expansion Pack": "TIE Bomber Expansion Pack",
      "TIE Advanced Expansion Pack": "TIE Advanced Expansion Pack",
      "Lambda-Class Shuttle Expansion Pack": "Lambda-Class Shuttle Expansion Pack",
      "Slave I Expansion Pack": "Slave I Expansion Pack",
      "Imperial Aces Expansion Pack": "Imperial Aces Expansion Pack",
      "Rebel Transport Expansion Pack": "Rebel Transport Expansion Pack",
      "Z-95 Headhunter Expansion Pack": "Z-95 Headhunter Expansion Pack",
      "TIE Defender Expansion Pack": "TIE Defender Expansion Pack",
      "E-Wing Expansion Pack": "E-Wing Expansion Pack",
      "TIE Phantom Expansion Pack": "TIE Phantom Expansion Pack",
      "Tantive IV Expansion Pack": "Tantive IV Expansion Pack",
      "Rebel Aces Expansion Pack": "Rebel Aces Expansion Pack"
    },
    ui: {
      shipSelectorPlaceholder: "Selecciona una nave",
      pilotSelectorPlaceholder: "Selecciona un piloto",
      upgradePlaceholder: function(translator, language, slot) {
        switch (slot) {
          case 'Elite':
            return "Sin Talento de Élite";
          case 'Astromech':
            return "Sin Droide Astromecánico";
          default:
            return "Sin Mejora de " + (translator(language, 'slot', slot));
        }
      },
      modificationPlaceholder: "Sin Modificación",
      titlePlaceholder: "Sin Título",
      upgradeHeader: function(translator, language, slot) {
        switch (slot) {
          case 'Elite':
            return "Talento de Élite";
          case 'Astromech':
            return "Droide Astromecánico";
          default:
            return "Mejora de " + (translator(language, 'slot', slot));
        }
      },
      unreleased: "inédito",
      epic: "epic"
    },
    byCSSSelector: {
      '.xwing-card-browser .translate.sort-cards-by': 'Sort cards by',
      '.xwing-card-browser option[value="name"]': 'Name',
      '.xwing-card-browser option[value="source"]': 'Source',
      '.xwing-card-browser option[value="type-by-points"]': 'Type (by Points)',
      '.xwing-card-browser option[value="type-by-name"]': 'Type (by Name)',
      '.xwing-card-browser .translate.select-a-card': 'Select a card from the list at the left.'
    },
    singular: {
      'pilots': 'Piloto',
      'modifications': 'Modificación',
      'titles': 'Título'
    },
    types: {
      'Pilot': 'Piloto',
      'Modification': 'Modificación',
      'Title': 'Título'
    }
  };

  if (exportObj.cardLoaders == null) {
    exportObj.cardLoaders = {};
  }

  exportObj.cardLoaders['Español'] = function() {
    var basic_cards, modification_translations, pilot_translations, title_translations, upgrade_translations;
    exportObj.cardLanguage = 'Español';
    basic_cards = exportObj.basicCardData();
    exportObj.ships = basic_cards.ships;
    exportObj.renameShip('Lambda-Class Shuttle', 'Lanzadera clase Lambda');
    exportObj.renameShip('TIE Advanced', 'TIE Avanzado');
    exportObj.renameShip('TIE Bomber', 'Bombardero TIE');
    exportObj.renameShip('TIE Fighter', 'Caza TIE');
    exportObj.renameShip('TIE Interceptor', 'Interceptor TIE');
    exportObj.renameShip('TIE Phantom', 'TIE Fantasma');
    exportObj.renameShip('A-Wing', 'Ala-A');
    exportObj.renameShip('B-Wing', 'Ala-B');
    exportObj.renameShip('E-Wing', 'Ala-E');
    exportObj.renameShip('X-Wing', 'Ala-X');
    exportObj.renameShip('Y-Wing', 'Ala-Y');
    exportObj.renameShip('CR90 Corvette (Aft)', 'Corbeta CR90 (Popa)');
    exportObj.renameShip('CR90 Corvette (Fore)', 'Corbeta CR90 (Proa)');
    exportObj.renameShip('GR-75 Medium Transport', 'Transporte mediano GR-75');
    pilot_translations = {
      "Wedge Antilles": {
        text: "Cuando ataques, la agilidad del piloto se reduce en 1 (hasta un mínimo de 0).",
        ship: "Ala-X"
      },
      "Garven Dreis": {
        text: "Después de gastar una ficha de concentración, en vez de descartarla puedes asignar esa ficha a cualquier otra nave aliada que tengas a rango 1-2.",
        ship: "Ala-X"
      },
      "Red Squadron Pilot": {
        name: "Piloto del escuadrón rojo",
        ship: "Ala-X"
      },
      "Rookie Pilot": {
        name: "Piloto Novato",
        ship: "Ala-X"
      },
      "Biggs Darklighter": {
        text: "Las demás naves aliadas que tengas a alcance 1 no pueden ser seleccionadas como objetivo de un ataque si en vez de eso el atacante pudiese seleccionarte a tí como objetivo.",
        ship: "Ala-X"
      },
      "Luke Skywalker": {
        text: "Cuando defiendes en combate puedes cambiar uno de tus resultados %FOCUS% por %EVADE%.",
        ship: "Ala-X"
      },
      "Gray Squadron Pilot": {
        name: "Piloto del escuadrón gris",
        ship: "Ala-Y"
      },
      '"Dutch" Vander': {
        text: "Después de que fijes un blanco, elige otra nave aliada que tengas a alcance 1-2. La nave elegida podrá fijar un blanco inmediatamente.",
        ship: "Ala-Y"
      },
      "Horton Salm": {
        text: "Cuando ataques a alcance 2-3, puedes volver a lanzar cualesquier dados en los que hayas sacado caras vacías.",
        ship: "Ala-Y"
      },
      "Gold Squadron Pilot": {
        name: "Piloto del escuadrón oro",
        ship: "Ala-Y"
      },
      "Academy Pilot": {
        name: "Piloto de la academia",
        ship: "Caza TIE"
      },
      "Obsidian Squadron Pilot": {
        name: "Piloto del escuadrón Obsidiana",
        ship: "Caza TIE"
      },
      "Black Squadron Pilot": {
        name: "Piloto del escuadrón Negro",
        ship: "Caza TIE"
      },
      '"Winged Gundark"': {
        name: '"Gundark Alado"',
        text: "Cuando ataques a alcance 1 puedes cambiar uno de tus resultados %HIT% por uno %CRIT%",
        ship: "Caza TIE"
      },
      '"Night Beast"': {
        name: '"Bestia Nocturna"',
        text: "Después de que ejecutes una acción verde puedes realizar una acción libre de concentración",
        ship: "Caza TIE"
      },
      '"Backstabber"': {
        name: '"Asesino Furtivo"',
        text: "Cuando ataques desde fuera del arco de fuego el defensor, lanza 1 dado de atauque adicional.",
        ship: "Caza TIE"
      },
      '"Dark Curse"': {
        name: '"Maldición Oscura"',
        text: "Cuando te defiendas en combate, las naves que te ataquen no podrán gastar fichas de concentración ni volver a lanzar dados de ataque.",
        ship: "Caza TIE"
      },
      '"Mauler Mithel"': {
        name: '"Mutilador Mithel"',
        text: "Si atacas a alcance 1, lanza 1 dado de ataque adicional.",
        ship: "Caza TIE"
      },
      '"Howlrunner"': {
        name: '"Aullador Veloz"',
        text: "Cuando otra nave aliada que tengas a alcance 1 ataque con su armamento principal, podrá volver a lanzar 1 dado de ataque.",
        ship: "Caza TIE"
      },
      "Tempest Squadron Pilot": {
        name: "Piloto del escuadrón Tempestad",
        ship: "TIE Avanzado"
      },
      "Storm Squadron Pilot": {
        name: "Piloto del escuadrón Tormenta",
        ship: "TIE Avanzado"
      },
      "Maarek Stele": {
        text: "Cuando tu ataque inflija una carta de daño boca arriba al defensor, en vez de eso roba 3 cartas de daño, elige 1 de ellas a tu ellección y descarta las otras.",
        ship: "TIE Avanzado"
      },
      "Darth Vader": {
        text: "Puedes llevar a cabo dos acciones durante el paso de acción.",
        ship: "TIE Avanzado"
      },
      "Alpha Squadron Pilot": {
        name: "Piloto del escuadrón Alfa",
        ship: "Interceptor TIE"
      },
      "Avenger Squadron Pilot": {
        name: "Piloto del escuadrón Vengador",
        ship: "Interceptor TIE"
      },
      "Saber Squadron Pilot": {
        name: "Piloto del escuadrón Sable",
        ship: "Interceptor TIE"
      },
      "\"Fel's Wrath\"": {
        name: '"Ira de Fel"',
        ship: "Interceptor TIE",
        text: "Cuando tengas asignadas tantas cartas de Daño como tu Casco o más, no serás destruido hasta el final de la fase de Combate."
      },
      "Turr Phennir": {
        ship: "Interceptor TIE",
        text: "Después de que efectúes un ataque, puedes llevar a cabo una acción gratuita de impulso o tonel volado."
      },
      "Soontir Fel": {
        ship: "Interceptor TIE",
        text: "Cuando recibas una ficha de Tensión, puedes asignar 1 ficha de Concentración a tu nave."
      },
      "Tycho Celchu": {
        text: "Puedes realizar acciones incluso cuando tengas fichas de tensión.",
        ship: "Ala-A"
      },
      "Arvel Crynyd": {
        text: "Puedes designar como objetivo de tu ataque a una nave enemiga que esté dentro de tu arco de ataque y en contacto contigo.",
        ship: "Ala-A"
      },
      "Green Squadron Pilot": {
        name: "Piloto del escuadrón verde",
        ship: "Ala-A"
      },
      "Prototype Pilot": {
        name: "Piloto de pruebas",
        ship: "Ala-A"
      },
      "Outer Rim Smuggler": {
        name: "Contrabandista del Borde Exterior"
      },
      "Chewbacca": {
        text: "Cuando recibas una carta de daño boca arriba, ponla boca abajo inmediatamente sin resolver su efecto."
      },
      "Lando Calrissian": {
        text: "Después de que ejecutes una maniobra verde, elige otra nave aliada que tengas a alcance 1. Esa nave podrá realizar una acción gratuita de las indicadas en su barra de acciones."
      },
      "Han Solo": {
        text: "Cuando ataques, puedes volver a lanzar todos tus dados. Si decides hacerlo debes lanzar tantos como sea posible."
      },
      "Bounty Hunter": {
        name: "Cazarrecompensas"
      },
      "Kath Scarlet": {
        text: "Cuando ataques, el defensor recibe una ficha de tensión si anula al menos un resultado %CRIT%."
      },
      "Boba Fett": {
        text: "Cuando realices una maniobra de inclinación (%BANKLEFT% o %BANKRIGHT%) puedes girar tu selector de maniobras para escoger la otra maniobra e inclinación de la misma velocidad."
      },
      "Krassis Trelix": {
        text: "Cuando ataques con un armamento secundario puedes volver a lanzar 1 dado de ataque."
      },
      "Ten Numb": {
        text: "Cuando ataques, uno de tus resultados %CRIT% no puede ser anulado por los dados de defensa.",
        ship: "Ala-B"
      },
      "Ibtisam": {
        text: "Cuando ataques o te defiendas, si tienes al menos una ficha de Tensión puedes volver a lanzar uno de tus dados.",
        ship: "Ala-B"
      },
      "Dagger Squadron Pilot": {
        name: "Piloto del escuadrón daga",
        ship: "Ala-B"
      },
      "Blue Squadron Pilot": {
        name: "Piloto del escuadrón azul",
        ship: "Ala-B"
      },
      "Rebel Operative": {
        name: "Operador Rebelde"
      },
      "Roark Garnet": {
        text: 'Al comienzo de la fase de combate, elige a otra nave aliada que tengas a alcance 1-3. Hasta el final de la fase, se considera que el piloto de esta nave tiene habilidad 12.'
      },
      "Kyle Katarn": {
        text: "Al comienzo de la fase de combate, puedes asignar una de tus fichas de Concentración a otra nave aliada que tengas a alcance 1-3."
      },
      "Jan Ors": {
        text: "Cuando otra nave aliada que tengas a alcance 1-3 efectúe un ataque, si no tienes fichas de Tensión puedes recibir una ficha de Tensión para que esa nave lance un dado de ataque adicional."
      },
      "Scimitar Squadron Pilot": {
        name: "Piloto del escuadrón Cimitarra",
        ship: "Bombardero TIE"
      },
      "Gamma Squadron Pilot": {
        name: "Piloto del escuadrón Gamma",
        ship: "Bombardero TIE"
      },
      "Captain Jonus": {
        name: "Capitán Jonus",
        ship: "Bombardero TIE",
        text: "Cuando otra nave aliada que tengas a alcance 1 ataque con un sistema de armamento secundario, puede volver a lanzar un máximo de 2 dados de ataque."
      },
      "Major Rhymer": {
        name: "Comandante Rhymer",
        ship: "Bombardero TIE",
        text: "Cuando ataques con un sistema de armamento secundario, puedes incrementar o disminuir el alcance del arma en 1 hasta un límite de alcance comprendido entre 1 y 3."
      },
      "Omicron Group Pilot": {
        name: "Piloto del grupo omicrón",
        ship: "Lanzadera clase Lambda"
      },
      "Captain Kagi": {
        name: "Capitán Kagi",
        text: "Cuando una nave enemiga fije un blanco, deberá fijar tu nave como blanco si es posible.",
        ship: "Lanzadera clase Lambda"
      },
      "Colonel Jendon": {
        name: "Coronel Jendon",
        text: "Al comienzo de la fase de combate, puedes asignar una de tus fichas azules de Blanco Fijado a una nave aliada que tengas a rango 1 si no tiene ya una ficha azul de Blanco Fijado.",
        ship: "Lanzadera clase Lambda"
      },
      "Captain Yorr": {
        name: "Capitán Yorr",
        text: "Cuando otra nave aliada que tengas a alcance 1-2 vaya a recibir una ficha de Tensión, si tienes 2 fichas de Tensión o menos puedes recibir esa ficha en su lugar.",
        ship: "Lanzadera clase Lambda"
      },
      "Lieutenant Lorrir": {
        ship: "Interceptor TIE",
        text: "Cuando realices una acción de tonel volado, puedes recibir un token de stress para usar la plantilla (%BANKLEFT% 1) o (%BANKRIGHT% 1) en lugar de la plantilla (%STRAIGHT% 1)."
      },
      "Royal Guard Pilot": {
        name: "Piloto de la guardia Real",
        ship: "Interceptor TIE"
      },
      "Tetran Cowall": {
        ship: "Interceptor TIE",
        text: "Cuando reveles una maniobra %UTURN%, puedes tratar la velocidad de esa maniobra como \"1\", \"3\" o \"5\"."
      },
      "Kir Kanos": {
        ship: "Interceptor TIE",
        text: "Cuando ataques a una nave a alcance 2-3, puedes gastar un token de evadir para añadir 1 resultado %HIT% a tu tirada."
      },
      "Carnor Jax": {
        ship: "Interceptor TIE",
        text: "Las naves enemigas a alcance 1 de esta nave no pueden realizar acciones de concentración o evadir, ni pueden gastar fichas de concentración ni evadir."
      },
      "GR-75 Medium Transport": {
        name: "Transporte mediano GR-75",
        ship: "Transporte mediano GR-75"
      },
      "Bandit Squadron Pilot": {
        name: "Piloto del escuadrón bandido"
      },
      "Tala Squadron Pilot": {
        name: "Piloto del escuadrón Tala"
      },
      "Lieutenant Blount": {
        name: "Lugarteniente Blount",
        text: "Cuando ataques, el defensor es impactado por tu ataque incluso si no sufre ningún daño."
      },
      "Airen Cracken": {
        name: "Airen Cracken",
        text: "Después de que realices un ataque, puedes escoger una nave aliada a alcance 1. Dicha nave puede realizar 1 acción gratuita."
      },
      "Delta Squadron Pilot": {
        name: "Piloto del escuadrón Delta"
      },
      "Onyx Squadron Pilot": {
        name: "Piloto del escuadrón Onyx"
      },
      "Colonel Vessery": {
        name: "Coronel Vessery",
        text: "Cuando ataques, inmediatamente después de que hayas lanzado los dados, puedes fijar blanco en el defensor si esa nave tiene ya una ficha roja de blanco fijado."
      },
      "Rexler Brath": {
        text: "Después de que realices un ataque que haga al menos 1 carta de daño al defensor, tu puedes gastar una ficha de concentración para voltear esa carta boca arriba."
      },
      "Knave Squadron Pilot": {
        name: "Piloto del escuadrón Bribón",
        ship: "Ala-E"
      },
      "Blackmoon Squadron Pilot": {
        name: "Piloto del escuadrón de la luna negra",
        ship: "Ala-E"
      },
      "Etahn A'baht": {
        text: "Cuando un enemigo dentro de tu arco de fuego a alcance 1-3 se esté defendiendo, el atacante puede cambiar uno de sus resultados %HIT% por un %CRIT%.",
        ship: "Ala-E"
      },
      "Corran Horn": {
        text: "At the start of the End phase, you may perform one attack.  You cannot attack during the next round.",
        ship: "Ala-E"
      },
      "Sigma Squadron Pilot": {
        name: "Piloto del escuadrón Sigma",
        ship: "TIE Fantasma"
      },
      "Shadow Squadron Pilot": {
        name: "Piloto del escuadrón Sombra",
        ship: "TIE Fantasma"
      },
      "Unspoiled PS6 TIE Phantom Pilot": {
        name: "Piloto de habilidad 6 no publicado",
        ship: "TIE Fantasma"
      },
      '"Whisper"': {
        name: '"Susurro"',
        text: "Después de que efectúes un ataque que de en el blanco, puedes asignar una ficha de focus a tu nave.",
        ship: "TIE Fantasma"
      },
      "CR90 Corvette (Fore)": {
        name: "Corbeta CR90 (Proa)",
        ship: "Corbeta CR90 (Proa)"
      },
      "CR90 Corvette (Aft)": {
        name: "Corbeta CR90 (Popa)",
        ship: "Corbeta CR90 (Popa)"
      },
      "Wes Janson": {
        text: "Después de que realices un ataque, puedes remover una ficha de Concentración, Evadir o una ficha de fijar blanco azúl del defensor.",
        ship: "Ala-X"
      },
      "Jek Porkins": {
        text: "Cuando recibas una ficha de Tensión, puedes removerla y lanzar un dado de ataque. Si el resultado es de %HIT%, asigna una carta de daño boca abajo a tu nave.",
        ship: "Ala-X"
      },
      '"Hobbie" Kilvan': {
        text: "Cuando adquieras o gastes una ficha de fijar blanco, puedes remover una ficha de Tensión de tu nave.",
        ship: "Ala-X"
      },
      "Tarn Mison": {
        text: "Cuando una nave te declare como el objetivo de tu ataque, puedes fijar blanco en esa nave.",
        ship: "Ala-X"
      },
      "Jake Farrell": {
        text: "Después de que realices una acción de Concentración o te asignen una ficha de Concentración, puedes realizar una acción de impulso o de tonel volado.",
        ship: "Ala-A"
      },
      "Unspoiled PS5 A-Wing Pilot": {
        name: "Unspoiled PS5 A-Wing Pilot",
        text: "This card has not yet been revealed.",
        ship: "Ala-A"
      },
      "Keyan Farlander": {
        text: "Cuando ataques, puedes remover de tu nave una ficha de tensión para cambiar todos tus resultados %FOCUS% por %HIT%.",
        ship: "Ala-B"
      },
      "Unspoiled PS5 B-Wing Pilot": {
        name: "Unspoiled PS5 B-Wing Pilot",
        text: "This card has not yet been revealed.",
        ship: "Ala-B"
      }
    };
    upgrade_translations = {
      "Ion Cannon Turret": {
        name: "Torreta de cañones de Iones",
        text: "<strong>Ataque:</strong> Ataca 1 nave (aunque esté fuera de tu arco de fuego).<br /><br />Si este ataque impacta en la nave enemiga, ésta sufre 1 punto de daño y recibe 1 ficha de Iones. Después se anulan todos los resultados de los dados."
      },
      "Proton Torpedoes": {
        name: "Torpedos de protones",
        text: "<strong>Ataque (Blanco Fijado):</strong> Gasta tu ficha de Blanco Fijado y descarta esta carta para efectuar este ataque.<br /><br />Puedes cambiar uno de tus resultados %FOCUS% por un resultado %CRIT%."
      },
      "R2 Astromech": {
        name: "Droide Astromecánico R2",
        text: "Puedes ejecutar todas las maniobras de velocidad 1 y 2 como maniobras verdes."
      },
      "R2-D2": {
        text: "Después de que realices una maniobra verde puedes recuperar una ficha de Escudos (pero no puedes tener más fichas que tu valor en Escudos)."
      },
      "R2-F2": {
        text: "<strong>Acción:</strong> Tu valor de agilidad aumenta en 1 hasta el final de esta ronda de juego."
      },
      "R5-D8": {
        text: "<strong>Acción:</strong> Lanza un dado de defensa.<br /><br />Si sacas %EVADE% o %FOCUS% descarta 1 carta de Daño que tengas boca abajo."
      },
      "R5-K6": {
        text: "Después de gastar tu ficha de blanco fijado, lanza 1 dado de defensa.<br /><br />Si sacas un resultado %EVADE% puedes volver a fijar la misma nave como blanco inmediatamente. No puedes gastar esta nueva ficha de blanco fijado durante este ataque."
      },
      "R5 Astromech": {
        name: "Droide Astromecánico R5",
        text: "Durante la fase Final, puedes elegir una de las cartas de Daño con el atributo <strong>Nave</strong> que tengas boca arriba. darle la vuelta y dejarla boca abajo."
      },
      "Determination": {
        name: "Determinación",
        text: "Cuando se te asigne una carta de daño boca arriba que tenga el atributo <strong>piloto</strong>, descártala inmediatamente sin resolver su efecto."
      },
      "Swarm Tactics": {
        name: "Táctica de Enjambre",
        text: "Al principio de la fase de Combate, elige 1 nave aliada que tengas a alcance 1.<br /><br />Hasta el final de esta fase se considera que el valor de Habilidad de la nave elejida es igual al tuyo."
      },
      "Squad Leader": {
        name: "Jefe de Escuadrón",
        text: "<strong>Acción:</strong> Elije una nave a alcance 1-2 que tenga una Habilidad de piloto más baja que la tuya.<br /><br />La nave elegida puede realizar inmediatamente una acción gratuita."
      },
      "Expert Handling": {
        name: "Pericia",
        text: "<strong>Acción:</strong> Ejecuta un tonel volado. Si no tienes el icono de acción %BARRELROLL%, recibes una ficha de Tensión.<br /><br />Después puedes descartar una ficha de Blanco Fijado enemiga que esté asignada a tu nave."
      },
      "Marksmanship": {
        name: "Puntería",
        text: "<strong>Acción:</strong> Cuando ataques en esta ronda puedes cambiar 1 de tus resultados %FOCUS% por un resultado %CRIT% y tus demás resultados %FOCUS% por %HIT%."
      },
      "Concussion Missiles": {
        name: "Misiles de Impacto",
        text: "<strong>Ataque (Blanco Fijado):</strong> Gasta tu ficha de Blanco Fijado y descarta esta carta para efectuar este ataque.<br /><br />Puedes cambiar un resultado de cara vacía por un resultado %HIT%."
      },
      "Cluster Missiles": {
        name: "Misiles de Racimo",
        text: "<strong>Ataque (Blanco Fijado):</strong> Gasta tu ficha de Blanco Fijado y descarta esta carta para efectuar este ataque <strong>dos veces</strong>."
      },
      "Daredevil": {
        name: "Temerario",
        text: "<strong>Acción:</strong> Ejecuta una maniobra blanca (%TURNLEFT% 1) o (%TURNRIGHT% 1) y recibe 1 ficha de Tensión.<br /><br />Después, si no tienes el ícono %BOOST%, lanza 2 dados de ataque y sufre todos los daños normales (%HIT%) y críticos (%CRIT%) obtenidos."
      },
      "Elusiveness": {
        name: "Escurridizo",
        text: "Cuando te defiendas en combate, puedes recibir 1 ficha de Tensión para elegir un dado de ataque. El atacante deberá volver a lanzar ese dado.<br /><br />No puedes usar esta habilidad si ya tienes una ficha de Tensión."
      },
      "Homing Missiles": {
        name: "Misiles Rastreadores",
        text: "<strong>Ataque (Blanco Fijado):</strong> Gasta tu ficha de Blanco Fijado y descarta esta carta para efectuar este ataque.<br /><br />El defensor no puede gastar fichas de evasión durante este ataque."
      },
      "Push the Limit": {
        name: "Máximo Esfuerzo",
        text: "Una vez por ronda, después de que realices una acción podras realizar una acción gratuita de entre las que figuren en tu barra de acciones.<br /><br />Después recibes una ficha de Tensión."
      },
      "Deadeye": {
        name: "Certero",
        text: "Puedes tratar la expresión \"Ataque (blanco fijado)\" como \"Ataque (concentración)\".<br /><br />Cuando un ataque te indique que debes gastar una ficha de Blanco Fijado puedes gastar una ficha de Concentración en su lugar."
      },
      "Expose": {
        name: "Expuesto",
        text: "<strong>Acción:</strong> Hasta el final de la ronda, el valor de tu armamento principal se incrementa en 1 y tu Agilidad se reduce en 1."
      },
      "Gunner": {
        name: "Artillero",
        text: "Después de que efectúes un ataque y lo falles, realiza inmediatamente un ataque con tu armamento principal.  No podrás realizar ningún otro ataque esta ronda."
      },
      "Ion Cannon": {
        name: "Cañón de Iones",
        text: "<strong>Ataque:</strong> Ataca a 1 nave.<br /><br />Si este ataque impacta el objetivo, el defensor sufre un daño y recibe una ficha de iones. Después se anulan <b>todos</b> los resultados de los dados."
      },
      "Heavy Laser Cannon": {
        name: "Cañón Laser Pesado",
        text: "<strong>Ataque:</strong> Ataca a 1 nave.<br /><br />Inmediatamente después de lanzar los dados de ataque, debes cambiar todos tus resultados %CRIT% por resultados %HIT%."
      },
      "Seismic Charges": {
        name: "Cargas Sísmicas",
        text: "Cuando reveles tu selector de maniobras, puedes descartar esta carta para <strong>soltar</strong> 1 ficha de cargas sísmicas.<br /><br />Esta ficha se <strong>detona</strong> al final de la fase de Activación."
      },
      "Mercenary Copilot": {
        name: "Copiloto Mercenario",
        text: "Cuando ataques a alcance 3, puedes cambiar 1 de tus resultados %HIT% por un resultado %CRIT%."
      },
      "Assault Missiles": {
        name: "Misiles de Asalto",
        text: "<strong>Ataque (Blanco Fijado):</strong> Gasta tu ficha de Blanco Fijado y descarta esta carta para efectuar este ataque.<br /><br />Si este ataque impacta el objetivo, toda otra nave que haya a alcance 1 del defensor sufre 1 daño."
      },
      "Veteran Instincts": {
        name: "Instinto de Veterano",
        text: "La habilidad de tu piloto se incrementa en 2."
      },
      "Proximity Mines": {
        name: "Minas de Proximidad",
        text: "<strong>Acción:</strong> Descarta esta carta para <strong>soltar</strong> 1 ficha de Mina de Proximidad.<br /><br />Cuando una nave ejecute una maniobra, si su peana o la plantilla de maniobras se solapa con esta ficha, ésta se <strong>detona</strong>."
      },
      "Weapons Engineer": {
        name: "Ingeniero de Armamento",
        text: "Puedes tener 2 Blancos fijados a la vez (pero sólo 1 para cada nave enemiga).<br /><br />Cuando fijes un blanco, puedes fijar un blanco en dos naves distintas."
      },
      "Draw Their Fire": {
        name: "Atraer su fuego",
        text: "Cuando una nave aliada que tengas a alcance 1 sea alcanzada por un ataque, puedes sufrir uno de sus resultados %CRIT% no anulados por sus dados de defensa."
      },
      "Luke Skywalker": {
        text: "Después de que efectúes un ataque y lo falles, realiza inmediatamente un ataque con tu armamento principal. Puedes cambiar un resultado %FOCUS% por un resultado %HIT%. No podrás realizar ningún otro ataque esta ronda."
      },
      "Nien Nunb": {
        text: "Todas las maniobras %STRAIGHT% se consideran verdes para tí."
      },
      "Chewbacca": {
        text: "Cuando recibas 1 carta de Daño, puedes descartarla y recuperar 1 ficha de Escudos.<br /><br />Luego descarta esta carta de mejora."
      },
      "Advanced Proton Torpedoes": {
        name: "Torpedos de protones avanzados",
        text: "<strong>Ataque (Blanco Fijado):</strong> Gasta tu ficha de Blanco Fijado y descarta esta carta para efectuar este ataque. Puedes cambiar hasta tres resultados de caras vacías por resultados %FOCUS%."
      },
      "Autoblaster": {
        name: "Cañón Blaster Automático",
        text: "<strong>Ataque:</strong> Ataca a 1 nave.<br /><br />Tus resultados %HIT% no pueden ser anulados por los dados de defensa.<br /><br />El defensor puede anular tus resultados %CRIT% antes que los %HIT%."
      },
      "Fire-Control System": {
        name: "Sistema de Control de Disparo",
        text: "Después de que efectúes un ataque, puedes fijar al defensor como blanco."
      },
      "Blaster Turret": {
        name: "Torreta Bláster",
        text: "<strong>Ataque (Concentración):</strong> Gasta 1 ficha de Concentración para efectuar este ataque contra una nave (aunque esté fuera de tu arco de fuego)."
      },
      "Recon Specialist": {
        name: "Especialista en Reconocimiento",
        text: "Cuando realices una acción de Concentración, asigna 1 ficha de Concentración adicional a tu nave."
      },
      "Saboteur": {
        name: "Saboteador",
        text: "<strong>Acción:</strong> Elige 1 nave enemiga que tengas a alcance 1 y lanza q dado de ataque. Si sacas %HIT% o %CRIT%, elige al azar una carta de daño que esa nave tenga asignada boca abajo, dale la vuelta y resuélvela."
      },
      "Intelligence Agent": {
        name: "Agente del Servicio de Inteligencia",
        text: "Al comienzo de la fase de Activación, elige una nave enemiga que tengas a alcance 1-2. Puedes mirar el selector de maniobras de dicha nave."
      },
      "Proton Bomb": {
        name: "Bombas de Protones",
        text: "Cuando reveles tu selector de maniobras, puedes descartar esta carta para <strong>soltar</strong> 1 ficha de Bombas de Protones.<br /><br />Esta ficha se <strong>detona</strong> al final de la fase de Activación."
      },
      "Adrenaline Rush": {
        name: "Descarga de Adrenalina",
        text: "Cuando reveles una maniobra roja, puedes descartar esta carta para tratarla como blanca hasta el final de la fase de Activación."
      },
      "Advanced Sensors": {
        name: "Sensores Avanzados",
        text: "Inmediatamente antes de que reveles tu maniobra, puedes realizar 1 acción gratuita.<br /><br />Si utilizas esta capacidad, debes omitir tu paso de \"Realizar una acción\" durante esta ronda."
      },
      "Sensor Jammer": {
        name: "Emisor de Interferencias",
        text: "Cuando te defiendas, puedes cambiar 1 de los resultados %HIT% por uno %FOCUS%.<br /><br />El atacante no puede volver a lanzar el dado cuyo resultado hayas cambiado."
      },
      "Darth Vader": {
        text: "Después de que ataques una nave enemiga, puedes sufrir 2 de daño para que esa nave reciba 1 de daño crítico."
      },
      "Rebel Captive": {
        name: "Prisionero Rebelde",
        text: "Una vez por ronda, la primera nave que te declare como objetivo de un ataque recibe inmediatamente una ficha de Tensión."
      },
      "Flight Instructor": {
        name: "Instructor de Vuelo",
        text: "Al defender, puedes volver a lanzar uno de tus resultados %FOCUS%. Si la habilidad del piloto atacante es 2 o menos, puedes volver a lanzar un dado con resultado de cara blanca en su lugar."
      },
      "Navigator": {
        name: "Oficial de Navegación",
        text: "Cuando reveles una maniobra, puedes rotar el selector para escoger otra maniobra que tenga la misma dirección.<br /><br />Si tienes alguna ficha de Tensión, no puedes rotar el selector para escoger una maniobra roja."
      },
      "Opportunist": {
        name: "Oportunista",
        text: "Cuando ataques, si el defensor no tiene fichas de concentración o evadir, puedes recibir una ficha de Tensión para lanzar un dado adicional.<br /><br />No puedes utilizar esta habilidad si ya tienes una ficha de Tensión."
      },
      "Comms Booster": {
        name: "Comms Booster",
        text: "<strong>Energy:</strong> Spend 1 energy to remove all stress tokens from a friendly ship at Range 1-3.  Then assign 1 focus token to that ship."
      },
      "Slicer Tools": {
        name: "Slicer Tools",
        text: "<strong>Action:</strong> Choose 1 or more ships at Range 1-3 that have a stress token.  For each ship chosen, you may spend 1 energy to cause that ship to suffer 1 damage."
      },
      "Shield Projector": {
        name: "Shield Projector",
        text: "When an enemy ship is declaring either a small or large ship as the target of its attack, you may spend 3 energy to force that ship to target you if possible."
      },
      "Ion Pulse Missiles": {
        name: "Misiles de Pulso Iónico",
        text: "<strong>Ataque (Blanco Fijado):</strong> Gasta tu ficha de Blanco Fijado y descarta esta carta para efectuar este ataque.<br /><br />Si este ataque impacta el objetivo, el defensor sufre un daño y recibe dos fichas de iones. Después se anulan <strong>todos</strong> los resultados de los dados."
      },
      "Wingman": {
        name: "Compañero de Ala",
        text: "Al comienzo de la fase de combate, quita una ficha de tensión de una nave aliada que tengas a alcance 1."
      },
      "Decoy": {
        name: "Señuelo",
        text: "Esta carta no ha sido publicada."
      },
      "Outmaneuver": {
        name: "Mejores maniobras",
        text: "Cuando ataques a una nave dentro de tu arco de fuego, si tu nave no se encuentra dentro del arco de fuego de dicha nave, reduce su valor de Agilidad en 1 (para un mínimo de 0)."
      },
      "Predator": {
        name: "Depredador",
        text: "Cuando ataques, puedes volver a lanzar un dado de ataque. Si la Habilidad del defensor es \"2\" o menor, puedes volver a lanzar dos dados."
      },
      "Flechette Torpedoes": {
        name: "Torpedos tipo Flechilla",
        text: "<strong>Ataque (Blanco Fijado):</strong> Gasta tu ficha de Blanco Fijado y descarta esta carta para efectuar este ataque.<br /><br />Después de efectuar este ataque, el defensor recibe una ficha de estrés si su valor de blindaje es \"4\" o menos."
      },
      "R7 Astromech": {
        name: "Droide Astromecánico R7",
        text: "Once per round when defending, if you have a target lock on the attacker, you may spend the target lock to choose any or all attack dice.  The attacker must reroll the chosen dice."
      },
      "R7-T1": {
        name: "R7-T1",
        text: "<strong>Acción:</strong> Escoge una nave enemiga a alcance 1-2. Si estás dentro del arco de disparo de esa nave puedes fijar blanco en ella. Después realiza una acción de impulso gratuita."
      },
      "Tactician": {
        name: "Tactician",
        text: "This card has not yet been released."
      },
      "R2-D2 (Crew)": {
        name: "R2-D2 (Crew)",
        text: "At the end of the End phase, if you have no shields, you may recover 1 shield and roll 1 attack die.  On a %HIT% result, randomly flip 1 of your facedown Damage cards faceup and resolve it."
      },
      "C-3PO": {
        name: "C-3PO",
        text: "Once per round, before you roll 1 or more defense dice, you may guess aloud a number of %EVADE% results.  If you roll that many %EVADE% results (before modifying dice), add 1 %EVADE% result."
      },
      "Single Turbolasers": {
        name: "Single Turbolasers",
        text: "<strong>Attack (Energy):</strong> Spend 2 energy from this card to perform this attack.  The defender doubles his agility value against this attack.  You may change 1 of your %FOCUS% results to a %HIT% result."
      },
      "Quad Laser Cannons": {
        name: "Quad Laser Cannons",
        text: "<strong>Attack (Energy):</strong> Spend 1 energy from this card to perform this attack.  If this attack does not hit, you may immediately spend 1 energy from this card to perform this attack again."
      },
      "Tibanna Gas Supplies": {
        name: "Tibanna Gas Supplies",
        text: "<strong>Energy:</strong> You may discard this card to gain 3 energy."
      },
      "Ionization Reactor": {
        name: "Ionization Reactor",
        text: "<strong>Energy:</strong> Spend 5 energy from this card and discard this card to cause each other ship at Range 1 to suffer 1 damage and receive 1 ion token."
      },
      "Engine Booster": {
        name: "Engine Booster",
        text: "Immediately before you reveal your maneuver dial, you may spend 1 energy to execute a white (%STRAIGHT% 1) maneuver.  You cannot use this ability if you would overlap another ship."
      },
      "R3-A2": {
        name: "R3-A2",
        text: "Cuando declares a un enemigo como objetivo de tu ataque, si el defensor está dentro de tu arco de fuego, puedes recibir una ficha de Tensión para hacer que el defensor reciba una ficha de Tensión."
      },
      "R2-D6": {
        name: "R2-D6",
        text: "Your upgrade bar gains the %ELITE% upgrade icon.<br /><br />You cannot equip this upgrade if you already have a %ELITE% upgrade icon or if your pilot skill value is \"2\" or lower."
      },
      "Enhanced Scopes": {
        name: "Miras Mejoradas",
        text: "Durante la fase de Activación, trata tu habilidad de piloto como \"0\"."
      },
      "Chardaan Refit": {
        name: "Reajuste Chardaan",
        text: "Esta carta tiene un valor negativo en puntos de escuadrón."
      },
      "Proton Rockets": {
        name: "Rockets de Protones",
        text: "Esta carta no ha sido publicada."
      },
      "Kyle Katarn": {
        text: "After you receive a stress token from your ship, you may assign a focus token to ???"
      },
      "Jan Ors": {
        text: "Esta carta no ha sido publicada."
      },
      "Toryn Farr": {
        text: "<strong>Action:</strong> Spend any amount of energy to choose that many enemy ships at Range 1-2.  Remove all focus, evade, and blue target lock tokens from those ships."
      },
      "R4-D6": {
        text: "When you are hit by an attack and there are at least 3 uncanceled %HIT% results, you may choose to cancel those results until there are 2 remaining.  For each result canceled this way, receive 1 stress token."
      },
      "R5-P9": {
        text: "At the end of the Combat phase, you may spend 1 of your focus tokens to recover 1 shield (up to your shield value)."
      },
      "WED-15 Repair Droid": {
        text: "<strong>Action:</strong> Spend 1 energy to discard 1 of your facedown Damage cards, or spend 3 energy to discard 1 of your faceup Damage cards."
      },
      "Carlist Rieekan": {
        text: "At the start of the Activation phase, you may discard this card to treat each friendly ship's pilot skill value as \"12\" until the end of the phase."
      },
      "Jan Dodonna": {
        text: "When another friendly ship at Range 1 is attacking, it my change 1 of its %HIT% results to a %CRIT%."
      },
      "Expanded Cargo Hold": {
        text: "Once per round, when you would be dealt a faceup Damage card, you may draw that card from either the fore or aft Damage deck.",
        ship: 'Transporte mediano GR-75'
      },
      "Backup Shield Generator": {
        text: "At the end of each round, you may spend 1 energy to recover 1 shield (up to your shield value)."
      },
      "EM Emitter": {
        text: "When you obstruct an attack, the defender rolls 3 additional defense dice (instead of 1)."
      },
      "Frequency Jammer": {
        text: "When you perform a jam action, choose 1 enemy ship that does not have a stress token and is not at Range 1 of the jammed ship.  The chosen ship receives 1 stress token."
      }
    };
    modification_translations = {
      "Stealth Device": {
        name: "Dispositivo de Sigilo",
        text: "Tu Agilidad se incrementa en 1. Descarta esta carta si eres alcanzado por un ataque."
      },
      "Shield Upgrade": {
        name: "Escudos Mejorados",
        text: "Tu valor de Escudos se incrementa en 1."
      },
      "Engine Upgrade": {
        name: "Motor Mejorado",
        text: "Tu barra de acciones gana el ícono %BOOST%."
      },
      "Anti-Pursuit Lasers": {
        name: "Cañones Láser Antipersecución",
        text: "Después de que una nave enemiga ejecute una maniobra que le cause solapar su peana con la tuya, lanza un dado de ataque. Si el resultado es %HIT% o %CRIT%, el enemigo sufre 1 de daño."
      },
      "Targeting Computer": {
        name: "Computadora de Selección de Blancos",
        text: "Tu barra de acciones gana el ícono %TARGETLOCK%."
      },
      "Hull Upgrade": {
        name: "Blindaje mejorado",
        text: "Incrementa tu valor de blindaje en 1."
      },
      "Munitions Failsafe": {
        name: "Sistema de Munición a Prueba de Fallas",
        text: "Cuando ataques on un arma secundaria que te instruye que la descartes para realizar un ataque, no la descartes a menos de que el defensor sea alcanzado por tu ataque."
      },
      "Stygium Particle Accelerator": {
        name: "Acelerador de Partículas de Stygium",
        text: "Cuando realices una acción de Encubrimiento, o te Descubras, puedes realizar una acción de Evadir gratuita."
      },
      "Advanced Cloaking Device": {
        name: "Advanced Cloaking Device",
        text: "After you perform an attack, you may perform a free cloak action.",
        ship: "TIE Fantasma"
      },
      "Combat Retrofit": {
        text: "Increase your hull value by 2 and your shield value by 1.",
        ship: 'Transporte mediano GR-75'
      }
    };
    title_translations = {
      "Slave I": {
        name: "Esclavo 1",
        text: "Tu barra de mejoras gana el ícono %TORPEDO%."
      },
      "Millennium Falcon": {
        name: "Halcón Milenario",
        text: "Tu barra de acciones gana el ícono %EVADE%."
      },
      "Moldy Crow": {
        name: "Cuervo Oxidado",
        text: "Durante la fase final, no retires las fichas de Concentración que no hayas usado."
      },
      "ST-321": {
        text: "Cuando fijes un blanco, puedes hacerlo con cualquier nave enemiga de la zona de juego.",
        ship: "Lanzadera clase Lambda"
      },
      "Royal Guard TIE": {
        name: "TIE de la Guardia Real",
        ship: "Interceptor TIE",
        text: "Puedes equipar a tu nave con 2 mejoras de Modificación diferentes (en vez de una).<br /><br />No puedes tener este título si tu habilidad de piloto es \"4\" o menos."
      },
      "Dodonna's Pride": {
        name: "Dodonna's Pride",
        text: "When you perform a coordinate action, you may choose 2 friendly ships (instead of 1).  Those ships may each perform 1 free action.",
        ship: "Corbeta CR90 (Proa)"
      },
      "A-Wing Test Pilot": {
        name: "Piloto de Pruebas de Ala-A",
        text: "Tu barra de mejoras gana el ícono %ELITE%.<br /><br />No puedes equipar dos %ELITE% iguales. No puedes tener este título si tu habilidad de piloto es \"1\" o menor.",
        ship: "Ala-A"
      },
      "B-Wing/E": {
        text: "Tu barra de mejoras gana el ícono %CREW%.",
        ship: "Ala-B"
      },
      "Tantive IV": {
        text: "Your fore section upgrade bar gains 1 additional %CREW% and 1 additional %TEAM% upgrade icon.",
        ship: "Corbeta CR90 (Proa)"
      },
      "Bright Hope": {
        text: "A reinforce action assigned to your fore section adds 2 %EVADE% results (instead of 1).",
        ship: 'Transporte mediano GR-75'
      },
      "Quantum Storm": {
        text: "At the start of the End phase, if you have 1 or fewer energy tokens, gain 1 energy token.",
        ship: 'Transporte mediano GR-75'
      },
      "Dutyfree": {
        text: "When performing a jam action, you may choose an enemy ship at Range 1-3 (instead of at Range 1-2).",
        ship: 'Transporte mediano GR-75'
      }
    };
    return exportObj.setupCardData(basic_cards, pilot_translations, upgrade_translations, modification_translations, title_translations);
  };

}).call(this);

//@ sourceMappingURL=cards-es.map
const questions = [
  {
    q: "Jsi psychicky připraven na to, že pokud u 49. otázky uděláš chybu, poletíš zpátky sem na start?",
    a: ["Nemám na výběr", "Rozhodně ano", "Miluju tě přeci", "Už teď se bojím, ale zvládnu to"],
    c: [0, 1, 2, 3]
  },
  {
    q: "Jaký je můj nejoblíbenější alkohol?",
    a: ["Víno", "Gin Tonic", "Aperol Spritz", "Pivo"],
    c: 2
  },
  { q: "Kdo z mých přátel má nejradši Blue Lagoon?", a: ["Verunka", "Šárka", "Monča", "Domča"], c: 3 },
  {
    q: "Na kterém ostrově najdeš Blue Lagoon?",
    a: ["Comino", "Filfla", "Manoel", "Salami"],
    c: 0
  },
  { q: "Která barva luzzu lodiček symbolizuje ochranu před nebezpečím (v kombinaci s očima)?", a: ["Modrá a žlutá", "Červená a zelená", "Černá a bílá", "Jenom růžová"], c: 0 },
  { q: "Jakou barvu má tričko, co jsem si od tebe sem vzala?", a: ["Černou", "Bílou", "Modrou", "Červenou"], c: 0 },
  { q: "Který drink bych si dala, kdyby Aperol došel?", a: ["Pivo", "Bílé víno", "Vodu z kohoutku", "Rum"], c: 1 },
  { q: "Co je moje nejoblíbenější vlastnost na tobě?", a: ["Mozek", "Tvůj zadek", "Jak mě krmíš", "Všechno dohromady"], c: 3 },
  { q: "Jak se jmenuje hlavní město Malty?", a: ["Sliema", "Valletta", "Mdina", "St. Julians"], c: 1 },
  { q: "Kterou písničku bychom si pustili v autě jako první?", a: ["Nějaký techno", "When The Beat Drops Out", "Ticho", "Lížu píču celý den"], c: 1 },
  { q: "Co bys mi nikdy neuvařil, protože to nesnáším?", a: ["Koprovku", "Knedlíky", "Fazole", "Rýži"], c: 2 },
  {
    q: "Který den v únoru se slaví Valentýn?",
    a: ["1. února", "10. února", "14. února", "24. února"],
    c: 2
  },
  { q: "Co přesně ti vyšlo po dešifrování té binární zprávy, kterou jsem ti poslala ráno?", a: ["Mám tě ráda", "Mám zprávu", "Chybíš mi", "Něco dostaneš"], c: 1 },
  { q: "Na které straně se na Maltě jezdí autem?", a: ["Vpravo", "Vlevo", "Podle nálady", "Středem"], c: 1 },
  { q: "Jak se jmenuje tradiční maltské slané pečivo s hráškem nebo sýrem?", a: ["Pizza", "Pastizzi", "Ftira", "Croissant"], c: 1 },
  { q: "Co patří ke znakům Malty, o čem jsem ti POVÍDALA?", a: ["Luzzu loďky", "Rytíři", "Delfíni", "Růžová hvězda"], c: 1 },
  { q: "Kolik kilometrů nás teď přibližně dělí vzdušnou čarou? (MALTA VS ČR)", a: ["500 km", "1000 km", "1600 km", "3000 km"], c: 2 },
  { q: "Který film se na Maltě NEnatáčel?", a: ["Gladiátor", "Hra o trůny", "Troja", "Harry Potter"], c: 3 },
  { q: "Koho z HP mám já nejradši?", a: ["Hermiona", "Snape", "Draco", "Ron"], c: 1 },
  { q: "Koho z HP máš nejradši ty?", a: ["Hermiona", "Snape", "Draco", "Ron"], c: 0 },
  { q: "Je podle tvého osobního názoru Hermiona hezčí než já?", a: ["Uvažoval jsem nad tím", "Možná", "Čistě hypoteticky v té době", "NE"], c: 3 },
  { q: "Kde jsme měli naše úplně první rande?", a: ["V kině", "U vody", "V restauraci", "Nikdy"], c: 1 },
  { q: "Jaké jídlo bych mohla jíst 24/7 a nikdy mě neomrzí?", a: ["Sushi", "Burger", "Svíčkovou", "Špagety"], c: 3 },
  { q: "Kno z nás dvou víc mluví ze spaní, prdí a smrdí?", a: ["Já", "Ty", "Oba", "Nikdo"], c: 0 },
  { q: "Co je náš komfort seriál?", a: ["Susedia", "Simpsonovi", "Výměna manželek", "HIMYM"], c: 2 },
  { q: "Co ti zmizlo/poškodilo se záhadně v pokoji, co tam nejsem?", a: ["Nějaká skvrna na mapě", "Něco z nástěnky", "Nějaké lego", "Něco ze stolku"], c: [0, 1, 2, 3]},
  { q: "Vtípek, nic to nezmizelo, teď ale potřebuješ štěstí (jedna správná haha)!", a: ["A", "B", "C", "D"], c: [0, 1, 2, 3]},
  { q: "Kdybych mohla teď hned být kdekoli na světě, kde bych byla?", a: ["V New Yorku", "U tebe", "Na pláži", "V posteli"], c: 1 },
  { q: "V jakém programovacím jazyce je napsaná logika tohoto kvízu?", a: ["Eduroam", "Python", "JavaScript", "C++"], c: 2 },
  { q: "Co se stane, když teď odpovíš špatně?", a: ["Nic", "Dostanu nápovědu", "RESET NA OTÁZKU č. 1", "Stránka se zavře"], c: 2 },
  { q: "Jaký je hlavní barvový kód (HEX) téhle růžové v pozadí?", a: ["#000000", "#ffffff", "#fff0f3", "#ff0000"], c: 2 },
  { q: "Čím jsem chtěla být jako malá holka?", a: ["Zpěvačkou", "Herečkou", "Popelářem", "Učitelkou"], c: 1 },
  { q: "Jaký je odmalička můj nejoblíbenější film", a: ["Příšerky SRO", "Madagascar", "Coco", "Duše"], c: 1 },
  { q: "Kno nepatří do emocí filmu V hlavě", a: ["Smutek", "Zlobivost", "Radost", "Vztek"], c: 1 },
  { q: "Co k jídlu bych si z tohohle nejvíc vybrala (navíc to miluju)?", a: ["Špenát", "KFC", "Rajskou polívku", "Žemlovku"], c: 2 },
  { q: "Na jaký hudební nástroj jsem se vždycky chtěla učit?", a: ["Flétna", "Klavír", "Kytara", "Bicí"], c: 1 },
  { q: "Co je moje nejranější vzpomínka z dětství?", a: ["Pád z kolečkových bruslí", "První den ve školce", "Dovolená u moře", "Rozhovor s babičkou"], c: 3 },
  { q: "Tipni si správnou odpověď?", a: ["JOKER 1", "JOKER 2", "JOKER 3", "JOKER 4"], c: [0, 1, 2, 3] },
  { q: "Kolik má moje mamka sester?", a: ["0", "1", "2", "3"], c: 2 },
  { q: "Kolik má můj táta bratrů?", a: ["0", "1", "2", "3"], c: 2 },
  { q: "Kolik měla moje babička sourozenců (myslím tu, co žije doma)", a: ["0", "1", "2", "3"], c: 0 },
  { q: "S kým jsem byla na Kanárech?", a: ["S Domčou", "S Veru", "S Šárkou", "Se všema"], c: 0 },
  { q: "Kdo za mnou přijel na Kypr", a: ["Veru", "Domča", "Veru i Domča spolu", "Nejdřív Domča, potom sama Veru"], c: 2 },
  { q: "Ve kterém roce jsem byla naposledy v Londýně", a: ["2020", "2021", "2022", "2023"], c: 2 },
  { q: "Už tě bolí prsty od klikání?", a: ["Jo bolí mě moc", "Už nemůžu dýchat", "Nezvládnu to", "Láska nebolí, pro tebe cokoliv"], c: 3 },
  { q: "Věříš si, že to dotáhneš až do konce bez chyby?", a: ["Ano", "Ne", "Ne", "Ne"], c: 0 },
  { q: "Co uděláš, až se konečně uvidíme?", a: ["Začnu plakat", "Obejmu tě", "Upusinkuju tě", "Půjdu kakat na záchod"], c: [0, 1, 2, 3]},
  { q: "Už jsi skoro u cíle, jsi načatý, co je na konci?", a: ["Ano!", "Ne", "Už mě to nebaví", "Spím"], c: 0 },
  { q: "Předposlední otázka: Jsi připraven na výsledek?", a: ["Ano, jsem AXXD", "Ano, jsem 7AZU", "Ano, jsem PPTX", "Ano, jsem AU9"], c: [0, 1, 2, 3] },
  { q: "Poslední otázka na Tebe: Miluješ mě?", a: ["Ano", "Rozhodně", "Nejvíc na světě", "Všechno výše uvedené"], c: [0, 1, 2, 3] }
];

let current = 0;

function render() {
  const qData = questions[current];
  document.getElementById('question').innerText = qData.q;
  document.getElementById('counter').innerText = `Otázka ${current + 1} z ${questions.length}`;
  document.getElementById('bar').style.width = `${(current / questions.length) * 100}%`;

  const container = document.getElementById('options');
  container.innerHTML = '';

  qData.a.forEach((opt, i) => {
    const b = document.createElement('button');
    b.className = 'btn';
    b.innerText = opt;
    b.onclick = () => {
      const isCorrect = Array.isArray(qData.c)
        ? qData.c.includes(i)
        : i === qData.c;

      if(isCorrect) {
        current++;
        if(current < questions.length) {
          render();
        } else {
          // --- START TIMERU PO POSLEDNÍ OTÁZCE ---
          startFinalCountdown();
        }
      } else {
        current = 0;
        document.body.classList.add('error-flash');
        setTimeout(() => {
          document.body.classList.remove('error-flash');
          render();
        }, 400);
      }
    };
    container.appendChild(b);
  });
}

function startFinalCountdown() {
  const container = document.getElementById('options');
  const questionEl = document.getElementById('question');
  const counterEl = document.getElementById('counter');

  container.innerHTML = '';
  counterEl.innerText = 'DOKONČENO! ❤️';
  questionEl.innerText = 'Gratuluji, lásko! Teď tě přesměruji do tracking systému...';

  let secondsLeft = 30;
  const timerDisplay = document.createElement('div');
  timerDisplay.style.fontSize = '3.5rem';
  timerDisplay.style.fontWeight = 'bold';
  timerDisplay.style.color = '#ff4d6d';
  timerDisplay.style.margin = '20px 0';
  timerDisplay.innerText = secondsLeft;
  container.appendChild(timerDisplay);

  const interval = setInterval(() => {
    secondsLeft--;
    timerDisplay.innerText = secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(interval);
      window.location.href = 'tracking.html';
    }
  }, 1000);
}

// Inicializace
render();

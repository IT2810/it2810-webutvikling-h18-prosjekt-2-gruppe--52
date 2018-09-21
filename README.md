Dokumentasjon, prosjekt 2, gruppe 2:

Funksjonalitet:
Programmet vårt er en SPA (Single Page Application), så alt av funksjonalitet er synlig på siden som åpnes når programmet kjører. På toppen finnes alle kategoriene som brukeren kan velge mellom. Det er en rad for tekstkategorier, en for bildekategorier og en for lydkategorier. Vi har brukt radioknapper slik at for hver gruppe så kan man hverken velge flere eller færre enn én kategori. Under dette vises fire faner, der hver av fanene tilsvarer én utstilling. Ved å trykke disse, kan man bla gjennom utstillingene. Den valgte fanen markeres hvit for å vise hvilken utstilling som er valgt.
Under dette er selve utstillingen som viser en tekst, et bilde og en lyd, basert på kategori- og utstillingsvalg.

React:
Alle delene av prosjektet vårt er bygget med React, og typisk med React er at prosjektet har en hierarkisk struktur. Dette gjelder også vårt prosjekt. Under vises et bilde av den overordnede strukturen:

                                                   App
                                            /       |       \
                                       Choices    Tabs     Display
                                       /            |          \ 
                                  Choice           Tab     /    |       \ 
                                                        Text    Image   Audio
  
På løv-nivå har vi laget komponentene Choice, Tab, Text, Image og Audio. Choice inneholder tre radioknapper, der hver radioknapp representerer én valgt kategori innenfor en spesifikk filtype. Tab inneholder en knapp som representerer én utsilling. Komponentene Text, Image og Audio inneholder kun teksten, bildet og lyden som skal brukes i den valgte utstillingen.

På nivået over har vi laget komponentene Choices, Tabs og Display. Choices rendrer tre Choice-komponenter (en for hver filtype). Denne kategorien håndterer dermed oversikt over hvilke kategorier som er valgt.  Tabs rendrer fire Tab-komponenter (en for hver utstilling) og holder dermed red på hvilken utstilling som er valgt. Display rendrer en Text-, en Image- og en Audio-komponent, og samler dermed alle medie-komponentene til en felles utstilling.

På rotnivå så er det kun App-komponenten. Denne komponenten håndterer det meste av logikk. App mottar informasjon fra Tabs og Choices om hvilke kategorier og hvilken utstilling som er valgt og lagrer dette i state-attributtene. Ved endringer i kategori og utstilling, sørger App for å vise frem den riktige informasjonen i Text-, Image- og Audio-komponentene.

Ajax:
Vi brukte ajax for å hente tekster og bilder. Det er flere forskjellige metoder å benytte seg av ajax på, men vi endte på å bruke Fetch API. Grunnene til dette er at det er innebygd i de fleste nettlesere, slik at vi ikke trenger å laste ned noe spesielt for å bruke det; det er populært, så det er enkelt å finne informasjon og dokumentasjon om API’et; og det er enkelt å bruke.
Ajax-kallene blir utført når brukeren interagerer med siden og App-komponenten mottar informasjon om at kategorier eller utstillingsnummer har endret seg. Det er funksjonene saveImage() og saveText(). saveText() henter ut riktig tekst basert på hvilken kategori og utsilling som er valgt. Resultatet blir lagret i state.textData-attributtet, slik at man slipper å utføre et ajax-kall neste gang samme tekst skal vises frem. Funksjonen saveImage() funker på samme måte. Det er bare små forskjeller på hvordan man håndterer og rendrer dataen som mottas.

Vi lagde også en funksjon componentDidMount() som gjør at man får se en utstilling med en gang siden lastes. Funksjonen componentDidMount() kjøres automatisk når komponenten initialiseres.  
For å hente lyd trengte vi ikke å bruke ajax på grunn av HTML-tagen <audio/>. Lydene blir også automatisk lagret i cache hos nettleser, så det var heller ikke nødvendig å lagre disse manuelt.

Github:
For å organisere koden har vi brukt Github. Vi har forsøkt å være konsekvente når det gjelder å knytte commits opp til issues. Vi kunne dog vært bedre på å bruke branches. I praksis så endte vi stort sett på at alle jobbet på samme branch og merget til slutt den med master. Vi burde kanskje være flinkere på å lage flere, mer spesifikke, brancher.

CSS:
Det viktigste for oss når det gjelder css, var at siden skulle bli responsiv. I index.html defineres det en viewport, som gjør at innholdet vil passe bedre til flere skjermer. Vi lagde selv svg-bildene og sørget for at disse skalerer bra ved å definere en viewBox. Da vil bildene skalere automatisk. Ellers så satt vi de fleste størrelser i prosent, som vil føre til at størrelsen hele tiden beregnes relativt til størrelse på vinduet. For at teksten til enhver tid skulle ha en passende størrelse, brukte vi media queries. Vi brukte dette til å gjøre teksten mindre og mindre etter hvert som skjermbredden reduseres. Dette var nødvendig siden vi ønsket at hver kategori-rad skulle kun ta opp en linje. Vi brukte flex-layout på kategoriene for at de skulle holde en god relativ posisjon til hverandre, men de andre tiltakene våre var effektive nok til at det ikke var nødvendig å implementere flytende layout utover dette.

Testing:
Testingen startet med at vi manuelt endret vindustørrelsen i Google Chrome og FireFox for å sjekke at alt skalerte som det skulle. Dette ble utført på en 24’’ pc-skjerm med oppløsning 1920x1080p. Vi utførte så samme type testing på en bærbar pc med skjermstørrelse 13’’ og oppløsning på 1366x768p. All funksjonalitet funket på forventet måte under disse testene. Etter dette ønsket vi å teste på faktiske mobile enheter for å sjekke at alt fungerte der også. Vi testet på et nettbrett på 10.2’’ og 1920x1080p oppløsning og en mobiltelefon på 5’’ med oppløsning på 1280x720p. Vi testet de mobilene i både stående og liggende skjermmodus. Nettsiden skalerte bra på begge enheter.

Det ble og gjort testing på bruk av nettverksdata i Google Chrome, ved å gå på "Network" tabben etter å innspisere nettsiden. Da undersøkte vi om tekst- og bilde-data faktisk ble lagret i staten til App, samt at mp3 filene ble cachet av nettleseren. Alt fungerte som det skulle, og den eneste dataen som blir sendt fra server til browser er en 304 respons som betyr at nettelseren trygt kan bruke den cahcede lyd-dataen.
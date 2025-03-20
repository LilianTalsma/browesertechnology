# browesertechnology
Browser Technology

Hoi welkom bij mijn readme!


<!-- Week 1! -->

Op donderdag heb ik vooral onderzoek gedaan naar de huisstijl van de NS. Ik heb belangrijke dingen verzameld die ik terug ga laten komen in mijn site. 
Dit zijn vooral dingen zoals: kleuren, error states en hoe ze lijstjes en forms hebben vormgegeven. 

Ook heb ik een snelle schets gemaakt van de vormgeving van mijn site.

<img src="images/schets.HEIC" alt="schets van de website">

Volgende week ga ik lekker doorprogrameren aan mijn website!

<!-- Week 2! -->

Deze week ben ik begonnen aan de stijling van mijn website, dit was makkelijker gezegd dan gedaan want ik vond het een goed idee om 3 mooie blokken te maken die totaal niet responsive waren.
Ook heb ik voor het eerst fieldsets gebruik. Ik heb deze week voornamelijk daar veel aan gewerkt en gekeken naar wat voor een verschillende types inputs je allemaal had. 

Ook had ik elk label heel leuk een for= gegeven die uiteindelijk extreem onnodig was en ervoor zorgde dat mijn labels niet goed zijn werk deden :(. Voorderest ben ik deze week vooral druk bezig geweest met de vragen op een goede manier in de html zetten en dus begonnen met het stijlen.

<!-- Week 3 -->

In de afgelopen dagen heb ik mijn css weer he le maal omgegooid. Ik vond de stijlen niet plesant om naar te kijken dus besloot ik dat eerst even aan te pakken. Als eerste heb ik de 3 niet responsive blokken vervangen voor 1 overzichtelijk blok met een button waar je meer informatie door krijgt. (Wou graag een popover hiervoor gebruiken maar had daar helaas geen tijd voor.) 
Ook durfde ik mij eindelijk te wagen aan de error state voor als iemand een required veld niet zou invullen. Dit ging in eerste instantie niet helemaal goed maar naar wat rondvragen in de klas was de oplossing vrij simpel (ik had alleen invalid inplaats van user-invalid gebruikt.). Ook heb ik uitklappende vragen bij de vragen gemaakt. Dit heb ik gedaan door ze in de html hidden te maken en dan met de css en display:block; weer te laten zien. Alleen kreeg ik al snel feedback ban Vasillis dat dit niet handig was voor gebruikers met een device die geen css ondersteunen, die zien dan namelijk de hele vraag niet. Hier ga ik later nog naar kijken. 
Voorderest heb ik met Jeremy gekeken naar javaScript en met Krijn een basic workshopje javaScript gevolgt. Jeremy vond het zielig voor me omdat ik het waarschijnlijk niet ging snappen maar ik denk daar anders over.
Ik probeerde mijn nieuwe kennis toe te passen en de localStorage aan de praat te krijgen alleen werkte dit totaal niet. Volgende week ga ik hier maar meer werk in stoppen.

<!-- Week 4 -->

Deze week hadden we nog 1 dag les. Als eerste kreeg ik op mijn kop van Krijn omdat ik dingen aan het kopieren van waar ik helemaal niks van begreep (en het werkte ook niet). We zijn dus even samen gaan zitten en hebben samen een stukje code geschreven wat ik ongeveer wel begrijp en waardoor de data wel in de localStorage bleef als ik de pagina refreshde, Yay! Ik heb deze code zelf nog een keer getypt zodat ik het meer begreep.Ook heb ik geleerd wat if (localStorage in Window) inhoud. Dit werkt ongeveer hetzelfde als @support in css en zorgt er dus voor dat als de browser de functie niet ondersteund hij hem dan negeerd en de rest wel blijft werken. Ook heb ik de uitklappende vragen zo gemaakt dat ze nogsteeds te zien zijn als de browser css niet ondersteund. 

/* :not:has selector gebruikt want ik had eerst alleen een :has checked en dan display block en dan in de html data-hidden gebruikt
alleen als de browser geen css ondersteund kan de gebruiker de hele hidden form niet zien. Dus ik heb er nu voor gezorgd dat hij altijd
visible is als css niet werkt maar dat hij met css is verborgen en als de gebruiker niet een input checked van radio button ja heb
de display none (dus soort van hidden) is. */

Dit is de mooie uitleg die ik hiervoor had getypt. Ik had dit ook nog nooit zo gebruikt dus dat heb ik ook geleerd deze week.
Als laatste heb ik op de invalid en valid velden een ::after gezet waardoor ik met font-awesome makkelijk een icoontje erbij kon zetten als het veld wel of niet goed was. Ik had dit al aangegeven met kleur alleen mensen die kleurenblind zijn hebben vaak moeite met het verschil zien tussen groen en rood. Hiervoor heb ik bij groen dus valid een vinkje gezet en bij invalid een kruisje.

Ik heb in deze weken echt heel veel geleerd over alles van fieldsets tot javaScript en localStorage. Ook heb ik kennis gemaakt met de :has selector die ik nog vaak ga gebruiken denk ik.
Uiteindelijk ben ik redelijk trots op wat ik heb gemaakt, en dan vooral op alle nieuwe dingen (voor mij) die ik erin heb verwerkt.
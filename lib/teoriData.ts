export interface TeoriAvsnitt {
  id: string
  title: string
  body: string
}

export interface TeoriKapitel {
  id: string
  number: number
  title: string
  intro: string
  avsnitt: TeoriAvsnitt[]
}

export const teoriKapitel: TeoriKapitel[] = [
  {
    id: 'inledning',
    number: 1,
    title: 'Inledning',
    intro: 'I detta kapitel ges en bred överblick av hur ekosystemen fungerar och hur viltpopulationerna utvecklas. Vi behandlar de naturliga processer som styr viltets förekomst och reproduktion, samt de olika livsmiljöer som utgör grunden för ett hälsosamt viltbestånd. Jägaren måste förstå dessa samband för att kunna förvalta viltresurserna på ett ansvarsfullt sätt.',
    avsnitt: [
      {
        id: 'ekosystem',
        title: 'Ekosystem',
        body: 'Ett ekosystem utgörs av alla levande organismer i en bestämd miljö tillsammans med den fysiska miljön de lever i. Allt hänger samman i ett nät av ömsesidiga beroenden. Växtriket bildar grunden genom att producera näring från sol och mineraler i jorden, de växthöljare tjänar till föda för växtätarna, och dessa igen blir näring för rovdjuren. När djuren dör sönderdelas de och näringsämnen återvänder till jorden. Denna cykel pågår helt oberoende av människans vilja, men vi kan påverka den genom vårt agerande.\n\nI Sverige finns många olika ekosystem, från höga fjäll till låga sjöar. Varitfrån ekosystem är den lönar sig att studera är inte bara för att förstå viltet, utan för att förstå vår egen roll i naturen. En jägare måste kunna läsa landskapet och se hur växter, djur och miljö samverkar. Det är denna förståelse som gör att vi kan jaga hållbart utan att skada det ekosystem vi är beroende av.'
      },
      {
        id: 'viltpopulationer',
        title: 'Viltpopulationer',
        body: 'En viltpopulation är alla individer av samma art inom ett visst område. En populations storlek bestäms av födelse- och dödstal, samt migration in och ut från området. För en givit miljö finns en så kallad miljöbärande kapacitet – den största population som miljön kan upprätthålla långsiktigt. Denna gräns sätts av tillgången på föda, vatten, boplatser och andra faktorer.\n\nOm en population växer snabbare än miljön kan bära, kommer hungriga och sjuka djur att föda mindre eller inte överleva. Om populationen minskas genom sjukdom eller jakt, kan den växa snabbt igen genom att fler individer får möjlighet att få ungar. En erfaren jägare förstår dessa mekanismer och anpassar jakten därefter. Vi jagar inte för att eliminera viltet, utan för att hålla populationen inom ett hållbart omfång som är bra för både viltbeståndet och för ekosystemet.'
      },
      {
        id: 'reproduktionstakt',
        title: 'Reproduktionstakt',
        body: 'Olika viltarter har mycket olika reproduktionstakt. En älgko kan få en kalv per år från två års ålder, medan ett vildsvin kan få två kullar per år med upp till tio grisar per kull. Fåglar varierar enormt – ett rapphöns kan få omkring 15 ungar på sommaren, medan en skogsduva bara får två ungduvor per år. Denna variation är inte slumpmässig utan är anpassad till varje arts levnadsvillkor.\n\nEn art med kort livslängd och många ungar måste föröka sig snabbt för att populationen inte ska försvinna. En art som lever länge och får få ungar förlitar sig istället på att varje individ lever många år och föder en liten mängd ungar under sitt liv. För jägaren är denna kunskap viktig när man avgör hur mycket man kan jaga utan att skada beståndet. En viltart som förökar sig snabbt kan ofta tåla ett större jaktuttag än en art som förökar sig långsamt.'
      },
      {
        id: 'biotoper',
        title: 'Biotoper',
        body: 'En biotop är en viss typ av livsmiljö som är lämplig för bestämda arter. En säv eller ett träsk är en biotop för vadare och uthungriga arter, en gran- eller tall-skog är en biotop för tjädrar och rådjur, och ett öppet fält är en biotop för rapphöns och fältödlor. Olika biotoper understödjer olika arter och olika tätheter av djur.\n\nEn valtökt landskapsmosaik med många olika biotoper nära varandra är ideal för en rik fauna. Det behövs både skog, sjöar, ängar, småbiotoper och olika stadier av skogsväxt. En nygördad gran-monokultur med samma ålder på träden är dålig för många arter. Moderna skogsbruk skapar ofta enhetslandskap som minskar artvatieteten. En jägare som vill ha ett bra viltbestånd kan göra mycket för att skapa bättre biotoper – genom att bevara eller återskapa olika miljötyper kan man stödja ett mycket rikare viltliv än det mest moderna skogsbruket naturligt ger.'
      },
      {
        id: 'jagaren-som-forvaltare',
        title: 'Jägaren som förvaltare',
        body: 'Jägaren är inte bara en som tar djur ur naturen – en god jägare är också förvaltare av viltresurserna. Detta betyder att vi måste tänka långsiktigt om viltbestånden och ta ansvar för att hålla dem friska och uthålliga. Vi måste kunna läsa signalerna från naturen: när är ett bestånd för stort, när är det för litet, när är det en sjuk djur vi behöver ta hand om?\n\nFörvaltarskapet innebär också att vi bidrar till att upprätthålla goda biotoper. Det kan handla om att bevara gamla träd, skapa dammar, hålla vägar öppna eller på andra sätt arbeta för en bättre miljö för viltets skull. En traditionell säsongsväxlig jakt som följer naturliga populationsfluktuationer är mycket mer hållbar än att försöka jaga ett konstant antal varje år oavsett förutsättningar. En god jägare är en som skjuter når det behövs, inte bara därför att det är jaktperiod.'
      }
    ]
  },
  {
    id: 'jagaren',
    number: 2,
    title: 'Jägaren',
    intro: 'Att vara jägare innebär mycket mer än att ha ett jägarexamen och ett vapen. Det handlar om att ta på sig ett ansvar mot naturen, mot djuren vi jagar, mot andra människor och mot framtiden. Vi behandlar här vad som förväntas av en jägare, både juridiskt, etiskt och moralskt, och hur vi kan utöva jakten på ett sätt som gagnar både viltbeståndet och samhället.',
    avsnitt: [
      {
        id: 'att-bli-jagare',
        title: 'Att bli jägare',
        body: 'Vägen till att bli jägare börjar med en insikt: att vi vill lära oss att förstå naturen och att ta ansvar för denna förståelse. Det är inte bara om att skjuta – långt ifrån det. Det handlar om att bli en del av jakttraditioner som sträcker sig hundra år tillbaka, om att förstå viltet, växtvärlden, vädret och landskapen.\n\nOm du vill bli jägare måste du först ta jägarexamen. Detta är en kunskapstest som säkerställer att du förstår viltbiologi, växter, vapen, lagar och etik. Efter examen måste du få tillgång till jaktmark och ofta behöver du bli medlem i en jaktförening eller arbeta tillsammans med erfarna jägare. Du behöver också ett vapenköp, vanligtvis med ett hagelgevär eller ett kulgevär. Men ännu viktigare än dokumenten är att du utvecklar en respekt för jakten och för den natur du verkar i. En riktig jägarkarriär är ett livslångt lärande.'
      },
      {
        id: 'jagarens-roll',
        title: 'Jägarens roll',
        body: 'En jägare har flera roller samtidigt. Vi är naturvårdare som håller viltbestånden hälsosama genom att hålla populationerna på en lämplig nivå. Vi är ekologer som måste förstå samspelet mellan olika arter och miljöer. Vi är skyldigheter mot samhället att säkra att jakt bedrivs på ett lagligt och etiskt sätt.\n\nVi är också ambassadörer för jakttraditionen, och vi bär ansvaret att visa att jakten är en nödvändig och värdefull verksamhet för både viltforvaltning och naturvård. I moderna tider är det allt viktigare att jägare kan förklara varför vi jagar, varför det är bra för miljön att ha en välskött popolazione av vildt. En jägare måste kunna stå för sina handlingar, både när de är rätta och när vi gör misstag. Vi måste också vara beredda att erkänna när vi inte borde ha skjutit, eller när vi borde ha gjort något annorlunda.'
      },
      {
        id: 'viltvard',
        title: 'Viltvård',
        body: 'Viltvård är allt vi gör för att förbättra förutsättningarna för viltet – både genom direkt åtgärd och genom att inte skada dem. Det kan handla om att sätta upp saltstenar för älgar, att plantera bär-buskar för orrar, att bevara gamla stubbar för insekter och småfåglar, eller att lämna död ved på marken för att underlätta för nybörjare djur.\n\nDet handlar också om att skydda viltets fristad under kritiska tider – att inte störa under brunstiden eller vid slutet av graviditeten, att hålla hunden under kontroll så den inte skrämmer djuren i onödan. Viltvården kan också handla om att ta hand om sjuka eller skadade djur på ett humant sätt. En erfaren jägare observerar viltet noggrant och försöker förstå vad det behöver. Om man ser att älgstammen är för stor och mager, eller att rapphönsen inte finns längre, då vet man att det är dags för åtgärd – antingen genom att ändra jakten eller genom att förbättra livsmiljöerna.'
      },
      {
        id: 'jagarmassigt-uppträdande',
        title: 'Jägarmässigt uppträdande',
        body: 'Att uppträda jägarmässigt betyder att följa en uppsättning outskrivna regler som har utvecklats över många generationer. Det handlar om respekt – respekt för viltet vi jagar, respekt för andra jägare, respekt för markägare och för människor som inte jagar. Det betyder att man är lugn och professionell, att man säger vad man gör och gör vad man sagt.\n\nEn jägare som uppträder jägarmässigt är en som aldrig skjuter på vildt som man inte är helt säker på att kunna skjuta rent, som aldrig lämnar skadskjutna djur, som respekterar stängda jaktmarker och andra jägares territorium. Det betyder också att man är ärlig om hur många djur man tagit, att man inte försöker fuska eller ta för många. En jägare som uppträder jägarmässigt är också en som kan acceptera kritik från erfarna jägare och från annat folk, som är beredd att lära sig och att erkänna när man gör fel. Denna hållning är det som avgör skillnaden mellan en som har ett jägarexamen och en som verkligen är jägare.'
      },
      {
        id: 'lagar-forordningar-foreskrifter',
        title: 'Lagar, förordningar och föreskrifter',
        body: 'Jakten i Sverige regleras av flera lagar. Den viktigaste är Jaktlagen, som säger när man får jaga, vad man får jaga och hur man får jaga. Det finns också förordningar från regering som specificerar olika detaljer, och föreskrifter från Naturvårdsverket och andra myndigheter. Dessa lagar är inte bara godtyckliga restriktioner – de finns för att skydda viltbestånden och för att säkra att jakten kan bedrivs på ett ordnat sätt.\n\nDet är helt nödvändigt att en jägare läser och förstår dessa lagar. En del av jägarexamen handlar just om detta. Du behöver veta när älgjakt är tillåten, hur många älgar du får skjuta, vilka arter som är helt skyddade och vilka som kan jagas. Du behöver veta om förbudet mot att använda vissa vapen eller metoder. Du behöver också förstå att lagarnas syfte är det gemensamma bästa, och att även om du ibland kanske tycker en regel är dålig, så måste du följa den. Som jägare tar du på dig ansvaret att respektera och följa dessa regler.'
      }
    ]
  },
  {
    id: 'jakten',
    number: 3,
    title: 'Jakten',
    intro: 'Detta kapitel ger en praktisk överblick av hur jakten bedrivs i Sverige. Vi behandlar dess historia, reglerna som styr den moderna jakten, den utrustning som krävs, säkerhet, olika jaktformter och det arbete som krävs för att se till att viltet tillvaratagas på ett etiskt och respektfullt sätt.',
    avsnitt: [
      {
        id: 'historia',
        title: 'Historia',
        body: 'Jakten är en av människans äldsta aktiviteter, och i Sverige har den bedrivits sedan människorna först kom hit efter istiden. Under medeltiden blev jakten en rättighet för adeln, och de vanliga folket fick bara jaga om de hade tillåtelse. Det var under denna tid som många av våra moderna jakttraditoner började ta form – det fanns redan då regler för vilken tid på året man fick jaga olika arter, och redan då försökte man hålla viltbestånden hälsosamma.\n\nNär jaktbössan uppfanns i slutet av 1500-talet förändrades jakten helt. Det blev möjligt att jaga från längre avstånd och på ett mer effektivt sätt. Under 1700- och 1800-talen utvecklades jakten till mer av en sport för de rika, och det uppstod en stark jägarkultur med egna traditioner och etiska koder. I modern tid har jakten demokratiserats – både genom jägarexamen kan vanliga människor få tillgång till denna aktivitet. Idag är jakten en viktig del av Sveriges viltförvaltning, och de jägare vi behöver omfattar miljonärer, arbetare, bönder och stadsbor.'
      },
      {
        id: 'allemansratten',
        title: 'Allemansrätten',
        body: 'Allemansrätten är en ursvensk rätt som tillåter alla att röra sig fritt i naturen, att plocka bär och svamp, och under vissa förutsättningar att jaga. Det betyder att du kan gå genom en skog eller över en äng även om du inte äger den. Men allemansrätten är inte en rättighet att göra vad som helst – det är en rätt som följs av ansvar.\n\nNär det gäller jakt är allemansrätten begränsad. Du får inte jaga på någons mark utan tillåtelse, och det spelar ingen roll om det är en liten privat äng eller en stora skogsmark. Du behöver ett jaktkort och du behöver tillåtelse från markägaren. Denna tillåtelse kan man få genom att hyra jaktmarker, genom att bli medlem i en jaktförening, eller genom att arbeta tillsammans med en markägare. Allemansrätten är en stor del av det som gör Sverige till ett fantastiskt jaktland, men utan denna respekt för markägarnas rättigheter skulle systemet inte fungera.'
      },
      {
        id: 'jaktregler',
        title: 'Jaktregler',
        body: 'Sverige har väl utvecklade jaktregler som anger exakt vilka arter man får jaga, när man får jaga dem, hur många man får ta och hur man får jaga. Älgar kan jagas under hösten från omkring september till slutet av oktober eller början av november, beroende på region. Dovhjort och rådjur har sina egna perioder, vildsvin kan jagas större delen av året, och olika fåglar har sina egna perioder från hösten till våren.\n\nReglerna är utformade utifrån vetenskaplig kunskap om viltbeståndets storlek och reproduktionstakt. Om ett älgbestånd är stort och tar mycket skogsväxt, tillåts en större älgjakt. Om ett rapphönsbestånd är svagt efter en dålig vår, begränsas jaktkvoten. Det är denna flexibilitet som gör det möjligt att jaga hållbart. En jägare måste förstå både bokstaven och andan i dessa regler – reglerna finns inte för att vara svåra, de finns för att värna de viltbestånd som vi alla är beroende av.'
      },
      {
        id: 'utrustning',
        title: 'Utrustning',
        body: 'En jägare behöver rätt utrustning för att kunna bedriva jakten på ett säkert och effektivt sätt. Det viktigaste är naturligtvis vapnet – ett hagelgevär eller ett kulgevär av lämplig kaliber för det vildt man ska jaga. Du behöver också ammunition av rätt typ, en väska för att bära patroner, ett kniv för att bearbeta viltet, och gott om kläder för att stå ut i vind och väder.\n\nMer eller mindre viktigt är bra skor med ett bra grepp, binokulär för att kunna se långt bort och identifiera djur på säkert avstånd, en kartbok eller GPS för att veta var du är, och ofta en hund som kan söka efter viltet. Många jägare använder också små tält eller skjul för att kunna sitta stilla och hålla sig torr. Det viktiga är att all utrustning är av god kvalitet och väl underhållen. En dålig utrustning kan leda till att du missar ett skott eller att du får en olycka. Investera i bra utrustning – det lönar sig i längden.'
      },
      {
        id: 'sakerhet',
        title: 'Säkerhet',
        body: 'Säkerhet är det viktigaste när man håller på med jakten. Ett gevär eller en hagelbössa är ett vapen som kan skada eller döda. Varje gång du hanterar ett vapen måste du anta att det är laddat och farligt. Du ska aldrig sikta på något du inte är helt säker på att du vill skjuta, och du ska aldrig avlossa en skada utan att veta vad som är bakom målet. Du ska alltid hålla vapnet så att pipen pekar på ett sätt som gör att om det går av använder bara skulle skada marken eller något fartyg.\n\nDu måste också alltid bära en ljus väst eller mössa så att andra jägare kan se dig. Du måste veta vilka andra jägare som är i området, så att du inte av misstag skjuter på en person. Du ska aldrig jaga när det blir mörkt, och du ska aldrig jaga när du är trött eller har druckit alkohol. Du måste också veta hur du beter dig när du träffar andra människor – ge väl och ta emot varningar. En jägares högsta prioritet är alltid säkerhet, innan det roliga, innan det givna viltandet, innan allt annat.'
      },
      {
        id: 'jaktmarker',
        title: 'Jaktmarker',
        body: 'Jaktmarkerna är det område där du får jaga. Det kan vara privat mark som du har hyrt, mark som tillhör en jaktförening, eller mark som du har tillåtelse att jaga från en markägare. I Sverige är det mycket vanligt att människor älskar sina jaktmarker och håller dem från generation till generation – en god jaktkult skickas från far till son.\n\nDet är viktigt att respektera jaktmarkerna och markägaren. Du bör aldrig jaga någon annanstans mark utan tillåtelse, även om det finns vildt där. Du bör hålla kontakt med markägaren och informera honom eller henne om vad du skjuter. Du bör också respektera andra jägares territoria och inte jaga där du vet att andra redan jagar. Om du märker att någon jagar på din mark utan tillåtelse, ska du anmäla det. Många jaktmarkers värde beror mycket på att de sköts långsiktigt och respektfullt.'
      },
      {
        id: 'pa-passet',
        title: 'På passet',
        body: 'Ett jaktkort är dokumentet som tillåter dig att jaga. Du behöver ett giltigt jaktkort för att kunna skjuta vildt i Sverige. Jaktkortet utfärdas av kommunen efter att du har tagit jägarexamen och betalat en avgift. Kortet måste förnyas varje år. Det är också ett jaktkort du måste ha med dig när du jagar – kontrollen kan komma när som helst.\n\nJaktkortet är också en viktoria du betalar för att kunna bedriva jakten. En del av avgiften går till viltforvaltning, och en del går till ersättning för markägare. Det är en rimlig ordning – vi som jagar får använda landets viltbestånd och måste därför bidra ekonomiskt till deras vård. Håll ditt jaktkort försäkrat och läs igenom alla föreskrifter som hör till det. Olika jaktmärken eller säkerhetsinitiativ kan också krävas beroende på region.'
      },
      {
        id: 'jaktformer',
        title: 'Jaktformer',
        body: 'Det finns många olika sätt att jaga vildt. Traditionell driven jakt innebär att flera jägare, ofta tillsammans med hundar, driver viltet från ett område mot andra jägare som står och väntar. Denna form kräver god samordning och är ofta mycket effektiv för att ta många älgar eller vildsvin på kort tid. Pirande jakt handlar om att försöka smyga upp på viltet genom att vandra långsamt genom skogen, ofta med binokulär för att se långt bort.\n\nVäxande eller skottjakt innebär att man sitter på ett fast ställe och väntar på att viltet ska komma förbi. Det kan vara från ett träd, från marken eller från ett litet skjul. Detta kräver tålamod men kan vara mycket givande. Jakt med häst eller ATV är också vanligt i vissa områden. Många moderna jägargrupper blandar olika former – någon pirande, någon växande, någon med hundar. Valet av jaktform beror på viltarten, terrängen, tiden på året och vilka resurser man har tillgängliga.'
      },
      {
        id: 'skydds-och-licensjakt',
        title: 'Skydds- och licensjakt',
        body: 'Skyddsjakt är jakt som utförs för att skydda människor, egendom eller miljö från skador från viltet. Om en älg eller ett vildsvin ligger och förstör en väg eller en ladugård, eller om en älg orsakar många trafikolyckor, kan man få tillåtelse att skjuta den för att förhindra ytterligare skador. Licensjakt är speciell jakt som beviljas under specifika omständigheter när normala jaktregler inte räcker.\n\nBåda dessa former av jakt måste dokumenteras noggrant och rapporteras till myndigheterna. Du behöver en särskild tillåtelse för att bedriva skydds- eller licensjakt, och du måste kunna redovisa anledningen till att jakt var nödvändig. Dessa former av jakt är mycket viktiga för att hantera konflikter mellan viltet och människan, men de måste genomföras på ett väl dokumenterat sätt för att inte misbrukas.'
      },
      {
        id: 'vid-skadeskjutning',
        title: 'Vid skadeskjutning',
        body: 'En skadeskjutning är när du skjuter på vildt men inte dödar det direkt – du träffar det på ett sätt som skador utan att döda. Detta är något som varje jägare kan behöva möta någon gång, och det är mycket viktigt att kunna hantera det på rätt sätt. En skadeskjuten älg kan springa långt innan den dör, en sårad hare kan ligga länge innan den succumbar.\n\nVid en skadeskjutning måste du omedelbar göra allt du kan för att hitta och döda djuret så snart som möjligt för att minska dess lidande. Du måste söka efter viltet, ofta med hjälp av en hund. Du måste också rapportera skadeskjutningen enligt regler för din region. En skadeskjutning är inte bara ett misslyckande – det är ett tecken på att du behöver öva mer på att sikta, att välja rätt läge, och att skjuta endast när du är helt säker på att kunna göra ett rent skott.'
      },
      {
        id: 'eftersok',
        title: 'Eftersök',
        body: 'Eftersök är systemet för att leta efter skadskjutet vildt. Om du märker att du har skjutit på ett djur men det inte verkar döda direkt, måste du omedelbar börja att söka efter det. Du kan göra detta själv genom att följa blodspår, eller du kan få hjälp från en eftersökshund och dess förare, vilken är tränad för att söka efter skadskjutet vildt.\n\nEftersök kan ta många timmar och kan kräva att du söker över stora områden. Det är viktigt att du är metodisk och att du markerar vägen så att du inte förloras. Du måste också kunna identifiera vilken riktning viltet är gångit baserat på spår, blod och andra tecken. En god eftersökare har mycket kunskap om hur djur beter sig när de är skadade. Eftersök är ett av de viktigaste delarna av modernjakt, för det är det som säkerställer att vi möjligför minimera lidande.'
      },
      {
        id: 'tillvaratagande-av-viltet',
        title: 'Tillvaratagande av viltet',
        body: 'När du har skjutit ett vildt är det viktigt att ta hand om kroppen på rätt sätt för att slösa på slösar så lite mat som möjligt. En älg kan väga flera hundra kilo, och mycket av denna kan användas för mat. Du måste veta hur man bearbetar viltet – hur man tar ut inälvor, hur man skilje köttpartierna, hur man lagrar köttet korrekt så det inte förstörs.\n\nDet är också viktigt att respektera djuret även efter att det är dött. Du bör arbeta snabbt och effektivt för att bearbeta viltet innan det blir för varmt eller innan det förstörs av insekter. Många gamla jägare har ritualer kring bearbetningen – ett sätt att visa respekt för det vildt som offrat sitt liv för att ge oss mat. Byten av viltet, om det behövs, bör göras snabbt och på lämpligt ställe. All möjlig mat bör användas, och vad som inte kan ätas bör lämnas för rovdjur eller bearbetas på lämpligt sätt.'
      }
    ]
  },
  {
    id: 'jakthunden',
    number: 4,
    title: 'Jakthunden',
    intro: 'Jakthunden är för många jägare en oumbärlig följeslagare och en viktig del av jakten. En väl tränad och väl skött hund kan göra jakten mycket effektivare och att mer givande. Vi behandlar här de olika jakthumsraser och deras särskilda användningsområden, såväl som lagar och etikiska krav för hundhållning.',
    avsnitt: [
      {
        id: 'lagar-och-etikregler',
        title: 'Lagar och etikregler för jakthundar',
        body: 'En jakthund måste vara väl tränad och väl skött för att kunna bedriva sin uppgift utan att orsaka skador på viltet eller på omgivningen. Det finns regler för hur hundar måste behandlas, hur de ska matas, hur de ska bo och tränas. En hund som används för jakt får inte behandlas grymalt eller överansträngas. Du måste se till att hunden har vatten tillgängligt, att den inte överansträngas i värme, och att den får lämplig vila.\n\nEn jakthund måste också kunna styras genom ljud eller signal från sin förare. En hund som springer omkring utan kontroll är inte bara ineffektiv för jakten – det är också farligt för viltet och för andra människor. Hunden kan skrämma viltet, det kan jaga viltet på ett sätt som orsakar stress och skador, och det kan själv få skada. En god jägare är en som har full kontroll över sin hund, som kan få den att komma när som helst, och som aldrig lägger en hund utan att veta att den kan styras.'
      },
      {
        id: 'hundpejl',
        title: 'Hundpejl',
        body: 'En hundpejl är en radioapparat som sätts på hunden för att föraren ska kunna följa hundens rörelser på avstånd. Det är särskilt viktigt för hundar som söker över stora områden, som hundar som letar efter älgar eller vildsvin. Hundpejlen möjliggör att föraren kan höra var hunden är och vad hunden gör, även om föraren inte kan se hunden.\n\nMod modern teknik kan hundpejlen visa mycket information – inte bara var hunden är, utan också hur snabbt den rör sig, om den stannar, om det är mycket vila eller mycket aktivitet. En erfaren förare kan läsa av dessa signaler och förstå vad hunden gör – om den letar, om den har hittat något vildt, eller om den bara promenerar omkring. Hundpejlen är ett sätt att upprätthålla kontrollen över hunden även över större avstånd.'
      },
      {
        id: 'drivande-hundar',
        title: 'Drivande hundar',
        body: 'Drivande hundar används för att driva viltet från sitt gömställe mot jägare som står vakt. En drivande hund måste vara modlös, energisk och långlivad. Den måste kunna springa långa distanser utan att bli trött, och den måste kunna sträva efter viltet även när det blir svårt. Drivande hundar används ofta för älgjakt, vildsvin och mindre hjortdjur.\n\nEn bra drivande hund ska driva viltet framåt på ett målmedvetet sätt, inte bara springa omkring slumpmässigt. Hunden måste kunna lämna lugna viltstränder och fokusera på det vildt som föraren vill ha. Drivande hundar kan lära sig mycket genom erfarenhet, och många gamla drivande hundar är mycket värdefulla för sin kunskap och erfarenhet. Blandningarav olika drivande hundraser kan ofta prestera mycket väl.'
      },
      {
        id: 'alghundar',
        title: 'Älghundar',
        body: 'Älghunden är särskilt tränad för älgjakt. En älghund måste kunna hitta älgar genom att vädra, ofta över mycket stora områden, och sedan när den hittar en älg, måste den hålla älgen på plats genom att skälla och gå omkring älgen, tills jägaren kan komma fram. En älghund är ofta ganska stor och kraftig, med ett tjockt, varmt pälsverk.\n\nAlghunadraser som Elkhound eller Karelian Bear Dog är särskilt välkända för denna uppgift. En älghund måste ha mycket uthållighet, för älgjakt kan innebära att söka timmar innan en älg hittas. Älghunden måste också kunna stå upp mot älgen – en älg kan vara mycket aggressiv när den angripas av en hund, och älghunden måste kunna undvika slag från älgens ben och horn. En väl tränad älghund är en av jägarens mest värdefulla tillgångar under älgjaktssäsongen.'
      },
      {
        id: 'skallande-fagelhundar',
        title: 'Skallande fågelhundar',
        body: 'Skallande fågelhundar används för att hitta fåglar, särskilt tejper och tjäder. Dessa hundar måste kunna vädra efter fåglar och när de hittar en fågel, måste de skälla för att väcka upp fågeln eller för att få det att springa så att jägaren kan få ett skott. Skallande fågelhundar är ofta mindre än drivande hundar, men de måste vara energiska och ha ett känsligt nos.\n\nRasor som Spitz-hundar eller vissa terrier-blandningar är ofta bra skallande fågelhundar. De måste kunna arbeta nära jägaren och måste kunna styras för att söka på rätt områden. En skallande fågelhund kan mycket väl complementera en traditionell drivning på större jaktmarker, och de är ofta särskilt användbara på små, täta områden där större hundar inte är praktiska.'
      },
      {
        id: 'staende-fagelhundar',
        title: 'Stånde fågelhundar',
        body: 'Stånde fågelhundar är tränade för att stanna helt när de hittar en fågel, och sedan väcka upp den eller lura den när jägaren är klar att skjuta. Dessa hundar måste ha ett mycket känsligt nos och mycket impulskontroll – de måste kunna stå helt stilla även när de känner att det finns en fågel mycket nära. Stånde fågelhundar användes traditionellt mycket, och de är ännu mycket värdefulla för vissa typer av fågeljakt.\n\nEnligtSetter och Pointer hundar är klassiska stånde fågelhundar. En bra stånde fågelhund kan arbeta långt bort från jägaren och kan indicera var en fågel ligger genom sin ställning och sin blick. Utbildning av en stånde fågelhund kräver mycket tålamod och kunskap, men när hunden är väl tränad kan den vara en stor tillgång för fågeljakt.'
      },
      {
        id: 'kortdrivare-och-stothundar',
        title: 'Kortdrivare och stöthundar',
        body: 'Kortdrivare och stöthundar är hundar som arbetar på mellanstort avstånd från jägaren. En kortdrivare söker över ett begränsat område och rapporterar regelbundet tillbaka till jägaren. En stöthund arbetar ofta framför jägaren och stöttar upp viltet från sitt gömställe innan det springar långt bort. Dessa hundar måste ha väl utbildad impulskontroll och måste kunna höra och gevägen på befallningar från långt bort.\n\nKortdrivare och stöthundar är ofta mycket användbara för praktisk jakt eftersom de arbetar på ett avstånd som gör det möjligt för jägaren att följa med och att vara beredd att skjuta när viltet visas. Dessa hundar kan ofta tränas från andra hundraser genom att arbeta med dem regelbundet och genom att belöna lämpligt beteende.'
      },
      {
        id: 'stotande-hundar',
        title: 'Stötande hundar',
        body: 'Stötande hundar är hundar som stötar fåglar – det vill säga som får fåglar att flyga upp från sin gömsälle. En stötande hund är ofta en hundracesom Spitz eller liknande. Hunden måste kunna hitta fåglar genom doftning, och den måste kunna orsaka att fågeln flyger upp på ett kontrollerat sätt.\n\nSörhunden är ofta närmare den traditionella jägarens idealbild, en hund som är både effektiv och som visar gott jaktsäll och drivande över sina mål. En stötande hund kräver inte samma intensiva utbildning som en stånde fågelhund, men den måste fortfarande tränas för att kunna styras och för att kunna arbetar på lämpligt avstånd.'
      },
      {
        id: 'vildsvinshundar',
        title: 'Vildsvinshundar',
        body: 'Vildsvinshundar är tränade för vildsvinsjakt. En vildsvinshund måste kunna hitta vildsvin genom att vädra, och när den hittar vildsvin, måste den få vildsvinen att stanna kvar genom att skälla och genom aggressiv körning. En vildsvinshund måste vara modlös och kraftfull, för ett vildsvin kan vara mycket farligt – vildsvinet kan såra eller till och med döda en hund.\n\nRasor som Dachshund, Terrier eller vissa andra modlösa hundar används ofta för vildsvinsjakt. En vildsvinshund måste ha mycket kunskap om hur man handskas med vildsvin – hur man undviker dessa farliga hugtänder, hur man styr vildsvinen på ett sätt som gagnar jägaren. Utbildning av en vildsvinshund kräver mycket kunskap och erfarenhet från en erfaren hundförare.'
      },
      {
        id: 'grythundar',
        title: 'Grythundar',
        body: 'Grythundar är små hundar som används för att jaga vilt i täta snår och tätt skog. Grythundar måste kunna klara sig i terräng där större hundar inte kan ta sig fram, och de måste kunna hitta och driva viltet på effektivt sätt. Små hundar som Spitz, Terrier och andra små hundraser kan vara effektiva grythundar.\n\nEn grythund måste vara modlös och energisk, och måste kunna skälla för att hållas på vägen. Grythundar kan ofta tränas från andra hundraser genom att arbeta med dem i täta områden och genom att belöna lämpligt beteende. En väl tränad grythund kan få viltet att springa från tjocka snårar där större hundar inte kan nå.'
      },
      {
        id: 'apporterande-hundar',
        title: 'Apporterande hundar',
        body: 'Apporterande hundar är tränade för att hämta jaktat vildt efter att det har skjutits. En apporterande hund måste kunna hitta viltet, ofta genom att vädra eller genom att följa instruktioner från jägaren, och sedan måste den kunna bära viltet på ett försiktigt sätt så att det inte skadas eller förstörs av tandspår.\n\nSpieler och Retriever-hundar är klassiska apporterande hundar. En apporterande hund måste vara både intelligent och villig att lyda, och den måste tränas noggrant för att kunna bära viltet utan att skada det. En väl tränad apporterande hund kan mycket väl spara jägaren många timmars arbete med att leta efter viltet som ligger långt bort. Det är också mycket viktigt att hunden lär sig att inte äta viltet själv när den hittar det.'
      },
      {
        id: 'eftersokshundar',
        title: 'Eftersökshundar',
        body: 'Eftersökshundar är tränade för att söka efter skadskjutet vildt. En eftersökshund måste kunna följa blodspår eller andra doftspår från skadskjutet viltet, ofta över mycket långa avstånd. En eftersökshund måste ha ett mycket känsligt nos, och måste kunna concentrera sig på den specifika doften av blod även när det finns många andra smaker omkring.\n\nRasor som Bloodhound eller Deutsche Bracke är ofta användbara eftersökshundar. En eftersökshund måste tränas av någon med mycket kunskap om denna specialiserade uppgift. En väl tränad eftersökshund kan ofta hitta vildt som annars skulle gå förlorat, vilket gör dem oumbärliga för att minimera lidande från skadskjutet vildt. En erfaren eftersöksförare kan ofta spara många timmar, eller till och med möjliggöra att viltet hittas alls.'
      }
    ]
  },
  {
    id: 'vapnen',
    number: 5,
    title: 'Vapnen',
    intro: 'Vapnet är ett av jakens viktigaste redskap, och det är helt nödvändigt att förstå hur det fungerar, hur man använder det säkert och ansvarfullt, och vilka juridiska krav som gäller för vapinehav. Vi behandlar här de två huvudsakliga typerna av jaktvapen – hagelgevär och kulgevär – samt säkerhet och lagliga krav.',
    avsnitt: [
      {
        id: 'ditt-vapen',
        title: 'Ditt vapen',
        body: 'Att välja rätt vapen är en av de viktigaste beslut en jägare måste ta. Vapnet måste vara lämpligt för det vildt du ska jaga och för det terräng du ska jaga i. Det måste också passa dina fysiska förutsättningar – en mindre eller svagare person kan behöva ett lättare vapen än en större eller starkare person. Det är mycket viktigt att testa olika vapen innan du köper ett.\n\nDe flesta svenska jägare börjar med ett hagelgevär, som är universalvapnet som kan användas för många typer av jakt. Senare kan en jägare lägga till ett kulgevär för älgjakt eller andra större viltarter. Det är också viktigt att du blir väl bekant med ditt vapen – du bör öva regelbundet på skjutbanan så att du kan skjuta rent och sträcka dina skott med säkerhet. Ett väl underhållet vapen av ett märke som du litar på är mycket viktigare än ett dyrare vapen av ett märke som du inte känner till.'
      },
      {
        id: 'hagelvapen',
        title: 'Hagelgevär',
        body: 'Ett hagelgevär är ett vapen som skjuter hagel – många små blykulor – istället för en enda stor kula. Hagel sprids i ett mönster, vilket gör det lättare att träffa snabbrörliga mål som fåglar. Hagelgevär kan ha två löp (dubbelbössor) eller ett löp (enkel eller repeterbössssössa), och det kan ladda två eller fler hagelpatroner.\n\nEn fördel med hagelgevär är att den kan användas för många olika typer av jakt – från små fåglar till större vildt. En nackdel är att hageln förlorar kraft över långre avstånd, och för älgjakt kan hagelgevär vara för svagt på längre avstånd. Hagelgevär är mycket populära i Sverige för driven älgjakt och för fågeljakt. Det är viktigt att välja rätt hagelsort för det vildt du ska jaga – mindre hagel för små fåglar, större hagel för större vildt.'
      },
      {
        id: 'kulvapen',
        title: 'Kulgevär',
        body: 'Ett kulgevär skjuter en enda stor kula istället för hagel. Kulgevär är mycket kraftfulla och kan användas för älgjakt och annan större viltjakt. En kula kan tränga genom mycket material och kan behålla sin kraft över mycket långre avstånd än hagel, vilket gör kulgevär lämpligt för långdistansjakt i öppen terräng.\n\nKulgevär kan ha olika långhål eller lite längre löp beroende på modellen. Många moderna kulgevär är också försedda med teleskopsikte för att möjliggöra precisionseld över långa avstånd. En nackdel med kulgevär är att de är mindre användbara för fågeljakt och för mindre vildt. En kulgevär kan också vara svårare att hantera i tätt terräng än ett hagelgevär. För större viltjakt är ett kulgevär ofta det bästa valet.'
      },
      {
        id: 'sakerhet-och-vapenhantering',
        title: 'Säkerhet och vapenhantering',
        body: 'Säkerheten måste alltid komma först när man hanterar ett vapen. Det finns flera enkla men absoluta regler: alltid anta att vapnet är laddat, hålla löpet på något farligt området, aldrig sikta på något du inte vill skjuta, och aldrig avlossa ett skott utan att veta vad som är bakom målet. Du måste också alltid ha tummen längs pipan när du transporterar vapnet, aldrig längs avtryckaren.\n\nNär du hanterar ett vapen måste du vara helt fokuserad – inga distrakteringar, ingen alkohol, ingen trötthet. Du måste also kunna hantera ditt vapen säkert även när du är under stress eller mycket uppspelt. Du måste veta var säkerheten är och hur man löser den, och du måste ge order till andra jägare om vapenhantering om du märker något farligt. Ett vapen kräver absolut respekt och disciplin – det är inte en leksak utan ett redskap som kan orsaka allvarliga skador eller död.'
      },
      {
        id: 'forvaring',
        title: 'Förvar av vapen',
        body: 'Vapnet måste förvaras säkert när det inte är i bruk. Det måste förvaras på ett sätt som förhindrar att obehöriga eller barn kan komma åt det. De flesta länder kräver att vapen förvaras i ett låst skåp eller i ett låst bur. Ammunition ska förvaras separat från vapnet, också i ett låst utrymme.\n\nNär du reser med ett vapen måste det transporteras säkert – det kan inte transporteras i handväskan eller ligga löst i bilen. Det måste förvaras i ett säkert case och måste hållas åtskilt från ammunition. Brott mot lagliga krav för vapenförvar kan resultera i att du förlorar din vapenentillielse och kan till och med leda till straffar. Det är mycket viktigt att ta lagliga krav för vapenförvar på allvar – det är inte bara lagligt krav, det är också en etisk skyldighet att se till att vapen inte hamnar i fel händer.'
      },
      {
        id: 'utlaning-av-vapen',
        title: 'Utlåning av vapen',
        body: 'Det finns många juridiska och etiska regler omkring utlåning av vapen. Generellt är det inte tillåtet att låna ut ett vapen till någon som inte är licensierad jägare med giltigt jaktkort. Även om det är en familjemedlem eller en nära vän, måste de ha egna jägarkort och måste vara tränade i vapenhantering.\n\nOm du lånar ut ett vapen måste du se till att mottagaren är helt klar på hur man använder detta specifika vapen – hur man laddar det, hur man löser säkerheten, hur man skjuter det. Du måste också se till att mottagaren förstår reglerna för säker vapenhantering, och du måste kunna förlita dig på att personen kommer att följa dessa regler. Att låna ut ett vapen är ett stort ansvar, och du är ansvarig för hur vapnet används när det är i någon annans händer. Det är ofta bättre att bara låta någon skjuta ditt vapen under övervakning än att låna ut det helt och hållet.'
      }
    ]
  }
]

export function getKapitel(id: string): TeoriKapitel | undefined {
  return teoriKapitel.find(k => k.id === id)
}

export function getAvsnitt(kapitelId: string, avsnittId: string): TeoriAvsnitt | undefined {
  return getKapitel(kapitelId)?.avsnitt.find(a => a.id === avsnittId)
}

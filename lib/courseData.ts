export interface Section {
  heading: string
  body: string
  keyPoints: string[]
  tip?: string
}

export interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
}

export interface Scenario {
  id: number
  title: string
  description: string
  options: string[]
  correct: number
  explanation: string
  rule?: string
}

export interface Module {
  id: string
  number: number
  title: string
  subtitle: string
  emoji: string
  duration: string
  difficulty: 'Grundläggande' | 'Mellannivå' | 'Avancerad'
  theory: {
    intro: string
    sections: Section[]
  }
  quiz: QuizQuestion[]
  scenarios: Scenario[]
}

export const modules: Module[] = [
  {
    id: 'intro',
    number: 1,
    title: 'Välkommen till jägarexamen',
    subtitle: 'Vad du behöver veta innan du börjar',
    emoji: '🎯',
    duration: '30 min',
    difficulty: 'Grundläggande',
    theory: {
      intro: `Jag har tillbringat mer än tjugo år i skogen. I gryningar som doftar frost och i höstkvällar när dimman lägger sig över hyggena. Under den tiden har jag lärt mig en sak som är viktigare än allt annat: jakt börjar inte med vapnet. Den börjar med kunskap och ansvar.

I Sverige är jakten en naturlig del av hur vi tar hand om våra marker. Vi har starka viltstammar, stora skogsarealer och ett landskap som formas av både natur och människor. Jakten är ett sätt att skapa balans. Den minskar skador på skog och gröda, förebygger trafikolyckor och ger oss ett av de finaste livsmedel man kan lägga på bordet.

Den här modulen ger dig grunden. Du ska förstå vad jägarexamen är, varför jakten spelar en viktig roll i vårt land och vilket ansvar som följer med att kalla sig jägare. Om du tar till dig det här på rätt sätt har du en stabil grund att stå på, både på provdagen och i skogen.`,
      sections: [
        {
          heading: 'Vad är jägarexamen?',
          body: `Jägarexamen är ditt bevis på att du har de kunskaper som krävs för att jaga säkert och ansvarsfullt i Sverige. Det är inte bara ett krav från myndigheterna. Det är en kvalitetsstämpel som visar att du förstår vad du ger dig in i.

För att få jägarexamen måste du klara ett teoretiskt prov och praktiska skjutprov. Teorin omfattar viltkännedom, lagstiftning, etik, säkerhet och grunderna i vapen och ammunition. Du ska veta hur våra vanligaste arter ser ut, hur de lever och när de får jagas. Du ska förstå reglerna och varför de finns. Det räcker inte att kunna rabbla paragrafer. Du måste förstå sammanhanget.

De praktiska proven handlar om säker vapenhantering och skjutskicklighet. Du ska visa att du kan hantera hagelgevär och kulgevär på ett tryggt sätt och avlossa kontrollerade skott. När det gäller högvilt krävs dessutom särskilt prov. Det är helt rimligt. Ett skott mot älg eller hjort ställer höga krav på dig som jägare.

Många säger att jägarexamen är som ett körkort för jakt. Det ligger något i det. Men det är också början på en livslång resa. Proven testar din grund. Resten bygger du i skogen, genom erfarenhet, ödmjukhet och viljan att alltid bli bättre.`,
          keyPoints: [
            'Teoretiskt prov täcker viltkännedom, lagstiftning, etik, säkerhet och vapenlära.',
            'Praktiska skjutprov krävs för både hagelgevär och kulgevär.',
            'För högvilt som älg och hjort krävs dessutom ett godkänt högviltsprov.',
          ],
        },
        {
          heading: 'Jaktens roll i Sverige',
          body: `Jakten i Sverige är äldre än våra städer och vägar. Förr handlade den om överlevnad. I dag handlar den om ansvar och förvaltning. Vi lever i ett land med starka stammar av älg, rådjur, vildsvin och hjort. Utan jakt skulle balansen snabbt rubbas.

När klövviltet blir för många ökar betesskadorna på ungskog och grödor. Trafikolyckorna blir fler och lidandet större, både för djur och människor. Här spelar jägaren en avgörande roll. Genom att anpassa avskjutningen efter tillgång och mål arbetar vi tillsammans för att hålla stammarna på en nivå som mark och samhälle klarar av.

Men jakt är mer än att fälla vilt. Det handlar om viltvård året runt. Många jägare lägger tid på att förbättra livsmiljöer, röja, så viltåkrar och följa upp hur stammarna utvecklas. Det är ett långsiktigt arbete som sällan syns utåt men som betyder mycket.

Vi ska också komma ihåg att jakten ger oss något tillbaka. Viltkött är ett naturligt och klimatsmart livsmedel. Djuret har levt fritt och tagits tillvara med respekt. När jakten bedrivs rätt är den en naturlig del av ekosystemet och en viktig del av svensk naturförvaltning.`,
          keyPoints: [
            'Jakt reglerar viltstammar och förebygger betesskador, trafikolyckor och obalans i naturen.',
            'Viltvård är ett arbete som pågår hela året: biotopförbättring, inventering och viltåkrar.',
            'Viltkött är ett hållbart och klimatsmart livsmedel från djur som levt fritt.',
          ],
        },
        {
          heading: 'Jägarens ansvar',
          body: `Att vara jägare är ett förtroende. Du bär vapen i miljöer där andra människor rör sig och du fattar beslut som påverkar levande djur. Det kräver mognad.

Säkerheten står alltid över allt annat. Ett vapen ska hanteras med samma respekt varje gång, oavsett om du är på skjutbanan eller på pass en tidig morgon. Du identifierar alltid ditt mål och vad som finns bakom. Är du det minsta osäker låter du bli att skjuta. Så enkelt är det.

Etiken är minst lika viktig. Ett skott ska vara genomtänkt och ansvarsfullt. Du skjuter bara när du har en rimlig chans till ett snabbt och säkert dödande skott. Om något går fel är eftersök en självklarhet. Viltet ska inte lida på grund av slarv eller prestige.

Du ansvarar också för att känna till lagarna. Jakttider, tillåtna metoder och regler kring vapen är inget man gissar sig fram till. Okunskap skyddar ingen.

Slutligen handlar ansvar om hur du uppträder. Mot markägare, mot andra friluftsmänniskor och mot jaktkamrater. Ditt beteende påverkar hur hela jägarkåren uppfattas. Det är värt att bära med sig varje gång du kliver ut i skogen.`,
          keyPoints: [
            'Identifiera alltid ditt mål och vad som finns bakom innan du skjuter.',
            'Skjut bara när du har rimlig chans till ett snabbt och säkert dödande skott.',
            'Det är ditt ansvar att känna till gällande jakttider, lagar och regler.',
          ],
          tip: 'En god jägare avstår hellre ett skott för mycket än ett för lite. Att kunna säga nej i rätt ögonblick är en av de viktigaste egenskaperna du kan utveckla.',
        },
        {
          heading: 'Så använder du kursen',
          body: `När jag utbildar nya jägare brukar jag säga att det här inte är något man hastar igenom på en helg. Kunskapen måste få sjunka in. Det handlar inte bara om att klara ett prov utan om att bli trygg i rollen som jägare.

Läs ett avsnitt i taget och fundera över vad det betyder i praktiken. När du lär dig om en art, se den framför dig i skogen. När du läser om en regel, tänk på varför den finns. Försök koppla varje del till en verklig situation. Det gör att kunskapen fastnar på riktigt.

Repetition är din vän. Särskilt när det gäller lagstiftning och artkännedom. Testa dig själv, diskutera med andra och var inte rädd för att ställa frågor. De bästa jägarna jag känner är fortfarande nyfikna.

Boka tid på skjutbanan i god tid. Vapenhantering ska kännas naturlig och säker. När du står inför provledaren ska du veta att du har gjort jobbet.

Tar du kursen på allvar bygger du en stabil grund. Det kommer du ha nytta av långt efter att provet är avklarat och jaktkortet ligger i fickan.`,
          keyPoints: [
            'Läs ett avsnitt i taget och koppla alltid teorin till verkliga situationer i skogen.',
            'Repetition är avgörande, särskilt för lagstiftning och artkännedom.',
            'Boka skjutbaneträning i god tid så vapenhanteringen sitter säkert inför provet.',
          ],
          tip: 'Studera hellre 20 minuter om dagen i tre veckor än tre timmar på en dag. Hjärnan behöver tid att befästa ny kunskap.',
        },
      ],
    },
    quiz: [], // Kommer senare
    scenarios: [], // Kommer senare
  },
  {
    id: 'viltbiologi',
    number: 2,
    title: 'Viltets biologi',
    subtitle: 'Hur djuren lever, rör sig och beter sig',
    emoji: '🦌',
    duration: '50 min',
    difficulty: 'Grundläggande',
    theory: {
      intro: `För att bli en skicklig jägare räcker det inte att kunna lagar och skjuta bra. Du måste förstå viltet. Hur det lever, hur det rör sig, hur det reagerar på väder och störningar. Efter många år i skogen kan jag säga att den som verkligen läser naturen sällan blir överraskad.

Viltets biologi är grunden för allt. Förstår du hur älgen använder vinden, varför rådjuret stannar upp innan det flyr eller när räven är som mest aktiv, då ökar du både dina chanser och din respekt för djuret. Du börjar jaga med insikt i stället för med tur.

I den här modulen går vi igenom våra vanligaste viltarter och deras plats i naturen. Vi tittar på hur de anpassar sig till årstiderna, hur rovdjuren påverkar ekosystemet och hur du kan tolka spår och andra tecken i marken. När du lärt dig det här kommer skogen att kännas mer levande. Du kommer inte bara se träd och mark. Du kommer se berättelser.`,
      sections: [
        {
          heading: 'Klövvilt',
          body: `Klövviltet är ryggraden i svensk jakt. Älg, rådjur, dovhjort, kronhjort och vildsvin är arter som präglar både landskap och jakttradition.

Älgen är vårt största landlevande däggdjur. Den lever främst av löv, skott och kvistar och rör sig över stora områden. Under brunsten på hösten förändras tjurens beteende tydligt. Han blir mer rörlig och mindre försiktig. Vintertid söker älgen föda i ungskog där den kan orsaka betesskador om stammen är för tät.

Rådjuret är betydligt mindre och mer revirbundet. Det är ett utpräglat skymningsdjur som gärna rör sig i bryn mellan skog och åker. Bocken markerar revir under sommaren och är då mer aktiv och synlig.

Hjortarna lever ofta i flock, särskilt hindar och kalvar. Under brunsten samlar hjorten hindarna kring sig och försvarar dem mot rivaler. Vildsvinet är annorlunda. Det är intelligent, socialt och mycket anpassningsbart. Det bökar efter rötter, mask och spannmål och kan snabbt öka i antal om förutsättningarna är goda.

Gemensamt för klövviltet är att de påverkar sin omgivning starkt genom sitt bete. Därför är kunskap om deras födoval, rörelsemönster och reproduktion avgörande för en ansvarsfull förvaltning.`,
          keyPoints: [
            'Älgen är mest aktiv i gryning och skymning och rör sig mer öppet under brunsten i oktober.',
            'Rådjuret är revirbundet och föredrar bryn och skogskanter.',
            'Vildsvinet är socialt och lever i flockar. Det ökar snabbt i antal med goda förutsättningar.',
          ],
        },
        {
          heading: 'Småvilt och fågel',
          body: `Småviltet rör sig ofta närmare marken och kräver ett annat sätt att läsa terrängen. Här hittar vi arter som hare, räv, grävling samt skogsfågel och olika änder.

Haren är anpassad för snabb flykt och lever av örter, gräs och skott. Den byter päls efter årstid för att bättre smälta in i omgivningen. Räven är en skicklig jägare och opportunist som tar allt från smågnagare till fågel och kadaver. Den spelar en viktig roll genom att hålla nere populationer av mindre djur.

Skogsfågel som tjäder och orre är knuten till äldre skogsmiljöer. Under våren samlas tupparna på spelplatser där de tävlar om hönornas uppmärksamhet. Änder och gäss är ofta knutna till vatten och flyttar i varierande grad beroende på art och vinterklimat.

Småviltets överlevnad påverkas starkt av väder, födotillgång och predation. Ett kallt och blött försommarväder kan slå hårt mot kycklingar och harungar. För jägaren gäller det att förstå dessa samband. Då inser man varför tillgången varierar mellan år och varför varsamhet ibland är klokare än full tilldelning.`,
          keyPoints: [
            'Haren byter till vit vinterpäls för kamouflage och är mest aktiv i gryning och skymning.',
            'Tjäder och orre är knutna till äldre skogsmiljöer och samlas på spelplatser på våren.',
            'Småviltets bestånd varierar kraftigt mellan år beroende på väder och rovdjurstryck.',
          ],
        },
        {
          heading: 'Rovdjur och deras roll',
          body: `Rovdjuren väcker känslor, men biologiskt sett är deras roll tydlig. Varg, lodjur, björn och järv är toppredatorer som påverkar bytesdjuren både genom predation och genom att styra deras beteende.

Vargen lever i familjegrupper och jagar främst klövvilt. Den väljer ofta svaga eller unga individer, vilket kan bidra till att stärka bytesstammens kvalitet. Lodjuret är en smygjägare som framför allt tar rådjur. Björnen är allätare och lever till stor del av växter, men kan också ta älgkalv. Järven är mer sällsynt och lever mycket av as.

Rovdjuren påverkar ekosystemet genom att skapa rörelse och försiktighet hos bytesdjuren. Det kan minska betesskador lokalt och förändra hur viltet använder landskapet.

Som jägare behöver du förstå rovdjurens närvaro. Inte för att ta ställning i debatten, utan för att kunna anpassa jakten och förvaltningen. Naturen är ett samspel, och rovdjuren är en del av helheten.`,
          keyPoints: [
            'Vargen lever i flockar och jagar klövvilt, ofta svaga eller unga individer.',
            'Lodjuret är ensamt och tar framför allt rådjur genom smygande jakt.',
            'Rovdjurens närvaro förändrar viltets rörelsemönster och beteende i hela landskapet.',
          ],
        },
        {
          heading: 'Viltets beteende och dygnsrytm',
          body: `Vilt lever efter tydliga mönster. Många arter är mest aktiva i gryning och skymning. Det gäller särskilt klövvilt som söker föda när ljuset är svagt och störningen mindre.

Väder påverkar rörelsen. Blåsiga dagar kan göra viltet mer vaksamt. Kraftigt regn dämpar ljud och kan få djuren att röra sig annorlunda. Under brunstperioder bryts ofta normala rutiner. Då styr fortplantningen beteendet mer än försiktigheten.

Födotillgång är en annan nyckel. När grödan är mogen dras vildsvin och hjort dit. När snön lägger sig koncentreras djuren till områden där det fortfarande finns näring.

Förstår du dygnsrytm och beteende slutar du jaga på måfå. Du börjar planera din jakt efter hur djuret faktiskt lever. Det är då jakten blir genomtänkt i stället för chansartad.`,
          keyPoints: [
            'De flesta viltarter är mest aktiva i gryning och skymning.',
            'Under brunsten förändras beteendet och djuren rör sig mer öppet och oförsiktigt.',
            'Väder och födotillgång styr var och när viltet rör sig i landskapet.',
          ],
          tip: 'Lär dig läsa vinden. Vilt rör sig oftast med vinden i ryggen för att fånga dofter framifrån. Placera dig alltid så att vinden bär din doft bort från djuret.',
        },
        {
          heading: 'Spår, spillning och tecken i naturen',
          body: `Skogen talar hela tiden. Frågan är om du lyssnar. Spår i marken, färsk spillning, betade skott och uppbökad jord berättar vilka djur som finns i området och hur nyligen de varit där.

Ett älgspår är stort och avlångt medan rådjurets är mindre och mer spetsigt. Vildsvinets klövar är bredare och ofta syns märken efter bakklövarna. Spillningens form och konsistens avslöjar både art och ibland hur färsk den är.

Betesskador på tall kan tyda på älg. Lågt avbitna skott och fejade stammar visar var råbocken markerat revir. Uppkrafsad mark och bökar avslöjar vildsvinens nattarbete.

När du lär dig läsa dessa tecken får du en helt annan närvaro i skogen. Du rör dig inte längre i tom terräng. Du rör dig i ett landskap fullt av liv, där varje märke i marken är en del av berättelsen.`,
          keyPoints: [
            'Älgspår är stora och avlånga. Rådjurets är mindre och spetsigare.',
            'Fejade stammar och lågt avbitna skott avslöjar råbockens revirhävdande.',
            'Uppbökad jord och bökar är typiska tecken på vildsvinens aktivitet.',
          ],
          tip: 'Fotografera spår och spillning när du hittar dem. Med tiden bygger du upp ett eget bildarkiv som gör det lättare att identifiera och jämföra.',
        },
      ],
    },
    quiz: [],
    scenarios: [],
  },
  {
    id: 'viltvard',
    number: 3,
    title: 'Viltvård och naturvård',
    subtitle: 'Hållbart jaktande och naturens balans',
    emoji: '🌲',
    duration: '45 min',
    difficulty: 'Mellannivå',
    theory: {
      intro: `När man talar om jakt är det många som tänker på själva skottet. För mig är det tvärtom. Skottet är en liten del av något mycket större. Det verkliga arbetet sker året runt och kallas viltvård.

Efter mer än tjugo år i markerna vet jag att en ansvarsfull jägare tänker långsiktigt. Vi förvaltar viltstammar som ska finnas kvar för kommande generationer. Vi påverkar landskapet genom hur vi jagar, hur vi samarbetar med markägare och hur vi tar hand om naturen mellan jaktsäsongerna.

Viltvård och naturvård hänger ihop. När vi skapar bättre livsmiljöer för klövvilt och småvilt gynnar vi ofta många andra arter samtidigt. När vi anpassar avskjutningen efter tillgången bidrar vi till balans i ekosystemet.

I den här modulen ska vi titta närmare på vad viltvård egentligen innebär, hur populationsförvaltning fungerar i praktiken och vad du som jägare konkret kan göra ute i markerna. Det här är kunskap som skiljer en passiv skytt från en engagerad förvaltare.`,
      sections: [
        {
          heading: 'Vad är viltvård?',
          body: `Viltvård är att ta ansvar för viltet före, under och efter jakten. Det handlar om att skapa förutsättningar för friska och livskraftiga stammar, inte om att maximera antalet fällda djur.

I praktiken innebär viltvård att man följer utvecklingen i stammen, ser hur reproduktionen fungerar och anpassar jakten därefter. Det kan handla om att spara produktiva hondjur, att vara försiktig ett år med svag föryngring eller att rikta avskjutningen mot rätt åldersklasser.

Viltvård är också omsorg om djuret. Ett väl avvägt skott, snabb eftersökshantering och respektfullt omhändertagande av det fällda viltet är en självklar del av helheten.

För mig är viltvård en inställning. Det är att se längre än till den egna jaktdagen. När du börjar tänka i de banorna förändras ditt sätt att se på marken. Du frågar dig inte bara vad du kan få ut av den. Du frågar vad du kan bidra med.`,
          keyPoints: [
            'Viltvård handlar om friska, livskraftiga stammar, inte om maximal avskjutning.',
            'Anpassa jakten efter stammens tillstånd och reproduktion varje år.',
            'Eftersök och omhändertagande av fällt vilt är en del av viltvårdsansvaret.',
          ],
        },
        {
          heading: 'Populationsförvaltning',
          body: `Populationsförvaltning låter kanske som ett ord från en myndighetsrapport, men i grunden är det sunt förnuft. Det handlar om att hålla viltstammar på en nivå som marken klarar och som är långsiktigt hållbar.

Varje område har en viss bärförmåga. Det är den mängd djur som kan leva där utan att skada sin egen livsmiljö. Om klövviltet blir för många ökar betesskadorna och djurens kondition kan försämras. Om stammen blir för liten riskerar den att tappa genetisk variation och stabilitet.

En klok förvaltning bygger på observationer och samarbete. Älgförvaltningen i Sverige är ett tydligt exempel där jägare och markägare tillsammans sätter mål för stammen och anpassar avskjutningen efter dem. Man tittar på kalvvikter, könsfördelning och åldersstruktur för att få en helhetsbild.

Som jägare behöver du förstå att varje skott påverkar mer än den enskilda individen. Det påverkar framtida reproduktion och stammens utveckling. När du inser det blir valet av djur på passet en del av ett större ansvar.`,
          keyPoints: [
            'Varje mark har en bärförmåga. För många djur leder till betesskador och sämre kondition.',
            'Älgförvaltningen bygger på gemensamma mål mellan jägare och markägare.',
            'Val av djur på passet påverkar stammens köns- och åldersstruktur.',
          ],
        },
        {
          heading: 'Biotopvård och habitatförbättring',
          body: `Viltet är helt beroende av sin livsmiljö. Föda, skydd och vatten är grundläggande behov. När landskapet förändras genom skogsbruk och jordbruk förändras också förutsättningarna för djuren.

Biotopvård handlar om att förbättra dessa livsmiljöer. Det kan vara att skapa kantzoner mellan skog och åker, att spara lövträd i barrskog eller att anlägga viltåkrar som ger näring under kritiska perioder. Små insatser kan göra stor skillnad, särskilt för småvilt och fågel som är känsliga för förändringar.

I ett ensartat landskap minskar ofta den biologiska mångfalden. Genom att skapa variation i vegetation och struktur gynnas fler arter än de vi jagar. Det är här jakt och naturvård möts på allvar.

Jag har sett marker som nästan saknat småvilt få nytt liv efter genomtänkt biotopvård. Det kräver arbete och tålamod, men resultatet är tydligt. Fler insekter, fler fåglar och en rikare natur.`,
          keyPoints: [
            'Kantzoner, lövträd och viltåkrar förbättrar livsmiljön för både klövvilt och småvilt.',
            'Variation i vegetationen gynnar den biologiska mångfalden.',
            'Biotopvård ger synliga resultat men kräver tålamod och långsiktigt arbete.',
          ],
          tip: 'En viltåker behöver inte vara stor. Redan ett litet fält med korn, raps eller klöver kan göra stor skillnad för djuren under senhöstens svåra period.',
        },
        {
          heading: 'Rovdjurens roll i ekosystemet',
          body: `Rovdjuren är en naturlig del av våra ekosystem och påverkar dem på flera nivåer. De reglerar bytesdjurens antal men påverkar också deras beteende och rörelsemönster.

När rovdjur finns i ett område blir klövviltet ofta mer vaksamt och rörligt. Det kan minska betestrycket på vissa platser och förändra hur djuren använder landskapet. På så sätt bidrar rovdjuren till dynamik i ekosystemet.

Samtidigt kan högt rovdjurstryck påverka möjligheterna till jakt och ställa krav på anpassad förvaltning. För oss jägare gäller det att förstå hur dessa samband fungerar i praktiken. Det handlar inte om att romantisera eller demonisera, utan om att se helheten.

Ett ekosystem är komplext och alla delar hänger ihop. När du förstår rovdjurens roll blir din syn på viltförvaltning mer nyanserad. Du ser att naturen inte är statisk utan ett samspel där varje art har sin plats.`,
          keyPoints: [
            'Rovdjur reglerar bytesdjurens antal och påverkar deras rörelsemönster.',
            'Högt rovdjurstryck kräver anpassad jaktförvaltning i det berörda området.',
            'Alla delar i ekosystemet hänger ihop. Rovdjuren är en naturlig del av balansen.',
          ],
        },
        {
          heading: 'Jägarens praktiska viltvårdsarbete',
          body: `Det mesta av viltvården sker utan rubriker och utan publik. Det är röjsågen i handen en varm sommardag. Det är möten med markägare runt köksbordet. Det är inventeringar i gryningen när andra fortfarande sover.

Som jägare kan du bidra genom att delta i inventeringar, rapportera observationer och följa upp hur stammen utvecklas. Du kan hjälpa till att skapa bättre skydd för viltet och se till att utfodring, om den används, sker ansvarsfullt och med eftertanke.

Praktisk viltvård handlar också om att vara noggrann vid jakten. Att välja rätt djur, att avstå när det behövs och att alltid genomföra eftersök om situationen kräver det.

Men det stannar inte där. Det handlar om att samarbeta. Ingen förvaltar en mark ensam. Jakten fungerar bäst när jaktlaget delar samma målbild och när dialogen med markägare är öppen och ärlig.

Och det är där någonstans du går från att vara en som jagar till att bli en som förvaltar. Det är en skillnad som märks, både i skogen och inom dig själv.`,
          keyPoints: [
            'Delta i inventeringar och rapportera observationer till jaktlaget och förvaltningsplanen.',
            'Välj rätt djur, avstå vid osäkerhet och genomför alltid eftersök om det behövs.',
            'Viltvård kräver samarbete. Öppen dialog med markägare och jaktlag är avgörande.',
          ],
          tip: 'Håll en enkel dagbok över dina observationer i markerna. Datum, plats, art och antal. Över tid ger det ett ovärderligt underlag för kloka förvaltningsbeslut.',
        },
      ],
    },
    quiz: [],
    scenarios: [],
  },
  {
    id: 'jaktratt',
    number: 4,
    title: 'Jakträtt och lagstiftning',
    subtitle: 'Regler, tillstånd och jägarens skyldigheter',
    emoji: '⚖️',
    duration: '55 min',
    difficulty: 'Mellannivå',
    theory: {
      intro: `När jag började jaga fick jag tidigt höra att okunskap aldrig är en ursäkt. Det gäller särskilt när vi talar om lagstiftningen. Jakten i Sverige är en rättighet, men den är också noggrant reglerad. Det är en del av det ansvar vi bär som jägare.

Lagarna finns inte för att krångla till det för oss. De finns för att skydda viltet, markägaren och allmänheten. De skapar ramar som gör att jakten kan bedrivas långsiktigt och med förtroende från samhället. Tappar vi det förtroendet riskerar vi mer än böter. Vi riskerar jaktens framtid.

I den här modulen går vi igenom grunderna i jaktlagen och jaktförordningen, hur jakttider fungerar, vad som gäller kring mark och arrenden samt vilka regler som styr vapeninnehav. Vi pratar också om eftersök och de skyldigheter som följer när ett djur skadats.

Det här är kunskap du måste bära med dig varje gång du kliver ut på pass.`,
      sections: [
        {
          heading: 'Jaktlagen och jaktförordningen',
          body: `Grunden för all jakt i Sverige finns i jaktlagen och jaktförordningen. Jaktlagen slår fast de övergripande principerna, medan jaktförordningen innehåller mer detaljerade bestämmelser.

En central utgångspunkt är att viltet är en nationell resurs som ska förvaltas så att det ger en långsiktigt god avkastning samtidigt som biologisk mångfald bevaras. Det betyder att jakten alltid ska bedrivas med hänsyn till både viltstammar och ekosystem.

I lagen regleras också hur jakt får bedrivas. Det handlar om krav på hänsyn, att vilt inte får utsättas för onödigt lidande och att jakten ska ske på ett sätt som är förenligt med god jaktetik. Vissa metoder är tillåtna och andra förbjudna.

Jaktförordningen anger bland annat vilka arter som är jaktbara och under vilka tider. Den innehåller också bestämmelser om skyddsjakt och licensjakt.

Som jägare är du skyldig att hålla dig uppdaterad. Regler kan ändras och det är ditt ansvar att ha aktuell information.`,
          keyPoints: [
            'Jaktlagen sätter de övergripande principerna. Jaktförordningen reglerar detaljerna.',
            'Viltet är en nationell resurs som ska förvaltas långsiktigt och hållbart.',
            'Som jägare är du skyldig att hålla dig uppdaterad om gällande regler.',
          ],
        },
        {
          heading: 'Jakttider och tillstånd',
          body: `Jakttiderna är ryggraden i viltförvaltningen. De är satta för att ta hänsyn till arternas biologi, särskilt under känsliga perioder som reproduktion och uppfödning av ungar.

Att jaga utanför fastställd jakttid är ett allvarligt brott. Därför måste du alltid kontrollera aktuella jakttider innan säsongen börjar. De kan variera mellan olika delar av landet och ibland även mellan olika typer av mark.

Vissa former av jakt kräver särskilda tillstånd. Det gäller till exempel licensjakt på stora rovdjur och i vissa fall skyddsjakt när vilt orsakar skada. Skyddsjakt kan beslutas av myndighet eller i vissa situationer genomföras på eget ansvar enligt särskilda regler.

Det är lätt att tänka att jakttider bara är datum i en kalender. För mig är de ett uttryck för respekt. De visar att vi jagar med hänsyn till djurens livscykel. När du planerar din jakt ska du alltid göra det med lagboken i bakhuvudet.`,
          keyPoints: [
            'Jakttiderna varierar per art och region. Kontrollera alltid innan säsongen.',
            'Jakt utanför jakttid är ett allvarligt brott oavsett omständigheterna.',
            'Licensjakt och skyddsjakt kräver särskilda tillstånd och beslut.',
          ],
        },
        {
          heading: 'Markägarens rätt och jaktarrenden',
          body: `I Sverige tillhör jakträtten markägaren. Det är en grundprincip som är viktig att förstå. Äger du marken har du också rätten att jaga där eller upplåta den rätten till någon annan.

Många jägare jagar på arrenderad mark. Ett jaktarrende är ett avtal mellan markägare och jägare eller jaktlag. Där regleras villkoren för jakten, hur länge arrendet gäller och vilka regler som ska följas.

Ett gott samarbete med markägaren är avgörande. Det handlar om förtroende. Markägaren vill ofta se att jakten bidrar till att hålla viltstammarna på en nivå som är rimlig för skog och gröda. Som jägare behöver du lyssna och ta hänsyn till dessa intressen.

Jakträtten innebär också ansvar. Du får inte jaga hur som helst bara för att du har tillgång till marken. Lagar och regler gäller oavsett ägandeform. Respekten för markägaren och för grannmarker är en självklar del av jägarens heder.`,
          keyPoints: [
            'Jakträtten tillhör markägaren. Jaktarrende är ett avtal som reglerar villkoren.',
            'Respektera markägarens intressen och håll en öppen dialog om förvaltning.',
            'Ditt ansvar gäller fullt ut oavsett om du äger marken eller arrenderar jakträtten.',
          ],
        },
        {
          heading: 'Vapenlagstiftning och tillstånd',
          body: `Att äga och använda jaktvapen i Sverige är en rättighet som bygger på förtroende. Vapenlagstiftningen är tydlig och relativt sträng. För att få inneha vapen krävs godkänd jägarexamen och vapenlicens från Polismyndigheten.

Varje vapen är knutet till ett specifikt tillstånd. Det gäller både kulgevär och hagelgevär. Förvaring av vapen och ammunition regleras noggrant. Vapnen ska förvaras i godkänt vapenskåp och hanteras på ett sätt som förhindrar att obehöriga får tillgång till dem.

Transport av vapen ska ske under uppsikt och på ett säkert sätt. Ett vapen får aldrig lämnas utan kontroll i ett fordon på ett vårdslöst sätt. Ansvarstänkandet ska genomsyra varje moment.

Den som bryter mot vapenlagstiftningen riskerar allvarliga konsekvenser, inte bara juridiskt utan också genom att förlora rätten att inneha vapen. Därför måste du vara noggrann. Ett vapen är ett kraftfullt verktyg som kräver disciplin och respekt.`,
          keyPoints: [
            'Vapenlicens krävs för varje enskilt vapen. Ansökan görs hos Polismyndigheten.',
            'Vapen ska förvaras i godkänt vapenskåp, åtskilt från ammunition.',
            'Brott mot vapenlagstiftningen kan leda till förlorad rätt att inneha vapen.',
          ],
          tip: 'Kontrollera att ditt vapenskåp uppfyller gällande krav. Polismyndigheten kan göra hembesök och kontrollera förvaringen. Det är ditt ansvar att allt stämmer.',
        },
        {
          heading: 'Eftersök och skyldigheter',
          body: `En av de viktigaste skyldigheterna du har som jägare är att genomföra eftersök om ett djur skadats. Det är både en moralisk och juridisk plikt.

Om du misstänker att ett djur träffats ska du omedelbart säkerställa att eftersök påbörjas. Det gäller även om djuret försvinner ur sikte och du är osäker på träffen. Att lämna platsen utan åtgärd är oacceptabelt.

Eftersök kräver kunskap och ofta tillgång till en tränad hund. Därför är det vanligt att jaktlag har särskilda eftersöksekipage knutna till verksamheten. Vid trafikolyckor med vilt är det också en skyldighet att anmäla händelsen till polisen.

Eftersöket är en förlängning av skottet. Det är där ditt ansvar sätts på prov. Ett snabbt och korrekt genomfört eftersök minskar lidandet och visar respekt för viltet. Det är en självklar del av att vara jägare på riktigt.`,
          keyPoints: [
            'Eftersök är en juridisk skyldighet om du misstänker att ett djur träffats.',
            'Anlita ett eftersöksekipage med tränad hund om spåret inte är uppenbart.',
            'Trafikolyckor med vilt ska alltid anmälas till polisen.',
          ],
          tip: 'Ha kontaktnumret till ett lokalt eftersöksekipage sparat i telefonen innan du går ut på jakt. I en akut situation vinner varje minut.',
        },
      ],
    },
    quiz: [],
    scenarios: [],
  },
  {
    id: 'vapenlara',
    number: 5,
    title: 'Vapenlära',
    subtitle: 'Gevär, hagelvapen, ammunition och mekanik',
    emoji: '🔫',
    duration: '60 min',
    difficulty: 'Mellannivå',
    theory: {
      intro: `Ett jaktvapen är ett verktyg. Varken mer eller mindre. Men det är ett verktyg som kräver kunskap, respekt och disciplin. Efter många år med gevär på axeln vet jag att trygg vapenhantering inte handlar om tur eller vana. Det handlar om förståelse.

När du vet hur vapnet är uppbyggt och fungerar blir du lugnare i varje moment. Du laddar med eftertanke, säkrar utan att tveka och upptäcker direkt om något inte känns som det ska. Det är så säkerhet byggs, genom kunskap och rutin.

I den här modulen går vi igenom hur gevär är konstruerade, skillnaden mellan hagelgevär och kulgevär, hur ammunition fungerar och vad olika kalibrar innebär. Vi talar också om sikten och optik samt om underhåll och förvaring. Allt hänger ihop. Ett välskött vapen som hanteras rätt är en förutsättning för säker och etisk jakt.

Det här är grunden du ska bära med dig varje gång du öppnar vapenskåpet.`,
      sections: [
        {
          heading: 'Gevärskonstruktion och funktion',
          body: `För att känna dig trygg med ett vapen måste du förstå hur det fungerar. I grunden består ett gevär av pipa, låda, slutstycke eller brytmekanism, kolv och avtryckarsystem. När du trycker av sker en kontrollerad antändning av krutet i patronen. Gastrycket driver projektilen genom pipan och ut mot målet.

I ett kulgevär förs patronen in i patronläget och låses genom att slutstycket stängs. När skottet går tar låsningen upp trycket så att det leds framåt genom pipan. I ett hagelgevär av bryttyp öppnas vapnet på mitten för laddning och patronerna placeras direkt i patronläget.

Säkringen är en mekanisk anordning som ska förhindra oavsiktlig avfyrning. Den ersätter aldrig sunt förnuft. Ett vapen ska alltid behandlas som laddat, oavsett säkringens läge.

När du förstår mekaniken bakom skottet inser du också varför rätt ammunition och korrekt underhåll är så viktigt. Ett gevär är en precisionsmaskin. Det förtjänar att hanteras därefter.`,
          keyPoints: [
            'Ett gevär består av pipa, låda, slutstycke eller brytmekanism, kolv och avtryckarsystem.',
            'Säkringen förhindrar oavsiktlig avfyrning men ersätter aldrig försiktigt beteende.',
            'Behandla alltid vapnet som laddat, oavsett om du vet att det är tomt.',
          ],
        },
        {
          heading: 'Hagelgevär och kulgevär',
          body: `Hagelgevär och kulgevär fyller olika syften i jakten. Hagel används främst vid jakt på fågel och mindre vilt där målet ofta är i rörelse. I stället för en enda projektil avlossas en svärm av hagel som sprider sig efter hand som de lämnar pipan. Det ger en större träffyta på kortare avstånd.

Kulgevär används vid jakt på klövvilt och annat större vilt. Här avlossas en enda projektil med hög precision och betydligt längre räckvidd. Kraven på säker kulfång och bakgrund är därför extra viktiga.

Valet mellan hagel och kula styrs av viltart, terräng och jaktsätt. Det är aldrig fritt att välja vilket som helst. Regler anger när kulvapen krävs och vilken klass vapnet ska tillhöra för olika arter.

En erfaren jägare väljer verktyg med omsorg. Det handlar inte om kraft för sakens skull utan om att använda rätt vapen för rätt situation. Då blir jakten både säkrare och mer etisk.`,
          keyPoints: [
            'Hagelgevär används mot rörliga mål på kortare avstånd. Kulgevär mot större vilt på längre håll.',
            'Regler anger vilken typ av vapen och vilken effektklass som krävs för olika viltarter.',
            'Valet av vapen påverkar säkerheten. Kulfång och bakgrund är avgörande vid kulgevärsjakt.',
          ],
        },
        {
          heading: 'Ammunition och kaliber',
          body: `Ammunitionen är minst lika viktig som vapnet. En patron består av hylsa, tändhatt, krut och projektil. När slagstiftet träffar tändhatten antänds krutet och skapar det tryck som driver projektilen genom pipan.

Kaliber anger diametern på projektilen. Olika kalibrar har olika egenskaper när det gäller hastighet, anslagsenergi och kulbana. För jakt på större klövvilt krävs att vapnet uppfyller vissa energikrav enligt svensk lag. Det är till för att säkerställa tillräcklig verkan och minska risken för onödigt lidande.

Hagelpatroner skiljer sig genom att de innehåller många små hagel i stället för en enda kula. Storleken på haglen påverkar räckvidd och genomslagskraft.

Det är avgörande att alltid använda rätt ammunition till rätt vapen. Fel patron kan orsaka allvarliga skador på både vapen och skytt. Läs märkningen noggrant och var aldrig slarvig. Noggrannhet i det lilla är en del av jägarens professionalism.`,
          keyPoints: [
            'En patron består av hylsa, tändhatt, krut och projektil.',
            'Kaliber anger projektilens diameter. Energikrav gäller vid jakt på klövvilt.',
            'Använd alltid rätt ammunition. Fel patron kan skada vapnet och vara direkt farligt.',
          ],
          tip: 'Kontrollera alltid att kalibermärkningen på patronen stämmer överens med vapnets märkning innan du laddar. Det tar en sekund och kan förhindra allvarliga olyckor.',
        },
        {
          heading: 'Sikten och optik',
          body: `Ett bra sikte hjälper dig att placera skottet rätt. På hagelgevär används oftast en enkel kornlösning eftersom skyttet sker instinktivt mot rörliga mål. Du fokuserar på målet och låter vapnet följa med i rörelsen.

På kulgevär är kikarsikte vanligt. Det ger förstoring och bättre möjligheter att bedöma träffläge på längre avstånd. Ett korrekt inskjutet vapen är en förutsättning för säkra skott. Inskjutningen ska kontrolleras regelbundet, särskilt om vapnet fått en stöt eller om ammunitionen byts.

Optiken måste hanteras varsamt. Smutsiga linser eller felaktig montering påverkar precisionen. Men kom ihåg att inget sikte i världen ersätter gott omdöme. Om ljuset är dåligt eller bakgrunden osäker ska du avstå, även om målet syns tydligt i kikaren.

Siktet är ett hjälpmedel. Ansvar och beslut ligger alltid hos dig.`,
          keyPoints: [
            'Kikarsikte ger förstoring och bättre träffprecision på längre avstånd.',
            'Inskjutning ska kontrolleras regelbundet, särskilt efter stöt eller byte av ammunition.',
            'Inget sikte ersätter gott omdöme. Säker bakgrund är alltid ett krav.',
          ],
        },
        {
          heading: 'Underhåll och förvaring',
          body: `Ett jaktvapen som används ska också vårdas. Efter skytte behöver pipan rengöras från krutrester och avlagringar. Regelbunden rengöring minskar slitage och bevarar precisionen. Det är ett lugnt och metodiskt arbete som också ger dig chans att kontrollera att allt är i gott skick.

Fukt är vapnets fiende. Efter en regnig dag i skogen bör vapnet torkas noggrant. Träkolvar mår bra av viss omsorg och metalldelar ska skyddas mot rost.

Förvaringen är reglerad. Vapnet ska förvaras i godkänt vapenskåp och ammunitionen ska hållas under kontroll. Nycklar eller koder får aldrig hanteras vårdslöst.

Jag brukar säga att hur du sköter ditt vapen säger mycket om hur du ser på ditt ansvar. Ett välvårdat gevär är inte bara en fråga om funktion. Det är en fråga om respekt, både för säkerheten och för jakten som helhet.`,
          keyPoints: [
            'Rengör pipan efter varje skytte för att minska slitage och bevara precisionen.',
            'Torka vapnet noggrant efter fukt. Skydda metalldelar mot rost.',
            'Förvara vapnet i godkänt vapenskåp och håll koder och nycklar under kontroll.',
          ],
          tip: 'Gör rengöringen direkt efter hemkomst, inte dagen efter. Det är lätt att skjuta upp och lätt att glömma. Välj en rutin och håll fast vid den.',
        },
      ],
    },
    quiz: [],
    scenarios: [],
  },
  {
    id: 'sakervapen',
    number: 6,
    title: 'Säker vapenhantering',
    subtitle: 'De grundläggande säkerhetsreglerna – inga undantag',
    emoji: '🛡️',
    duration: '40 min',
    difficulty: 'Grundläggande',
    theory: {
      intro: `Under alla mina år i skogen finns det en sak som alltid stått över allt annat. Säkerheten. Inget vilt, ingen trofé och ingen jaktdag i världen är värd att någon människa skadas. Säker vapenhantering är inte något man gör ibland. Det är ett förhållningssätt som ska sitta i ryggmärgen varje gång du rör vid ett vapen.

Jag har sett hur snabbt en situation kan förändras när någon blir slarvig eller tappar fokus. Därför tjatar jag om det här. Inte för att låta sträng, utan för att jag vet vad som står på spel. I den här modulen går vi igenom grunderna som varje jägare måste leva efter. Följer du dem konsekvent minskar du risken för olyckor dramatiskt och bygger förtroende i jaktlaget.`,
      sections: [
        {
          heading: 'De fyra grundreglerna',
          body: `Det finns fyra grundregler som aldrig får kompromissas bort. Den första är att alltid behandla varje vapen som om det vore laddat. Även om du själv just kontrollerat det. Även om någon annan säger att det är tomt. Det är din kontroll som räknas.

Den andra regeln är att aldrig rikta vapnet mot något du inte är beredd att skjuta. Pipans riktning är avgörande. Den ska alltid peka i en säker riktning där ett oavsiktligt skott inte kan orsaka skada.

Den tredje regeln är att hålla fingret borta från avtryckaren tills du har målet i siktet och har fattat beslut om att skjuta. Fingret ska vila utanför varbygeln tills allt är klart.

Den fjärde regeln är att vara säker på ditt mål och vad som finns bakom det. En kula kan färdas långt. Du ansvarar för hela kulbanan, inte bara för träffen.

De här reglerna är enkla att säga men kräver disciplin att leva efter. Följ dem varje gång så skyddar du både dig själv och andra.`,
          keyPoints: [
            'Behandla alltid vapnet som laddat, oavsett vad du vet eller tror.',
            'Rikta aldrig vapnet mot något du inte är beredd att skjuta.',
            'Fingret ska vara utanför varbygeln tills beslutet att skjuta är fattat.',
            'Var alltid säker på ditt mål och vad som finns bakom det.',
          ],
          tip: 'Repetera de fyra grundreglerna högt för dig själv varje gång du tar upp vapnet. Det låter överdrivet men det bygger en vana som kan rädda liv.',
        },
        {
          heading: 'Laddning och urladdning',
          body: `Laddning och urladdning är moment där många olyckor sker. Det beror nästan alltid på stress eller bristande rutin. Ta det lugnt och gör varje rörelse medvetet.

När du laddar ska vapnet vara riktat i säker riktning. Du kontrollerar att rätt ammunition används och att patronläget är fritt från hinder. Först därefter för du in patronen och stänger mekanismen. Säkringen läggs i säkrat läge direkt.

Vid urladdning gör du samma sak fast i omvänd ordning. Vapnet riktas säkert, magasinet tas ur om det finns och patronläget kontrolleras både visuellt och fysiskt. Titta och känn efter. Lita inte bara på en snabb blick.

En god vana är att alltid visa tomt vapen för jaktkamrat eller jaktledare när det krävs. Öppen mekanism signalerar säkerhet. Stängd mekanism skapar osäkerhet.

Gör laddning och urladdning till en ritual som aldrig stressas igenom. Rutinen är din bästa försäkring mot misstag.`,
          keyPoints: [
            'Rikta alltid vapnet i säker riktning vid laddning och urladdning.',
            'Kontrollera patronläget både visuellt och fysiskt vid urladdning.',
            'Visa alltid tomt vapen med öppen mekanism när det begärs av jaktkamrater.',
          ],
        },
        {
          heading: 'Transport och förvaring av vapen',
          body: `När jaktdagen är över tar inte ansvaret slut. Transport och förvaring är lika viktiga delar av säkerheten. Ett vapen som transporteras ska vara oladdat och under uppsikt. I fordon ska det hanteras så att obehöriga inte får tillgång till det.

Lämna aldrig ett vapen utan kontroll på en plats där någon annan kan komma åt det. Även korta stunder kan få konsekvenser. Det är du som bär ansvaret.

Hemma ska vapnet förvaras i godkänt vapenskåp. Ammunitionen ska hanteras enligt gällande regler och nycklar eller koder ska förvaras så att obehöriga inte når dem. Det här är inte bara en juridisk fråga utan en moralisk.

Jag brukar säga att säkerheten börjar när du låser upp skåpet och slutar när du låser det igen. Allt däremellan ska präglas av samma noggrannhet.`,
          keyPoints: [
            'Vapnet ska vara oladdat och under uppsikt vid all transport.',
            'Lämna aldrig vapnet utan kontroll, inte ens tillfälligt.',
            'Förvara i godkänt vapenskåp. Koder och nycklar ska aldrig vara åtkomliga för obehöriga.',
          ],
        },
        {
          heading: 'Säkerhet i jaktlaget',
          body: `I ett jaktlag är du aldrig ensam. Din säkerhet hänger ihop med andras. Därför måste kommunikationen fungera och reglerna vara tydliga.

Innan jakten börjar ska alla veta var passen är placerade och vilka skjutriktningar som gäller. Ingen ska behöva gissa. Under drevjakt är det särskilt viktigt att hålla reda på var hundförare och andra jägare befinner sig.

Ett skott får aldrig avlossas i tvekan. Ser du inte hela situationen låter du bli. Det är bättre att ångra ett skott du inte tog än att leva med konsekvenserna av ett felaktigt beslut.

Som erfaren jägare föregår du med gott exempel. Du påminner lugnt om säkerheten om någon slarvar och du tar ansvar för stämningen i laget. Säkerhet skapas inte av tur utan av kultur. Den byggs tillsammans, dag för dag, jakt för jakt.`,
          keyPoints: [
            'Alla i jaktlaget ska känna till passplaceringar och skjutriktningar innan jakten börjar.',
            'Avlossa aldrig ett skott i tvekan. Osäkerhet innebär automatiskt stopp.',
            'Säkerhetskultur byggs av alla i laget. Påminn utan att vara aggressiv om någon slarvar.',
          ],
        },
      ],
    },
    quiz: [],
    scenarios: [],
  },
  {
    id: 'jaktmetoder',
    number: 7,
    title: 'Jaktmetoder',
    subtitle: 'Smygjakt, vaktjakt, drevjakt och mer',
    emoji: '🌄',
    duration: '50 min',
    difficulty: 'Mellannivå',
    theory: {
      intro: `Under åren har jag jagat på de flesta sätt som går i det här landet. Ibland ensam i långsam smygande rörelse genom skogen. Ibland tillsammans med ett helt jaktlag där drevet rullat fram över markerna. Varje jaktmetod har sin egen rytm, sina egna krav och sin egen känsla.

Det viktiga är att förstå att metoden alltid ska anpassas efter viltet, terrängen och säkerheten. Det finns inget som är finare eller mer rätt än något annat. Det finns bara det som är lämpligt i situationen. En klok jägare väljer metod med eftertanke och respekt för både djur och medjägare.

I den här modulen går vi igenom de vanligaste jaktformerna i Sverige och hur de fungerar i praktiken. När du förstår metoderna på djupet blir du tryggare i dina beslut och mer effektiv utan att tumma på etiken.`,
      sections: [
        {
          heading: 'Smygjakt och stillajakt',
          body: `Smygjakt är jaktens mest ursprungliga form. Du rör dig långsamt genom terrängen och försöker komma inom skotthåll utan att bli upptäckt. Det kräver tålamod, vindkänsla och förmåga att läsa marken. Varje steg måste placeras med omsorg. En kvist som knäcks vid fel tillfälle kan vara skillnaden mellan framgång och tomt pass.

Stillajakt liknar smygjakt men sker ofta från en fast position under en begränsad tid. Du sitter eller står på en plats där du vet att viltet brukar passera. Det kan vara vid en stig, en kantzon eller ett område med rik födotillgång.

Gemensamt för båda metoderna är att du själv står för rörelsen eller avsaknaden av den. Du är aktiv i ditt sökande, även när du sitter still. Sinnet måste vara vaket hela tiden. Ljud, vindriktning och ljusförhållanden påverkar allt.

Det här är jaktformer som lär dig mycket om naturen. Du kommer nära och tvingas anpassa dig efter viltets villkor. För mig är det här jakt i sin mest koncentrerade form.`,
          keyPoints: [
            'Smygjakt kräver tålamod, vindkänsla och noggrannhet i varje rörelse.',
            'Stillajakt innebär att du väntar på en plats där viltet förväntas passera.',
            'Vinden är avgörande. Placera dig alltid så att din doft bärs bort från viltet.',
          ],
        },
        {
          heading: 'Vaktjakt och lockjakt',
          body: `Vaktjakt bygger på att du placerar dig på en plats där viltet förväntas komma för att äta eller röra sig. Det kan vara vid en åkerkant, en viltåker eller i anslutning till en passage mellan skog och öppen mark. Du sitter stilla under längre tid och låter djuren komma till dig.

Den här formen ställer krav på disciplin. Du måste kunna sitta tyst och koncentrerat, ibland i flera timmar. Samtidigt ska du hela tiden vara beredd på att situationen kan uppstå snabbt. När djuret väl kliver fram finns sällan gott om tid att fundera.

Lockjakt innebär att du med hjälp av ljud försöker få djuret att närma sig. Det används ofta vid jakt på räv eller under rådjursbockens brunst. Rätt utfört kan det vara mycket effektivt. Fel utfört skrämmer du bara bort det som finns i närheten.

Båda metoderna kräver god kunskap om viltets beteende. Du måste veta när på dygnet djuren är aktiva och hur de reagerar på ljud och rörelse. Gör du ditt arbete rätt kan jakten bli både spännande och ansvarsfull.`,
          keyPoints: [
            'Vaktjakt kräver disciplin och uthållighet. Du väntar tills viltet kommer till dig.',
            'Lockjakt lockar djur med ljud. Det kräver kunskap om viltets beteende för att fungera.',
            'Tålamod och koncentration är avgörande för bägge metoderna.',
          ],
          tip: 'Vid vaktjakt vid åkerkant: anländ i god tid, sätt dig stadigt och rör dig så lite som möjligt. De sista minuterna innan viltet kliver fram är när de flesta misstag sker.',
        },
        {
          heading: 'Drevjakt',
          body: `Drevjakt är en social jaktform där flera jägare samarbetar. Några går som drevkarlar eller släpper hund, medan andra står på pass och väntar på att viltet ska röra sig genom området.

Den här jaktformen kräver tydlig planering och stark disciplin. Alla måste veta var passen är och vilka skjutriktningar som gäller. Kommunikation och respekt är avgörande. Det finns inget utrymme för chansningar.

När drevet går genom skogen ökar pulsen. Viltet rör sig ofta snabbt och situationen kan uppstå oväntat. Då gäller det att hålla huvudet kallt. Du skjuter bara när du har full kontroll över mål och bakgrund.

Drevjakt är effektiv vid jakt på exempelvis älg, hjort och vildsvin. Den ger möjlighet att täcka större områden och ger samtidigt en stark känsla av gemenskap. Men det är också en jaktform där säkerheten alltid måste vara högsta prioritet.`,
          keyPoints: [
            'Drevjakt kräver tydlig genomgång av passplaceringar och skjutriktningar innan start.',
            'Alla i laget måste hålla sig till sina positioner under pågående drev.',
            'Viltet rör sig snabbt under drev. Skjut bara vid full kontroll över mål och bakgrund.',
          ],
        },
        {
          heading: 'Jakt med hund',
          body: `Hunden är jägarens äldsta partner. En vältränad jakthund är ett ovärderligt hjälpmedel och en arbetskamrat som kräver respekt.

Olika hundraser används för olika ändamål. Vissa driver viltet mot passkyttar. Andra ställer älg genom att hålla den på plats med skall. Det finns också specialiserade eftersökshundar som spårar skadat vilt.

Att jaga med hund innebär ansvar. Hunden ska vara tränad, lydig och i god kondition. Du måste känna din hund och förstå hur den arbetar. En osäker eller dåligt tränad hund kan skapa farliga situationer.

När samspelet fungerar är jakt med hund något alldeles särskilt. Du delar upplevelsen med en partner som arbetar av instinkt och träning. Det är ett samarbete som bygger på förtroende och som ofta fördjupar jakten.`,
          keyPoints: [
            'Jakthundar används för drivande, ställande och eftersök beroende på ras och träning.',
            'En jakthund måste vara vältränad, lydig och i god kondition.',
            'Samspelet mellan jägare och hund bygger på förtroende och lång träning.',
          ],
        },
        {
          heading: 'Jaktformer per viltslag',
          body: `Olika viltslag kräver olika metoder. Älg jagas ofta med löshund eller genom organiserad drevjakt. Det beror på markens storlek och hur stammen ser ut. Rådjur kan jagas genom smygjakt, vaktjakt eller med drivande hund beroende på terräng och årstid.

Vildsvin lämpar sig ofta för vaktjakt vid födosöksområden eller genom drevjakt där säkerheten är noggrant planerad. Räv kan jagas med lockjakt, vak eller med hund. Skogsfågel jagas ofta genom smygjakt eller med stående fågelhund.

Det viktiga är att metoden anpassas så att jakten sker effektivt och etiskt. Du ska alltid välja det sätt som ger bäst förutsättningar för ett säkert och snabbt avslut.

Med erfarenhet lär du dig vilka metoder som fungerar bäst på dina marker. Det är en kunskap som växer fram med tiden. Och det är just det som gör jakten så levande och ständigt lärande.`,
          keyPoints: [
            'Älg jagas oftast med löshund eller drev. Metoden beror på markens storlek.',
            'Vildsvin passar bra för vaktjakt vid åkrar och utfodringsplatser.',
            'Metoden ska alltid anpassas efter viltart, terräng och säkerhetsförhållanden.',
          ],
        },
      ],
    },
    quiz: [],
    scenarios: [],
  },
  {
    id: 'etik',
    number: 8,
    title: 'Etik och jaktkultur',
    subtitle: 'Respekt för viltet, naturen och jakttraditionen',
    emoji: '🤝',
    duration: '35 min',
    difficulty: 'Grundläggande',
    theory: {
      intro: `Efter mer än tjugo år i skogen har jag kommit fram till att det som verkligen skiljer en jägare från en skytt är etiken. Kunskap och träffsäkerhet är viktiga, men det är värderingarna som styr hur du använder dem. Jakten är inte bara en aktivitet. Den är en del av en kultur som formats under generationer.

Etik handlar om de val du gör när ingen annan ser. Det handlar om hur du talar om viltet, hur du uppträder i jaktlaget och hur du representerar jakten utåt. I en tid när allt fler människor saknar egen koppling till naturen är vårt sätt att agera viktigare än någonsin.

I den här modulen ska vi tala om jägaretik, om respekt för viltet, om samspelet i jaktlaget och om hur allmänheten ser på oss. Det här är kanske den viktigaste delen av hela utbildningen. För utan etik spelar resten mindre roll.`,
      sections: [
        {
          heading: 'Vad är jägaretik?',
          body: `Jägaretik är de oskrivna regler som kompletterar lagstiftningen. Lagen talar om vad du får göra. Etiken talar om vad du bör göra. Den sätter ribban högre än det som är minimikrav.

För mig handlar jägaretik om återhållsamhet och omdöme. Bara för att ett djur är lovligt betyder det inte alltid att det är rätt att skjuta. Du väger in situationen, djurets position, bakgrunden och sammanhanget. Du tänker ett steg längre.

Etiken styr också hur du hanterar misstag. Ingen är ofelbar. Men den som tar ansvar, erkänner fel och gör rätt för sig visar verklig mognad. Att smita undan eller skylla ifrån sig hör inte hemma i jaktkulturen.

Jägaretik är något du bygger över tid. Den formas av förebilder, erfarenheter och egna reflektioner. När du tar den på allvar märks det i ditt sätt att jaga. Du blir lugnare, mer genomtänkt och mer respektfull i varje beslut.`,
          keyPoints: [
            'Etiken sätter ribban högre än lagen. Den styr vad du bör göra, inte bara vad du får.',
            'Återhållsamhet och omdöme är kärnan i god jägaretik.',
            'Att ta ansvar för misstag och göra rätt för sig är ett tecken på mognad.',
          ],
        },
        {
          heading: 'Respekt för viltet',
          body: `Respekt för viltet börjar långt före skottet. Den börjar i hur du förbereder dig och i hur noga du är med att bara ta skott som ger hög sannolikhet för ett snabbt avslut.

Ett djur är aldrig bara en måltavla. Det är en levande varelse som levt fritt i naturen. När du fäller det tar du ansvar för dess liv. Det ansvaret kräver precision, tålamod och ibland förmågan att avstå.

Efter skottet fortsätter respekten. Ett noggrant eftersök om det behövs är självklart. Omhändertagandet av det fällda viltet ska ske värdigt och hygieniskt. Köttet ska tas tillvara på bästa sätt. Att slarva med det är att slarva med själva grunden för jakten.

Jag har alltid känt att tacksamhet är en del av jakten. Inte i högtidliga ord, utan i handling. När du bär ut ett fällt djur ur skogen ska det ske med insikt om vad det innebär. Det är då jakten behåller sin värdighet.`,
          keyPoints: [
            'Ta bara skott med hög sannolikhet för ett snabbt och säkert dödande träff.',
            'Eftersök och värdigt omhändertagande är en självklar del av respekten.',
            'Viltköttet ska alltid tas tillvara. Att slarva med det är oacceptabelt.',
          ],
          tip: 'Lägg av jaktknivet och ta ett ögonblick vid det fällda djuret. Det är en gammal tradition som påminner oss om vad jakten faktiskt innebär.',
        },
        {
          heading: 'Jaktlaget och sociala koder',
          body: `Jakten är ofta en gemenskap. I jaktlaget möts människor med olika erfarenheter och personligheter. För att det ska fungera krävs respekt och tydliga ramar.

Som jägare kommer du in i en kultur där punktlighet, ärlighet och ansvar är självklarheter. Du kommer i tid till samling, du lyssnar på jaktledaren och du följer de regler som satts upp. Det är inte för att någon vill bestämma över dig, utan för att säkerhet och förtroende bygger på struktur.

Samtidigt finns en kamratskap som är svår att hitta på andra platser. Samtalen vid brasan, skratten och delade erfarenheter är en stor del av jakten. Men den kulturen fungerar bara om alla bidrar.

En god jaktkamrat är den som delar med sig av kunskap, hjälper till med praktiska sysslor och ställer upp när något behöver göras. Det är så ett starkt jaktlag byggs, över tid och genom gemensamt ansvar.`,
          keyPoints: [
            'Punktlighet, ärlighet och ansvar är grundläggande normer i jaktkulturen.',
            'Lyssna på jaktledaren och håll dig till överenskomna regler.',
            'Bidra aktivt till laget. Gemensamt ansvar är grunden för ett fungerande jaktlag.',
          ],
        },
        {
          heading: 'Allmänhetens syn på jakt',
          body: `Vi lever i ett samhälle där långt ifrån alla jagar. Många har ingen egen erfarenhet av hur jakt går till. Deras bild formas av det de ser och hör. Därför bär vi ett ansvar även utanför skogen.

Hur du talar om jakt, hur du hanterar bilder i sociala medier och hur du uppträder i möten med andra människor påverkar mer än du tror. Arrogans och nonchalans skadar förtroendet. Saklighet och öppenhet bygger det.

När någon ställer frågor om jakten är det en möjlighet att förklara varför vi jagar och hur vi tar ansvar för vilt och natur. De flesta uppskattar ärliga svar.

Jakten i Sverige vilar på ett starkt stöd från samhället. Det stödet är inget vi kan ta för givet. Det förvaltas genom vårt beteende. Varje gång du kliver ut ur skogen representerar du mer än dig själv. Du representerar en tradition som är värd att vårda.`,
          keyPoints: [
            'Ditt uppträdande utanför skogen påverkar hur hela jägarkåren uppfattas.',
            'Möt frågor om jakt med saklighet och öppenhet, inte arrogans.',
            'Allmänhetens förtroende för jakten förvaltas av varje enskild jägare.',
          ],
        },
      ],
    },
    quiz: [],
    scenarios: [],
  },
]

export function getModule(id: string): Module | undefined {
  return modules.find(m => m.id === id)
}

export function getModuleByNumber(n: number): Module | undefined {
  return modules.find(m => m.number === n)
}

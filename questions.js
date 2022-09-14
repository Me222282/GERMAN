function remove(array, item)
{
    var index = array.indexOf(item);
    if (index < 0) { return; }
    array.splice(index, 1);
}

var q11f = [
    ["to get on (with)", ["auskommen", "auskommen mit"]],
    ["to look like, to appear", ["aussehen"]],
    ["both", ["beide"]],
    ["to describe", ["beschreiben"]],
    ["certainly", ["bestimmt"]],
    ["cousin (m)", ["Cousin", "Cousins"]],
    ["cousin (f)", ["Cousine", "Cousinen"]],
    ["family", ["Familie", "Familien"]],
    ["woman, wife", ["Frau", "Frauen"]],
    ["(girl)friend", ["Freundin", "Freundinnen"]],
    ["to give", ["geben"]],
    ["to like, to please", ["gefallen"]],
    ["community, group", ["Gemeinschaft", "Gemeinschaften"]],
    ["present, gift", ["Geschenk", "Geschenke"]],
    ["divorced", ["geschieden"]],
    ["there is / are", ["es gibt"]],
    ["to be lucky", ["Glück haben"]],
    ["happy", ["glücklich"]],
    ["grandparents (pl)", ["Großeltern"]],
    ["grandmother", ["Großmutter"]],
    ["grandfather", ["Großvater"]],
    ["each, every", ["jeder / jede / jedes"]],
    ["single, unmarried", ["ledig"]],
    ["loving, affectionate", ["liebevoll"]],
    ["morning", ["Morgen"]],
    ["to get on one's nerves", ["auf die Nerven gehen"]],
    ["granny, grandma", ["Oma", "Omas"]],
    ["uncle", ["Onkel"]],
    ["grandad", ["Opa", "Opas"]],
    ["partner (m)", ["Partner"]],
    ["partner (f)", ["Partnerin", "Partnerinnen"]],
    ["person", ["Person", "Personen"]],
    ["town", ["Stadt", "Stadte"]],
    ["stepbrother", ["Stiefbruder"]],
    ["stepmother", ["Stiefmutter"]],
    ["stepsister", ["Stiefschwester", "Stiefschwestern"]],
    ["stepfather", ["Stiefvater"]],
    ["aunt", ["Tante", "Tanten"]],
    ["pocket money", ["Taschengeld", "Taschengelder"]],
    ["relationship", ["Verhältnis", "Verhältnisse"]],
    ["married", ["verheiratet"]],
    ["engaged (to someone)", ["verlobt"]],
    ["to get on (with)", ["sich verstehen", "sich verstehen mit"]],
    ["to call in, drop by", ["vorbeikommen"]],
    ["widow", ["Witwe", "Witwen"]],
    ["to live, reside", ["wohnen"]],
    ["three (of us)", ["zu dritt"]],
    ["together", ["zusammen"]],
    ["holidays", ["Feiertage"]],
    ["to do", ["machen"]],
    ["sometimes", ["manchmal"]],
    ["favourite present", ["Lieblingsgeschenk"]],
    ["important", ["wichtig"]],
    ["blond", ["blonde", "blond", "blondes"]],
    ["brown", ["braune", "braun"]],
    ["black", ["schwarz", "schwarzes"]],
    ["curly", ["lockige", "lockig"]],
    ["straight", ["glatte"]],
    ["long", ["lange"]],
    ["short (hair)", ["kurze", "kurze Haare"]],
    ["short (person)", ["klein", "kleine Person"]],
    ["tall", ["groß"]],
    ["slimm", ["schlank"]],
    ["guitar", ["Gitarre"]],
    ["piano", ["Klavier"]],
    ["will", ["werden"]],
    ["to want", ["wollen"]],
    ["to go", ["gehen"]],
    ["to see", ["sehen"]],
    ["hotel", ["Hotel"]],
    ["party", ["Party"]],
    ["cake", ["Kuchen"]],
    ["cinema", ["Kino"]],
    ["pizza", ["Pizza"]],
    ["ice cream", ["Eis"]],
    ["go karting", ["Kart"]],
    ["my friend's house", ["das Haus meines Freundes"]],
    ["video games", ["Videospiele"]],
    ["listen", ["hören"]],
    ["music", ["Musik"]],
    ["swimming", ["schwimmen"]]
];

var q12f = [
    ["in a different way", ["anders"]],
    ["excited", ["aufgeregt"]],
    ["both", ["beide"]],
    ["certainly", ["bestimmit"]],
    ["to need", ["brauchen"]],
    ["against", ["dagegen"]],
    ["to last", ["dauern"]],
    ["married couple", ["Ehepaar", "Ehepaare"]],
    ["honest", ["ehrlich"]],
    ["to wait, to expect", ["erwarten"]],
    ["to look forward to", ["sich freuen auf"]],
    ["patient", ["geduldig"]],
    ["society", ["Gesellschaft", "Gesellschaften"]],
    ["golden wedding", ["goldene Hochzeit"]],
    ["to live", ["leben"]],
    ["lifestyle", ["Lebensstil", "Lebensstile"]],
    ["to solve", ["lösen"]],
    ["something good", ["etwas Positives"]],
    ["risk", ["Risiko", "Risiken"]],
    ["for (a period of time), since", ["seit"]],
    ["to get divorced", ["sich scheiden lassen"]],
    ["to have a sense of humour", ["einen Sinn für Humor haben"]],
    ["stability", ["Stabilität"]],
    ["argument", ["Streit", "Streite"]],
    ["to look for, to search", ["suchen"]],
    ["to separate", ["sich trennen"]],
    ["outdated", ["veraltet"]],
    ["waste", ["Verschwendung"]],
    ["understanding (adj)", ["verständnisvoll"]],
    ["to try", ["versuchen"]],
    ["flat, apartment", ["Wohnung", "Wohnungen"]]
];

var q21f = [
    ["to accept", ["akzeptieren"]],
    ["to change", ["ändern"]],
    ["to pay attention,to watch out, to take care", ["aufpassen"]],
    ["popular", ["beliebt"]],
    ["job, profession", ["Beruf", "Berufe"]],
    ["famous", ["berühmt"]],
    ["data (pl)", ["Daten"]],
    ["therefore, because of that", ["deshalb"]],
    ["as well", ["ebenfalls"]],
    ["either", ["entweder"]],
    ["or", ["oder"]],
    ["danger", ["Gefahr", "Gefahren"]],
    ["(the) same, equal, immediately", ["gleich"]],
    ["informed", ["informiert"]],
    ["content", ["Inhalt", "Inhalte"]],
    ["to communicate", ["kommunizieren"]],
    ["to control", ["kontrollieren"]],
    ["free of charge", ["kostenlos"]],
    ["mostly, usually", ["meist"]],
    ["to misuse, to abuse", ["missbrauchen"]],
    ["misunderstanding", ["Missverständnis", "Missverständnisse"]],
    ["message, news", ["Nachricht", "Nachrichten"]],
    ["user", ["Nutzer", "Nutze"]],
    ["password", ["Passwort", "Passwörter"]],
    ["embarrassing", ["peinlich"]],
    ["private", ["privat"]],
    ["piece of advice", ["Ratschlag", "Ratschläge"]],
    ["regular, regularly", ["regelmäßig"]],
    ["24/7", ["rund um die Uhr"]],
    ["all around the world", ["rund um die Welt"]],
    ["to send", ["schicken"]],
    ["to protect", ["schützen"]],
    ["sure, safe, secure", ["sicher"]],
    ["text", ["SMS"]],
    ["nickname", ["Spitzname", "Spitznamen"]],
    ["every day, daily", ["täglich"]],
    ["unknown", ["unbekannt"]],
    ["inexperienced", ["unerfahren"]],
    ["various, different", ["verschieden"]],
    ["careful", ["vorsichtig"]],
    ["character (in text)", ["Zeichen", "Zeiche"]],
    ["to destroy", ["zerstören"]],
    ["purpose", ["Zweck", "Zwecke"]],
    
    ["alarming", ["alarmierend"]],
    ["outsider", ["Außenseiter", "Außenseite"]],
    ["threat", ["Bedrohung", "Bedrohungen"]],
    ["insult", ["Beleidigung", "Beleidigungen"]],
    ["worrying", ["beunruhigend"]],
    ["letter", ["Brief", "Briefe"]],
    ["date", ["Datum", "Daten"]],
    ["influence", ["Einfluss", "Einflüsse"]],
    ["purchase", ["Einkauf", "Einkäufe"]],
    ["email", ["E-mail", "E-mails"]],
    ["experience", ["Erlebnis", "Erlebnisse"]],
    ["to tell, to narrate", ["erzählen"]],
    ["to keep secret", ["geheim halten"]],
    ["to ignore", ["ignorieren"]],
    ["isolating", ["isolierend"]],
    ["the cold shoulder", ["kalte Schulter"]],
    ["vital", ["lebensnotwendig"]],
    ["educational, informative", ["lehrreich"]],
    ["unfortunately", ["leider"]],
    ["to bully", ["mobben"]],
    ["network", ["Netzwerk", "Netzwerke"]],
    ["recently", ["neulich"]],
    ["risky", ["riskant"]],
    ["role", ["Rolle", "Rollen"]],
    ["bad", ["schlimm"]],
    ["protection", ["Schutz"]],
    ["security settings (pl)", ["Sicherheitseinstellungen"]],
    ["immediately, straight away", ["sofort"]],
    ["technology", ["Technologie", "Technologien"]],
    ["uncontrollable", ["unkontrollierbar"]],
    ["entertaining", ["unterhaltsam"]],
    ["in contact", ["in Verbindung"]],
    ["to conceal, to hide", ["verheimlichen"]],
    ["to publish", ["veröffentlichen"]],
    ["to show", ["zeigen"]]
];

var q22f =[
    ["old-fashioned", ["altmodisch"]],
    ["connection", ["Anschluss", "Anschlüsse"]],
    ["special, particularly, especially", ["besonders"]],
    ["stupid", ["blöd"]],
    ["thingy", ["Dings"]],
    ["stupid thing, foolishness", ["Dummheit", "Dummheiten"]],
    ["once", ["einmal"]],
    ["money", ["Geld"]],
    ["device, gadget, appliance", ["Gerät", "Geräte"]],
    ["certain", ["gewiss"]],
    ["at any time", ["jederzeit"]],
    ["diary, calendar", ["Kalender", "Kalende"]],
    ["ringtone", ["Klingelton", "Klingeltöne"]],
    ["to concentrate", ["sich konzentrieren"]],
    ["to take with (you)", ["mitnehmen"]],
    ["necessary", ["nötig"]],
    ["that's right / correct", ["das stimmt"]],
    ["study, research", ["Studie"]],
    ["tariff, scale of charges", ["Tarif", "Tarife"]],
    ["perhaps", ["vielleicht"]],
    ["alarm clock", ["Wecker", "Wecke"]],
    ["route, way, path", ["Weg", "Wege"]],
    ["to show", ["zeigen"]]
];

var q31f = [
    ["to start, to begin", ["anfangen"]],
    ["to watch, to look at", ["angucken", "ansehen"]],
    ["sold out", ["ausverkauft"]],
    ["German-speaking", ["deutschsprachig"]],
    ["successful", ["erfolgreich"]],
    ["it's about", ["es geht um"]],
    ["starring role, main role", ["Hauptrolle", "Hauptrollen"]],
    ["to release (record etc.)", ["herausbringen"]],
    ["to meet, to get to know", ["kennenlernen"]],
    ["comedy", ["Komödie", "Komödien"]],
    ["member", ["Mitglied", "Mitglieder"]],
    ["record company", ["Plattenfirma", "Plattenfirmaen"]],
    ["drum kit", ["Schlagzeug"]],
    ["tour", ["Tournee", "Tournees"]],
    ["to sell", ["verkaufen"]],
    ["worldwide", ["weltweit"]]
];

var q32f = [
    ["eel soup", ["Aalsuppe"]],
    ["dinner, evening meal", ["Abendessen", "Abendesse"]],
    ["to have no idea", ["keine Ahnung haben"]],
    ["the old part of town", ["Altstadt"]],
    ["roast chicken", ["Brathähnchen", "Brathähnche"]],
    ["spicy sausage", ["Currywurst", "Currywürste"]],
    ["meatball", ["Frikadelle", "Frikadellen"]],
    ["breakfast", ["Frühstück", "Frühstücke"]],
    ["to enjoy", ["genießen"]],
    ["chicken", ["Hähnchen", "Hähnche"]],
    ["raspberry", ["Himbeere", "Himbeeren"]],
    ["honey", ["Honig"]],
    ["to be hungry", ["Hunger haben"]],
    ["potato", ["Kartoffel", "Kartoffeln"]],
    ["cuisine, kitchen", ["Küche", "Küchen"]],
    ["fridge", ["Kühlschrank", "Kühlschränke"]],
    ["lunch", ["Mittagessen", "Mittagesse"]],
    ["cream", ["Sahne"]],
    ["ham sandwich", ["Schinkenbrot", "Schinkenbrote"]],
    ["soup", ["Suppe", "Suppen"]]
];

var q33f = [
    ["to leave, to depart, to go off", ["abfahren"]],
    ["to enjoy oneself", ["sich amüsieren"]],
    ["hard work, effortful", ["anstrengend"]],
    ["trip, excursion", ["Ausflug", "Ausflüge"]],
    ["to bathe, to swim", ["baden gehen"]],
    ["visit", ["Besuch", "Besuche"]],
    ["recorder", ["Blockflöte", "Blockflöten"]],
    ["thing", ["Ding", "Dinge"]],
    ["tiring", ["ermüdend"]],
    ["fencing", ["Fechten"]],
    ["to get a breath of fresh air", ["frische Luft schnappen"]],
    ["guided tour", ["Führungen"]],
    ["Führung", ["Grillabend", "Grillabende"]],
    ["great", ["großartig"]],
    ["to juggle", ["jonglieren"]],
    ["youth club", ["Jugendklub", "Jugendklubs"]],
    ["bowling alley", ["Kegelbahn", "Kegelbahnen"]],
    ["to bowl", ["kegeln"]],
    ["cookery course", ["Kochkurs", "Kochkurse"]],
    ["art gallery", ["Kunstgalerie", "Kunstgalerien"]],
    ["coach", ["Reisebus", "Reisebusse"]],
    ["chess", ["Schach"]],
    ["to sunbathe", ["sich sonnen"]],
    ["to take part, to join in", ["teilnehmen"]],
    ["table tennis", ["Tischtennis"]],
    ["tournament", ["Turnier", "Turniere"]],
    ["to hike, to walk", ["wandern"]],
    ["hike", ["Wanderung", "Wanderungen"]]
];

var q41f = [
    ["acquaintance, friend", ["Bekannte", "Bekannten"]],
    ["to report", ["berichten"]],
    ["(fried) sausage", ["Bratwurst", "Bratwürste"]],
    ["brightly coloured", ["bunt"]],
    ["to celebrate", ["feiern"]],
    ["firework (display)", ["Feuerwerk", "Feuerwerke"]],
    ["spring", ["Frühling"]],
    ["poem", ["Gedicht", "Gedichte"]],
    ["loved one", ["Geliebte", "Geliebten"]],
    ["ghost", ["Gespenst", "Gespenster"]],
    ["to barbecue", ["grillen"]],
    ["spooky", ["gruselig"]],
    ["the good thing", ["Gute"]],
    ["heart", ["Herz", "Herzen"]],
    ["heart-shaped", ["herzförmig"]],
    ["witch", ["Hexe", "Hexen"]],
    ["cardboard, cardboard box", ["Karton"]],
    ["childish", ["kindisch"]],
    ["cheesy", ["kitschig"]],
    ["to stick", ["kleben"]],
    ["funny, comical, strange, odd", ["komisch"]],
    ["costume", ["Kostüm", "Kostüme"]],
    ["pumpkin", ["Kürbis", "Kürbisse"]],
    ["lantern", ["Laterne", "Laternen"]],
    ["neighbour", ["Nachbar", "Nachbarn"]],
    ["teddy bear", ["Plüschbär", "Plüschbären"]],
    ["chocolate (in a box of chocolates)", ["Praline", "Pralinen"]],
    ["street party", ["Straßenfest", "Straßenfeste"]],
    ["trick", ["Streich", "Streiche"]],
    ["Valentine's Day", ["Valentinstag", "Valentinstage"]],
    ["to put on fancy dress, to dress up, to disguise oneself", ["sich verkleiden"]],
    ["magician", ["Zauberer", "Zaubere"]]
];

var q42f = [
    ["to get, to receive", ["bekommen"]],
    ["especially", ["besonders"]],
    ["naughty, evil, angry", ["böse"]],
    ["carnival", ["Karneval", "Fasching", "Fastnacht"]],
    ["period of fasting, Lent", ["Fastenzeit"]],
    ["celebration", ["Feier", "Festlichkeit", "Festlichkeiten"]],
    ["prayer", ["Gebet", "Gebete"]],
    ["spirits (pl)", ["Geister"]],
    ["exact, exactly", ["genau"]],
    ["bell", ["Glocke", "Glocken"]],
    ["holy", ["heilig"]],
    ["horn, klaxon", ["Hupe", "Hupen"]],
    ["customer (m)", ["Kunde", "Kunden"]],
    ["customer (f)", ["Kundin", "Kundinnen"]],
    ["light", ["Licht", "Lichter"]],
    ["crowd", ["Menge", "Mengen"]],
    ["to join in", ["mitmachen"]],
    ["mosque", ["Moschee", "Moscheen"]],
    ["to come from, to date from", ["stammen aus"]],
    ["everywhere", ["überall"]],
    ["street procession", ["Umzug", "Umzüge"]],
    ["to drive out, to expel", ["vertreiben"]],
    ["relatives (pl)", ["Verwandten"]],
    ["to prepare", ["vorbereiten"]],
    ["float (in a procession)", ["Wagen", "Wage"]],
    ["to awaken", ["wecken"]],
    ["to drive away", ["wegtreiben"]],
    ["time", ["Zeit"]]
];

var q51f = [
    ["on", ["an"]],
    ["on (top of)", ["auf"]],
    ["blanket, duvet", ["Bettdecke", "Bettdecken"]],
    ["bookshelf", ["Bücherregal", "Bücherregale"]],
    ["semi-detached house", ["Doppelhaus", "Doppelhäuser"]],
    ["own (adj)", ["eigen"]],
    ["detached house", ["Einfamilienhaus", "Einfamilienhäuser"]],
    ["fortunately", ["zum Glück"]],
    ["behind", ["hinter"]],
    ["high-rise block of flats", ["Hochhäuser"]],
    ["broken", ["kaputt"]],
    ["wardrobe", ["Kleiderschränke"]],
    ["pillow", ["Kopfkissen", "Kopfkisse"]],
    ["bedside cabinet", ["Nachttisch", "Nachttische"]],
    ["plant", ["Pflanze", "Pflanzen"]],
    ["terraced house", ["Reihenhaus", "Reihenhäuser"]],
    ["drawer", ["Schublade", "Schubladen"]],
    ["outskirts of town", ["Stadtrand", "Stadtränder"]],
    ["untidy", ["unordentlich"]],
    ["under", ["unter"]],
    ["in front of, before, outside", ["vor"]],
    ["wall (inside)", ["Wand", "Wände"]],
    ["block of flats", ["Wohnblock", "Wohnblocks"]],
    ["(in) between", ["zwischen"]]
];

var q52f = [
    ["pharmacy", ["Apotheke", "Apotheken"]],
    ["bakery, baker's shop", ["Bäckerei", "Bäckereien"]],
    ["a little, a bit", ["ein bisschen"]],
    ["roof", ["Dach", "Dächer"]],
    ["monument", ["Denkmäler"]],
    ["inhabitant", ["Einwohner", "Einwohne"]],
    ["shop for electrical goods", ["Elektrogeschäft", "Elektrogeschäfte"]],
    ["factory", ["Fabrik", "Fabriken"]],
    ["hairdresser (m)", ["Friseur", "Friseure"]],
    ["hairdresser (f)", ["Friseurin", "Friseurinnen"]],
    ["pedestrian precinct", ["Fußgängerzone", "Fußgängerzonen"]],
    ["region, area", ["Gegend", "Gegenden"]],
    ["business, shop", ["Geschäft", "Geschäfte"]],
    ["harbour, port", ["Hafen", "Häfe"]],
    ["main railway station", ["Hauptbahnhof", "Häuptbahnhofe"]],
    ["capital city", ["Hauptstadt", "Häuptstadte"]],
    ["jeweller's shop", ["Juweliergeschäft", "Juweliergeschäfte"]],
    ["department store", ["Kaufhaus", "Kaufhäuser"]],
    ["clothes shop", ["Kleidergeschäft", "Kleidergeschäfte"]],
    ["confectioner's", ["Konditorei", "Konditoreien"]],
    ["crossroads", ["Kreuzung", "Kreuzungen"]],
    ["shop", ["Laden", "Läde"]],
    ["grocer's shop", ["Lebensmittelgeschäft", "Lebensmittelgeschäfte"]],
    ["marketplace", ["Marktplatz", "Marktplätze"]],
    ["wall (outside)", ["Mauer", "Mauern"]],
    ["butcher's shop", ["Metzgerei", "Metzgereien"]],
    ["greengrocer's shop", ["Obst und Gemüseladen", "Obstläden und Gemüseladen"]],
    ["public transport (pl)", ["öffentliche Verkehrsmittel"]],
    ["parking space", ["Parkplatz", "Parkplätze"]],
    ["price", ["Preis", "Preise"]],
    ["cheap, value for money", ["preiswert"]],
    ["dry-cleaner's", ["Reinigung", "Reinigungen"]],
    ["suburban (fast) railway", ["S-Bahn", "S-Bahnen"]],
    ["even", ["sogar"]],
    ["(savings) bank", ["Sparkasse", "Sparkassen"]],
    ["suburb", ["Vorort", "Vororte"]],
    ["department store", ["Warenhaus", "Warenhäuser"]]
];

var s11f = false;
function select11f()
{
    s11f = !s11f;
    
    if (s11f)
    {
        selectedQs.push("11f");
        return;
    }
    
    remove(selectedQs, "11f");
}

var s12f = false;
function select12f()
{
    s12f = !s12f;
    
    if (s12f)
    {
        selectedQs.push("12f");
        return;
    }
    
    remove(selectedQs, "12f");
}

var s21f = false;
function select21f()
{
    s21f = !s21f;
    
    if (s21f)
    {
        selectedQs.push("21f");
        return;
    }
    
    remove(selectedQs, "21f");
}

var s22f = false;
function select22f()
{
    s22f = !s22f;
    
    if (s22f)
    {
        selectedQs.push("22f");
        return;
    }
    
    remove(selectedQs, "22f");
}

var s31f = false;
function select31f()
{
    s31f = !s31f;
    
    if (s31f)
    {
        selectedQs.push("31f");
        return;
    }
    
    remove(selectedQs, "31f");
}

var s32f = false;
function select32f()
{
    s32f = !s32f;
    
    if (s32f)
    {
        selectedQs.push("32f");
        return;
    }
    
    remove(selectedQs, "32f");
}

var s33f = false;
function select33f()
{
    s33f = !s33f;
    
    if (s33f)
    {
        selectedQs.push("33f");
        return;
    }
    
    remove(selectedQs, "33f");
}

var s41f = false;
function select41f()
{
    s41f = !s41f;
    
    if (s41f)
    {
        selectedQs.push("41f");
        return;
    }
    
    remove(selectedQs, "41f");
}

var s42f = false;
function select42f()
{
    s42f = !s42f;
    
    if (s42f)
    {
        selectedQs.push("42f");
        return;
    }
    
    remove(selectedQs, "42f");
}

var s51f = false;
function select51f()
{
    s51f = !s51f;
    
    if (s51f)
    {
        selectedQs.push("51f");
        return;
    }
    
    remove(selectedQs, "51f");
}

var s52f = false;
function select52f()
{
    s52f = !s52f;
    
    if (s52f)
    {
        selectedQs.push("52f");
        return;
    }
    
    remove(selectedQs, "52f");
}
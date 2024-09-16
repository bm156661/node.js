console.log('Booleans')
console.log('========')

console.log('Boolische Werte sind Wahrheitswerte,die wahr(true) oder falsch(false) annehmen können.')

//Wahrheitswerte kennen wir bereits aus der Wenn-Funktion in Excel 

console.log('Aufgabe 01')

// Weil in dieser Aufgabe die Prüfung immer wahr ist if(true), wird immer die Anweisung hinter if ausgeführt. Die Anweisung hinter else kommt niemals zur Ausführung.
if (true){
    console.log('Der Ausdruck ist wahr')
}else{
    console.log('Der Ausdruck ist unwahr/falsch/false.')
}


console.log('Aufgabe 2')
//In Erweiterung von Aufgabe 1 soll der Ausdruck dynamisch entweder true oder false sein.

let a = 5 

//Hier wird mit einem Prüfoperator auf wahr oder falsch geprüft.

//Prüfoperatoren: 
// == : Prüfung auf Gleichheit im Wert Bsp: if(1 == '1') true
// === : Prüfung auf Gleichheit im Wert und im Typ  Bsp: if(1 === '1') false
// < : kleiner als 
// > : größer als 
// >== :größer oder gleich
// <== : kleiner oder gleich 

if (a>6){
    console.log('Der Ausdruck ist wahr')
}else{
    console.log('Der Ausdruck ist unwahr/falsch/false.')
}


console.log('Aufgabe 3')
//Wenn die Schülerin 16 oder jünger ist, muss sie Fahrrad fahren,wenn sie 17 ist, darf sie Begleitet fahren, wenn sie 18 ist darf sie fahren.
//Vorraussetzung für das fahren ist der Führerschein

let Alter = 18;
let Führerschein = true;

if (Alter<17 || Führerschein === false){ //Wenn die Schülerin 16 ist oder keinen Führerschein hat oder beides, dann muss sie Fahrrad fahren.
    console.log('Die Schülerin muss Fahrrad fahren.')
}

if(Alter===17 && Führerschein === true){ //Wenn die Schülerin 17 ist und einen Führerschein hat, dann darf sie Begleitet fahren, sonst nicht.
    console.log('Die Schülerin darf Begleitet fahren')
}

if(Alter>17 && Führerschein === true){ //Wenn die Schülerin 18 ist und einen Führerschein hat, dann darf sie fahren, sonst nicht.
    console.log('Die Schülerin darf fahren')
}

//Andere Lösung 

if(Führerschein){ //Führerschein ist bereits true oder false, es bedarf keines Vergleichsoperators.

    if(Alter === 17){
        console.log('begleitend fahren')
    }else{
        console.log('darf fahren')
    }

}else{
    console.log('Fahrrad fahren')
}


console.log('Aufgabe 4')
//Zahlen können in Javascript true oder false sein. 

let zahl = 1

if(zahl){
    console.log('Die Zahl ' + zahl + ' nimmt den boolichen Wert true')
}else{
    console.log('Die Zahl ' + zahl + ' nimmt den boolichen Wert false')
}
    
//Positive Zahlen sind true
//Die 0 ist false 
//Negative Zahlen sind auch true 


console.log('Aufgabe 5')
//Auf einem Sparkonto soll bei einem positiven Kontostand auf der console stehen: 'Zinsen berechnen'
//Wenn kein Guthaben existiert: 'keine Zinsen'

let kontostand = 0

if(kontostand){ //Auf den Prüfoperator kann verzichtet werden, da Zahlen bereits true oder false sind (siehe Aufgabe 4)
    console.log('Zinsen berechnen für Kontostand ' + kontostand)
}else{
    console.log('keine Zinsen, da Kontostand 0')
}

console.log('Aufgabe 6')
//Wenn die Personen die mit einem Aufzug fahren wollen, schwerer als 150kg sind, darf der Aufzug nciht benutzt werden 

let Gewicht = 151

if(Gewicht <= 150){
    console.log('Der Aufzug darf bei ' + Gewicht + ' kg benutzt werden')
}else{
    console.log('Der Aufzug darf bei ' + Gewicht + ' kg nicht benutzt werden')
}

console.log('Beispiel Herr Bäumer')
//In der Bundesliga gibt es Punkte für Spiele 
//Sieg: 3 Punkte
//Unentschieden: 1 Punkt 
//Niederlage: 0 Punkte

let spielausgang = 'sieg'
let mannschaft = 'Bayern München'

if(spielausgang == 'sieg'){
    console.log('Es gibt 3 Punkte')
}
if(spielausgang == 'Unentschieden'){
    console.log('Es gibt 1 Punkt')
}
if(spielausgang == 'Niederlage'){
    console.log('Es gibt 0 Punkte')
}
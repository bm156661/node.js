console.log('Objekte')
console.log('=======')

//Bislang speichern wir Werte in Variablen.
//Bsp: let vorname = 'Hans'
//Jede Variable nimmt genau einen Wert auf. In dem Beispiel ist der Wert Hans.
//In der realen Welt gibt es Objekte, über die mehrere Werte abgespeichert werden sollen. 
//Bsp: Schüler im Schulverwaltungsprogramm, Interessierende Eigenschaften: Vorname, Nachname, Klasse, Geburtsdatum, Anschrift, Daten der Eltern...
//Bislang haben wir das so gelöst: 
//let vorname = 'Hans'
//let klasse = 'GW23A'
//let...
//Problem: Die EIgenschaften stehen in keinem Zusammenhang 
//Um den Zusammenhang zwischen einzelnen Werten herzustellen, gibt es Klassen und Objekte
//Zunächst legt der Programmierer zur Entwicklungszeit die Baupläne (Klassen) fest, nach denen Objekte zur Laufzeit erstellt werden. 
//Und das geht so:

class Schueler{
    constructor(){
        this.Vorname
        this.Nachname
        this.Klasse
    }
}

//Die Objekte werde nun aus dem Bauplan (=Klasse) wie folgt erzeugt:

let schueler = new Schueler()
schueler.Vorname = 'Hans'
schueler.Nachname = 'Meyer'
schueler.Klasse = 'GW23A'

//Die Werte können wieder ausgegeben werden:

console.log('Nachname: ' + schueler.Nachname + ', Vorname: ' + schueler.Vorname)

let schueler2 = new Schueler()
schueler2.Vorname = 'Pit'
schueler2.Nachname = 'Müller'
schueler2.Klasse = 'GW23A'

console.log('Nachname: ' + schueler2.Nachname + ', Vorname: ' + schueler2.Vorname)

//Um aus dem Bauplan (=Klasse) ein konkretes Objekt zu erzeugen, sind 3 Schritte notwendig:
//1. DEKLARATION: let schueler 
//                Bei der Deklaration wird bekanntgegeben, dass es ein Objekt namens schueler geben soll. 
//2. INSTANZIIERUNG: = new Schueler()
//                     Bei Instanziierung werden Speicherzellen im Arbeitsspeicher reserviert, um Eigenschaftswerte aufzunehmen. 
//3. INITIALISIERUNG: schueler.Nachname = 'Schmidt'
//                    Bei der Initialisierung werden konkrete Werte in die Speicherzellen geschrieben.

console.log('Aufgabe 1')
//Für eine Autovermietung sollen Autos verwaltet werden. Erstelle den Bauplan, um dann 3 Objekte zu istanziieren.  

class Auto{
    constructor(){
        this.Marke
        this.Herstellungsdatum
        this.Farbe
    }
}

//Aus dem Bauplan werden nun 3 Objekte deklariert und instanziiert:

let borAb123 = new Auto();
let borXy876 = new Auto();
let borQz253 = new Auto();

//Initialisierung: 
borAb123.Marke = 'Audi'
borAb123.Baujahr = 2000 //Zahlen ohne Anführungszeichen
borAb123.Farbe = 'schwarz'

console.log ('Das besagte Auto von der Autovermietung ist von der Marke ' + borAb123.Marke + ', wurde im Jahr ' + borAb123.Baujahr + ' gebaut und hat die Farbe ' + borAb123.Farbe + '.')

console.log('Aufgabe 2')
//Deklariere, instanziiere und initialisiere ein Objekt der realen Welt der eigenen Wahl

class Buch{
    constructor(){
        this.Buchtitel
        this.Genre
        this.Autor
    }
} 

let buch1 = new Buch();
let buch2 = new Buch();
let buch3 = new Buch();

buch1.Buchtitel = 'Nur noch ein einziges Mal'
buch1.Genre = 'Psychothriller'
buch1.Autor = 'Colleen Hoover'

console.log('Buchtitel: ' + buch1.Buchtitel + ', Genre: ' + buch1.Genre + ', Autor*in: ' + buch1.Autor)

console.log("Aufgabe Klausur")
// 1a) 
// Es soll das Volumen eines Würfels in Quadratzentimeter (cm3) ausgegeben werden. Arbeiten Sie mit einem Objekt und sprechenden Eigenschaften.
// Geben Sie das Volumen in einem Antwortsatz auf der Konsole aus.

//Das ist der Bauplan, aus dem im Folgenden die Würfel-Objekte erzeugt werden sollen. Ohne diese Klassendefinition (=Bauplan) können keine Objekte instanziiert werden.

//NEU: Man kann die Berechnung auch zu einer Funktion innerhalb der Klasse abbilden. 
//Dazu muss in die Klasse unterhalb des Constructors die Funktion BerechneVolumen() eingebaut werden.
//Alternative Berechnung mit der Funktion BerechneVolumen():

class Wuerfel{
    constructor(){
        this.Seitenlaenge 
        this.Volumen
    } 
    BerechneVolumen(){
        this.Volumen =  this.Seitenlaenge *  this.Seitenlaenge *  this.Seitenlaenge 
    }
}

let wuerfel = new Wuerfel()
wuerfel.Seitenlaenge = 20 
this.Volumen = 

console.log('Das Volumen des Würfels mit der Seitenlänge ' + wuerfel.Seitenlaenge + ' beträgt ' + this.Volumen + ' cm3.')

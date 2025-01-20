//Klassendefinition des Kunden 
class Kunde{
	constructor(){
		this.Nachname
		this.Vorname
		this.benutzername
		this.Kennwort
		this.IstEingeloggt
	}
}

//Kundenobjekt deklariert und instanziiert
let kunde = new Kunde();

//Kundenobjekt initialisiert 
kunde.Nachname = 'Kiff'
kunde.Vorname = 'Pitt'
kunde.benutzername = 'pk'
kunde.Kennwort = '123'
kunde.IstEingeloggt = 'false'


//Klassendefinition des Kundenberaters
class Kundenberater{
	constructor(){
		this.Nachname
		this.Vorname
		this.Telefonnummer
		this.Mail
		this.Bild
	}
}

//Kundenberaterobjekt deklariert und instanziiert
let kundenberater = new Kundenberater();

//Kundenberaterobjekt initialisiert 
kundenberater.Nachname = 'Pass'
kundenberater.Vorname = 'Hildegard'
kundenberater.Telefonnummer = '012345 67890'
kundenberater.Mail = 'hildegard.pass@node-js.de'
kundenberater.Bild = 'pass.jpg'


'use strict';

//Das Modul express wird mit der Funktion require einer Konstanten namens express zugewiesen.
const express = require('express');

//Der Bodyparser ermöglicht es uns, Daten aus dem Kundenformular aus den Server entgegen zu nehmen.
//Der Bodyparser wird im Terminal mit dem Befehl 'npm install -g body-parser' installiert.
const bodyParser = require('express');

// Die Anweisungen werden von oben nach unten abgearbeitet. Der Wert 3000 wird von rechts nach links 
// zugewiesen an die Konstante namens PORT. Das einfache Gleichheitszeichen lässt sich also übersetzen
// mit "... wird zugewiesen an ..."
const PORT = 3001;

// Der Wert '0.0.0.0' wird zugewiesen an eine Konstante namens HOST 
const HOST = '0.0.0.0';

// App
const app = express();

//Es wird der App bekanntgegeben, wo die styles zu finden sind.
app.use(express.static('public'))
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended: true}))
//Der Bodyparser wird in der app eingebunden.


app.get('/', (req, res) => {

	// res ist die Antwort des Servers an den Browser.
	// send() ist die Anweisung etwas an den Browser zu senden
	// 'Hello ...' ist der Wert, der an die Anweisung send() übergeben wird
	//res.send('Hello remote world!\n');

	// Das res-Objekt kann noch mehr als nur eine Zeichenkette an den
	// Browser zu senden. Das res-Objekt kann mit der Funktion render()
	// eine HTML-Datei an den Browser senden.
	
	if(kunde.IstEingeloggt){
		//Wenn die Zugangsdaten korrekt sind, dann wird die angesurfte Seite gerendert.
		res.render('index.ejs',{});

	}else{
		//Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite gerendert.
		res.render('login.ejs',{});
		Meldung: 'Melden sie sich zuerst an.'
	}
});

//Wenn im Browser die Adresse .../agb aufgerufen wird, wird der Server aufgefordert, 
//die angefragte Seite an den Browser zurückzugeben.
//Der Server arbeitet dazu die Funktion app.get('agb)...ab.

//Der Server gibt die geänderte EJS Seite an den Server zurück.
app.get('/agb',(req,res)=>{
	if(kunde.IstEingeloggt){
		//Wenn die Zugangsdaten korrekt sind, dann wird die angesurfte Seite gerendert.
		res.render('agb.ejs',{});

	}else{
		//Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite gerendert.
		res.render('login.ejs',{});
		Meldung: 'Melden sie sich zuerst an.'
	}
});

app.get('/profil',(req,res)=>{
	if(kunde.IstEingeloggt){
		//Wenn die Zugangsdaten korrekt sind, dann wird die angesurfte Seite gerendert.
		res.render('profil.ejs',{});

	}else{
		//Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite gerendert.
		res.render('login.ejs',{});
		Meldung: 'Melden sie sich zuerst an.'
	}
});

app.get('/postfach',(req,res)=>{
	if(kunde.IstEingeloggt){
		//Wenn die Zugangsdaten korrekt sind, dann wird die angesurfte Seite gerendert.
		res.render('postfach.ejs',{});

	}else{
		//Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite gerendert.
		res.render('login.ejs',{});
		Meldung: 'Melden sie sich zuerst an.'
	}
});

app.get('/hilfe',(req,res)=>{
	if(kunde.IstEingeloggt){
		//Wenn die Zugangsdaten korrekt sind, dann wird die angesurfte Seite gerendert.
		res.render('hilfe.ejs',{});

	}else{
		//Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite gerendert.
		res.render('login.ejs',{});
		Meldung: 'Melden sie sich zuerst an.'
	}
});

app.get('/index',(req,res)=>{
	if(kunde.IstEingeloggt){
		//Wenn die Zugangsdaten korrekt sind, dann wird die angesurfte Seite gerendert.
		res.render('index.ejs',{});

	}else{
		//Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite gerendert.
		res.render('login.ejs',{});
		Meldung: 'Melden sie sich zuerst an.'
	}
});

app.get('/kontenuebersicht',(req,res)=>{
	if(kunde.IstEingeloggt){
		//Wenn die Zugangsdaten korrekt sind, dann wird die angesurfte Seite gerendert.
		res.render('kontenuebersicht.ejs',{});

	}else{
		//Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite gerendert.
		res.render('login.ejs',{});
		Meldung: 'Melden sie sich zuerst an.'
	}
});

app.get('/ueberweisungAusfuehren',(req,res)=>{
	if(kunde.IstEingeloggt){
		//Wenn die Zugangsdaten korrekt sind, dann wird die angesurfte Seite gerendert.
		res.render('ueberweisungAusfuehren.ejs',{});

	}else{
		//Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite gerendert.
		res.render('login.ejs',{});
		Meldung: 'Melden sie sich zuerst an.'
	}
});

//Die Funktion app.get('geldAnlegen',...) wird abgearbeitet, wenn der Benutzer die Seite geldAnlegen im Browser ansurft.

app.get('/geldAnlegen',(req,res)=>{
	if(kunde.IstEingeloggt){
		//Wenn die Zugangsdaten korrekt sind, dann wird die angesurfte Seite gerendert.
		res.render('geldAnlegen.ejs',{
			Betrag: 130,
		Laufzeit: 3,
		Meldung: ''
	});

	}else{
		//Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite gerendert.
		res.render('login.ejs',{});
		Meldung: 'Melden sie sich zuerst an.'
	}

	//Die Serverantwort an den Browser wird gerendert an den Browser zurückgegeben.
	//Dazu wird die Funktion render() aufgerufen.
});

app.get('/kreditBeantragen',(req,res)=>{
	res.render('kreditBeantragen.ejs',{});
});

//Die App.get wird abgearbeitet, wenn die Seite im server angesurft wird
app.get('/login',(req,res)=>{

	kunde.IstEingeloggt = false;
	console.log('kunde.IstEingeloggt: ' + kunde.IstEingeloggt)
	res.render('login.ejs',{
		Meldung: 'Bitte Benutzername und Kennwort eingeben'
	});
});

//Die Funktion app.post(...) wird abgearbeitet, wenn der Kunde auf dem Formular den Absenden-Button klickt.

app.post('/geldAnlegen',(req,res)=>{
//Die Werte, die der Kunde im Formular eingegeben hat, werden an den Server gesendet.
//Der Wert der variablen Betrag wird aus dem body der Kundenanfrage (req) ausgelesen und zugewiesen an die lokale Variable namens Betrag.

let betrag = req.body.Betrag;
console.log('geldAnlegen: Gewünschter Betrag: ' + Betrag + ' Euro')

	res.render('geldAnlegen.ejs',{
		Betrag: 130,
		Laufzeit: 3
	});

let laufzeit = req.body.Laufzeit;
console.log('geldAnlegen: Gewünschte Laufzeit: ' + Laufzeit + ' Jahre')

let zinssatz = 0.1 

let zinsen = betrag * zinssatz;

	res.render('geldAnlegen.ejs',{
		Betrag: betrag,
		Laufzeit: laufzeit,
		Meldung: 'Ihre Zinsen betragen: ' + zinsen
	});
});

//Die App.post wird abgearbeitet, wenn das Formular auf der Seite abgesendet wird. 
app.post('/login',(req,res)=>{
	let benutzername = req.body.IdKunde;
	console.log('login: Benutzername: ' + benutzername)
	
	let kennwort = req.body.Kennwort;
	console.log('login: Kennwort ' + kennwort)

	//Es muss geprüft werden, ob der Kunde mit diesem Benutzername das richtige Kennwort eingegeben hat
	let meldung = '';

	//Die Kontrollstruktur prüft auf die Korrektheit der Zugangsdaten 
	if(kunde.benutzername == benutzername && kunde.Kennwort == kennwort){
		console.log('Die Zugangsdaten wurden korrekt eingegeben.')
		meldung = 'Die Zugangsdaten wurden korrekt eingegeben.'
		kunde.IstEingeloggt = true;
		console.log('kunde.IstEingeloggt: ' + kunde.IstEingeloggt)

		//Wenn die Daten korrekt sind, dann wird die index-Seite gerendert.
		res.render('index.ejs',{
			Meldung: meldung
		});
	}else{
		console.log('Die Zugangsdaten wurden NICHT korrekt eingegeben.')
		meldung = 'Die Zugangsdaten wurden NICHT korrekt eingegeben.'
		kunde.IstEingeloggt = false;
		console.log('kunde.IstEingeloggt: ' + kunde.IstEingeloggt)


		//Wenn die Daten nicht korrekt sind, dann wird die login-seite erneut gerendert.
		res.render('login.ejs',{
			Meldung: meldung
		});
	}
	
	});

// Mit listen() wird der Server angewiesen, auf den angegebenen Host und
// Port zu lauschen.  
app.listen(PORT, HOST);

// Mit der Anweisung console.log() wird dem Server-Administrator auf der
// Konsole angezeigt, was der Server macht. Der Programmierer schreibt dazu 
// in die runden Klammern den Ausdruck, der auf der Konsole angezeigt
// werden soll. Die Werte der beiden Konstanten HOST und PORT werden in den
// Ausdruck übergeben. Ein Verb mit anschließenden runden Klammern steht
// immer für eine Anweisung etwas zu tun. 
console.log(`Running on http://${HOST}:${PORT}`);

//require('./uebungen/01-grundlagen.js');
//require('./uebungen/03-objekte.js');
//require('./klausuren/klausur20240930.js');
//require('./uebungen/04-funktionen.js');
function contactMail(){

	var name = $("#name").val();
	var vorname = $("#vorname").val();
	var strasse = $("#strasse").val();
	var plz_ort = $("#plz_ort").val();
	var email = $("#email").val();
	var telefon = $("#telefon").val();
	var date = $("#date").val();
	var location = $("#location").val();
	var message = $("#message").val();
	var research = $("#research").val();

	if(name == "" || vorname == "" || strasse == "" || plz_ort == "" || email == "" || telefon == "" || date == ""){
		alert ("Bitte fülle alle Felder aus, danke!");
	}
	else{
		// alert("Name: " + name +
		// 	"<br/>Vorname: "+ vorname+
		// 	"<br/>Strasse: "+strasse+
		// 	"<br/>PLZ / Ort: "+plz_ort+
		// 	"<br/>Email: "+email+
		// 	"<br/>Telephonnummer: "+ telefon +
		// 	"<br/>Datum: " + date +
		// 	"<br/>Location: " + location +
		// 	"<br/>Message: " + message +
		// 	"<br/>Woher kennt Ihr mich: "+research);
		//
		var subject = "Anfrage von " + vorname + " " + name;
		var body =
			"Name: " +name+
			"\nVorname: "+vorname+
			"\nStrasse: "+strasse+
			"\nPLZ und Ort: "+plz_ort+
			"\nEmail: "+email+
			"\nTelephonnummer: "+telefon+
			"\nDatum: " +date+
			"\nLocation: " +location+
			"\nMessage: " +message+
			"\nWoher kennt Ihr mich: "+research;

		// let confirmreply = confirm("Die Daten werden an verziert & verzaubert übermittelt, bitte bestätige mit 'OK'");
		window.location.assign("mailto:kontakt@verziertundverzaubert.ch?Subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body));
	}
}

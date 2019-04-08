/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/
var a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7;

if ( a > b && c && d && e && f && g ) {
	console.log(`La giornata più calda è a`);
}

if ( b > a && c && d && e && f && g ) {
 	console.log(`La giornata più calda è b`);
}

if ( c > b && a && d && e && f && g ) {
	console.log(`La giornata più calda è c`);
}

if ( d > b && c && a && e && f && g ) {
	console.log(`La giornata più calda è d`);
}

if ( e > b && c && d && a && f && g ) {
	console.log(`La giornata più calda è e`);
}

if ( f > b && c && d && e && a && g ) {
	console.log(`La giornata più calda è f`);
}

if ( g > b && c && d && e && f && g ) {
	console.log(`La giornata più calda è g`);
}
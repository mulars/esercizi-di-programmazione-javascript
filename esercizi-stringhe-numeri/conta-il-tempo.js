/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
var time = 12560;
var h = Math.round((time)/3600); // 3
var timeH = 3600*h; // 10800
var timeM = (time)-(timeH); // 1760
var m = Math.round((timeM)/60); //29
var timeS = 60*m; //1740
var s = timeM-timeS; // 20

console.log(`${time} secondi corrispondono a ${h} ore, ${m} minuti e ${s} secondi`);




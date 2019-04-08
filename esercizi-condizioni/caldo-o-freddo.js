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

if (a>b && a>c && a>d && a>e && a>f && a>g)
 	console.log(`${a} gradi è la temperatura maggiore.`);
else if (b>a && b>c && b>d && b>e && b>f && b>g)
 	console.log(`${b} gradi è la temperatura maggiore.`);
else if (c>a && c>b && c>d && c>e && c>f && c>g)
 	console.log(`${c} gradi è la temperatura maggiore.`);
else if (d>a && d>b && d>c && d>e && d>f && d>g)
 	console.log(`${d} gradi è la temperatura maggiore.`);
else if (e>a && e>b && e>d && e>d && e>f && e>g)
 	console.log(`${e} gradi è la temperatura maggiore.`);
else if (f>a && f>b && f>d && f>e && f>c && f>g)
 	console.log(`${f} gradi è la temperatura maggiore.`);
else if (g>a && g>b && g>d && g>e && g>f && g>c)
 	console.log(`${g} gradi è la temperatura maggiore.`);

if (a<b && a<c && a<d && a<e && a<f && a<g)
 	console.log(`${a} gradi è la temperatura minore.`);
else if (b<a && b<c && b<d && b<e && b<f && b<g)
 	console.log(`${b} gradi è la temperatura minore.`);
else if (c<a && c<b && c<d && c<e && c<f && c<g)
 	console.log(`${c} gradi è la temperatura minore.`);
else if (d<a && d<b && d<c && d<e && d<f && d<g)
 	console.log(`${d} gradi è la temperatura minore.`);
else if (e<a && e<b && e<d && e<d && e<f && e<g)
 	console.log(`${e} gradi è la temperatura minore.`);
else if (f<a && f<b && f<d && f<e && f<c && f<g)
 	console.log(`${f} gradi è la temperatura minore.`);
else if (g<a && g<b && g<d && g<e && g<f && g<c)
 	console.log(`${g} gradi è la temperatura minore.`);

console.log(Math.max(a, b, c, d, e, f, g));
console.log(Math.min(a, b, c, d, e, f, g));

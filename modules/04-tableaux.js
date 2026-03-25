// ============================================================
//  MODULE 04 — Tableaux (Arrays)
//  Objectif : Créer, parcourir et manipuler des tableaux.
// ============================================================

// ───────────────────────────────────────────────
//  LEÇON 1 : Créer un tableau
// ───────────────────────────────────────────────

let vide   = [];                             // tableau vide
let notes  = [14, 17, 9, 12, 18];           // nombres
let noms   = ["Ibra", "Fatou", "Cheikh"];   // chaînes
let mixte  = [42, "bonjour", true, null];   // types mélangés

console.log(notes[0]);     // 14  (index commence à 0)
console.log(notes.length); // 5

// Modifier un élément
notes[2] = 11;
console.log(notes);  // [14, 17, 11, 12, 18]

// ───────────────────────────────────────────────
//  LEÇON 2 : Méthodes de base (ajouter / supprimer)
// ───────────────────────────────────────────────

let fruits = ["Mangue", "Banane"];

fruits.push("Papaye");       // ajoute à la FIN
fruits.unshift("Orange");    // ajoute au DÉBUT
console.log(fruits);         // ["Orange", "Mangue", "Banane", "Papaye"]

fruits.pop();                // supprime le DERNIER  → "Papaye"
fruits.shift();              // supprime le PREMIER  → "Orange"
console.log(fruits);         // ["Mangue", "Banane"]

// splice : insérer / supprimer à n'importe quelle position
fruits.splice(1, 0, "Bissap");  // insère "Bissap" à l'index 1
console.log(fruits);            // ["Mangue", "Bissap", "Banane"]

fruits.splice(1, 1);            // supprime 1 élément à l'index 1
console.log(fruits);            // ["Mangue", "Banane"]

// ───────────────────────────────────────────────
//  LEÇON 3 : Méthodes de recherche
// ───────────────────────────────────────────────

let villes = ["Dakar", "Thiès", "Ziguinchor", "Saint-Louis"];

console.log(villes.indexOf("Thiès"));       // 1
console.log(villes.includes("Kaolack"));   // false
console.log(villes.find(v => v.length > 7)); // "Ziguinchor"
console.log(villes.findIndex(v => v.startsWith("S"))); // 3

// ───────────────────────────────────────────────
//  LEÇON 4 : Méthodes de transformation (TRÈS importantes)
// ───────────────────────────────────────────────

let nombres = [1, 2, 3, 4, 5];

// map : transforme chaque élément → NOUVEAU tableau
let doubles = nombres.map(n => n * 2);
console.log(doubles);  // [2, 4, 6, 8, 10]

// filter : garde les éléments qui passent le test → NOUVEAU tableau
let pairs = nombres.filter(n => n % 2 === 0);
console.log(pairs);    // [2, 4]

// reduce : réduit le tableau à une seule valeur
let somme = nombres.reduce((acc, n) => acc + n, 0);
console.log(somme);    // 15

// forEach : parcourir (ne retourne rien)
nombres.forEach((n, index) => {
  console.log(`Index ${index} → valeur ${n}`);
});

// ───────────────────────────────────────────────
//  LEÇON 5 : Autres méthodes utiles
// ───────────────────────────────────────────────

let lettres = ["c", "a", "e", "b", "d"];

// sort : trier (attention : modifie le tableau original !)
lettres.sort();
console.log(lettres); // ["a", "b", "c", "d", "e"]

// Pour trier des nombres :
let n2 = [10, 2, 30, 4];
n2.sort((a, b) => a - b);   // croissant
console.log(n2);             // [2, 4, 10, 30]

// reverse : inverser
console.log([1, 2, 3].reverse()); // [3, 2, 1]

// slice : extraire une portion (non destructif)
let fruits2 = ["A", "B", "C", "D", "E"];
console.log(fruits2.slice(1, 3));  // ["B", "C"]

// join : joindre en chaîne
console.log(["Bon", "jour"].join(" ")); // "Bon jour"

// flat : aplatir un tableau imbriqué
let imb = [[1, 2], [3, 4], [5]];
console.log(imb.flat());  // [1, 2, 3, 4, 5]

// spread : copier / fusionner
let tab1 = [1, 2, 3];
let tab2 = [4, 5, 6];
let fusion = [...tab1, ...tab2];
console.log(fusion); // [1, 2, 3, 4, 5, 6]

// Destructuration
let [premier, deuxieme, ...reste] = [10, 20, 30, 40, 50];
console.log(premier);   // 10
console.log(deuxieme);  // 20
console.log(reste);     // [30, 40, 50]

// ============================================================
//  EXERCICES
// ============================================================

/*
 * EX 1 ── Statistiques
 *   Soit notes = [12, 8, 17, 14, 9, 16, 11, 15, 7, 18]
 *   Calculez et affichez :
 *   a) La moyenne de la classe
 *   b) La note la plus haute et la plus basse
 *   c) Le nombre d'élèves ayant la moyenne (≥10)
 *   d) Le tableau trié du plus bas au plus haut
 */

// Votre code ici ↓


/*
 * EX 2 ── Manipulation de chaînes
 *   Soit une phrase = "le javascript est un langage puissant"
 *   a) Transformez-la en tableau de mots (split)
 *   b) Mettez chaque mot en Majuscule (map + charAt + slice)
 *   c) Reconstituez la phrase avec join
 */

// Votre code ici ↓


/*
 * EX 3 ── Panier d'achat
 *   Créez un tableau de produits (objets {nom, prix}).
 *   a) Affichez tous les produits avec leur prix
 *   b) Calculez le total du panier avec reduce
 *   c) Filtrez les produits dont le prix est > 5000 FCFA
 */

// Votre code ici ↓


/*
 * EX 4 ── (DÉFI) Tableau sans doublons
 *   Écrivez une fonction qui prend un tableau en paramètre
 *   et retourne un nouveau tableau sans doublons.
 *   Indice : utilisez Set ou filter + indexOf.
 */

// Votre code ici ↓


/*
 * EX 5 ── (DÉFI) Aplatir et sommer
 *   Soit matrix = [[1,2,3],[4,5,6],[7,8,9]]
 *   En une seule chaîne de méthodes (flat + reduce),
 *   calculez la somme de tous les éléments.
 */

// Votre code ici ↓

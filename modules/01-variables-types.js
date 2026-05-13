// ============================================================
//  MODULE 01 — Variables & Types
//  Objectif : Comprendre les variables, les types de données
//             et les opérateurs de base en JavaScript.
// ============================================================

// ───────────────────────────────────────────────
//  LEÇON 1 : Déclarer des variables
// ───────────────────────────────────────────────

// Il existe trois mots-clés : var (ancien), let, const
let prenom = "Amadou";       // peut changer
const pays = "Sénégal";     // ne peut PAS changer
var age = 20;                // à éviter (portée globale)

console.log(prenom, pays, age);

// ───────────────────────────────────────────────
//  LEÇON 2 : Les types de données
// ───────────────────────────────────────────────

let texte    = "Bonjour";          // String
let nombre   = 42;                 // Number
let decimal  = 3.14;               // Number (décimal)
let vrai     = true;               // Boolean
let faux     = false;              // Boolean
let rien     = null;               // Null (vide volontaire)
let inconnu  = undefined;          // Undefined (pas encore défini)

console.log(typeof texte);    // "string"
console.log(typeof nombre);   // "number"
console.log(typeof vrai);     // "boolean"
console.log(typeof rien);     // "object" (particularité JS !)

// ───────────────────────────────────────────────
//  LEÇON 3 : Template Literals (chaînes modernes)
// ───────────────────────────────────────────────

let nom = "Fatou";
let ville = "Dakar";
let message = `Je m'appelle ${nom} et j'habite à ${ville}.`;
console.log(message);

// ───────────────────────────────────────────────
//  LEÇON 4 : Opérateurs
// ───────────────────────────────────────────────

// Arithmétiques
console.log(10 + 3);   // 13
console.log(10 - 3);   // 7
console.log(10 * 3);   // 30
console.log(10 / 3);   // 3.333...
console.log(10 % 3);   // 1  (modulo = reste)
console.log(2 ** 8);   // 256 (puissance)

// Comparaison
console.log(5 == "5");    // true  (égalité valeur seulement)
console.log(5 === "5");   // false (égalité valeur ET type) ← préférer ===
console.log(5 !== 4);     // true

// Logiques
console.log(true && false);  // false  (ET)  meme si 99% et vrais si 1% et faux il te dira faux
console.log(true || false);  // true   (OU) meme si 99% et faux si 1% et vrais il te dira vrais
console.log(!true);          // false  (NON)

// ============================================================
//  EXERCICES
// ============================================================

/*
 * EX 1 ── Déclarez trois variables :
 *   - votre prénom (const)
 *   - votre âge   (let)
 *   - votre ville  (let)
 *   Affichez : "Je m'appelle X, j'ai Y ans et j'habite à Z."
 */

// Votre code ici ↓


/*
 * EX 2 ── Demandez à l'utilisateur deux nombres via prompt()
 *   et affichez leur somme, différence, produit et quotient.
 */

// Votre code ici ↓


/*
 * EX 3 ── Vérifiez si un nombre entré par l'utilisateur est :
 *   - positif, négatif ou zéro
 *   - pair ou impair
 *   Utilisez console.log() pour afficher les résultats.
 */

// Votre code ici ↓


/*
 * EX 4 ── (DÉFI) Sans utiliser if/else, écrivez une expression
 *   booléenne qui vaut true si un nombre n est compris
 *   entre 1 et 100 inclus.
 */

// Votre code ici ↓

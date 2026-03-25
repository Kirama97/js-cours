// ============================================================
//  MODULE 05 — Fonctions
//  Objectif : Déclarer, appeler et maîtriser les fonctions
//             (déclarations, expressions, fléchées, closures).
// ============================================================

// ───────────────────────────────────────────────
//  LEÇON 1 : Déclaration de fonction (function declaration)
// ───────────────────────────────────────────────

function direBonjour(prenom) {
  return `Bonjour, ${prenom} !`;
}

console.log(direBonjour("Ibra"));    // "Bonjour, Ibra !"
console.log(direBonjour("Fatou"));   // "Bonjour, Fatou !"

// ───────────────────────────────────────────────
//  LEÇON 2 : Expression de fonction (function expression)
// ───────────────────────────────────────────────

const addition = function(a, b) {
  return a + b;
};

console.log(addition(5, 3));   // 8

// ───────────────────────────────────────────────
//  LEÇON 3 : Fonction fléchée (Arrow Function) ← syntaxe moderne
// ───────────────────────────────────────────────

// Syntaxe complète
const multiplier = (a, b) => {
  return a * b;
};

// Syntaxe courte (retour implicite si une seule expression)
const carre = n => n * n;
const saluer = () => "Salut tout le monde !";

console.log(multiplier(4, 5));  // 20
console.log(carre(7));          // 49
console.log(saluer());          // "Salut tout le monde !"

// ───────────────────────────────────────────────
//  LEÇON 4 : Paramètres par défaut
// ───────────────────────────────────────────────

function creerProfil(nom, role = "Étudiant", niveau = 1) {
  return `${nom} — ${role} (niveau ${niveau})`;
}

console.log(creerProfil("Cheikh"));              // "Cheikh — Étudiant (niveau 1)"
console.log(creerProfil("Aïssa", "Professeur", 5)); // "Aïssa — Professeur (niveau 5)"

// ───────────────────────────────────────────────
//  LEÇON 5 : Paramètres rest (...args)
// ───────────────────────────────────────────────

function somme(...nombres) {
  return nombres.reduce((acc, n) => acc + n, 0);
}

console.log(somme(1, 2, 3));           // 6
console.log(somme(10, 20, 30, 40));    // 100

// ───────────────────────────────────────────────
//  LEÇON 6 : Fonctions d'ordre supérieur (Higher-Order Functions)
//           Une fonction peut recevoir ou retourner une autre fonction
// ───────────────────────────────────────────────

function appliquer(fn, valeur) {
  return fn(valeur);
}

const doubler = n => n * 2;
const mettreEnMaj = s => s.toUpperCase();

console.log(appliquer(doubler, 8));          // 16
console.log(appliquer(mettreEnMaj, "ibra")); // "IBRA"

// Fonction qui RETOURNE une fonction (factory)
function creerMultiplicateur(facteur) {
  return (n) => n * facteur;
}

const fois3 = creerMultiplicateur(3);
const fois10 = creerMultiplicateur(10);

console.log(fois3(7));   // 21
console.log(fois10(7));  // 70

// ───────────────────────────────────────────────
//  LEÇON 7 : Closures (fermetures)
//            Une fonction "se souvient" de son contexte de création
// ───────────────────────────────────────────────

function creerCompteur() {
  let compte = 0;      // variable privée !
  return {
    incrementer: () => ++compte,
    decrementer: () => --compte,
    valeur: () => compte
  };
}

const compteur = creerCompteur();
compteur.incrementer();
compteur.incrementer();
compteur.incrementer();
compteur.decrementer();
console.log(compteur.valeur()); // 2

// ───────────────────────────────────────────────
//  LEÇON 8 : Récursivité
//            Une fonction qui s'appelle elle-même
// ───────────────────────────────────────────────

function factorielle(n) {
  if (n <= 1) return 1;          // cas de base
  return n * factorielle(n - 1); // appel récursif
}

console.log(factorielle(5));  // 120  (5 * 4 * 3 * 2 * 1)
console.log(factorielle(10)); // 3628800

// ============================================================
//  EXERCICES
// ============================================================

/*
 * EX 1 ── Conversion de températures
 *   Écrivez deux fonctions fléchées :
 *   - celsiusToFahrenheit(c) → F = (C * 9/5) + 32
 *   - fahrenheitToCelsius(f) → C = (F - 32) * 5/9
 *   Testez avec quelques valeurs et affichez les résultats.
 */

// Votre code ici ↓


/*
 * EX 2 ── Palindrome
 *   Écrivez une fonction estPalindrome(mot) qui retourne
 *   true si le mot se lit pareil à l'endroit et à l'envers.
 *   Ex : "radar" → true, "bonjour" → false
 *   Ignorez la casse (majuscules/minuscules).
 */

// Votre code ici ↓


/*
 * EX 3 ── Calculatrice avancée
 *   Créez un objet "calculatrice" avec les méthodes :
 *   additionner, soustraire, multiplier, diviser
 *   Chaque méthode prend deux paramètres et retourne le résultat.
 *   La division doit gérer le cas de division par zéro.
 */

// Votre code ici ↓


/*
 * EX 4 ── Pipeline de transformations
 *   Utilisez map, filter et reduce en chaîne :
 *   Soit notes = [7, 14, 12, 5, 18, 9, 16, 11]
 *   a) Filtrez les notes >= 10
 *   b) Multipliez chaque note passée par 2 (simulation bonification)
 *   c) Calculez la moyenne des notes bonifiées
 *   Faites tout en une seule expression chaînée.
 */

// Votre code ici ↓


/*
 * EX 5 ── (DÉFI) Mémoïsation
 *   La fonction fibonacci(n) est lente pour les grandes valeurs.
 *   Créez une version mémoïsée qui stocke les résultats déjà
 *   calculés dans un objet pour éviter les recalculs.
 */

// Votre code ici ↓


/*
 * EX 6 ── (DÉFI) Curry
 *   Le curry transforme une fonction f(a, b, c) en f(a)(b)(c).
 *   Écrivez une fonction curry(fn) qui prend n'importe quelle
 *   fonction et retourne sa version curryfiée.
 *   Ex : const add = (a, b) => a + b;
 *        const addC = curry(add);
 *        addC(3)(4) → 7
 */

// Votre code ici ↓

// ============================================================
//  MODULE 03 — Boucles (Loops)
//  Objectif : Répéter des instructions avec for, while,
//             do…while, for…of, for…in.
// ============================================================

// ───────────────────────────────────────────────
//  LEÇON 1 : Boucle for classique
// ───────────────────────────────────────────────

// Syntaxe : for (initialisation; condition; incrémentation)
for (let i = 0; i < 5; i++) {
  console.log(`Tour n° ${i}`);
}

// Compter à l'envers
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
console.log("Décollage ! 🚀");

// ───────────────────────────────────────────────
//  LEÇON 2 : Boucle while
// ───────────────────────────────────────────────

let compteur = 0;
while (compteur < 5) {
  console.log(`compteur = ${compteur}`);
  compteur++;
}

// ───────────────────────────────────────────────
//  LEÇON 3 : Boucle do…while (s'exécute AU MOINS une fois)
// ───────────────────────────────────────────────

let secret = 7;
let tentative;
do {
  tentative = Math.floor(Math.random() * 10) + 1;
  console.log(`Tentative : ${tentative}`);
} while (tentative !== secret);
console.log("Trouvé !");

// ───────────────────────────────────────────────
//  LEÇON 4 : break et continue
// ───────────────────────────────────────────────

// break : sortir immédiatement de la boucle
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);   // affiche 0 1 2 3 4
}

// continue : passer au tour suivant
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);   // affiche 1 3 5 7 9
}

// ───────────────────────────────────────────────
//  LEÇON 5 : for…of  (parcourir les éléments d'un itérable)
// ───────────────────────────────────────────────

let fruits = ["Mangue", "Banane", "Papaye", "Bissap"];
for (let fruit of fruits) {
  console.log(fruit);
}

// Parcourir les caractères d'une chaîne
for (let lettre of "Sénégal") {
  console.log(lettre);
}

// ───────────────────────────────────────────────
//  LEÇON 6 : for…in  (parcourir les clés d'un objet)
// ───────────────────────────────────────────────

let etudiant = { nom: "Ibra", age: 21, ville: "Thiès" };
for (let cle in etudiant) {
  console.log(`${cle} : ${etudiant[cle]}`);
}

// ───────────────────────────────────────────────
//  LEÇON 7 : Boucles imbriquées (nested loops)
// ───────────────────────────────────────────────

// Table de multiplication (1 à 5)
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    process.stdout.write(`${i * j}\t`);
  }
  console.log();
}

// ============================================================
//  EXERCICES
// ============================================================

/*
 * EX 1 ── Somme et moyenne
 *   Affichez la somme et la moyenne des entiers de 1 à 100.
 */

// Votre code ici ↓


/*
 * EX 2 ── FizzBuzz (classique !)
 *   Pour i de 1 à 50 :
 *     - si i est divisible par 3 ET 5 → "FizzBuzz"
 *     - si divisible par 3 seulement  → "Fizz"
 *     - si divisible par 5 seulement  → "Buzz"
 *     - sinon                         → afficher i
 */

// Votre code ici ↓


/*
 * EX 3 ── Pyramide d'étoiles
 *   Avec des boucles imbriquées, affichez :
 *   *
 *   **
 *   ***
 *   ****
 *   *****
 *   Pour une hauteur n entrée par l'utilisateur.
 */

// Votre code ici ↓


/*
 * EX 4 ── Suite de Fibonacci
 *   Affichez les 15 premiers termes de la suite de Fibonacci.
 *   (0, 1, 1, 2, 3, 5, 8, 13, 21, ...)
 */

// Votre code ici ↓


/*
 * EX 5 ── (DÉFI) Nombre premier
 *   Écrivez une boucle qui affiche tous les nombres premiers
 *   entre 2 et 100.
 *   Un nombre est premier s'il n'est divisible que par 1 et lui-même.
 */

// Votre code ici ↓


/*
 * EX 6 ── (DÉFI) Deviner un nombre
 *   L'ordinateur choisit un nombre aléatoire entre 1 et 50.
 *   Le joueur a 7 tentatives (prompt). Après chaque essai,
 *   indiquez "trop grand", "trop petit" ou "bravo !".
 */

// Votre code ici ↓

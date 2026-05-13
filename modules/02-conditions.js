// ============================================================
//  MODULE 02 — Conditions (if / else / switch)
//  Objectif : Contrôler l'exécution du programme selon
//             des conditions.
// ============================================================

// ───────────────────────────────────────────────
//  LEÇON 1 : if / else if / else
// ───────────────────────────────────────────────

let note = 14;

if (note >= 16) {
  console.log("Très bien !");
} else if (note >= 12) {
  console.log("Bien !");
} else if (note >= 10) {
  console.log("Passable.");
} else {
  console.log("Insuffisant.");
}

// ───────────────────────────────────────────────
//  LEÇON 2 : Opérateur ternaire  (condition ? si vrai : si faux)
// ───────────────────────────────────────────────

let score = 55;
let resultat = score >= 50 ? "Admis" : "Recalé";
console.log(resultat);  // "Admis"

let jour = 1;

switch (jour) {
  case 1:
    console.log("Lundi");
    break;

  case 2:
    console.log("Mardi");
    break;

  case 3:
    console.log("Mercredi");
    break;

  case 4:
    console.log("Jeudi");
    break;

  case 5:
    console.log("Vendredi");
    break;

  case 6:
    console.log("Samedi");
    break;

  case 7:
    console.log("Dimanche");
    break;

  default:
    console.log("Jour inconnu");
}


// ───────────────────────────────────────────────
//  LEÇON 4 : Nullish coalescing (??) et Optional chaining (?.)
// ───────────────────────────────────────────────

let utilisateur = null;
let nomAffiche = utilisateur ?? "Visiteur anonyme";
console.log(nomAffiche);  // "Visiteur anonyme"

let profil = { adresse: { ville: "Thiès" } };
console.log(profil?.adresse?.ville);    // "Thiès"
console.log(profil?.telephone?.numero); // undefined (pas d'erreur !)

// ============================================================
//  EXERCICES
// ============================================================

/*
 * EX 1 ── IMC (Indice de Masse Corporelle)
 *   Demandez le poids (kg) et la taille (m) d'une personne.
 *   Calculez l'IMC = poids / (taille * taille)
 *   Affichez la catégorie :
 *     < 18.5  → "Insuffisance pondérale"
 *     18.5–25 → "Poids normal"
 *     25–30   → "Surpoids"
 *     > 30    → "Obésité"
 */

// Votre code ici ↓


/*
 * EX 2 ── Calculatrice simple
 *   Demandez deux nombres et une opération (+, -, *, /)
 *   via prompt(). Utilisez switch pour calculer et afficher
 *   le résultat. Gérez la division par zéro.
 */

// Votre code ici ↓


/*
 * EX 3 ── Année bissextile
 *   Une année est bissextile si :
 *     - divisible par 4, ET
 *     - (pas divisible par 100) OU (divisible par 400)
 *   Demandez une année et affichez si elle est bissextile.
 */

// Votre code ici ↓


/*
 * EX 4 ── (DÉFI) Jeu Pierre-Papier-Ciseaux
 *   Le joueur entre son choix. L'ordinateur choisit au hasard.
 *   Math.random() renvoie un nombre entre 0 et 1.
 *   Affichez le gagnant.
 */

// Votre code ici ↓

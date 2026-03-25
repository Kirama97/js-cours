// ============================================================
//  MODULE 06 — Objets (Objects)
//  Objectif : Créer et manipuler des objets, comprendre
//             les prototypes et les classes ES6.
// ============================================================

// ───────────────────────────────────────────────
//  LEÇON 1 : Créer un objet (littéral)
// ───────────────────────────────────────────────

let etudiant = {
  nom: "Moussa",
  prenom: "Diallo",
  age: 22,
  ville: "Thiès",
  actif: true
};

// Accéder aux propriétés
console.log(etudiant.nom);        // "Moussa"  (notation point)
console.log(etudiant["prenom"]);  // "Diallo"  (notation crochets)

// Ajouter / modifier / supprimer
etudiant.email = "moussa@univ.sn"; // ajouter
etudiant.age = 23;                 // modifier
delete etudiant.actif;             // supprimer
console.log(etudiant);

// ───────────────────────────────────────────────
//  LEÇON 2 : Méthodes dans un objet
// ───────────────────────────────────────────────

let personne = {
  nom: "Awa",
  age: 25,
  sePresenter: function() {
    return `Je m'appelle ${this.nom} et j'ai ${this.age} ans.`;
  },
  // Raccourci ES6 :
  saluer() {
    return `Bonjour, je suis ${this.nom} !`;
  }
};

console.log(personne.sePresenter());
console.log(personne.saluer());

// ───────────────────────────────────────────────
//  LEÇON 3 : Destructuration d'objet
// ───────────────────────────────────────────────

let { nom, age, ville = "Inconnue" } = etudiant;
console.log(nom);    // "Moussa"
console.log(ville);  // "Thiès"

// Renommer lors de la destructuration
let { nom: nomEtudiant, age: ageEtudiant } = etudiant;
console.log(nomEtudiant);   // "Moussa"

// Dans les paramètres de fonction
function afficherEtudiant({ nom, prenom, age }) {
  console.log(`${prenom} ${nom}, ${age} ans`);
}
afficherEtudiant(etudiant);

// ───────────────────────────────────────────────
//  LEÇON 4 : Spread et Object.assign (copie / fusion)
// ───────────────────────────────────────────────

let base = { role: "user", actif: true };
let extra = { nom: "Ibra", email: "ibra@test.sn" };

// Fusion avec spread (moderne)
let complet = { ...base, ...extra };
console.log(complet);

// Copie superficielle
let copie = { ...etudiant };
copie.nom = "Test";
console.log(etudiant.nom); // "Moussa" (original non modifié)

// ───────────────────────────────────────────────
//  LEÇON 5 : Méthodes utiles de Object
// ───────────────────────────────────────────────

let produit = { nom: "Téléphone", prix: 150000, stock: 12 };

console.log(Object.keys(produit));    // ["nom", "prix", "stock"]
console.log(Object.values(produit));  // ["Téléphone", 150000, 12]
console.log(Object.entries(produit)); // [["nom","Téléphone"], ...]

// Transformer entries en objet
let prix = Object.fromEntries([["USD", 1], ["EUR", 0.92], ["XOF", 600]]);
console.log(prix);

// ───────────────────────────────────────────────
//  LEÇON 6 : Classes ES6 (Programmation Orientée Objet)
// ───────────────────────────────────────────────

class Animal {
  // Constructeur : appelé à la création (new Animal())
  constructor(nom, espece) {
    this.nom = nom;
    this.espece = espece;
    this.vivant = true;
  }

  // Méthode
  sePresenter() {
    return `Je suis ${this.nom}, un(e) ${this.espece}.`;
  }

  // Méthode statique (appelée sur la classe, pas l'instance)
  static creerChien(nom) {
    return new Animal(nom, "chien");
  }
}

let lion = new Animal("Simba", "lion");
console.log(lion.sePresenter());
console.log(lion instanceof Animal);  // true

let rex = Animal.creerChien("Rex");
console.log(rex.sePresenter());

// ───────────────────────────────────────────────
//  LEÇON 7 : Héritage (extends)
// ───────────────────────────────────────────────

class Etudiant extends Animal {
  constructor(nom, universite, niveau) {
    super(nom, "humain");         // appelle le constructeur parent
    this.universite = universite;
    this.niveau = niveau;
    this.notes = [];
  }

  ajouterNote(note) {
    this.notes.push(note);
  }

  calculerMoyenne() {
    if (this.notes.length === 0) return 0;
    return this.notes.reduce((s, n) => s + n, 0) / this.notes.length;
  }

  // Surcharger (override) la méthode parente
  sePresenter() {
    return `${super.sePresenter()} Étudiant à ${this.universite}.`;
  }
}

let ibra = new Etudiant("Ibra", "Université de Thiès", 2);
ibra.ajouterNote(14);
ibra.ajouterNote(16);
ibra.ajouterNote(12);
console.log(ibra.sePresenter());
console.log(`Moyenne : ${ibra.calculerMoyenne()}`);

// ───────────────────────────────────────────────
//  LEÇON 8 : Getters & Setters
// ───────────────────────────────────────────────

class Cercle {
  constructor(rayon) {
    this._rayon = rayon;
  }

  get rayon() { return this._rayon; }

  set rayon(val) {
    if (val < 0) throw new Error("Le rayon doit être positif !");
    this._rayon = val;
  }

  get aire() {
    return Math.PI * this._rayon ** 2;
  }

  get perimetre() {
    return 2 * Math.PI * this._rayon;
  }
}

let c = new Cercle(5);
console.log(c.aire.toFixed(2));       // "78.54"
console.log(c.perimetre.toFixed(2));  // "31.42"
c.rayon = 10;
console.log(c.aire.toFixed(2));       // "314.16"

// ============================================================
//  EXERCICES
// ============================================================

/*
 * EX 1 ── Carnet de contacts
 *   Créez un tableau d'objets représentant 5 contacts :
 *   { nom, prenom, telephone, email, ville }
 *   a) Affichez tous les contacts
 *   b) Trouvez le contact par son nom (find)
 *   c) Affichez uniquement les contacts d'une ville donnée (filter)
 *   d) Triez les contacts par nom alphabétiquement (sort)
 */

// Votre code ici ↓


/*
 * EX 2 ── Classe Banque
 *   Créez une classe CompteBancaire avec :
 *   - Propriétés : titulaire, solde (défaut: 0), historique (tableau)
 *   - Méthodes : deposer(montant), retirer(montant), afficherSolde()
 *   - Getter : estPositif (retourne true si solde >= 0)
 *   Chaque opération ajoute une entrée à l'historique.
 *   La méthode retirer() refuse si le solde est insuffisant.
 */

// Votre code ici ↓


/*
 * EX 3 ── Héritage : Véhicules
 *   Classe Vehicule(marque, modele, annee)
 *     méthode: demarrer(), arreter(), infos()
 *   Classe Voiture extends Vehicule
 *     + nbPortes, typeCarburant
 *     méthode: klaxonner()
 *   Classe Moto extends Vehicule
 *     + cylindree
 *     méthode: faireCabrer()
 *   Créez 2-3 instances et testez toutes les méthodes.
 */

// Votre code ici ↓


/*
 * EX 4 ── (DÉFI) Système de gestion de classe
 *   Classe Classe(nom, niveau) qui contient un tableau d'élèves.
 *   Méthodes :
 *     inscrire(eleve)   → ajoute un Etudiant
 *     expulser(nom)     → supprime par nom
 *     moyenneClasse()   → moyenne de tous les élèves
 *     meilleurEleve()   → retourne l'élève avec la meilleure moyenne
 *     bulletin()        → affiche tous les élèves et leurs moyennes
 */

// Votre code ici ↓

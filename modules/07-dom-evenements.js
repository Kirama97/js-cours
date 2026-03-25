// ============================================================
//  MODULE 07 — DOM & Événements
//  Objectif : Manipuler la page HTML avec JavaScript.
//  ⚠️  Ce module doit être lié à un fichier HTML pour fonctionner.
// ============================================================

// ───────────────────────────────────────────────
//  LEÇON 1 : Sélectionner des éléments
// ───────────────────────────────────────────────

// Sélectionner un élément par son ID
const titre = document.getElementById("titre");

// Sélectionner par sélecteur CSS (retourne le premier)
const btn = document.querySelector(".mon-bouton");

// Sélectionner tous les éléments correspondants
const paragraphes = document.querySelectorAll("p");
const items = document.querySelectorAll("li");

// ───────────────────────────────────────────────
//  LEÇON 2 : Modifier le contenu et les styles
// ───────────────────────────────────────────────

// Modifier le texte
if (titre) {
  titre.textContent = "Bonjour depuis JavaScript !";
  // innerHTML permet d'insérer du HTML
  titre.innerHTML = "Bonjour <em>depuis</em> JavaScript !";
}

// Modifier les styles CSS directement
if (titre) {
  titre.style.color = "#3B82F6";
  titre.style.fontSize = "2rem";
  titre.style.fontWeight = "bold";
}

// Ajouter / supprimer des classes CSS
if (titre) {
  titre.classList.add("actif");
  titre.classList.remove("cache");
  titre.classList.toggle("souligne");        // ajoute si absent, supprime si présent
  console.log(titre.classList.contains("actif")); // true
}

// ───────────────────────────────────────────────
//  LEÇON 3 : Créer et insérer des éléments
// ───────────────────────────────────────────────

// Créer un nouveau <li>
const newItem = document.createElement("li");
newItem.textContent = "Nouvel élément";
newItem.classList.add("item");

// L'insérer dans une liste
const liste = document.getElementById("ma-liste");
if (liste) {
  liste.appendChild(newItem);       // à la fin
  // liste.prepend(newItem);        // au début
  // liste.insertBefore(newItem, liste.firstChild); // avant un élément
}

// Supprimer un élément
const aSupprimer = document.getElementById("a-supprimer");
if (aSupprimer) aSupprimer.remove();

// ───────────────────────────────────────────────
//  LEÇON 4 : Événements (addEventListener)
// ───────────────────────────────────────────────

const monBouton = document.getElementById("mon-bouton");

if (monBouton) {
  // Clic
  monBouton.addEventListener("click", function(event) {
    console.log("Bouton cliqué !", event);
    alert("Vous avez cliqué !");
  });

  // Survol de souris
  monBouton.addEventListener("mouseover", () => {
    monBouton.style.backgroundColor = "#1D4ED8";
  });

  monBouton.addEventListener("mouseout", () => {
    monBouton.style.backgroundColor = "";
  });
}

// ───────────────────────────────────────────────
//  LEÇON 5 : Événements de formulaire
// ───────────────────────────────────────────────

const champNom = document.getElementById("champ-nom");
const resultat = document.getElementById("resultat");

if (champNom) {
  // Saisie en temps réel
  champNom.addEventListener("input", function() {
    if (resultat) {
      resultat.textContent = `Bonjour, ${this.value} !`;
    }
  });

  // Validation à la perte de focus
  champNom.addEventListener("blur", function() {
    if (this.value.trim() === "") {
      this.style.borderColor = "red";
    } else {
      this.style.borderColor = "green";
    }
  });
}

// Soumission de formulaire
const monForm = document.getElementById("mon-form");
if (monForm) {
  monForm.addEventListener("submit", function(e) {
    e.preventDefault(); // empêche le rechargement de page
    console.log("Formulaire soumis !");
    // Récupérer les valeurs
    const data = new FormData(monForm);
    for (let [cle, valeur] of data) {
      console.log(`${cle}: ${valeur}`);
    }
  });
}

// ───────────────────────────────────────────────
//  LEÇON 6 : Délégation d'événements
//            (écouter sur le parent, gérer les enfants)
// ───────────────────────────────────────────────

const container = document.getElementById("container");
if (container) {
  container.addEventListener("click", function(e) {
    if (e.target.classList.contains("btn-supprimer")) {
      e.target.closest("li").remove();
    }
    if (e.target.classList.contains("btn-modifier")) {
      const li = e.target.closest("li");
      const texte = li.querySelector(".texte");
      const nouveau = prompt("Nouveau texte ?", texte.textContent);
      if (nouveau) texte.textContent = nouveau;
    }
  });
}

// ───────────────────────────────────────────────
//  LEÇON 7 : LocalStorage (persistance locale)
// ───────────────────────────────────────────────

// Sauvegarder
localStorage.setItem("prenom", "Ibra");
localStorage.setItem("preferences", JSON.stringify({ theme: "dark", langue: "fr" }));

// Lire
const prenom = localStorage.getItem("prenom");
const prefs  = JSON.parse(localStorage.getItem("preferences") || "{}");
console.log(prenom);        // "Ibra"
console.log(prefs.theme);   // "dark"

// Supprimer
localStorage.removeItem("prenom");
// localStorage.clear(); // tout effacer

// ============================================================
//  EXERCICES — nécessitent le fichier HTML correspondant
// ============================================================

/*
 * EX 1 ── Liste de tâches (Todo List)
 *   Créez une page avec :
 *   - Un champ texte + bouton "Ajouter"
 *   - Une liste <ul> qui affiche les tâches
 *   - Chaque tâche a un bouton "✓" (compléter) et "✗" (supprimer)
 *   - Les tâches complétées sont barrées (text-decoration: line-through)
 *   - Sauvegardez les tâches dans localStorage
 */

// Votre code ici ↓


/*
 * EX 2 ── Formulaire de contact avec validation
 *   Créez un formulaire avec : nom, email, message
 *   Validez en temps réel :
 *   - nom : au moins 3 caractères
 *   - email : doit contenir @ et .
 *   - message : au moins 20 caractères
 *   Affichez des messages d'erreur sous chaque champ.
 *   Le bouton "Envoyer" est désactivé si des erreurs existent.
 */

// Votre code ici ↓


/*
 * EX 3 ── Galerie de photos interactive
 *   Créez dynamiquement une grille de cartes (titres + couleurs).
 *   Cliquer sur une carte l'agrandit (modal ou expansion).
 *   Ajoutez un filtre par catégorie.
 */

// Votre code ici ↓


/*
 * EX 4 ── (DÉFI) Quiz interactif
 *   Stockez 5 questions (objets avec question, options[], bonne réponse).
 *   Affichez les questions une par une.
 *   Montrez le score final avec un message de félicitation ou d'encouragement.
 */

// Votre code ici ↓

// ============================================================
//  MODULE 08 — JavaScript Asynchrone
//  Objectif : Comprendre et utiliser les callbacks,
//             les Promises et async/await.
// ============================================================

// ───────────────────────────────────────────────
//  LEÇON 1 : Pourquoi l'asynchrone ?
// ───────────────────────────────────────────────

// JavaScript est mono-thread. Pour les opérations longues
// (réseau, fichiers, timers), il faut ne pas bloquer le fil.

console.log("1 - Début");

setTimeout(() => {
  console.log("3 - Après 1 seconde");
}, 1000);

console.log("2 - Fin du code synchrone");
// Affiche : 1, 2, puis 3 après 1 seconde

// ───────────────────────────────────────────────
//  LEÇON 2 : Callbacks (ancienne approche)
// ───────────────────────────────────────────────

function chargerDonnees(callback) {
  setTimeout(() => {
    const donnees = { utilisateurs: ["Ibra", "Fatou", "Cheikh"] };
    callback(null, donnees);  // convention : (erreur, résultat)
  }, 1000);
}

chargerDonnees((err, data) => {
  if (err) {
    console.error("Erreur :", err);
    return;
  }
  console.log("Données reçues :", data);
});

// Callback Hell (pyramide de la mort) — à éviter !
// charger(function(res1) {
//   traiter(res1, function(res2) {
//     sauvegarder(res2, function(res3) {
//       // encore plus profond...
//     });
//   });
// });

// ───────────────────────────────────────────────
//  LEÇON 3 : Promises (Promesses)
// ───────────────────────────────────────────────

// Une Promise est dans l'un de ces états :
//  - pending  (en attente)
//  - fulfilled (résolue / succès)
//  - rejected  (rejetée / erreur)

function simulerRequete(succes = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (succes) {
        resolve({ data: "Voici les données !" });
      } else {
        reject(new Error("La requête a échoué."));
      }
    }, 1000);
  });
}

// Utilisation avec .then() / .catch() / .finally()
simulerRequete(true)
  .then(resultat => {
    console.log("Succès :", resultat.data);
    return resultat.data.toUpperCase(); // enchaîner
  })
  .then(majuscule => console.log("Transformé :", majuscule))
  .catch(erreur => console.error("Erreur :", erreur.message))
  .finally(() => console.log("Requête terminée (toujours exécuté)."));

// ───────────────────────────────────────────────
//  LEÇON 4 : Promise.all / Promise.race
// ───────────────────────────────────────────────

const p1 = new Promise(res => setTimeout(() => res("P1 OK"), 500));
const p2 = new Promise(res => setTimeout(() => res("P2 OK"), 300));
const p3 = new Promise(res => setTimeout(() => res("P3 OK"), 800));

// Promise.all : attend TOUTES les promesses (ou échoue si l'une échoue)
Promise.all([p1, p2, p3]).then(resultats => {
  console.log("Tous terminés :", resultats);
});

// Promise.race : retourne la PREMIÈRE résolue
Promise.race([p1, p2, p3]).then(premier => {
  console.log("Premier :", premier); // "P2 OK" (300ms)
});

// Promise.allSettled : attend toutes, peu importe succès/échec
Promise.allSettled([p1, p2, Promise.reject("Oups !")]).then(r => {
  r.forEach(res => console.log(res.status, res.value ?? res.reason));
});

// ───────────────────────────────────────────────
//  LEÇON 5 : async / await (la syntaxe moderne et lisible)
// ───────────────────────────────────────────────

async function obtenirProfil(id) {
  try {
    // await "attend" la promesse sans bloquer le reste du programme
    const utilisateur = await simulerRequete(true);
    console.log(`Profil ${id} :`, utilisateur.data);
    return utilisateur;
  } catch (erreur) {
    console.error("Impossible de charger le profil :", erreur.message);
    return null;
  }
}

obtenirProfil(42);

// ───────────────────────────────────────────────
//  LEÇON 6 : fetch() — appels API réels
// ───────────────────────────────────────────────

// fetch retourne une Promise
async function chargerUtilisateurs() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const utilisateurs = await response.json(); // parse le JSON
    console.log(`${utilisateurs.length} utilisateurs chargés.`);

    // Afficher les noms
    utilisateurs.forEach(u => console.log(`- ${u.name} (${u.email})`));
    return utilisateurs;

  } catch (erreur) {
    console.error("Erreur réseau :", erreur.message);
  }
}

// Appel (dans un navigateur)
// chargerUtilisateurs();

// ───────────────────────────────────────────────
//  LEÇON 7 : Gestion avancée des erreurs async
// ───────────────────────────────────────────────

async function avecTimeout(promesse, ms) {
  const timer = new Promise((_, reject) =>
    setTimeout(() => reject(new Error(`Timeout après ${ms}ms`)), ms)
  );
  return Promise.race([promesse, timer]);
}

async function test() {
  try {
    const res = await avecTimeout(simulerRequete(true), 2000);
    console.log("Reçu dans les temps :", res);
  } catch (e) {
    console.error(e.message);
  }
}
test();

// ============================================================
//  EXERCICES
// ============================================================

/*
 * EX 1 ── Timer personnalisé
 *   Écrivez une fonction attendre(ms) qui retourne une Promise
 *   qui se résout après `ms` millisecondes.
 *   Utilisez-la pour créer un compte à rebours : 5, 4, 3, 2, 1, GO !
 */

// Votre code ici ↓


/*
 * EX 2 ── Fetch + Affichage
 *   Utilisez l'API publique https://jsonplaceholder.typicode.com/posts
 *   a) Chargez les 10 premiers articles (limit=10 via ?_limit=10)
 *   b) Affichez leurs titres dans une liste HTML
 *   c) Au clic sur un titre, affichez son contenu (body)
 */

// Votre code ici ↓


/*
 * EX 3 ── Gestion de chargement
 *   Créez une interface avec :
 *   - Un bouton "Charger des données"
 *   - Un spinner/message "Chargement..." pendant la requête
 *   - L'affichage des données une fois reçues
 *   - Un message d'erreur en cas d'échec
 */

// Votre code ici ↓


/*
 * EX 4 ── (DÉFI) Requêtes en parallèle vs séquentielles
 *   Comparez le temps d'exécution entre :
 *   a) 3 requêtes fetch séquentielles (await l'une après l'autre)
 *   b) 3 requêtes fetch en parallèle (Promise.all)
 *   Utilisez console.time() et console.timeEnd() pour mesurer.
 */

// Votre code ici ↓

const modules = [
  {
    id: "01",
    titre: "Variables & Types",
    fichier: "modules/01-variables-types.js",
    lucideIcon: "variable",
    niveau: "Débutant",
    description: "Déclarer des variables avec let/const, comprendre les types (string, number, boolean…) et maîtriser les opérateurs.",
    lecons: [
      "Déclarer des variables (let, const, var)",
      "Les types primitifs",
      "Template literals",
      "Opérateurs arithmétiques et logiques"
    ],
    exercices: [
      {
        titre: "Affichage personnalisé",
        codeInit: "const prenom = 'Votre prénom';\nlet age = 25;\nlet ville = 'Dakar';\n\n// Affichez : 'Je m\\'appelle X, j\\'ai Y ans et j\\'habite à Z.'\n",
        enonceFull: "Déclarez trois variables :\n   - votre prénom (const)\n   - votre âge   (let)\n   - votre ville  (let)\n   Affichez : \"Je m'appelle X, j'ai Y ans et j'habite à Z.\""
      },
      {
        titre: "Calculatrice basique",
        codeInit: "let a = 10;\nlet b = 5;\n\n// Affichez la somme, la différence, le produit et le quotient de a et b\n",
        enonceFull: "Demandez à l'utilisateur deux nombres via prompt()\n   et affichez leur somme, différence, produit et quotient."
      },
      {
        titre: "Vérification pair/impair",
        codeInit: "let nombre = 42;\n\n// Vérifiez si le nombre est pair ou impair\n",
        enonceFull: "Vérifiez si un nombre entré par l'utilisateur est :\n   - positif, négatif ou zéro\n   - pair ou impair\n   Utilisez console.log() pour afficher les résultats."
      },
      {
        titre: "🔥 Expression booléenne",
        codeInit: "let n = 50;\n\n// Écrivez une expression qui vaut true si n est entre 1 et 100 inclus\nlet estValide = false; // Remplacez false par votre expression\nconsole.log(estValide);\n",
        enonceFull: "(DÉFI) Sans utiliser if/else, écrivez une expression\n   booléenne qui vaut true si un nombre n est compris\n   entre 1 et 100 inclus."
      }
    ],
    concepts: [
      "let",
      "const",
      "typeof",
      "string",
      "number",
      "boolean",
      "template literal",
      "opérateur",
      "==="
    ],
    contenuLecon: "<div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 1 : Déclarer des variables\n// ───────────────────────────────────────────────\n\n// Il existe trois mots-clés : var (ancien), let, const\nlet prenom = \"Amadou\";       // peut changer\nconst pays = \"Sénégal\";     // ne peut PAS changer\nvar age = 20;                // à éviter (portée globale)\n\nconsole.log(prenom, pays, age);\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 2 : Les types de données\n// ───────────────────────────────────────────────\n\nlet texte    = \"Bonjour\";          // String\nlet nombre   = 42;                 // Number\nlet decimal  = 3.14;               // Number (décimal)\nlet vrai     = true;               // Boolean\nlet faux     = false;              // Boolean\nlet rien     = null;               // Null (vide volontaire)\nlet inconnu  = undefined;          // Undefined (pas encore défini)\n\nconsole.log(typeof texte);    // \"string\"\nconsole.log(typeof nombre);   // \"number\"\nconsole.log(typeof vrai);     // \"boolean\"\nconsole.log(typeof rien);     // \"object\" (particularité JS !)\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 3 : Template Literals (chaînes modernes)\n// ───────────────────────────────────────────────\n\nlet nom = \"Fatou\";\nlet ville = \"Dakar\";\nlet message = `Je m'appelle ${nom} et j'habite à ${ville}.`;\nconsole.log(message);\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 4 : Opérateurs\n// ───────────────────────────────────────────────\n\n// Arithmétiques\nconsole.log(10 + 3);   // 13\nconsole.log(10 - 3);   // 7\nconsole.log(10 * 3);   // 30\nconsole.log(10 / 3);   // 3.333...\nconsole.log(10 % 3);   // 1  (modulo = reste)\nconsole.log(2 ** 8);   // 256 (puissance)\n\n// Comparaison\nconsole.log(5 == \"5\");    // true  (égalité valeur seulement)\nconsole.log(5 === \"5\");   // false (égalité valeur ET type) ← préférer ===\nconsole.log(5 !== 4);     // true\n\n// Logiques\nconsole.log(true && false);  // false  (ET)  meme si 99% et vrais si 1% et faux il te dira faux\nconsole.log(true || false);  // true   (OU) meme si 99% et faux si 1% et vrais il te dira vrais\nconsole.log(!true);          // false  (NON)\n\n</code></pre></div>"
  },
  {
    id: "02",
    titre: "Conditions",
    fichier: "modules/02-conditions.js",
    lucideIcon: "git-branch",
    niveau: "Débutant",
    description: "Contrôler le flux du programme avec if/else, switch, l'opérateur ternaire et les opérateurs modernes.",
    lecons: [
      "if / else if / else",
      "Opérateur ternaire",
      "switch / case",
      "?? et ?."
    ],
    exercices: [
      {
        titre: "Calcul IMC",
        codeInit: "let poids = 70; // kg\nlet taille = 1.75; // m\n\n// Calculez l'IMC (poids / taille²)\n// Si IMC < 18.5, affichez 'Insuffisance pondérale'\n// Si IMC entre 18.5 et 24.9, affichez 'Poids normal'\n// Sinon, affichez 'Surpoids'\n",
        enonceFull: "IMC (Indice de Masse Corporelle)\n   Demandez le poids (kg) et la taille (m) d'une personne.\n   Calculez l'IMC = poids / (taille * taille)\n   Affichez la catégorie :\n     < 18.5  → \"Insuffisance pondérale\"\n     18.5–25 → \"Poids normal\"\n     25–30   → \"Surpoids\"\n     > 30    → \"Obésité\""
      },
      {
        titre: "Calculatrice avec switch",
        codeInit: "let operateur = '+';\nlet nb1 = 10;\nlet nb2 = 5;\n\n// Utilisez un switch pour calculer le résultat selon l'opérateur\n",
        enonceFull: "Calculatrice simple\n   Demandez deux nombres et une opération (+, -, *, /)\n   via prompt(). Utilisez switch pour calculer et afficher\n   le résultat. Gérez la division par zéro."
      },
      {
        titre: "Année bissextile",
        codeInit: "let annee = 2024;\n\n// Vérifiez si l'année est bissextile (divisible par 4, mais pas par 100, sauf si divisible par 400)\n",
        enonceFull: "Année bissextile\n   Une année est bissextile si :\n     - divisible par 4, ET\n     - (pas divisible par 100) OU (divisible par 400)\n   Demandez une année et affichez si elle est bissextile."
      },
      {
        titre: "🔥 Pierre-Papier-Ciseaux",
        codeInit: "let choixJoueur = 'Pierre';\nlet choixOrdi = 'Ciseaux';\n\n// Déterminez le gagnant\n",
        enonceFull: "(DÉFI) Jeu Pierre-Papier-Ciseaux\n   Le joueur entre son choix. L'ordinateur choisit au hasard.\n   Math.random() renvoie un nombre entre 0 et 1.\n   Affichez le gagnant."
      }
    ],
    concepts: [
      "if",
      "else",
      "switch",
      "ternaire",
      "break",
      "??",
      "?."
    ],
    contenuLecon: "<div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 1 : if / else if / else\n// ───────────────────────────────────────────────\n\nlet note = 14;\n\nif (note &gt;= 16) {\n  console.log(\"Très bien !\");\n} else if (note &gt;= 12) {\n  console.log(\"Bien !\");\n} else if (note &gt;= 10) {\n  console.log(\"Passable.\");\n} else {\n  console.log(\"Insuffisant.\");\n}\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 2 : Opérateur ternaire  (condition ? si vrai : si faux)\n// ───────────────────────────────────────────────\n\nlet score = 55;\nlet resultat = score &gt;= 50 ? \"Admis\" : \"Recalé\";\nconsole.log(resultat);  // \"Admis\"\n\nlet jour = 1;\n\nswitch (jour) {\n  case 1:\n    console.log(\"Lundi\");\n    break;\n\n  case 2:\n    console.log(\"Mardi\");\n    break;\n\n  case 3:\n    console.log(\"Mercredi\");\n    break;\n\n  case 4:\n    console.log(\"Jeudi\");\n    break;\n\n  case 5:\n    console.log(\"Vendredi\");\n    break;\n\n  case 6:\n    console.log(\"Samedi\");\n    break;\n\n  case 7:\n    console.log(\"Dimanche\");\n    break;\n\n  default:\n    console.log(\"Jour inconnu\");\n}\n\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 4 : Nullish coalescing (??) et Optional chaining (?.)\n// ───────────────────────────────────────────────\n\nlet utilisateur = null;\nlet nomAffiche = utilisateur ?? \"Visiteur anonyme\";\nconsole.log(nomAffiche);  // \"Visiteur anonyme\"\n\nlet profil = { adresse: { ville: \"Thiès\" } };\nconsole.log(profil?.adresse?.ville);    // \"Thiès\"\nconsole.log(profil?.telephone?.numero); // undefined (pas d'erreur !)\n\n</code></pre></div>"
  },
  {
    id: "03",
    titre: "Boucles",
    fichier: "modules/03-boucles.js",
    lucideIcon: "refresh-cw",
    niveau: "Débutant",
    description: "Répéter des instructions avec for, while, do…while et parcourir des collections avec for…of et for…in.",
    lecons: [
      "Boucle for classique",
      "while et do…while",
      "break et continue",
      "for…of et for…in",
      "Boucles imbriquées"
    ],
    exercices: [
      {
        titre: "Somme 1 à 100",
        codeInit: "let somme = 0;\n\n// Utilisez une boucle pour calculer la somme des nombres de 1 à 100\nconsole.log(somme);\n",
        enonceFull: "Somme et moyenne\n   Affichez la somme et la moyenne des entiers de 1 à 100."
      },
      {
        titre: "FizzBuzz",
        codeInit: "// Affichez les nombres de 1 à 30.\n// Remplacez les multiples de 3 par 'Fizz'\n// Les multiples de 5 par 'Buzz'\n// Les multiples de 15 par 'FizzBuzz'\n",
        enonceFull: "FizzBuzz (classique !)\n   Pour i de 1 à 50 :\n     - si i est divisible par 3 ET 5 → \"FizzBuzz\"\n     - si divisible par 3 seulement  → \"Fizz\"\n     - si divisible par 5 seulement  → \"Buzz\"\n     - sinon                         → afficher i"
      },
      {
        titre: "Pyramide d'étoiles",
        codeInit: "// Affichez une pyramide de 5 lignes\n// *\n// **\n// ***\n// ****\n// *****\n",
        enonceFull: "Pyramide d'étoiles\n   Avec des boucles imbriquées, affichez :\n   *\n   **\n   ***\n   ****\n   *****\n   Pour une hauteur n entrée par l'utilisateur."
      },
      {
        titre: "Fibonacci",
        codeInit: "// Affichez les 10 premiers nombres de la suite de Fibonacci\n// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34\n",
        enonceFull: "Suite de Fibonacci\n   Affichez les 15 premiers termes de la suite de Fibonacci.\n   (0, 1, 1, 2, 3, 5, 8, 13, 21, ...)"
      }
    ],
    concepts: [
      "for",
      "while",
      "do…while",
      "break",
      "continue",
      "for…of",
      "for…in",
      "imbriqué"
    ],
    contenuLecon: "<div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 1 : Boucle for classique\n// ───────────────────────────────────────────────\n\n// Syntaxe : for (initialisation; condition; incrémentation)\nfor (let i = 0; i &lt; 5; i++) {\n  console.log(`Tour n° ${i}`);\n}\n\n// Compter à l'envers\nfor (let i = 10; i &gt;= 0; i--) {\n  console.log(i);\n}\nconsole.log(\"Décollage ! 🚀\");\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 2 : Boucle while\n// ───────────────────────────────────────────────\n\nlet compteur = 0;\nwhile (compteur &lt; 5) {\n  console.log(`compteur = ${compteur}`);\n  compteur++;\n}\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 3 : Boucle do…while (s'exécute AU MOINS une fois)\n// ───────────────────────────────────────────────\n\nlet secret = 7;\nlet tentative;\ndo {\n  tentative = Math.floor(Math.random() * 10) + 1;\n  console.log(`Tentative : ${tentative}`);\n} while (tentative !== secret);\nconsole.log(\"Trouvé !\");\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 4 : break et continue\n// ───────────────────────────────────────────────\n\n// break : sortir immédiatement de la boucle\nfor (let i = 0; i &lt; 10; i++) {\n  if (i === 5) break;\n  console.log(i);   // affiche 0 1 2 3 4\n}\n\n// continue : passer au tour suivant\nfor (let i = 0; i &lt; 10; i++) {\n  if (i % 2 === 0) continue;\n  console.log(i);   // affiche 1 3 5 7 9\n}\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 5 : for…of  (parcourir les éléments d'un itérable)\n// ───────────────────────────────────────────────\n\nlet fruits = [\"Mangue\", \"Banane\", \"Papaye\", \"Bissap\"];\nfor (let fruit of fruits) {\n  console.log(fruit);\n}\n\n// Parcourir les caractères d'une chaîne\nfor (let lettre of \"Sénégal\") {\n  console.log(lettre);\n}\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 6 : for…in  (parcourir les clés d'un objet)\n// ───────────────────────────────────────────────\n\nlet etudiant = { nom: \"Ibra\", age: 21, ville: \"Thiès\" };\nfor (let cle in etudiant) {\n  console.log(`${cle} : ${etudiant[cle]}`);\n}\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 7 : Boucles imbriquées (nested loops)\n// ───────────────────────────────────────────────\n\n// Table de multiplication (1 à 5)\nfor (let i = 1; i &lt;= 5; i++) {\n  for (let j = 1; j &lt;= 5; j++) {\n    process.stdout.write(`${i * j}\\t`);\n  }\n  console.log();\n}\n\n</code></pre></div>"
  },
  {
    id: "04",
    titre: "Tableaux",
    fichier: "modules/04-tableaux.js",
    lucideIcon: "list",
    niveau: "Intermédiaire",
    description: "Créer et manipuler des tableaux avec les méthodes fondamentales : map, filter, reduce, sort et bien d'autres.",
    lecons: [
      "Créer et indexer",
      "push / pop / shift / unshift / splice",
      "indexOf, includes, find",
      "map, filter, reduce, forEach",
      "sort, slice, join, flat, spread"
    ],
    exercices: [
      {
        titre: "Statistiques de notes",
        codeInit: "const notes = [12, 15, 8, 19, 10, 14];\n\n// Trouvez la note minimale, maximale, et calculez la moyenne\n",
        enonceFull: "Statistiques\n   Soit notes = [12, 8, 17, 14, 9, 16, 11, 15, 7, 18]\n   Calculez et affichez :\n   a) La moyenne de la classe\n   b) La note la plus haute et la plus basse\n   c) Le nombre d'élèves ayant la moyenne (≥10)\n   d) Le tableau trié du plus bas au plus haut"
      },
      {
        titre: "Transformation de phrases",
        codeInit: "const mots = ['JavaScript', 'est', 'fantastique'];\n\n// Transformez ce tableau en une phrase (chaîne de caractères)\n",
        enonceFull: "Manipulation de chaînes\n   Soit une phrase = \"le javascript est un langage puissant\"\n   a) Transformez-la en tableau de mots (split)\n   b) Mettez chaque mot en Majuscule (map + charAt + slice)\n   c) Reconstituez la phrase avec join"
      },
      {
        titre: "Panier d'achat",
        codeInit: "const prix = [10.5, 20.0, 5.99, 15.0];\n\n// Appliquez une taxe de 20% sur chaque prix (utilisez map())\n",
        enonceFull: "Panier d'achat\n   Créez un tableau de produits (objets {nom, prix}).\n   a) Affichez tous les produits avec leur prix\n   b) Calculez le total du panier avec reduce\n   c) Filtrez les produits dont le prix est > 5000 FCFA"
      },
      {
        titre: "🔥 Sans doublons",
        codeInit: "const nombres = [1, 2, 2, 3, 4, 4, 5];\n\n// Créez un nouveau tableau sans doublons\n",
        enonceFull: "(DÉFI) Tableau sans doublons\n   Écrivez une fonction qui prend un tableau en paramètre\n   et retourne un nouveau tableau sans doublons.\n   Indice : utilisez Set ou filter + indexOf."
      }
    ],
    concepts: [
      "Array",
      "index",
      "map",
      "filter",
      "reduce",
      "forEach",
      "sort",
      "spread",
      "destructuration"
    ],
    contenuLecon: "<div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 1 : Créer un tableau\n// ───────────────────────────────────────────────\n\nlet vide   = [];                             // tableau vide\nlet notes  = [14, 17, 9, 12, 18];           // nombres\nlet noms   = [\"Ibra\", \"Fatou\", \"Cheikh\"];   // chaînes\nlet mixte  = [42, \"bonjour\", true, null];   // types mélangés\n\nconsole.log(notes[0]);     // 14  (index commence à 0)\nconsole.log(notes.length); // 5\n\n// Modifier un élément\nnotes[2] = 11;\nconsole.log(notes);  // [14, 17, 11, 12, 18]\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 2 : Méthodes de base (ajouter / supprimer)\n// ───────────────────────────────────────────────\n\nlet fruits = [\"Mangue\", \"Banane\"];\n\nfruits.push(\"Papaye\");       // ajoute à la FIN\nfruits.unshift(\"Orange\");    // ajoute au DÉBUT\nconsole.log(fruits);         // [\"Orange\", \"Mangue\", \"Banane\", \"Papaye\"]\n\nfruits.pop();                // supprime le DERNIER  → \"Papaye\"\nfruits.shift();              // supprime le PREMIER  → \"Orange\"\nconsole.log(fruits);         // [\"Mangue\", \"Banane\"]\n\n// splice : insérer / supprimer à n'importe quelle position\nfruits.splice(1, 0, \"Bissap\");  // insère \"Bissap\" à l'index 1\nconsole.log(fruits);            // [\"Mangue\", \"Bissap\", \"Banane\"]\n\nfruits.splice(1, 1);            // supprime 1 élément à l'index 1\nconsole.log(fruits);            // [\"Mangue\", \"Banane\"]\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 3 : Méthodes de recherche\n// ───────────────────────────────────────────────\n\nlet villes = [\"Dakar\", \"Thiès\", \"Ziguinchor\", \"Saint-Louis\"];\n\nconsole.log(villes.indexOf(\"Thiès\"));       // 1\nconsole.log(villes.includes(\"Kaolack\"));   // false\nconsole.log(villes.find(v =&gt; v.length &gt; 7)); // \"Ziguinchor\"\nconsole.log(villes.findIndex(v =&gt; v.startsWith(\"S\"))); // 3\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 4 : Méthodes de transformation (TRÈS importantes)\n// ───────────────────────────────────────────────\n\nlet nombres = [1, 2, 3, 4, 5];\n\n// map : transforme chaque élément → NOUVEAU tableau\nlet doubles = nombres.map(n =&gt; n * 2);\nconsole.log(doubles);  // [2, 4, 6, 8, 10]\n\n// filter : garde les éléments qui passent le test → NOUVEAU tableau\nlet pairs = nombres.filter(n =&gt; n % 2 === 0);\nconsole.log(pairs);    // [2, 4]\n\n// reduce : réduit le tableau à une seule valeur\nlet somme = nombres.reduce((acc, n) =&gt; acc + n, 0);\nconsole.log(somme);    // 15\n\n// forEach : parcourir (ne retourne rien)\nnombres.forEach((n, index) =&gt; {\n  console.log(`Index ${index} → valeur ${n}`);\n});\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 5 : Autres méthodes utiles\n// ───────────────────────────────────────────────\n\nlet lettres = [\"c\", \"a\", \"e\", \"b\", \"d\"];\n\n// sort : trier (attention : modifie le tableau original !)\nlettres.sort();\nconsole.log(lettres); // [\"a\", \"b\", \"c\", \"d\", \"e\"]\n\n// Pour trier des nombres :\nlet n2 = [10, 2, 30, 4];\nn2.sort((a, b) =&gt; a - b);   // croissant\nconsole.log(n2);             // [2, 4, 10, 30]\n\n// reverse : inverser\nconsole.log([1, 2, 3].reverse()); // [3, 2, 1]\n\n// slice : extraire une portion (non destructif)\nlet fruits2 = [\"A\", \"B\", \"C\", \"D\", \"E\"];\nconsole.log(fruits2.slice(1, 3));  // [\"B\", \"C\"]\n\n// join : joindre en chaîne\nconsole.log([\"Bon\", \"jour\"].join(\" \")); // \"Bon jour\"\n\n// flat : aplatir un tableau imbriqué\nlet imb = [[1, 2], [3, 4], [5]];\nconsole.log(imb.flat());  // [1, 2, 3, 4, 5]\n\n// spread : copier / fusionner\nlet tab1 = [1, 2, 3];\nlet tab2 = [4, 5, 6];\nlet fusion = [...tab1, ...tab2];\nconsole.log(fusion); // [1, 2, 3, 4, 5, 6]\n\n// Destructuration\nlet [premier, deuxieme, ...reste] = [10, 20, 30, 40, 50];\nconsole.log(premier);   // 10\nconsole.log(deuxieme);  // 20\nconsole.log(reste);     // [30, 40, 50]\n\n</code></pre></div>"
  },
  {
    id: "05",
    titre: "Fonctions",
    fichier: "modules/05-fonctions.js",
    lucideIcon: "code-2",
    niveau: "Intermédiaire",
    description: "Maîtriser toutes les formes de fonctions : déclarations, expressions, fléchées, closures et récursivité.",
    lecons: [
      "Déclaration vs expression",
      "Fonctions fléchées",
      "Paramètres par défaut et rest",
      "Fonctions d'ordre supérieur",
      "Closures",
      "Récursivité"
    ],
    exercices: [
      {
        titre: "Conversion températures",
        codeInit: "// Créez une fonction qui convertit les degrés Celsius en Fahrenheit\n// Formule : (C * 9/5) + 32\n",
        enonceFull: "Conversion de températures\n   Écrivez deux fonctions fléchées :\n   - celsiusToFahrenheit(c) → F = (C * 9/5) + 32\n   - fahrenheitToCelsius(f) → C = (F - 32) * 5/9\n   Testez avec quelques valeurs et affichez les résultats."
      },
      {
        titre: "Palindrome",
        codeInit: "// Créez une fonction qui vérifie si un mot est un palindrome (ex: 'radar')\n",
        enonceFull: "Palindrome\n   Écrivez une fonction estPalindrome(mot) qui retourne\n   true si le mot se lit pareil à l'endroit et à l'envers.\n   Ex : \"radar\" → true, \"bonjour\" → false\n   Ignorez la casse (majuscules/minuscules)."
      },
      {
        titre: "Calculatrice",
        codeInit: "// Créez une fonction d'ordre supérieur qui prend une opération en argument\n",
        enonceFull: "Calculatrice avancée\n   Créez un objet \"calculatrice\" avec les méthodes :\n   additionner, soustraire, multiplier, diviser\n   Chaque méthode prend deux paramètres et retourne le résultat.\n   La division doit gérer le cas de division par zéro."
      },
      {
        titre: "🔥 Pipeline map/filter/reduce",
        codeInit: "// Chaînez map, filter et reduce pour traiter un tableau de données\n",
        enonceFull: "Pipeline de transformations\n   Utilisez map, filter et reduce en chaîne :\n   Soit notes = [7, 14, 12, 5, 18, 9, 16, 11]\n   a) Filtrez les notes >= 10\n   b) Multipliez chaque note passée par 2 (simulation bonification)\n   c) Calculez la moyenne des notes bonifiées\n   Faites tout en une seule expression chaînée."
      }
    ],
    concepts: [
      "function",
      "arrow function",
      "return",
      "closure",
      "HOF",
      "rest params",
      "récursivité",
      "factory"
    ],
    contenuLecon: "<div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 1 : Déclaration de fonction (function declaration)\n// ───────────────────────────────────────────────\n\nfunction direBonjour(prenom) {\n  return `Bonjour, ${prenom} !`;\n}\n\nconsole.log(direBonjour(\"Ibra\"));    // \"Bonjour, Ibra !\"\nconsole.log(direBonjour(\"Fatou\"));   // \"Bonjour, Fatou !\"\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 2 : Expression de fonction (function expression)\n// ───────────────────────────────────────────────\n\nconst addition = function(a, b) {\n  return a + b;\n};\n\nconsole.log(addition(5, 3));   // 8\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 3 : Fonction fléchée (Arrow Function) ← syntaxe moderne\n// ───────────────────────────────────────────────\n\n// Syntaxe complète\nconst multiplier = (a, b) =&gt; {\n  return a * b;\n};\n\n// Syntaxe courte (retour implicite si une seule expression)\nconst carre = n =&gt; n * n;\nconst saluer = () =&gt; \"Salut tout le monde !\";\n\nconsole.log(multiplier(4, 5));  // 20\nconsole.log(carre(7));          // 49\nconsole.log(saluer());          // \"Salut tout le monde !\"\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 4 : Paramètres par défaut\n// ───────────────────────────────────────────────\n\nfunction creerProfil(nom, role = \"Étudiant\", niveau = 1) {\n  return `${nom} — ${role} (niveau ${niveau})`;\n}\n\nconsole.log(creerProfil(\"Cheikh\"));              // \"Cheikh — Étudiant (niveau 1)\"\nconsole.log(creerProfil(\"Aïssa\", \"Professeur\", 5)); // \"Aïssa — Professeur (niveau 5)\"\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 5 : Paramètres rest (...args)\n// ───────────────────────────────────────────────\n\nfunction somme(...nombres) {\n  return nombres.reduce((acc, n) =&gt; acc + n, 0);\n}\n\nconsole.log(somme(1, 2, 3));           // 6\nconsole.log(somme(10, 20, 30, 40));    // 100\n\n</code></pre></div>"
  },
  {
    id: "06",
    titre: "Objets",
    fichier: "modules/06-objets.js",
    lucideIcon: "box",
    niveau: "Intermédiaire",
    description: "Créer et manipuler des objets, utiliser les classes ES6 avec constructeur, héritage, getters et setters.",
    lecons: [
      "Objet littéral",
      "Méthodes et this",
      "Destructuration",
      "Spread et Object.*",
      "Classes ES6",
      "Héritage extends",
      "Getters & Setters"
    ],
    exercices: [
      {
        titre: "Carnet de contacts",
        codeInit: "const contact = {\n  nom: 'Dupont',\n  prenom: 'Jean',\n  telephone: '0123456789'\n};\n\n// Affichez 'Jean Dupont' en utilisant la destructuration\n",
        enonceFull: "Carnet de contacts\n   Créez un tableau d'objets représentant 5 contacts :\n   { nom, prenom, telephone, email, ville }\n   a) Affichez tous les contacts\n   b) Trouvez le contact par son nom (find)\n   c) Affichez uniquement les contacts d'une ville donnée (filter)\n   d) Triez les contacts par nom alphabétiquement (sort)"
      },
      {
        titre: "Classe Banque",
        codeInit: "// Créez une classe CompteBancaire avec un solde et des méthodes deposer() et retirer()\n",
        enonceFull: "Classe Banque\n   Créez une classe CompteBancaire avec :\n   - Propriétés : titulaire, solde (défaut: 0), historique (tableau)\n   - Méthodes : deposer(montant), retirer(montant), afficherSolde()\n   - Getter : estPositif (retourne true si solde >= 0)\n   Chaque opération ajoute une entrée à l'historique.\n   La méthode retirer() refuse si le solde est insuffisant."
      },
      {
        titre: "Héritage Véhicules",
        codeInit: "// Créez une classe Vehicule et une classe Voiture qui en hérite\n",
        enonceFull: "Héritage : Véhicules\n   Classe Vehicule(marque, modele, annee)\n     méthode: demarrer(), arreter(), infos()\n   Classe Voiture extends Vehicule\n     + nbPortes, typeCarburant\n     méthode: klaxonner()\n   Classe Moto extends Vehicule\n     + cylindree\n     méthode: faireCabrer()\n   Créez 2-3 instances et testez toutes les méthodes."
      },
      {
        titre: "🔥 Système gestion classe",
        codeInit: "// Créez un système d'étudiants avec des notes et le calcul de leur moyenne\n",
        enonceFull: "(DÉFI) Système de gestion de classe\n   Classe Classe(nom, niveau) qui contient un tableau d'élèves.\n   Méthodes :\n     inscrire(eleve)   → ajoute un Etudiant\n     expulser(nom)     → supprime par nom\n     moyenneClasse()   → moyenne de tous les élèves\n     meilleurEleve()   → retourne l'élève avec la meilleure moyenne\n     bulletin()        → affiche tous les élèves et leurs moyennes"
      }
    ],
    concepts: [
      "object",
      "this",
      "class",
      "constructor",
      "extends",
      "super",
      "get",
      "set",
      "instanceof"
    ],
    contenuLecon: "<div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 1 : Créer un objet (littéral)\n// ───────────────────────────────────────────────\n\nlet etudiant = {\n  nom: \"Moussa\",\n  prenom: \"Diallo\",\n  age: 22,\n  ville: \"Thiès\",\n  actif: true\n};\n\n// Accéder aux propriétés\nconsole.log(etudiant.nom);        // \"Moussa\"  (notation point)\nconsole.log(etudiant[\"prenom\"]);  // \"Diallo\"  (notation crochets)\n\n// Ajouter / modifier / supprimer\netudiant.email = \"moussa@univ.sn\"; // ajouter\netudiant.age = 23;                 // modifier\ndelete etudiant.actif;             // supprimer\nconsole.log(etudiant);\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 2 : Méthodes dans un objet\n// ───────────────────────────────────────────────\n\nlet personne = {\n  nom: \"Awa\",\n  age: 25,\n  sePresenter: function() {\n    return `Je m'appelle ${this.nom} et j'ai ${this.age} ans.`;\n  },\n  // Raccourci ES6 :\n  saluer() {\n    return `Bonjour, je suis ${this.nom} !`;\n  }\n};\n\nconsole.log(personne.sePresenter());\nconsole.log(personne.saluer());\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 3 : Destructuration d'objet\n// ───────────────────────────────────────────────\n\nlet { nom, age, ville = \"Inconnue\" } = etudiant;\nconsole.log(nom);    // \"Moussa\"\nconsole.log(ville);  // \"Thiès\"\n\n// Renommer lors de la destructuration\nlet { nom: nomEtudiant, age: ageEtudiant } = etudiant;\nconsole.log(nomEtudiant);   // \"Moussa\"\n\n// Dans les paramètres de fonction\nfunction afficherEtudiant({ nom, prenom, age }) {\n  console.log(`${prenom} ${nom}, ${age} ans`);\n}\nafficherEtudiant(etudiant);\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 4 : Spread et Object.assign (copie / fusion)\n// ───────────────────────────────────────────────\n\nlet base = { role: \"user\", actif: true };\nlet extra = { nom: \"Ibra\", email: \"ibra@test.sn\" };\n\n// Fusion avec spread (moderne)\nlet complet = { ...base, ...extra };\nconsole.log(complet);\n\n// Copie superficielle\nlet copie = { ...etudiant };\ncopie.nom = \"Test\";\nconsole.log(etudiant.nom); // \"Moussa\" (original non modifié)\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 5 : Méthodes utiles de Object\n// ───────────────────────────────────────────────\n\nlet produit = { nom: \"Téléphone\", prix: 150000, stock: 12 };\n\nconsole.log(Object.keys(produit));    // [\"nom\", \"prix\", \"stock\"]\nconsole.log(Object.values(produit));  // [\"Téléphone\", 150000, 12]\nconsole.log(Object.entries(produit)); // [[\"nom\",\"Téléphone\"], ...]\n\n// Transformer entries en objet\nlet prix = Object.fromEntries([[\"USD\", 1], [\"EUR\", 0.92], [\"XOF\", 600]]);\nconsole.log(prix);\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 6 : Classes ES6 (Programmation Orientée Objet)\n// ───────────────────────────────────────────────\n\nclass Animal {\n  // Constructeur : appelé à la création (new Animal())\n  constructor(nom, espece) {\n    this.nom = nom;\n    this.espece = espece;\n    this.vivant = true;\n  }\n\n  // Méthode\n  sePresenter() {\n    return `Je suis ${this.nom}, un(e) ${this.espece}.`;\n  }\n\n  // Méthode statique (appelée sur la classe, pas l'instance)\n  static creerChien(nom) {\n    return new Animal(nom, \"chien\");\n  }\n}\n\nlet lion = new Animal(\"Simba\", \"lion\");\nconsole.log(lion.sePresenter());\nconsole.log(lion instanceof Animal);  // true\n\nlet rex = Animal.creerChien(\"Rex\");\nconsole.log(rex.sePresenter());\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 7 : Héritage (extends)\n// ───────────────────────────────────────────────\n\nclass Etudiant extends Animal {\n  constructor(nom, universite, niveau) {\n    super(nom, \"humain\");         // appelle le constructeur parent\n    this.universite = universite;\n    this.niveau = niveau;\n    this.notes = [];\n  }\n\n  ajouterNote(note) {\n    this.notes.push(note);\n  }\n\n  calculerMoyenne() {\n    if (this.notes.length === 0) return 0;\n    return this.notes.reduce((s, n) =&gt; s + n, 0) / this.notes.length;\n  }\n\n  // Surcharger (override) la méthode parente\n  sePresenter() {\n    return `${super.sePresenter()} Étudiant à ${this.universite}.`;\n  }\n}\n\nlet ibra = new Etudiant(\"Ibra\", \"Université de Thiès\", 2);\nibra.ajouterNote(14);\nibra.ajouterNote(16);\nibra.ajouterNote(12);\nconsole.log(ibra.sePresenter());\nconsole.log(`Moyenne : ${ibra.calculerMoyenne()}`);\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 8 : Getters & Setters\n// ───────────────────────────────────────────────\n\nclass Cercle {\n  constructor(rayon) {\n    this._rayon = rayon;\n  }\n\n  get rayon() { return this._rayon; }\n\n  set rayon(val) {\n    if (val &lt; 0) throw new Error(\"Le rayon doit être positif !\");\n    this._rayon = val;\n  }\n\n  get aire() {\n    return Math.PI * this._rayon ** 2;\n  }\n\n  get perimetre() {\n    return 2 * Math.PI * this._rayon;\n  }\n}\n\nlet c = new Cercle(5);\nconsole.log(c.aire.toFixed(2));       // \"78.54\"\nconsole.log(c.perimetre.toFixed(2));  // \"31.42\"\nc.rayon = 10;\nconsole.log(c.aire.toFixed(2));       // \"314.16\"\n\n</code></pre></div>"
  },
  {
    id: "07",
    titre: "DOM & Événements",
    fichier: "modules/07-dom-evenements.js",
    lucideIcon: "layout",
    niveau: "Avancé",
    description: "Manipuler la page HTML avec JavaScript : sélectionner, modifier, créer des éléments et réagir aux événements utilisateur.",
    lecons: [
      "Sélectionner des éléments",
      "Modifier contenu et styles",
      "Créer et insérer des éléments",
      "addEventListener",
      "Événements de formulaire",
      "Délégation d'événements",
      "LocalStorage"
    ],
    exercices: [
      {
        titre: "Todo List",
        codeInit: "// Note : Cet exercice nécessite une structure HTML.\n// Simulez l'ajout d'une tâche.\nconsole.log('Exercice interactif orienté DOM');\n",
        enonceFull: "Todo List"
      },
      {
        titre: "Formulaire avec validation",
        codeInit: "// Simulez la validation d'un formulaire\n",
        enonceFull: "Formulaire avec validation"
      },
      {
        titre: "Galerie interactive",
        codeInit: "// Logique de galerie d'images\n",
        enonceFull: "Galerie interactive"
      },
      {
        titre: "🔥 Quiz interactif",
        codeInit: "// Logique du quiz\n",
        enonceFull: "🔥 Quiz interactif"
      }
    ],
    concepts: [
      "DOM",
      "querySelector",
      "createElement",
      "classList",
      "addEventListener",
      "event",
      "LocalStorage"
    ],
    contenuLecon: "<div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 1 : Sélectionner des éléments\n// ───────────────────────────────────────────────\n\n// Sélectionner un élément par son ID\nconst titre = document.getElementById(\"titre\");\n\n// Sélectionner par sélecteur CSS (retourne le premier)\nconst btn = document.querySelector(\".mon-bouton\");\n\n// Sélectionner tous les éléments correspondants\nconst paragraphes = document.querySelectorAll(\"p\");\nconst items = document.querySelectorAll(\"li\");\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 2 : Modifier le contenu et les styles\n// ───────────────────────────────────────────────\n\n// Modifier le texte\nif (titre) {\n  titre.textContent = \"Bonjour depuis JavaScript !\";\n  // innerHTML permet d'insérer du HTML\n  titre.innerHTML = \"Bonjour &lt;em&gt;depuis&lt;/em&gt; JavaScript !\";\n}\n\n// Modifier les styles CSS directement\nif (titre) {\n  titre.style.color = \"#3B82F6\";\n  titre.style.fontSize = \"2rem\";\n  titre.style.fontWeight = \"bold\";\n}\n\n// Ajouter / supprimer des classes CSS\nif (titre) {\n  titre.classList.add(\"actif\");\n  titre.classList.remove(\"cache\");\n  titre.classList.toggle(\"souligne\");        // ajoute si absent, supprime si présent\n  console.log(titre.classList.contains(\"actif\")); // true\n}\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 3 : Créer et insérer des éléments\n// ───────────────────────────────────────────────\n\n// Créer un nouveau &lt;li&gt;\nconst newItem = document.createElement(\"li\");\nnewItem.textContent = \"Nouvel élément\";\nnewItem.classList.add(\"item\");\n\n// L'insérer dans une liste\nconst liste = document.getElementById(\"ma-liste\");\nif (liste) {\n  liste.appendChild(newItem);       // à la fin\n  // liste.prepend(newItem);        // au début\n  // liste.insertBefore(newItem, liste.firstChild); // avant un élément\n}\n\n// Supprimer un élément\nconst aSupprimer = document.getElementById(\"a-supprimer\");\nif (aSupprimer) aSupprimer.remove();\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 4 : Événements (addEventListener)\n// ───────────────────────────────────────────────\n\nconst monBouton = document.getElementById(\"mon-bouton\");\n\nif (monBouton) {\n  // Clic\n  monBouton.addEventListener(\"click\", function(event) {\n    console.log(\"Bouton cliqué !\", event);\n    alert(\"Vous avez cliqué !\");\n  });\n\n  // Survol de souris\n  monBouton.addEventListener(\"mouseover\", () =&gt; {\n    monBouton.style.backgroundColor = \"#1D4ED8\";\n  });\n\n  monBouton.addEventListener(\"mouseout\", () =&gt; {\n    monBouton.style.backgroundColor = \"\";\n  });\n}\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 5 : Événements de formulaire\n// ───────────────────────────────────────────────\n\nconst champNom = document.getElementById(\"champ-nom\");\nconst resultat = document.getElementById(\"resultat\");\n\nif (champNom) {\n  // Saisie en temps réel\n  champNom.addEventListener(\"input\", function() {\n    if (resultat) {\n      resultat.textContent = `Bonjour, ${this.value} !`;\n    }\n  });\n\n  // Validation à la perte de focus\n  champNom.addEventListener(\"blur\", function() {\n    if (this.value.trim() === \"\") {\n      this.style.borderColor = \"red\";\n    } else {\n      this.style.borderColor = \"green\";\n    }\n  });\n}\n\n// Soumission de formulaire\nconst monForm = document.getElementById(\"mon-form\");\nif (monForm) {\n  monForm.addEventListener(\"submit\", function(e) {\n    e.preventDefault(); // empêche le rechargement de page\n    console.log(\"Formulaire soumis !\");\n    // Récupérer les valeurs\n    const data = new FormData(monForm);\n    for (let [cle, valeur] of data) {\n      console.log(`${cle}: ${valeur}`);\n    }\n  });\n}\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 7 : LocalStorage (persistance locale)\n// ───────────────────────────────────────────────\n\n// Sauvegarder\nlocalStorage.setItem(\"prenom\", \"Ibra\");\nlocalStorage.setItem(\"preferences\", JSON.stringify({ theme: \"dark\", langue: \"fr\" }));\n\n// Lire\nconst prenom = localStorage.getItem(\"prenom\");\nconst prefs  = JSON.parse(localStorage.getItem(\"preferences\") || \"{}\");\nconsole.log(prenom);        // \"Ibra\"\nconsole.log(prefs.theme);   // \"dark\"\n\n// Supprimer\nlocalStorage.removeItem(\"prenom\");\n// localStorage.clear(); // tout effacer\n\n// ============================================================\n//  EXERCICES — nécessitent le fichier HTML correspondant\n// ============================================================\n\n/*\n * EX 1 ── Liste de tâches (Todo List)\n *   Créez une page avec :\n *   - Un champ texte + bouton \"Ajouter\"\n *   - Une liste &lt;ul&gt; qui affiche les tâches\n *   - Chaque tâche a un bouton \"✓\" (compléter) et \"✗\" (supprimer)\n *   - Les tâches complétées sont barrées (text-decoration: line-through)\n *   - Sauvegardez les tâches dans localStorage\n */\n\n// Votre code ici ↓\n\n\n/*\n * EX 2 ── Formulaire de contact avec validation\n *   Créez un formulaire avec : nom, email, message\n *   Validez en temps réel :\n *   - nom : au moins 3 caractères\n *   - email : doit contenir @ et .\n *   - message : au moins 20 caractères\n *   Affichez des messages d'erreur sous chaque champ.\n *   Le bouton \"Envoyer\" est désactivé si des erreurs existent.\n */\n\n// Votre code ici ↓\n\n\n/*\n * EX 3 ── Galerie de photos interactive\n *   Créez dynamiquement une grille de cartes (titres + couleurs).\n *   Cliquer sur une carte l'agrandit (modal ou expansion).\n *   Ajoutez un filtre par catégorie.\n */\n\n// Votre code ici ↓\n\n\n/*\n * EX 4 ── (DÉFI) Quiz interactif\n *   Stockez 5 questions (objets avec question, options[], bonne réponse).\n *   Affichez les questions une par une.\n *   Montrez le score final avec un message de félicitation ou d'encouragement.\n */\n\n// Votre code ici ↓\n</code></pre></div>"
  },
  {
    id: "08",
    titre: "Asynchrone",
    fichier: "modules/08-asynchrone.js",
    lucideIcon: "clock",
    niveau: "Avancé",
    description: "Comprendre le modèle asynchrone de JavaScript avec les callbacks, les Promises et la syntaxe moderne async/await.",
    lecons: [
      "Pourquoi l'asynchrone ?",
      "Callbacks",
      "Promises (.then/.catch)",
      "Promise.all et Promise.race",
      "async / await",
      "fetch() et API REST",
      "Gestion des erreurs"
    ],
    exercices: [
      {
        titre: "Timer personnalisé",
        codeInit: "// Créez une fonction attendre(ms) qui retourne une Promise\n",
        enonceFull: "Timer personnalisé\n   Écrivez une fonction attendre(ms) qui retourne une Promise\n   qui se résout après `ms` millisecondes.\n   Utilisez-la pour créer un compte à rebours : 5, 4, 3, 2, 1, GO !"
      },
      {
        titre: "Fetch + affichage",
        codeInit: "// Récupérez des données factices avec fetch('https://jsonplaceholder.typicode.com/users')\n",
        enonceFull: "Fetch + Affichage\n   Utilisez l'API publique https://jsonplaceholder.typicode.com/posts\n   a) Chargez les 10 premiers articles (limit=10 via ?_limit=10)\n   b) Affichez leurs titres dans une liste HTML\n   c) Au clic sur un titre, affichez son contenu (body)"
      },
      {
        titre: "Interface avec chargement",
        codeInit: "// Simulez un appel API avec indicateur de chargement\n",
        enonceFull: "Gestion de chargement\n   Créez une interface avec :\n   - Un bouton \"Charger des données\"\n   - Un spinner/message \"Chargement...\" pendant la requête\n   - L'affichage des données une fois reçues\n   - Un message d'erreur en cas d'échec"
      },
      {
        titre: "🔥 Parallèle vs séquentiel",
        codeInit: "// Exécutez des requêtes en parallèle (Promise.all) vs séquentiel (for await)\n",
        enonceFull: "(DÉFI) Requêtes en parallèle vs séquentielles\n   Comparez le temps d'exécution entre :\n   a) 3 requêtes fetch séquentielles (await l'une après l'autre)\n   b) 3 requêtes fetch en parallèle (Promise.all)\n   Utilisez console.time() et console.timeEnd() pour mesurer."
      }
    ],
    concepts: [
      "async",
      "await",
      "Promise",
      "fetch",
      "callback",
      "setTimeout",
      "try/catch",
      "API REST"
    ],
    contenuLecon: "<div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 1 : Pourquoi l'asynchrone ?\n// ───────────────────────────────────────────────\n\n// JavaScript est mono-thread. Pour les opérations longues\n// (réseau, fichiers, timers), il faut ne pas bloquer le fil.\n\nconsole.log(\"1 - Début\");\n\nsetTimeout(() =&gt; {\n  console.log(\"3 - Après 1 seconde\");\n}, 1000);\n\nconsole.log(\"2 - Fin du code synchrone\");\n// Affiche : 1, 2, puis 3 après 1 seconde\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 2 : Callbacks (ancienne approche)\n// ───────────────────────────────────────────────\n\nfunction chargerDonnees(callback) {\n  setTimeout(() =&gt; {\n    const donnees = { utilisateurs: [\"Ibra\", \"Fatou\", \"Cheikh\"] };\n    callback(null, donnees);  // convention : (erreur, résultat)\n  }, 1000);\n}\n\nchargerDonnees((err, data) =&gt; {\n  if (err) {\n    console.error(\"Erreur :\", err);\n    return;\n  }\n  console.log(\"Données reçues :\", data);\n});\n\n// Callback Hell (pyramide de la mort) — à éviter !\n// charger(function(res1) {\n//   traiter(res1, function(res2) {\n//     sauvegarder(res2, function(res3) {\n//       // encore plus profond...\n//     });\n//   });\n// });\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 3 : Promises (Promesses)\n// ───────────────────────────────────────────────\n\n// Une Promise est dans l'un de ces états :\n//  - pending  (en attente)\n//  - fulfilled (résolue / succès)\n//  - rejected  (rejetée / erreur)\n\nfunction simulerRequete(succes = true) {\n  return new Promise((resolve, reject) =&gt; {\n    setTimeout(() =&gt; {\n      if (succes) {\n        resolve({ data: \"Voici les données !\" });\n      } else {\n        reject(new Error(\"La requête a échoué.\"));\n      }\n    }, 1000);\n  });\n}\n\n// Utilisation avec .then() / .catch() / .finally()\nsimulerRequete(true)\n  .then(resultat =&gt; {\n    console.log(\"Succès :\", resultat.data);\n    return resultat.data.toUpperCase(); // enchaîner\n  })\n  .then(majuscule =&gt; console.log(\"Transformé :\", majuscule))\n  .catch(erreur =&gt; console.error(\"Erreur :\", erreur.message))\n  .finally(() =&gt; console.log(\"Requête terminée (toujours exécuté).\"));\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 4 : Promise.all / Promise.race\n// ───────────────────────────────────────────────\n\nconst p1 = new Promise(res =&gt; setTimeout(() =&gt; res(\"P1 OK\"), 500));\nconst p2 = new Promise(res =&gt; setTimeout(() =&gt; res(\"P2 OK\"), 300));\nconst p3 = new Promise(res =&gt; setTimeout(() =&gt; res(\"P3 OK\"), 800));\n\n// Promise.all : attend TOUTES les promesses (ou échoue si l'une échoue)\nPromise.all([p1, p2, p3]).then(resultats =&gt; {\n  console.log(\"Tous terminés :\", resultats);\n});\n\n// Promise.race : retourne la PREMIÈRE résolue\nPromise.race([p1, p2, p3]).then(premier =&gt; {\n  console.log(\"Premier :\", premier); // \"P2 OK\" (300ms)\n});\n\n// Promise.allSettled : attend toutes, peu importe succès/échec\nPromise.allSettled([p1, p2, Promise.reject(\"Oups !\")]).then(r =&gt; {\n  r.forEach(res =&gt; console.log(res.status, res.value ?? res.reason));\n});\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 5 : async / await (la syntaxe moderne et lisible)\n// ───────────────────────────────────────────────\n\nasync function obtenirProfil(id) {\n  try {\n    // await \"attend\" la promesse sans bloquer le reste du programme\n    const utilisateur = await simulerRequete(true);\n    console.log(`Profil ${id} :`, utilisateur.data);\n    return utilisateur;\n  } catch (erreur) {\n    console.error(\"Impossible de charger le profil :\", erreur.message);\n    return null;\n  }\n}\n\nobtenirProfil(42);\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 6 : fetch() — appels API réels\n// ───────────────────────────────────────────────\n\n// fetch retourne une Promise\nasync function chargerUtilisateurs() {\n  try {\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n\n    if (!response.ok) {\n      throw new Error(`Erreur HTTP : ${response.status}`);\n    }\n\n    const utilisateurs = await response.json(); // parse le JSON\n    console.log(`${utilisateurs.length} utilisateurs chargés.`);\n\n    // Afficher les noms\n    utilisateurs.forEach(u =&gt; console.log(`- ${u.name} (${u.email})`));\n    return utilisateurs;\n\n  } catch (erreur) {\n    console.error(\"Erreur réseau :\", erreur.message);\n  }\n}\n\n// Appel (dans un navigateur)\n// chargerUtilisateurs();\n\n</code></pre></div><div class=\"mb-6\"><pre><code class=\"language-js text-green-300 text-xs\">// ───────────────────────────────────────────────\n//  LEÇON 7 : Gestion avancée des erreurs async\n// ───────────────────────────────────────────────\n\nasync function avecTimeout(promesse, ms) {\n  const timer = new Promise((_, reject) =&gt;\n    setTimeout(() =&gt; reject(new Error(`Timeout après ${ms}ms`)), ms)\n  );\n  return Promise.race([promesse, timer]);\n}\n\nasync function test() {\n  try {\n    const res = await avecTimeout(simulerRequete(true), 2000);\n    console.log(\"Reçu dans les temps :\", res);\n  } catch (e) {\n    console.error(e.message);\n  }\n}\ntest();\n\n</code></pre></div>"
  }
];

const niveauCouleur = {
  "Débutant": "text-green-400 bg-green-400/10 border-green-400/20",
  "Intermédiaire": "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  "Avancé": "text-red-400 bg-red-400/10 border-red-400/20",
};

const snippets = {
  boucle: `// Boucle for — afficher les carrés de 1 à 10
for (let i = 1; i <= 10; i++) {
  console.log(\`\${i}² = \${i * i}\`);
}`,
  tableau: `// Map et Filter
const notes = [7, 14, 12, 5, 18, 9, 16, 11];

const admis = notes.filter(n => n >= 10);
console.log('Admis :', admis);

const bonifies = admis.map(n => n * 1.1);
console.log('Bonifiés :', bonifies.map(n => n.toFixed(1)));

const moyenne = admis.reduce((s, n) => s + n, 0) / admis.length;
console.log('Moyenne :', moyenne.toFixed(2));`,
  classe: `// Classe ES6 avec héritage
class Animal {
  constructor(nom, espece) {
    this.nom = nom;
    this.espece = espece;
  }
  sePresenter() {
    return \`Je suis \${this.nom}, un(e) \${this.espece}.\`;
  }
}

class Chien extends Animal {
  constructor(nom, race) {
    super(nom, "chien");
    this.race = race;
  }
  aboyer() { return "Woof ! Woof !"; }
}

const rex = new Chien("Rex", "Berger Allemand");
console.log(rex.sePresenter());
console.log(rex.aboyer());
console.log(rex instanceof Animal);`,
  async: `// Simulation async / await
function attendre(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function compteARebours() {
  for (let i = 5; i >= 1; i--) {
    console.log(i + "...");
    await attendre(500);
  }
  console.log("🚀 Décollage !");
}

compteARebours();`,
  fizzbuzz: `// FizzBuzz classique
for (let i = 1; i <= 30; i++) {
  if      (i % 15 === 0) console.log("FizzBuzz");
  else if (i %  3 === 0) console.log("Fizz");
  else if (i %  5 === 0) console.log("Buzz");
  else                   console.log(i);
}`
};

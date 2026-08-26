// Données des exercices
const exercicesData = [
  {
    id: "squat",
    nom: "Squat Arrière",
    docteurFitnessUrl: "https://www.docteur-fitness.com/exercice-squat",
    gifUrl: "https://www.docteur-fitness.com/wp-content/uploads/2021/08/squat.gif",
    musclesPrincipaux: ["Quadriceps", "Grand fessier"],
    musclesSecondaires: ["Ischio-jambiers", "Adducteurs", "Sangle abdominale"],
    execution: [
      "Placez la barre sur le haut des trapèzes et écartez les pieds de la largeur des épaules.",
      "Inspirez, gagnez le buste et fléchissez les genoux en poussant les hanches vers l'arrière.",
      "Descendez jusqu'à ce que vos cuisses soient parallèles au sol.",
      "Poussez sur vos talons pour remonter en expirant."
    ]
  },
  {
    id: "developpe-couche",
    nom: "Développé Couché",
    docteurFitnessUrl: "https://www.docteur-fitness.com/developpe-couche",
    gifUrl: "https://www.docteur-fitness.com/wp-content/uploads/2021/08/developpe-couche.gif",
    musclesPrincipaux: ["Grand pectoral"],
    musclesSecondaires: ["Triceps", "Deltoïde antérieur"],
    execution: [
      "Allongé sur le banc, saisissez la barre avec une prise supérieure à la largeur des épaules.",
      "Décrochez la barre et descendez-la de manière contrôlée jusqu'au milieu du torse.",
      "Poussez la barre vers le haut sans bloquer brutalement les coudes."
    ]
  }
];

// Données des recettes
const recettesData = [
  {
    nom: "Bowl Skyr & Muesli",
    ingredients: [
      { nom: "Skyr", quantite: "200g" },
      { nom: "Muesli", quantite: "50g" },
      { nom: "Miel", quantite: "1 c. à soupe" },
      { nom: "Beurre de cacahuète", quantite: "15g" }
    ]
  }
];
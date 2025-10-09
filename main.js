const ratio = .1;
const options = {
    root: null, //L'élément qui est utilisé comme zone d'affichage au moment d'évaluer la visibilité de la cible. Il doit être un ancêtre de la cible. S'il n'est pas spécifié ou s'il prend la valeur null, sa valeur par défaut est la zone d'affichage (le viewport) du navigateur.
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.remove('reveal'); //La suppression du classe sur l'élément dès qu'il est visible
            observer.unobserve(entry.target); //Qui oblige l'objet obsever à ne plus observer l'élément observer après une(1) observation
        }
    });
}

document.documentElement.classList.add('reveal-loaded'); //Pour le contrôle après dans le css et savoir si le javascript est charger ou pas pour éviter de masquer les éléments 
const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal').forEach(function (r) { //Le function (r) s'appelle une fonction anonyme, tu pourras utilisé une fonction flèché à lea place aussi;
    observer.observe(r);
})
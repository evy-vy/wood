
const medias = document.querySelectorAll(".bubble");
const l1 = document.querySelectorAll(".line1");
const l2 = document.querySelectorAll(".line2");
const logo = document.querySelectorAll(".logo__wood")

//GreenSocks fonctionne avec des timeLine qui permettent de gerer toutes les animations TL = timeLine permet de gerer 

//une fois le site complètement charger le timeline sera lancé.
window.addEventListener("load", () => {
  //Création de la timeline que je mets sur pause dès le départ
  const TL = gsap.timeline({
    paused: true,
  });

  //la méthode staggerFrom() permettant d'animer plusieurs éléments les uns à la suite des autres. ces éléments partent d'un endroit pour revenir à leur place de départ On y indique ce que l'on souhaite animer. en indiquant dans un objet les caractères plus précises qui gèreront l'animation:
  //ici je sélectionne les medias, l'animation durera 1s, l'animation partira de la droite et on règle ensuite la manière dont l'ani va se faire : "power2" correspond à la puissance du easing et le .out signifie que se sera plus lent vers la fin. Il y aura 0.3s entre chaque anim
  TL
    .from(l1, 0.6, { width: 0, opacity: 0, easer: "power2.out" }, 0.3)
    .from(l2, 0.6, { width: 0, opacity: 0, easer: "power2.out" }, 0.3)
    .set(logo, { visibility: "visible" })
    .staggerFrom(logo, 0.4, { transform: "scale(0)", immediateRender: false, ease: "power2.inOut" }, '-=2')
    .set(medias, { visibility: "visible" })
    .staggerFrom(medias, 1, { right: -200, immediateRender: false, ease: "power2.out" }, 0.3, "-=1");

  TL.play();
})
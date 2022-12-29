/*
TRACCIA: 

# Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, 
il nostro script JS in cui:
# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore (potrebbe mancare a qualcuno),
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder 
ad es. Unsplash (https://unsplash.it/300/300?image=3)*.
#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, 
stampiamo i post del nostro feed.
#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e 
incrementiamo il counter dei likes relativo.
*/


// Creazione di un array di oggetti.
const post = [
    {
       id: '1', 
       profileImage: 'img/profile01.jpg',
       author: 'Anna Mangione',
       time: '09/18/2022',
       text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
       postImage: 'img/img01.jpg',
       likeNumber: '26',
    }, 
    
    {
       id: '2', 
       profileImage: 'img/profile02.jpg',
       author: 'Sofia Perlari',
       time: '2 mesi fa',
       text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
       postImage: 'img/img02.jpg',
       likeNumber: '42',
    }, 
    
    {
       id: '3', 
       profileImage: 'img/profile03.jpg',
       author: 'Luca Formicola',
       time: '05/13/2022',
       text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
       postImage: 'img/img03.jpg',
       likeNumber: '13',
    }, 
    
    {
       id: '4',
       profileImage: 'img/profile04.jpg',
       author: 'Douglas Jones',
       time: '1 settimana fa',
       text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
       postImage: 'img/img04.jpg',
       likeNumber: '52',
    }
];


// Recupero gli elementi dalla pagina.
const container = document.getElementById('container');

// Variabile dove andare ad inserire i social posts.
let posts = '';

// Ciclo forEach per prendere elementi dell'array e caricarli nei singoli posts.
post.forEach((p, i) => {
    
    posts +=  ` 
          <div class="post">
              <div class="post__header">
                <div class="post-meta">
                  <div class="post-meta__icon">
                    <img class="profile-pic" src="${post[i].profileImage}" alt="Mangione" />
                  </div>
                  <div class="post-meta__data">
                    <div class="post-meta__author">${post[i].author}</div>
                    <div class="post-meta__time">${post[i].time}</div>
                  </div>
                </div>
              </div>
              <div class="post__text">${post[i].text}</div>
              <div class="post__image">
                <img src="${post[i].postImage}" alt="landscape" />
              </div>
              <div class="post__footer">
                <div class="likes js-likes">
                  <div class="likes__cta">
                    <button class="like-button js-like-button" href="#" data-postid="1">
                      <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                      <span class="like-button__label">Mi Piace</span>
                    </button>
                  </div>
                  <div class="likes__counter">Piace a <b id="like-counter-${post[i].id}" class="js-likes-counter">${post[i].likeNumber}</b> persone</div>
                </div>
              </div>
          </div> 
        `;
      
});

container.innerHTML = posts;

const buttons = document.querySelectorAll('button');


// ciclo forEach per incrementare il numero dei likes.
post.forEach ((p, i) => {

  const button = buttons[i];
  
  const counter = document.getElementById(`like-counter-${i+1}`);
  // console.log(counter);
  
  // Raccologo in una variabile il numero di likes di ogni posts.
  let numb = parseInt(post[i].likeNumber);

  // Aggancio un event listener al button
  button.addEventListener('click', function(){
      
       // Aggiungo la classe per cambiare colore al button
      button.classList.add('like-button-liked');
      
      // Incremento il numero dei likes
      let increment = numb + 1;
      
      counter.innerHTML = increment;

  })

});

  
  



   

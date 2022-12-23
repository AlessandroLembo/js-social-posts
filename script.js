console.log('JS OK');

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
       profileImage: 'profile-01.jpg',
       author: 'Anna Mangione',
       time: '09/18/2022',
       text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
       postImage: 'img-01-jpg',
       likeIcon: `<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>`,
       likeText: 'Mi piace',
       likeIt: 'Piace a',
       likeNumber: '26',
       peopleNumber: 'persone',
    }, 
    
    {
       id: '2', 
       profileImage: 'profile-02.jpg',
       author: 'Sofia Perlari',
       time: '2 mesi fa',
       text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
       postImage: 'img-02-jpg',
       likeIcon: `<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>`,
       likeText: 'Mi piace',
       likeIt: 'Piace a',
       likeNumber: '42',
       peopleNumber: 'persone',
    }, 
    
    {
       id: '3', 
       profileImage: 'profile-03.jpg',
       author: '05/13/2022',
       time: 'Ieri',
       text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
       postImage: 'img-03-jpg',
       likeIcon: `<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>`,
       likeText: 'Mi piace',
       likeIt: 'Piace a',
       likeNumber: '13',
       peopleNumber: 'persone',
    }, 
    
    {
       id: '4',
       profileImage: 'profile-04.jpg',
       author: 'Douglas Jones',
       time: '1 settimana fa',
       text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
       postImage: 'img-04-jpg',
       likeIcon: `<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>`,
       likeText: 'Mi piace',
       likeIt: 'Piace a',
       likeNumber: '52',
       peopleNumber: 'persone',
    }
];
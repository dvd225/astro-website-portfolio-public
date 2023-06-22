
const btns = document.querySelectorAll('.pill');
const posts = document.querySelectorAll('.post');
const btn_reset = document.querySelectorAll('.button_reset');

for(let i=0; i<btns.length; i++){
    btns[i].addEventListener('click', filterPost);
}

btn_reset[0].addEventListener('click', resetPost);
btn_reset[0].childNodes[0].classList.remove('pill');
btn_reset[0].childNodes[0].classList.add('btn-clicked');




function resetPost(){
    posts.forEach(post => {
        post.parentNode.classList.remove('post-shrink');
        post.parentNode.classList.add('post-expand');
    })
}

function setActiveBtn(e){
    btns.forEach(btn => {btn.classList.remove('btn-clicked');
    btn.classList.add('pill')
});
e.target.classList.remove('pill');

e.target.classList.add('btn-clicked');
};

function filterPost(e){
    setActiveBtn(e);
    const btnFilter = e.target.innerText;
    console.log(btnFilter)
    posts.forEach(post => {
        post.parentNode.classList.remove('post-shrink');
        post.parentNode.classList.add('post-expand');

        

        if (!post.classList.contains(btnFilter)){

            post.parentNode.classList.remove('post-expand');
            post.parentNode.classList.add('post-shrink');
        }

        post.parentNode.parentNode.classList.remove('offset');
        post.parentNode.parentNode.classList.add('offset2');




    })
}

// btns[0].addEventListener('click', (e) => {
//     setActiveBtn(e);
//     posts.forEach(post => {
//         post.classList.remove('post-shrink');
//         post.classList.add('post-shrink');
 
//     })
// })

/*evento de scrool */
/*addeventlister é o evento que vai acontecer */
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 200)/* adicionando uma classe ao header , se a classe existir remova para mim se nao existir crie */
})
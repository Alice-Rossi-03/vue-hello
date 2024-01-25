// CONSEGNA - Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// BONUS - Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const {createApp} = Vue

createApp({
    data(){
        return{
            message: "Hello Vue!"
        }
    }
}).mount("#top-header")

createApp({
    data(){
        return{
            srcImg: "./img-hello-vue.jpg"
        }
    }
}).mount("#img-container")
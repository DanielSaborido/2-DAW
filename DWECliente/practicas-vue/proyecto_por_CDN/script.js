console.log(Vue)

const quotes = [
    {
        quote:
        'The night is darkest just before the dawn. And I promise you, the dawn is coming.',
        author: 'Harvey Dent, The Dark Knight',
    },
    {
        quote: 'I believe what doesn’t kill you simply makes you, stranger.',
        author: 'The Joker, The Dark Knight',
    },
    {
        quote:
        'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me',
        author: 'Henri Ducard, Batman Begins',
    },
    {
        quote:
        'You either die a hero or live long enough to see yourself become the villain.',
        author: 'Harvey Dent, The Dark Knight',
    },
    {
        quote: 'If you’re good at something, never do it for free.',
        author: 'The Joker, The Dark Knight',
    },
    {
        quote: 'Yes, father. I shall become a bat.',
        author: 'Bruce Wayne/Batman, Batman: Year One',
    }
]

const app = Vue.createApp(
    {
        // template: `
        // <h1>Enunciado mediante vue</h1>
        // <p> {{ 2 * 5 }}</p>`

        data(){
            return{
                mensaje: `mensaje reactivo inerpolado`,
                otro: "buenas",
                quotes: quotes,
                nuevoMensaje: "quote, author",
                active: false,
                rutaImagen: "descarga.jpg",
                red: "color:blue",
                contador:0
            }
        },

        methods: {
            cambiarMensaje(){
                console.log("mensaje cambiado")
                this.mensaje = "nuevo mensaje"
            },

            addMensaje(e){
                console.log(e)
                datos = this.nuevoMensaje.split(",")
                console.log(datos)
                this.quotes.unshift({
                    quote: datos[0],
                    author: datos[1]
                })
            },

            cambiarValido(){
                this.active? this.active=false : this.active=true
            }
        }
    }
)

app.mount("#vueApp")
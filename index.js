var vue= new Vue({
    el: '#app', 
    data: {
        titulo: 'Projeto Vue.js - Estudos',
        subtitulo: 'projeto para estudar o framework Vue.js',
        items: [
            { texto: 'Criar o Hello World' },
            { texto: 'Comitar pro GitHub' },
            { texto: 'Finalizer tarefa no GitScrum' },
            { texto: 'Ir além' }
        ]
    },
    methods: {
        addItem: function(a) {
            console.log(a);
            this.items.push({ texto: $('#addItem').val()});
        }
    }
});
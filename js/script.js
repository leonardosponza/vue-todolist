const app = new Vue(
    {
        el : '#app',
        data : {
            todoList : [
                'pomiciare',
                'drogarsi',
                'dormire',
                'mangiare'
            ],
            newTodo : ''
        },
        methods: {
            addnewtodo : function(){
                if(this.newTodo != ''){
                    this.todoList.push(this.newTodo);
                    this.newTodo = '';
                }
            },
            removeTodo : function(index){
                this.todoList.splice(index,1);
            },
            remove : function(){
                let userAnswer = confirm('rimuovi la lista');
                if (userAnswer) {
                    this.todoList = [];
                }
            },
            addClass : function(indice){
                let element = document.getElementById(indice);
                element.classList.toggle('text-bar');
            }
        }
    }
);
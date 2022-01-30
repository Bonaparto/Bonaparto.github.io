<template>
  <div class="todo">
    <div class="holder">

      <form @submit.prevent="addTodo">
        <ValidationProvider rules="positive" v-slot="{ errors }" name="Todo">
          <input type="text" placeholder="Enter a todo..." v-model="todo" name="todo">
          <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
            <p class="alert" v-if="errors.length !== 0">{{ errors[0] }}</p>
          </transition>
        </ValidationProvider>
      </form>

      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
          <li v-for="(data, index) in todos" :key='index'>{{data.todo}}
          <i class="fa fa-minus-circle" @click="remove(index)"></i></li>  
        </transition-group>
      </ul>

      <p>The todos.</p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: {
   
  },
  data () {
    return {
      todo: '',
      errors: ['wtf'],
      todos: [
        {'todo': "Learn Nuxt.js"},
        {'todo': 'Get salary'},
        {'todo': 'Get better'},
      ],
    }
  },
  methods: {
    addTodo() {
      if(this.todo.length > 1) {
        this.todos.push({todo: this.todo});
        this.todo = '';
      }
    },
    remove(index) {
      this.todos.splice(index, 1);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
  .holder {
    background: #FFF;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }

  .alert {
    background: #fdf2ce;
    font-weight: bold;
    padding: 5px;
    margin-top: -20px;
    display: inline-block;
  }

  .alert-in-enter-active {
    animation: bounce-in .5s;
  }

  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  i {
    float: right;
    cursor: pointer;
  }

</style>
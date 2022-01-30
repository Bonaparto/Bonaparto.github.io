<template>
    <div class="about">
        <h1>Hello, {{their_name}}, this is an about page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit recusandae ipsum harum nam eveniet, laudantium incidunt neque iusto nobis, eaque odio. Numquam sit repellendus pariatur illo ducimus maiores quidem voluptatum.</p>
    </div>
</template>

<script>
export default {
    name: 'Todo',
    data() {
        return {
            their_name: this.$route.params.name
        }
    }
}
</script>

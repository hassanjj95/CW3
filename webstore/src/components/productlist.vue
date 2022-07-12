<template>

    <main>
        <div class="row mr-0" v-if="showActivity">
            <div class="sidebar col-sm-2 pl-5 pt-5">
                <h2>Sort By:</h2>
                <input name="attribute" value="title" type="radio" @click="sortingByAttr"><label>Title</label><br>
                <input name="attribute" value="price" type="radio" @click="sortingByAttr"> <label>Price</label><br>
                <input name="attribute" value="location" type="radio" @click="sortingByAttr"><label>Location</label><br>
                <input name="attribute" value="spaces" type="radio" @click="sortingByAttr"><label>Spaces</label><br><br>
                <input name="direction" value=1 type="radio" @click="sortingByAttr"><label>Ascending</label><br>
                <input name="direction" value=-1 type="radio" @click="sortingByAttr"><label>Descending</label>
            </div>
            <div class="row activities col-sm-10 ">
                <div class="col-sm-4" v-for="activity in activities">
                    <div class=" card mt-5 ml-5 shadow-sm " style="width:300px">
                        <img class="card-img-top img-fluid " v-bind:src="activity.image" alt="Card image"
                            style="width:100%">
                        <div class="card-body">
                            <h3 class="card-title text center">{{ activity.title }}</h3>
                            <p class="card-text">Price : {{ activity.price }}</p>
                            <p class="card-text"> Location: {{ activity.location }}</p>
                            <p class="card-text"> Spaces : {{ activity.spaces }}</p>
                            <div>
                                <span v-for="n in activity.rating"><i class="fas fa-star"></i></span>
                                <span v-for="n in 5-activity.rating"><i class="far fa-star"></i></span>
                            </div>
                            <button class="btn btn-primary mt-4" @click="addToCart(activity)"
                                v-if="canAddToCart(activity)">Add To Cart</button>
                            <button class="btn btn-primary" disabled="disabled" v-else>Add To Cart</button>
                            <span v-if="activity.spaces === cartCount(activity.id)">All Out!</span>
                            <span v-else-if="activity.spaces - cartCount(activity.id) < 5">
                                Only {{activity.spaces - cartCount(activity.id)}} left!</span>
                        </div>
                    </div>


    </main>



</template>

<script>
 export default {
     name: "ProductList",
     props: ['activities'],
     data() {
         return {}
     },
     methods: {
         addToCart(activity) {
            this.$emit('addProduct', product);
         },
     },
 };
</script>
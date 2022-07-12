<template>

</template>

<script>
import productList from './components/productlist.vue'
import checkout from './components/checkout.vue'
export default {
    name: 'App',
    components: {
        productList,
        checkout
    },
    data() {
        return {
            sitename: "After School Club",
            cart: [],
            showActivity: true,
            activities: activities = [
                {
                    id: 01,
                    title: "Science",
                    location: "London",
                    price: 10,
                    spaces: 5,
                    image: "images/science.jpg",
                    rating: 3,
                },
                {
                    id: 02,
                    title: "English",
                    location: "Dubai",
                    price: 5,
                    spaces: 5,
                    image: "images/english.jpg",
                    rating: 5,
                },
                {
                    id: 03,
                    title: "Art",
                    location: "London",
                    price: 7.50,
                    spaces: 5,
                    image: "images/art.jpg",
                    rating: 4,
                },
                {
                    id: 04,
                    title: "ICT",
                    location: "Malta",
                    price: 8.50,
                    spaces: 5,
                    image: "images/ict.jpg",
                    rating: 2,
                },
                {
                    id: 05,
                    title: "Math",
                    location: "Dubai",
                    price: 4.99,
                    spaces: 5,
                    image: "images/math.jpg",
                    rating: 2,
                },
                {
                    id: 06,
                    title: "French",
                    location: "London",
                    price: 4,
                    spaces: 5,
                    image: "images/french.jpg",
                    rating: 4,
                },
                {
                    id: 07,
                    title: "Physical Education",
                    location: "London",
                    price: 4,
                    spaces: 5,
                    image: "images/pe.jpg",
                    rating: 4,
                },
                {
                    id: 08,
                    title: "Geography",
                    location: "Dubai",
                    price: 3,
                    spaces: 5,
                    image: "images/geo.jpg",
                    rating: 3,
                },
                {
                    id: 09,
                    title: "History",
                    location: "Malta",
                    price: 8,
                    spaces: 5,
                    image: "images/history.jpg",
                    rating: 4,
                },
                {
                    id: 10,
                    title: "Music",
                    location: "Dubai",
                    price: 30,
                    spaces: 5,
                    image: "images/music.jpg",
                    rating: 1,
                },
            ]
        };
    },
    methods: {
        showCheckout() {
            this.showActivity = !this.showActivity ? false : true;
        },
        addToCart(activity) {
            console.log(activity.title + " was added to the cart!");//for debugging purposes
            this.cart.push(activity);
            activity.spaces -= 1;
        },
        removeItem(activity, index) {
            console.log("remove function started index: " + index);
            this.cart.splice(index, 1);
            activity.spaces += 1;
            console.log(activity.title + " was removed from the cart!");//for debugging purposes
        },
        cartCount(id) {
            let count = 0;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === id) {
                    count++;
                }
            }
            return count;
        },
    }
}    
</script>
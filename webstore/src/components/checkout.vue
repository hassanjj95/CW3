<template>
    <div class="container float-right shadow p-3 mb-5 bg-white rounded mt-5" width="70%">
        <h2> Checkout </h2>
        <form class="form-horizontal">
            <div class="form-group">
                <label class="control-label col-sm-2">Name:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="order.name" placeholder="Full Name" required>
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2">Phone:</label>
                <div class="col-sm-10">
                    <input type="number" v-model.number="order.number" class="form-control"
                        placeholder="Enter phone number" required>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-primary" v-if="canCheckout" @click="checkout">Checkout</button>
                    <button type="submit" class="btn btn-primary" v-else disabled>Checkout</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: "CheckOut",
    props: ['cart'],
    data() {
        return {
            name: "",
            address: "",
        };
    },
    methods: {
        removeItem(activity) {
            this.$emit('removeProduct', activity)
        }
    }
};
</script>
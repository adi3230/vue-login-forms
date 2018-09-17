<template>
    <div>
        <h1>Shopping Cart</h1>
        <ul>
            <li v-for="product in getProducts" :key="product.id">
                {{product.title}} - {{product.price | currency}} - {{product.quantity}}

            </li>
        </ul>
        <p>Total: {{ getTotal | currency }}</p>
        <button @click="buyProduct">Checkout</button>
        <p>Status: {{ this.$store.state.checkoutStatus }}</p>
    </div>
</template>
<script>
export default {
    computed: {
        getProducts() {
            return this.$store.getters.getCartProducts;
        },
        getTotal() {
            return this.$store.getters.getCartTotal;
        }
    },
    methods: {
        buyProduct() {
            return this.$store.dispatch('checkout')
        }
    },
}
</script>


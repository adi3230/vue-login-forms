
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
        <p v-if="this.checkoutStatus">Status: {{ this.checkoutStatus }}</p>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    computed: {
		...mapState(['checkoutStatus']),
		...mapGetters({
			getProducts: 'getCartProducts',
			getTotal: 'getCartTotal'
		})
    },
    methods: {
		
		...mapActions({
			buyProduct: 'checkout'
		})
    },
}
</script>


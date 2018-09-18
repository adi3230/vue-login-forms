<template>
    <div>
        <h1>Product List</h1>
        <img
            v-if="isLoading"
            src="https://i.imgur.com/JfPpwOA.gif"
        >
        <ul v-else>
            <li v-for="product in products" :key="product.id">
                {{product.title}} - {{product.price | currency}} - {{product.inventory}}
				<button @click="addProductToCart(product)" :disabled="!productIsInStock(product)">Add to Cart</button>
            </li>
        </ul>
    </div>
    
    
</template>
<script>
import product from '@/api/products'
import {  mapState, mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            isLoading: false
        }
    },
    computed: {
		...mapState({
			products: 'products'
		}),
		...mapGetters({
			productIsInStock: 'productIsInStock'
		})
	},
	methods: {
		...mapActions({
			fetchProducts: 'fetchProducts',
			addProductToCart: 'addToCart'
		})
	},
    created() {
        this.isLoading = true;
        this.fetchProducts().then(() => this.isLoading = false);
	}

}
</script>


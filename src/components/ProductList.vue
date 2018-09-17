<template>
    <div>
        <h1>Product List</h1>
        <img
            v-if="isLoading"
            src="https://i.imgur.com/JfPpwOA.gif"
        >
        <ul v-else>
            <li v-for="product in products" :key="product.id">
                {{product.title}} - {{product.price}}
				<button @click="addProductToCart(product)">Add to Cart</button>
            </li>
        </ul>
    </div>
    
    
</template>
<script>
import product from '@/api/products'

export default {
    data() {
        return {
            isLoading: false
        }
    },
    computed: {
        products() {
            return this.$store.getters.availableProducts;
        }
    },
    created() {
        this.isLoading = true;
        this.$store.dispatch('fetchProducts').then(() => this.isLoading = false);
	},
	methods: {
		addProductToCart(product) {
			this.$store.dispatch('addToCart', product)
		}
	}

}
</script>


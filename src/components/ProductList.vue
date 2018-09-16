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
            </li>
        </ul>
    </div>
    
    
</template>
<script>
import product from '@/api/products'
import store from '@/store/index'

export default {
    data() {
        return {
            isLoading: false
        }
    },
    computed: {
        products() {
            return store.getters.availableProducts;
        }
    },
    created() {
        this.isLoading = true;
        store.dispatch('fetchProducts').then(() => this.isLoading = false);
    }

}
</script>


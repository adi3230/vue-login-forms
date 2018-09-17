<template>
    <div>
        <h1>Welcome to Shopping using Vuex</h1>
        <ProductList/>
        <hr/>
        <ShoppingCart/>
    </div>
</template>
<script>
import ProductList from '@/components/ProductList'
import ShoppingCart from '@/components/ShoppingCart'

export default {
    components: {
        ProductList,
        ShoppingCart
    }
}
</script>


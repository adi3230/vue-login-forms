<template>
    <div>
        <NumberDisplay />
        <NumberSubmit />
    </div>
    
</template>

<script>
import NumberSubmit from '@/components/NumberSubmit.vue'
import NumberDisplay from '@/components/NumberDisplay.vue'
export default {
    name: 'NameComponent',
    data: function() {
        return {
            numbers: [1, 2, 3]
        }
    },
    components:{
        NumberSubmit,
        NumberDisplay
    }
}
</script>


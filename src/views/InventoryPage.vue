<template>
<div class="home container-fluid">
    <Inventory :productModel="models.productModel" :categoryModel="models.categoryModel" />
</div>
</template>

<script>
// @ is an alias to /src
import Inventory from '@/components/inventory/Inventory.vue';

export default {
    name: 'InventoryPage',
    props: ['models'],
    components: {
        Inventory,
    }
}
</script>

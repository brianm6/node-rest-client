<template>
<div>
    <li>{{ productModel.productName }} - "{{ productModel.description }}"</li>
</div>
</template>

<script>
export default {
    name: 'ProductItem',
    props: ['productModel']
}
</script>

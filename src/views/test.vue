<template>
    <div>
        <Input v-model="value1" size="large" placeholder="large size"/>
        <br>
        <Input v-model="value2" placeholder="default size"/>
        <br>
        <Input v-model="value3" size="small" placeholder="small size"/>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value1: '',
                value2: '',
                value3: ''
            }
        }
    }
</script>

<template>
    <div class="q-pa-xl">
        <span class="text-h6 text-weight-bold">Set Location ให้มังกรแต่ละสี</span>
        <div class="row q-my-sm q-col-gutter-md">
            <div class="col-12 col-md-6">
                <black-card />
            </div>
            <div class="col-12 col-md-6">
                <red-card />
            </div>
            <div class="col-12 col-md-6">
                <blue-card />
            </div>
            <div class="col-12 col-md-6">
                <green-card />
            </div>
            <div class="col-12 col-md-6">
                <white-card />
            </div>
        </div>

    </div>
</template>

<script>
import BlackCard from './Black.vue';
import RedCard from './Red.vue';
import BlueCard from './Blue.vue';
import GreenCard from './Green.vue';
import WhiteCard from './White.vue';
export default {
    components: {
        BlackCard,
        RedCard,
        BlueCard,
        GreenCard,
        WhiteCard,
    }
    }
</script>

<style>

</style>
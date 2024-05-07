<template>
    <div>
        <TheHeader />

        <div class="container-fluid">
            <div class="row">
                <div class="col-3">
                    <a-list bordered :data-source="data">
                        <TheMenu/>
                        <template #renderItem="{ item }">
                        <a-list-item>{{ item }}</a-list-item>
                        </template>
                        <template #header>
                        <div>Bang dieu khien</div>
                        </template>
                    </a-list>
                </div>
                <div class="col-9">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheMenu from "../components/TheMenu.vue";

export default {
    components: {
        TheHeader,
        TheMenu
    }
}
</script>
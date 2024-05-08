

<template>
    <div class="container-fluid">
        <div class="row align-items-center mb-3" style="background-color: aquamarine;padding: 1rem">
            <div
                class="col-1 d-flex d-sm-none align-items-center justify-content-center"
            >
                <span @click="showDrawer()">
                    <i class="fa-solid fa-align-justify"></i>
                </span>
            </div>

            <div
                class="
                col-10 col-sm-9
                d-flex
                align-items-center
                justify-content-center justify-content-sm-start
                "
            >
                <img
                src="../assets/logo.png"
                alt="Logo"
                height="32"
                width="34"
                class="ms-3 me-3"
                />
                <span class="d-none d-sm-flex">Admin page</span>
            </div>

            <div
                class="
                col-sm-3
                d-none d-sm-flex
                align-items-center
                justify-content-sm-end
                "
            >
                <span>Admin</span>
            </div>

            <div
                class="col-1 d-flex d-sm-none align-items-center justify-content-center"
            >
                <span @click="showDrawerUser()">
                    <i class="fa-solid fa-user"></i>
                </span>
            </div>

        </div>
    </div>

    <a-drawer
        v-model:open="open"
        class="custom-class"
        root-class-name="root-class-name"
        :root-style="{ color: 'blue' }"
        style="color: red"
        title="Basic Drawer"
        placement="left"
        @after-open-change="afterOpenChange"
    >
        <TheMenu/>
    </a-drawer>

    <a-drawer
        v-model:open="openUser"
        class="custom-class"
        root-class-name="root-class-name"
        :root-style="{ color: 'blue' }"
        style="color: red"
        title="Basic Drawer"
        placement="right"
        @after-open-change="afterOpenChange"
    >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </a-drawer>
</template>

<script setup>
    import { ref } from 'vue';
    import TheMenu from '../components/TheMenu.vue';

    const open = ref(false);
    const openUser = ref(false);
    const afterOpenChange = bool => {
        console.log('open', bool);
    };
    const showDrawer = () => {
        open.value = true;
    };
    const showDrawerUser = () => {
        openUser.value = true;
    };
</script>
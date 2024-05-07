<template>
    <div>
        Day la trang quan ly user
    </div>
</template>

<script>
import { useMenu } from "../../../stores/use-menu.js";
export default {
    setup() {
        useMenu().onSelectedKeys(["admin-users"]);
    },
}
</script>
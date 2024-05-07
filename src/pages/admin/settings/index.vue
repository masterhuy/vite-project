<template>
    <div>
        Day la trang quan ly settings
    </div>
</template>

<script>
import { useMenu } from "../../../stores/use-menu.js";
export default {
    setup() {
        useMenu().onSelectedKeys(["admin-settings"]);
    },
}
</script>
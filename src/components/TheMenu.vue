<template>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
    >
      <a-menu-item key="admin-users">
        <router-link :to="{ name: 'admin-users' }">
          <span>
            <UserOutlined class="me-1" /> Users
          </span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="admin-departments">
        <router-link :to="{ name: 'admin-departments' }">
          <span>
            <TagOutlined class="me-1"/> Departments
          </span>
        </router-link>
      </a-menu-item>
  
      <a-menu-item key="admin-roles">
        <router-link :to="{ name: 'admin-roles' }">
          <span>
            <TagOutlined class="me-1"/> Roles
          </span>
        </router-link>
      </a-menu-item>
  
      <a-menu-item key="admin-settings">
        <router-link :to="{ name: 'admin-settings' }">
          <span>
            <SettingFilled /> Settings
          </span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </template>
  
  <script>
  import { UserOutlined, TagOutlined, SettingOutlined, SettingFilled} from "@ant-design/icons-vue";
  import { defineComponent } from "vue";
  import { storeToRefs } from "pinia";
  import { useMenu } from "../stores/use-menu.js";
  export default defineComponent({
    components: {
      UserOutlined,
      TagOutlined,
      SettingOutlined,
      SettingFilled
    },
    setup() {
      const store = useMenu();
  
      return {
        ...storeToRefs(store),
      };
    },
  });
  </script>
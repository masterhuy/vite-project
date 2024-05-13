<template>
    <div>
        <a-card title="Users" style="width: 100%">
            <div class="row mb-3">
                <div class="col-12 d-flex justify-content-end">
                    <router-link :to="{ name: 'admin-users-create' }">
                        <a-button type="primary">
                            <i class="fa-solid fa-plus"></i>
                            Add new user
                        </a-button>
                    </router-link>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <a-table :dataSource="users" :columns="columns" :scroll="{ x: 576 }">
                        <template #bodyCell="{ column, index, record }">
                            <template v-if="column.key === 'index'">
                                <a>{{ index + 1 }}</a>
                            </template>

                            <template v-if="column.key === 'status'">
                                <span v-if="record.status_id == 1" class="text-primary">{{ record.status }}</span>
                                <span v-else-if="record.status_id == 2" class="text-danger">{{ record.status }}</span>
                            </template>

                            <template v-if="column.key === 'action'">
                                <router-link :to="{ name: 'admin-users-edit', params: { id: record.id } }">
                                    <a-button type="primary">
                                        <i class="fa-solid fa-pen-to-square"></i>
                                    </a-button>
                                </router-link>
                            </template>
                        </template>
                    </a-table>
                </div>
            </div>
        </a-card>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useMenu } from "../../../stores/use-menu.js";
export default defineComponent({
    setup() {
        useMenu().onSelectedKeys(["admin-users"]);

        const users = ref([])
        const columns = [
            {
                title: 'ID',
                key: 'index'
            },
            {
                title: 'User name',
                dataIndex: 'username',
                key: 'username',
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: 'Department',
                dataIndex: 'departments',
                key: 'departments',
            },
            {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
            },
            {
                title: 'Actions',
                key: 'action',
                fixed: 'right',
            },
        ]

        const getUser = () => {
            axios.get('http://127.0.0.1:8000/api/users')
                .then(function (response) {
                    users.value = response.data
                    // console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }

        // async function getUser() {
        //     try {
        //         const response = await axios.get('http://127.0.0.1:8000/api/users');
        //         console.log(response);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // }

        getUser()

        return {
            users,
            columns
        }
    },
})
</script>
<template>
    <div>
        <a-card title="Default size card" style="width: 100%">
            <div class="row">
                <div class="col-12">
                    <a-table :dataSource="users" :columns="columns" >
                        <template #bodyCell="{ column, index, record }">
                            <template v-if="column.key === 'index'">
                                <a>
                                {{ index + 1 }}
                                </a>
                            </template>

                            <template v-if="column.key === 'status'">
                                <span v-if="record.status_id == 1" class="text-primary">{{ record.status }}</span>
                                <span v-else-if="record.status_id == 2" class="text-danger">{{ record.status }}</span>
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
        ]

        const getUser = () => {
            axios.get('http://127.0.0.1:8000/api/users')
                .then(function (response) {
                    users.value = response.data
                    console.log(response);
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
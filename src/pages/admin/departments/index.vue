<template>
    <div>
        <a-card title="Departments" style="width: 100%">
            <div class="row mb-3">
                <div class="col-12 d-flex justify-content-end">
                    <router-link :to="{ name: 'admin-departments-create' }">
                        <a-button type="primary">
                            <i class="fa-solid fa-plus"></i>
                            Add new department
                        </a-button>
                    </router-link>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <a-table :dataSource="departments" :columns="columns" :scroll="{ x: 576 }">
                        <template #bodyCell="{ column, index, record }">
                            <template v-if="column.key === 'index'">
                                <a>{{ index + 1 }}</a>
                            </template>

                            <template v-if="column.key === 'action'">
                                <router-link :to="{ name: 'admin-departments-edit', params: { id: record.id } }">
                                    <a-button type="primary" class="me-sm-2">
                                        <i class="fa-solid fa-pen-to-square"></i>
                                    </a-button>
                                </router-link>
                                
                                    <a-button type="primary" danger @click="deleteDepartment(record.id)">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </a-button>
                                
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
import { message } from 'ant-design-vue';
import { useMenu } from "../../../stores/use-menu.js";
import { Modal } from 'ant-design-vue';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { createVNode } from 'vue';
export default defineComponent({
    setup() {
        useMenu().onSelectedKeys(["admin-departments"]);

        const departments = ref([])
        const columns = [
            {
                title: 'ID',
                key: 'index'
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Actions',
                key: 'action',
                fixed: 'right',
            },
        ]

        const getDepartments = () => {
            axios.get('http://127.0.0.1:8000/api/departments')
                .then(function (response) {
                    departments.value = response.data
                    // console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }

        getDepartments()

        const deleteDepartment = (id) => {
            Modal.confirm({
                title: 'Do you want to delete these items?',
                icon: createVNode(ExclamationCircleOutlined),
                content: 'When clicked the OK button, this dialog will be closed after 1 second',
                onOk() {
                    axios.delete(`http://127.0.0.1:8000/api/departments/${id}`)
                        .then(function (response) {
                            if(response.status == 200){
                                message.success('Delete department success')
                                getDepartments()
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                },
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                onCancel() {},
            });
        }

        return {
            departments,
            columns,
            deleteDepartment
        }
    },
})
</script>
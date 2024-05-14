<template>
    <form @submit.prevent="updateDepartment()">
        <a-card title="Edit user" style="width: 100%">
        <div class="row mb-3">
            <div class="col-12 col-sm-12">
                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                        <span class="text-danger me-1">*</span>
                        <span :class="{ 'text-danger' : errors.name }">Departments name:</span>
                        </label>
                    </div>

                    <div class="col-12 col-sm-5">
                        <a-input
                        placeholder="Departments name"
                        allow-clear
                        v-model:value="name"
                        :class="{ 'input-danger' : errors.name }"
                        />
                        <div class="w-100"></div>
                        <small class="text-danger" v-if="errors.name">{{ errors.name[0] }}</small>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12 d-grid d-sm-flex justify-content-sm-end mx-auto">
                <a-button class="me-0 me-sm-2 mb-3 mb-sm-0">
                <router-link :to="{ name: 'admin-users' }">
                    <span>Hủy</span>
                </router-link>
                </a-button>

                <a-button type="primary" html-type="submit">
                <span>Lưu</span>
                </a-button>
            </div>
            </div>
        </a-card>
    </form>
  </template>
  
<script>
    import { defineComponent, ref, reactive, toRefs } from "vue";
    import { useRouter } from 'vue-router';
    import { useRoute } from 'vue-router';
    import { message } from 'ant-design-vue';
    import { useMenu } from "../../../stores/use-menu.js";
    import dayjs from "dayjs";
    import axios from "axios";
    
    export default defineComponent({
        setup() {
            useMenu().onSelectedKeys(["admin-users"]);

            const router = useRouter();
            const route = useRoute();
            const departments = reactive({
                name: "",
            })

            const errors = ref({})

            const getDepartmentsEdit = () => {
                axios.get(`http://127.0.0.1:8000/api/departments/${route.params.id}/edit`)
                    .then((response) => {
                        // console.log(response)
                        departments.name = response.data.users.name
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }

            getDepartmentsEdit()

            const updateDepartment = () => {
                axios.put(`http://127.0.0.1:8000/api/departments/${route.params.id}`, departments)
                    .then((response) => {
                        // console.log(response)
                        response.status == 200 ? message.success('Edit department success') : ""
                        response.status == 200 ? router.push({name: "admin-departments"}) : ""
                    })
                    .catch((error) => {
                        // console.log(error)
                        errors.value = error.response.data.errors
                    })
            }


            return {
                updateDepartment,
                errors,
                departments,
                ...toRefs(departments)
            }
        },
    });
</script>

<style>
.select-danger .ant-select-selector{
    border-color: #dc3545 !important;
}
.input-danger{
    border: 1px solid #dc3545 !important;
}
</style>
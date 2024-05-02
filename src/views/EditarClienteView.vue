<script setup>
import { onMounted, reactive } from "vue";
import ClienteService from "../services/ClienteService.js";
import { FormKit } from "@formkit/vue";
import { useRouter, useRoute } from "vue-router";
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/UI/Heading.vue";

const router = useRouter();
const route = useRoute();

console.log(router);

const formData = reactive({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    empresa: "",
    puesto: "",
});

onMounted(() => {
    ClienteService.obtenerCliente(id)
        .then(({ data }) => {
            Object.assign(formData, data);
        })
        .catch((error) => console.log(error));
});

defineProps({
    titulo: {
        type: String,
    },
});

const { id } = route.params;
console.log(id);

const handleSubmit = (data) => {
    ClienteService.actualizarCliente(id, data)
        .then(() => router.push({ name: "listado-clientes" }))
        .catch((error) => console.log(error));
};
</script>

<template>
    <div>
        <div>
            <div class="flex justify-end">
                <RouterLink to="listado-clientes">Inicio</RouterLink>
            </div>
        </div>
        <Heading>{{ titulo }}</Heading>
        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit
                    type="form"
                    submit-label="Guardar Cambios"
                    incomplete-message="No se pudo enviar, revise los mensajes"
                    @submit="handleSubmit"
                >
                    <FormKit
                        type="text"
                        name="nombre"
                        label="Nombre"
                        placeholder="Ingrese su Nombre"
                        validation="required"
                        :validation-messages="{
                            required: 'El Nombre del cliente es obligatorio',
                        }"
                        v-model="formData.nombre"
                    />

                    <FormKit
                        type="text"
                        name="apellido"
                        label="Apellido"
                        placeholder="Ingrese su Apellido"
                        validation="required"
                        :validation-messages="{
                            required: 'El Apellido del cliente es obligatorio',
                        }"
                        v-model="formData.apellido"
                    />

                    <FormKit
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="Ingrese su Email"
                        validation="required|email"
                        :validation-messages="{
                            required: 'El Email del cliente es obligatorio',
                            email: 'Ingresa un Email valido',
                        }"
                        v-model="formData.email"
                    />

                    <FormKit
                        type="text"
                        name="telefono"
                        label="Telefono"
                        placeholder="Formato de Telefono : XXX-XXX-XXXX"
                        validation="required|*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                        :validation-messages="{
                            required: 'El Telefono del cliente es obligatorio',
                            matches: 'El formato del Telefono no es valido',
                        }"
                        v-model="formData.telefono"
                    />
                    <FormKit
                        type="text"
                        name="empresa"
                        label="Empresa"
                        placeholder="Ingrese su Empresa"
                        v-model="formData.empresa"
                    />

                    <FormKit
                        type="text"
                        name="puesto"
                        label="Puesto"
                        placeholder="Ingrese su Puesto"
                        v-model="formData.puesto"
                    />
                </FormKit>
            </div>
        </div>
    </div>
</template>

<style scoped>
.formkit-wrapper {
    max-width: 100%;
}
</style>

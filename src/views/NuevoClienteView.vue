<script setup>
import { FormKit } from "@formkit/vue";
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/UI/Heading.vue";

defineProps({
    titulo: {
        type: String,
    },
});

const handleSubmit = (data) => {
    console.log(data);
};

// Para colocar valores en el formulario para pruebas
// const formData = {
//     nombre: "Juan",
// };
// Esta propiedad va en el FormKit type Form
// :value="formData"

</script>

<template>
    <div>
        <div>
            <div class="flex justify-end">
                <RouterLink to="inicio">Inicio</RouterLink>
            </div>
        </div>
        <Heading>{{ titulo }}</Heading>
        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit
                    type="form"
                    submit-label="Agregar Cliente"
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
                    />
                    <FormKit
                        type="text"
                        name="empresa"
                        label="Empresa"
                        placeholder="Ingrese su Empresa"
                    />

                    <FormKit
                        type="text"
                        name="puesto"
                        label="Puesto"
                        placeholder="Ingrese su Puesto"
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

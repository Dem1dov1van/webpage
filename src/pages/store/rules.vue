<template>
  <Breadcrumbs :items="breadcrumbs"></Breadcrumbs>

  <Container>
    <p class="max-w-[760px] mt-8 ">
      Привет! Добро пожаловать на&nbsp;распродажу офисной мебели. Внимательно ознакомься с&nbsp;правилами розыгрыша и&nbsp;используемой терминологией.
    </p>
  </Container>

  <tearms></tearms>

  <features></features>

  <accordion></accordion>

  <Container>
    <div class="max-w-4xl flex-col mx-auto mb-20">
      <nuxt-link
        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-75 disabled:hover:bg-indigo-600 disabled:cursor-not-allowed cursor-pointer"
        to="/store/products/"
      >
        К товарам!
      </nuxt-link>
    </div>
  </Container>

</template>

<script setup lang="ts">
import Accordion from "~/components/Accordion.vue";
import Tearms from "~/components/Tearms.vue";

const breadcrumbs = [
  {
    label: 'Правила'
  }
]
</script>
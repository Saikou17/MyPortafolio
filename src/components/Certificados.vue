<script setup>

import CertificadosCard from './CertificadosCard.vue'
import CertificatesJson from '../Data/Certificates.json'

</script>

<style>
    @import '../assets/CssStyles/certificates.css';
</style>

<template>
    <section id="certificados" class="certificates dark:bg-gray-900">
        <div class="certificates_title mt-8">
            <h2>Certificados</h2>
        </div>
        <div class="certificates_display mt-8">
            <div class = "certificates_slider">
              <CertificadosCard v-for="(certificate) in CertificatesJson" :key="certificate.id" :frame="certificate" />
              <!-- Segunda tanda (duplicada) -->
              <CertificadosCard v-for="(certificate, index) in CertificatesJson" :key="'clone-' + index" :frame="certificate" />
            </div>
        </div> 
    </section>
</template>
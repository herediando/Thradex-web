<template>
<footer id="footer" class="mt-5">
  <img src="../assets/footer-image.png" class="footer-image" alt="">
  <v-layout row wrap>
    <!-- <v-flex d-flex xs2>
      <v-card color="grey">
        <v-card-text>
        </v-card-text>
      </v-card>
    </v-flex> -->
    <v-flex d-flex xs12>
      <v-card dark color="grey">
        <v-card-text>
         <v-container grid-list-xl>
            <v-layout row wrap>
              <v-flex xs12 md4>
              <h2>SOBRE THRADEX</h2>
              <p>Thradex es un contratista de telecomunicaciones y construcción que también ofrece servicios de logística para proyectos de ingeniería. Con presencia en Perú, Brasil y Estados Unidos, nuestros profesionales están comprometidos con la calidad y la satisfacción del cliente. Nosotros hacemos la diferencia agregando valor a los proyectos de nuestros clientes con soluciones integrales e innovadoras</p>
              </v-flex>
              <v-flex xs12 md4>
                <h2>OFICINAS</h2>
                <span><strong>PERÚ</strong></span><br>
                <span>Calle Libertad No. 174 Oficina 407 Miraflores - Lima<br>
                <v-icon>mdi-phone</v-icon>+511 763-4953</span><br> <br>
                <v-icon>mdi-email</v-icon>info@thradex.com</span><br> <br>
                <span ><strong>BRASIL</strong></span> <br>
                <span>R Barbosa da Cunha, 779 - Sala: 6; Jardim Guanabara - Campinas/SP 13.073-320</span><br><br>
                <span><strong>ESTADOS UNIDOS</strong></span><br>
                <span>7950 NW 53RD ST STE 337 MIAMI, FL 33166-4791 <br> <v-icon>mdi-phone</v-icon> +1 786-364-3033 <br></span>
              </v-flex>
              <!-- <v-flex xs3>
                <v-layout column wrap>
                  <v-flex>
                    <h2>NOSOTROS</h2>
                    <p>Lul</p>
                  </v-flex>
                  <v-flex>
                    <h2>SERVICIOS</h2>
                    <p>Lul</p>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs3>
                <v-layout column wrap>
                  <v-flex>
                    <h2>CONTACTO</h2>
                    <p>Lul</p>
                  </v-flex>
                  <v-flex>
                    <h2>PARA PROVEEDORES</h2>
                    <p>Lul</p>
                  </v-flex>
                  <v-flex>
                    <h2>THRADEX EN LAS REDES</h2>
                    <p>Lul</p>
                  </v-flex>
                </v-layout>
              </v-flex> -->
              <v-flex justify-end xs12 md4>
                <img class="footer-logo" src="../assets/countrys.png" alt="">
              </v-flex>
            </v-layout>
         </v-container>
        </v-card-text>
        </v-card>
    </v-flex>
  </v-layout>
</footer>
</template>
<script>
export default {};
</script>

<style>
.footer-image {
  width: 100%;
}
.footer-logo {
  position: relative;
  left: 10%;
  top: 0;
  max-width: 90%;
}
</style>

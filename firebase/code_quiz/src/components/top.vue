<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex mb-１>
        <h1 class="display-1 font-weight-bold mb-１">
          コード当てクイズ
        </h1>
      </v-flex> 


      <v-flex xs12>
        <h1 class="title font-weight-regular mb-1">
          ♬楽しく音感を鍛えよう♫
        </h1>
      </v-flex> 

      <v-flex mb-１>
      <img class="img" :src="assetsImage1" width="100" />
      <img class="img" :src="assetsImage2" width="100" />
      <img class="img" :src="assetsImage3" width="100" />
      </v-flex> 

    
      <v-flex xs12 style="padding-top: 1rem;">
      <v-btn rounded color="pink">始める</v-btn>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import AssetsImage1 from "@/assets/piano_usagi.png"
import AssetsImage2 from "@/assets/music_gassyou_kids.png"
import AssetsImage3 from "@/assets/animal_penguin_music_band_guitar.png"

export default {
  name: 'top',

  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    assetsImage1: AssetsImage1,
    assetsImage2: AssetsImage2,
    assetsImage3: AssetsImage3,
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer',
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/layout/pre-defined',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
};
</script>

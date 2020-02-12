<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex mb-１>
        <h1 class="display-1 font-weight-bold mb-１">
          <font color="blue">コード当てクイズ</font>
        </h1>
      </v-flex> 


      <v-flex xs12>
        <h1 class="title font-weight-bold mb-1">
          ♬楽しく音感を鍛えよう♫
        </h1>
      </v-flex> 

      <v-flex mb-１>
      <img class="img" :src="assetsImage1" width="100" />
      <img class="img" :src="assetsImage2" width="100" />
      <img class="img" :src="assetsImage3" width="100" />
      </v-flex> 

      <!-- 説明文 -->
      <v-flex xs12>
        <h1 class="body-1 font-weight-regular mb-1"
        style="white-space:pre-wrap; word-wrap:break-word;">
          流れる音を聴いて、三和音・四和音のうち<br>
          どのコードネームか選択式で当てる<br>
          クイズゲームです♪
        </h1>
      </v-flex> 

    
      <v-flex xs12 style="padding-top: 1rem;">
        <router-link tag="div" to="/select_level">
          <v-btn rounded color="pink" dark>さっそく始める！</v-btn>
        </router-link>
      </v-flex>

       <v-flex xs12 style="padding-top: 1rem;">
        <router-link tag="div" to="/learning_code">
          <v-btn rounded color="orange" dark>コードについて学ぶ</v-btn>
        </router-link>
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
    assetsImage1: AssetsImage1,
    assetsImage2: AssetsImage2,
    assetsImage3: AssetsImage3,
  }),
};
</script>

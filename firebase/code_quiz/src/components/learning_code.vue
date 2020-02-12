<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex mb-１>
        <h1 class="headline font-weight-bold mb-１">
          <span class="pink--text lighten-2">基本的なコードを学ぼう！</span>
        </h1>
      </v-flex> 

    <v-row align="center">
        <v-col class="text-center" cols="12" sm="12">
            <div class="my-2">
                <v-btn block color="blue" dark large>三和音（五の和音）</v-btn>
            </div>

            <div id ="app">
                <js-accordion></js-accordion>
            </div>

            
            <div class="my-2">
                <v-btn block color="blue" dark large>四和音（七の和音）</v-btn>
            </div>
            
        </v-col>
    </v-row>

    </v-layout>
  </v-container>
</template>


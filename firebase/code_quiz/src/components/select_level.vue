<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex mb-１>
        <h1 class="headline font-weight-bold mb-１">
          <span class="pink--text lighten-2">レベルを選んでください</span>
        </h1>
      </v-flex> 

    <v-row align="center">
        <v-col class="text-center" cols="12" sm="12">
            <div class="my-2">
                <v-btn block color="orange" dark large>かんたん</v-btn>
            </div>
            <div class="my-2">
                <v-btn block color="green" dark large>ふつう</v-btn>
            </div>
            <div class="my-2">
                <v-btn block color="blue" dark large>むずかしい</v-btn>
            </div>
        </v-col>
    </v-row>

    </v-layout>
  </v-container>
</template>


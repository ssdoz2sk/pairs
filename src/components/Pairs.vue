<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <!-- 男生列表 -->
      <v-flex xs2>
        <v-card dark color="blue lighten-2" class="card-shadow">
          <v-card-text class="px-0">男生</v-card-text>
        </v-card>
        <v-card class="card-shadow" v-for="boy in boys" :key="boy.name">
          <v-list two-line>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img v-if="boy.avatar" :src="boy.avatar" >
                <v-icon v-else large color="blue darken-2">person</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ boy.id }}. {{ boy.name }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ boy.detail }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
      <!-- 配對結果 -->
      <v-flex xs6 offset-xs1>
        <v-card color="yellow accent-1" class="card-shadow">
          <v-card-text class="px-0">配對結果</v-card-text>
        </v-card>
        <v-layout row v-for="match in matched" :key="match.boy.name">
          <v-flex xs6>
            <v-card class="card-shadow">
              <v-list two-line>
                <v-list-tile avatar>
                  <v-list-tile-avatar>
                    <img v-if="match.boy.avatar" :src="match.boy.avatar" >
                    <v-icon v-else large color="blue darken-2">person</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ match.boy.id }}. {{ match.boy.name }}</v-list-tile-title>
                    <v-list-tile-sub-title> {{ match.boy.detail }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card class="card-shadow">
              <v-list two-line>
                <v-list-tile avatar>
                  <v-list-tile-avatar>
                    <img v-if="match.girl.avatar" :src="match.girl.avatar" >
                    <v-icon v-else large color="pink darken-2">person</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ match.girl.id }}. {{ match.girl.name }}</v-list-tile-title>
                    <v-list-tile-sub-title> {{ match.girl.detail }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <!-- 女生列表 -->
      <v-flex xs2 offset-xs1>
        <v-card dark color="pink lighten-2" class="card-shadow">
          <v-card-text class="px-0">女生</v-card-text>
        </v-card>
        <v-card class="card-shadow" v-for="girl in girls" :key="girl.name">
          <v-list two-line>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img v-if="girl.avatar" :src="girl.avatar" >
                <v-icon v-else large color="pink darken-2">person</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ girl.id }}. {{ girl.name }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ girl.detail }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Pairs',
  data () {
    return {
      dialog: false
    }
  },
  computed: mapState({
    boys: state => state.boys,
    girls: state => state.girls,
    matched (state) {
      let boys = state.boys
      let girls = state.girls
      let matchs = []
      for (let boy of boys) {
        let selectedGirls = boy.select
        if (!selectedGirls) {
          continue
        }
        for (let girlId of selectedGirls.split(' ')) {
          let girl = girls.find(g => g.id === girlId)
          if (!girl) {
            continue
          }
          let selectedBoys = girl.select
          if (!selectedBoys) {
            continue
          }
          for (let b of selectedBoys.split(' ')) {
            if (boy.id === b) {
              matchs.push({ 'boy': boy, 'girl': girl })
            }
          }
        }
      }
      return matchs
    }
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-shadow {
  margin-bottom: 1.2rem;
  box-shadow: 4px 4px 7px 3px #ddd;
}
</style>

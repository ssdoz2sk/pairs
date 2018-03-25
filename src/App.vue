<template>
  <v-app>
    <v-toolbar
      app
      dark
      color="orange lighten-2"
      :clipped-left="clipped"
    >
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="$store.commit('openSettingModal')">
        <v-icon>settings</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <Pairs/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <!-- <span>&copy; 2018 </span> -->
    </v-footer>
    <v-dialog
        v-model="dialog"
        fullscreen
        transition="dialog-bottom-transition"
        :overlay="false"
        scrollable
      >
      <Settings />
    </v-dialog>
  </v-app>
</template>

<script>
import Pairs from './components/Pairs'
import Settings from './components/Settings'

export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false
    }
  },
  computed: {
    dialog () { return this.$store.state.settingModal },
    title () { return this.$store.state.title }
  },
  name: 'App',
  components: {
    Pairs,
    Settings
  },
  mounted: function () {
    let dataString = localStorage.getItem('data')
    if (dataString === null) {
      return
    }

    let data = JSON.parse(dataString)
    let boys = data['boys'] || []
    let girls = data['girls'] || []
    let title = data['title'] || '標題喔~~'
    let showSelectName = data['showSelectName'] || false

    document.title = title

    this.$store.commit('boys', boys)
    this.$store.commit('girls', girls)
    this.$store.commit('title', title)
    this.$store.commit('showSelectName', showSelectName)
  }
}
</script>

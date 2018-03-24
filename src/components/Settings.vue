<template>
  <v-card tile>
    <v-toolbar card dark color="primary">
      <v-btn icon @click.native="$store.commit('closeSettingModal')" dark>
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title>Settings</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark flat @click.native="save">Save</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-card-text>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field
              name="title"
              label="標題："
              v-model="title"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap v-if="boys.length > 0 && girls.length > 0">
          <v-flex xs6>
            <v-btn block color="blue lighten-2" @click="quickPair('boys')">男生 輸入配對意象</v-btn>
          </v-flex>
          <v-flex xs6>
            <v-btn block color="pink lighten-2" @click="quickPair('girls')">女生 輸入配對意象</v-btn>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <!-- 男生列表 -->
          <v-flex xs6>
            <v-data-table
              :headers="headers"
              :items="boys"
              :disable-initial-sort="true"
              hide-actions
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td class="justify-center layout px-0">
                  <v-btn icon class="mx-0" @click="deleteItem(boys, props.index)">
                    <v-icon color="pink">delete</v-icon>
                  </v-btn>
                </td>

                <td class="text-xs-left" v-if="!quickEditBoys">{{ props.item.id }}</td>
                <td v-else>
                  <v-text-field
                    placeholder = "編號"
                    v-model = "props.item.id"
                    single-line
                    @focus="addElementWhenLastFocus(boys, props.index)"
                  />
                </td>

                <td class="text-xs-left" v-if="!quickEditBoys">{{ props.item.name }}</td>
                <td v-else>
                  <v-text-field
                    placeholder="姓名"
                    v-model="props.item.name"
                    @focus="addElementWhenLastFocus(boys, props.index)"
                    single-line
                  />
                </td>

                <td class="text-xs-left" v-if="!quickEditBoys">{{ props.item.detail }}</td>
                <td v-else>
                  <v-text-field
                    placeholder="詳細"
                    v-model="props.item.detail"
                    @focus="addElementWhenLastFocus(boys, props.index)"
                    single-line
                  />
                </td>

                <td class="text-xs-left" v-if="!quickEditBoysPair">{{ props.item.select }}</td>
                <td v-else><v-text-field placeholder="配對意象，以空白格開" v-model="props.item.select" single-line /></td>
              </template>
            </v-data-table>
          </v-flex>
          <!-- 女生列表 -->
          <v-flex xs6>
            <v-data-table
              :headers="headers"
              :items="girls"
              :disable-initial-sort="true"
              hide-actions
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td class="justify-center layout px-0">
                  <v-btn icon class="mx-0" @click="deleteItem(girls, props.index)">
                    <v-icon color="pink">delete</v-icon>
                  </v-btn>
                </td>

                <td class="text-xs-left" v-if="!quickEditGirls">{{ props.item.id }}</td>
                <td v-else>
                  <v-text-field
                    placeholder="編號"
                    v-model="props.item.id"
                    @focus="addElementWhenLastFocus(girls, props.index)"
                    single-line
                  />
                </td>

                <td class="text-xs-left" v-if="!quickEditGirls">{{ props.item.name }}</td>
                <td v-else>
                  <v-text-field
                    placeholder="姓名"
                    v-model="props.item.name"
                    @focus="addElementWhenLastFocus(girls, props.index)"
                    single-line
                  />
                </td>

                <td class="text-xs-left" v-if="!quickEditGirls">{{ props.item.detail }}</td>
                <td v-else>
                  <v-text-field
                    placeholder="詳細"
                    v-model="props.item.detail"
                    @focus="addElementWhenLastFocus(girls, props.index)"
                    single-line
                  />
                </td>

                <td class="text-xs-left" v-if="!quickEditGirlsPair">{{ props.item.select }}</td>
                <td v-else><v-text-field placeholder="配對意象，以空白格開" v-model="props.item.select" single-line /></td>
              </template>
            </v-data-table>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs6>
            <v-btn block dark color="blue lighten-2" @click="quickEdit('boys')">男生 輸入/修改 名單</v-btn>
          </v-flex>
          <v-flex xs6>
            <v-btn block dark color="pink lighten-2" @click="quickEdit('girls')">女生 輸入/修改 名單</v-btn>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-btn block dark color="orange lighten-1" v-bind:href="dataUri" download="data.json">匯出所有資料</v-btn>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-btn block dark color="orange lighten-1" @click="onPickFile">匯入資料（清空後匯入）</v-btn>
            <input
              type="file"
              ref="import"
              name="import"
              @change="onFilePicked"
              style="display: none"
            >
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-btn block color="error" @click="cleanAll">清空所有資料</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import _ from 'lodash'
// import { mapState } from 'vuex'
import { mixin as focusMixin } from 'vue-focus'

export default {
  name: 'Settings',
  data () {
    return {
      title: '',
      headers: [
        { text: '刪除', sortable: false },
        {
          text: '編號',
          align: 'left',
          sortable: true,
          value: 'id'
        },
        { text: '姓名', value: 'name' },
        { text: '詳細', value: 'detail' },
        { text: '選擇', value: 'select' }
      ],
      boys: [],
      girls: [],
      matched: [],
      quickEditBoys: false,
      quickEditGirls: false,
      quickEditBoysPair: false,
      quickEditGirlsPair: false,
      editParticipant: false
    }
  },
  methods: {
    addElementWhenLastFocus (list, index) {
      if (index === list.length - 1) {
        list.push({
          id: '',
          name: '',
          detail: '',
          select: ''
        })
      }
    },

    quickEdit (listname) {
      let list = null
      let done = false
      if (listname === 'boys') {
        list = this.boys
        if (this.quickEditBoys) {
          this.quickEditBoys = false
          done = true
        } else {
          this.quickEditBoys = true
        }
      } else if (listname === 'girls') {
        list = this.girls
        if (this.quickEditGirls) {
          this.quickEditGirls = false
          done = true
        } else {
          this.quickEditGirls = true
        }
      }
      if (done) {
        while (list.length > 0 &&
               list[list.length - 1].id === '' &&
               list[list.length - 1].name === '' &&
               list[list.length - 1].detail === '' &&
               list[list.length - 1].select === '') {
          list.pop()
        }
      } else {
        list.push({
          id: '',
          name: '',
          detail: '',
          select: ''
        })
      }
    },

    quickPair (listname) {
      if (listname === 'boys') {
        this.quickEditBoysPair = !this.quickEditBoysPair
      } else if (listname === 'girls') {
        this.quickEditGirlsPair = !this.quickEditGirlsPair
      }
    },

    deleteItem (list, index) {
      confirm(`確定刪除 ${list[index].name} ？`) && list.splice(index, 1)
    },

    save () {
      this.$store.commit('boys', this.boys)
      this.$store.commit('girls', this.girls)
      this.$store.commit('title', this.title)
      this.$store.commit('closeSettingModal')
      document.title = this.title

      let dataString = JSON.stringify({boys: this.boys, girls: this.girls, title: this.title})
      localStorage.setItem('data', dataString)
    },

    onPickFile () {
      this.$refs.import.click()
    },

    onFilePicked (e) {
      const files = e.target.files
      if (files[0] !== undefined) {
        const fr = new FileReader()
        fr.readAsText(files[0])
        fr.addEventListener('load', () => {
          try {
            let dataString = fr.result
            let data = JSON.parse(dataString)
            this.boys = data['boys'] || []
            this.girls = data['girls'] || []
            this.title = data['title'] || ''
          } catch (e) {
            this.errorMessage = '資料解析錯誤，請確定是正確檔案'
          }
        })
      }
    },

    cleanAll () {
      if (confirm('確定清空')) {
        this.boys = []
        this.girls = []
      }
    }
  },
  computed: {
    dialogOpened () {
      return this.$store.state.settingModal
    },
    dataUri () {
      let dataString = JSON.stringify({boys: this.boys, girls: this.girls, title: this.title})
      return 'data:text/json;charset=utf-8,' + encodeURIComponent(dataString)
    }
  },
  watch: {
    dialogOpened (opened) {
      if (opened) {
        this.boys = _.cloneDeep(this.$store.state.boys)
        this.girls = _.cloneDeep(this.$store.state.girls)
        this.title = this.$store.state.title
      }
    }
  },
  mixins: [ focusMixin ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.participant-card {
  margin-bottom: 1.2rem;
  box-shadow: 4px 4px 7px 3px #ddd;
}
</style>

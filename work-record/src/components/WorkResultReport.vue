<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>
<template>
  <div id="wrr">
    <p>year = {{ year }}</p>
    <button @click="nextyear">次年</button>
    <span>年月を選択</span>
    <select v-model="options.name" v-on:change="addDaySelect">
      <option disabled value="年月を選択して下さい" selected>年月を選択して下さい</option>
      <option v-for="(option, index) in options" v-bind:value="option.name" v-bind:key="`first-${index}`">
        {{ option.name }}
      </option>
    </select>
    <select v-model="startTimeH.name">
      <option v-for="(sth, index) in startTimeH" v-bind:value="sth.name" v-bind:key="`sth-${index}`">
        {{ sth.name }}
      </option>
    </select>
    <select v-model="startTimeM.name">
      <option v-for="(stm, index) in startTimeM" v-bind:value="stm.name" v-bind:key="`stm-${index}`">
        {{ stm.name }}
      </option>
    </select>
    <select v-model="endTimeH.name">
      <option v-for="(edh, index) in endTimeH" v-bind:value="edh.name" v-bind:key="`edh-${index}`">
        {{ edh.name }}
      </option>
    </select>
    <select v-model="endTimeM.name">
      <option v-for="(edm, index) in endTimeM" v-bind:value="edm.name" v-bind:key="`edm-${index}`">
        {{ edm.name }}
      </option>
    </select>
    <div id="pf"></div>
    <p v-show="show">aaa</p>
    <select v-model="tests.name">
      <option v-for="(test, index) in tests" v-bind:value="test.name" v-bind:key="`second-${index}`">
        {{ test.value }}
      </option>
    </select>
    <ul>
        <li v-for="(dc, x) in dayCount" :key="x">
            <span>{{month}}月{{('0' + dc).slice(-2)}}日</span>
            <select v-model="startTimeH.name">
            <option v-for="(sth, index) in startTimeH" v-bind:value="`sth.name-${dc}`" v-bind:key="`sth-${index}`">
                {{ sth.name }}
            </option>
            </select>
            <select v-model="startTimeM.name">
            <option v-for="(stm, index) in startTimeM" v-bind:value="stm.name" v-bind:key="`stm-${index}`">
                {{ stm.name }}
            </option>
            </select>
            <span>~</span>
            <select v-model="endTimeH.name">
            <option v-for="(edh, index) in endTimeH" v-bind:value="edh.name" v-bind:key="`edh-${index}`">
                {{ edh.name }}
            </option>
            </select>
            <select v-model="endTimeM.name">
            <option v-for="(edm, index) in endTimeM" v-bind:value="edm.name" v-bind:key="`edm-${index}`">
                {{ edm.name }}
            </option>
            </select>
        </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'WRR',
  data () {
    return {
      year: 2019,
      options: getOptions(2019),
      startTimeH: [{id:  1, name: '00'}, {id:  2, name: '01'}, {id:  3, name: '02'}, {id:  4, name: '03'},
                   {id:  5, name: '04'}, {id:  6, name: '05'}, {id:  7, name: '06'}, {id:  8, name: '07'},
                   {id:  9, name: '08'}, {id: 10, name: '09'}, {id: 11, name: '10'}, {id: 12, name: '11'},
                   {id: 13, name: '12'}, {id: 14, name: '13'}, {id: 15, name: '14'}, {id: 16, name: '15'},
                   {id: 17, name: '16'}, {id: 18, name: '17'}, {id: 19, name: '18'}, {id: 20, name: '19'},
                   {id: 21, name: '20'}, {id: 22, name: '21'}, {id: 23, name: '22'}, {id: 24, name: '23'}
                   ],
      startTimeM: [{id: 1, name: '00'}, {id: 2, name: '15'}, {id: 3, name: '30'}, {id: 4, name: '45'}],
      endTimeH: [{id:  1, name: '00'}, {id:  2, name: '01'}, {id:  3, name: '02'}, {id:  4, name: '03'},
                   {id:  5, name: '04'}, {id:  6, name: '05'}, {id:  7, name: '06'}, {id:  8, name: '07'},
                   {id:  9, name: '08'}, {id: 10, name: '09'}, {id: 11, name: '10'}, {id: 12, name: '11'},
                   {id: 13, name: '12'}, {id: 14, name: '13'}, {id: 15, name: '14'}, {id: 16, name: '15'},
                   {id: 17, name: '16'}, {id: 18, name: '17'}, {id: 19, name: '18'}, {id: 20, name: '19'},
                   {id: 21, name: '20'}, {id: 22, name: '21'}, {id: 23, name: '22'}, {id: 24, name: '23'}
                   ],
      endTimeM: [{id: 1, name: '00'}, {id: 2, name: '15'}, {id: 3, name: '30'}, {id: 4, name: '45'}],
      tests: [{id: 1, name: 'test1', value: 'aaa'}, {id: 2, name: 'test2', value: 'bbb'}, {id: 3, name: 'test3', value: 'ccc'}],
      show: false,
      fshow: false,
      month: "",
      dayCount: 0
    }
  },
  methods: {
    nextyear () {
      this.year += 1
      if(this.show === false)
      {
        this.show = true
      }
      if(this.fshow === false)
      {
        this.fshow = true
      }
      this.options = getOptions(moment(new Date).format('YYYY'))
    },
    addDaySelect: function () {
      console.log(moment(this.options.name + '/01' , 'YYYY/MM/DD').endOf('month').format("DD"))
      this.month = moment(this.options.name + '/01' , 'YYYY/MM/DD').format("MM")
      this.dayCount = Number(moment(this.options.name + '/01' , 'YYYY/MM/DD').endOf('month').format("DD"))
    }
  }
}
function getOptions(year){

  // 1)
  const dates
    = new Array(12).fill(new getBaseDate(year))

  // 2) n ヶ月後にする。
  const nMonthLaters
    = dates.map((date, n) => getNMonthLaters(date, n))

  // 3) (2)を String に変換(月は0から始まるので+1してる)
  const stringNMonthLaters
    = nMonthLaters.map(nMonthLater => nMonthLater.getFullYear() + '/' + ('0' + (nMonthLater.getMonth() + 1)).slice(-2))
    // = nMonthLaters.map(nMonthLater => nMonthLater.getFullYear() + '年' + (nMonthLater.getMonth() + 1) + '月')
    console.log(stringNMonthLaters)
  // 4) 目的の型に変換
  const options
    = stringNMonthLaters.map((month, i, ym) => ({ id: i, name: month, ym: month.replace("/", "") }))

  return options
}
function getBaseDate(year) {
  const baseDate = new Date()
  baseDate.setFullYear(year)
  return baseDate
}
function getNMonthLaters(date, n) {
  const nMonthLater = new Date(date)
  nMonthLater.setMonth(date.getMonth() + n)
  return nMonthLater
}
</script>

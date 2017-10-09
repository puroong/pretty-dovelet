<template>
  <b-dropdown id="dropdown" :text="currentStair" variant="primary" class="m-md-2">
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 1}}">1</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 2}}">2</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 3}}">3</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 4}}">4</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 5}}">5</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 6}}">6</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 7}}">7</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 8}}">8</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 9}}">9</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 10}}">10</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 11}}">11</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 12}}">12</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 13}}">13</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 14}}">14</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 15}}">15</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 16}}">16</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 17}}">17</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 18}}">18</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 19}}">19</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 20}}">20</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 21}}">21</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 22}}">22</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 23}}">23</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 24}}">24</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 25}}">25</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 26}}">26</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 27}}">27</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 28}}">28</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 29}}">29</b-dropdown-item>
    <b-dropdown-item @click="click" :to="{name: 'stair', params: {stairNum: 30}}">30</b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  name: 'dropdown',
  props: {
    currentStair: {
      type: String,
      required: true
    }
  },
  methods: {
    click (e) {
      this.currentStair = e.target.innerHTML
    }
  }
}
</script>

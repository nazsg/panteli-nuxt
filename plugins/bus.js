import Vue from 'vue'
import axios from 'axios'

const eventBus = {}

eventBus.install = function (Vue) {
  Vue.prototype.$bus = new Vue({
    data() {
      return {
        myhost: 'https://panteli.biz/',
        home: [],
        home2: [],
        up: [],
        no_cat: [],
        main_meals: [],
        fish: [],
        grills: [],
        entrees: [],
        salads: [],
        desserts: [], 
        hot: [],
        ramsgate: [],
        whitstable: [],
        shepherd: [],
        pine: [],
        barnsole: [],
        founders: [],
        others: [],        
        down: '',
        snacks: [],
        paninis: [],
        sandwiches: [],
        toasted: [],
        rolls: [],
        sandwiches_cold: [],
        main_menus: [],
        main_meals_down: [],
        fish_down: [],
        grills_down: [],
        burgers: [],
        entrees_down: [],
        jacket: [],
        salads_down: [],
        extras: [],
        children: [],
        breakfast: [],
        set_breakfast: [],
        vegetarian: [],
        pastries: [], 
        after_pastries: [],
        biscuits: [],
        desserts_down: [],
        ice_cream_specials: [],
        hot_drinks: [],
        cold_drinks_dispensed: [],
        cold_drinks_bottled: [],
        cold_drinks_cans: []
      }
    },
    methods: {
      async getHome2() { // not working
         await this.$axios.$get(this.myhost + 'others')
         .then(res => this.home2 = ndata)
         .catch(e => console.log(e))
        // this.home2 = ndata
      },
      getHome() {
         axios.get(this.myhost + 'others')
         .then(res => this.home = res.data)
         .catch(e => console.log(e))
      },
      getAllMenus(val) {
        axios.get(this.myhost + 'all2')
        .then(res => {
          this.down = res.data
          this.catDown()
        })
      },
      catDown() {
        const all = this.down
        this.snacks = all.filter(m => m.category === 'SNACKS')
        this.paninis = all.filter(m => m.category === 'PANINIS')
        this.sandwiches = all.filter(m => m.category === 'SANDWICHES (HOT, NOT TOASTED)')
        this.sandwiches_cold = all.filter(m => m.category === 'SANDWICHES COLD')
        this.toasted = all.filter(m => m.category === 'TOASTED SANDWICHES')
        this.rolls = all.filter(m => m.category === 'ROLLS')
        this.main_menus = all.filter(m => m.category === 'MAIN MENU')
        this.main_meals = all.filter(m => m.category === 'MAIN MEALS')
        this.fish_down = all.filter(m => m.category === 'FISH')
        this.grills_down = all.filter(m => m.category === 'GRILLS')
        this.burgers = all.filter(m => m.category === 'BURGERS')
        this.entrees_down = all.filter(m => m.category === 'ENTREES')
        this.jacket = all.filter(m => m.category === 'JACKET POTATOES')
        this.salads_down = all.filter(m => m.category === 'SALADS')
        this.extras = all.filter(m => m.category === 'EXTRAS')
        this.children = all.filter(m => m.category === "CHILDREN'S MENU - FOR UNDER 10'S")
        this.breakfast = all.filter(m => m.category === 'BREAKFAST MENU')
        this.set_breakfast = all.filter(m => m.category === 'SET BREAKFAST')
        this.vegetarian = all.filter(m => m.category === 'VEGETARIAN BREAKFAST')
        this.pastries = all.filter(m => m.category === 'PASTRIES & BISCUITS')        
        this.after_pastries = all.filter(m => m.category === 'AFTER PASTRIES')
        this.biscuits = all.filter(m => m.category === 'BISCUITS')
        this.desserts_down = all.filter(m => m.category === 'DESSERTS AND ICE CREAM')
        this.ice_cream_specials = all.filter(m => m.category === 'ICE CREAM SPECIALS')
        this.hot_drinks = all.filter(m => m.category === 'HOT DRINKS')
        this.cold_drinks_dispensed = all.filter(m => m.category === 'COLD DRINKS - DISPENSED')
        this.cold_drinks_bottled = all.filter(m => m.category === 'COLD DRINKS - BOTTLED')
        this.cold_drinks_cans = all.filter(m => m.category === 'COLD DRINKS - CANS')
        // THE REMAINING ARE THE SAME AS UPSTAIRS FOR NOW
        // this. = all.filter(m => m.category === '')
      },
      getUpMenus() {
        axios.get(this.myhost + 'upstairs-20')
        .then(res => {
          this.up = res.data
          this.catUp()
        })
        .catch(e => console.log(e))
      },
      catUp() {
        const all = this.up
        this.no_cat = all.filter(m => m.category === 'no cat')
        this.main_meals = all.filter(m => m.category === 'MAIN MEALS')
        this.fish = all.filter(m => m.category === 'FISH')
        this.grills = all.filter(m => m.category === 'GRILLS')
        this.entrees = all.filter(m => m.category === 'ENTREES')
        this.salads = all.filter(m => m.category === 'SALADS')
        this.desserts = all.filter(m => m.category === 'DESSERTS & ICE CREAM')    
        this.hot = all.filter(m => m.category === 'HOT')    
        this.ramsgate = all.filter(m => m.category === 'RAMSGATE BREWERY')
        this.whitstable = all.filter(m => m.category === 'WHITSTABLE BREWERY')    
        this.shepherd = all.filter(m => m.category === 'SHEPHERD NEAME BREWERY')
        this.pine = all.filter(m => m.category === 'PINE TREES FARM')
        this.barnsole = all.filter(m => m.category === 'BARNSOLE VINEYARD')
        this.founders = all.filter(m => m.category === 'FOUNDERS STONE')
        this.others = all.filter(m => m.category === 'OTHERS')
      },
      testCall() {
        return 'this is a function from bus.js'
      }
    },
    created() {
      this.getHome()
      this.getUpMenus()
      this.getAllMenus()
    }
  })
}

Vue.use(eventBus)
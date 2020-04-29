import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict:true,
    state:{
        products: [
            {name: 'Banana Skin', price: 20},
            {name: 'Shiny Star', price: 40},
            {name: 'Green Shells', price: 60},
            {name: 'Red Shells', price: 80}
        ]
    },
    getters:{
        saleProducts: (state) => {

          var saleProducts = state.products.map((product) => {
              return {
                  name: "**" + product.name + "**",
                  price: product.price / 2
              }
          })

          return saleProducts
        }
    },
    mutations:{
        reducePrice: (state, payload) => {
            state.products.forEach(item => {
                item.price -= payload
            })
        }
    },
    actions:{
        reducePrice: (context, payload) => {
            // async tasks here...
            setTimeout(function(){
                context.commit('reducePrice', payload)
            }, 2000)
        }
    }
})
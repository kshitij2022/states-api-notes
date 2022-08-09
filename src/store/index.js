// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     datas: [
//       {title: "Shopping at 7", done: true },
//       {title: "Learn Vuex", done: true },
//       {title: "Gaming", done: false },
//       {title: "Football", done: true },
//       {title: "Manifest", done: true },
//       {title: "Music", done: false },
//       {title: "Gym", done: true },
//       {title: "Cycling", done: false },
//     ],
//     count: 0,
//   },
//   mutations:{
//     new_Data(state,newData){
//       state.datas.push({
//         title:newData,
//         done:false,
//       })
//     }
//   },
//   actions:{
//     addNewData({commit},newData){
//       commit('new_Data', newData);
//     }
//   }
// });



import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        datas:[
            {title:"Data A",done:true,},
            {title:"Data B",done:true,},
            {title:"Data C",done:false,},
            {title:"Data D",done:false,},
            {title:"Data E",done:true,},
        ],
    },
    getters:{
        completedData(state){
            return state.datas.filter(data => {
                return data.done === true;
            }).length;
        },
        pendingData(state){
            return state.datas.filter(data=>{
                return data.done === false;
            }).length
        }
    },
    mutations:{
        new_Data(state,newData){
            state.datas.push({
                title:newData,
                done:false,
            })
        },
        DeleteDataItem(state,newData){
            let index = state.datas.indexOf(newData);
            console.log(index);
            state.datas.splice(index,1);
        },
        Toggle_Data_Item(state,newData){
            newData.done = !newData.done;
        }

    },

    actions:{
        addNewData({commit},newData){
            commit('new_Data',newData)
        },
        deleteData({commit},newData){
            commit('DeleteDataItem',newData)
        },
        toggleData({commit},newData){
            commit('Toggle_Data_Item',newData)
        }
    }
})
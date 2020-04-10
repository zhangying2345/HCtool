import Vuex from 'vuex'
import Vue from 'vue'

 Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 右侧显示element info
    showEleInfo: false,
    // 存放拖放的所有元素
    buildings: []
  },
  mutations: {
    showEleInfo(state) {
      console.log(JSON.stringify(state.buildings));
      state.showEleInfo = true;
    },
    hideEleInfo(state) {
      state.showEleInfo = false;
    },
    addBuilding (state, addItem) {
      state.buildings.push(addItem);
    }
  }
})

/**
 * [
    {
      "id":"IVfWYDtWD",
      "name":"Cell",
      "attribute":"LAYOUT",
      "componentName":"TCell",
      "flexList":[
        {
          "widthRatio":1,
          "childrenList":[

          ]
        }
      ]
    },
    {
      "id":"5SFzLgg85",
      "name":"Cell",
      "attribute":"LAYOUT",
      "componentName":"TCell",
      "flexList":[
        {
          "widthRatio":1,
          "childrenList":[
            {
              "id":"hbvE2zdSq",
              "name":"Cell",
              "attribute":"LAYOUT",
              "componentName":"TCell",
              "flexList":[
                  {
                      "widthRatio":1,
                      "childrenList":[

                      ]
                  }
              ]
            }
          ]
        },
        {
          "widthRatio":1,
          "childrenList":[

          ]
        }
      ]
    },
    {
      "id":"Q3YNgugc-",
      "name":"Cell",
      "attribute":"LAYOUT",
      "componentName":"TCell",
      "flexList":[
        {
            "widthRatio":1,
            "childrenList":[

            ]
        },
        {
            "widthRatio":1,
            "childrenList":[

            ]
        },
        {
            "widthRatio":1,
            "childrenList":[

            ]
        }
      ]
    }
]
 */

export default store;
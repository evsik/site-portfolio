import Vue from 'vue'
import Vuex from 'vuex'
import {get} from '../utils/reqs'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dataArr: [],
        dataUrl: 'https://raw.githubusercontent.com/evsik/site-portfolio/master/src/assets/skills.json',
        works: [
            {
                screen: 'https://raw.githubusercontent.com/evsik/static/master/IMG(site-portfolio)/WorkOne.png',
                title: 'Photo portfolio website - Homepage',
                workLink: 'https://github.com/evsik/My_Own_Website'
            },
            {
                screen: 'https://raw.githubusercontent.com/evsik/static/master/IMG(site-portfolio)/workThree.png',
                title: 'Medical landing website - Homepage',
                workLink: 'https://github.com/evsik/Medical_Landing'
            },
            {
                screen: 'https://raw.githubusercontent.com/evsik/static/master/IMG(site-portfolio)/workTwo.png',
                title: 'Top-3D-Group landing - Homepage',
                workLink: 'https://github.com/evsik/TZ_for_Top-3D-Group'
            }
        ]
    },
    mutations: {
        getData(state) {
            get(state.dataUrl)
                .then(data => {
                    state.dataArr = data
                });
        }
    },
    actions: {},
    modules: {}
})

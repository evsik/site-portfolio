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
        ],
        socials: [
            {
                title: 'linkedin',
                class: 'fab fa-linkedin',
                link: 'http://www.linkedin.com/in/evsevsikov'
            },
            {
                title: 'facebook',
                class: 'fab fa-facebook-square',
                link: 'https://www.facebook.com/evsevsikov/'
            },
            {
                title: 'telegram',
                class: 'fab fa-telegram-plane',
                link: 'https://t.me/evsik_s'
            },
            {
                title: 'github',
                class: 'fab fa-github-square',
                link: 'https://github.com/evsik'
            }
        ],
        nav: [
            {
                title: 'Home',
                id: "'#header'"
            },
            {
                title: 'About me',
                id: "'#aboutMe'"
            },
            {
                title: 'Skills',
                id: "'#skills'"
            },
            {
                title: 'Portfolio',
                id: "'#portfolio'"
            },
            {
                title: 'Contacts',
                id: "'#footer'"
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

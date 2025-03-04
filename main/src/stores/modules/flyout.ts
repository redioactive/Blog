import {defineStore} from "pinia";

interface MenuItem {
    class:string;
    iconName?:string;
    color?:string;
    tab?:string;
    label?:string;
    items?:{label:string;link:string}[] | undefined;
}

export const useMenuStore = defineStore('menu',()=> {
    const MenuList = reactive<MenuItem[]>([
        {
            class: 'xy-menus__article',
            iconName: 'icon-article-line',
            color: '2c2c2c',
            label: '文章',
            tab: "article",
            items: [
                {label: '文章1', link: 'javascript:;'},
                {label: '文章2', link: '/'},
                {label: '文章3', link: '/'}
            ]
        },
        {
            class: "xy-menus__assort",
            iconName: 'icon-classify',
            color: '2c2c2c',
            label: '分类',
            tab: 'classification',
            items: [
                {label: '分类1', link: 'javascript:;'},
                {label: '分类2', link: '/'},
                {label: '分类3', link: '/'}
            ]
        },
        {
            class: 'xy-menus__tools',
            iconName: 'icon-tools2',
            color: '2c2c2c',
            label: '工具',
            tab: 'tools',
            items: [
                {label: '工具1', link: 'javascript:;'},
                {label: '工具2', link: '/'},
                {label: '工具3', link: '/'}
            ]
        },
        {
            class: "xy-menus__about",
            label: '关于',
            iconName: 'icon-about_line',
            color: '2c2c2c',
            items: []
        }
    ]);
    const activeFlyoutIndex = ref<number | null>(null);

    const showFlyout = (index:number)=> {
        activeFlyoutIndex.value = index;
    }

    const hideFlyout = () => {
        activeFlyoutIndex.value = null;
    }
    return {MenuList,activeFlyoutIndex,showFlyout,hideFlyout}
})
import {getActiveThemeName,setActiveTheName} from "@/utils/cache/local-storage";

const DEFAULT_THEME_NAME = 'normal';
type DefaultThemeName = typeof DEFAULT_THEME_NAME;

/**注册的主题名称，其中DefaultThemeName 是必填的*/
export type ThemeName = DefaultThemeName | 'dark' | 'dark-blue';

interface ThemeList {
    title:string;
    name:ThemeName;
}

/** 主题列表 */
const themeList:ThemeList[] = [
    {
        title:'默认',
        name: DEFAULT_THEME_NAME
    },
    {
        title:'黑暗',
        name:'dark'
    },
    {
        title:'深蓝',
        name:'dark-blue'
    }
]

/**正在注册的主题名称 */
const activeThemeName = ref<ThemeName>(getActiveThemeName() || DEFAULT_THEME_NAME)

/**设置主题*/
const setTheme = (value:ThemeName) => {
    activeThemeName.value = value;
}

/**在html根元素上挂在class */
const setHtmlRootClassName = (value:ThemeName) => {
    document.documentElement.className = value;
}

/**初始化*/
const initTheme = () => {
    //watchEffect 收集副作用
    watchEffect(() => {
        const value = activeThemeName.value
        setHtmlRootClassName(value)
        setActiveTheName(value)
    })
}

/** 主题hook */
export function useTheme() {
    return {themeList, activeThemeName, initTheme, setTheme}
}
import {type ThemeName} from "@/hooks/useTheme";
import {type LayoutSettings} from "@/config/layouts";
import CacheKey from "@/constants/cache-key";

//#region 系统布局配置
export const getConfigLayout = () => {
    const json = localStorage.getItem(CacheKey.CONFIG_LAYOUT)
    return json ? (JSON.parse(json) as LayoutSettings) : null
}
export const setConfigLayout = (settings:LayoutSettings) => {
    localStorage.setItem(CacheKey.CONFIG_LAYOUT, JSON.stringify(settings))
}
// #region 正在应用的主题名称
export const getActiveThemeName = () => {
    return localStorage.getItem(CacheKey.ACTIVE_THEME_NAME) as ThemeName | null;
}

export const setActiveTheName = (themeName:ThemeName) => {
    localStorage.setItem(CacheKey.ACTIVE_THEME_NAME, themeName)
}
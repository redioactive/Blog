import {getConfigLayout} from '@/utils/cache/local-storage'
import {LayoutModeEnum} from "@/constants/app-kay";

export interface LayoutSettings {
    /**布局模式*/
    layoutMode:LayoutModeEnum,
    /**是否显示切换主题按钮*/
    showThemeSwitch:boolean
}

/**默认配置*/
const defaultSettings:LayoutSettings = {
    layoutMode:LayoutModeEnum.Left,
    showThemeSwitch:true
}

/**项目配置*/
export const layoutSettings: LayoutSettings = {...defaultSettings,...getConfigLayout()}
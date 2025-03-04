import {type Ref} from 'vue'
import {defineStore} from 'pinia';
import {type LayoutSettings, layoutSettings} from "@/config/layouts";
import {setConfigLayout} from "@/utils/cache/local-storage";

type SettingsStore = {
    // 使用映射类型来遍历 layoutSettings 对象的键
    [Key in keyof LayoutSettings]: Ref<LayoutSettings[Key]>
}
type SettingStoreKey = keyof SettingsStore;

export const useSettingStore = defineStore("settings",()=> {
    /**状态对象*/
    const state = {} as SettingsStore
    //遍历 layoutSettings 对象的键值对
    for(const [key,value] of Object.entries(layoutSettings)) {
        //使用类型断言来指定 key 的类型，将value包装在ref函数中，创建一个响应式变量
        const refValue = ref(value)
        //@ts-ignore
        state[key as SettingStoreKey] = refValue
        //监视每个响应式变量
        watch(refValue, () => {
            //缓存
            const settings = _getCacheData()
            setConfigLayout(settings)
        })
    }
    /**获取要缓存的数据: 将 state 对象转化为 settings 对象*/
    const _getCacheData = () => {
        const settings = {} as LayoutSettings
        for (const [key,value] of Object.entries(state)) {
            //@ts-ignore
            settings[key as SettingStoreKey] = value.value
        }
        return settings
    }
    return state
})
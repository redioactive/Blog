const SYSTEM_NAME = 'xy-Blog';

class CacheKey {
    static readonly ACTIVE_THEME_NAME = `${SYSTEM_NAME}-active-theme-name-key`;
    static readonly CONFIG_LAYOUT = `${SYSTEM_NAME}-config-layout-key`
}

export default CacheKey;
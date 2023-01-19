import Vue from 'vue'

import BasePostsListTitle from "@/shared/ui/BasePostsListTitle.vue"
import BaseButton from '@/shared/ui/BaseButton.vue'
import BaseLogo from '@/shared/ui/BaseLogo.vue'
import BaseTextField from '@/shared/ui/BaseTextField.vue'
import BaseSearch from '@/shared/ui/BaseSearch.vue'
import BaseSelect from '@/shared/ui/BaseSelect.vue'
import BaseAvatar from '@/shared/ui/BaseAvatar.vue'

const uikit = [
    BasePostsListTitle,
    BaseButton,
    BaseLogo,
    BaseTextField,
    BaseSearch,
    BaseSelect,
    BaseAvatar
]

const useUiKit = () => {
    uikit.forEach(component => {
        Vue.component(component.name, component)
    })

}

export default useUiKit


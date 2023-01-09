import Vue from 'vue'

import BasePostsListTitle from "@/shared/UIKit/BasePostsListTitle.vue"
import BaseButton from '@/shared/UIKit/BaseButton.vue'
import BaseLogo from '@/shared/UIKit/BaseLogo.vue'
import BaseTextField from '@/shared/UIKit/BaseTextField.vue'

const uikit = [
    BasePostsListTitle,
    BaseButton,
    BaseLogo,
    BaseTextField
]

const useUiKit = () => {
    uikit.forEach(component => {
        Vue.component(component.name, component)
    })

}

export default useUiKit


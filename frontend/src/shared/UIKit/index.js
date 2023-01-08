import Vue from 'vue'

import BasePostsListTitle from "@/shared/UIKit/BasePostsListTitle.vue"
import BaseButton from '@/shared/UIKit/BaseButton.vue'

const uikit = [
    BasePostsListTitle,
    BaseButton
]

const useUiKit = () => {
    uikit.forEach(component => {
        Vue.component(component.name, component)
    })

}

export default useUiKit


<template>
  <header class="header">
    <div class="container">
      <div class="header__box header-box">
        <BaseLogo />

        <div class="header-box__right">
          <TheHeaderUserInfoPanel />

          <AuthButtonsGroup />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import { getterTypes } from '@/store/modules/auth/auth.module.types'

import AuthButtonsGroup from '@/components/AuthButtonsGroup.vue'
import TheHeaderUserInfoPanel from './TheHeaderUserInfoPanel.vue'

export default {
  name: 'TheHeader',

  components: {
    AuthButtonsGroup,
    TheHeaderUserInfoPanel,
  },

  computed: {
    ...mapGetters({
      isAuth: getterTypes.isAuth,
    }),
  },
}
</script>

<style lang="scss" scoped>
.header {
  background-color: rgb(2 28 71);
  padding: 15px;
  position: sticky;
  top: 0;

  &__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.navigation-list {
  display: flex;
  gap: 20px;
}
.navigation-list__link {
  font-family: sans-serif;
  font-size: 1.3rem;
  color: #fff;
}
</style>

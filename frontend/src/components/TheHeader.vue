<template>
  <header class="header">
    <div class="container">
      <div class="header__box header-box">
        <TheLogo />
        <!-- 
        <nav
          v-if="isAuth"
          class="navigation"
        >
          <ul class="navigation__list navigation-list">
            <li class="navigation-list__item">
              <router-link
                class="navigation-list__link"
                :to="{ name: 'postsView' }"
                >Posts
              </router-link>
            </li>
          </ul>
        </nav> -->
        <div class="header-box__right">
          <TheHeaderUserInfoPanel />

          <AuthButtonsGroup />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import TheLogo from '@/components/TheLogo.vue'
import AuthButtonsGroup from '@/components/AuthButtonsGroup.vue'
import TheHeaderUserInfoPanel from './TheHeaderUserInfoPanel.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TheHeader',

  components: {
    TheLogo,
    AuthButtonsGroup,
    TheHeaderUserInfoPanel,
  },

  computed: {
    ...mapGetters({
      isAuth: 'isAuth',
      user: 'user',
    }),

    fullAvatarUrl() {
      const baseUrl = 'http://localhost:1337'
      if (this.user?.avatar?.url) return `${baseUrl}${this.user?.avatar?.url}`

      return false
    },
  },

  methods: {
    ...mapActions(['logout']),

    onLogout() {
      this.logout()

      this.$router.push({ name: 'loginView' })
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  background-color: rgb(2 28 71 / 64%);
  padding: 15px;

  &__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.header-box {
  &__right {
    display: flex;
    align-items: center;
    gap: 30px;
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

.container {
  max-width: 1480px;
  margin: 0 auto;
}
</style>

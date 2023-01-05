<template>
  <header class="header">
    <div class="container">
      <div class="header__box">
        <TheLogo />

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
        </nav>

        <AuthButtonsGroup />
      </div>
    </div>
  </header>
</template>

<script>
import TheLogo from '@/components/TheLogo.vue'
import AuthButtonsGroup from '@/components/AuthButtonsGroup.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TheHeader',

  components: {
    TheLogo,
    AuthButtonsGroup,
  },

  computed: {
    ...mapGetters({
      isAuth: 'isAuth',
    }),
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
  box-shadow: 0px 6px 2px 0px rgba(34, 60, 80, 0.2);

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

.container {
  max-width: 1480px;
  margin: 0 auto;
}
</style>

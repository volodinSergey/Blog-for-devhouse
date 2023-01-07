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
          <router-link
            v-if="isAuth"
            :to="{ name: 'userView', params: { id: user.id } }"
            class="user-info"
          >
            <img
              v-if="fullAvatarUrl"
              class="user-info__avatar"
              :src="fullAvatarUrl"
              alt="user avatar"
            />
            <img
              v-else
              class="user-info__avatar"
              src="@/assets/no-avatar.jpg"
              alt="user avatar"
            />

            <span class="user-info__name">{{ user.username }}</span>
          </router-link>

          <AuthButtonsGroup />
        </div>
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

.user-info {
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;

  &__avatar {
    width: 40px;
    aspect-ratio: 1;
    border-radius: 50%;
  }
}

.container {
  max-width: 1480px;
  margin: 0 auto;
}
</style>

<template>
  <header class="header">
    <TheLogo />

    <nav class="navigation">
      <ul class="navigation__list navigation-list">
        <li class="navigation-list__item">
          <router-link
            class="navigation-list__link"
            :to="{}"
            >Posts
          </router-link>
        </li>
        <li class="navigation-list__item">
          <router-link
            class="navigation-list__link"
            :to="{}"
            >Settings
          </router-link>
        </li>
        <li class="navigation-list__item">
          <router-link
            class="navigation-list__link"
            :to="{}"
            >Add post
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import TheLogo from './TheLogo.vue'

export default {
  name: 'TheHeader',

  components: {
    TheLogo,
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  background-color: rgb(2 28 71 / 64%);
  padding: 15px;
  box-shadow: 0px 6px 2px 0px rgba(34, 60, 80, 0.2);
}

.navigation-list {
  display: flex;
  gap: 20px;
}
.navigation-list__link {
  color: #fff;
}
</style>

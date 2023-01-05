<template>
  <li class="post-item">
    <div class="post-item__left">
      <div class="post-item__author-info author-info">
        <img
          class="author-info__avatar"
          src="@/assets/Куплинов.webp"
          alt="author avatar"
        />
        <span class="author-info-name">Дмитрий Куплинов</span>
      </div>

      <h2 class="post-item__title">Мой первый пост за этот год</h2>

      <p class="post-item__body">
        Меня зовут Дмитрий, я собираюсь разъебать ютуб в этом году , для этого мне нужно много подписоты, ставь лике,
        субскрибе и типо это самое типо
      </p>
    </div>

    <div class="post-item__right">
      <img
        class="post-item__image"
        src="@/assets/Куплинов.webp"
        alt="post image"
      />
    </div>
  </li>
</template>

<script>
export default {
  name: 'PostsListItem',
}
</script>

<style lang="scss" scoped>
.post-item {
  padding: 15px;
  border: 1px solid #23243e;
  background-color: #16182d;
  border-radius: 0.9rem;

  &__title {
    margin-bottom: 25px;
  }

  &__body {
    color: #c5c5c5;
    margin-bottom: 20px;
  }

  &__image {
    width: 100%;
  }
}

.author-info {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 30px;

  &__avatar {
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
  }
}
</style>

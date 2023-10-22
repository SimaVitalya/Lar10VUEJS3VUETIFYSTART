<template>
	<header class="header">
		<ul class="header__menu nav nav-pills">

      <li class="nav-item">
        <router-link
            class="nav-link"
            to="/"
        >Comment
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
            class="nav-link"
            to="/login"
        >Login
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
            class="nav-link"
            to="/registration"
        >Registration
        </router-link>
      </li>

		</ul>
	</header>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		components: {},
		setup() {
			return {};
		},
	});
</script>

<style lang="less" scoped>
	.header {
		width: 992px;
		margin: 0 auto;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>

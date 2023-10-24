<!--
* @description  参数1
* @fileName  Login
* @author userName
* @date 2023-10-17 09:41:07
* @version V3.0.0
!-->
<template>
  <div id="Login" class="Login h-full bg-blue-200 overflow-hidden">
    <div class="main w-3/4 h-full bg-white relative overflow-scroll">
      <img src="" alt="" class="logo w-40 h-10 bg-red-300" />
      <div class="form-box">
        <div class="title flex items-center gap-3 relative mb-16">
          <span class="text-2xl font-bold">欢迎使用</span>
          <img src="" alt="KRPA" class="app-icon" />
          <img src="" alt="👏" />
          <span class="text-base font-light text-gray-300 absolute top-8"
            >v2.0.1.22.10.15</span
          >
        </div>
        <div class="form-itme">
          <label for="name">请输入用户名/手机号/邮箱</label>
          <input type="text" id="userName" />
        </div>
        <div class="form-itme">
          <label for="password">请输入密码</label>
          <input type="password" id="userPassword" />
        </div>
        <div class="form-itme">
          <label for="verifyCode">请输验证码</label>
          <input type="text" id="verifyCode" />
        </div>
        <div class="form-itme">
          <input type="checkbox" id="LoginStatus" placeholder="" />
          <label for="LoginStatus">15 天内保持登录</label>
        </div>
        <div class="button">登录</div>
        <div class="floor flex justify-between text-base">
          <div class="floor-item">简体中文</div>
          <div class="floor-item flex gap-3">
            <span>官网</span>
            <span> | </span>
            <span>论坛</span>
            <span> | </span>
            <span>联系我们</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
</script>
<style scoped>
.main {
  @apply w-3/4 h-full bg-white  flex justify-center relative;
}
.logo {
  position: fixed;
  top: 2.5rem;
  left: 2.5rem;
}
.app-icon {
  width: 6.75rem;
  height: 2.5rem;
}
.form-box {
  @apply shadow-md rounded-2xl;
  width: 36.25rem;
  height: fit-content;
  padding: 4rem 2rem 2rem 2rem;
  position: static;
  top: auto;
  left: auto;
  transform: none;
  margin-top: 15vh;
}
.form-itme {
  @apply mb-12 relative;
}
.form-itme:nth-last-child(1) {
  @apply mb-16;
}
.form-itme > label {
  @apply text-sm font-light text-gray-300;
  position: absolute;
  top: 50%;
  left: 0.75rem;
  transform: translateY(-50%);
}
.form-itme > input {
  @apply text-base text-normal border-b border-gray-200;
  padding: 0 0.75rem;
}
/* 输入框聚焦时 */
.form-itme > input:focus {
  @apply outline-none;
}
/* 判断 form-item 下的 input 类型 */
.form-itme > input[type="text"],
.form-itme > input[type="password"] {
  @apply bg-red-50 w-full;
  height: 3.25rem;
}
.form-itme > input[type="checkbox"] + label {
  @apply text-base text-normal;
}
.button {
  @apply w-full h-12 bg-blue-500 rounded-md text-white text-base font-bold flex justify-center items-center mb-16;
}
/* 媒体查询 1440px 到 1920px 之间 */
@media screen and (min-width: 1440px) and (max-width: 1920px) {
  .form-box {
    position: static;
    top: auto;
    left: auto;
    transform: none;
    margin-top: 15vh;
  }
}
/* 媒体查询 1024px 到 1440px 之间 */
@media screen and (min-width: 1024px) and (max-width: 1440px) {
  .main {
    width: 100vw;
  }
  .logo {
    top: 1.5rem;
    left: 1.5rem;
  }
  .form-box {
    margin-top: 5vh;
    position: static;
    top: auto;
    left: auto;
    transform: none;
  }
  .form-itme {
    @apply mb-10 relative;
  }
  .form-itme:nth-last-child(1) {
    @apply mb-14;
  }
}
/* 媒体查询 768px 到 1024px 之间 */
@media (max-width: 1023px) {
  .main {
    width: 100vw;
  }
  .logo {
    top: 1.5rem;
    left: 1.5rem;
  }
  .form-box {
    background: transparent;
    box-shadow: none;
  }
}
</style>
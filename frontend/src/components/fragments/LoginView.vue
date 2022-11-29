<template>
  <div id="viewport" class="login">
    <div class="login_wrap">
      <div class="login_box">
        <div>
          <p class="login_logo">
            <img src="@/assets/images/logo.png"/>
          </p>
          <div class="input_wrap">
            <div class="input_box id">
              <input
                  v-model="userId"
                  type="text"
                  @keyup.enter="doLogin"
              />
            </div>
          </div>
          <div class="input_wrap">
            <div class="input_box pw">
              <input
                  v-model="userPw"
                  type="password"
                  @keyup.enter="doLogin"
              />
            </div>
          </div>
          <div class="id_save">
            <input type="checkbox"/>
            <span>
              <label>
                아이디 저장
              </label>
            </span>
          </div>
          <div>
            <button @click="doLogin" class="btn_login">LOGIN</button>
          </div>
          <div class="join-fw">
            <a href="#" class="btn_pw">비밀번호 재설정</a>
            <a class="btn_1">|</a>
            <a href="#" class="btn_join">회원가입</a>
          </div>
        </div>
      </div>
      <p class="copyright">COPYRIGHT Chanbeom Kim ALL RIGHT RESERVED.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      userId: '',
      userPw: '',
    }
  },
  methods: {
    doLogin() {
      let info = {
        userId: this.userId,
        userPw: this.userPw
      };
      this.$store.dispatch('user/doLogin', info).then(() => {
        this.$router.push("/about");
      }).catch(() => {
        console.log('failed');
      });
    },

  }
};
</script>

<style>
  .login {
    /* 출처 https://kr.freepik.com/free-photo/rpa_23992698.htm#query=it&position=1&from_view=keyword [Freepik] */
    background: url("@/assets/images/login_bg.jpg") center no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    display: table;
    position: absolute;
    top: 0;
    bottom: 0;
    text-align: center;
    vertical-align: middle;
  }
  .login_wrap {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    padding: 50px 0;
  }
  .login_box {
    text-align: center;
    background: #fff;
    width: 470px;
    height: 500px;
    padding: 50px 0;
    margin: 0 auto;
    box-shadow: 0 10px 30px rgb(0 0 0 / 60%);
  }
  .login_logo {
    margin: 5px auto;
  }
  .input_wrap {
    border-bottom: 1px solid #d5d5d5;
    width: 50%;
    padding: 0 5%;
    margin: 0 auto;
  }
  .input_box {
    padding: 20px 0 20px 30px;
  }
  .input_box input {
    border: 0;
    width: 100%;
    font-size: 20px;
    line-height: 20px;
    color: #999;
  }
  .input_box.id {
    background: url("@/assets/images/login_icon_01.png") left center no-repeat;
  }
  .input_box.pw {
    background: url("@/assets/images/login_icon_02.png") left center no-repeat;
  }
  .id_save {
    width: 60%;
    margin: 10px auto;
    text-align: left;
    position: relative;
  }
  .id_save input {
    vertical-align: middle;
  }
  .id_save span {
    vertical-align: middle;
    font-size: 12px;
    font-weight: bold;
    margin-left: 5px;
  }
  .btn_login {
    width: 286px;
    height: 48px;
    color: #ffffff;
    background: #004b8d;
    border-radius: 5px;
    display: block;
    margin: 30px auto 0;
    line-height: 48px;
    font-weight: 700;
    font-size: 16px;
  }
  .join-fw {
    width: 70%;
    margin: 0 auto;
    padding: 15px;
    text-align: center;
    position: relative;
  }
  .btn_pw {
    padding: 5px;
    font-size: 14px;
    font-weight: bold;
    color: #004b8d;
  }
  .btn_1 {
    padding: 5px;
  }
  .btn_join {
    padding: 5px;
    font-size: 14px;
    font-weight: bold;
    color: #004b8d;
  }
  .copyright {
    text-align: center;
    line-height: 42px;
    font-size: 1.2em;
    color: #fefefe;
    font-weight: 500;
    opacity: 0.5;
    margin-top: 20px;
  }
</style>
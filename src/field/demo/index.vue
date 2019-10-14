<template>
  <div>
    <section>
      <p class="mobile-demo-title">基础用法</p>
      <Field placeholder="请输入用户名" v-model="username1" maxlength="20" label="用户名"></Field>
    </section>

    <section>
      <p class="mobile-demo-title">自定义类型</p>
      <Field placeholder="请输入用户名" v-model="username2" maxlength="20" label="用户名"></Field>
      <Field placeholder="请输入密码" v-model="password" maxlength="20" type="password" label="密码"></Field>
    </section>

    <section>
      <p class="mobile-demo-title">禁用输入框</p>
      <Field placeholder="请输入姓名" disabled label="姓名">
        <span slot="label" class="label-slot">姓名</span>
      </Field>
    </section>
 
    <section>
      <p class="mobile-demo-title">自定义输入框尾部图标</p>
      <Field placeholder="请输入用户名" v-model="username3" label="用户名">
        <i class="slot-icon"></i>
      </Field>
    </section>

    <section>
      <p class="mobile-demo-title">验证输入合法性</p>
      <Field placeholder="请输入中文名" v-model="name.value" type="name" :valid.sync="name.valid" label="中文名">
        <span class="slot-icon" @click="save1">保存</span>
      </Field>
      <Field placeholder="请输入手机号" v-model="tel.value" type="tel" :valid.sync="tel.valid" label="手机号">
        <span class="slot-icon" @click="save2">保存</span>
      </Field>
      <Field placeholder="请输入邮箱" v-model="email.value" type="email" :valid.sync="email.valid" label="邮箱">
        <span class="slot-icon" @click="save3">保存</span>
      </Field>
    </section>

    <section>
      <p class="mobile-demo-title">自定义输入框标签</p>
      <Field placeholder="请输入姓名" v-model="username3" label="姓名">
        <span slot="input">自定义输入框标签</span>
      </Field>
    </section>

  </div>
</template>
<script>
import Field from '../index.js'
export default {
  components: {Field},
  data () {
    return {
      username1: '',
      username2: '',
      username3: '',
      password: '',
      name: {
        value: '',
        valid: false
      },
      tel: {
        value: '',
        valid: false
      },
      email: {
        value: '',
        valid: false
      }
    };
  },
  watch: {
    username() {
      console.log('valid', this.valid, 'username', this.username1);
    }
  },
  methods: {
    save1() {
      if (!this.name.valid) {
        this.$toast('请输入有效的中文名');
      } else {
        this.$toast('成功');
      }
    },
    save2() {
      if (!this.tel.valid) {
        this.$toast('请输入有效的手机号');
      }
    },
    save3() {
      if (!this.email.valid) {
        this.$toast('请输入有效的邮箱');
      }
    }
  }
}
</script>
<style lang="less" scoped>
.mobile-demo-title {
  text-indent: 10px;
}
.label-slot {
  width: 78px;
  text-indent: 30px;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 26px;
    height: 26px;
    background: url(~assets/img/test-p1.png) no-repeat;
    background-size: contain;
  }
}
i.slot-icon {
  padding-left: 30px;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 14px;
    background: url(~assets/img/right_arrow.png) no-repeat;
    background-size: contain;
  }
}
span.slot-icon {
  display: flex;
  width: 30px;
  padding: 2px 8px;
  border-radius: 2px;
  background: green;
  color: #fff;
}
</style>
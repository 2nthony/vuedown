# {{ title }}

<Msg/>

<Button/>

<script>
const Button = () => import('./components/Button.vue')
const Msg = () => import('./Msg.md')

export default {
  components: {
    Button,
    Msg
  },
  data() {
    return {
      title: '📝Hello vuedown!'
    }
  }
}
</script>

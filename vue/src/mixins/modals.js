import { mapMutations } from "vuex";
import ResultGameModal from "@/components/modals/ResultGameModal.vue";
import StartGameModal from "@/components/modals/StartGameModal.vue";

export const gameModals = {

  methods: {
    ...mapMutations('modals', [
      'openModal'
    ]),

    openStartGameModal (params = {}) {
      this.openModal({
        component: StartGameModal,
        params
      })
    },

    openResultGameModal (params = {}) {
      this.openModal({
        component: ResultGameModal,
        params
      })
    }
  }
}

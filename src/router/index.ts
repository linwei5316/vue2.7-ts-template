import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/index.vue';
import Error from '@/views/Error.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Index,
      children: [
        // TODO add root component here
        // {
        //   path: "",
        //   component: ,
        // },
        {
          path: "error",
          component: Error,
        },
        {
          path: "*",
          redirect: "/error",
        }
      ]
    },
  ],
})


export default router;

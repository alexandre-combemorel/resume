import Vue from 'vue';
import Router from 'vue-router';
import Resume from '@/components/Resume';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Resume,
      props: { page: 'skills' },
    },
    {
      path: '/presentation',
      component: Resume,
      props: { page: 'presentation' },
    },
    {
      path: '/employmenthistory',
      component: Resume,
      props: { page: 'employmenthistory' },
    },
    {
      path: '/qualifications',
      component: Resume,
      props: { page: 'qualifications' },
    },
  ],
});

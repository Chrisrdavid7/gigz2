const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/press',
    component: () => import('layouts/PressLayout.vue'),   // ⬅ layout
    children: [{ path: '', component: () => import('pages/PressPage.vue') }]
  },
  // Adding the Artists Page
  {
    path: '/artists',
    component: () => import('layouts/ArtistsLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ArtistsPage.vue') }
    ]
  },

  {
    path: '/signup',
    component: () => import('layouts/SignUpLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SignUpPage.vue') }
    ]
  },
  {
    path: '/whoareyou',
    component: () => import('layouts/WhoAreYouLayout.vue'),
    children: [
      { path: '', component: () => import('pages/WhoAreYouPage.vue') }
    ]
  },
  {
    path: '/events',
    component: () => import('layouts/EventsLayout.vue'),
    children: [
      { path: '', component: () => import('pages/EventsPage.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes;

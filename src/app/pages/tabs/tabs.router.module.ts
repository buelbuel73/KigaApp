import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'anfragen',
        children: [
          {
            path: '',
            loadChildren: '../anfragen/anfragen.module#AnfragenPageModule'
          }
        ]
      },
      {
        path: 'anfrage-details-a',
        children: [
          {
            path: '',
            loadChildren: '../anfragen/anfrage-details-a/anfrage-details-a.module#AnfrageDetailsAPageModule'
          }
        ]
      },
      {
        path: 'anfrage-details-a/:id',
        children: [
          {
            path: '',
            loadChildren: '../anfragen/anfrage-details-a/anfrage-details-a.module#AnfrageDetailsAPageModule'
          }
        ]
      },
      {
        path: 'anfrage-details-b',
        children: [
          {
            path: '',
            loadChildren: '../anfragen/anfrage-details-b/anfrage-details-b.module#AnfrageDetailsBPageModule'
          }
        ]
      },
      {
        path: 'anfrage-details-b/:id',
        children: [
          {
            path: '',
            loadChildren: '../anfragen/anfrage-details-b/anfrage-details-b.module#AnfrageDetailsBPageModule'
          }
        ]
      },
      {
        path: 'medkit',
        children: [
          {
            path: '',
            loadChildren: '../medkit/medkit.module#MedkitPageModule'
          }
        ]
      },
      {
        path: 'calendar',
        children: [
          {
            path: '',
            loadChildren: '../calendar/calendar.module#CalendarPageModule'
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: '../about/about.module#AboutPageModule'
          }
        ]
      },
      {
        path: 'einrichtung',
        children: [
          {
            path: '',
            loadChildren: '../about/einrichtung/einrichtung.module#EinrichtungPageModule'
          }
        ]
      },
      {
        path: 'preise',
        children: [
          {
            path: '',
            loadChildren: '../about/preise/preise.module#PreisePageModule'
          }
        ]
      },
      {
        path: 'preise-details',
        children: [
          {
            path: '',
            loadChildren: '../about/preise/preise-details/preise-details.module#PreiseDetailsPageModule'
          }
        ]
      },
      {
        path: 'preise-details/:id',
        children: [
          {
            path: '',
            loadChildren: '../about/preise/preise-details/preise-details.module#PreiseDetailsPageModule'
          }
        ]
      },
      {
        path: 'team',
        children: [
          {
            path: '',
            loadChildren: '../about/team/team.module#TeamPageModule'
          }
        ]
      },
      {
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: '../news/news.module#NewsPageModule'
          }
        ]
      },
      {
        path: 'news-details',
        children: [
          {
            path: '',
            loadChildren: '../news/news-details/news-details.module#NewsDetailsPageModule'
          }
        ]
      },
      {
        path: 'news-details/:id',
        children: [
          {
            path: '',
            loadChildren: '../news/news-details/news-details.module#NewsDetailsPageModule'
          }
        ]
      },
      {
        path: 'service',
        children: [
          {
            path: '',
            loadChildren: '../service/service.module#ServicePageModule'
          }
        ]
      },
      {
        path: 'speiseplan',
        children: [
          {
            path: '',
            loadChildren: '../service/speiseplan/speiseplan.module#SpeiseplanPageModule'
          }
        ]
      },
      {
        path: 'angebote',
        children: [
          {
            path: '',
            loadChildren: '../service/angebote/angebote.module#AngebotePageModule'
          }
        ]
      },
      {
        path: 'angebote-details',
        children: [
          {
            path: '',
            loadChildren: '../service/angebote/angebote-details/angebote-details.module#AngeboteDetailsPageModule'
          }
        ]
      },
      {
        path: 'angebote-details/:id',
        children: [
          {
            path: '',
            loadChildren: '../service/angebote/angebote-details/angebote-details.module#AngeboteDetailsPageModule'
          }
        ]
      },
      {
        path: 'faqs',
        children: [
          {
            path: '',
            loadChildren: '../service/faqs/faqs.module#FaqsPageModule'
          }
        ]
      },
      {
        path: 'faqs-details',
        children: [
          {
            path: '',
            loadChildren: '../service/faqs/faqs-details/faqs-details.module#FaqsDetailsPageModule'
          }
        ]
      },
      {
        path: 'faqs-details/:id',
        children: [
          {
            path: '',
            loadChildren: '../service/faqs/faqs-details/faqs-details.module#FaqsDetailsPageModule'
          }
        ]
      },
      {
        path: 'tipps',
        children: [
          {
            path: '',
            loadChildren: '../service/tipps/tipps.module#TippsPageModule'
          }
        ]
      },
      {
        path: 'tipps-details',
        children: [
          {
            path: '',
            loadChildren: '../service/tipps/tipps-details/tipps-details.module#TippsDetailsPageModule'
          }
        ]
      },
      {
        path: 'tipps-details/:id',
        children: [
          {
            path: '',
            loadChildren: '../service/tipps/tipps-details/tipps-details.module#TippsDetailsPageModule'
          }
        ]
      },
      {
        path: 'feedback',
        children: [
          {
            path: '',
            loadChildren: '../service/feedback/feedback.module#FeedbackPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

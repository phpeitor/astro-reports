export type BiPlatform = 'powerbi' | 'tableau' | 'superset' | 'qlik' | 'grafana' | 'looker' | 'other';
export type EmbedStrategy = 'iframe-public' | 'external-link' | 'official-sdk' | 'secure-token';
export type AppRole = 'admin' | 'operaciones' | 'finanzas' | 'comercial';

export interface ReportItem {
  id: string;
  name: string;
  module: string;
  url: string;
  platform: BiPlatform;
  strategy: EmbedStrategy;
  status: 0 | 1;
}

export interface UserItem {
  user: string;
  role: AppRole;
  displayName?: string;
}

export const initialReports: ReportItem[] = [
  {
    id: 'fabric-sales-overview',
    name: 'BI Internacionalización',
    module: 'Comercial',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiMGRmN2E4NTQtMjFkMi00MjU4LTg2YWItMWQwNDI0NmMxMGU1IiwidCI6IjNmZTM0NDVkLWZjNTQtNDU5Ny05NTMxLTRkNjBjMzYyNTU0YyJ9',
    platform: 'powerbi',
    strategy: 'iframe-public',
    status: 1
  },
  {
    id: 'tableau-regional-demand',
    name: 'Superstore Overview',
    module: 'Operaciones',
    url: 'https://public.tableau.com/views/Superstore_embedded_800x800/Overview?:showVizHome=no',
    platform: 'tableau',
    strategy: 'iframe-public',
    status: 1
  },
  {
    id: 'finance-cashflow-overview',
    name: 'Marketing Performance',
    module: 'Finanzas',
    url: 'https://lookerstudio.google.com/embed/reporting/58076e40-5983-4b44-9ef7-045bd54e563b/page/VAzeB',
    platform: 'looker',
    strategy: 'iframe-public',
    status: 1
  },
  {
    id: 'superset-mexico-steel-trade',
    name: 'Comercio de Acero',
    module: 'Operaciones',
    url: 'https://mocamx.economia.gob.mx/superset/dashboard/acero/',
    platform: 'superset',
    strategy: 'external-link',
    status: 1
  },
  {
    id: 'qlik-hospital-readmissions',
    name: 'Hospital Readmissions',
    module: 'Finanzas',
    url: 'https://explore.qlik.com/details/hospital-readmissions',
    platform: 'qlik',
    strategy: 'external-link',
    status: 1
  },
  {
    id: 'grafana-run-results',
    name: '5K Run Results',
    module: 'Operaciones',
    url: 'https://play.grafana.org/d/sixn5pn/analyzing-5k-run-results',
    platform: 'grafana',
    strategy: 'external-link',
    status: 1
  }
];

export const users: UserItem[] = [
  {
    user: 'php.io',
    role: 'admin',
    displayName: 'Administrador'
  },
  {
    user: 'operaciones',
    role: 'operaciones',
    displayName: 'Usuario Operaciones'
  },
  {
    user: 'finanzas',
    role: 'finanzas',
    displayName: 'Usuario Finanzas'
  },
  {
    user: 'comercial',
    role: 'comercial',
    displayName: 'Usuario Comercial'
  }
];

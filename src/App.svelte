<script>
  import Router from 'svelte-spa-router';
  import Sidebar from './components/Sidebar.svelte';

  import Dashboard from './routes/Dashboard.svelte';
  import NotFound from './routes/NotFound.svelte';
  import Projects from "./routes/Projects.svelte";
  import Day from "./routes/Day.svelte";
  import IDE from "./routes/IDE.svelte";
  import OS from "./routes/OS.svelte";
  import Year from "./routes/Year.svelte";
  import Settings from "./routes/Settings.svelte";
  import Week from "./routes/Week.svelte";

  const routes = {
    '/': Dashboard,
    '/dashboard': Dashboard,
    '/projects': Projects,
    '/day': Day,
    '/week': Week,
    '/ide': IDE,
    '/os': OS,
    '/year': Year,
    '/settings': Settings,

    '*': NotFound,
  };
</script>

<div class="layout">
  <Sidebar/>

  <main class="main">
    <Router {routes}/>
  </main>
</div>


<style>
  .layout {
    display: flex;
  }

  .main {
    flex: 1;
    padding: 2rem;
    height: 100vh;
    overflow-y: auto;
  }
</style>
<script>
  import Router from 'svelte-spa-router';
  import Sidebar from './components/Sidebar.svelte';

  import Dashboard from './routes/Dashboard.svelte';
  import NotFound from './routes/NotFound.svelte';
  import Projects from "./routes/Projects.svelte";

  const routes = {
    '/': Dashboard,
    '/dashboard': Dashboard,
    '/projects': Projects,

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
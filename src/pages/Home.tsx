import Layout from "@/layout/Layout.tsx";
import Business from "@/components/Home/PageSection/Business.tsx";
import Enter from "@/components/Home/PageSection/Enter.tsx";
import Analizar from "@/components/Home/PageSection/Analizar.tsx";
import Innovar from "@/components/Home/PageSection/Innovar.tsx";
import Desarrollar from "@/components/Home/PageSection/Desarrollar.tsx";

const Home = () => <Layout className={'snap-y snap-proximity'}>
  <Enter/>
  <Business/>
  <Analizar/>
  <Innovar/>
  <Desarrollar/>
</Layout>

export default Home
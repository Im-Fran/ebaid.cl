import PageSection from "@/components/Home/PageSection.tsx";
import Review from "@/components/Home/PageSection/Analizar/Review.tsx";

const Analizar = () => <PageSection id={"analizar"}>
  <div className="flex flex-col" id="business">
    <h2 className="text-3xl lg:text-4xl tracking-tight font-bold sm:text-xl md:text-2xl mt-16 md:mr-5 block xl:inline text-center">
      Analizar:
    </h2>
    <div className="flex flex-col items-center justify-center mt-3 w-full">
      <Review
        image={"https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"}
        title={"Title"}
        description={"Description"}
        author={"Author"}
        authorImage={"https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"}
        authorTitle={"Author Title"}
      />
    </div>
  </div>
</PageSection>

export default Analizar;
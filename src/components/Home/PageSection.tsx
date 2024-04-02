export type PageSectionProps = {
  id: string,
  children: React.ReactNode
}

const PageSection = (props: PageSectionProps) => <section id={props.id} className={"snap-always snap-start pt-10 md:pt-0 h-screen w-full"}>
  {props.children}
</section>

export default PageSection;
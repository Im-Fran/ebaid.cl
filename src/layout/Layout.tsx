export type LayoutProps = {
  children: React.ReactNode;
  className?: string;
}

const Layout = (props: LayoutProps) => <div className={`${props.className || ''}`}>
  {props.children}
</div>

export default Layout
type Props =  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Container = (props: Props) =>
  <div className='container' {...props}></div>;

export default Container;
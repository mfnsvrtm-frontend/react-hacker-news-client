type Props =  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Container = (props: Props) =>
  <div {...props} className={`container ${props.className ?? ''}`} ></div>;

export default Container;
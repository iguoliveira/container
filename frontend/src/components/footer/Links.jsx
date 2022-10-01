import Github from '/github-darkmode-logo.png'

export const Links = (props) => {
  return (
    <a href={props.href} target={'_blank'} className="cursor-pointer uppercase">
        <img src={Github} className="h-7" />
    </a>
  );
};

interface StoryUrlProps {
  url: string;
};

const StoryUrl = ({ url }: StoryUrlProps): React.ReactNode => {
  return (
    <span className='story-url'>at
      &nbsp;
      <a className='story-url-link' href={url}>
        {new URL(url).hostname}
      </a>
    </span>
  );
};

export default StoryUrl;
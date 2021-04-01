import { MainContainer } from './MainContainer';

const Main = ({entries}) => {
  console.log()
  if (entries) {
    return (
      <MainContainer>
        {entries.map(entry => {
          return (<div key={entry.id}>
            <div>
              <a href={entry.fullscreen_image_url}>
                <img src={entry.thumbnail_url} />
              </a>
            </div>
            <div>
              <div>Posted by {entry.author} {entry.entry_date} hours ago.</div>
              <div>{entry.title}</div>
            </div>
            <div>
              Comments: {entry.comments}
            </div>
          </div>)
        })}
      </MainContainer>
    );
  } else {
    return <div>Loading</div>
  }
}

export default Main
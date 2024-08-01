import { Message } from '../Message/Message';
import { Response } from '../Response/Response';
import { Typing } from '../Typing/Typing';
import { PropsList } from '../../modals/modals';

function MessageHistory(props: PropsList): React.JSX.Element | null {
  const {list} = props;

  if (list.length === 0) {
    return null;
  }

  return (
    <ul>
      {
        list.map((obj) => {
          if (obj.type === 'message') {
            return <Message content={obj} key={obj.id} />
          }
          if (obj.type === 'response') {
            return <Response content={obj} key={obj.id} />
          }
          if (obj.type === 'typing') {
            return <Typing content={obj} key={obj.id} />
          }
        })
      }
    </ul>
  );
}

MessageHistory.defaultProps = { // можно задать значение default для props таким способом
  list: [],
};

export default MessageHistory;

import { TypingProps } from '../../modals/modals';

export const Message = (props: TypingProps): React.JSX.Element => {
  const {content} = props;

  return (
    <li className="clearfix">
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"></i>{content.from.name}</span>
        <span className="message-data-time">{content.time}</span>
      </div>
      <div className="message my-message">{content.text}</div>
    </li>
  );
}

import { TypingProps } from '../../modals/modals';

export const Response = (props: TypingProps): React.JSX.Element => {
  const {content} = props;

  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{content.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{content.from.name}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">{content.text}</div>
    </li>
  );
}

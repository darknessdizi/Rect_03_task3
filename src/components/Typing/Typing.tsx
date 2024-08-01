import { TypingProps } from '../../modals/modals';

export const Typing = (props: TypingProps): React.JSX.Element => {
  const {content} = props;

  return (
    <li className="clearfix">
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>{content.from.name}
        </span>
        <span className="message-data-time">{content.time}</span>
      </div>
      <i className="fa fa-circle online"></i>
      <i className="fa fa-circle online" style={{ opacity: 0.5 }}></i>
      <i className="fa fa-circle online" style={{ opacity: 0.25 }}></i>
    </li>
  );
}

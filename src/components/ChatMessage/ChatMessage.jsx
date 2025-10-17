import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Bubble, MessageRow } from './ChatMessage.styles';

const ChatMessage = ({ msg }) => {
  const { text, type } = msg;
  const isUser = type === 'user';

  const components = {
    code({ inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      if (!inline && match) {
        return (
          <SyntaxHighlighter
            style={dracula}
            language={match[1]}
            PreTag="div"
            wrapLines={true}
            {...props}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        );
      }
      return (
        <code
          style={{
            background: '#e0e0e0',
            padding: '2px 4px',
            borderRadius: '4px',
            wordBreak: 'break-word',
          }}
          {...props}
        >
          {children}
        </code>
      );
    },
    table: ({ children }) => (
      <div style={{ overflowX: 'auto', margin: '10px 0' }}>
        <table
          style={{
            width: '100%',
            tableLayout: 'fixed',
            borderCollapse: 'collapse',
          }}
        >
          {children}
        </table>
      </div>
    ),
    img: (props) => (
      <img
        {...props}
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
      />
    ),
    ul: ({ children }) => (
      <ul style={{ paddingLeft: '20px', margin: '5px 0' }}>{children}</ul>
    ),
    ol: ({ children }) => (
      <ol style={{ paddingLeft: '20px', margin: '5px 0' }}>{children}</ol>
    ),
    li: ({ children }) => <li style={{ marginBottom: '4px' }}>{children}</li>,
  };

  return (
    <MessageRow isUser={isUser}>
      <Bubble isUser={isUser}>
        <div>
          <ReactMarkdown rehypePlugins={[rehypeRaw]} components={components}>
            {text}
          </ReactMarkdown>
        </div>
      </Bubble>
    </MessageRow>
  );
};

export default ChatMessage;

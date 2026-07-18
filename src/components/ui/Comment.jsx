const Comment = ({ content, size }) => {
  return (
    <p className={`font-mono text-sm text-black/70 leading-relaxed whitespace-pre-line ${size} break-words`}>
      {content}
    </p>
  );
};

export default Comment;
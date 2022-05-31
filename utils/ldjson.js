const fromObject = (ldJson) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson.props) }}
    />
  );
};

/* Exports */
export default fromObject;

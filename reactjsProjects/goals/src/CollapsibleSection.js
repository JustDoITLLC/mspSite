import React, { useState } from 'react';

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <section>
      <h2 onClick={toggleOpen} style={{ cursor: 'pointer', color: 'white', textDecoration: isOpen ? 'underline' : 'none'}}>
  {title}
</h2>
      {isOpen && <div>{children}</div>}
    </section>
  );
};
export default CollapsibleSection;
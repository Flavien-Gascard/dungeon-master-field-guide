import React from 'react';

type FantasyLayoutProps = {
  sidebar: React.ReactNode;
  children: React.ReactNode;
};

const FantasyLayout: React.FC<FantasyLayoutProps> = ({ sidebar, children }) => (
  <div className="fantasy-layout">
    <aside className="fantasy-sidebar">{sidebar}</aside>
    <main className="fantasy-main">{children}</main>
  </div>
);

export default FantasyLayout;

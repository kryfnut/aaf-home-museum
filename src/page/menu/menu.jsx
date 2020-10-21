import React, { useState } from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import './index.scss';
import { useHistory } from 'react-router-dom';
import MenuContainer from '../../component/menu/menu-container';
import MenuItem from '../../component/menu/menu-item';
import MenuSlogan from '../../component/menu/menu-slogan';
import iconMenuCollection from '../../asset/icon-menu-collection.svg';
import iconMenuGuide from '../../asset/icon-menu-guide.svg';
import iconMenuStory from '../../asset/icon-menu-story.svg';
import iconMenuWander from '../../asset/icon-menu-wander.svg';

export default function Menu() {
  // eslint-disable-next-line no-unused-vars
  const history = useHistory();
  const [color, setColor] = useState('');

  const handleClick = (c) => {
    setColor(c);
    setTimeout(() => {
      history.push('/guide');
    }, 1000);
  };

  return (
    <>
      {/* Use it! */}
      <GoogleFontLoader
        fonts={[
          {
            font: 'B612',
            weights: [400, 700],
          },
        ]}
        subsets={['cyrillic-ext', 'greek']}
      />
      <div className="home-museum-menu-container">
        <div className={`container-mask-${color}`} />
        <MenuContainer
          menuItems={[
            <MenuItem onClick={() => handleClick('guide')} key={1} icon={iconMenuGuide} title="Guide Me By Name" />,
            <MenuItem onClick={() => handleClick('story')} key={2} icon={iconMenuStory} title="Tell Me A Story" />,
            <MenuItem onClick={() => handleClick('wander')} key={3} icon={iconMenuWander} title="I Like To See" />,
            <MenuItem onClick={() => handleClick('collection')} key={4} icon={iconMenuCollection} title="My Collection" />,
          ]}
          sloganComponent={<MenuSlogan slogan="About Home Museum" />}
        />
      </div>
    </>
  );
}
import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import ListFooter from './list-footer';

describe('Components: ListFooter', () => {
  it('returns an empty span with no credits', () => {
    const props = {},
          rendered = shallow(<ListFooter {...props} />);

    expect(rendered.type()).toEqual('span');
  });

  it('returns panel-footer when credits provided', () => {
    const props = { credits: 'Someone', url: 'http://yahoo.com/' },
          rendered = shallow(<ListFooter {...props} />);

    expect(rendered.type()).toEqual('div');
    expect(rendered.prop('className')).toInclude('panel-footer');
  });

  it('returns the credits text', () => {
    const props = { credits: 'Someone', url: 'http://yahoo.com/' },
          rendered = shallow(<ListFooter {...props} />);

    expect(rendered.text()).toInclude(props.credits);
  });

  it('does not create a link if there is none provided', () => {
    const props = { credits: 'Someone', url: '' },
          rendered = shallow(<ListFooter {...props} />);

    expect(rendered.find('a').length).toEqual(0);
  });

  it('creates a link when provided with a url', () => {
    const props = { credits: 'Someone', url: 'http://yahoo.com/' },
          rendered = shallow(<ListFooter {...props} />);

    expect(rendered.find('a').length).toEqual(1);
    expect(rendered.find('a').text()).toInclude('more info & website');
    expect(rendered.find('a').prop('href')).toEqual('http://yahoo.com/');
  });
});

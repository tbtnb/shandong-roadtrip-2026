import React from 'react';
import {render,screen,cleanup} from '@testing-library/react';
import {afterEach,it,expect} from 'vitest';
import GettyPhoto from '../src/GettyPhoto.jsx';
const item={provider:'Getty Images',author:'li dekun',capture_date:'18 June 2023',source_url:'https://www.gettyimages.com/detail/1545593384'};
afterEach(cleanup);
it('shows an honest source-only fallback without third-party network resources',()=>{
 render(<GettyPhoto item={item}/>);
 expect(screen.getByRole('link',{name:'打开 Getty 原图源页'}).href).toBe(item.source_url);
 expect(screen.getByText(/本项不计为已展示的照片/)).toBeTruthy();
 expect(document.querySelector('script[data-coastal-getty],iframe,img')).toBeNull();
 expect(screen.queryByRole('button')).toBeNull();
});
it('does not render unrecognized source hosts or unsafe URLs',()=>{
 const {rerender}=render(<GettyPhoto item={{...item,source_url:'javascript:alert(1)'}}/>);
 expect(screen.queryByRole('link')).toBeNull();
 rerender(<GettyPhoto item={{...item,source_url:'https://gettyimages.com.attacker.invalid/photo'}}/>);
 expect(screen.queryByRole('link')).toBeNull();
});

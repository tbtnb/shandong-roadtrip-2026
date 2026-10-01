import React from 'react';
import {ArrowUpRight,Info} from '@phosphor-icons/react';

// Source-link fallback: the official embed did not pass real-browser loading QA.
// Do not mirror a Getty image or load its script/iframe as a substitute.
export default function GettyPhoto({item}){
 const sourceAllowed=u=>/^https:\/\/(?:www\.)?gettyimages\.(?:com|co\.nz|co\.uk)\//.test(u||'');
 if(item?.provider!=='Getty Images'||!sourceAllowed(item.source_url))return null;
 return <div className="getty-photo"><div className="getty-notice"><Info size={16}/><p>此处暂未显示实景图。可打开 Getty Images 原图源页查看，非小红书图片；外站可能要求同意其隐私设置或显示广告。</p></div>
  <p className="getty-credit">{item.author} · {item.capture_date} · Getty Images<br/>本站未复制原图；本项不计为已展示的照片</p>
  <div className="getty-links"><a href={item.source_url} target="_blank" rel="noopener noreferrer">打开 Getty 原图源页<ArrowUpRight size={13}/></a></div>
 </div>
}

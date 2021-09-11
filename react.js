import React from 'react';
import ReactDOM from 'react-dom';

const imageUrl = "https://images.greelane.com/proxy?url=https%3A%2F%2Fwww.thoughtco.com%2Fthmb%2FD2Inel4DlcH1t9r732zd6st_pfw%3D%2F3500x2433%2Ffilters%3Afill%28auto%2C1%29%2FCicero_Rome_Palace_of_Justice-9a15cb9d2a0e4d0a9d0cf2786629dd1f.jpg&width=750";

ReactDOM.render(<img src={imageUrl} />, document.getElementById('react-root'));
import React from 'react';
import '../css/BreadCrumb.css';

const Breadcrumb = ({ page }) => {
    return (
        <section className="breadcrumb">
            <a href="/">Home</a> / <span>{page}</span>
        </section>
    );
};

export default Breadcrumb;

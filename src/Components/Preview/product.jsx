import React from 'react'

function ProductPreview() {
    return (
        <div className="product-preview hidden">
            <div className="product-preview__wrapper" onClick={(e) => productToggler(e)}>
                <div className="modal">
                    <div className="close" title="Close" onClick={(e) => productToggler(e, true)}><span>X</span></div>
                    <div className="content">
                        <img src={previewImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPreview
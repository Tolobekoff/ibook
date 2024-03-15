import React from 'react';

const Admin = () => {
    return (
        <div className='create-info'>
            <div className="container">
                <div className="create">
                    <div class="input__wrapper">
                      <input type="file" name="file" id="input__file" class="input input__file"/>
                      <label for="input__file">Выберите файл</label>
                    </div>
                    <div className="prodInfo">
                        <input type="text" />
                        <div className="cotegor-price">
                            <input type="text" />
                            <input type="text" />

                        </div>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <button>SAVE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;

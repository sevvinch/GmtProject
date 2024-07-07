import React from 'react';

const Number = () => {
  return (
    <div>
      <div className="container">
        <div className="py-20 flex justify-between">
          <div className="w-[50%] py-4">
            <h3 className="pt-2 pb-5 text-[30px] font-medium">Цифры и факты</h3>
            <p className="text-[16px] text-[#202020] font-medium w-[80%] opacity-50">
              Мы работаем на результат и продаём только качественную продукцию
            </p>
          </div>
          <div className="w-[50%]">
            <div className="py-4 flex items-center border-b-[1px] border-[#D5D1E1]">
              <span className="text-[48px] text-[#088269] font-medium ">
                7 лет
              </span>
              <p className="ml-[200px] text-[16px] font-medium">на рынке</p>
            </div>
            <div className="py-4 flex justify-between items-center border-b-[1px] border-[#D5D1E1]">
              <span className="text-[48px] text-[#088269] font-medium">
                964+
              </span>
              <p className="mr-[40px] text-[16px] font-medium">
                оригинальной продукции со всего мира
              </p>
            </div>
            <div className="py-4 flex justify-between items-center border-b-[1px] border-[#D5D1E1]">
              <span className="text-[48px] text-[#088269] font-medium">
                23+
              </span>
              <p className="mr-[40px] text-[16px] font-medium">
                международных сертификатов качества
              </p>
            </div>
            <div className="py-4 flex justify-between items-center border-b-[1px] border-[#D5D1E1]">
              <span className="text-[48px] text-[#088269] font-medium">
                2452+
              </span>
              <p className="mr-[150px] text-[16px] font-medium">
                товаров всегда в наличии
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Number;

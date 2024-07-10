import React from 'react';

const Notification = () => {
  const warningText = [
    'Рассмотрение заявки на замену товара осуществляется в срок до 30 дней со дня её регистрации согласно п. 1 ст. 12 Закона № 59-ФЗ, при условии предоставления документов, перечисленных в договоре.',
    'Оформление гарантийного случая осуществляется согласно Гражданскому кодексу РФ, при условии предоставления документов, перечисленных в договоре и при наличии заявления с указанием причины возврата, оформленного надлежащим образом.',
  ];

  return (
    <div className="bg-[#F8F7F3]">
      <div className="container py-20">
        <div className="grid grid-cols-2 p-[40px] rounded-xl bg-[#088269]">
          <h2 className="text-[30px] font-medium text-[#F8F7F3]">Внимание!</h2>
          <div className="text-[16px] font-medium text-[#F8F7F3]">
            {warningText.map((text, index) => (
              <p key={index} className={index === 0 ? 'pb-4' : ''}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

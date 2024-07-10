import React from 'react';

const Consult = () => {
  const inputs = [
    { type: 'text', placeholder: 'Ваше имя' },
    { type: 'number', placeholder: 'Ваш телефон' },
    { type: 'text', placeholder: 'Ваш email' },
    { type: 'text', placeholder: 'Ваш вопрос', extraClass: 'pb-[100px]' },
  ];

  return (
    <div className="bg-[#F8F7F3]">
      <div className="container flex items-center justify-between gap-5 py-[150px]">
        <div className="w-[700px] h-[600px] overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11991.384365119842!2d69.17516795541992!3d41.29045400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b007e2ac277%3A0x83fc525ce72adbfb!2sComplex%20Med%20Center!5e0!3m2!1sru!2s!4v1719655233089!5m2!1sru!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-[10px]"
          ></iframe>
        </div>
        <div className="bg-[white] p-10 rounded-lg shadow-lg w-[45%]">
          <h4 className="text-[30px] font-semibold pb-[20px]">
            Вам нужна консультация?
          </h4>
          <p className="text-[#7A7687] text-[16px] font-medium pb-5">
            Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои
            координаты и наш менеджер перезвонит вам через 10 минут
          </p>
          {inputs.map((input, index) => (
            <input
              key={index}
              type={input.type}
              placeholder={input.placeholder}
              className={`outline-none bg-transparent px-4 py-2 mb-[10px] border-b-[1px] border-b-[#7A7687] w-full text-[16px] font-normal ${input.extraClass || ''}`}
            />
          ))}
          <div className="flex items-center justify-between gap-4 mt-10">
            <button className="bg-[#088269] px-6 py-2 rounded-full text-white">
              Отправить
            </button>
            <p className="text-[12px]">
              Нажимая «Отправить», я соглашаюсь c обработкой персональных данных
              на условиях{' '}
              <span className="text-[#088269]">
                Политики конфиденциальности
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consult;

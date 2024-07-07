import React, { useState } from 'react';

const Consultation = () => {
  const Kontak = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    question: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.phone) newErrors.phone = "Phone number is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.question) newErrors.question = "Question is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully", form);
    } else {
      setErrors(validationErrors);
    }
  };

  const [activeSection, setActiveSection] = useState(null);

  const handleToggle = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };
  return (
    <div className="container mx-auto px-4">
      <div className="mt-32 px-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2 pr-14">
            <h4 className="text-[30px] mb-5">Вам нужна консультация?</h4>
            <p>
              Задайте их по номеру телефона{' '}
              <span className="text-[#088269]">+7 (495) 000-00-00</span> или
              оставьте свои координаты и наш менеджер перезвонит вам через 10
              минут
            </p>
          </div>
          <div className="md:w-1/2 p-10 bg-white shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  className="w-full border-b-2 p-2 bg-white outline-none"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="number"
                  name="phone"
                  placeholder="Ваш телефон"
                  className="w-full border-b-2 p-2 bg-white outline-none"
                  value={form.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Ваш email"
                  className="w-full border-b-2 p-2 bg-white outline-none"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <textarea
                  name="question"
                  placeholder="Ваш вопрос"
                  className="w-full border-b-2 p-2 bg-white outline-none"
                  value={form.question}
                  onChange={handleChange}
                />
                {errors.question && (
                  <p className="text-red-500 text-sm">{errors.question}</p>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-7">
                <button
                  type="submit"
                  className="px-7 text-white py-2 mt-4 rounded-3xl bg-[#088269] hover:bg-[#599b8e]"
                >
                  Отправить
                </button>
                <span className="text-xs mt-4 bg-white">
                  Нажимая «Отправить», я соглашаюсь с обработкой персональных
                  данных и принимаю{' '}
                  <a href="#" className="text-blue-500">
                    Политику конфиденциальности
                  </a>
                  .
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
    }
};

export default Consultation;

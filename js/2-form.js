// Оголошуємо об'єкт formData з початковими значеннями
let formData = {
    email: "",
    message: "",
  };
  
  // Отримуємо доступ до форми
  const form = document.querySelector(".feedback-form");
  
  // Ключ для збереження у локальному сховищі
  const LOCAL_STORAGE_KEY = "feedback-form-state";
  
  // Функція завантаження даних із локального сховища
  function loadFormData() {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      try {
        formData = JSON.parse(savedData);
        // Заповнюємо поля форми
        form.elements.email.value = formData.email || "";
        form.elements.message.value = formData.message || "";
      } catch (e) {
        console.error("Error parsing saved data:", e);
        localStorage.removeItem(LOCAL_STORAGE_KEY); // Очистити некоректні дані
      }
    }
  }
  
  // Відстеження події input для збереження даних у локальне сховище
  form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
  });
  
  // Сабміт форми з перевіркою та очищенням
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Забороняємо перезавантаження сторінки
  
    // Перевірка, чи обидва поля заповнені
    if (!form.elements.email.value.trim() || !form.elements.message.value.trim()) {
      alert("Fill please all fields");
      return;
    }
  
    // Виведення актуальних даних у консоль
    console.log("Form Data:", formData);
  
    // Очищення сховища, об'єкта formData та полів форми
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    formData = { email: "", message: "" };
    form.reset();
  });
  
  // Завантаження даних при завантаженні сторінки
  window.addEventListener("DOMContentLoaded", loadFormData);
  
  
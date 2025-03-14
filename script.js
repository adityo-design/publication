if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(function(registration) {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(function(error) {
      console.log('Service Worker registration failed:', error);
    });
}
// ফর্ম সাবমিট হ্যান্ডলার
document.getElementById('dataForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // ইনপুট থেকে তথ্য সংগ্রহ
  const name = document.getElementById('name').value;
  const info = document.getElementById('info').value;
  
  // একটি অবজেক্ট হিসেবে তথ্য সংরক্ষণ
  const personalData = { name, info };
  
  // localStorage এ তথ্য সংরক্ষণ (JSON ফরম্যাটে)
  localStorage.setItem('personalData', JSON.stringify(personalData));
  
  // ইনপুট ফিল্ডগুলো খালি করা
  document.getElementById('dataForm').reset();
  
  // সংরক্ষিত তথ্য প্রদর্শন করা
  displayData();
});

// সংরক্ষিত তথ্য প্রদর্শনের ফাংশন
function displayData() {
  const data = JSON.parse(localStorage.getItem('personalData'));
  const displayDiv = document.getElementById('savedData');
  
  if (data) {
    displayDiv.innerHTML = `<p><strong>নাম:</strong> ${data.name}</p>
                            <p><strong>তথ্য:</strong> ${data.info}</p>`;
  } else {
    displayDiv.innerHTML = `<p>কোনো তথ্য সংরক্ষিত নেই।</p>`;
  }
}

// পেজ লোডের সময় সংরক্ষিত তথ্য দেখানো
displayData();
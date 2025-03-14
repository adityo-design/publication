self.addEventListener('install', function(event) {
  console.log('Service Worker installing.');
});

self.addEventListener('fetch', function(event) {
  // এখানে আপনি প্রয়োজনীয় ক্যাশিং বা ফেচ লজিক যোগ করতে পারেন
});
/**
 * دالة فتح التبويبات (Tabs)
 * @param {Event} event - الحدث الناتج عن النقر على الزر
 * @param {string} tabId - المعرف (ID) الخاص بالتبويب المراد فتحه
 */
function openTab(event, tabId) {
    // 1. جلب جميع عناصر التبويبات المخفية
    let tabContents = document.querySelectorAll('.tab-content');
    
    // 2. إخفاء جميع التبويبات عن طريق إزالة كلاس 'active'
    tabContents.forEach(function(content) {
        content.classList.remove('active');
    });

    // 3. جلب جميع أزرار القائمة الجانبية
    let navButtons = document.querySelectorAll('.nav-btn');
    
    // 4. إزالة كلاس 'active' من جميع الأزرار لكي لا تظهر كأنها محددة
    navButtons.forEach(function(btn) {
        btn.classList.remove('active');
    });

    // 5. إظهار التبويب المطلوب عن طريق إضافة كلاس 'active' له
    document.getElementById(tabId).classList.add('active');

    // 6. تفعيل الزر الذي تم النقر عليه (إضافة كلاس 'active' له)
    event.currentTarget.classList.add('active');
}

// ملاحظة: لقد استخدمنا JavaScript نقي (Vanilla JS) لضمان سرعة الأداء 
// وعدم الاعتماد على مكتبات خارجية تثقل النظام.

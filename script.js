// --- المجموعة الأولى (1 - 10) كاملة بكل التفاصيل ---
const solutionsData = [
    

{
    id: 1,
    title: "المستوى الأول: أساسيات البرمجة",
    lessons: [
        { lessonTitle: "الدرس 1: البداية", questions: [
            { qName: "سؤال ريكي", code: "أريد أن ألعب به!" },
            { qName: "معلومات: فائدة البرمجة", code: "تتيح لك إنشاء الألعاب والتطبيقات (صح)" }
        ]},
        { lessonTitle: "الدرس 2: لغات البرمجة", questions: [
            { qName: "سؤال: عدد اللغات", code: "أكثر من 100 نوع" }
        ]},
        { lessonTitle: "الدرس 3: أول كود", questions: [
            { qName: "س 1: طباعة Hello", code: 'console.log("Hello");' },
            { qName: "س 2: طباعة Good morning", code: 'console.log("Good morning");' }
        ]},
        { lessonTitle: "الدرس 4: المحرر", questions: [
            { qName: "س 1: اسم شاشة الكود", code: "المحرر" },
            { qName: "س 2: طباعة Good evening", code: 'console.log("Good evening");' },
            { qName: "س 3: طباعة Good night", code: 'console.log("Good night");' },
            { qName: "س 4: البحث عن خطأ", code: "تشغيل الكود مباشرة" },
            { qName: "س 5: طباعة Good luck", code: 'console.log("Good luck");' }
        ]},
        { lessonTitle: "الدرس 5: التعديل", questions: [
            { qName: "س 1: تعديل Hello", code: '//When executed...\nconsole.log("Hello");' }
        ]},
        { lessonTitle: "الدرس 6: التعليقات", questions: [
            { qName: "س 1: تعليق Greetings", code: '//Greetings for the day.\nconsole.log("Good morning");' },
            { qName: "س 2: إخفاء Apple", code: '//console.log("Apple");' },
            { qName: "س 3: إخفاء Fish", code: '//console.log("Fish");' }
        ]}
    ]
},
{
    id: 2,
    title: "المستوى الثاني: العمليات الحسابية",
    lessons: [
        { lessonTitle: "الدرس 1: الجمع", questions: [
            { qName: "س 1: طباعة نص Calculate", code: 'console.log("Let' + "'s calculate." + '");' },
            { qName: "س 2: طباعة 1+1 كنص", code: 'console.log("1+1");' },
            { qName: "س 3: حساب 1+1", code: 'console.log(1+1);' },
            { qName: "س 4: حساب 1400+3600", code: 'console.log(1400+3600);' }
        ]},
        { lessonTitle: "الدرس 2: العمليات الأربعة", questions: [
            { qName: "س 1: حساب 432+345", code: 'console.log(432+345);' },
            { qName: "س 2: حساب 100-50", code: 'console.log(100-50);' },
            { qName: "س 3: حساب 5×6", code: 'console.log(5*6);' },
            { qName: "س 4: حساب 10÷5", code: 'console.log(10/5);' },
            { qName: "س 5: أرقام ضخمة", code: 'console.log(10000000000*10000000000);' }
        ]},
        { lessonTitle: "الدرس 3: دمج النصوص والحساب", questions: [
            { qName: "س 1: سعر القهوة", code: 'console.log("Set of 2 coffees " + (250 * 2) + " codycoins");' },
            { qName: "س 2: إكمال الكود", code: '(250 * 2)' }
        ]},
        { lessonTitle: "الدرس 4: الفاتورة", questions: [
            { qName: "س 1: 3 قهوة", code: '+ (250 * 3) +' },
            { qName: "س 2: 1 مافن", code: '+ (320 * 1) +' },
            { qName: "س 3: 2 مافن", code: '" + (320 * 2) + "' }
        ]}
    ]
},
{
    id: 3,
    title: "المستوى الثالث: المتغيرات",
    lessons: [
        { lessonTitle: "الدرس 1: تعريف المتغير", questions: [
            { qName: "س 1: تحديث fish", code: 'let fish;\nfish = 0;\nfish = fish + 3;\nfish = fish + 7;\nconsole.log(fish);' },
            { qName: "س 2: طباعة كلمة fish", code: 'console.log("fish");' }
        ]},
        { lessonTitle: "الدرس 2: الإسناد", questions: [
            { qName: "س 1: إسناد 8 و 12", code: 'let fish;\nfish = 0;\nfish = fish + 8;\nfish = fish + 12;\nconsole.log(fish);' },
            { qName: "س 2: متغير apple", code: 'let apple;\napple = 0;\napple = apple + 5;\napple = apple + 8;\nconsole.log(apple);' },
            { qName: "س 3: المصروف allowance", code: 'let allowance;\nallowance = 700;\nallowance = allowance + 1500;\nconsole.log(allowance);' }
        ]}
    ]
},
{
    id: 4,
    title: "المستوى الرابع: مراجعة واختبار",
    lessons: [
        { lessonTitle: "مراجعة الدروس", questions: [
            { qName: "س 1: تعليق وطباعة", code: '//Write the program...\nconsole.log("Good evening");' },
            { qName: "س 2: دمج أسعار", code: 'console.log("Bread and coffee for " + (200 + 150) + " codycoins");' },
            { qName: "س 3: متغير num", code: 'let num;\nnum = 2;\nnum = num + 8;\nconsole.log(num);' }
        ]},
        { lessonTitle: "اختبار الفصل الرابع", questions: [
            { qName: "س 1: مخرج Hello", code: 'console.log("Hello");' },
            { qName: "س 2: المحرر", code: "المحرر" },
            { qName: "س 3: تحويل تعليق", code: '//Leave this text.\nconsole.log("Make the first line a comment.");' },
            { qName: "س 4: 5+7", code: 'console.log(5 + 7);' },
            { qName: "س 5: رمز الضرب", code: '*' },
            { qName: "س 6: الجملة الكاملة", code: 'console.log("The answer is " + (3 * 5) + ".");' },
            { qName: "س 7: التصريح let", code: 'let number;' },
            { qName: "س 8: برنامج المتغير", code: 'let num;\nnum = 5;\nconsole.log(num);' }
        ]}
    ]
},
{
    id: 5,
    title: "المستوى الخامس: جملة IF",
    lessons: [
        { lessonTitle: "الدرس 1: التصريح المباشر", questions: [
            { qName: "س 1: fish = 0", code: 'let fish = 0;\nconsole.log(fish);' },
            { qName: "س 2: apple = 10", code: 'let apple = 0;\napple = apple + 10;\nconsole.log(apple);' }
        ]},
        { lessonTitle: "الدرس 2: سؤال ريكي", questions: [
            { qName: "س 2: إسناد 80 لـ science", code: '80' }
        ]},
        { lessonTitle: "الدرس 3: جملة IF", questions: [
            { qName: "س 1: كتابة الشرط", code: 'if (science == 100)' },
            { qName: "س 2: محتوى القوس { }", code: '{console.log("Increased allowance!");}' },
            { qName: "س 3: كود كامل science", code: 'let science = 100;\nif (science == 100){console.log("Increased allowance!");}' },
            { qName: "س 4: إخراج المكافأة", code: 'let science = 100;\nif (science == 100){console.log("Increased allowance!");}' },
            { qName: "س 5: إخراج Reward", code: 'let math = 100;\nif (math == 100){console.log("Get a reward");}' }
        ]},
        { lessonTitle: "الدرس 4: مقارنة القيم", questions: [
            { qName: "س 3: ناتج math == 80", code: 'true' }
        ]},
        { lessonTitle: "اختبار الفصل الخامس", questions: [
            { qName: "س 1: متغير num سطرين", code: 'let num = 5;\nconsole.log(num);' }
        ]}
    ]
},
{
    id: 6,
    title: "المستوى السادس: جملة ELSE",
    lessons: [
        { lessonTitle: "الدرس 1: البديل", questions: [
            { qName: "س 1: كود Perfect/Try", code: 'if (math == 100) {\n console.log("Perfect");\n} else {\n console.log("Try again");\n}' }
        ]},
        { lessonTitle: "الدرس 2: تحديث ELSE", questions: [
            { qName: "س 1: تحديث score", code: 'if (score == 100) {\n console.log("Perfect");\n} else {\n console.log("Try again");\n}' },
            { qName: "س 2: كتابة else فقط", code: 'else {\n console.log("Try again");\n}' }
        ]},
        { lessonTitle: "الدرس 3: المقارنة", questions: [
            { qName: "س 2: رمز التساوي", code: 'score == 100' }
        ]},
        { lessonTitle: "الدرس 4: التعليقات المتقدمة", questions: [
            { qName: "س 1: إخفاء سطر", code: '// console.log("Hidden");' }
        ]},
        { lessonTitle: "اختبار الفصل السادس", questions: [
            { qName: "س 1: كود else كامل", code: 'if (point == 10) {\n console.log("Win");\n} else {\n console.log("Lose");\n}' }
        ]}
    ]
},
{
    id: 7,
    title: "المستوى السابع: المعاملات الشرطية",
    lessons: [
        { lessonTitle: "الدرس 1: أكبر وأصغر", questions: [
            { qName: "س 1: شرط money > 500", code: 'if (money > 500)' },
            { qName: "س 2: شرط age < 20", code: 'if (age < 20)' }
        ]},
        { lessonTitle: "الدرس 2: أكبر من أو يساوي", questions: [
            { qName: "س 1: شرط score >= 80", code: 'if (score >= 80)' },
            { qName: "س 2: شرط price <= 1000", code: 'if (price <= 1000)' }
        ]},
        { lessonTitle: "الدرس 3: لا يساوي", questions: [
            { qName: "س 1: شرط name != Guest", code: 'if (name != "Guest")' }
        ]}
    ]
},
{
    id: 8,
    title: "المستوى الثامن: مراجعة (5-7)",
    lessons: [
        { lessonTitle: "اختبار مراجعة شامل", questions: [
            { qName: "س 1: جملة IF الصحيحة", code: 'if (x > 10)' },
            { qName: "س 2: جملة ELSE الصحيحة", code: 'else { }' },
            { qName: "س 3: رمز 'أكبر من أو يساوي'", code: '>=' },
            { qName: "س 4: كود النجاح Passed", code: 'if (point >= 80) {\n console.log("Passed");\n}' }
        ]}
    ]
},
{
    id: 9,
    title: "المستوى التاسع: التكرار (While)",
    lessons: [
        { lessonTitle: "الدرس 1: الدوران", questions: [
            { qName: "س 1: شرط i < 5", code: 'while (i < 5)' },
            { qName: "س 2: كود تكرار Hello", code: 'let i = 0;\nwhile (i < 5) {\n console.log("Hello");\n i = i + 1;\n}' }
        ]},
        { lessonTitle: "الدرس 2: تحديث العداد", questions: [
            { qName: "س 1: i = i + 1", code: 'i = i + 1;' }
        ]}
    ]
},
{
    id: 10,
    title: "المستوى العاشر: المعاملات المختصرة",
    lessons: [
        { lessonTitle: "الدرس 1: ++ و --", questions: [
            { qName: "س 1: استخدام ++", code: 'i++;' },
            { qName: "س 2: استخدام --", code: 'i--;' }
        ]},
        { lessonTitle: "الدرس 2: دمج While و ++", questions: [
            { qName: "س 1: عد من 0 لـ 9", code: 'let i = 0;\nwhile (i < 10) {\n console.log(i);\n i++;\n}' }
        ]}
    ]
},

// --- المجموعة الثانية (11 - 20) كاملة بكل التفاصيل "بالحرف" ---
{
    id: 11,
    title: "المستوى 11: تكرار For",
    lessons: [
        { lessonTitle: "الدرس 1: أساسيات For", questions: [
            { qName: "س 1: هيكل جملة for", code: 'for (let i = 0; i < 5; i++)' },
            { qName: "س 2: تكرار Hello 5 مرات", code: 'for (let i = 0; i < 5; i++) {\n  console.log("Hello");\n}' }
        ]},
        { lessonTitle: "الدرس 2: استخدام العداد", questions: [
            { qName: "س 1: طباعة قيمة i", code: 'for (let i = 0; i < 10; i++) {\n  console.log(i);\n}' }
        ]},
        { lessonTitle: "الدرس 3: تحديث الشرط", questions: [
            { qName: "س 1: تكرار 3 مرات فقط", code: 'for (let i = 0; i < 3; i++) {\n  console.log("Hello");\n}' }
        ]},
        { lessonTitle: "اختبار المستوى 11", questions: [
            { qName: "س 1: الكود الصحيح لـ for", code: 'for (let i = 0; i < 5; i++)' },
            { qName: "س 2: تكرار 10 مرات", code: 'for (let i = 0; i < 10; i++)' }
        ]}
    ]
},
{
    id: 12,
    title: "المستوى 12: المصفوفات (Arrays)",
    lessons: [
        { lessonTitle: "الدرس 1: إنشاء مصفوفة", questions: [
            { qName: "س 1: مصفوفة fruits", code: 'const fruits = ["Apple", "Banana"];' }
        ]},
        { lessonTitle: "الدرس 2: الوصول للعناصر", questions: [
            { qName: "س 1: العنصر الأول [0]", code: 'console.log(fruits[0]);' },
            { qName: "س 2: العنصر الثاني [1]", code: 'console.log(fruits[1]);' }
        ]},
        { lessonTitle: "الدرس 3: تحديث العناصر", questions: [
            { qName: "س 1: تغيير الموز لبرتقال", code: 'fruits[1] = "Orange";' }
        ]},
        { lessonTitle: "الدرس 4: طول المصفوفة", questions: [
            { qName: "س 1: استخدام .length", code: 'console.log(fruits.length);' }
        ]}
    ]
},
{
    id: 13,
    title: "المستوى 13: تكرار المصفوفات",
    lessons: [
        { lessonTitle: "الدرس 1: المصفوفة مع For", questions: [
            { qName: "س 1: الشرط باستخدام length", code: 'for (let i = 0; i < fruits.length; i++)' }
        ]},
        { lessonTitle: "الدرس 2: طباعة العناصر", questions: [
            { qName: "س 1: كود الطباعة الكامل", code: 'for (let i = 0; i < fruits.length; i++) {\n  console.log(fruits[i]);\n}' }
        ]},
        { lessonTitle: "الدرس 3: مصفوفة الأرقام", questions: [
            { qName: "س 1: طباعة numbers[i]", code: 'for (let i = 0; i < numbers.length; i++) {\n  console.log(numbers[i]);\n}' }
        ]}
    ]
},
{
    id: 14,
    title: "المستوى 14: مراجعة (9 - 13)",
    lessons: [
        { lessonTitle: "اختبار مراجعة شامل", questions: [
            { qName: "س 1: دوران while", code: 'while (i < 10)' },
            { qName: "س 2: تعريف colors", code: 'const colors = ["Red", "Blue"];' },
            { qName: "س 3: مخرج colors[1]", code: 'console.log(colors[1]);' },
            { qName: "س 4: خاصية الطول", code: 'colors.length' },
            { qName: "س 5: اختصار الزيادة", code: 'i++' }
        ]}
    ]
},
{
    id: 15,
    title: "المستوى 15: الكائنات (Objects)",
    lessons: [
        { lessonTitle: "الدرس 1: إنشاء Object", questions: [
            { qName: "س 1: كائن user", code: 'const user = { name: "Ahmed", age: 16 };' }
        ]},
        { lessonTitle: "الدرس 2: الوصول للقيم", questions: [
            { qName: "س 1: استخدام user.name", code: 'console.log(user.name);' }
        ]},
        { lessonTitle: "الدرس 3: تحديث القيم", questions: [
            { qName: "س 1: تعديل العمر", code: 'user.age = 17;' }
        ]},
        { lessonTitle: "الدرس 4: إضافة قيم", questions: [
            { qName: "س 1: إضافة city", code: 'user.city = "Cairo";' }
        ]}
    ]
},
{
    id: 16,
    title: "المستوى 16: الدوال (Functions)",
    lessons: [
        { lessonTitle: "الدرس 1: تعريف الدالة", questions: [
            { qName: "س 1: دالة greet", code: 'function greet() {\n  console.log("Hello");\n}' }
        ]},
        { lessonTitle: "الدرس 2: الاستدعاء", questions: [
            { qName: "س 1: استدعاء ()greet", code: 'greet();' }
        ]},
        { lessonTitle: "الدرس 3: دالة البداية", questions: [
            { qName: "س 1: دالة start", code: 'function start() {\n  console.log("Game Starting...");\n}' }
        ]},
        { lessonTitle: "الدرس 4: استدعاء start", questions: [
            { qName: "س 1: استدعاء ()start", code: 'start();' }
        ]}
    ]
},
{
    id: 17,
    title: "المستوى 17: الوسائط (Parameters)",
    lessons: [
        { lessonTitle: "الدرس 1: دالة بوسيط", questions: [
            { qName: "س 1: إضافة name للقوس", code: 'function greet(name) {\n  console.log("Hello " + name);\n}' }
        ]},
        { lessonTitle: "الدرس 2: تمرير القيمة", questions: [
            { qName: "س 1: تمرير Ahmed", code: 'greet("Ahmed");' }
        ]},
        { lessonTitle: "الدرس 3: عدة وسائط", questions: [
            { qName: "س 1: دالة (a, b)", code: 'function add(a, b) {\n  console.log(a + b);\n}' }
        ]}
    ]
},
{
    id: 18,
    title: "المستوى 18: القيمة المسترجعة (Return)",
    lessons: [
        { lessonTitle: "الدرس 1: استخدام Return", questions: [
            { qName: "س 1: استرجاع المجموع", code: 'function getSum(a, b) {\n  return a + b;\n}' }
        ]},
        { lessonTitle: "الدرس 2: تخزين المخرجات", questions: [
            { qName: "س 1: تخزين في result", code: 'const result = getSum(5, 10);' }
        ]},
        { lessonTitle: "الدرس 3: الطباعة", questions: [
            { qName: "س 1: طباعة result", code: 'console.log(result);' }
        ]}
    ]
},
{
    id: 19,
    title: "المستوى 19: مراجعة (15 - 18)",
    lessons: [
        { lessonTitle: "اختبار مراجعة", questions: [
            { qName: "س 1: تعريف function", code: 'function test() { }' },
            { qName: "س 2: كائن car", code: 'const car = { brand: "Toyota" };' },
            { qName: "س 3: استخدام return", code: 'return x * 2;' },
            { qName: "س 4: تشغيل الدالة", code: 'test();' }
        ]}
    ]
},
{
    id: 20,
    title: "المستوى 20: النطاق (Scope)",
    lessons: [
        { lessonTitle: "الدرس 1: النطاق العام", questions: [
            { qName: "س 1: تعريف globalVar", code: 'let globalVar = "I am global";' }
        ]},
        { lessonTitle: "الدرس 2: النطاق المحلي", questions: [
            { qName: "س 1: تعريف localVar داخلي", code: 'function myFunc() {\n  let localVar = "I am local";\n}' }
        ]}
    ]
},

// --- المجموعة الثالثة (21 - 30) كاملة بكل التفاصيل "سؤال بسؤال" ---
{
    id: 21,
    title: "المستوى 21: مراجعة شاملة 2",
    lessons: [
        { lessonTitle: "الدرس 1: مراجعة المصفوفات", questions: [
            { qName: "س 1: تعريف مصفوفة tools", code: 'const tools = ["Hammer", "Screwdriver"];' },
            { qName: "س 2: طباعة طول المصفوفة", code: 'console.log(tools.length);' }
        ]},
        { lessonTitle: "الدرس 2: مراجعة الكائنات", questions: [
            { qName: "س 1: تعريف كائن item", code: 'const item = { name: "Pen", price: 10 };' },
            { qName: "س 2: الوصول لسعر item", code: 'console.log(item.price);' }
        ]},
        { lessonTitle: "الدرس 3: مراجعة الدوال", questions: [
            { qName: "س 1: استدعاء دالة بوسطين", code: 'calculateTotal(100, 200);' }
        ]}
    ]
},
{
    id: 22,
    title: "المستوى 22: تنسيق الكود والتعليقات",
    lessons: [
        { lessonTitle: "الدرس 1: المسافات البادئة", questions: [
            { qName: "س 1: إزاحة الكود Indentation", code: 'if (true) {\n  console.log("Correct Indent");\n}' }
        ]},
        { lessonTitle: "الدرس 2: أنواع التعليقات", questions: [
            { qName: "س 1: تعليق سطر واحد", code: '// This is a single line' },
            { qName: "س 2: تعليق عدة أسطر", code: '/* This is a\nmulti-line comment */' }
        ]}
    ]
},
{
    id: 23,
    title: "المستوى 23: المعامل المنطقي &&",
    lessons: [
        { lessonTitle: "الدرس 1: استخدام AND", questions: [
            { qName: "س 1: شرط بين قيمتين", code: 'if (score >= 80 && score <= 100)' }
        ]},
        { lessonTitle: "الدرس 2: التحقق من الهوية", questions: [
            { qName: "س 1: اسم المستخدم وكلمة السر", code: 'if (user == "admin" && password == "1234")' }
        ]},
        { lessonTitle: "الدرس 3: شرط الثلاث قيم", questions: [
            { qName: "س 1: دمج 3 شروط بـ &&", code: 'if (a > 0 && b > 0 && c > 0)' }
        ]}
    ]
},
{
    id: 24,
    title: "المستوى 24: المعامل المنطقي ||",
    lessons: [
        { lessonTitle: "الدرس 1: استخدام OR", questions: [
            { qName: "س 1: شرط اليوم (سبت أو أحد)", code: 'if (day == "Saturday" || day == "Sunday")' }
        ]},
        { lessonTitle: "الدرس 2: شروط القبول", questions: [
            { qName: "س 1: السعر أو الكمية", code: 'if (price < 100 || quantity > 5)' }
        ]}
    ]
},
{
    id: 25,
    title: "المستوى 25: جملة Switch",
    lessons: [
        { lessonTitle: "الدرس 1: أساسيات Switch", questions: [
            { qName: "س 1: هيكل الحالات case", code: 'switch (rank) {\n  case 1:\n    console.log("Gold");\n    break;\n}' }
        ]},
        { lessonTitle: "الدرس 2: الحالة الافتراضية", questions: [
            { qName: "س 1: استخدام default", code: 'default:\n  console.log("No Rank");' }
        ]},
        { lessonTitle: "الدرس 3: عدة حالات", questions: [
            { qName: "س 1: حالة case 2 و case 3", code: 'case 2:\n  console.log("Silver");\n  break;' }
        ]}
    ]
},
{
    id: 26,
    title: "المستوى 26: الدوال المجهولة",
    lessons: [
        { lessonTitle: "الدرس 1: دالة Expression", questions: [
            { qName: "س 1: تعريف دالة داخل متغير", code: 'const greet = function() {\n  console.log("Hello");\n};' }
        ]},
        { lessonTitle: "الدرس 2: تشغيل المتغير", questions: [
            { qName: "س 1: استدعاء greet()", code: 'greet();' }
        ]}
    ]
},
{
    id: 27,
    title: "المستوى 27: دالة السهم (Arrow Function)",
    lessons: [
        { lessonTitle: "الدرس 1: هيكل السهم", questions: [
            { qName: "س 1: تحويل function لسهم", code: 'const sum = (a, b) => {\n  return a + b;\n};' }
        ]},
        { lessonTitle: "الدرس 2: السهم المختصر", questions: [
            { qName: "س 1: سهم بدون return", code: 'const double = n => n * 2;' }
        ]}
    ]
},
{
    id: 28,
    title: "المستوى 28: مراجعة (23 - 27)",
    lessons: [
        { lessonTitle: "اختبار مراجعة منطقية", questions: [
            { qName: "س 1: ما هو رمز AND؟", code: '&&' },
            { qName: "س 2: ما هو رمز OR؟", code: '||' },
            { qName: "س 3: ما هو رمز دالة السهم؟", code: '=>' },
            { qName: "س 4: دالة سهم تجمع a و b", code: 'const add = (a, b) => a + b;' }
        ]}
    ]
},
{
    id: 29,
    title: "المستوى 29: طريقة forEach",
    lessons: [
        { lessonTitle: "الدرس 1: الدوران الذكي", questions: [
            { qName: "س 1: استخدام forEach للطباعة", code: 'names.forEach((name) => {\n  console.log(name);\n});' }
        ]},
        { lessonTitle: "الدرس 2: استخدام الـ Arrow معها", questions: [
            { qName: "س 1: تمرير دالة سهم لـ forEach", code: 'numbers.forEach(n => console.log(n));' }
        ]}
    ]
},
{
    id: 30,
    title: "المستوى 30: طريقة map",
    lessons: [
        { lessonTitle: "الدرس 1: تعديل المصفوفة", questions: [
            { qName: "س 1: إنشاء مصفوفة جديدة بـ map", code: 'const doubled = numbers.map(n => n * 2);' }
        ]},
        { lessonTitle: "الدرس 2: map مع الكائنات", questions: [
            { qName: "س 1: استخراج الأسماء فقط", code: 'const names = users.map(u => u.name);' }
        ]}
    ]
},

// --- المجموعة الرابعة والأخيرة (31 - 42) كاملة بكل التفاصيل "سؤال بسؤال" ---
{
    id: 31,
    title: "المستوى 31: طريقة filter",
    lessons: [
        { lessonTitle: "الدرس 1: تصفية المصفوفة", questions: [
            { qName: "س 1: تصفية الأرقام الأكبر من 20", code: 'const numbers = [1, 10, 30];\nconst filtered = numbers.filter(n => n > 20);' }
        ]},
        { lessonTitle: "الدرس 2: تصفية النصوص", questions: [
            { qName: "س 1: تصفية الكلمات الطويلة", code: 'const longNames = names.filter(name => name.length > 5);' }
        ]}
    ]
},
{
    id: 32,
    title: "المستوى 32: طريقة find",
    lessons: [
        { lessonTitle: "الدرس 1: البحث عن عنصر", questions: [
            { qName: "س 1: إيجاد مستخدم برقمه (id)", code: 'const found = users.find(user => user.id === 1);' }
        ]},
        { lessonTitle: "الدرس 2: ميزة find", questions: [
            { qName: "س 1: ماذا ترجع find؟", code: "ترجع أول عنصر يحقق الشرط فقط" }
        ]}
    ]
},
{
    id: 33,
    title: "المستوى 33: دمج طرق المصفوفات",
    lessons: [
        { lessonTitle: "الدرس 1: السلسلة (Chaining)", questions: [
            { qName: "س 1: فلترة ثم رسم (filter + map)", code: 'numbers.filter(n => n > 0).map(n => n * 2);' }
        ]}
    ]
},
{
    id: 34,
    title: "المستوى 34: مراجعة (29 - 33)",
    lessons: [
        { lessonTitle: "اختبار مراجعة الطرق", questions: [
            { qName: "س 1: وظيفة forEach", code: "الدوران على العناصر" },
            { qName: "س 2: وظيفة map", code: "إنشاء مصفوفة جديدة" },
            { qName: "س 3: وظيفة filter", code: "استخراج عناصر بشرط معين" },
            { qName: "س 4: وظيفة find", code: "البحث عن عنصر واحد" }
        ]}
    ]
},
{
    id: 35,
    title: "المستوى 35: الأصناف (Classes) 1",
    lessons: [
        { lessonTitle: "الدرس 1: تعريف الصنف", questions: [
            { qName: "س 1: هيكل class Animal", code: 'class Animal {\n}' }
        ]},
        { lessonTitle: "الدرس 2: النسخ (Instances)", questions: [
            { qName: "س 1: إنشاء كائن dog من Animal", code: 'const dog = new Animal();' }
        ]}
    ]
},
{
    id: 36,
    title: "المستوى 36: المنشئ (Constructor)",
    lessons: [
        { lessonTitle: "الدرس 1: دالة البناء", questions: [
            { qName: "س 1: إضافة constructor بالاسم", code: 'constructor(name) {\n  this.name = name;\n}' }
        ]}
    ]
},
{
    id: 37,
    title: "المستوى 37: وظائف الأصناف (Methods)",
    lessons: [
        { lessonTitle: "الدرس 1: إضافة وظيفة", questions: [
            { qName: "س 1: وظيفة speak داخل الصنف", code: 'speak() {\n  console.log("Hello");\n}' }
        ]},
        { lessonTitle: "الدرس 2: استدعاء الوظيفة", questions: [
            { qName: "س 1: تشغيل dog.speak", code: 'dog.speak();' }
        ]}
    ]
},
{
    id: 38,
    title: "المستوى 38: الوراثة (Inheritance)",
    lessons: [
        { lessonTitle: "الدرس 1: توريث الخصائص", questions: [
            { qName: "س 1: جعل Dog يرث من Animal", code: 'class Dog extends Animal {\n}' }
        ]}
    ]
},
{
    id: 39,
    title: "المستوى 39: استخدام super",
    lessons: [
        { lessonTitle: "الدرس 1: استدعاء الأب", questions: [
            { qName: "س 1: استخدام super في المنشئ", code: 'super(name);' }
        ]}
    ]
},
{
    id: 40,
    title: "المستوى 40: مراجعة (35 - 39)",
    lessons: [
        { lessonTitle: "اختبار مراجعة الأصناف", questions: [
            { qName: "س 1: كلمة الوراثة", code: "extends" },
            { qName: "س 2: فائدة constructor", code: "إعطاء قيم أولية للكائن" },
            { qName: "س 3: فائدة super", code: "تشغيل منشئ الصنف الأب" }
        ]}
    ]
},
{
    id: 41,
    title: "المستوى 41: الوحدات (Modules)",
    lessons: [
        { lessonTitle: "الدرس 1: التصدير والاستيراد", questions: [
            { qName: "س 1: تصدير export default", code: 'export default Animal;' },
            { qName: "س 2: استيراد import", code: 'import Animal from "./animal.js";' }
        ]}
    ]
},
{
    id: 42,
    title: "المستوى 42: المشروع النهائي",
    lessons: [
        { lessonTitle: "الدروس النهائية", questions: [
            { qName: "مراجعة 1", code: "// راجع كل ما تعلمته" },
            { qName: "كلمة الختام", code: "تهانينا! لقد أتممت جميع المستويات بنجاح 🏆" }
        ]}
    ]
}, 
]


const app = document.getElementById("app");
const search = document.getElementById("search");
const chaptersCount = document.getElementById("chaptersCount");
const resultsCount = document.getElementById("resultsCount");

// تحديث عدد الفصول في الهيدر
if (chaptersCount) chaptersCount.textContent = solutionsData.length;

// دالة لتنظيف الكود قبل عرضه (لحماية الـ HTML)
function escapeHTML(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// دالة عرض البيانات على الشاشة
function render(data) {
    if (resultsCount) resultsCount.textContent = data.length;

    if (!data.length) {
        app.innerHTML = '<div class="empty" style="text-align:center; padding:50px; color:#94a3b8;">❌ لا توجد نتائج بحث مطابقة</div>';
        return;
    }

    app.innerHTML = data.map(ch => `
        <div class="chapter">
            <div class="chapter-head" onclick="this.parentElement.classList.toggle('open')">
                <div class="chapter-title">الفصل ${ch.id}: ${ch.title}</div>
                <div class="icon">⬇️</div>
            </div>
            <div class="chapter-body">
                ${ch.lessons.map(lesson => `
                    <div class="lesson">
                        <h3>${lesson.lessonTitle}</h3>
                        ${lesson.questions.map(q => `
                            <div class="question" style="margin-bottom:15px; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:10px;">
                                <div class="qtitle">❓ ${q.qName}</div>
                                <pre><code>${escapeHTML(q.code)}</code></pre>
                                <div class="actions" style="margin-top:8px; display:flex; gap:10px;">
                                    <button class="copy" onclick='copyCode(this, ${JSON.stringify(q.code)})'>نسخ</button>
                                    <button class="run" onclick='runCode(this, ${JSON.stringify(q.code)})' style="background:#22c55e; color:white;">تشغيل</button>
                                </div>
                                <div class="result" style="display:none; margin-top:10px; padding:10px; background:#000; border-radius:8px; color:#facc15; font-family:monospace;"></div>
                            </div>
                        `).join("")}
                    </div>
                `).join("")}
            </div>
        </div>
    `).join("");
}

// دالة نسخ الكود
function copyCode(btn, text) {
    navigator.clipboard.writeText(text).then(() => {
        const oldText = btn.innerText;
        btn.innerText = "✅ تم";
        btn.style.background = "#22c55e";
        setTimeout(() => {
            btn.innerText = oldText;
            btn.style.background = "#0ea5e9";
        }, 1500);
    });
}

// دالة تشغيل الكود (Console Emulator)
function runCode(btn, code) {
    const resultDiv = btn.parentElement.nextElementSibling;
    resultDiv.style.display = "block";
    resultDiv.innerHTML = "⏳ جاري التشغيل...";
    
    try {
        let output = [];
        const customLog = (...args) => output.push(args.join(" "));
        const originalLog = console.log;
        console.log = customLog; // تحويل اللوج لشاشة الموقع
        
        eval(code); // تنفيذ الكود
        
        console.log = originalLog; // إعادة اللوج للطبيعي
        resultDiv.innerHTML = output.length ? "📤 المخرجات:<br>" + output.join("<br>") : "✅ تم التنفيذ (لا يوجد مخرجات)";
        resultDiv.style.color = "#facc15";
    } catch (err) {
        resultDiv.innerHTML = "❌ خطأ في الكود: " + err.message;
        resultDiv.style.color = "#ef4444";
    }
}

// نظام البحث الذكي
search.addEventListener("input", function() {
    const query = this.value.toLowerCase().trim();
    const filtered = solutionsData.filter(ch => 
        ch.title.toLowerCase().includes(query) || 
        ch.id.toString() === query ||
        JSON.stringify(ch.lessons).toLowerCase().includes(query)
    );
    render(filtered);
});

// تشغيل الموقع لأول مرة
render(solutionsData);
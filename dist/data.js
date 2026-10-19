/* INT144 study content. Original course documents are not distributed. */
window.STUDY = {
  "sources": [
    {
      "id": "s1",
      "title": "บท 1 · Agile Principles and Scrum Concepts",
      "type": "PDF · 40 หน้า",
      "description": "Agile Manifesto, principles และ empirical process"
    },
    {
      "id": "s2",
      "title": "บท 2 · Scrum Overview",
      "type": "PDF · 41 หน้า",
      "description": "Phases, team, planning และ events"
    },
    {
      "id": "s3",
      "title": "บท 3 · Product Backlog",
      "type": "PDF · 46 หน้า",
      "description": "User stories, DEEP, refinement และ release planning"
    },
    {
      "id": "s4",
      "title": "บท 4 · Scrum Sprints",
      "type": "PDF · 53 หน้า",
      "description": "Planning, execution, capacity และ technical debt"
    },
    {
      "id": "s5",
      "title": "บท 5 · Scrum Values and Team",
      "type": "PDF · 51 หน้า",
      "description": "Values, teamwork และรายละเอียดบทบาท"
    },
    {
      "id": "outline",
      "title": "Course Outline",
      "type": "PDF · 1 หน้า",
      "description": "ภาพรวมรายวิชาและการประเมิน"
    },
    {
      "id": "g11",
      "title": "G1 · Class 1",
      "type": "Transcript",
      "description": "Agile และความหมายของเสาหลัก"
    },
    {
      "id": "g21",
      "title": "G2 · Class 1",
      "type": "Transcript",
      "description": "อาจารย์ระบุ empirical process control ว่าออกสอบเสมอ"
    },
    {
      "id": "g12a",
      "title": "Class 2 · รอบเช้า",
      "type": "Transcript",
      "description": "บันทึก 22 ก.ย. ช่วงเช้า และข้อสังเกต timebox"
    },
    {
      "id": "g12b",
      "title": "Class 2 · รอบบ่าย",
      "type": "Transcript",
      "description": "บันทึก 22 ก.ย. ช่วงบ่าย ชื่อไฟล์ระบุ G1 เช่นกัน"
    },
    {
      "id": "g13",
      "title": "G1 · Class 3",
      "type": "Transcript",
      "description": "DEEP, การจัดลำดับ และแตก PBI"
    },
    {
      "id": "g23",
      "title": "G2 · Class 3",
      "type": "Transcript",
      "description": "PBI ประเภทต่าง ๆ และความต่างของ DEEP"
    },
    {
      "id": "g14",
      "title": "G1 · Class 4",
      "type": "Transcript",
      "description": "Sprint Goal, capacity และ flow management"
    },
    {
      "id": "g24",
      "title": "G2 · Class 4",
      "type": "Transcript",
      "description": "Buffer, spike และการช่วยงานให้เสร็จ"
    },
    {
      "id": "g15",
      "title": "G1 · Class 5",
      "type": "Transcript",
      "description": "รูปแบบสอบ, Scrum Values และเนื้อหา execution ที่สอนต่อ"
    },
    {
      "id": "g25",
      "title": "G2 · Class 5",
      "type": "Transcript",
      "description": "เน้นคุณลักษณะ Developers 4 ตัวแรก และอธิบาย Daily Scrum ต่อ"
    }
  ],
  "terms": [
    {
      "id": "agile",
      "en": "Agile",
      "th": "แนวคิดการพัฒนาแบบปรับตัว",
      "definition": "ส่งมอบคุณค่าเป็นระยะ เรียนรู้จาก feedback แล้วปรับตามสถานการณ์",
      "example": "ทำแอปส่วนเล็กที่ใช้งานได้ ให้ลูกค้าลอง แล้วปรับ",
      "tip": "ไม่ใช่ทำเร็วอย่างเดียว หรือไม่ต้องมีแผน",
      "related": [
        "manifesto",
        "value",
        "feedback"
      ],
      "category": "Agile และ Scrum"
    },
    {
      "id": "manifesto",
      "en": "Agile Manifesto",
      "th": "คุณค่า Agile 4 คู่",
      "definition": "ให้คุณค่ากับคนและปฏิสัมพันธ์ ซอฟต์แวร์ที่ทำงานได้ ความร่วมมือกับลูกค้า และการตอบสนองต่อการเปลี่ยนแปลง มากกว่าสิ่งที่นำมาเปรียบเทียบ",
      "example": "",
      "tip": "สิ่งด้านขวายังมีคุณค่า ไม่ใช่ต้องตัดทิ้ง",
      "related": [
        "working-software",
        "agile"
      ],
      "category": "Agile และ Scrum"
    },
    {
      "id": "principles",
      "en": "Agile Principles",
      "th": "หลักการ Agile 12 ข้อ",
      "definition": "หลักปฏิบัติที่สนับสนุนคุณค่าใน Agile Manifesto",
      "example": "",
      "tip": "แยกจาก Manifesto 4 คู่ และ Scrum Values 5 ตัว",
      "related": [
        "manifesto",
        "values"
      ],
      "category": "Agile และ Scrum"
    },
    {
      "id": "value",
      "en": "Value / Business Value",
      "th": "คุณค่าและประโยชน์",
      "definition": "ประโยชน์ที่ผลิตภัณฑ์สร้างให้ผู้ใช้ ลูกค้า หรือธุรกิจ",
      "example": "ถอนเงินได้นอกเวลาธนาคาร",
      "tip": "ทำฟีเจอร์เสร็จแต่ไม่ตอบความต้องการ อาจไม่ได้คุณค่าที่คาด",
      "related": [
        "po",
        "working-software"
      ],
      "category": "Agile และ Scrum"
    },
    {
      "id": "working-software",
      "en": "Working Software",
      "th": "ซอฟต์แวร์ที่ใช้งานได้",
      "definition": "ซอฟต์แวร์ที่ทำงานได้จริง เป็นตัววัดความก้าวหน้าหลักของ Agile",
      "example": "",
      "tip": "จำนวนเอกสารหรือชั่วโมงทำงานไม่ใช่ตัววัดหลัก",
      "related": [
        "increment",
        "value"
      ],
      "category": "Agile และ Scrum"
    },
    {
      "id": "iterative",
      "en": "Iterative Development",
      "th": "พัฒนาแบบทำซ้ำ",
      "definition": "ทำซ้ำเพื่อเรียนรู้ ทบทวน และปรับปรุง",
      "example": "ผู้ใช้ลองหน้าค้นหาแล้วทีมปรับให้ง่ายขึ้น",
      "tip": "ต่างจาก incremental ที่เน้นเพิ่มความสามารถ",
      "related": [
        "incremental"
      ],
      "category": "Agile และ Scrum"
    },
    {
      "id": "incremental",
      "en": "Incremental Development",
      "th": "พัฒนาแบบเพิ่มทีละส่วน",
      "definition": "ค่อย ๆ เพิ่มความสามารถให้ผลิตภัณฑ์",
      "example": "เริ่มค้นหาสินค้าได้ แล้วเพิ่มสั่งซื้อและชำระเงิน",
      "tip": "ใช้ร่วมกับ iterative ได้",
      "related": [
        "iterative",
        "increment"
      ],
      "category": "Agile และ Scrum"
    },
    {
      "id": "stepwise",
      "en": "Stepwise Refinement",
      "th": "ค่อย ๆ เพิ่มรายละเอียด",
      "definition": "เน้นสิ่งสำคัญ ณ เวลานั้น และลงรายละเอียดเพิ่มเติมเมื่อเหมาะสม",
      "example": "มีภาพรวมผลิตภัณฑ์ก่อน แล้วค่อยแตกงาน Sprint",
      "tip": "ไม่ใช่ลงรายละเอียดทุกงานให้ครบตั้งแต่วันแรก",
      "related": [
        "jit",
        "detailed"
      ],
      "category": "Agile และ Scrum"
    },
    {
      "id": "timebox",
      "en": "Timeboxing",
      "th": "กรอบเวลาตายตัว",
      "definition": "กำหนดเส้นตายชัดและเลือกงานให้เหมาะกับเวลาที่มี",
      "example": "Sprint สองสัปดาห์จบตามกำหนด",
      "tip": "เมื่อเวลาไม่พอให้จัดขอบเขต ไม่ลดคุณภาพเพื่อยัดงาน",
      "related": [
        "scope",
        "buffer"
      ],
      "category": "Agile และ Scrum"
    },
    {
      "id": "jit",
      "en": "Just-in-time / JIT",
      "th": "ทำเมื่อใกล้จำเป็น",
      "definition": "เก็บรายละเอียดหรือสร้างสิ่งที่ต้องใช้เมื่อใกล้เวลาจำเป็น เพื่อลดงานเสียเปล่า",
      "example": "ลงรายละเอียด PBI ที่ใกล้จะทำใน Sprint ถัดไป แทนการแตกทุกงานของทั้งโครงการตั้งแต่ต้น",
      "tip": "ยังต้องมีภาพรวม ไม่ใช่ไม่วางแผน",
      "related": [
        "stepwise",
        "detailed",
        "upfront"
      ],
      "category": "Agile และ Scrum"
    },
    {
      "id": "feedback",
      "en": "Fast Feedback",
      "th": "ข้อมูลตอบกลับที่รวดเร็ว",
      "definition": "ทดลองกับสิ่งที่ทำขึ้นจริง เพื่อเรียนรู้และปรับได้เร็ว",
      "example": "ให้ผู้ใช้ทดลองฟีเจอร์เล็กที่ทำงานได้",
      "tip": "ของที่ยังเสียทำให้ feedback ติดอยู่ที่ข้อผิดพลาดพื้นฐาน",
      "related": [
        "review",
        "working-software"
      ],
      "category": "Agile และ Scrum"
    },
    {
      "id": "sustainable",
      "en": "Sustainable Pace",
      "th": "จังหวะที่รักษาได้ระยะยาว",
      "definition": "ทำงานด้วยจังหวะที่ผู้เกี่ยวข้องรักษาได้ต่อเนื่อง",
      "example": "ไม่วางแผนโดยอาศัยการทำงานหนักเกินกำลังทุก Sprint",
      "tip": "",
      "related": [],
      "category": "Agile และ Scrum"
    },
    {
      "id": "excellence",
      "en": "Technical Excellence",
      "th": "ความเป็นเลิศทางเทคนิค",
      "definition": "ให้ความสำคัญกับความสามารถ คุณภาพ และการออกแบบที่ดีอย่างต่อเนื่อง",
      "example": "",
      "tip": "Agile ทดแทนความสามารถทางเทคนิคไม่ได้",
      "related": [
        "refactoring",
        "debt"
      ],
      "category": "Agile และ Scrum"
    },
    {
      "id": "simplicity",
      "en": "Simplicity",
      "th": "ลดงานที่ไม่จำเป็น",
      "definition": "เพิ่มปริมาณงานที่ไม่ต้องทำ โดยหลีกเลี่ยงงานที่ไม่สร้างคุณค่า",
      "example": "",
      "tip": "ไม่ใช่ลดคุณภาพหรือทำแบบลวก ๆ",
      "related": [
        "value",
        "jit"
      ],
      "category": "Agile และ Scrum"
    },
    {
      "id": "scrum",
      "en": "Scrum",
      "th": "กรอบการทำงาน Scrum",
      "definition": "Framework สำหรับรับมือปัญหาซับซ้อนและส่งมอบคุณค่าผ่านการปรับตัว",
      "example": "",
      "tip": "Lightweight, เข้าใจง่าย แต่ใช้ให้เชี่ยวชาญยาก",
      "related": [
        "framework",
        "empirical"
      ],
      "category": "Agile และ Scrum"
    },
    {
      "id": "framework",
      "en": "Framework",
      "th": "กรอบการทำงาน",
      "definition": "กรอบที่กำหนดองค์ประกอบสำคัญ ให้ทีมเลือกวิธีและเครื่องมือที่เหมาะกับงาน",
      "example": "",
      "tip": "ไม่ใช่กำหนดรายละเอียดวิธีเขียนโค้ดทุกขั้นตอน",
      "related": [
        "scrum"
      ],
      "category": "Agile และ Scrum"
    },
    {
      "id": "empirical",
      "en": "Empirical Process Control",
      "th": "ควบคุมจากประสบการณ์จริง",
      "definition": "กระบวนการเชิงประจักษ์ ใช้ประสบการณ์ การสังเกต และการทดลอง ตัดสินใจจากสิ่งที่รู้จริง เหมาะกับงานที่ไม่แน่นอน จึงต้องทำให้โปร่งใส ตรวจผล และปรับตัวอย่างต่อเนื่อง",
      "example": "ทำ ทดลองใช้ ตรวจสิ่งที่เกิดขึ้น แล้วปรับ",
      "tip": "อาจารย์ G2 ระบุว่าออกสอบเสมอ",
      "related": [
        "transparency",
        "inspection",
        "adaptation",
        "defined-process"
      ],
      "category": "Agile และ Scrum"
    },
    {
      "id": "transparency",
      "en": "Transparency",
      "th": "โปร่งใสและเข้าใจร่วมกัน",
      "definition": "ข้อมูลสำคัญต้องมองเห็นได้ และผู้เกี่ยวข้องต้องเข้าใจความหมายตรงกัน",
      "example": "ทุกคนเห็นงานและเข้าใจคำว่า Done เหมือนกัน",
      "tip": "Visibility + Shared understanding",
      "related": [
        "visibility",
        "shared",
        "dod"
      ],
      "category": "Agile และ Scrum"
    },
    {
      "id": "visibility",
      "en": "Visibility",
      "th": "การมองเห็นข้อมูล",
      "definition": "ผู้เกี่ยวข้องมองเห็นข้อมูลและสถานการณ์สำคัญ",
      "example": "กระดานแสดงงานที่กำลังทำ",
      "tip": "เห็นข้อมูลเหมือนกันอย่างเดียวยังไม่พอ",
      "related": [
        "transparency",
        "shared"
      ],
      "category": "Agile และ Scrum"
    },
    {
      "id": "shared",
      "en": "Shared Understanding",
      "th": "ความเข้าใจตรงกัน",
      "definition": "เข้าใจข้อมูล เงื่อนไข และสิ่งที่ตกลงร่วมกันในความหมายเดียวกัน",
      "example": "",
      "tip": "เป็นส่วนสำคัญของ Transparency",
      "related": [
        "transparency"
      ],
      "category": "Agile และ Scrum"
    },
    {
      "id": "inspection",
      "en": "Inspection",
      "th": "ตรวจสอบ",
      "definition": "ตรวจสิ่งที่เกิดขึ้นเทียบกับเป้าหมายเพื่อพบความคลาดเคลื่อน",
      "example": "ตรวจความก้าวหน้าต่อ Sprint Goal",
      "tip": "ไม่ตรวจถี่จนรบกวนงาน และไม่จบแค่ตรวจ",
      "related": [
        "adaptation",
        "transparency"
      ],
      "category": "Agile และ Scrum"
    },
    {
      "id": "adaptation",
      "en": "Adaptation",
      "th": "ปรับตัว",
      "definition": "ปรับแผน ผลิตภัณฑ์ หรือกระบวนการ เมื่อพบสิ่งที่ไม่เหมาะสม",
      "example": "เปลี่ยนแผนรายวันหลังพบงานติดขัด",
      "tip": "ควรปรับทันเวลาเพื่อลดความคลาดเคลื่อนต่อไป",
      "related": [
        "inspection"
      ],
      "category": "Agile และ Scrum"
    },
    {
      "id": "team",
      "en": "Scrum Team",
      "th": "ทีม Scrum",
      "definition": "ทีมที่ประกอบด้วย Product Owner หนึ่งคน Scrum Master หนึ่งคน และ Developers",
      "example": "",
      "tip": "ทั้งทีม accountable ต่อ Increment ที่มีคุณค่าและใช้งานได้",
      "related": [
        "po",
        "sm",
        "developers"
      ],
      "category": "บทบาทและทีม"
    },
    {
      "id": "po",
      "en": "Product Owner / PO",
      "th": "ผู้ดูแลคุณค่าผลิตภัณฑ์",
      "definition": "Accountable ต่อการเพิ่มคุณค่าผลิตภัณฑ์และการจัดการ Product Backlog",
      "example": "จัดลำดับ PBI โดยใช้ข้อมูลธุรกิจและเทคนิค",
      "tip": "ไม่ได้บังคับว่าทีมต้องรับงานเท่าไร",
      "related": [
        "backlog",
        "value",
        "accountability"
      ],
      "category": "บทบาทและทีม"
    },
    {
      "id": "developers",
      "en": "Developers",
      "th": "ผู้ร่วมสร้าง Increment",
      "definition": "ร่วมกันออกแบบ สร้าง และทดสอบให้ได้ Increment ที่ใช้งานได้",
      "example": "",
      "tip": "ไม่จำกัดเฉพาะคนเขียนโค้ด และรับผิดชอบ Sprint Backlog",
      "related": [
        "sprint-backlog",
        "dod",
        "self-managing"
      ],
      "category": "บทบาทและทีม"
    },
    {
      "id": "sm",
      "en": "Scrum Master / SM",
      "th": "ผู้ช่วยให้ทีมใช้ Scrum ได้ผล",
      "definition": "Accountable ต่อการสนับสนุน Scrum และประสิทธิผลของ Scrum Team ผ่าน coaching และการช่วยปรับปรุง",
      "example": "",
      "tip": "ไม่ใช่หัวหน้าที่สั่งงานทุกขั้นตอน",
      "related": [
        "coaching",
        "impediment",
        "effectiveness"
      ],
      "category": "บทบาทและทีม"
    },
    {
      "id": "stakeholders",
      "en": "Stakeholders",
      "th": "ผู้มีส่วนได้ส่วนเสีย",
      "definition": "ผู้ที่เกี่ยวข้องหรือได้รับผลจากผลิตภัณฑ์",
      "example": "ลูกค้า ผู้ใช้ ฝ่ายธุรกิจ และ partners",
      "tip": "",
      "related": [
        "review"
      ],
      "category": "บทบาทและทีม"
    },
    {
      "id": "responsibility",
      "en": "Responsibility",
      "th": "หน้าที่ที่ต้องทำ",
      "definition": "ภาระหน้าที่หรืองานที่ได้รับมอบหมาย",
      "example": "รับหน้าที่เขียนส่วนค้นหา",
      "tip": "เน้นใครทำงานอะไร",
      "related": [
        "accountability"
      ],
      "category": "บทบาทและทีม"
    },
    {
      "id": "accountability",
      "en": "Accountability",
      "th": "เป็นเจ้าของผลลัพธ์",
      "definition": "การรับผิดชอบและตอบต่อผลลัพธ์ของงานหรือการตัดสินใจ",
      "example": "",
      "tip": "Scrum Team มี accountability ร่วมกันต่อ Increment",
      "related": [
        "responsibility",
        "team"
      ],
      "category": "บทบาทและทีม"
    },
    {
      "id": "coaching",
      "en": "Coaching",
      "th": "ช่วยให้คิดและเรียนรู้",
      "definition": "ช่วยให้ผู้อื่นวิเคราะห์และหาทางแก้ด้วยตนเอง",
      "example": "ถามว่ามีทางเลือกอะไรและแต่ละทางมีข้อดีข้อเสียอย่างไร",
      "tip": "Coach ในภาพบทเรียนถามมาก บอกน้อย",
      "related": [
        "sm"
      ],
      "category": "บทบาทและทีม"
    },
    {
      "id": "facilitator",
      "en": "Facilitator",
      "th": "ผู้อำนวยความสะดวก",
      "definition": "ช่วยให้การพูดคุยและกิจกรรมดำเนินไปได้ดีและบรรลุวัตถุประสงค์",
      "example": "",
      "tip": "",
      "related": [
        "sm"
      ],
      "category": "บทบาทและทีม"
    },
    {
      "id": "impediment",
      "en": "Impediment",
      "th": "อุปสรรค",
      "definition": "สิ่งที่ขัดขวางความก้าวหน้าของทีม",
      "example": "ระบบภายนอกไม่พร้อมและทีมแก้เองไม่ได้",
      "tip": "SM ช่วยผลักดันอุปสรรคที่เกินความสามารถจัดการของทีม",
      "related": [
        "sm"
      ],
      "category": "บทบาทและทีม"
    },
    {
      "id": "shield",
      "en": "Interference Shield",
      "th": "ช่วยป้องกันสิ่งรบกวน",
      "definition": "บทบาทช่วยให้ทีมมีสมาธิจากการแทรกงานหรือเปลี่ยนทิศทางที่ไม่เหมาะสม",
      "example": "",
      "tip": "",
      "related": [
        "sm",
        "focus"
      ],
      "category": "บทบาทและทีม"
    },
    {
      "id": "change-agent",
      "en": "Change Agent",
      "th": "ผู้ช่วยผลักดันการเปลี่ยนแปลง",
      "definition": "ช่วยให้คนในองค์กรเข้าใจความจำเป็นและผลกระทบของการใช้ Scrum",
      "example": "",
      "tip": "",
      "related": [
        "sm"
      ],
      "category": "บทบาทและทีม"
    },
    {
      "id": "backlog",
      "en": "Product Backlog",
      "th": "รายการงานผลิตภัณฑ์",
      "definition": "แหล่งรวมงานของผลิตภัณฑ์ที่มีการจัดลำดับและปรับเปลี่ยนได้",
      "example": "",
      "tip": "ไม่ได้มีแค่ features และไม่ตายตัว",
      "related": [
        "pbi",
        "deep",
        "po"
      ],
      "category": "Product Backlog"
    },
    {
      "id": "pbi",
      "en": "Product Backlog Item / PBI",
      "th": "งานหนึ่งรายการใน Backlog",
      "definition": "รายการงาน เช่น feature, defect, technical work หรือ knowledge acquisition",
      "example": "",
      "tip": "ไม่จำเป็นต้องเขียนเป็น User Story ทุกตัว",
      "related": [
        "backlog",
        "story",
        "task"
      ],
      "category": "Product Backlog"
    },
    {
      "id": "feature",
      "en": "Feature",
      "th": "ความสามารถของผลิตภัณฑ์",
      "definition": "ความสามารถที่ผลิตภัณฑ์มอบให้ผู้ใช้",
      "example": "ชำระเงินด้วยบัตรเครดิต",
      "tip": "",
      "related": [
        "pbi"
      ],
      "category": "Product Backlog"
    },
    {
      "id": "defect",
      "en": "Defect / Bug",
      "th": "ข้อบกพร่อง",
      "definition": "ปัญหาที่ทำให้ซอฟต์แวร์ไม่ทำงานตามที่ควร",
      "example": "คำนวณยอดชำระผิด",
      "tip": "",
      "related": [
        "debt"
      ],
      "category": "Product Backlog"
    },
    {
      "id": "technical-work",
      "en": "Technical Work",
      "th": "งานด้านเทคนิค",
      "definition": "งานเทคนิคที่จำเป็นต่อผลิตภัณฑ์",
      "example": "อัปเดตระบบฐานข้อมูล",
      "tip": "",
      "related": [
        "pbi"
      ],
      "category": "Product Backlog"
    },
    {
      "id": "knowledge",
      "en": "Knowledge Acquisition",
      "th": "งานหาความรู้",
      "definition": "ทำกิจกรรมเพื่อเรียนรู้และลดความไม่แน่นอน",
      "example": "ศึกษาวิธีส่ง notification ด้วย PoC",
      "tip": "",
      "related": [
        "spike",
        "poc"
      ],
      "category": "Product Backlog"
    },
    {
      "id": "story",
      "en": "User Story",
      "th": "ความต้องการในมุมผู้ใช้",
      "definition": "As a <Role>, I want to <Action>, so that <Benefit>",
      "example": "ในฐานะลูกค้า อยากถอนเงินจาก ATM เพื่อไม่จำกัดด้วยเวลาเปิดธนาคาร",
      "tip": "เป็นจุดเริ่มสนทนา ยังต้องคุยรายละเอียด",
      "related": [
        "epic",
        "ac"
      ],
      "category": "Product Backlog"
    },
    {
      "id": "epic",
      "en": "Epic",
      "th": "ความต้องการขนาดใหญ่",
      "definition": "เรื่องขนาดใหญ่ที่ต้องค่อย ๆ แตกให้เล็กพอพัฒนาได้",
      "example": "ลงทะเบียนเรียนออนไลน์",
      "tip": "",
      "related": [
        "story",
        "refinement"
      ],
      "category": "Product Backlog"
    },
    {
      "id": "refinement",
      "en": "Backlog Refinement / Grooming",
      "th": "ปรับปรุง Backlog",
      "definition": "เพิ่มรายละเอียด ประมาณขนาด แตกงาน เพิ่ม ลบ และจัดลำดับ PBI ใหม่",
      "example": "",
      "tip": "ทำต่อเนื่องระหว่าง Sprint ได้ ไม่ใช่งาน PO คนเดียว",
      "related": [
        "deep",
        "pbi"
      ],
      "category": "Product Backlog"
    },
    {
      "id": "deep",
      "en": "DEEP",
      "th": "คุณสมบัติ Backlog ที่ดี",
      "definition": "Detailed appropriately, Emergent, Estimated, Prioritized",
      "example": "",
      "tip": "จำชื่อและแยกเหตุผลของ D กับ E ให้ได้",
      "related": [
        "detailed",
        "emergent",
        "estimated",
        "prioritized"
      ],
      "category": "Product Backlog"
    },
    {
      "id": "detailed",
      "en": "Detailed Appropriately",
      "th": "รายละเอียดเหมาะสม",
      "definition": "งานใกล้ทำมีรายละเอียดมากและขนาดเล็ก งานที่ยังไกลอาจใหญ่และยังไม่ละเอียด",
      "example": "",
      "tip": "เปลี่ยนตามความใกล้ที่จะทำ ไม่ใช่เหตุการณ์ใหม่เพียงอย่างเดียว",
      "related": [
        "emergent",
        "stepwise"
      ],
      "category": "Product Backlog"
    },
    {
      "id": "emergent",
      "en": "Emergent",
      "th": "เปลี่ยนตามข้อมูลใหม่",
      "definition": "Backlog ปรับเมื่อเรียนรู้เพิ่มหรือสถานการณ์เปลี่ยน",
      "example": "เพิ่มฟีเจอร์จาก feedback หรือลบงานที่หมดคุณค่า",
      "tip": "ต่างจาก D ซึ่งเน้นระดับรายละเอียด",
      "related": [
        "detailed",
        "refinement"
      ],
      "category": "Product Backlog"
    },
    {
      "id": "estimated",
      "en": "Estimated",
      "th": "มีการประมาณ",
      "definition": "มี estimate เป็นข้อมูลช่วยตัดสินใจวางแผนและจัดลำดับ",
      "example": "",
      "tip": "ไม่ใช่การรับประกันตัวเลข",
      "related": [
        "estimate"
      ],
      "category": "Product Backlog"
    },
    {
      "id": "prioritized",
      "en": "Prioritized",
      "th": "จัดลำดับความสำคัญ",
      "definition": "เรียงงานเพื่อสื่อว่าเรื่องใดควรทำก่อน โดยพิจารณาคุณค่า ขนาด ความเสี่ยง และการเรียนรู้",
      "example": "",
      "tip": "PO accountable แต่ใช้ข้อมูลจากผู้อื่นด้วย",
      "related": [
        "po",
        "value",
        "risk"
      ],
      "category": "Product Backlog"
    },
    {
      "id": "estimate",
      "en": "Estimate",
      "th": "ค่าประมาณ",
      "definition": "การประเมินขนาด ความซับซ้อน หรือแรงที่ต้องใช้",
      "example": "",
      "tip": "ปรับตามข้อมูลใหม่ได้",
      "related": [
        "capacity"
      ],
      "category": "Product Backlog"
    },
    {
      "id": "risk",
      "en": "Risk",
      "th": "ความเสี่ยง",
      "definition": "ความไม่แน่นอนที่อาจกระทบผลลัพธ์",
      "example": "",
      "tip": "",
      "related": [
        "spike",
        "buffer"
      ],
      "category": "Product Backlog"
    },
    {
      "id": "happy",
      "en": "Happy Flow",
      "th": "เส้นทางปกติ",
      "definition": "ลำดับใช้งานที่ดำเนินไปตามปกติ",
      "example": "Login สำเร็จ",
      "tip": "",
      "related": [
        "unhappy"
      ],
      "category": "Product Backlog"
    },
    {
      "id": "unhappy",
      "en": "Unhappy Flow",
      "th": "เส้นทางผิดปกติ",
      "definition": "กรณีใช้งานผิดพลาดหรือต้องจัดการทางเลือก",
      "example": "ลืมรหัสผ่านหรือ Login ไม่ผ่าน",
      "tip": "",
      "related": [
        "happy"
      ],
      "category": "Product Backlog"
    },
    {
      "id": "business-rule",
      "en": "Business Rules",
      "th": "กฎทางธุรกิจ",
      "definition": "เงื่อนไขที่กำหนดการทำงานทางธุรกิจ",
      "example": "ไม่รับคำสั่งซื้อต่ำกว่ายอดขั้นต่ำ",
      "tip": "",
      "related": [
        "ac"
      ],
      "category": "Product Backlog"
    },
    {
      "id": "deliver",
      "en": "Deliver",
      "th": "ส่งมอบ",
      "definition": "ส่งมอบสิ่งที่พัฒนาขึ้น",
      "example": "",
      "tip": "ไม่เท่ากับนำออกใช้จริงทุกครั้ง",
      "related": [
        "release"
      ],
      "category": "Release Planning"
    },
    {
      "id": "release",
      "en": "Release",
      "th": "นำออกใช้งานจริง",
      "definition": "นำความสามารถหรือผลิตภัณฑ์ออกให้ใช้งานจริง",
      "example": "",
      "tip": "ฝั่งธุรกิจร่วมพิจารณาจังหวะ Release",
      "related": [
        "deliver",
        "pspi"
      ],
      "category": "Release Planning"
    },
    {
      "id": "fixed-date",
      "en": "Fixed Date Release Planning",
      "th": "วางแผนโดยวันตายตัว",
      "definition": "กำหนดวันส่งมอบและเลือกขอบเขตงานให้เหมาะสม",
      "example": "",
      "tip": "ต้องทำของสำคัญก่อน ทำให้ Done และมี MRF เล็กพอ",
      "related": [
        "timebox",
        "mrf"
      ],
      "category": "Release Planning"
    },
    {
      "id": "scope",
      "en": "Scope",
      "th": "ขอบเขตงาน",
      "definition": "งานและความสามารถที่ตกลงว่าจะทำ",
      "example": "",
      "tip": "ปรับได้อย่างเหมาะสม โดยไม่ทำลาย Sprint Goal",
      "related": [
        "timebox",
        "sprint-goal"
      ],
      "category": "Release Planning"
    },
    {
      "id": "mrf",
      "en": "Minimum Releasable Features / MRFs",
      "th": "ชุดขั้นต่ำที่ต้องมีเพื่อ Release",
      "definition": "ชุด Must-have ที่เล็กที่สุดซึ่งยังส่งมอบได้ตามความคาดหวังด้านคุณค่าและคุณภาพ",
      "example": "",
      "tip": "สไลด์เสนอ 60–70% ของเวลา release เพื่อเผื่อความเสี่ยง เป็นแนวทาง ไม่ใช่สูตรตายตัว",
      "related": [
        "must",
        "fixed-date"
      ],
      "category": "Release Planning"
    },
    {
      "id": "moscow",
      "en": "MoSCoW",
      "th": "วิธีจัดความสำคัญ 4 ระดับ",
      "definition": "Must have, Should have, Could have, Won’t have",
      "example": "",
      "tip": "ระดับความสำคัญขึ้นอยู่กับช่วงเวลาที่พิจารณา",
      "related": [
        "must",
        "should",
        "could",
        "wont"
      ],
      "category": "Release Planning"
    },
    {
      "id": "must",
      "en": "Must Have",
      "th": "จำเป็นต้องมี",
      "definition": "ขาดแล้วส่งมอบสิ่งที่ใช้ได้ตามเป้าหมายไม่ได้ และไม่มีทางทดแทนที่ยอมรับได้",
      "example": "",
      "tip": "ไม่ใช่ทุกอย่างที่ลูกค้าบอกว่าอยากได้",
      "related": [
        "should",
        "workaround"
      ],
      "category": "Release Planning"
    },
    {
      "id": "should",
      "en": "Should Have",
      "th": "สำคัญแต่ยังทดแทนได้",
      "definition": "สำคัญแต่ไม่ถึงกับขาดไม่ได้ ยังมี workaround",
      "example": "",
      "tip": "ไม่ทัน release แรก ต้องประเมินใหม่ ไม่ย้ายอัตโนมัติ",
      "related": [
        "must",
        "could"
      ],
      "category": "Release Planning"
    },
    {
      "id": "could",
      "en": "Could Have",
      "th": "มีแล้วดี",
      "definition": "อยากได้แต่ถ้าขาดจะกระทบน้อยกว่า Should-have",
      "example": "",
      "tip": "",
      "related": [
        "should"
      ],
      "category": "Release Planning"
    },
    {
      "id": "wont",
      "en": "Won’t Have",
      "th": "ไม่ทำในช่วงนี้",
      "definition": "ตกลงไม่ส่งมอบในกรอบเวลาที่กำลังพิจารณา",
      "example": "",
      "tip": "ไม่ได้แปลว่าไม่ทำตลอดไป",
      "related": [
        "moscow"
      ],
      "category": "Release Planning"
    },
    {
      "id": "workaround",
      "en": "Workaround",
      "th": "วิธีทดแทนหรือวิธีอ้อม",
      "definition": "วิธีทำงานแทนความสามารถที่ยังไม่มีซึ่งยอมรับได้ในบริบทนั้น",
      "example": "",
      "tip": "ช่วยแยก Must กับ Should",
      "related": [
        "must",
        "should"
      ],
      "category": "Release Planning"
    },
    {
      "id": "sprint",
      "en": "Sprint",
      "th": "รอบการทำงาน",
      "definition": "รอบ timebox เพื่อสร้าง Increment และไปสู่เป้าหมาย สไลด์ระบุ 1–4 สัปดาห์",
      "example": "",
      "tip": "ระยะเวลาสม่ำเสมอ รอบใหม่เริ่มต่อทันที",
      "related": [
        "sprint-goal",
        "increment"
      ],
      "category": "Sprint"
    },
    {
      "id": "product-goal",
      "en": "Product Goal",
      "th": "เป้าหมายผลิตภัณฑ์",
      "definition": "เป้าหมายที่ Scrum Team ร่วมกันมุ่งไปในระดับผลิตภัณฑ์",
      "example": "",
      "tip": "",
      "related": [
        "sprint-goal",
        "po"
      ],
      "category": "Sprint"
    },
    {
      "id": "sprint-goal",
      "en": "Sprint Goal",
      "th": "เป้าหมายเดียวของ Sprint",
      "definition": "วัตถุประสงค์ที่สร้างทิศทาง ความสอดคล้อง และความยืดหยุ่นในการทำงาน",
      "example": "ผู้ใช้ค้นหาด้วย keyword ได้",
      "tip": "สื่อผลลัพธ์ มากกว่าเพียงบอกจำนวนรายการที่จะทำ",
      "related": [
        "initial-goal",
        "scope"
      ],
      "category": "Sprint"
    },
    {
      "id": "initial-goal",
      "en": "Initial Sprint Goal",
      "th": "เป้าหมาย Sprint ตั้งต้น",
      "definition": "ข้อเสนอเริ่มต้นของ PO ก่อนทีมร่วมพิจารณางานและความเป็นไปได้",
      "example": "",
      "tip": "คำว่า initial สำคัญ ยังต้องร่วมกันตกลง",
      "related": [
        "sprint-goal",
        "planning"
      ],
      "category": "Sprint"
    },
    {
      "id": "planning",
      "en": "Sprint Planning",
      "th": "วางแผน Sprint",
      "definition": "ตอบ Why Sprint นี้มีคุณค่า, What ทำอะไรได้, How จะทำอย่างไร",
      "example": "",
      "tip": "Developers ประเมินงานจาก capacity และแผนจริง",
      "related": [
        "sprint-backlog",
        "capacity"
      ],
      "category": "Sprint"
    },
    {
      "id": "sprint-backlog",
      "en": "Sprint Backlog",
      "th": "งาน Sprint พร้อมแผน",
      "definition": "PBI ที่เลือกสำหรับ Sprint พร้อมแผนงานที่จำเป็นเพื่อบรรลุ Sprint Goal",
      "example": "",
      "tip": "เป็นของ Developers ปรับตามความรู้ใหม่ได้",
      "related": [
        "backlog",
        "task",
        "sprint-goal"
      ],
      "category": "Sprint"
    },
    {
      "id": "task",
      "en": "Task",
      "th": "งานย่อยเพื่อทำ PBI",
      "definition": "งานลงมือทำที่จำเป็นต่อการทำ PBI ให้สำเร็จ",
      "example": "สร้าง API ทดสอบ และทำหน้าจอของ feature เดียว",
      "tip": "Refinement แตก PBI เป็น PBI ส่วน Planning แตก PBI เป็น Tasks",
      "related": [
        "pbi",
        "sprint-backlog"
      ],
      "category": "Sprint"
    },
    {
      "id": "forecast",
      "en": "Sprint Forecast",
      "th": "การคาดการณ์งาน Sprint",
      "definition": "สิ่งที่ทีมคาดว่าจะส่งมอบได้จากข้อมูล แผน และกำลังที่มี",
      "example": "",
      "tip": "",
      "related": [
        "capacity",
        "planning"
      ],
      "category": "Sprint"
    },
    {
      "id": "capacity",
      "en": "Team Capacity",
      "th": "กำลังและเวลาทำงานจริงของทีม",
      "definition": "เวลาที่เหลือให้ทำงาน หลังพิจารณาวันลา การประชุม การอบรม และงานอื่นแล้ว",
      "example": "",
      "tip": "ไม่ใช่จำนวนคน × ชั่วโมงเต็มโดยไม่หักอะไร",
      "related": [
        "buffer",
        "estimate"
      ],
      "category": "Sprint"
    },
    {
      "id": "buffer",
      "en": "Sprint Buffer",
      "th": "เผื่อความไม่แน่นอน",
      "definition": "เวลาสำรองสำหรับงานไม่คาดคิด estimate คลาดเคลื่อน หรือปัญหา",
      "example": "",
      "tip": "ขนาด buffer เรียนรู้จากประสบการณ์ทีม",
      "related": [
        "unplanned",
        "capacity"
      ],
      "category": "Sprint"
    },
    {
      "id": "unplanned",
      "en": "Unplanned Work",
      "th": "งานนอกแผน",
      "definition": "งานที่ไม่ได้คาดหรือวางแผนไว้แต่เกิดขึ้นระหว่างทำงาน",
      "example": "",
      "tip": "",
      "related": [
        "buffer"
      ],
      "category": "Sprint"
    },
    {
      "id": "increment",
      "en": "Increment",
      "th": "ส่วนเพิ่มที่ใช้งานได้",
      "definition": "ผลงานที่เพิ่มความสามารถให้ผลิตภัณฑ์และผ่านเกณฑ์คุณภาพที่เกี่ยวข้อง",
      "example": "",
      "tip": "เขียนโค้ดเสร็จแต่ทดสอบไม่ผ่านยังไม่ใช่ Done",
      "related": [
        "dod",
        "pspi"
      ],
      "category": "Sprint"
    },
    {
      "id": "pspi",
      "en": "Potentially Shippable Product Increment / PSPI",
      "th": "ส่วนเพิ่มที่พร้อมส่งออกใช้งาน",
      "definition": "Increment ที่เสร็จจริงตาม Definition of Done และพร้อมในเชิงคุณภาพสำหรับการส่งออกใช้งาน",
      "example": "",
      "tip": "พร้อม Release ไม่เท่ากับต้อง Release จริง",
      "related": [
        "increment",
        "release",
        "dod"
      ],
      "category": "Sprint"
    },
    {
      "id": "dod",
      "en": "Definition of Done / DoD",
      "th": "นิยามว่างานเสร็จ",
      "definition": "มาตรฐานร่วมว่าต้องทำอะไรผ่านบ้างจึงถือว่าเสร็จ",
      "example": "ผ่านการทดสอบและ review ตามเกณฑ์ทีม",
      "tip": "ต่างจาก AC ที่เป็นเงื่อนไขเฉพาะรายการ",
      "related": [
        "ac",
        "acceptance-test"
      ],
      "category": "Sprint"
    },
    {
      "id": "ac",
      "en": "Acceptance Criteria / AC",
      "th": "เงื่อนไขการยอมรับ",
      "definition": "เงื่อนไขความพึงพอใจเฉพาะของ PBI",
      "example": "ยกเลิกก่อน 24 ชั่วโมงแล้วคืนเงินตามที่ตกลง",
      "tip": "ไม่ใช่มาตรฐานร่วมของทุก PBI แบบ DoD",
      "related": [
        "dod",
        "acceptance-test",
        "gwt"
      ],
      "category": "Sprint"
    },
    {
      "id": "acceptance-test",
      "en": "Acceptance Test",
      "th": "ทดสอบเงื่อนไขที่ตกลง",
      "definition": "วิธีพิสูจน์ว่าซอฟต์แวร์ทำงานตามเงื่อนไข มีข้อมูล ขั้นตอน และผลที่คาดหวัง",
      "example": "",
      "tip": "AC บอกเงื่อนไข ส่วน test บอกวิธีตรวจ",
      "related": [
        "ac",
        "gwt"
      ],
      "category": "Sprint"
    },
    {
      "id": "gwt",
      "en": "Given–When–Then",
      "th": "รูปแบบสถานการณ์ทดสอบ",
      "definition": "Given เงื่อนไขเริ่มต้น → When การกระทำ → Then ผลที่คาดหวัง",
      "example": "",
      "tip": "",
      "related": [
        "ac"
      ],
      "category": "Sprint"
    },
    {
      "id": "spike",
      "en": "Spike",
      "th": "งานศึกษาลดความไม่รู้",
      "definition": "ทำกิจกรรม เช่น ศึกษา ทดลอง prototype หรือ PoC เพื่อให้เข้าใจสิ่งที่ยังไม่รู้",
      "example": "",
      "tip": "ควรลดความไม่รู้ก่อนรับงานที่ยังประเมินไม่ได้",
      "related": [
        "technical-spike",
        "functional-spike",
        "poc"
      ],
      "category": "Sprint"
    },
    {
      "id": "technical-spike",
      "en": "Technical Spike",
      "th": "ศึกษาวิธีสร้างเชิงเทคนิค",
      "definition": "ถามว่าจะสร้างหรือใช้เทคนิคใด",
      "example": "จะแสดงวันเวลาตาม local timezone อย่างไร",
      "tip": "",
      "related": [
        "functional-spike",
        "spike"
      ],
      "category": "Sprint"
    },
    {
      "id": "functional-spike",
      "en": "Functional Spike",
      "th": "ศึกษาพฤติกรรมระบบ",
      "definition": "ถามว่าระบบและผู้ใช้ควรทำอะไรตามลำดับอย่างไร",
      "example": "เมื่อมีคนยกเลิกนัด จะเสนอช่องว่างให้คิวรออย่างไร",
      "tip": "",
      "related": [
        "technical-spike",
        "spike"
      ],
      "category": "Sprint"
    },
    {
      "id": "poc",
      "en": "Proof of Concept / PoC",
      "th": "ทดลองพิสูจน์แนวคิด",
      "definition": "ทดลองเพื่อพิสูจน์ว่าแนวคิดหรือวิธีหนึ่งทำได้",
      "example": "",
      "tip": "",
      "related": [
        "spike"
      ],
      "category": "Sprint"
    },
    {
      "id": "execution",
      "en": "Sprint Execution",
      "th": "ลงมือทำงาน Sprint",
      "definition": "ทำงานทั้งหมดที่จำเป็นต่อการสร้าง Increment และบรรลุ Sprint Goal",
      "example": "",
      "tip": "ไม่ใช่แค่เขียนโค้ด",
      "related": [
        "flow",
        "dod"
      ],
      "category": "การทำงาน"
    },
    {
      "id": "daily",
      "en": "Daily Scrum",
      "th": "ตรวจและปรับแผนรายวัน",
      "definition": "กิจกรรม 15 นาทีเพื่อตรวจความก้าวหน้า ประสานงาน และปรับแผนไปสู่ Sprint Goal",
      "example": "",
      "tip": "อาจารย์เน้น sync ก่อน แยกอภิปรายแก้ปัญหายาวออกไป",
      "related": [
        "inspection",
        "adaptation"
      ],
      "category": "การทำงาน"
    },
    {
      "id": "review",
      "en": "Sprint Review",
      "th": "ตรวจผลิตภัณฑ์และ feedback",
      "definition": "Scrum Team ร่วม stakeholders ตรวจสิ่งที่ทำและคุยทิศทางเพื่อเพิ่มคุณค่า",
      "example": "",
      "tip": "ไม่ใช่แค่ demo หรือรายงานสถานะ",
      "related": [
        "retro",
        "stakeholders"
      ],
      "category": "การทำงาน"
    },
    {
      "id": "retro",
      "en": "Sprint Retrospective",
      "th": "ทบทวนและปรับกระบวนการ",
      "definition": "ตรวจวิธีทำงาน ทีม เครื่องมือ และหาแนวปรับปรุงที่ลงมือได้",
      "example": "",
      "tip": "Review ดู Product ส่วน Retro ดู Process",
      "related": [
        "review",
        "improvement"
      ],
      "category": "การทำงาน"
    },
    {
      "id": "improvement",
      "en": "Actionable Improvement",
      "th": "การปรับปรุงที่ลงมือได้",
      "definition": "ข้อปรับปรุงที่ชัดเจนและนำไปปฏิบัติได้จริง",
      "example": "ตกลงให้ review โค้ดก่อนรวมงานทุกครั้ง",
      "tip": "",
      "related": [
        "retro"
      ],
      "category": "การทำงาน"
    },
    {
      "id": "flow",
      "en": "Flow Management",
      "th": "จัดการการไหลของงาน",
      "definition": "ลดงานรอ ลดการส่งต่อ และช่วยให้งานที่เริ่มแล้วเสร็จเพื่อส่งมอบคุณค่า",
      "example": "",
      "tip": "ไม่ใช่ทำให้ทุกคนเริ่มงานใหม่ตลอดเวลา",
      "related": [
        "handoff",
        "swarming"
      ],
      "category": "การทำงาน"
    },
    {
      "id": "handoff",
      "en": "Handoff",
      "th": "การส่งต่องาน",
      "definition": "ส่งงานให้คนหรือกลุ่มอื่นทำต่อ ซึ่งอาจทำให้รอและเข้าใจผิด",
      "example": "",
      "tip": "",
      "related": [
        "flow",
        "cross-functional"
      ],
      "category": "การทำงาน"
    },
    {
      "id": "mini-waterfall",
      "en": "Mini Waterfall",
      "th": "Waterfall ย่อยใน Sprint",
      "definition": "แบ่งช่วงออกแบบทั้งหมด เขียนทั้งหมด แล้วค่อยทดสอบทั้งหมดภายใน Sprint",
      "example": "",
      "tip": "พบปัญหาช้าและงานรอ อาจารย์ไม่แนะนำ",
      "related": [
        "flow",
        "role-based"
      ],
      "category": "การทำงาน"
    },
    {
      "id": "role-based",
      "en": "Role-based Thinking",
      "th": "คิดเฉพาะหน้าที่ตน",
      "definition": "ทำงานตาม role ของตนแล้วไปเริ่มตัวใหม่ โดยไม่สนว่างานเดิมของทีมเสร็จหรือยัง",
      "example": "",
      "tip": "ตรงข้ามกับมุมมองเน้นส่งมอบคุณค่าร่วมกัน",
      "related": [
        "value-focused"
      ],
      "category": "การทำงาน"
    },
    {
      "id": "value-focused",
      "en": "Value-delivery-focused Thinking",
      "th": "คิดเพื่อส่งมอบคุณค่า",
      "definition": "จัดงานและช่วยกันเพื่อให้งานของทีมเสร็จและส่งมอบคุณค่าได้จริง",
      "example": "",
      "tip": "",
      "related": [
        "flow",
        "swarming"
      ],
      "category": "การทำงาน"
    },
    {
      "id": "swarming",
      "en": "Swarming",
      "th": "ช่วยรุมงานให้เสร็จ",
      "definition": "สมาชิกที่มีเวลามาช่วยงานที่เริ่มแล้วให้จบก่อนเปิดงานใหม่",
      "example": "",
      "tip": "ต้องมีทั้งทักษะและความตั้งใจช่วย",
      "related": [
        "t-shaped",
        "musketeer"
      ],
      "category": "การทำงาน"
    },
    {
      "id": "pair",
      "en": "Pair Programming",
      "th": "เขียนโปรแกรมเป็นคู่",
      "definition": "ทำงานร่วมกันเพื่อร่วมคิด ตรวจงาน เรียนรู้ และได้ feedback เร็ว",
      "example": "",
      "tip": "ไม่ได้รับประกันว่าจะเร็วที่สุดเสมอ",
      "related": [
        "feedback",
        "swarming"
      ],
      "category": "การทำงาน"
    },
    {
      "id": "board",
      "en": "Task Board",
      "th": "กระดานสถานะงาน",
      "definition": "แสดงงาน ผู้ทำ และความก้าวหน้า เช่น To do, Doing, Done",
      "example": "",
      "tip": "เป็นเครื่องมือช่วย Visibility",
      "related": [
        "transparency"
      ],
      "category": "การทำงาน"
    },
    {
      "id": "debt",
      "en": "Technical Debt",
      "th": "หนี้ทางเทคนิค",
      "definition": "ทางลัดหรือคุณภาพภายในที่ไม่เหมาะสมซึ่งทำให้งานในอนาคตเสียแรงเพิ่ม",
      "example": "ดีไซน์ไม่รองรับแต่ใช้ทางลัดแทนการปรับ",
      "tip": "อย่าสะสมจนพัฒนาต่อได้ยาก",
      "related": [
        "refactoring",
        "excellence"
      ],
      "category": "การทำงาน"
    },
    {
      "id": "refactoring",
      "en": "Refactoring",
      "th": "ปรับโครงสร้างภายใน",
      "definition": "ปรับ design, structure หรือ implementation โดยรักษาพฤติกรรมภายนอกเดิม",
      "example": "แยกฟังก์ชันซ้ำและตั้งชื่อให้สื่อความ",
      "tip": "ไม่ใช่เพิ่ม feature ใหม่",
      "related": [
        "debt"
      ],
      "category": "การทำงาน"
    },
    {
      "id": "values",
      "en": "Scrum Values",
      "th": "ค่านิยม Scrum 5 ตัว",
      "definition": "Commitment, Focus, Courage, Openness, Respect",
      "example": "",
      "tip": "แยกจากเสาหลัก 3 ตัวและ Agile Manifesto 4 คู่",
      "related": [
        "commitment",
        "focus",
        "courage",
        "openness",
        "respect"
      ],
      "category": "ค่านิยมและทีม"
    },
    {
      "id": "commitment",
      "en": "Commitment",
      "th": "ความทุ่มเท",
      "definition": "ทุ่มเทต่อเป้าหมายและการช่วยเหลือกัน แม้เจออุปสรรค",
      "example": "",
      "tip": "อาจารย์อธิบายใกล้กับ Dedication มากกว่าแค่พูดสัญญา",
      "related": [
        "focus",
        "values"
      ],
      "category": "ค่านิยมและทีม"
    },
    {
      "id": "focus",
      "en": "Focus",
      "th": "มุ่งงานและเป้าหมาย",
      "definition": "ให้ความสนใจกับงาน Sprint เพื่อสร้างความก้าวหน้าต่อเป้าหมาย",
      "example": "",
      "tip": "",
      "related": [
        "values"
      ],
      "category": "ค่านิยมและทีม"
    },
    {
      "id": "courage",
      "en": "Courage",
      "th": "กล้าทำสิ่งที่ถูก",
      "definition": "กล้าทำสิ่งที่ควรทำและเผชิญปัญหายาก",
      "example": "กล้าบอกปัญหาหรือทักสิ่งที่ไม่เหมาะสม",
      "tip": "",
      "related": [
        "values"
      ],
      "category": "ค่านิยมและทีม"
    },
    {
      "id": "openness",
      "en": "Openness",
      "th": "เปิดเผยและเปิดรับ",
      "definition": "เปิดเผยเรื่องงานและความท้าทายกับทีมและผู้เกี่ยวข้อง",
      "example": "",
      "tip": "ไม่ปกปิดว่างานติดปัญหา",
      "related": [
        "values",
        "transparency"
      ],
      "category": "ค่านิยมและทีม"
    },
    {
      "id": "respect",
      "en": "Respect",
      "th": "เคารพและให้เกียรติ",
      "definition": "เคารพผู้อื่นว่าเป็นคนมีความสามารถและจัดการตนเองได้",
      "example": "หาสาเหตุก่อนกล่าวโทษว่าเพื่อนไม่รับผิดชอบ",
      "tip": "",
      "related": [
        "values"
      ],
      "category": "ค่านิยมและทีม"
    },
    {
      "id": "self-managing",
      "en": "Self-managing / Self-organizing",
      "th": "ทีมจัดการตนเอง",
      "definition": "ทีมตัดสินใจภายในว่าใครทำอะไร เมื่อไร และอย่างไร",
      "example": "",
      "tip": "อาจารย์อธิบายคำเดิม self-organizing และคำ self-managing ที่ใช้ในเนื้อหา 2020",
      "related": [
        "team"
      ],
      "category": "ค่านิยมและทีม"
    },
    {
      "id": "cross-functional",
      "en": "Cross-functional",
      "th": "ทักษะรวมกันครบ",
      "definition": "สมาชิกมีทักษะรวมกันเพียงพอสร้างคุณค่า ลดการพึ่งพาและส่งต่องานภายนอก",
      "example": "",
      "tip": "ไม่ใช่ทุกคนต้องเชี่ยวชาญทุกด้าน",
      "related": [
        "t-shaped",
        "handoff"
      ],
      "category": "ค่านิยมและทีม"
    },
    {
      "id": "t-shaped",
      "en": "T-shaped Skills",
      "th": "เชี่ยวชาญลึกและช่วยด้านอื่นได้",
      "definition": "มีความเชี่ยวชาญเฉพาะด้าน พร้อมความรู้กว้างพอร่วมมือและช่วยงานอื่น",
      "example": "",
      "tip": "คือช่วยได้ ส่วน Musketeer คืออยากช่วย",
      "related": [
        "musketeer",
        "swarming"
      ],
      "category": "ค่านิยมและทีม"
    },
    {
      "id": "musketeer",
      "en": "Musketeer Attitude",
      "th": "หนึ่งเพื่อทุกคน ทุกคนเพื่อหนึ่ง",
      "definition": "มองงานเป็นของทีมและพร้อมช่วยกันให้สำเร็จ",
      "example": "",
      "tip": "มีใจช่วยอย่างเดียวไม่พอ ต้องมีทักษะด้วย",
      "related": [
        "t-shaped",
        "swarming"
      ],
      "category": "ค่านิยมและทีม"
    },
    {
      "id": "bandwidth",
      "en": "High-bandwidth Communication",
      "th": "การสื่อสารข้อมูลได้มากและเร็ว",
      "definition": "สื่อสารได้รวดเร็ว ลดการตีความผิด เช่น face-to-face ตามเนื้อหาในวิชา",
      "example": "",
      "tip": "",
      "related": [
        "shared"
      ],
      "category": "ค่านิยมและทีม"
    },
    {
      "id": "collective",
      "en": "Collective Ownership",
      "th": "เป็นเจ้าของงานร่วมกัน",
      "definition": "มองงานและผลลัพธ์ว่าเป็นของทีม ไม่จบแค่ส่งส่วนของตน",
      "example": "",
      "tip": "",
      "related": [
        "working-team",
        "mutual"
      ],
      "category": "ค่านิยมและทีม"
    },
    {
      "id": "mutual",
      "en": "Mutual Accountability",
      "th": "รับผิดชอบร่วมกัน",
      "definition": "สมาชิกมีความรับผิดชอบต่อผลลัพธ์ร่วมกัน นอกเหนือจากงานรายบุคคล",
      "example": "",
      "tip": "",
      "related": [
        "accountability",
        "collective"
      ],
      "category": "ค่านิยมและทีม"
    },
    {
      "id": "loafing",
      "en": "Social Loafing",
      "th": "ลดความพยายามเมื่ออยู่ในกลุ่ม",
      "definition": "สมาชิกออกแรงน้อยลงเมื่อทำงานร่วมกลุ่ม",
      "example": "",
      "tip": "",
      "related": [
        "working-team"
      ],
      "category": "ค่านิยมและทีม"
    },
    {
      "id": "working-group",
      "en": "Working Group",
      "th": "กลุ่มทำงาน",
      "definition": "เน้นผู้นำชัด แบ่งงาน ผลงานและ accountability รายบุคคล",
      "example": "",
      "tip": "ต่างจากทีมที่ร่วมลงมือและรับผิดชอบผลงานร่วม",
      "related": [
        "working-team"
      ],
      "category": "ค่านิยมและทีม"
    },
    {
      "id": "working-team",
      "en": "Working Team",
      "th": "ทีมทำงานร่วมกัน",
      "definition": "มีเป้าหมายเฉพาะ ร่วมทำงาน มีผลงานและ accountability ร่วม",
      "example": "",
      "tip": "",
      "related": [
        "working-group",
        "collective"
      ],
      "category": "ค่านิยมและทีม"
    },
    {
      "id": "efficiency",
      "en": "Efficiency",
      "th": "ประสิทธิภาพ",
      "definition": "ใช้เวลา เงิน และแรงอย่างคุ้มค่า ลดความสูญเปล่า",
      "example": "",
      "tip": "เร็วและประหยัดแต่ไม่ได้ผล ยังไม่ตอบ effectiveness",
      "related": [
        "effectiveness"
      ],
      "category": "ค่านิยมและทีม"
    },
    {
      "id": "effectiveness",
      "en": "Effectiveness",
      "th": "ประสิทธิผล",
      "definition": "ได้ผลลัพธ์ตามที่ต้องการ",
      "example": "",
      "tip": "อาจารย์ชี้ให้ทำให้ได้ผล แล้วพัฒนาวิธีให้มีประสิทธิภาพขึ้น",
      "related": [
        "efficiency"
      ],
      "category": "ค่านิยมและทีม"
    },
    {
      "id": "trust",
      "en": "Trustworthiness",
      "th": "ความน่าไว้วางใจ",
      "definition": "ในสมการบทเรียน T = (C + R + I) / S",
      "example": "",
      "tip": "C, R, I เพิ่มช่วยให้ไว้ใจมากขึ้น ส่วน S เพิ่มทำให้ลดลง",
      "related": [
        "credibility",
        "reliability",
        "intimacy",
        "self-orientation"
      ],
      "category": "ค่านิยมและทีม"
    },
    {
      "id": "credibility",
      "en": "Credibility",
      "th": "ความน่าเชื่อถือ",
      "definition": "ความน่าเชื่อถือจากความรู้ ความสามารถ และสิ่งที่พูด",
      "example": "",
      "tip": "",
      "related": [
        "trust"
      ],
      "category": "ค่านิยมและทีม"
    },
    {
      "id": "reliability",
      "en": "Reliability",
      "th": "ความพึ่งพาได้",
      "definition": "ความไว้วางใจจากพฤติกรรมที่สม่ำเสมอและสิ่งที่ทำจริง",
      "example": "",
      "tip": "",
      "related": [
        "trust"
      ],
      "category": "ค่านิยมและทีม"
    },
    {
      "id": "intimacy",
      "en": "Intimacy",
      "th": "ความใกล้ชิดและปลอดภัย",
      "definition": "รู้สึกสนิทและปลอดภัยพอที่จะเปิดเผยเรื่องหรือปัญหา",
      "example": "",
      "tip": "",
      "related": [
        "trust"
      ],
      "category": "ค่านิยมและทีม"
    },
    {
      "id": "self-orientation",
      "en": "Self-orientation",
      "th": "มุ่งประโยชน์ตนเอง",
      "definition": "การแสดงว่าตนเองเป็นศูนย์กลางหรือหวังประโยชน์ให้ตนเอง",
      "example": "",
      "tip": "อยู่ส่วนหารของ Trust Equation",
      "related": [
        "trust"
      ],
      "category": "ค่านิยมและทีม"
    },
    {
      "id": "planning-phase",
      "en": "Planning (Pre-game)",
      "th": "วางแผนเตรียมก่อนเริ่มพัฒนา",
      "definition": "ช่วงเตรียมงานตามกรอบ Phases ในสไลด์วิชานี้ กำหนดภาพรวมผลิตภัณฑ์ Backlog ทีม เวลา ต้นทุน ความเสี่ยง และสถาปัตยกรรมระดับสูง ก่อนเข้าสู่ Development Sprints",
      "example": "ทีมตกลงว่าจะสร้างระบบอะไร จัดทีมและ Backlog ตั้งต้น แล้วประเมินเวลาและความเสี่ยง",
      "tip": "Planning ตรงนี้คือช่วงเตรียมโครงการ ส่วน Sprint Planning คือการวางแผนงานในแต่ละ Sprint",
      "related": [
        "closure",
        "defined-process",
        "planning",
        "upfront"
      ],
      "category": "Scrum Overview"
    },
    {
      "id": "closure",
      "en": "Closure (Post-game)",
      "th": "เตรียมปิดงานเพื่อเผยแพร่ผลิตภัณฑ์",
      "definition": "ช่วงเตรียมผลิตภัณฑ์ที่พัฒนาแล้วให้พร้อมเผยแพร่ทั่วไปตามกรอบ Phases ในสไลด์ เช่น รวมระบบ ทดสอบระบบ จัดทำเอกสารผู้ใช้ และฝึกอบรม",
      "example": "รวมส่วนประกอบของระบบ ทดสอบการทำงานร่วมกัน แล้วเตรียมคู่มือให้ผู้ใช้ก่อน Release",
      "tip": "เป็นช่วง Post-game ในกรอบที่วิชานี้สอน ไม่ใช่ Sprint Retrospective และไม่ได้หมายความว่าให้รอทดสอบทุกอย่างตอนท้าย",
      "related": [
        "planning-phase",
        "defined-process",
        "review",
        "retro"
      ],
      "category": "Scrum Overview"
    },
    {
      "id": "defined-process",
      "en": "Defined Process",
      "th": "กระบวนการที่กำหนดขั้นตอนชัดเจน",
      "definition": "กระบวนการที่รู้วิธีทำ ขั้นตอน ข้อมูลนำเข้า และผลลัพธ์อย่างชัดเจน จึงกำหนดแนวทางทำงานล่วงหน้าได้ เหมาะกับงานที่เข้าใจและคาดการณ์ได้",
      "example": "การจัดเตรียมเอกสารส่งมอบตามรายการที่รู้แน่นอนว่าต้องมีอะไรบ้าง",
      "tip": "จำคู่เปรียบเทียบ: Defined รู้ขั้นตอนชัด ส่วน Empirical ต้องตรวจผลจริงแล้วปรับ สไลด์จัด Planning และ Closure ไว้ฝั่ง Defined process",
      "related": [
        "empirical",
        "planning-phase",
        "closure"
      ],
      "category": "Agile และ Scrum"
    },
    {
      "id": "upfront",
      "en": "Up-front Planning",
      "th": "วางแผนล่วงหน้าก่อนลงมือ",
      "definition": "การเตรียมแผนก่อนเริ่มทำงาน เพื่อให้เห็นทิศทางและข้อจำกัด ถ้าเป็น Detailed Up-front Planning จะลงรายละเอียดจำนวนมากตั้งแต่ต้น ทั้งที่ข้อมูลอาจยังไม่ครบและเปลี่ยนภายหลัง",
      "example": "กำหนดเป้าหมายและแผน Release คร่าว ๆ ก่อนเริ่ม แต่ยังไม่จำเป็นต้องแตก Tasks ของทุก Sprint ล่วงหน้า",
      "tip": "Up-front ไม่ได้แปลว่าผิดเสมอ วิชานี้เน้นสมดุล: มีภาพรวมตั้งแต่ต้น แล้วลงรายละเอียดแบบ Just-in-time เมื่อใกล้ทำ",
      "related": [
        "jit",
        "stepwise",
        "planning-phase"
      ],
      "category": "Scrum Overview"
    }
  ],
  "chapters": [
    {
      "id": "overview",
      "short": "เริ่มอ่านตรงนี้",
      "title": "ห้องอ่านสอบ Agile ของคุณ",
      "subtitle": "อ่านให้เข้าใจ เปิดศัพท์ข้าง ๆ และทบทวนจุดที่อาจารย์ย้ำ โดยไม่เสียตำแหน่งอ่าน",
      "group": "เริ่มต้น",
      "minutes": 3,
      "terms": [
        "agile",
        "scrum",
        "empirical",
        "sprint",
        "backlog",
        "po"
      ],
      "sources": [
        "outline",
        "g15"
      ],
      "blocks": [
        {
          "type": "stats",
          "items": [
            [
              "5",
              "บทเรียนครบเนื้อหา"
            ],
            [
              "127",
              "คำศัพท์กดดูได้"
            ],
            [
              "20 ต.ค.",
              "วันสอบ 2569"
            ]
          ]
        },
        {
          "type": "note",
          "title": "เริ่มใช้ได้เลย",
          "text": "กดคำที่มีเส้นประ เช่น [[empirical]] เพื่อเปิดความหมายทางขวา เนื้อหาตรงกลางจะอยู่ที่เดิม บนจอแคบจะเปิดแผงคำศัพท์ให้ แล้วปิดกลับมาอ่านต่อได้",
          "tone": "green"
        },
        {
          "type": "heading",
          "text": "เส้นทางอ่านก่อนสอบ"
        },
        {
          "type": "paragraph",
          "text": "เริ่มจาก Agile และเสาหลัก → ภาพรวม Scrum → Product Backlog และ Release → Sprint Planning และ Execution → Values และ Team จากนั้นใช้หน้าทวนก่อนสอบเช็กคู่ที่สับสน"
        },
        {
          "type": "cards",
          "ids": [
            "quick-review",
            "agile",
            "empirical",
            "scrum-overview",
            "backlog",
            "release",
            "sprint-planning",
            "sprint-execution",
            "values",
            "team"
          ]
        },
        {
          "type": "heading",
          "text": "ระดับของจุดเน้น"
        },
        {
          "type": "list",
          "items": [
            "**อาจารย์พูดถึงการออกสอบโดยตรง:** Empirical Process Control ใน G2 บท 1 และการออกข้อสอบเรื่อง Scrum Values ใน G1 บท 5",
            "**อาจารย์ระบุให้เน้น:** คุณลักษณะ Developers สี่ข้อแรกใน G2 บท 5",
            "**อาจารย์ย้ำหรือให้แยกความหมาย:** อธิบายในกล่องแต่ละบท ไม่ได้หมายความว่ายืนยันจำนวนข้อสอบรายหัวข้อ"
          ],
          "ordered": false
        },
        {
          "type": "note",
          "title": "รูปแบบสอบจากคำพูดในคาบ",
          "text": "G1 คาบสุดท้ายบอกว่าน่าจะมีทั้งเลือกคำตอบเดียวและหลายคำตอบ และคาดว่าไม่มีข้อเขียน เป็นข้อมูลเบื้องต้นใน transcript ไม่ใช่ประกาศข้อสอบฉบับทางการ",
          "tone": "gold"
        },
        {
          "type": "heading",
          "text": "อ่านให้สบายขึ้น"
        },
        {
          "type": "list",
          "items": [
            "เลือกบทจากซ้าย แต่ละบทแยกกันเพื่อลดการเลื่อน",
            "ค้นหาศัพท์ไทยหรืออังกฤษจากช่องขวา หรือกด Ctrl+K เพื่อค้นหาทั้งเนื้อหา",
            "ปรับ A− / A+ และโหมดสว่างหรือมืดได้",
            "กดอ่านแล้วเพื่อเก็บความคืบหน้า เว็บจำบทล่าสุดและตำแหน่งอ่านในเบราว์เซอร์นี้"
          ],
          "ordered": false
        }
      ]
    },
    {
      "id": "quick-review",
      "short": "ทวนก่อนสอบ",
      "title": "ทวนประเด็นที่ต้องแม่นก่อนสอบ",
      "subtitle": "รวมจุดเน้นจาก transcript และคู่ศัพท์ที่ช้อยส์อาจสลับให้สับสน",
      "group": "เริ่มต้น",
      "format": "quick",
      "minutes": 8,
      "terms": [
        "empirical",
        "transparency",
        "inspection",
        "adaptation",
        "dod",
        "ac",
        "review",
        "retro",
        "t-shaped",
        "musketeer",
        "deep",
        "values",
        "self-managing",
        "cross-functional",
        "iterative",
        "incremental",
        "deliver",
        "release",
        "backlog",
        "sprint-backlog",
        "detailed",
        "emergent",
        "pbi",
        "task",
        "responsibility",
        "accountability",
        "efficiency",
        "effectiveness",
        "po",
        "developers",
        "sm",
        "team",
        "daily",
        "wont",
        "refactoring"
      ],
      "sources": [
        "g21",
        "g12a",
        "g13",
        "g23",
        "g15",
        "g25"
      ],
      "blocks": [
        {
          "type": "heading",
          "text": "เรื่องที่อาจารย์กล่าวถึงโดยตรง"
        },
        {
          "type": "note",
          "title": "G2 บท 1 · กล่าวถึงการออกสอบ",
          "text": "อาจารย์ระบุ [[empirical|Empirical Process Control]] ว่า “ออกสอบเสมอ” และให้จำทั้งชื่อกับความหมายของ [[transparency]], [[inspection]], [[adaptation]]",
          "tone": "gold"
        },
        {
          "type": "note",
          "title": "G1 บท 5 · กล่าวถึงการออกข้อสอบ",
          "text": "อาจารย์บอกว่า [[values|Scrum Values]] เป็นเรื่องออกข้อสอบง่าย เช่น ถามว่าอะไรเป็นหรือไม่เป็น แต่ต้องการให้เข้าใจ ไม่ใช่ท่องชื่ออย่างเดียว",
          "tone": "gold"
        },
        {
          "type": "note",
          "title": "G2 บท 5 · ระบุให้เน้น 4 ตัวแรก",
          "text": "คุณลักษณะ Developers ที่เน้นคือ [[self-managing]], [[cross-functional]], [[t-shaped]] และ [[musketeer]]",
          "tone": "gold"
        },
        {
          "type": "heading",
          "text": "คู่ที่ต้องแยกให้ออก"
        },
        {
          "type": "table",
          "headers": [
            "คู่คำ",
            "แยกอย่างไร"
          ],
          "rows": [
            [
              "[[iterative]] / [[incremental]]",
              "ทำซ้ำปรับปรุง / เพิ่มความสามารถ"
            ],
            [
              "[[deliver]] / [[release]]",
              "ส่งมอบ / นำใช้งานจริง"
            ],
            [
              "[[backlog]] / [[sprint-backlog]]",
              "งานผลิตภัณฑ์ / งาน Sprint พร้อมแผน"
            ],
            [
              "[[detailed]] / [[emergent]]",
              "เพิ่มรายละเอียดตามความใกล้ที่จะทำ / เปลี่ยนตามข้อมูลใหม่"
            ],
            [
              "แตก [[pbi]] / แตก [[task]]",
              "PBI ย่อยยังสร้างคุณค่า / Tasks คือวิธีทำ PBI"
            ],
            [
              "[[dod]] / [[ac]]",
              "มาตรฐานร่วม / เงื่อนไขเฉพาะเรื่อง"
            ],
            [
              "[[review]] / [[retro]]",
              "Product / Process"
            ],
            [
              "[[responsibility]] / [[accountability]]",
              "หน้าที่ / เจ้าของผลลัพธ์"
            ],
            [
              "[[t-shaped]] / [[musketeer]]",
              "ช่วยได้ / อยากช่วย"
            ],
            [
              "[[efficiency]] / [[effectiveness]]",
              "ใช้ทรัพยากรคุ้ม / ได้ผลตามเป้าหมาย"
            ]
          ]
        },
        {
          "type": "heading",
          "text": "หน้าที่ที่ห้ามสลับ"
        },
        {
          "type": "table",
          "headers": [
            "ใคร",
            "Accountability สำคัญ"
          ],
          "rows": [
            [
              "[[po]]",
              "เพิ่มคุณค่าผลิตภัณฑ์และจัดการ Product Backlog"
            ],
            [
              "[[developers]]",
              "สร้าง Increment, สร้าง Sprint Backlog, ทำตาม DoD, ปรับแผนรายวัน"
            ],
            [
              "[[sm]]",
              "ส่งเสริม Scrum และช่วยให้ทีมมีประสิทธิผล"
            ],
            [
              "[[team]]",
              "ร่วมกันสร้าง Increment ที่มีคุณค่าและใช้งานได้ทุก Sprint"
            ]
          ]
        },
        {
          "type": "heading",
          "text": "ข้อความที่ต้องระวัง"
        },
        {
          "type": "list",
          "items": [
            "Agile **ยังมีแผนและเอกสาร** สิ่งด้านขวาของ Manifesto ยังมีคุณค่า",
            "ยินดีรับการเปลี่ยนแปลง **ไม่เท่ากับรับทุกอย่างทันที** โดยไม่ประเมิน",
            "[[transparency]] ต้องเห็นข้อมูลและเข้าใจตรงกัน",
            "Sprint จบแล้ว **ไม่จำเป็นต้อง Release จริงทุกครั้ง**",
            "[[daily]] ใช้ sync และปรับแผน แยกแก้ปัญหายาวออกไป",
            "PO **ไม่บังคับจำนวนงานที่ Developers ต้องรับ**",
            "[[cross-functional]] ไม่ได้แปลว่าทุกคนเชี่ยวชาญทุกอย่าง",
            "[[wont]] ไม่ได้แปลว่าไม่ทำตลอดไป",
            "[[refactoring]] คงพฤติกรรมภายนอก ไม่ใช่เพิ่ม feature ใหม่"
          ],
          "ordered": false
        },
        {
          "type": "heading",
          "text": "ตัวเลขและข้อสังเกต"
        },
        {
          "type": "table",
          "headers": [
            "เรื่อง",
            "เนื้อหาในวิชา"
          ],
          "rows": [
            [
              "Sprint",
              "1–4 สัปดาห์ ระยะเวลาสม่ำเสมอ"
            ],
            [
              "Planning / Review / Retro",
              "เนื้อหาหลักใช้สูงสุด 8 / 4 / 3 ชั่วโมง สำหรับ Sprint 4 สัปดาห์"
            ],
            [
              "Daily Scrum",
              "15 นาที"
            ],
            [
              "MRFs",
              "แนวทางประมาณ 60–70% ของเวลา Release เพื่อเผื่อความเสี่ยง"
            ],
            [
              "ขนาดทีม",
              "Scrum Team โดยทั่วไปไม่เกิน 10 คน; แนวทาง Dev Team จากหนังสือ 5–9 คน"
            ]
          ]
        },
        {
          "type": "note",
          "title": "ตัวเลข Retro ในสไลด์ไม่ตรงกัน",
          "text": "เนื้อหาหลักระบุ 3 ชั่วโมง แต่ตารางท้ายบท 2 ระบุ 4 ชั่วโมง อาจารย์รอบเช้าพูดถึงความต่างและบอกไม่ต้องสนใจตัวเลขมาก ให้เข้าใจ timeboxing เป็นหลัก",
          "tone": "gold"
        },
        {
          "type": "quiz",
          "question": "ทีมเห็นกระดานเดียวกัน แต่เข้าใจ Done คนละอย่าง เกี่ยวกับอะไร?",
          "answer": "[[transparency]] เพราะมี Visibility แต่ขาด Shared understanding"
        },
        {
          "type": "quiz",
          "question": "ทำ Back-end เสร็จ แต่ยังไม่มี Front-end เรียกว่าการแตก PBI ที่เหมาะสมแล้วหรือยัง?",
          "answer": "ยังไม่ใช่แนวการแตก PBI ที่สอน ควรแตกให้แต่ละส่วนยังใช้งานหรือสาธิตเพื่อรับ feedback ได้ การแบ่ง Front/Back/DB เป็น Tasks มากกว่า"
        }
      ]
    },
    {
      "id": "agile",
      "short": "01 · Agile Principles",
      "title": "Agile เริ่มจากคุณค่าที่ส่งมอบ",
      "subtitle": "Manifesto 4 คู่ หลักการ 12 ข้อ และการทำงานเป็นรอบที่เรียนรู้ได้",
      "group": "บทเรียน 1",
      "minutes": 10,
      "terms": [
        "agile",
        "value",
        "manifesto",
        "principles",
        "iterative",
        "incremental",
        "stepwise",
        "timebox",
        "jit",
        "feedback",
        "sustainable",
        "simplicity",
        "excellence",
        "deliver",
        "release",
        "working-software",
        "scope"
      ],
      "sources": [
        "s1",
        "g11",
        "g21"
      ],
      "blocks": [
        {
          "type": "paragraph",
          "text": "[[agile]] มุ่งทำให้ลูกค้าพึงพอใจด้วยการส่งมอบ [[working-software|ซอฟต์แวร์ที่ใช้งานได้]] และมี [[value|คุณค่า]] ตั้งแต่ต้นและอย่างต่อเนื่อง แล้วเรียนรู้จาก feedback เพื่อปรับสิ่งที่ทำ"
        },
        {
          "type": "note",
          "title": "อาจารย์ย้ำ",
          "text": "เร็วอย่างเดียวไม่พอ ถ้าสิ่งที่ทำไม่ตอบความต้องการ ลูกค้าก็ไม่ได้คุณค่า และ Agile ไม่สามารถทดแทนความสามารถทางเทคนิคของทีม",
          "tone": "gold"
        },
        {
          "type": "heading",
          "text": "Iterative กับ Incremental"
        },
        {
          "type": "table",
          "headers": [
            "แนวคิด",
            "ความหมาย",
            "ตัวอย่าง"
          ],
          "rows": [
            [
              "[[iterative]]",
              "ทำซ้ำเพื่อปรับปรุง",
              "ผู้ใช้ลองแล้วปรับหน้าค้นหาให้ง่ายขึ้น"
            ],
            [
              "[[incremental]]",
              "เพิ่มความสามารถทีละส่วน",
              "เพิ่มค้นหา → สั่งซื้อ → ชำระเงิน"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "สองแนวคิดเกิดร่วมกันได้ ส่วน [[stepwise]] คือค่อย ๆ ลงรายละเอียด โดยโฟกัสสิ่งสำคัญที่สุดในขณะนั้น"
        },
        {
          "type": "heading",
          "text": "Agile Manifesto 4 คู่"
        },
        {
          "type": "table",
          "headers": [
            "ให้คุณค่ามากกว่า",
            "สิ่งที่นำมาเปรียบเทียบ"
          ],
          "rows": [
            [
              "Individuals and interactions",
              "Processes and tools"
            ],
            [
              "Working software",
              "Comprehensive documentation"
            ],
            [
              "Customer collaboration",
              "Contract negotiation"
            ],
            [
              "Responding to change",
              "Following a plan"
            ]
          ]
        },
        {
          "type": "note",
          "title": "จุดที่ต้องเข้าใจ",
          "text": "สิ่งด้านขวายังมีคุณค่า Agile ยังมีแผน เครื่องมือ สัญญา และเอกสาร ส่วน Individuals and interactions ต้องมาด้วยกัน ไม่ใช่พูดว่าคุยเก่งสำคัญกว่าความสามารถของคนเสมอไป",
          "tone": "gold"
        },
        {
          "type": "heading",
          "text": "หลักการ Agile 12 ข้อ"
        },
        {
          "type": "list",
          "items": [
            "ทำให้ลูกค้าพึงพอใจด้วยการส่งมอบซอฟต์แวร์ที่มีคุณค่าตั้งแต่ต้นและต่อเนื่อง",
            "ยินดีรับความต้องการที่เปลี่ยน แม้ช่วงท้ายของการพัฒนา",
            "ส่งมอบซอฟต์แวร์ที่ใช้งานได้บ่อย โดยชอบรอบเวลาที่สั้นกว่า",
            "ฝั่งธุรกิจกับนักพัฒนาทำงานร่วมกันทุกวัน",
            "สร้างงานรอบคนมีแรงจูงใจ สนับสนุนสภาพแวดล้อมและไว้วางใจให้ทำงาน",
            "การสื่อสารแบบเผชิญหน้ามีประสิทธิภาพและประสิทธิผลสูง",
            "ซอฟต์แวร์ที่ใช้งานได้เป็นตัววัดความก้าวหน้าหลัก",
            "ทำงานด้วย [[sustainable|Sustainable pace]]",
            "ใส่ใจ [[excellence|Technical excellence]] และการออกแบบที่ดี",
            "[[simplicity]] ลดงานที่ไม่จำเป็นต้องทำ",
            "สถาปัตยกรรม ความต้องการ และการออกแบบที่ดีเกิดจากทีมจัดการตนเอง",
            "ทบทวนเป็นระยะแล้วปรับวิธีทำงานให้มีประสิทธิผลขึ้น"
          ],
          "ordered": true
        },
        {
          "type": "note",
          "title": "ระวังการตีความ",
          "text": "ยินดีรับการเปลี่ยนแปลง ไม่ได้แปลว่าต้องรับทุกคำขอทันทีโดยไม่ดูผลกระทบ และ Simplicity ไม่ใช่ทำลวกหรือลดคุณภาพ",
          "tone": "gold"
        },
        {
          "type": "heading",
          "text": "Timeboxing และ Just-in-time"
        },
        {
          "type": "paragraph",
          "text": "[[timebox]] กำหนดกรอบเวลาตายตัว จึงต้องทำสิ่งสำคัญก่อน ในภาพ DSDM กำหนด Time, Cost และ Quality แล้วปรับ Features/[[scope|Scope]] ให้เหมาะสม เมื่อเวลาไม่พอจึงไม่ควรลดคุณภาพเพื่อทำทุกอย่างให้ครบ"
        },
        {
          "type": "paragraph",
          "text": "[[jit]] เก็บรายละเอียดและทำสิ่งที่จำเป็นเมื่อใกล้เวลาต้องใช้ ลดการทำงานล่วงหน้าแล้วต้องทิ้ง แต่ยังต้องมีภาพรวมสำหรับกำหนดทิศทาง"
        },
        {
          "type": "heading",
          "text": "Fast Feedback และ Heart of Agile"
        },
        {
          "type": "flow",
          "items": [
            [
              "Collaborate",
              "ร่วมพัฒนาไอเดีย"
            ],
            [
              "Deliver",
              "ทำสิ่งเล็กให้ทดลองจริง"
            ],
            [
              "Reflect",
              "ทบทวนสิ่งที่เรียนรู้"
            ],
            [
              "Improve",
              "ปรับสิ่งที่ทำ"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "[[feedback]] ที่เป็นประโยชน์ควรมาจากสิ่งที่ใช้งานได้ หากให้ของที่ยังเสียไปทดลอง คำตอบจะติดอยู่แค่ “ใช้ไม่ได้” มากกว่าความเหมาะสมกับความต้องการ"
        },
        {
          "type": "heading",
          "text": "Deliver ไม่เท่ากับ Release"
        },
        {
          "type": "table",
          "headers": [
            "[[deliver]]",
            "[[release]]"
          ],
          "rows": [
            [
              "ส่งมอบสิ่งที่พัฒนา",
              "นำออกให้ใช้งานจริง"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "ส่งมอบได้ทุก Sprint แต่จังหวะนำไปใช้จริงต้องพิจารณาธุรกิจร่วมด้วย"
        },
        {
          "type": "quiz",
          "question": "Agile ไม่ต้องมีเอกสาร ถูกหรือผิด?",
          "answer": "ผิด เอกสารยังมีคุณค่า แต่ให้น้ำหนัก Working software มากกว่า"
        }
      ]
    },
    {
      "id": "empirical",
      "short": "01 · Scrum และ 3 เสาหลัก",
      "title": "รู้จากการลงมือ ตรวจ แล้วปรับ",
      "subtitle": "Empirical Process Control เป็นจุดที่อาจารย์กล่าวถึงการออกสอบโดยตรง",
      "group": "บทเรียน 1",
      "minutes": 6,
      "terms": [
        "scrum",
        "framework",
        "empirical",
        "transparency",
        "visibility",
        "shared",
        "inspection",
        "adaptation"
      ],
      "sources": [
        "s1",
        "g11",
        "g21"
      ],
      "blocks": [
        {
          "type": "paragraph",
          "text": "[[scrum]] เป็น [[framework]] สำหรับปัญหาซับซ้อนที่ต้องปรับตัว เพื่อส่งมอบผลิตภัณฑ์ที่มีคุณค่าสูง ลักษณะคือ Lightweight, Simple to understand, Difficult to master"
        },
        {
          "type": "paragraph",
          "text": "แนวคิดทีมรักบี้คือเคลื่อนไปด้วยกัน แทนการส่งงานเป็นทอด ๆ แบบวิ่งผลัด เนื้อหาย้ำ **speed และ flexibility** ในการพัฒนาผลิตภัณฑ์ใหม่"
        },
        {
          "type": "heading",
          "text": "แนวคิดพื้นฐานที่อยู่ในสไลด์"
        },
        {
          "type": "table",
          "headers": [
            "แนวคิด",
            "ใจความ"
          ],
          "rows": [
            [
              "Built-in instability",
              "มีเป้าหมายท้าทายและพื้นที่ให้ค้นหาวิธี"
            ],
            [
              "Self-organizing project teams",
              "ทีมจัดการตนเอง"
            ],
            [
              "Overlapping development phases",
              "กิจกรรมพัฒนาทับซ้อนกันได้"
            ],
            [
              "Multilearning",
              "เรียนรู้หลายด้านและเรียนรู้ร่วมกัน"
            ],
            [
              "Subtle control",
              "ควบคุมเหมาะสมโดยไม่สั่งทุกขั้น"
            ],
            [
              "Organizational transfer of learning",
              "ถ่ายทอดสิ่งที่เรียนรู้ภายในองค์กร"
            ]
          ]
        },
        {
          "type": "heading",
          "text": "Empirical Process Control"
        },
        {
          "type": "note",
          "title": "G2 บท 1 · อาจารย์ระบุว่าออกสอบเสมอ",
          "text": "[[empirical]] ใช้ประสบการณ์ การสังเกต และการทดลอง ตัดสินใจจากสิ่งที่รู้จริง เพราะไม่สามารถคาดเดาการพัฒนาซอฟต์แวร์ทั้งหมดล่วงหน้าได้",
          "tone": "gold"
        },
        {
          "type": "table",
          "headers": [
            "เสาหลัก",
            "ความหมาย",
            "ตัวอย่าง"
          ],
          "rows": [
            [
              "[[transparency]]",
              "เห็นข้อมูลสำคัญและเข้าใจตรงกัน",
              "ทุกคนเข้าใจนิยาม Done เหมือนกัน"
            ],
            [
              "[[inspection]]",
              "ตรวจเพื่อพบความคลาดเคลื่อน",
              "ดูความก้าวหน้าเทียบ Sprint Goal"
            ],
            [
              "[[adaptation]]",
              "ปรับเมื่อพบสิ่งไม่เหมาะสม",
              "ปรับแผนจากปัญหาที่ตรวจพบ"
            ]
          ]
        },
        {
          "type": "note",
          "title": "อาจารย์ย้ำทั้งสองกลุ่ม",
          "text": "[[transparency]] = [[visibility]] + [[shared]] เห็นข้อมูลเดียวกันแต่เข้าใจต่างกันยังไม่พอ ต้องตรวจทั้ง Product และ Process แล้วปรับให้ทันเวลา",
          "tone": "gold"
        },
        {
          "type": "flow",
          "items": [
            [
              "Transparency",
              "ข้อมูลจริงและเข้าใจตรงกัน"
            ],
            [
              "Inspection",
              "ตรวจสิ่งที่เกิดขึ้น"
            ],
            [
              "Adaptation",
              "ปรับจากสิ่งที่พบ"
            ]
          ]
        },
        {
          "type": "quiz",
          "question": "มีการตรวจแต่ไม่ยอมปรับ ถือว่าใช้ครบสามเสาหรือยัง?",
          "answer": "ยังขาด [[adaptation]] การตรวจควรนำไปสู่การปรับเมื่อพบสิ่งที่ไม่เหมาะสม"
        }
      ]
    },
    {
      "id": "scrum-overview",
      "short": "02 · Scrum Overview",
      "title": "เห็นภาพรวม Scrum ก่อนลงรายละเอียด",
      "subtitle": "Phases, planning, artifacts และ events ที่ต้องแยกวัตถุประสงค์ให้ได้",
      "group": "บทเรียน 2",
      "minutes": 9,
      "terms": [
        "scrum",
        "team",
        "po",
        "developers",
        "sm",
        "responsibility",
        "accountability",
        "stepwise",
        "backlog",
        "sprint-backlog",
        "sprint",
        "planning",
        "daily",
        "review",
        "retro",
        "commitment",
        "execution",
        "improvement",
        "planning-phase",
        "closure",
        "defined-process",
        "empirical",
        "upfront",
        "jit"
      ],
      "sources": [
        "s2",
        "g12a",
        "g12b"
      ],
      "blocks": [
        {
          "type": "heading",
          "text": "Phases ตามกรอบที่สอนในวิชานี้"
        },
        {
          "type": "table",
          "headers": [
            "ช่วง",
            "ทำอะไร"
          ],
          "rows": [
            [
              "Pre-game",
              "วางแผน จัดทีม Backlog เวลา ต้นทุน ความเสี่ยง และสถาปัตยกรรมระดับสูง"
            ],
            [
              "Game",
              "ทำ Development Sprints ต่อเนื่องเพื่อพัฒนาความสามารถ"
            ],
            [
              "Post-game",
              "เตรียม Release เช่น งานทดสอบรวม เอกสารผู้ใช้ และการฝึกอบรม"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "[[planning-phase|Planning]] และ [[closure|Closure]] มีลักษณะ [[defined-process|Defined process]] มากกว่า ส่วน [[sprint|Sprint]] ใช้ [[empirical|Empirical process]] เพราะมีความไม่แน่นอน ทีมจึงต้องมีการควบคุมและจัดการความเสี่ยง"
        },
        {
          "type": "note",
          "title": "อาจารย์อธิบาย",
          "text": "สถาปัตยกรรมตอนต้นเป็น High-level design รายละเอียดค่อยเพิ่มและปรับได้ระหว่างพัฒนา ไม่ใช่ออกแบบทุกอย่างจนจบตั้งแต่แรก",
          "tone": "gold"
        },
        {
          "type": "heading",
          "text": "หน้าที่กับผลลัพธ์"
        },
        {
          "type": "table",
          "headers": [
            "[[responsibility]]",
            "[[accountability]]"
          ],
          "rows": [
            [
              "หน้าที่ที่ต้องทำ / ใครทำอะไร",
              "เป็นเจ้าของและตอบต่อผลลัพธ์"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Scrum Team มี [[po]] ดูคุณค่าและ Backlog, [[developers]] สร้าง Increment และ [[sm]] สนับสนุน Scrum ทั้งทีม accountable ต่อ Increment ที่มีคุณค่าและใช้งานได้"
        },
        {
          "type": "heading",
          "text": "สมดุล [[upfront|Up-front]] กับ [[jit|Just-in-time]]"
        },
        {
          "type": "list",
          "items": [
            "[[upfront|Detailed Up-front Planning]] เสี่ยงข้อมูลไม่ครบ เหตุการณ์เปลี่ยน แผนถูกทิ้งหรือเสียแรงแก้",
            "เสียโอกาสสร้าง Working software และอาจยึดแผนแม้ควรเปลี่ยน",
            "ใช้ [[stepwise]] สมดุลการมีภาพรวมกับลงรายละเอียดเมื่อใกล้ทำ"
          ],
          "ordered": false
        },
        {
          "type": "flow",
          "items": [
            [
              "Product",
              "เป้าหมายผลิตภัณฑ์"
            ],
            [
              "Release",
              "สิ่งที่จะส่งออกใช้"
            ],
            [
              "Sprint",
              "งานรอบนี้"
            ],
            [
              "Daily",
              "แผนรายวัน"
            ]
          ]
        },
        {
          "type": "heading",
          "text": "Product Backlog กับ Sprint Backlog"
        },
        {
          "type": "table",
          "headers": [
            "ประเด็น",
            "[[backlog]]",
            "[[sprint-backlog]]"
          ],
          "rows": [
            [
              "ขอบเขต",
              "งานผลิตภัณฑ์ทั้งหมด",
              "PBI ที่เลือกพร้อมแผน Sprint"
            ],
            [
              "ผู้รับผิดชอบหลัก",
              "PO จัดการและเรียงลำดับ",
              "Developers เป็นเจ้าของแผน"
            ],
            [
              "การเปลี่ยน",
              "เปลี่ยนตามข้อมูลและสถานการณ์",
              "ปรับแผนเมื่อเรียนรู้เพิ่ม"
            ]
          ]
        },
        {
          "type": "heading",
          "text": "กิจกรรมใน Sprint"
        },
        {
          "type": "table",
          "headers": [
            "กิจกรรม",
            "วัตถุประสงค์",
            "Timebox จากเนื้อหาหลัก"
          ],
          "rows": [
            [
              "[[planning]]",
              "Why / What / How",
              "สูงสุด 8 ชั่วโมง สำหรับ Sprint 4 สัปดาห์"
            ],
            [
              "[[execution]]",
              "สร้าง Increment ตามเป้าหมาย",
              "ทำภายใน Sprint"
            ],
            [
              "[[daily]]",
              "Sync ตรวจและปรับแผน",
              "15 นาที"
            ],
            [
              "[[review]]",
              "Inspect Product และรับ feedback",
              "สูงสุด 4 ชั่วโมง สำหรับ Sprint 4 สัปดาห์"
            ],
            [
              "[[retro]]",
              "Inspect Process และปรับปรุง",
              "สูงสุด 3 ชั่วโมง สำหรับ Sprint 4 สัปดาห์"
            ]
          ]
        },
        {
          "type": "note",
          "title": "อาจารย์ย้ำ",
          "text": "Review ดู Product และรับ feedback จาก stakeholders ไม่ใช่แค่ demo หรือ status meeting ส่วน Retro ดู Process และต้องได้ [[improvement|Actionable improvement]]",
          "tone": "gold"
        },
        {
          "type": "note",
          "title": "สไลด์มีตัวเลขต่างกัน",
          "text": "ตารางท้ายบทระบุ Retro 4 ชั่วโมง ขณะที่เนื้อหาหลักระบุ 3 ชั่วโมง อาจารย์รอบเช้าชี้ความต่างและบอกไม่ต้องสนใจตัวเลขมาก ให้เข้าใจว่าต้อง timebox",
          "tone": "gold"
        },
        {
          "type": "heading",
          "text": "Team Commitment"
        },
        {
          "type": "paragraph",
          "text": "ต้อง **Appropriate และ Realistic** Developers ดูเวลาจริงและความสามารถก่อนตกลง PO และ SM ไม่ได้ตัดสินแทนว่าต้องรับงานเท่าไร แต่ SM ช่วย challenge ความเหมาะสมได้"
        },
        {
          "type": "quiz",
          "question": "PO สั่งให้ทีมรับ 10 PBI โดยไม่ต้องดู capacity ได้หรือไม่?",
          "answer": "ไม่ใช่แนวที่สอน Developers ต้องประเมินงานและ capacity เพื่อทำ commitment ที่เหมาะสมและเป็นจริง"
        }
      ]
    },
    {
      "id": "backlog",
      "short": "03 · Product Backlog",
      "title": "จากความต้องการ สู่ Backlog ที่พร้อมทำ",
      "subtitle": "PBI, User Story, DEEP และการแตกงานให้ยังมีคุณค่า",
      "group": "บทเรียน 3",
      "minutes": 12,
      "terms": [
        "backlog",
        "pbi",
        "feature",
        "defect",
        "technical-work",
        "knowledge",
        "story",
        "epic",
        "deep",
        "detailed",
        "emergent",
        "estimated",
        "prioritized",
        "estimate",
        "risk",
        "refinement",
        "task",
        "happy",
        "unhappy",
        "business-rule"
      ],
      "sources": [
        "s3",
        "g13",
        "g23"
      ],
      "blocks": [
        {
          "type": "paragraph",
          "text": "[[backlog]] เป็นแหล่งรวมงานผลิตภัณฑ์เพียงแหล่งเดียว เป็นรายการที่จัดลำดับ ปรับเปลี่ยนได้ และไม่ถือว่าสมบูรณ์ตายตัว มีข้อมูลเช่น description, order, estimate และ value แต่ละรายการเรียก [[pbi]]"
        },
        {
          "type": "heading",
          "text": "PBI มีได้หลายประเภท"
        },
        {
          "type": "table",
          "headers": [
            "ประเภท",
            "ตัวอย่าง"
          ],
          "rows": [
            [
              "[[feature]]",
              "เพิ่มการชำระเงิน"
            ],
            [
              "[[defect]]",
              "แก้ยอดเงินผิด"
            ],
            [
              "[[technical-work]]",
              "อัปเดตฐานข้อมูล"
            ],
            [
              "[[knowledge]]",
              "ทำ PoC เพื่อลดความไม่รู้"
            ]
          ]
        },
        {
          "type": "note",
          "title": "อาจารย์ย้ำ",
          "text": "เก็บร่วมกันเพื่อจัดลำดับข้ามประเภทได้ Bug ที่ทำให้ระบบล่มอาจสำคัญกว่าฟีเจอร์ใหม่ PO accountable แต่ต้องฟังข้อมูล Developers และ stakeholders ด้วย",
          "tone": "gold"
        },
        {
          "type": "heading",
          "text": "User Story คือจุดเริ่มสนทนา"
        },
        {
          "type": "code",
          "label": "รูปแบบ User Story",
          "text": "As a <User / Role>, I want to <Action>, so that <Benefit / Value>\n\nในฐานะลูกค้า ฉันต้องการยกเลิกการจอง\nเพื่อไม่ต้องรับบริการในวันที่ไม่สะดวก"
        },
        {
          "type": "paragraph",
          "text": "[[story]] ยังต้องคุยรายละเอียด เช่น ยกเลิกก่อนกี่ชั่วโมง คืนเงินเท่าไร คืนเป็นเงินหรือเครดิต และส่งการยืนยันอย่างไร เรื่องใหญ่ระดับ [[epic]] ต้องค่อยแตกให้เล็กลง"
        },
        {
          "type": "heading",
          "text": "DEEP"
        },
        {
          "type": "table",
          "headers": [
            "คุณสมบัติ",
            "สิ่งที่ต้องเข้าใจ"
          ],
          "rows": [
            [
              "[[detailed]]",
              "งานใกล้ทำ: เล็กและละเอียด / งานไกล: ยังใหญ่และรายละเอียดน้อยได้"
            ],
            [
              "[[emergent]]",
              "เพิ่ม ลบ หรือเปลี่ยนรายการและลำดับเมื่อข้อมูลเปลี่ยน"
            ],
            [
              "[[estimated]]",
              "มีการประมาณขนาดและแรง เพื่อช่วยตัดสินใจ"
            ],
            [
              "[[prioritized]]",
              "จัดลำดับด้วย Value, Size/Complexity, Risk และ Learn Fast"
            ]
          ]
        },
        {
          "type": "note",
          "title": "อาจารย์ตั้งคำถามให้แยก D กับ E",
          "text": "D เปลี่ยนระดับรายละเอียดเมื่อใกล้เวลาทำ ส่วน Emergent ปรับเพราะข้อมูลหรือสถานการณ์เปลี่ยน เช่น feedback, คู่แข่ง หรือปัญหาเทคนิค ทั้งคู่ทำให้ Backlog เปลี่ยน แต่เหตุผลต่างกัน",
          "tone": "gold"
        },
        {
          "type": "heading",
          "text": "Refinement / Grooming"
        },
        {
          "type": "list",
          "items": [
            "เพิ่มหรือปรับ estimate ตามข้อมูลใหม่",
            "แตกเรื่องใหญ่ให้เหมาะกับ Sprint",
            "เพิ่มเรื่องที่จำเป็น ลบเรื่องที่ไม่เกี่ยวข้องแล้ว",
            "ประเมินและจัดลำดับใหม่"
          ],
          "ordered": false
        },
        {
          "type": "paragraph",
          "text": "[[refinement]] ทำต่อเนื่องได้ระหว่าง Sprint ไม่ต้องรอช่องว่างระหว่างรอบ และไม่ใช่งาน PO คนเดียว Developers และ stakeholders ร่วมให้ข้อมูล"
        },
        {
          "type": "heading",
          "text": "แตก PBI แล้วต้องยังมีคุณค่า"
        },
        {
          "type": "table",
          "headers": [
            "เหมาะกับการแตกเป็น PBI ย่อย",
            "เป็น Tasks มากกว่า"
          ],
          "rows": [
            [
              "ชำระด้วยการโอน / ชำระด้วยบัตรเครดิต",
              "ทำหน้าจอ / ทำ API / ทำฐานข้อมูล"
            ]
          ]
        },
        {
          "type": "note",
          "title": "อาจารย์ย้ำทั้ง G1 และ G2",
          "text": "PBI ย่อยควรยังใช้งานหรือสาธิตเพื่อได้ feedback ที่มีประโยชน์ ไม่แตกตาม technical components อย่างเดียว แค่ Back-end ผ่าน Postman ยังไม่ได้ทำให้ผู้ใช้ทดลองกระบวนการจริง",
          "tone": "gold"
        },
        {
          "type": "heading",
          "text": "7 แนวทางแตก User Story"
        },
        {
          "type": "table",
          "headers": [
            "วิธี",
            "ตัวอย่าง"
          ],
          "rows": [
            [
              "Operations",
              "เพิ่ม / แก้ไข / ลบสินค้า"
            ],
            [
              "Roles",
              "ผู้อ่าน / ผู้เขียน / ผู้ตรวจบทความ"
            ],
            [
              "Data types / Parameters",
              "ค้นด้วยรหัส / ช่วงราคา / สี"
            ],
            [
              "Workflow steps",
              "ตรวจรายการ / จ่าย / รับการยืนยัน"
            ],
            [
              "[[happy]] / [[unhappy]]",
              "Login สำเร็จ / ลืมรหัสผ่าน"
            ],
            [
              "[[business-rule]]",
              "ยอดขั้นต่ำ / พื้นที่จัดส่ง"
            ],
            [
              "Optimize now vs later",
              "ค้นแบบพื้นฐานก่อน เพิ่ม GPS หรือความเร็วภายหลัง"
            ]
          ]
        },
        {
          "type": "quiz",
          "question": "ทุก PBI ต้องเป็น User Story ใช่ไหม?",
          "answer": "ไม่ใช่ PBI มีทั้ง Feature, Defect, Technical work และ Knowledge acquisition การเขียน User Story เป็นวิธีหนึ่งในการสื่อความต้องการ"
        }
      ]
    },
    {
      "id": "release",
      "short": "03 · Release และ MoSCoW",
      "title": "เมื่อวันส่งมอบตายตัว ต้องเลือกงานอย่างไร",
      "subtitle": "Fixed Date Release, MRFs และความต่างของ Must / Should / Could / Won’t",
      "group": "บทเรียน 3",
      "minutes": 7,
      "terms": [
        "fixed-date",
        "timebox",
        "mrf",
        "moscow",
        "must",
        "should",
        "could",
        "wont",
        "workaround",
        "release",
        "value",
        "risk",
        "dod"
      ],
      "sources": [
        "s3",
        "g13",
        "g23"
      ],
      "blocks": [
        {
          "type": "paragraph",
          "text": "[[fixed-date]] สอดคล้องกับหลัก [[timebox]] แต่ต้องทำงานสำคัญก่อน ทำให้ [[dod|Done จริง]] และทำให้ชุดความสามารถขั้นต่ำมีขนาดเล็กพอ"
        },
        {
          "type": "heading",
          "text": "Minimum Releasable Features"
        },
        {
          "type": "paragraph",
          "text": "[[mrf|MRFs]] คือชุด [[must|Must-have]] เล็กที่สุดที่ยัง Release ได้ตามความคาดหวังคุณค่าและคุณภาพ สไลด์เสนอแนวทางประมาณ **60–70% ของเวลา Release** เพื่อเผื่อความล่าช้าและ Must-have ใหม่ที่อาจเกิดขึ้น"
        },
        {
          "type": "note",
          "title": "ทำไมไม่วาง Must เต็ม 100%",
          "text": "ถ้ามีแต่ Must ทุกตัว การช้าหรือเจอข้อมูลใหม่จะทำให้ส่งมอบไม่สำเร็จง่าย ไม่มีพื้นที่ปรับตัว ตัวเลขนี้เป็นแนวทางเผื่อความเสี่ยง ไม่ใช่สูตรบังคับทุกทีม",
          "tone": "gold"
        },
        {
          "type": "heading",
          "text": "MoSCoW"
        },
        {
          "type": "table",
          "headers": [
            "ระดับ",
            "นิยาม",
            "ตัวแยกสำคัญ"
          ],
          "rows": [
            [
              "[[must]]",
              "ขาดแล้วไม่สามารถส่งมอบสิ่งที่ใช้ได้ตามเป้าหมาย",
              "ไม่มี workaround ที่ยอมรับได้"
            ],
            [
              "[[should]]",
              "สำคัญแต่ยังไม่ถึงกับขาดไม่ได้",
              "มี workaround แม้ไม่สะดวก"
            ],
            [
              "[[could]]",
              "อยากได้ กระทบน้อยกว่าเมื่อขาด",
              "ตัดได้ก่อน Should"
            ],
            [
              "[[wont]]",
              "ไม่ทำในกรอบเวลานี้",
              "ไม่ได้แปลว่าไม่ทำตลอดไป"
            ]
          ]
        },
        {
          "type": "note",
          "title": "อาจารย์ย้ำเรื่อง workaround",
          "text": "ต้องดูบริบทและความคาดหวังผู้ใช้ การมีทางทดแทนที่ยอมรับได้ช่วยให้ความจำเป็นลดลงจาก Must เป็น Should ได้",
          "tone": "gold"
        },
        {
          "type": "heading",
          "text": "จัดลำดับตามช่วงเวลาที่พิจารณา"
        },
        {
          "type": "paragraph",
          "text": "ความสำคัญระดับ Product / Project และระดับ Release อาจต่างกัน Should-have ที่ไม่ทัน Release 1 ไม่จำเป็นต้องย้ายเข้า Release 2 อัตโนมัติ ต้องประเมินใหม่ว่ายังจำเป็นและมีคุณค่าอยู่หรือไม่"
        },
        {
          "type": "paragraph",
          "text": "ภาพตัวอย่างในสไลด์แสดงว่าถ้า Must ทั้งหมดอยู่ภายในขอบเขตที่มั่นใจว่าทำได้ จะเสี่ยงน้อยกว่ามี Must ลึกลงไปในช่วงงานที่อาจทำไม่ถึง"
        },
        {
          "type": "quiz",
          "question": "Won’t-have แปลว่าตัดทิ้งจากผลิตภัณฑ์ตลอดไปหรือไม่?",
          "answer": "ไม่ใช่ เป็นข้อตกลงว่าไม่ทำในกรอบเวลานี้"
        }
      ]
    },
    {
      "id": "sprint-planning",
      "short": "04 · Sprint Planning",
      "title": "วางแผนให้ทำสำเร็จจริงในเวลาที่มี",
      "subtitle": "Goal, Done, Acceptance Criteria, Capacity, Buffer และ Spike",
      "group": "บทเรียน 4",
      "minutes": 12,
      "terms": [
        "sprint",
        "sprint-goal",
        "initial-goal",
        "planning",
        "scope",
        "pspi",
        "dod",
        "ac",
        "acceptance-test",
        "gwt",
        "capacity",
        "buffer",
        "unplanned",
        "task",
        "forecast",
        "spike",
        "technical-spike",
        "functional-spike",
        "poc"
      ],
      "sources": [
        "s4",
        "g14",
        "g24"
      ],
      "blocks": [
        {
          "type": "paragraph",
          "text": "[[sprint]] เป็นรอบ timebox 1–4 สัปดาห์ตามสไลด์ ใช้ระยะเวลาสม่ำเสมอ รอบใหม่เริ่มต่อทันที [[sprint-goal]] ให้เป้าหมายเดียวเพื่อทีมทำงานร่วมกัน เช่น “ผู้ใช้ค้นหาด้วย keyword ได้” ซึ่งสื่อผลลัพธ์ชัดกว่า “ทำ 5 PBI แรก”"
        },
        {
          "type": "note",
          "title": "อาจารย์ย้ำคำว่า initial",
          "text": "PO เสนอ [[initial-goal]] แล้ว Developers ดูงานและเวลาที่มี ก่อนร่วมกันตกลงเป้าหมายและสิ่งที่จะทำได้จริง",
          "tone": "gold"
        },
        {
          "type": "heading",
          "text": "ระหว่าง Sprint เปลี่ยนอะไรได้"
        },
        {
          "type": "list",
          "items": [
            "ชี้แจงและเจรจา [[scope|Scope]] กับ PO เมื่อเรียนรู้เพิ่ม",
            "Refine Product Backlog ตามความจำเป็น",
            "คุณภาพต้องไม่ลดลง",
            "ไม่เปลี่ยนจนทำให้ Sprint Goal เสียหาย"
          ],
          "ordered": false
        },
        {
          "type": "heading",
          "text": "Planning ตอบ Why / What / How"
        },
        {
          "type": "table",
          "headers": [
            "คำถาม",
            "คำตอบที่ต้องได้"
          ],
          "rows": [
            [
              "Why is this Sprint valuable?",
              "คุณค่าและ Sprint Goal"
            ],
            [
              "What can be done?",
              "PBI ที่คาดว่าจะทำได้"
            ],
            [
              "How will it get done?",
              "แผนและ Tasks เพื่อสร้าง Increment ตาม DoD"
            ]
          ]
        },
        {
          "type": "heading",
          "text": "PSPI, DoD, AC และ Acceptance Test"
        },
        {
          "type": "paragraph",
          "text": "[[pspi|Potentially Shippable Product Increment]] คือเสร็จจริงตาม DoD และพร้อมในเชิงคุณภาพสำหรับส่งออกใช้งาน ไม่ได้บังคับว่า Release จริงทุก Sprint"
        },
        {
          "type": "table",
          "headers": [
            "คำ",
            "ใช้กับอะไร",
            "ตัวอย่าง"
          ],
          "rows": [
            [
              "[[dod]]",
              "มาตรฐานร่วมของงาน",
              "ผ่านการทดสอบและ review ตามเกณฑ์"
            ],
            [
              "[[ac]]",
              "เงื่อนไขเฉพาะ PBI",
              "ยกเลิกก่อน 24 ชั่วโมงแล้วคืนเงินตามเงื่อนไข"
            ],
            [
              "[[acceptance-test]]",
              "วิธีพิสูจน์เงื่อนไข",
              "ข้อมูลทดสอบ ขั้นตอน ผลที่คาดหวัง"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "AC เขียนได้แบบ Scenario-oriented เช่น [[gwt]] หรือ Rule-oriented เป็นรายการกฎที่ต้องผ่าน"
        },
        {
          "type": "note",
          "title": "ระวังคำว่าเสร็จ",
          "text": "โค้ดเสร็จแต่ยังทดสอบไม่ผ่าน ไม่ใช่ Done และ AC ไม่ใช่มาตรฐานร่วมแบบ DoD",
          "tone": "gold"
        },
        {
          "type": "heading",
          "text": "Capacity และ Sprint Buffer"
        },
        {
          "type": "paragraph",
          "text": "[[capacity]] ต้องดูเวลาจริงทั้งทีม หักวันลา วันหยุด อบรม Scrum activities ประชุม และงานอื่นที่ทราบ แล้วเผื่อ [[buffer]] สำหรับ [[unplanned|งานไม่คาดคิด]] หรือ estimate คลาดเคลื่อน"
        },
        {
          "type": "note",
          "title": "อาจารย์ย้ำ",
          "text": "ไม่ใช่คิดทุกคนมี 80 ชั่วโมงเต็มใน Sprint 2 สัปดาห์ ขนาด buffer ควรอาศัยประสบการณ์ทีม ไม่ใช้เปอร์เซ็นต์เดียวกับทุกทีม",
          "tone": "gold"
        },
        {
          "type": "code",
          "label": "ตัวอย่างจากสไลด์",
          "text": "เวลาหลังหักกิจกรรมที่ทราบ = 190 ชั่วโมง\nเผื่อ Unplanned / Buffer    =  50 ชั่วโมง\nเหลือวางแผนงาน             = 140 ชั่วโมง\n\nPBI #1 28 + #2 70 + #3 40 = 138 ชั่วโมง ✓\nเพิ่ม #4 อีก 40           = 178 ชั่วโมง → เกิน capacity"
        },
        {
          "type": "heading",
          "text": "แตกงานเพื่อเพิ่มความมั่นใจ"
        },
        {
          "type": "paragraph",
          "text": "แตก PBI เป็น [[task|Tasks]] พร้อม estimate เพื่อเห็นงานที่ซ่อนอยู่และวางแผนร่วมกัน สไลด์แนะนำ Tasks ส่วนใหญ่ไม่ใหญ่เกินประมาณหนึ่งวันทำงาน Commitment ต้อง Appropriate และ Realistic"
        },
        {
          "type": "note",
          "title": "ห้ามสับสนสองการแตก",
          "text": "Refinement แตก PBI ใหญ่ → PBI เล็กที่ยังมีคุณค่า ส่วน Planning แตก PBI ที่เลือก → Tasks สำหรับทำให้สำเร็จ",
          "tone": "gold"
        },
        {
          "type": "paragraph",
          "text": "กฎ **Don’t start what you cannot finish** ถ้าใหญ่เกินเวลาที่เหลือ ให้แบ่งเป็นส่วนที่มีคุณค่า หรือพิจารณางานอื่นที่จบได้ อย่าหยิบมาเริ่มจนทุกเรื่องค้าง"
        },
        {
          "type": "heading",
          "text": "Spike ลดความไม่รู้ก่อนรับงาน"
        },
        {
          "type": "table",
          "headers": [
            "ประเภท",
            "ถามอะไร",
            "ตัวอย่าง"
          ],
          "rows": [
            [
              "[[technical-spike]]",
              "จะสร้างด้วยเทคนิคอย่างไร",
              "แสดง local timezone / ส่ง notification"
            ],
            [
              "[[functional-spike]]",
              "ระบบควรมีพฤติกรรมอย่างไร",
              "เสนอคิวนัดว่างให้ผู้รออย่างไร"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "[[spike]] ทำผ่านการศึกษา ทดลอง prototype หรือ [[poc]] เมื่อยังไม่รู้ขนาดหรือวิธีจนประเมินไม่ได้ ควรลดความไม่รู้ก่อน commit"
        },
        {
          "type": "quiz",
          "question": "มี capacity 140 ชั่วโมง รับงานรวม 178 แล้วคาดว่าจะทำโอที แบบนี้ตรงแนวทางไหม?",
          "answer": "ไม่ตรงกับการวางแผนให้ Realistic ควรเลือกขอบเขตให้เหมาะกับ capacity และรักษา sustainable pace"
        }
      ]
    },
    {
      "id": "sprint-execution",
      "short": "04 · Sprint Execution",
      "title": "ช่วยกันให้งานเสร็จ แทนเริ่มงานเพิ่ม",
      "subtitle": "Flow, Swarming, Daily Scrum และ Technical Debt รวมเนื้อหาที่อาจารย์สอนต่อในคาบ 5",
      "group": "บทเรียน 4",
      "minutes": 10,
      "terms": [
        "execution",
        "flow",
        "mini-waterfall",
        "role-based",
        "value-focused",
        "handoff",
        "swarming",
        "pair",
        "board",
        "daily",
        "debt",
        "refactoring",
        "t-shaped",
        "musketeer"
      ],
      "sources": [
        "s4",
        "g14",
        "g24",
        "g15",
        "g25"
      ],
      "blocks": [
        {
          "type": "paragraph",
          "text": "[[execution]] คือทำงานทั้งหมดที่จำเป็นต่อ Sprint Goal และ Increment อาจารย์เรียกว่าเป็นส่วนหลักที่ใช้สร้างคุณค่า จึงต้องใช้ [[flow]] ลดงานรอและช่วยให้งาน Done"
        },
        {
          "type": "heading",
          "text": "Mini Waterfall และการคิดเฉพาะ Role"
        },
        {
          "type": "paragraph",
          "text": "[[mini-waterfall]] แบ่งช่วงออกแบบทั้งหมด → เขียนทั้งหมด → ทดสอบทั้งหมด ทำให้พบปัญหาช้า [[role-based]] เช่น “ฉันโค้ดเสร็จแล้ว ไปเริ่มเรื่องใหม่ ส่วนทดสอบเป็นของคนอื่น” ทำให้หลายชิ้นเริ่มแล้วแต่ไม่มีชิ้น Done"
        },
        {
          "type": "note",
          "title": "อาจารย์ย้ำ",
          "text": "เปลี่ยนเป็น [[value-focused]] ลด [[handoff|Handoffs]] และเวลาที่งานรอ ช่วยกันทำให้สิ่งที่เริ่มแล้วสำเร็จ แทนสนใจเฉพาะว่างานส่วนตัวจบหรือยัง",
          "tone": "gold"
        },
        {
          "type": "heading",
          "text": "Swarming และ Pair Programming"
        },
        {
          "type": "paragraph",
          "text": "[[swarming]] คือคนที่มีเวลามาช่วยงานที่เริ่มแล้วให้จบ ต้องมี [[musketeer]] คืออยากช่วย และ [[t-shaped]] คือช่วยได้จริง"
        },
        {
          "type": "paragraph",
          "text": "[[pair]] ช่วยให้ feedback เร็ว ตรวจงาน เรียนรู้ร่วมกัน และรับช่วงงานต่อได้ง่าย ไม่ได้รับประกันว่าจะเร็วที่สุดเสมอ"
        },
        {
          "type": "heading",
          "text": "Task Board"
        },
        {
          "type": "paragraph",
          "text": "[[board]] อย่างน้อยมี To do / Doing / Done ระบุผู้ทำ และเชื่อมหลักฐานหรือสิ่งที่เกี่ยวข้อง เช่น API specification เพื่อให้มองเห็นงานจริง"
        },
        {
          "type": "heading",
          "text": "Daily Scrum: Sync และปรับแผน"
        },
        {
          "type": "paragraph",
          "text": "[[daily]] ใช้ตรวจความก้าวหน้าต่อ Sprint Goal ประสานงาน และปรับแผนรายวัน ภายใน 15 นาที"
        },
        {
          "type": "list",
          "items": [
            "ทำอะไรไปแล้ว",
            "วันนี้จะทำอะไร",
            "มีอะไรขัดขวาง",
            "มีอะไรที่เราลืมนึกถึง",
            "เรียนรู้อะไรที่ควรแบ่งปัน"
          ],
          "ordered": true
        },
        {
          "type": "note",
          "title": "อาจารย์ย้ำทั้งสองกลุ่ม",
          "text": "Daily Scrum เพื่อ sync ไม่ใช่ประชุมหา solution อย่างละเอียด การ Adapt ตรงนี้เน้นปรับแผน เช่น ใครจะช่วยใคร ถ้าต้องคุยวิธีแก้ยาวให้แยกต่อหลังจบ ไม่รอให้งานเสร็จจึงรายงาน",
          "tone": "gold"
        },
        {
          "type": "heading",
          "text": "Technical Debt"
        },
        {
          "type": "paragraph",
          "text": "[[debt]] เปรียบเหมือนหนี้จากทางลัดหรือคุณภาพภายในที่ยังไม่เหมาะสม ทำให้ต้องเสียแรงเพิ่มในอนาคต อาจตั้งใจแลกกับการส่งมอบเร็ว หรือเกิดจากสิ่งที่ยังทำได้ไม่ดี"
        },
        {
          "type": "list",
          "items": [
            "ชื่อตัวแปรไม่สื่อความ และ hard-code ค่าที่ควรจัดการให้เหมาะสม",
            "ดีไซน์เดิมไม่เหมาะกับ requirement ใหม่",
            "ทดสอบไม่เพียงพอ หรือไม่มี exception handling ที่จำเป็น",
            "ตัวอย่างในคาบเรื่อง API ส่งข้อมูลเกินจำเป็น และใช้ dev server ไม่เหมาะกับ production"
          ],
          "ordered": false
        },
        {
          "type": "note",
          "title": "อย่าจำนิยามกว้างเกิน",
          "text": "อาจารย์พูดว่ามีมุมมองต่างกันในการนับ defect เป็น Technical Debt จึงไม่ควรสรุปว่า bug ทุกชนิดเท่ากับ technical debt เสมอ",
          "tone": "gold"
        },
        {
          "type": "heading",
          "text": "Refactoring"
        },
        {
          "type": "paragraph",
          "text": "[[refactoring]] ปรับ design, structure หรือ implementation ภายใน โดย **รักษาพฤติกรรมภายนอกเดิม** ช่วยให้อ่านง่าย ดูแลต่อได้ และจัดการ Technical Debt"
        },
        {
          "type": "note",
          "title": "อาจารย์แนะนำ",
          "text": "ถ้าสร้างหนี้เพื่อส่งมอบ ควรรีบจัดการ เช่น รอบถัดไป แทนสะสมจนพัฒนาต่อได้ยาก การเพิ่มฟีเจอร์ใหม่ไม่ใช่ความหมายของ Refactoring",
          "tone": "gold"
        },
        {
          "type": "quiz",
          "question": "Daily Scrum ต้องอภิปรายทุกวิธีแก้จนจบในที่ประชุมหรือไม่?",
          "answer": "ไม่ใช่ ใช้ sync ตรวจและปรับแผนก่อน แล้วแยกคุยแก้ปัญหายาวหลังจบ"
        }
      ]
    },
    {
      "id": "values",
      "short": "05 · Values และ Trust",
      "title": "ค่านิยมที่ทำให้ทีมไว้ใจกัน",
      "subtitle": "Scrum Values 5 ตัว Trust Equation และการแยก Working Group กับ Team",
      "group": "บทเรียน 5",
      "minutes": 8,
      "terms": [
        "values",
        "commitment",
        "focus",
        "courage",
        "openness",
        "respect",
        "trust",
        "credibility",
        "reliability",
        "intimacy",
        "self-orientation",
        "working-group",
        "working-team",
        "mutual",
        "collective",
        "efficiency",
        "effectiveness"
      ],
      "sources": [
        "s5",
        "g15",
        "g25"
      ],
      "blocks": [
        {
          "type": "note",
          "title": "G1 บท 5 · อาจารย์กล่าวถึงการออกข้อสอบ",
          "text": "อาจารย์บอกว่า Scrum Values ออกข้อสอบง่าย เช่น ถามว่าอะไรเป็นหรือไม่เป็น แต่ไม่อยากให้แค่ท่องจำ ต้องเข้าใจความหมาย",
          "tone": "gold"
        },
        {
          "type": "heading",
          "text": "Scrum Values 5 ตัว"
        },
        {
          "type": "table",
          "headers": [
            "ค่านิยม",
            "หมายถึง",
            "ตัวอย่าง"
          ],
          "rows": [
            [
              "[[commitment]]",
              "ทุ่มเทต่อเป้าหมายและช่วยเหลือกัน",
              "เจออุปสรรคยังพยายามหาทางสำเร็จ"
            ],
            [
              "[[focus]]",
              "มุ่งงานและเป้าหมาย Sprint",
              "ลดสิ่งรบกวน"
            ],
            [
              "[[courage]]",
              "กล้าทำสิ่งที่ถูกและเจอปัญหายาก",
              "กล้าทักสิ่งไม่เหมาะสม"
            ],
            [
              "[[openness]]",
              "เปิดเผยงานและอุปสรรค",
              "ไม่ปกปิดงานที่ติด"
            ],
            [
              "[[respect]]",
              "เคารพความสามารถและความเป็นอิสระ",
              "หาสาเหตุก่อนกล่าวโทษ"
            ]
          ]
        },
        {
          "type": "note",
          "title": "ความหมายที่อาจารย์ขยาย",
          "text": "Commitment ใกล้กับ Dedication คือความทุ่มเท ไม่จบแค่พูดสัญญา Respect ไม่ใช่แค่สุภาพ เมื่อเพื่อนทำไม่สำเร็จต้องพยายามเข้าใจปัญหา ไม่ด่วนตัดสิน",
          "tone": "gold"
        },
        {
          "type": "heading",
          "text": "Trust Equation"
        },
        {
          "type": "code",
          "label": "สมการในบทเรียน",
          "text": "Trustworthiness = (Credibility + Reliability + Intimacy)\n                  ───────────────────────────────────\n                            Self-orientation"
        },
        {
          "type": "table",
          "headers": [
            "ส่วนประกอบ",
            "ใจความ"
          ],
          "rows": [
            [
              "[[credibility]]",
              "น่าเชื่อถือจากความรู้ ความสามารถ และคำพูด"
            ],
            [
              "[[reliability]]",
              "พึ่งพาได้จากพฤติกรรมที่สม่ำเสมอ"
            ],
            [
              "[[intimacy]]",
              "ใกล้ชิดและรู้สึกปลอดภัยที่จะเปิดเผย"
            ],
            [
              "[[self-orientation]]",
              "มุ่งประโยชน์ของตนเอง"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "สามตัวบนมากขึ้นช่วยเพิ่ม Trust ส่วน Self-orientation มากขึ้นทำให้ลดลง"
        },
        {
          "type": "heading",
          "text": "Working Group กับ Working Team"
        },
        {
          "type": "table",
          "headers": [
            "[[working-group]]",
            "[[working-team]]"
          ],
          "rows": [
            [
              "ผู้นำชัดเจนเป็นหลัก",
              "แบ่งปันบทบาทผู้นำ"
            ],
            [
              "Accountability รายบุคคล",
              "ทั้งรายบุคคลและ [[mutual|ร่วมกัน]]"
            ],
            [
              "ผลงานแยกของแต่ละคน",
              "[[collective|ผลงานร่วมของทีม]]"
            ],
            [
              "คุย ตัดสินใจ แล้วแบ่งไปทำ",
              "คุย ตัดสินใจ และทำงานร่วมกัน"
            ],
            [
              "เน้นการประชุมมีประสิทธิภาพ",
              "อภิปรายและแก้ปัญหาร่วมกัน"
            ],
            [
              "วัดอิทธิพลหรือผลเชื่อมกับงานอื่น",
              "วัดผลงานร่วมโดยตรง"
            ],
            [
              "จุดประสงค์ตามภารกิจองค์กรกว้าง ๆ",
              "มีจุดประสงค์เฉพาะที่ทีมส่งมอบ"
            ]
          ]
        },
        {
          "type": "heading",
          "text": "Efficiency กับ Effectiveness"
        },
        {
          "type": "table",
          "headers": [
            "[[efficiency]]",
            "[[effectiveness]]"
          ],
          "rows": [
            [
              "ใช้เวลา เงิน และแรงอย่างคุ้มค่า ลดความสูญเปล่า",
              "ได้ผลลัพธ์ตามที่ต้องการ"
            ]
          ]
        },
        {
          "type": "note",
          "title": "ตัวอย่างจากคำอธิบายอาจารย์",
          "text": "สอนเร็ว ใช้เวลาเตรียมน้อย แต่ผู้เรียนไม่เข้าใจ อาจดูประหยัดแต่ไม่ได้ผล ต้องทำให้ได้ผล แล้วพัฒนาวิธีให้มีประสิทธิภาพขึ้น",
          "tone": "gold"
        },
        {
          "type": "quiz",
          "question": "พูดสัญญาว่าจะทำ แต่ไม่พยายามเมื่อเจอปัญหา ตรง Commitment เต็มที่หรือยัง?",
          "answer": "ยังไม่ตรงกับความทุ่มเทที่อาจารย์อธิบาย Commitment ต้องสะท้อนการลงมือและสนับสนุนกัน"
        }
      ]
    },
    {
      "id": "team",
      "short": "05 · Team และ Roles",
      "title": "ใครรับผิดชอบอะไร และทีมควรเป็นอย่างไร",
      "subtitle": "Developers 4 คุณลักษณะที่อาจารย์เน้น และรายละเอียด PO / Scrum Master",
      "group": "บทเรียน 5",
      "minutes": 11,
      "terms": [
        "team",
        "developers",
        "po",
        "sm",
        "self-managing",
        "cross-functional",
        "t-shaped",
        "musketeer",
        "bandwidth",
        "sustainable",
        "loafing",
        "accountability",
        "coaching",
        "facilitator",
        "impediment",
        "shield",
        "change-agent",
        "product-goal",
        "sprint-backlog",
        "dod"
      ],
      "sources": [
        "s5",
        "g15",
        "g25"
      ],
      "blocks": [
        {
          "type": "paragraph",
          "text": "[[team]] มี PO หนึ่งคน SM หนึ่งคน และ Developers ไม่มีทีมย่อยหรือ hierarchy ภายในที่แยกเป้าหมาย ทำงานเป็นหน่วยเดียวมุ่ง [[product-goal]] และร่วม accountable ต่อ Increment ที่มีคุณค่าและใช้ได้ทุก Sprint"
        },
        {
          "type": "heading",
          "text": "Cross-functional และ Self-managing"
        },
        {
          "type": "paragraph",
          "text": "[[cross-functional]] หมายถึงทักษะรวมของทีมเพียงพอ ไม่ใช่ทุกคนเชี่ยวชาญทุกอย่าง [[self-managing]] หมายถึงทีมตัดสินใจภายในว่าใครทำอะไร เมื่อไร และอย่างไร"
        },
        {
          "type": "note",
          "title": "อ่านบริบทของขนาดทีม",
          "text": "เนื้อหาอ้าง Scrum Guide 2020 ระบุ Scrum Team โดยทั่วไปไม่เกิน 10 คน ส่วนหนังสือที่อ้างเรื่อง Development Team ให้แนวทาง 5–9 คน เป็นคนละบริบทในสไลด์",
          "tone": "gold"
        },
        {
          "type": "heading",
          "text": "คุณลักษณะ Developers 10 ข้อ"
        },
        {
          "type": "note",
          "title": "G2 บท 5 · อาจารย์ระบุให้เน้นสี่ตัวแรก",
          "text": "[[self-managing]], [[cross-functional]], [[t-shaped]], [[musketeer]] อาจารย์บอกว่าสี่ตัวบนสำคัญและถูกพูดบ่อย",
          "tone": "gold"
        },
        {
          "type": "table",
          "headers": [
            "ข้อ",
            "คุณลักษณะ",
            "ใจความ"
          ],
          "rows": [
            [
              "1",
              "[[self-managing]]",
              "จัดการงานในทีมเอง"
            ],
            [
              "2",
              "[[cross-functional]]",
              "ทักษะหลากหลายและเพียงพอ ลดการพึ่งภายนอก"
            ],
            [
              "3",
              "[[t-shaped]]",
              "เชี่ยวชาญบางด้านและช่วยด้านอื่นได้"
            ],
            [
              "4",
              "[[musketeer]]",
              "มองงานเป็นของทีมและพร้อมช่วย"
            ],
            [
              "5",
              "[[bandwidth]]",
              "สื่อสารข้อมูลได้มาก รวดเร็ว"
            ],
            [
              "6",
              "Transparent communication",
              "บอกสถานการณ์จริงอย่างชัดเจน"
            ],
            [
              "7",
              "Right-sized",
              "ขนาดเหมาะสม ลดการประสานและ social loafing"
            ],
            [
              "8",
              "Focused and committed",
              "มีสมาธิและทุ่มเท"
            ],
            [
              "9",
              "[[sustainable]]",
              "รักษาจังหวะระยะยาว"
            ],
            [
              "10",
              "Long-lived",
              "อยู่ร่วมกันต่อเนื่องเพื่อสะสมประสบการณ์"
            ]
          ]
        },
        {
          "type": "note",
          "title": "คู่ที่สำคัญต่อ Swarming",
          "text": "T-shaped = มีทักษะช่วยได้ / Musketeer = มีใจอยากช่วย มีด้านเดียวไม่พอ",
          "tone": "gold"
        },
        {
          "type": "heading",
          "text": "Developers Accountabilities"
        },
        {
          "type": "list",
          "items": [
            "สร้าง Increment ที่ใช้งานได้",
            "สร้างแผน Sprint หรือ [[sprint-backlog]]",
            "รักษาคุณภาพตาม [[dod]]",
            "ปรับแผนแต่ละวันไปสู่ Sprint Goal"
          ],
          "ordered": false
        },
        {
          "type": "heading",
          "text": "Product Owner"
        },
        {
          "type": "paragraph",
          "text": "[[po]] accountable ต่อ **Maximizing product value** และการจัดการ Backlog ที่มีประสิทธิผล ซึ่งรวมพัฒนาและสื่อสาร Product Goal สื่อสาร PBI จัดลำดับ และทำให้ Backlog โปร่งใส มองเห็น และเข้าใจ"
        },
        {
          "type": "list",
          "items": [
            "Manage economics: พิจารณาคุณค่าและความคุ้มค่าต่อเนื่อง",
            "ร่วมวางแผนและ refine Backlog",
            "กำหนด Acceptance Criteria และตรวจว่าเป็นไปตามเงื่อนไข",
            "ร่วมมือกับ Developers และ stakeholders"
          ],
          "ordered": false
        },
        {
          "type": "note",
          "title": "ระวังบทบาท PO",
          "text": "ไม่ได้ต้องทำทุกกิจกรรมด้วยตนเอง และไม่ได้สั่งวิธีทำงานทางเทคนิคทุกขั้นตอน",
          "tone": "gold"
        },
        {
          "type": "heading",
          "text": "Scrum Master"
        },
        {
          "type": "paragraph",
          "text": "[[sm]] ช่วยให้เข้าใจ Scrum theory/practice และช่วยให้ทีมมีประสิทธิผล สนับสนุนการสร้าง Increment ที่มีคุณค่าสูงและกิจกรรมที่เป็นประโยชน์ภายใน timebox"
        },
        {
          "type": "table",
          "headers": [
            "ด้าน",
            "สิ่งที่ทำ"
          ],
          "rows": [
            [
              "[[coaching]]",
              "ช่วยทีมและ PO เรียนรู้และแก้ปัญหาได้ดีขึ้น"
            ],
            [
              "Process authority",
              "ช่วยให้ยึด values, principles และ practices อย่างเหมาะสม"
            ],
            [
              "[[shield]]",
              "ป้องกันสิ่งรบกวนการทำงาน"
            ],
            [
              "Impediment remover",
              "ผลักดันอุปสรรคที่ทีมแก้เองไม่ได้"
            ],
            [
              "[[change-agent]]",
              "ช่วยให้เข้าใจและใช้การเปลี่ยนแปลงจาก Scrum"
            ]
          ]
        },
        {
          "type": "note",
          "title": "อาจารย์อธิบายขอบเขต",
          "text": "ถ้าทีมแก้เองได้ SM ช่วยให้ทีมแก้เอง ถ้าเกินการควบคุม เช่น ระบบภายนอกที่ต้องประสานฝ่ายอื่น SM เข้าช่วยผลักดัน ไม่ใช่หัวหน้าที่สั่งทุกงาน",
          "tone": "gold"
        },
        {
          "type": "heading",
          "text": "Executive Coaching ตามภาพในสไลด์"
        },
        {
          "type": "table",
          "headers": [
            "บทบาท",
            "ASK / TELL"
          ],
          "rows": [
            [
              "Coach",
              "ถามมาก บอกน้อย"
            ],
            [
              "Advisor",
              "ถามน้อย บอกมาก"
            ],
            [
              "Mentor",
              "ถามมาก บอกมาก"
            ],
            [
              "Supporter",
              "ถามน้อย บอกน้อย เน้นสนับสนุน"
            ]
          ]
        },
        {
          "type": "quiz",
          "question": "ทีมต้องการให้ทุกคนเป็นผู้เชี่ยวชาญทุกด้านจึงเป็น Cross-functional ใช่ไหม?",
          "answer": "ไม่ใช่ ต้องมีทักษะรวมกันเพียงพอ ส่วน T-shaped ช่วยให้สมาชิกเข้าใจและช่วยงานข้ามด้านได้"
        }
      ]
    },
    {
      "id": "sources",
      "short": "เอกสารอ้างอิง",
      "title": "เอกสารที่ใช้อ้างอิง",
      "subtitle": "สไลด์และ transcript ที่ใช้จัดทำสรุปและคำศัพท์",
      "group": "เอกสารอ้างอิง",
      "minutes": 2,
      "terms": [
        "empirical",
        "values"
      ],
      "sources": [],
      "blocks": [
        {
          "type": "paragraph",
          "text": "เนื้อหาอ้างอิงสไลด์หลัก 5 บท Course Outline และ transcript 10 ไฟล์ของวิชา INT144 เวอร์ชันออนไลน์แสดงรายชื่อเอกสาร โดยไม่ได้แนบไฟล์ต้นฉบับ"
        },
        {
          "type": "note",
          "title": "แยกคำย้ำกับการคาดการณ์",
          "text": "ข้อความที่ระบุว่าอาจารย์กล่าวถึงการออกสอบ ใช้เฉพาะประเด็นที่พบใน transcript ข้อความอาจารย์ย้ำไม่ใช่การยืนยันจำนวนข้อสอบ ส่วนคำถอดเสียงที่คลาดเคลื่อนเทียบกับคำศัพท์ในสไลด์",
          "tone": "gold"
        },
        {
          "type": "paragraph",
          "text": "ไฟล์ Class 2 ชื่อคล้ายกันเป็นคนละรอบบันทึก เช้าและบ่าย วันที่ 22 กันยายน แม้ชื่อทั้งสองไฟล์ระบุ G1 จึงเก็บอ้างอิงตามชื่อจริงของไฟล์"
        },
        {
          "type": "sources"
        }
      ]
    }
  ]
};

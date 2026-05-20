import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white/60 tracking-widest uppercase text-xs px-4 py-1">НЭТК · Нижний Новгород</Badge>,
    title: "Облачные технологии в образовании.",
    content: 'Нижегородский экономико-технологический колледж — в авангарде цифровой трансформации.',
  },
  {
    id: 'cloud',
    title: 'Возможности облака для НЭТК.',
    content: 'Облачные сервисы открывают студентам и преподавателям доступ к современным инструментам: совместная работа в реальном времени, хранение учебных материалов, дистанционное обучение и безопасная инфраструктура без затрат на оборудование.',
    showButton: true,
    buttonText: 'Узнать подробнее'
  },
]
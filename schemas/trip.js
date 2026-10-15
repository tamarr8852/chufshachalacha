export default {
  name: 'trip',
  title: 'טיול',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'שם המסלול',
      type: 'string',
    },
    {
      name: 'location',
      title: 'אזור בארץ / בעולם',
      type: 'string', // למשל: "צפון", "מרכז", "אירופה"
    },
    {
      name: 'difficulty',
      title: 'דרגת קושי',
      type: 'string',
      options: {
        list: [
          { title: 'קל (מתאים למשפחות)', value: 'easy' },
          { title: 'בינוני', value: 'medium' },
          { title: 'מאתגר', value: 'hard' },
        ],
      },
    },
    {
      name: 'mainImage',
      title: 'תמונה ראשית',
      type: 'image',
      options: { hotspot: true }, // מאפשר לבחור מה החלק המרכזי בתמונה
    },
    {
      name: 'description',
      title: 'תיאור קצר',
      type: 'text', // טקסט של כמה שורות
    },
  ],
}

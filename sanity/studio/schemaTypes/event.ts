export default {
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Event Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
      title: 'Description',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Event Image',
      options: {hotspot: true},
      validation: (Rule: any) => Rule.required(),
      fields: [{name: 'alt', type: 'string', title: 'Alt Text'}],
    },
    {
      name: 'eventDate',
      type: 'datetime',
      title: 'Event Date & Time',
    },
    {
      name: 'location',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      title: 'Location (e.g., Lagos, Nigeria or Virtual)',
    },
    {
      name: 'ctaText',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      title: 'Button Text',
      initialValue: 'Register Now',
    },
    {
      name: 'ctaLink',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
      title: 'Button Link',
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'eventDate',
      media: 'image',
    },
    prepare(selection: any) {
      const {title, date} = selection
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString() : 'No date set',
      }
    },
  },
}

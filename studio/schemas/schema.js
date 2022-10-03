// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import series from './series'
import artwork from './artwork'
import book from './book'
import about from './about'
import upcomingEvents from './upcomingEvents'
import eventDate from './eventDate'
import featureImage from './featureImage'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    series,
    featureImage,
    book,
    about,
    artwork,
    upcomingEvents,
    eventDate,
    blockContent,
  ]),
})

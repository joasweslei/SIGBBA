import 'reflect-metadata'
import './database/connect'

import app from './app'

app.listen(3333, () =>
  console.log('🔥 Server running at http://localhost:3333')
)

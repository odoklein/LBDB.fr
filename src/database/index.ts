import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import * as schema from './schema'
import { env } from '@/config/env'

const databaseUrl = env.DATABASE_URL

const missingDatabaseUrlError = () =>
  new Error('DATABASE_URL is required. Please set it in your environment variables.')

const queryClient = databaseUrl ? postgres(databaseUrl) : null

export const db = queryClient
  ? drizzle({ client: queryClient, schema })
  : (new Proxy(
      {},
      {
        get() {
          throw missingDatabaseUrlError()
        },
      }
    ) as ReturnType<typeof drizzle<typeof schema>>)

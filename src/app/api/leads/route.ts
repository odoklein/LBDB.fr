import { NextResponse } from 'next/server'

interface LeadPayload {
  company?: string
  name?: string
  email?: string
  phone?: string
  service?: string
  message?: string
}

const requiredFields: Array<keyof LeadPayload> = ['name', 'email', 'service', 'message']

export async function POST(request: Request) {
  const body = (await request.json()) as LeadPayload
  const missing = requiredFields.filter((field) => !body[field]?.trim())

  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Missing required fields: ${missing.join(', ')}` },
      { status: 400 }
    )
  }

  // Placeholder for CRM/email provider integration.
  console.info('New LBDB lead captured', {
    company: body.company ?? '',
    name: body.name ?? '',
    email: body.email ?? '',
    phone: body.phone ?? '',
    service: body.service ?? '',
  })

  return NextResponse.json({ ok: true })
}

import { NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  company: string
  stage: string
  challenge: string
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body: ContactFormData = await request.json()
    
    // Validate required fields
    const { name, email, company, stage, challenge } = body
    
    if (!name || !email || !company || !stage || !challenge) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }
    
    // Prepare webhook payload
    const webhookPayload = {
      name,
      email,
      company,
      stage,
      challenge,
      timestamp: new Date().toISOString()
    }
    
    // Get webhook URL from environment variables
    const webhookUrl = process.env.WEBHOOK_URL
    
    if (!webhookUrl) {
      console.error('WEBHOOK_URL environment variable is not set')
      return NextResponse.json(
        { error: 'Webhook configuration missing' },
        { status: 500 }
      )
    }
    
    // Send to webhook
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookPayload)
    })
    
    if (!webhookResponse.ok) {
      console.error('Webhook request failed:', webhookResponse.status, webhookResponse.statusText)
      return NextResponse.json(
        { error: 'Failed to process form submission' },
        { status: 500 }
      )
    }
    
    console.log('Form submission successful:', { name, email, company })
    
    // Return success response
    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Contact form API error:', error)
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
import { NextResponse } from 'next/server'
import path from 'path'
import { promises as fs } from 'fs'

export async function GET() {
  try {
    const cvPath = path.join(
      process.cwd(),
      'resources',
      'cv',
      'Gabriel_Uwaila_-_Software_Engineer_Intern.pdf'
    )

    const fileBuffer = await fs.readFile(cvPath)
    return new NextResponse(fileBuffer as unknown as BodyInit, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="Gabriel_Uwaila_CV.pdf"'
      }
    })
  } catch (error) {
    console.error('Failed to load CV:', error)
    return new NextResponse('CV not found', { status: 404 })
  }
}


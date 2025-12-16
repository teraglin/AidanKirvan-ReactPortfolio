import { NextResponse } from 'next/server';
import { getResumeAsBuffer, getResumeMetadata } from '@/lib/blobs';
import { readFile } from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';

// Fallback static file path
const STATIC_RESUME_PATH = path.join(
  process.cwd(),
  'public',
  'downloads',
  'AidanKirvanCV2025.pdf'
);

export async function GET() {
  try {
    // Try to get resume from Blobs first
    const [resumeBuffer, metadata] = await Promise.all([
      getResumeAsBuffer(),
      getResumeMetadata(),
    ]);

    if (resumeBuffer && metadata) {
      // Serve from Blobs
      return new NextResponse(resumeBuffer, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="${metadata.filename}"`,
          'Content-Length': metadata.size.toString(),
        },
      });
    }

    // Fallback to static file
    const staticFile = await readFile(STATIC_RESUME_PATH);
    return new NextResponse(staticFile, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="AidanKirvanCV2025.pdf"',
        'Content-Length': staticFile.length.toString(),
      },
    });
  } catch (error) {
    console.error('Error serving resume:', error);
    return NextResponse.json(
      { error: 'Resume not found' },
      { status: 404 }
    );
  }
}

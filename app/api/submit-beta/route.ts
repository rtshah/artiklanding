import { NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw9vXF3kgIXx6H4gnML-ceBLMcD2XCBem3f3YgoUfgVJW40Mh0AmKpp3nstohphN4rT/exec';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        description: body.description
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (data.status === 'success') {
      return NextResponse.json({ message: 'Submission successful' });
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
} 
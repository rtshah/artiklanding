import { NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = 'YOUR_NEW_DEPLOYMENT_URL';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        description: body.description
      }),
    });

    if (!response.ok) {
      console.error('Response not ok:', await response.text());
      throw new Error('Submission failed');
    }

    const data = await response.json();
    console.log('Response data:', data);

    if (data.status === 'success') {
      return NextResponse.json({ message: 'Submission successful' });
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    console.error('Error in submit-beta:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
} 
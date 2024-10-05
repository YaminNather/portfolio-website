import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
    const requestBody = await request.json();
    const name = requestBody['name'] as string;
    const email = requestBody['email'] as string;
    const message = requestBody['message'] as string;

    const createMailResponse = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['2001s.yn@gmail.com'],
        subject: "From Portfolio",
        html: `
          <p>
            Message from: ${name}, ${email}
            <br />
            <strong>${message}</strong>
          </p>
        `
    });

    if (createMailResponse.error) {
        console.log(`CustomLog: Error sending email: ${createMailResponse.error}`);
        return Response.error();
    }
    
    return Response.json({});
}
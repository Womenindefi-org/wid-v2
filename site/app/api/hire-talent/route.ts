import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
	try {
		const data = await request.json();

		const transporter = nodemailer.createTransport({
			host: process.env.BREVO_SMTP_HOST,
			port: parseInt(process.env.BREVO_SMTP_PORT || '587'),
			secure: false,
			auth: {
				user: process.env.BREVO_SMTP_USER,
				pass: process.env.BREVO_SMTP_KEY,
			},
		});

		const htmlEmail = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Hire Talent Request - Women in DeFi</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f4f4;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td align="center" style="background: linear-gradient(135deg, #0A74EF 0%, #0862d4 100%); padding: 40px 30px;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                New Hire Talent Request
              </h1>
              <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 14px; opacity: 0.9;">
                Women in DeFi
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <p style="margin: 0 0 30px 0; color: #333333; font-size: 16px; line-height: 1.5;">
                A new talent hire request has been submitted through the Women in DeFi website.
              </p>

              <!-- Company Information -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 30px;">
                <tr>
                  <td colspan="2" style="padding-bottom: 15px;">
                    <h2 style="margin: 0; color: #0A74EF; font-size: 18px; font-weight: 600; border-bottom: 2px solid #0A74EF; padding-bottom: 10px;">
                      Company Information
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; width: 40%; color: #666666; font-size: 14px; font-weight: 600;">
                    Company Name:
                  </td>
                  <td style="padding: 12px 0; color: #333333; font-size: 14px;">
                    ${data.companyName}
                  </td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                  <td style="padding: 12px 0; color: #666666; font-size: 14px; font-weight: 600;">
                    Website:
                  </td>
                  <td style="padding: 12px 0; color: #333333; font-size: 14px;">
                    <a href="${
																					data.companyWebsite
																				}" style="color: #0A74EF; text-decoration: none;">${
			data.companyWebsite
		}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #666666; font-size: 14px; font-weight: 600;">
                    Social Media:
                  </td>
                  <td style="padding: 12px 0; color: #333333; font-size: 14px;">
                    ${data.socialMedia}
                  </td>
                </tr>
              </table>

              <!-- Contact Information -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 30px;">
                <tr>
                  <td colspan="2" style="padding-bottom: 15px;">
                    <h2 style="margin: 0; color: #0A74EF; font-size: 18px; font-weight: 600; border-bottom: 2px solid #0A74EF; padding-bottom: 10px;">
                      Contact Person
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; width: 40%; color: #666666; font-size: 14px; font-weight: 600;">
                    Full Name:
                  </td>
                  <td style="padding: 12px 0; color: #333333; font-size: 14px;">
                    ${data.fullName}
                  </td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                  <td style="padding: 12px 0; color: #666666; font-size: 14px; font-weight: 600;">
                    Email:
                  </td>
                  <td style="padding: 12px 0; color: #333333; font-size: 14px;">
                    <a href="mailto:${
																					data.email
																				}" style="color: #0A74EF; text-decoration: none;">${
			data.email
		}</a>
                  </td>
                </tr>
              </table>

              <!-- Job Details -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 30px;">
                <tr>
                  <td colspan="2" style="padding-bottom: 15px;">
                    <h2 style="margin: 0; color: #0A74EF; font-size: 18px; font-weight: 600; border-bottom: 2px solid #0A74EF; padding-bottom: 10px;">
                      Job Details
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; width: 40%; color: #666666; font-size: 14px; font-weight: 600;">
                    Job Role:
                  </td>
                  <td style="padding: 12px 0; color: #333333; font-size: 14px;">
                    ${data.jobRole}
                  </td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                  <td style="padding: 12px 0; color: #666666; font-size: 14px; font-weight: 600;">
                    Experience Level:
                  </td>
                  <td style="padding: 12px 0; color: #333333; font-size: 14px;">
                    ${data.experienceLevel}
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 20px 0 12px 0; color: #666666; font-size: 14px; font-weight: 600;">
                    Job Description:
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 0 0 12px 0;">
                    <div style="background-color: #f9f9f9; padding: 20px; border-radius: 6px; color: #333333; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
${data.jobDescription}
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Timestamp -->
              <p style="margin: 30px 0 0 0; padding-top: 20px; border-top: 1px solid #eeeeee; color: #999999; font-size: 12px;">
                Submitted on ${new Date().toLocaleString('en-US', {
																	weekday: 'long',
																	year: 'numeric',
																	month: 'long',
																	day: 'numeric',
																	hour: '2-digit',
																	minute: '2-digit',
																	timeZoneName: 'short',
																})}
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="background-color: #f9f9f9; padding: 30px; border-top: 1px solid #eeeeee;">
              <p style="margin: 0 0 10px 0; color: #666666; font-size: 14px;">
                <strong>Women in DeFi</strong>
              </p>
              <p style="margin: 0; color: #999999; font-size: 12px;">
                Empowering African women in blockchain, Web3, and decentralized finance
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

		await transporter.sendMail({
			from: `"Women in DeFi" <${process.env.SMTP_SENDER}>`,
			to: process.env.SMTP_RECIEVER,
			subject: `New Hire Talent Request - ${data.companyName}`,
			html: htmlEmail,
			replyTo: data.email,
		});

		return NextResponse.json(
			{ message: 'Email sent successfully!' },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: 'Failed to send email', error: String(error) },
			{ status: 500 }
		);
	}
}

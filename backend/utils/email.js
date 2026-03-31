import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: join(__dirname, '../.env') })

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export const sendEmail = async (to, subject, html) => {
  try {
    // Check if credentials are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('\x1b[33m%s\x1b[0m', '--- 📩 EMAIL MOCK (Set EMAIL_USER & EMAIL_PASS in .env for real emails) ---')
      console.log(`To: ${to}`)
      console.log(`Subject: ${subject}`)
      // console.log(`Content: ${html}`)
      console.log('\x1b[33m%s\x1b[0m', '--------------------------------------------------------------------------')
      return true
    }

    const info = await transporter.sendMail({
      from: `"Future School Admin" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    })

    console.log('Email sent: %s', info.messageId)
    return true
  } catch (error) {
    console.error('Email Error:', error)
    return false
  }
}

export const getApplicationEmailTemplate = (data) => {
  const isAdmission = data.applicationType === 'admission'
  
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
      <div style="background-color: #c0392b; color: white; padding: 30px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">New Application Received</h1>
        <p style="margin: 5px 0 0; opacity: 0.8;">${isAdmission ? 'Student Admission' : 'Job Application'}</p>
      </div>
      <div style="padding: 30px; color: #333; line-height: 1.6;">
        <h2 style="color: #c0392b; border-bottom: 2px solid #f8f8f8; padding-bottom: 10px; margin-top: 0;">Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          ${isAdmission ? `
            <tr><td style="padding: 10px 0; font-weight: bold; width: 150px;">Student Name:</td><td>${data.studentName}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: bold;">Parent Name:</td><td>${data.parentName}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: bold;">Grade/Class:</td><td>${data.currentGrade}</td></tr>
          ` : `
            <tr><td style="padding: 10px 0; font-weight: bold; width: 150px;">Candidate Name:</td><td>${data.candidateName}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: bold;">Job Title:</td><td>${data.jobTitle}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: bold;">Qualifications:</td><td>${data.qualifications}</td></tr>
          `}
          <tr><td style="padding: 10px 0; font-weight: bold;">Email:</td><td>${data.email}</td></tr>
          <tr><td style="padding: 10px 0; font-weight: bold;">Phone:</td><td>${data.phone}</td></tr>
          <tr><td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Message:</td><td>${data.message || 'N/A'}</td></tr>
        </table>
        
        <div style="margin-top: 30px; padding: 20px; background-color: #f9f9f9; border-radius: 8px; text-align: center;">
          <p style="margin: 0; color: #666; font-size: 14px;">Review this application in the admin dashboard</p>
          <a href="${process.env.ADMIN_URL || 'http://localhost:3000'}/admin/applications" style="display: inline-block; margin-top: 15px; padding: 12px 25px; background-color: #c0392b; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Go to Dashboard</a>
        </div>
      </div>
      <div style="background-color: #f8f8f8; color: #999; padding: 20px; text-align: center; font-size: 12px;">
        &copy; ${new Date().getFullYear()} Future School CBSE. All rights reserved.
      </div>
    </div>
  `
}

export const getApprovalEmailTemplate = (data) => {
  const name = data.studentName || data.candidateName || 'Applicant'
  const isAdmission = data.applicationType === 'admission'

  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
      <div style="background-color: #27ae60; color: white; padding: 40px; text-align: center;">
        <div style="font-size: 50px; margin-bottom: 10px;">✅</div>
        <h1 style="margin: 0; font-size: 26px;">Application Approved!</h1>
      </div>
      <div style="padding: 40px; color: #333; line-height: 1.8;">
        <p style="font-size: 18px; margin-top: 0;">Dear <strong>${name}</strong>,</p>
        <p>We are pleased to inform you that your application for <strong>${isAdmission ? 'Student Admission' : 'the position of ' + data.jobTitle}</strong> at Future School CBSE has been <strong>approved</strong>!</p>
        
        <p>Our team will contact you shortly with the next steps and further instructions regarding the ${isAdmission ? 'enrollment' : 'joining'} process.</p>
        
        ${data.adminNotes ? `
          <div style="margin-top: 25px; padding: 20px; border-left: 4px solid #27ae60; background-color: #f1fcf4;">
            <p style="margin: 0; font-weight: bold; color: #27ae60;">Additional Notes:</p>
            <p style="margin: 5px 0 0; color: #555;">${data.adminNotes}</p>
          </div>
        ` : ''}

        <p style="margin-top: 30px;">If you have any immediate questions, feel free to contact us at <a href="mailto:${process.env.ADMIN_EMAIL || 'admissions@futureschool.edu.in'}" style="color: #c0392b; text-decoration: none; font-weight: bold;">${process.env.ADMIN_EMAIL || 'admissions@futureschool.edu.in'}</a>.</p>
        
        <p style="margin-top: 40px;">Best Regards,<br><strong>Future School Management</strong></p>
      </div>
      <div style="background-color: #f8f8f8; color: #999; padding: 20px; text-align: center; font-size: 12px;">
        &copy; ${new Date().getFullYear()} Future School CBSE. All rights reserved.
      </div>
    </div>
  `
}

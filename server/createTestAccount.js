import nodemailer from 'nodemailer';

// Create a test account with Ethereal Email
const createTestAccount = async () => {
  try {
    const testAccount = await nodemailer.createTestAccount();
    
    console.log('📧 Test Email Account Created:');
    console.log('EMAIL_HOST=smtp.ethereal.email');
    console.log('EMAIL_PORT=587');
    console.log(`EMAIL_USER=${testAccount.user}`);
    console.log(`EMAIL_PASS=${testAccount.pass}`);
    console.log(`EMAIL_FROM=${testAccount.user}`);
    console.log('EMAIL_TO=contact@aiforbussiness.com');
    console.log('\n🔗 Preview emails at: https://ethereal.email/');
    
  } catch (error) {
    console.error('Error creating test account:', error);
  }
};

createTestAccount();

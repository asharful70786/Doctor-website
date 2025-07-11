import rateLimit from 'express-rate-limit';

//one ip in a day can do 6 questions
const Limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  max: 6,
  message: {
    status: 429,
    error: "Limit exceeded. You can ask only 6 questions per day.",
  },
  keyGenerator: (req) => req.ip, 
});

export default Limiter;

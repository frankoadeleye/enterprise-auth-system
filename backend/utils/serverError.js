export const handleServerError = (res, error, context = "Server Error") => {
  console.error(`
====================================
${new Date().toISOString()}
${context}
====================================
${error.message}
====================================
`);

  return res.status(500).json({
    success: false,
    message: "Something went wrong. Please try again later.",
  });
};

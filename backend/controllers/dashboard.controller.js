import { User } from "../models/user.model.js";

import { successResponse } from "../utils/apiResponse.js";
import { handleServerError } from "../utils/serverError.js";

export const getDashboardData = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select(
      "_id name email isVerified lastLogin createdAt",
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return successResponse(res, "Dashboard data fetched successfully", {
      user,
    });
  } catch (error) {
    return handleServerError(res, error, "Get Dashboard Data Error");
  }
};

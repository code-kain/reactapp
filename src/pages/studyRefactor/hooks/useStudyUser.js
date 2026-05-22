// 학습 사용자 훅 담당: 로그인 사용자 정보와 임시 userId 관리를 담당
import useAuthStore from "../../../store/authStore";

export const useStudyUser = () => {
  const user = useAuthStore((state) => state.user);

  return {
    user,
    userId: user?.id || user?.userId || 1,
    isGuest: !user,
  };
};

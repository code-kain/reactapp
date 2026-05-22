// 출석 훅 담당: 출석 화면 데이터 조회와 상태 관리를 담당
import { useEffect, useState } from "react";
import { fetchAttendanceSummary } from "../apis/AttendanceApi";
import { attendanceMock } from "../attendance/data/attendanceMock";
import { mapAttendanceSummary } from "../mappers/attendanceMapper";
import { useStudyUser } from "./useStudyUser";

export const useAttendance = () => {
  const { userId } = useStudyUser();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [summary, setSummary] = useState(attendanceMock);

  // 출석조회함수: 백엔드 출석 현황을 불러오고 실패하면 임시데이터를 사용합니다.
  useEffect(() => {
    let ignore = false;

    const loadAttendance = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchAttendanceSummary(userId);
        if (ignore) return;
        setSummary(mapAttendanceSummary(data, attendanceMock));
      } catch {
        if (ignore) return;
        setSummary(attendanceMock);
        setError("출석 서버 연결이 어려워 임시데이터를 보여주고 있어요.");
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    loadAttendance();

    return () => {
      ignore = true;
    };
  }, [userId]);

  return {
    loading,
    error,
    summary,
  };
};

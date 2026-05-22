// 퀴즈 데이터 변환 담당: 백엔드 퀴즈 응답을 화면용 데이터로 변환
export const mapQuizQuestion = (question, choices = []) => {
  const correctChoice = choices.find((choice) => choice.quizChoiceIsCorrect === 1);

  return {
    id: question.id,
    title: question.quizQuestionDetail,
    lessonTitle: question.quizQuestionType,
    correctText: correctChoice?.quizChoiceDetail || "",
    feedback: question.quizQuestionFeedback || "정답을 확인했어요.",
    answers: choices.map((choice) => ({
      id: choice.id,
      example: choice.quizChoiceDetail,
      emoji: choice.quizChoiceEmoji || "",
      correct: choice.quizChoiceIsCorrect === 1,
    })),
  };
};

export const mapQuizAnswersForSubmit = (answers = []) =>
  answers.map((answer) => ({
    questionId: answer.questionId,
    choiceId: answer.selectedId || answer.answerId,
    answerId: answer.selectedId || answer.answerId,
    correct: answer.isCorrect ?? answer.correct ?? false,
  }));

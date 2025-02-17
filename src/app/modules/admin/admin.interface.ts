export interface TSchedule {
  className: string;
  date: string;
  time: string;
  trainerId: string;
  trainees: { traineeName: string; email: string }[];
}

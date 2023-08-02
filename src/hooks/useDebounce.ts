import { onUnmounted, ref } from "vue";

export default function <T extends any[] = any[]>(
  callback: (...args: T) => any,
  delay = 1 * 1000
) {
  const timer = ref<NodeJS.Timeout>();
  function startTimer(...args: T) {
    if (timer.value !== null) stopTimer();
    timer.value = setTimeout(() => {
      stopTimer();
      callback(...args);
    }, delay);
  }
  const stopTimer = () => {
    if (timer.value === void 0) return;
    clearTimeout(timer.value);
    timer.value = void 0;
  };
  onUnmounted(() => {
    stopTimer();
  });
  return {
    startTimer,
    stopTimer
  };
}

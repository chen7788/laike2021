export default {
  toMoreSecPage (state, showPage) {
    state.showPage = showPage
  },
  toHome (state, showPage) {
    state.showPage = showPage
  },
  toCouponCenter (state, showPage) {
    state.showPage = showPage
  },
  secondTime (state, secondTime) {
    state.secondTime = secondTime
  // state.endtime = secondTime.current_time[0].endtime
  }
}

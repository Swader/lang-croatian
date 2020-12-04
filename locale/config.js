// Custom Croatian Moment.js Locales
// Based on: https://github.com/moment/moment/blob/develop/locale/fr.js
// Thanks to: https://github.com/qiaeru

moment.locale('hr', {
  months: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split(
    '_'
  ),
  monthsShort: 'sij_velj_ožu_tra_svi_lip_srp_kol_ruj_lis_stu_pros'.split(
    '_'
  ),
  monthsParseExact: true,
  weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
  weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
  weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm',
  },
  calendar: {
    sameDay: '[Danas u] LT',
    nextDay: '[Sutra u] LT',
    nextWeek: 'dddd [u] LT',
    lastDay: '[Jučer u] LT',
    lastWeek: 'dddd [prošlog tjedna] LT',
    sameElse: 'L',
  },
  relativeTime: {
    future: 'za %s',
    past: 'prije %s',
    s: 'nekoliko sekundi',
    ss: '%d sekundi',
    m: 'minute',
    mm: '%d minuta',
    h: 'sat vremena',
    hh: '%d sati',
    d: 'jedan dan',
    dd: '%d dana',
    M: 'mjesec dana',
    MM: '%d mjeseci',
    y: 'godinu dana',
    yy: '%d godina',
  },
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4, // The week that contains Jan 4th is the first week of the year.
  },
});

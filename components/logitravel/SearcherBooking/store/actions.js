/* ==========================================================================
   MSearcherCir > Client > Store > Actions
   ========================================================================== */

/* Types */
const DESTROY = 'SEARCHER::DESTROY';
const SET_DATA = 'SEARCHER::SET_DATA';
const SET_TAGS = 'SEARCHER::SET_TAGS';
const SET_LOB = 'SEARCHER::SET_LOB';

/* Actions */
const destroy = () => ({ type: DESTROY });
const setTags = (payload) => ({ type: SET_TAGS, payload });
const setLob = (payload) => ({ type: SET_LOB, payload });
const setData = (payload) => ({ type: SET_DATA, payload });

/* Exports */
exports = {
  types: {
    DESTROY,
    SET_LOB,
    SET_TAGS,
    SET_DATA,
  },
  actions: {
    destroy,
    setLob,
    setTags,
    setData,
  },
};

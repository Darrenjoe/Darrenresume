import axios from 'axios'

export const api = process.env.REACT_APP_RECORDS_API_URL || 'https://5bf7c3745cd31800137928d8.mockapi.io'

export const getMenu = () =>
  axios.get(`${api}/resume_menu`)

export const getSkills = () =>
  axios.get(`${api}/resume_skills`)

export const getMbSkills = () =>
  axios.get(`${api}/resume_mbskills`)

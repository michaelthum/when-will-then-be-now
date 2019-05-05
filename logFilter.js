function filterLogsByEnv(logs, env) {
  const filteredLogs = []

  logs.forEach((log) => {
    if (log.environment === env) {
      filteredLogs.push(log)
    }
  })

  return filteredLogs
}

function filterLogsOnDate(logs, dateFilter) {
  const filteredLogs = []
  const parsedDateFilter = new Date(dateFilter).toDateString()

  logs.forEach((log) => {
    const timestampDate = new Date(log.timestamp).toDateString()

    if (timestampDate === parsedDateFilter) {
      filteredLogs.push(log)
    }
  })

  return filteredLogs
}

export function filterLogs(logs, env, dateFilter) {
  const envLogs = filterLogsByEnv(logs, env)

  if (dateFilter) {
    return filterLogsOnDate(envLogs, dateFilter)
  } else {
    return envLogs
  }
}

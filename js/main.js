const sleepTime = 5000 // Aumentar o intervalo para 5 segundos
const block_servers_urls_list = [
  "https://blocklistproject.github.io/Lists/adguard/ads-ags.txt",
  "https://blocklistproject.github.io/Lists/adguard/everything-ags.txt"
]
const html_tags_list = [
  "img",
  "video",
  "iframe",
  "embed",
  "object",
  "source",
  "amp-img"
]

async function main() {
  try {
    const serverList = await getBlockedServers(block_servers_urls_list)
    setInterval(() => {
      html_tags_list.forEach((tag) => blockAds(serverList, tag))
    }, sleepTime)
  } catch (error) {
    console.error(error)
  }
}

async function fetchBlockedServers(url) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch blocked servers from ${url}`)
  }
  return response.text()
}

async function getBlockedServers(urls) {
  const responses = await Promise.all(
    urls.map((url) => fetchBlockedServers(url))
  )
  const servers = new Set()

  responses.forEach((response) => {
    const lines = response.split("\n")
    lines.forEach((line) => {
      if (line.includes("||")) {
        const server = line.split("||")[1].split("^")[0].split("/")[0].trim()
        servers.add(server)
      }
    })
  })

  return [...servers].filter((server) => server !== window.location.hostname)
}

function blockAds(bannedAdsServers, htmlTag) {
  const elements = document.querySelectorAll(htmlTag)

  elements.forEach((element) => {
    bannedAdsServers.forEach((server) => {
      if (server) {
        if (
          htmlTag === "object" &&
          element.data &&
          element.data.includes(server)
        ) {
          console.log(`BLOCKED: ${htmlTag} - ${element.data}`)
          element.data = ""
        } else if (element.src && element.src.includes(server)) {
          console.log(`BLOCKED: ${htmlTag} - ${element.src}`)
          element.src = ""
        }
      }
    })
  })
}

main()

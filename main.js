const links_social_media = {
  github: 'Anadalbello',
  instagram: 'anabeatriz.odb',
  twitter: 'beatriz_dal',
  facebook: 'anabeatriz.orlandodalbello',
  linkedin: 'in/ana-beatriz-orlando-dal-bello-36a821125'
}

function change_social_media_links() {
  for (let li of social_links.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${links_social_media[social]}`
  }
}

change_social_media_links()

function get_git_hub_profile_infos() {
  const url = `https://api.github.com/users/${links_social_media.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      user_name.textContent = data.name
      user_bio.textContent = data.bio
      user_link.href = data.html_url
      user_image.src = data.avatar_url
      //user_link.textContent=data.login
    })
}
get_git_hub_profile_infos()

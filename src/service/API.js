import axios from "axios";
const userName = "MishynMykhailo";
// function to get avatar from GitHub by userName
export async function getAvatarFromGitHub() {
  const instance = axios.create({
    baseURL: `https://api.github.com/users/${userName}`,
  });
  try {
    const response = await instance.get();

    return response;
  } catch (error) {
    console.error(error);
  }
}
getAvatarFromGitHub();

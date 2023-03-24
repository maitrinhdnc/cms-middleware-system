import os
import shutil
import git
import json

class BlogService():
    def save_blog_to_git(self, webhook_data: dict) -> str:
        dir_name = webhook_data.get('id','')
        cms_data = json.dumps(webhook_data)

        webhooks_dir = os.path.join(os.path.dirname(__file__), 'webhooks')
        is_tmp_dir_exist = os.path.exists(webhooks_dir)
        if not is_tmp_dir_exist:
            os.mkdir(webhooks_dir)

        domain_dir = os.path.join(webhooks_dir, f"{dir_name}")
        is_domain_repo_exist = os.path.exists(domain_dir)
        if is_domain_repo_exist: 
            shutil.rmtree(domain_dir)

        cms_file = os.path.join(webhooks_dir, domain_dir, 'cms_data.json')
 
        repo_git_url = "http://git:3000/dso734/cms-content.git"
        repo = git.Repo.clone_from(repo_git_url, domain_dir)

        with open(cms_file, 'w') as f:
            f.write(cms_data)
            
        origin = repo.remote('origin')
        origin.pull()
        repo.index.add(['cms_data.json'])
        repo.index.commit("bot >> update contents")
        origin.push()
        print(cms_data)
    
        return cms_data
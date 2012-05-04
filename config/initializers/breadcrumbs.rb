Gretel::Crumbs.layout do

  # Remember to restart your application after editing this file.

  # Example crumbs:

  crumb :root do
    link "uurbas.co.cc", root_path
  end

  crumb :articles do
    link "articles", articles_path
  end

    crumb :article do |article|
      link article.title, articles_path(article)
      parent :articles
    end

      crumb :article_edit do |article|
        link "edit", articles_path(article)
        parent :articles
      end

      crumb :article_create do |article|
        link "new", articles_path(article)
        parent :articles
      end

  crumb :contact do
    link "contact", contact_path
  end

  crumb :sign_in do
    link "sign in", sign_in_path
  end

  crumb :sign_up do
    link "sign up", sign_up_path
  end

  # crumb :project do |project|
  #   link lambda { |project| "#{project.name} (#{project.id.to_s})" }, project_path(project)
  #   parent :projects
  # end

  # crumb :project_issues do |project|
  #   link "Issues", project_issues_path(project)
  #   parent :project, project
  # end

  # crumb :issue do |issue|
  #   link issue.name, issue_path(issue)
  #   parent :project_issues, issue.project
  # end

end

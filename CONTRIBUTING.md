# 📝 Blog Contribution Guidelines

To maintain consistency and quality across all blog posts in this Jekyll-powered blog, follow the conventions below.

---

## 📁 1. Post File Location and Naming

* All blog posts should be placed inside the `_posts/` directory.
* Each file must follow this naming convention:

```
YYYY-MM-DD-title-of-the-post.md
```

Example:

```
2025-05-22-how-i-built-my-blog.md
```

---

## 🧾 2. Required Front Matter

Each post **must start** with the following front matter structure:

```yaml
---
layout: post
title: "Your Post Title Here"
date: YYYY-MM-DD
tags: [tag1, tag2]
categories: [category1, category2] # Lowercase only
author: "Your Name"
description: "A short description of the post for SEO and previews"
image: "/assets/images/optional-featured-image.jpg" # Optional
excerpt: "A short excerpt to be shown in previews or cards"
---
```

> ✅ **Use lowercase only** for all category names. This improves consistency, helps SEO, and avoids routing issues on case-sensitive systems.

---

## 🏷️ 3. Tag and Category Usage

* Use **tags** for specific topics or technologies (e.g., `kafka`, `rest-api`, `hashmap`).
* Use **categories** for broader sections (e.g., `dsa`, `backend`, `java`, `ai-ml`, `maths`).
* Posts can have multiple categories and tags, but be relevant and consistent.

---

## 🗂️ 4. When Adding a New Category

If your post introduces a **new category**, follow these steps:

1. ✅ Add the lowercase category name to the category list in `blog.html` (e.g., `{% assign categories = "maths,ai-ml,java" %}`).
2. ✅ Create a new markdown file in the `categories/` directory:

   Example: `categories/ai-ml.md`

   ```yaml
   ---
   layout: category
   title: AI/ML
   category: ai-ml
   permalink: /categories/ai-ml/
   ---
   ```

> 🔁 The `title` in front matter can use title case, but the `category:` and file name **must use lowercase**.

---

## 🖼️ 5. Optional Enhancements

* Add a `featured image` using the `image:` field if needed.
* Keep `excerpt:` short and relevant (\~20–30 words).
* Use `##`, `###` headings within the post to improve readability.
* Write using [Markdown syntax](https://www.markdownguide.org/cheat-sheet/).

---

## 🚫 6. Things to Avoid

* ❌ Avoid inline HTML unless absolutely necessary.
* ❌ Don’t forget to include `layout: post` in front matter.
* ❌ Avoid mixed-case or deeply nested categories like `[Java, Spring, Rest]`. Stick to flat, lowercase categories.

---

## 🔄 7. Updating Search and Blog Cards

* If you add or rename categories, update the category list in `blog.html`.
* No additional configuration is needed for search.

---

## ✅ Summary

* Use lowercase for all category names.
* Follow naming and frontmatter conventions strictly.
* Update `blog.html` and create new `categories/` pages when new categories are added.
* Use descriptive excerpts and SEO-friendly metadata.

Let's keep the blog well-structured and easy to navigate!

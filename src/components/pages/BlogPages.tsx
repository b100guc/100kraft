import { Link } from "@tanstack/react-router";
import { posts, type BlogPost } from "@/data/blog";
import { services } from "@/data/services";
import { localePath } from "@/data/translations";
import { Arrow, ButtonLink } from "@/components/site/Button";
import { ContactBlock, SiteLayout } from "@/components/site/Layout";
import { Picture } from "@/components/site/Picture";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/Sections";

const dateFmt = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function PostCard({ post, large = false }: { post: BlogPost; large?: boolean }) {
  return (
    <Link to={`/blog/${post.slug}` as string} className="group block">
      <Picture
        image={post.cover}
        alt={post.coverAlt}
        sizes={
          large
            ? "(min-width: 768px) 50vw, 100vw"
            : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        }
        className="aspect-[16/9] overflow-hidden bg-tile"
        imgClassName="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
      />
      <p className="eyebrow mt-4">
        {post.category} · {post.minutes} dk
      </p>
      <h3
        className={`mt-2 font-medium leading-snug transition-colors group-hover:text-accent ${
          large ? "text-2xl md:text-3xl" : "text-xl"
        }`}
      >
        {post.title}
      </h3>
      {large && <p className="mt-3 max-w-xl text-muted-foreground">{post.description}</p>}
    </Link>
  );
}

function PostRow({ post }: { post: BlogPost }) {
  return (
    <li className="border-t border-border last:border-b">
      <Link
        to={`/blog/${post.slug}` as string}
        className="group grid gap-5 py-8 sm:grid-cols-[16rem_1fr] sm:gap-8 md:grid-cols-[20rem_1fr_auto] md:items-center"
      >
        <Picture
          image={post.cover}
          alt={post.coverAlt}
          sizes="(min-width: 768px) 20rem, (min-width: 640px) 16rem, 100vw"
          className="aspect-[16/9] overflow-hidden bg-tile"
          imgClassName="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
        <div className="min-w-0">
          <p className="eyebrow">
            {post.category} · {post.minutes} dk
          </p>
          <h3 className="mt-2 text-xl font-medium leading-snug transition-colors group-hover:text-accent md:text-2xl">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 max-w-2xl text-[0.9375rem] text-muted-foreground">
            {post.description}
          </p>
        </div>
        <Arrow className="hidden text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-foreground md:block" />
      </Link>
    </li>
  );
}

export function BlogIndexPage() {
  const categories = [...new Set(posts.map((p) => p.category))];
  return (
    <SiteLayout lang="tr">
      <PageHeader
        title="Blog"
        lead="Atölyeden notlar: malzemeler, baskı teknikleri, kalıplar ve bir fikrin ürüne dönüşme yolu."
      />
      <section className="wrap pb-20 md:pb-28">
        <h2 className="sr-only">Yazılar</h2>
        <p className="eyebrow mb-6">
          {posts.length} yazı · {categories.join(" · ")}
        </p>
        <ol>
          {posts.map((p) => (
            <PostRow key={p.slug} post={p} />
          ))}
        </ol>
      </section>
      <ContactBlock lang="tr" />
    </SiteLayout>
  );
}

export function BlogPostPage({ post }: { post: BlogPost }) {
  const related = services.filter((s) => s.posts.includes(post.slug));
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <SiteLayout lang="tr">
      <article className="pt-24 md:pt-28">
        <header className="wrap">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-[0.9375rem] text-muted-foreground hover:text-foreground"
          >
            <Arrow className="rotate-180 transition-transform group-hover:-translate-x-1" />
            Blog
          </Link>
          <div className="mt-8 max-w-4xl">
            <p className="eyebrow">
              {post.category} · {post.minutes} dk okuma ·{" "}
              <time dateTime={post.date}>{dateFmt.format(new Date(post.date))}</time>
            </p>
            <h1 className="display mt-4 text-[11vw] md:text-7xl">{post.title}</h1>
            <p className="mt-6 max-w-2xl text-xl leading-snug text-muted-foreground">
              {post.description}
            </p>
          </div>
          <Picture
            image={post.cover}
            alt={post.coverAlt}
            sizes="100vw"
            priority
            className="mt-10 aspect-[16/9] overflow-hidden bg-tile"
          />
        </header>

        <div className="wrap grid gap-12 py-14 md:py-20 lg:grid-cols-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav className="sticky top-24" aria-label="İçindekiler">
              <p className="eyebrow">İçindekiler</p>
              <ol className="mt-4 space-y-2 text-[0.9375rem]">
                {post.toc.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="text-muted-foreground hover:text-foreground">
                      {h.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="min-w-0 lg:col-span-7">
            <div className="prose-kraft" dangerouslySetInnerHTML={{ __html: post.html }} />

            <div className="mt-14 border-t border-border pt-8">
              <p className="text-lg">
                Benzer bir parça ya da ürün mü düşünüyorsunuz? Eskizinizi gönderin, nasıl
                yapılacağını birlikte konuşalım.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="/start-project">Proje başlat</ButtonLink>
                {related.map((s) => (
                  <ButtonLink
                    key={s.slug}
                    href={localePath("tr", `/services/${s.slug}`)}
                    variant="outline"
                  >
                    {s.title.tr}
                  </ButtonLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="border-t border-border">
        <div className="wrap py-20 md:py-28">
          <h2 className="display text-5xl md:text-6xl">Diğer yazılar</h2>
          <div className="mt-10 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

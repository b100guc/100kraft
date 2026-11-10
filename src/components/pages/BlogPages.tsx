import { Link } from "@tanstack/react-router";
import { posts, type BlogPost } from "@/data/blog";
import { services } from "@/data/services";
import { localePath } from "@/data/translations";
import { Arrow, ButtonLink } from "@/components/site/Button";
import { ContactBlock, SiteLayout } from "@/components/site/Layout";
import { Picture } from "@/components/site/Picture";
import { Reveal } from "@/components/site/Reveal";
import { ReadingProgress, Toc } from "@/components/site/Reading";
import { PageHeader, SectionHead } from "@/components/site/Sections";

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
      <p className="eyebrow mt-4 flex justify-between">
        <span>{post.category}</span>
        <span>{post.minutes} dk</span>
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

function PostRow({ post, index }: { post: BlogPost; index: number }) {
  return (
    <li className="border-t border-border last:border-b">
      <Link
        to={`/blog/${post.slug}` as string}
        className="group relative isolate grid gap-5 py-8 before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-tile before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.22,1,0.36,1)] hover:before:scale-x-100 sm:grid-cols-[16rem_1fr] sm:gap-8 md:grid-cols-[3rem_20rem_1fr_auto] md:items-center motion-reduce:before:transition-none"
      >
        <span className="spec hidden self-start pt-1 text-accent transition-transform duration-500 group-hover:translate-x-3 md:block">
          {String(index + 1).padStart(2, "0")}
        </span>
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
          <h3 className="mt-2 text-xl font-medium leading-snug md:text-[1.75rem]">{post.title}</h3>
          <p className="mt-2 line-clamp-2 max-w-2xl text-[0.9375rem] text-muted-foreground">
            {post.description}
          </p>
        </div>
        <Arrow className="mr-2 hidden text-muted-foreground transition-all duration-300 group-hover:-translate-x-3 group-hover:text-foreground md:block" />
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
        eyebrow={`${posts.length} yazı`}
        lead="Atölyeden notlar: malzemeler, baskı teknikleri, kalıplar ve bir fikrin ürüne dönüşme yolu."
      />
      <section className="wrap pb-20 md:pb-28">
        <h2 className="sr-only">Yazılar</h2>
        <p className="eyebrow mb-6">{categories.join(" · ")}</p>
        <ol>
          {posts.map((p, i) => (
            <PostRow key={p.slug} post={p} index={i} />
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
      <ReadingProgress target="post-body" />
      <article className="pt-24 md:pt-28">
        <header className="wrap">
          <div className="eyebrow flex items-center gap-3">
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Arrow className="h-3 w-3 rotate-180 transition-transform group-hover:-translate-x-1" />
              Blog
            </Link>
            <span className="text-border">/</span>
            <span className="text-accent">{post.category}</span>
            <span aria-hidden className="h-px flex-1 bg-border" />
            <span>
              {post.minutes} dk ·{" "}
              <time dateTime={post.date}>{dateFmt.format(new Date(post.date))}</time>
            </span>
          </div>
          <div className="mt-8 max-w-5xl">
            <h1 className="display text-[11vw] md:text-7xl xl:text-8xl">{post.title}</h1>
            <p className="mt-6 max-w-2xl text-xl leading-snug text-muted-foreground">
              {post.description}
            </p>
          </div>
          <Picture
            image={post.cover}
            alt={post.coverAlt}
            sizes="100vw"
            priority
            className="print-in mt-10 aspect-[16/9] overflow-hidden bg-tile"
          />
        </header>

        <div id="post-body" className="wrap grid gap-12 py-14 md:py-20 lg:grid-cols-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav className="sticky top-24" aria-label="İçindekiler">
              <p className="eyebrow">İçindekiler</p>
              <Toc items={post.toc} />
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
                <ButtonLink href="/start-project">
                  Proje başlat
                  <Arrow />
                </ButtonLink>
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
          <SectionHead title="Diğer yazılar" href="/blog" linkLabel="Tüm yazılar" />
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

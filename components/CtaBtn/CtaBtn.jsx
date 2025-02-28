export default function CtaBtn({ url, tagging }) {
  return (
    <div className="cta">
      <a
        href={url}
        className="newbtn"
        data-ms-event="lgEvent"
        data-ms-action={`${tagging.title} - ${tagging.action.toLocaleLowerCase()}`}
        data-ms-label={tagging.label}
        tabIndex={0}
      >
        {tagging.label ? tagging.label : "SHOP NOW"}
      </a>
    </div>
  );
}

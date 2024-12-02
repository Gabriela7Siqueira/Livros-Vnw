import s from "./Header.module.scss";

export default function Header() {
  return (
    <header className={s.HeaderBox}>
      <div className={s.DivBox}>
        <img
          src="https://s3-alpha-sig.figma.com/img/5d1b/cbca/3ccbf0132ee7698277cda5e313a3ac18?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T~0ajvhw~H2FTZhPoJhwZB3CZQff~s4LRjHc-AoWHD-uMI~MxZVjxIfHDwl2pxk~nxl7SxSPvVh2K5vxv~yGL6TABEourZTQ-XgQIS-QHEfMH24KaMmzXSMVmjMdtVo4f0a5scb8MoxaynASlP51PvuPb-z8~yD5N8tAYGu7WfFZTbN6SvNXfmRKZdae2oOGretOBlvVIF16fRAXvK6rlem-wkGYakrkFerBRYEE-BAqZutO-DVhQzBdA~8xQL5l72tDjhVcgICQO5OFpJOZdY2k3WZzlezFkhUyki~jd2pTt7vUSM37iKWW5-qH7ZQ3Mp581e9W7sVlV3JkLBlBhw__"
          alt=""
        />
        <h2>Livros Vai Na Web</h2>
      </div>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Livros Doados</li>
          <li>Quero Doar</li>
        </ul>
      </nav>
      <input type="text" placeholder="O que você procura?" />
    </header>
  );
}


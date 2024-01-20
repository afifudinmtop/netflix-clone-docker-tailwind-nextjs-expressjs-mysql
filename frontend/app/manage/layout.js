import "bootstrap-icons/font/bootstrap-icons.css";

export default function ManageLayout({ children }) {
  return (
    <section>
      <script type="text/javascript" src="jquery-3.5.1.js"></script>
      <link rel="stylesheet" type="text/css" href="datatables.min.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="dataTables.tailwindcss.min.css"
      />
      <script type="text/javascript" src="pdfmake.min.js"></script>
      <script type="text/javascript" src="vfs_fonts.js"></script>
      <script type="text/javascript" src="datatables.min.js"></script>
      {children}
    </section>
  );
}

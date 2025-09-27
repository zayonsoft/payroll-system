export default function YearDeveloped() {
  const startYear = 2025;
  const currentYear = new Date().getFullYear();
  return startYear == currentYear ? (
    <>2025</>
  ) : (
    <>
      {startYear} - {currentYear}
    </>
  );
}

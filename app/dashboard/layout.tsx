function checkUserRole(): string {
  return "user";
}

export default function Layout({
  user,
  admin,
}: {
  user: React.ReactNode;
  admin: React.ReactNode;
}) {
  const role = checkUserRole();

  return <div>{role === "admin" ? admin : user}</div>;
}

import { column, defineDb, defineTable } from "astro:db";

const User = defineTable({
  columns: {
    id: column.text({
      primaryKey: true
    }),
    username: column.text({ unique: true }),
    passwordHash: column.text()
  }
});

const Session = defineTable({
  columns: {
    id: column.text({
      primaryKey: true
    }),
    expiresAt: column.date(),
    userId: column.text({
      references: () => User.columns.id
    })
  }
});

const WaitingList = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    email: column.text({ unique: true }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { User, Session, WaitingList },
});

export function getNotRepeatInManyToManyRelations<T>(
  listIds: string[],
  entities: T[]
) {
  const newTagsIds: string[] = listIds.filter((id) => {
    let isUnique = true;
    entities.forEach((entity: any) => {
      if (String(entity.id) === id) isUnique = false;
    });

    return isUnique;
  });

  return newTagsIds;
}

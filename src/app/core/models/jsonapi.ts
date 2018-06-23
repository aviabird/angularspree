export class CJsonApi {
  id: string | '';
  type: string;
  attributes: Object;
  relationships: Object;
  included: Object;

  toModel(): Object {
    return {
      id: this.id,
      ...this.attributes,
      ...this.loadRelationShips()
    };
  }

  loadRelationShips() {
    const keys = Object.keys(this.relationships || {});
    let newRelationShips = Object.assign({});
    if (keys.length) {
      keys.forEach(relationKey => {
        const includedRelation = this.included[relationKey];
        let formatedIncludedRelation: any;

        if (this.included[relationKey] instanceof Array) {
          formatedIncludedRelation = [];
          includedRelation.forEach(subIncludedRelation => {
            const _subJson = Object.assign(
              new CJsonApi(),
              ...subIncludedRelation.data
            ).toModel();
            formatedIncludedRelation.push(_subJson);
          });
        } else {
          formatedIncludedRelation = Object.assign(
            new CJsonApi(),
            ...this.included[relationKey].data
          ).toModel();
        }
        newRelationShips = {
          ...newRelationShips,
          [relationKey]: formatedIncludedRelation
        };
      });
    }
    return newRelationShips;
  }
}

# `dataCatalogTagTemplateIamMember` Submodule <a name="`dataCatalogTagTemplateIamMember` Submodule" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCatalogTagTemplateIamMember <a name="DataCatalogTagTemplateIamMember" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_catalog_tag_template_iam_member google_data_catalog_tag_template_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.Initializer"></a>

```typescript
import { dataCatalogTagTemplateIamMember } from '@cdktf/provider-google'

new dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember(scope: Construct, id: string, config: DataCatalogTagTemplateIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig">DataCatalogTagTemplateIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig">DataCatalogTagTemplateIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.putCondition"></a>

```typescript
public putCondition(value: DataCatalogTagTemplateIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberCondition">DataCatalogTagTemplateIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCatalogTagTemplateIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.isConstruct"></a>

```typescript
import { dataCatalogTagTemplateIamMember } from '@cdktf/provider-google'

dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.isTerraformElement"></a>

```typescript
import { dataCatalogTagTemplateIamMember } from '@cdktf/provider-google'

dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.isTerraformResource"></a>

```typescript
import { dataCatalogTagTemplateIamMember } from '@cdktf/provider-google'

dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.generateConfigForImport"></a>

```typescript
import { dataCatalogTagTemplateIamMember } from '@cdktf/provider-google'

dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCatalogTagTemplateIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCatalogTagTemplateIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCatalogTagTemplateIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_catalog_tag_template_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCatalogTagTemplateIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference">DataCatalogTagTemplateIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberCondition">DataCatalogTagTemplateIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.tagTemplateInput">tagTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.tagTemplate">tagTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.condition"></a>

```typescript
public readonly condition: DataCatalogTagTemplateIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference">DataCatalogTagTemplateIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: DataCatalogTagTemplateIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberCondition">DataCatalogTagTemplateIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `tagTemplateInput`<sup>Optional</sup> <a name="tagTemplateInput" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.tagTemplateInput"></a>

```typescript
public readonly tagTemplateInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `tagTemplate`<sup>Required</sup> <a name="tagTemplate" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.tagTemplate"></a>

```typescript
public readonly tagTemplate: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCatalogTagTemplateIamMemberCondition <a name="DataCatalogTagTemplateIamMemberCondition" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberCondition.Initializer"></a>

```typescript
import { dataCatalogTagTemplateIamMember } from '@cdktf/provider-google'

const dataCatalogTagTemplateIamMemberCondition: dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_catalog_tag_template_iam_member#expression DataCatalogTagTemplateIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_catalog_tag_template_iam_member#title DataCatalogTagTemplateIamMember#title}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_catalog_tag_template_iam_member#description DataCatalogTagTemplateIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_catalog_tag_template_iam_member#expression DataCatalogTagTemplateIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_catalog_tag_template_iam_member#title DataCatalogTagTemplateIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_catalog_tag_template_iam_member#description DataCatalogTagTemplateIamMember#description}.

---

### DataCatalogTagTemplateIamMemberConfig <a name="DataCatalogTagTemplateIamMemberConfig" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.Initializer"></a>

```typescript
import { dataCatalogTagTemplateIamMember } from '@cdktf/provider-google'

const dataCatalogTagTemplateIamMemberConfig: dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_catalog_tag_template_iam_member#member DataCatalogTagTemplateIamMember#member}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_catalog_tag_template_iam_member#role DataCatalogTagTemplateIamMember#role}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.tagTemplate">tagTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_catalog_tag_template_iam_member#tag_template DataCatalogTagTemplateIamMember#tag_template}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberCondition">DataCatalogTagTemplateIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_catalog_tag_template_iam_member#id DataCatalogTagTemplateIamMember#id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_catalog_tag_template_iam_member#project DataCatalogTagTemplateIamMember#project}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_catalog_tag_template_iam_member#region DataCatalogTagTemplateIamMember#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_catalog_tag_template_iam_member#member DataCatalogTagTemplateIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_catalog_tag_template_iam_member#role DataCatalogTagTemplateIamMember#role}.

---

##### `tagTemplate`<sup>Required</sup> <a name="tagTemplate" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.tagTemplate"></a>

```typescript
public readonly tagTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_catalog_tag_template_iam_member#tag_template DataCatalogTagTemplateIamMember#tag_template}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: DataCatalogTagTemplateIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberCondition">DataCatalogTagTemplateIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_catalog_tag_template_iam_member#condition DataCatalogTagTemplateIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_catalog_tag_template_iam_member#id DataCatalogTagTemplateIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_catalog_tag_template_iam_member#project DataCatalogTagTemplateIamMember#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/data_catalog_tag_template_iam_member#region DataCatalogTagTemplateIamMember#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataCatalogTagTemplateIamMemberConditionOutputReference <a name="DataCatalogTagTemplateIamMemberConditionOutputReference" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { dataCatalogTagTemplateIamMember } from '@cdktf/provider-google'

new dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberCondition">DataCatalogTagTemplateIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCatalogTagTemplateIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplateIamMember.DataCatalogTagTemplateIamMemberCondition">DataCatalogTagTemplateIamMemberCondition</a>

---



